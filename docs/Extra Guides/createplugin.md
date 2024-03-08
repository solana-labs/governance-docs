---
sidebar_position: 21
---

# 🟨 Create a Voter Weight Plugin

## What is a Voter Weight Plugin?

Realms is designed to be _modular_, allowing for the addition of _plugins_
that can modify the voter weight of members in a DAO.

By default, the voter weight of a member is equal to the number of tokens they hold.

However, if a DAO enables a plugin, the voter weight of a member can be modified.

Example plugins are:
- [Quadratic Voting](qv.md): The voter weight of a member is proportional to the square root of the number of tokens they hold.
- [Voter Stake Registry](VSR/vsrsetup.md): A voter's weight can be increased by locking tokens.
- [NFT](../DAO Guides/NFT DAO/nftdao.md): The voter weight of a member is proportional to the number and type of NFTs they hold.

## How to Create a Voter Weight Plugin

There are two parts to creating a voter weight plugin:

1. The on-chain program
2. The JS/TS client

Plugins are stored in the [Goverance Program Library](https://github.com/solana-labs/governance-program-library), where you can see example plugins.

### Part 1 - The Plugin Program

The plugin program is a Solana program that modifies the voter weight of a member.

It defines the following main account types:

1. The `Registrar`

This associates a plugin with a realm, and stores any configuration data that this plugin uses.

2. The Voter Weight Record (VWR)

This is a record that stores the voter weight of a member according to this plugin.
It is updated before each vote and passed in as the voter weight to the voting instruction.

The SPL-Governance program checks that the program ID of the VWR matches the expected program ID for
the governance, as well as checking that it is up to date.

3. The Maximum Voter Weight Record (Max VWR) (Optional)

This record is used in the case where the plugin does not just modify a single voter's weight,
but also the total maximum votes of a realm. An example is an NFT DAO where the total maximum votes
depends on the number and type of all NFTs in a collection.

#### Sample Registrar Account

```rust
pub struct Registrar {
    /// spl-governance program the Realm belongs to
    pub governance_program_id: Pubkey,

    /// Realm of the Registrar
    pub realm: Pubkey,

    /// Governing token mint the Registrar is for
    /// It can either be the Community or the Council mint of the Realm
    pub governing_token_mint: Pubkey,

    /// If the plugin is one in a sequence, this is the previous plugin program ID
    /// If set, then update_voter_weight_record will expect a voter_weight_record owned by this program
    pub previous_voter_weight_plugin_program_id: Option<Pubkey>,
    
    /// ...add your configuration here

    /// Reserved for future upgrades
    pub reserved: [u8; 128],
}
```

#### Voter Weight Record

The structure of a Voter Weight record is fixed by the SPL-Governance program. 
See [here](https://github.com/solana-labs/solana-program-library/blob/master/governance/addin-api/src/voter_weight.rs) for its structure.

#### Instructions

Your program is expected to have instructions to create and update the voter weight record.

These will be called by your JS/TS client.

### Part 2 - The JS/TS Client

The JS/TS client is a JS plugin for the Realms UI, allowing the UI to interact with your plugin program
at voting time, and when a user joins a DAO.

The client must implement the [Client interface](https://github.com/solana-labs/governance-program-library/blob/master/src/common/Client.ts) in governance-program-library.

The client provides implementations for
- creating and updating voter weights and max voter weights,
- creating and configuring registrars, and
- calculating the current voter weight

### Integrating with Realms

Once you have a program and client, you can integrate your plugin with Realms as follows:

1. Import it into [Governance UI](https://github.com/solana-labs/governance-ui)
2. Register it in [VoterWeightPlugins/clients/index.ts](https://github.com/solana-labs/governance-ui/blob/master/VoterWeightPlugins/clients/index.ts)
3. List it in [VotingStructureSelector/index.tsx](https://github.com/solana-labs/governance-ui/blob/master/hub/components/EditRealmConfig/VotingStructureSelector/index.tsx) and [constants/plugins.ts](https://github.com/solana-labs/governance-ui/blob/master/constants/plugins.ts) to ensure it appears in the list of plugins when editing a DAO.
4. Define any optional UI components as needed

## Voter Weight Plugin Chaining

Realms supports chaining of voter weight plugins. This means that a voter's weight can be modified by multiple plugins
in order.

Plugins are structured like a linked-list, where each plugin registrar has a reference to the previous plugin program ID.
The final plugin program ID is registered against the governance on the realm.

When a voter weight is calculated, the Realms UI will call the `update_voter_weight_record` instruction on each plugin in order.
The resultant voter weight record account should have the program ID of the final plugin program ID, and this will be checked
by the SPL-Governance program.

To support plugin chaining in your plugin:
- Ensure that your plugin registrar has a `previous_voter_weight_plugin_program_id` field
- Ensure that your `update_voter_weight_record` instruction includes an `input_voter_weight_record` account
- Verify that the `input_voter_weight_record` account has the program ID that matches the `previous_voter_weight_plugin_program_id` field

For examples of chainable plugins, see the Civic Pass and Quadratic plugins
in the [Governance Program Library](https://github.com/solana-labs/governance-program-library).