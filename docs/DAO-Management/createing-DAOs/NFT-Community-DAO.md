---
sidebar_position: 4
---

# Create NFT Community DAO

NFT Community DAO is a DAO where NFTs are used as the governance token.
Any DAO can enable NFT voting through the Plug & Play mechanism of [spl-governance](https://github.com/solana-labs/solana-program-library/blob/master/governance/README.md).

In order to enable NFT governance for a DAO the [NFT voting plugin](https://github.com/solana-labs/governance-program-library) has to be enabled for the DAO.

:::danger Security
As of 29/04/2022 the NFT voting plugin program hasn't been security audited yet. Use at your own risk.
:::

The NFT voting plugin grants governance power to NFTs based on the [Metaplex Certified Collection](https://www.metaplex.com/posts/certified-collections) they belong to.
In the most basic scenario each NFT gives its owner 1 vote. The owner can have multiple NFTs and vote with all of them at once.  
A DAO can also use more advanced scenarios where multiple collections with different voting power are used.
This way a multi tier governance structure can be created where different NFTs can represent
different membership levels.

:::tip Note
Metaplex supports certified collections from version 1.1 of the standard.
NFTs minted with the older Metadata standard must be upgraded first to the latest version before they can be used for governance.
:::

Only NFTs with certified collection on their Metadata can participate in governance.

:::danger Security
Beware the authority of the collection can certify and uncertify NFTs for the collection.
It means it has the ultimate power to decide who can and can't vote in the DAO.
It's recommended for the authority to be transferred to the DAO.
:::

## Create DAO

If you have your DAO already created you can skip this section,
but please note the DAO parameters needed for the setup and adjust your DAO configuration accordingly.

In order to create the NFT Community DAO use the [Bespoke DAO Wizard](bespoke-DAO.md) with the following parameters:

**`Min community tokens to create proposal`** - Set to 1 to allow each NFT holder to create new governances.
If more restrictive setup is required the min threshold can be set to a higher value accordingly.

**`Custom program Id`** - Use the default instance of `spl-governance` or an instance with minim version of v2.2.4

:::danger
spl-governance program version must be equal or higher than v2.2.4 for the NFT plugin to work correctly.
If the plugin is enabled for older versions it can result in irreversible deadlock of the DAO.
:::

**`Council`** - Setup a DAO with the council.

:::tip
It's recommended to setup the council as a Multisig for the initial DAO members.
The members would be able to moderate the DAO governance process at its inception and prevent
any irreversible actions like setting impossible quorums or defending the DAO from governance attacks.  
After successful decentralization the council can be removed thorough a proposal.
:::