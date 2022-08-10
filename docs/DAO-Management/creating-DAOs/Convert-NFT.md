---
sidebar_position: 5
---

# Convert existing DAO to NFT Community DAO

NFT Community DAO is a DAO where NFTs are used as the governance token.
Any DAO can enable NFT voting through the Plug & Play mechanism of [spl-governance](https://github.com/solana-labs/solana-program-library/blob/master/governance/README.md).

In order to enable NFT governance for a DAO the [NFT voting plugin](https://github.com/solana-labs/governance-program-library) has to be enabled for the DAO.

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

## When to use

Reference these docs to convert existing community token DAOs to NFT community DAOs

## Configure NFT Voting Plugin

In order to configure the NFT Plugin a proposal with the following 3 instructions must be created.  
Note: The proposal must be created for the governance with realm authority.

1. Create NFT plugin registrar

![create-NFT-plugin-registrar](/img/NFT-Community-DAO/create-NFT-plugin-registrar.png)

2. Create NFT plugin max voter weight

![create-NFT-plugin-max-voter-weight](/img/NFT-Community-DAO/create-NFT-plugin-max-voter-weight.png)

3. Configure NFT plugin collection

![configure-NFT-plugin-collection](/img/NFT-Community-DAO/configure-NFT-plugin-collection.png)

The NFT collection configuration instruction must be added for every NFT collection which should be allowed
to participate in governance of the DAO.  

Each NFT collection has the following parameters:

**`Collection size`** - The number of certified NFTs in the collection. The size of the collection is
used to calculate the maximum voter weight and voting quorum levels.

**`Collection weight`** - The relative voting weight of the NFTs from the collection.  
In multi collection setup it allows to
assign different voting weights to different NFTs and create multi NFT / multi tier governance setup.
For a single collection it should be set to 1

**`Collection`** - The Id of the NFT collection which should be used for governance.  

:::tip
The collection ID can be found on the NFT explorer view. For example for [SMB NFT](https://explorer.solana.com/address/Fckuc1pnqQxsMMa3R8Smccz2iS5YQBeos7pG7xV4B1Ma) the  collection id is `SMBH3wF6baUj6JWtzYvqcKuj2XCKWDqQxzspY12xPND`

![smb-633-explorer-view](/img/NFT-Community-DAO/smb-633-explorer-view.png)
:::

## Enable NFT Voting Plugin

Once the NFT voting plugin configuration proposal is voted on and all instructions executed the DAO can enable NFT governance
through a `DAO Config Change` proposal.

From the DAO parameters page select `Change Config` option 

![DAO-config-change](/img/NFT-Community-DAO/DAO-config-change.png)

And then set the DAO configuration parameters

Both **`Community voter weight addin`** and **`Community max voter weight addin`** parameters should be set to 
the NFT Voting Plugin Program Id `GnftV5kLjd67tvHpNGyodwWveEKivz3ZWvvE3Z4xi2iw`

![enable-NFT-voting-plugin](/img/NFT-Community-DAO/enable-NFT-voting-plugin.png)



## Voting with NFTs

Once the proposal to enable the NFT Voting Plugin for the DAO is executed any owner of an NFT from the configured
collection can participate in the DAO governance.

The NFTs eligible for governance are displayed in the account view.  

![your-NFTs.png](/img/NFT-Community-DAO/your-NFTs.png)

Note: Before you can vote in the DAO you have to register your wallet with the DAO. Visit this step by step tutorial here https://www.youtube.com/watch?v=yIAwmuE74dI&t=73s