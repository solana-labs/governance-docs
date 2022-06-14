---
sidebar_position: 4
---

# Create an NFT Community DAO

:::danger Security Warning
As of 2022-04-29 the NFT voting plugin program hasn't been audited to ensure security.

**Use at your own risk.**
:::

An NFT Community DAO is a DAO where NFTs are used as the governance token.
Any DAO can enable NFT voting through the Plug & Play mechanism of [spl-governance](https://github.com/solana-labs/solana-program-library/blob/master/governance/README.md).

In order to enable NFT governance for a DAO the [NFT voting plugin](https://github.com/solana-labs/governance-program-library) has to be enabled for the DAO.

The NFT voting plugin grants governance power to NFTs based on the [Metaplex Certified Collection](https://www.metaplex.com/posts/certified-collections) they belong to.
In the most basic scenario each NFT gives its owner 1 vote. It is possible for someone to have multiple NFTs and vote with all of them at once.

A DAO can also use more advanced scenarios where multiple collections with different voting powers are used. This way a multi-tier governance structure can be created where different NFTs can represent different membership levels.

:::caution Note
Metaplex supports certified collections from version 1.1 of the standard.
NFTs minted with the older Metadata standard must be upgraded first to the latest version before they can be used for governance.
:::

Only NFTs with certified collection on their Metadata can participate in governance.

:::danger Note about authority
Beware the authority of the collection can certify and uncertify NFTs for the collection.
This means it has the ultimate power to decide who can and can't vote in the DAO.
To avoid issues related to voting power, it's recommended for the authority to be transferred to the DAO.
:::

---

## Create Your DAO

:::tip DAO already created?
If you have already created your DAO you can skip this section.
However please take note of the DAO parameters needed for the setup and adjust your DAO configuration accordingly.
:::

In order to create the NFT Community DAO use the [Bespoke DAO Wizard](bespoke-DAO.md) with the following parameters:

**Min community tokens to create proposal** - Set to 1 to allow each NFT holder to create new governances.
If more restrictive setup is required the min threshold can be set to a higher value accordingly.

**Custom program Id** - Use the default instance of `spl-governance` or an instance with a version of v2.2.4 or higher.

:::danger Version warning
spl-governance program version **must** be v2.2.4 or higher for the NFT plugin to work correctly. If the plugin is enabled for older versions it can result in irreversible deadlock of the DAO.
:::

**Council** - Setup a DAO with a council.

:::tip Pro Tip
It's recommended to always setup the council as a Multisig for the initial DAO members.
The members would be able to moderate the DAO governance process at its inception and prevent irreversible actions like setting impossible quorums or defending the DAO from governance attacks. After successful decentralization the council can be removed thorough
a proposal.
:::

---

## Configure the NFT Voting Plugin

In order to configure the NFT Plugin a proposal with the following 3 instructions must be created.  
**Note: The proposal must be created for the governance with realm authority.**

1. Create NFT plugin registrar

![create-NFT-plugin-registrar](/img/NFT-Community-DAO/create-NFT-plugin-registrar.png)

2. Create NFT plugin max voter weight

![create-NFT-plugin-max-voter-weight](/img/NFT-Community-DAO/create-NFT-plugin-max-voter-weight.png)

3. Configure NFT plugin collection

![configure-NFT-plugin-collection](/img/NFT-Community-DAO/configure-NFT-plugin-collection.png)

The NFT collection configuration instruction must be added for every NFT collection which will be allowed to participate in governance of the DAO.

Each NFT collection has the following parameters:

**Collection size** - The number of certified NFTs in the collection. The size of the collection is used to calculate the maximum voter weight and voting quorum levels.

**Collection weight** - The relative voting weight of the NFTs from the collection. If you are using multiple collections you can assign different voting weights to different NFTs and create a multi-NFT / multi-tier governance setup.
For a single collection it should be set to 1.

**Collection** - The Id of the NFT collection which should be used for governance.

:::tip
The collection ID can be found on the NFT explorer view. For example, with [SMB NFT](https://explorer.solana.com/address/Fckuc1pnqQxsMMa3R8Smccz2iS5YQBeos7pG7xV4B1Ma) the collection id is `SMBH3wF6baUj6JWtzYvqcKuj2XCKWDqQxzspY12xPND`

![smb-633-explorer-view](/img/NFT-Community-DAO/smb-633-explorer-view.png)
:::

## Enable NFT Voting Plugin

Once the NFT voting plugin configuration proposal has been voted on and all instructions have been executed the DAO can enable NFT governance
through a `DAO Config Change` proposal.

Navigate to the DAO 'Params' page and select `Change Config` option:

![DAO-config-change](/img/NFT-Community-DAO/DAO-config-change.png)

Set the DAO configuration parameters:

:::tip Note
Both **`Community voter weight addin`** and **`Community max voter weight addin`** parameters should be set to the NFT Voting Plugin Program Id `GnftV5kLjd67tvHpNGyodwWveEKivz3ZWvvE3Z4xi2iw`
:::

![enable-NFT-voting-plugin](/img/NFT-Community-DAO/enable-NFT-voting-plugin.png)

## Voting with NFTs

Once the proposal to enable the NFT Voting Plugin for the DAO has been executed any owner of an NFT from the configured collection can participate in the DAO governance.

The NFTs eligible for governance are displayed in the account view.

![your-NFTs.png](/img/NFT-Community-DAO/your-NFTs.png)

:::info Voting
Before you can vote in the DAO you have to register your wallet with the DAO.
:::
