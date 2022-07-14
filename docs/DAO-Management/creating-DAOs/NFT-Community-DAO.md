---
sidebar_position: 4
---

# Create NFT Community DAO

NFT Community DAO is a DAO where NFTs are used as the governance token.

The NFT voting plugin grants governance power to NFTs based on the [Metaplex Certified Collection](https://www.metaplex.com/posts/certified-collections) they belong to.
In the most basic scenario each NFT gives its owner 1 vote. The owner can have multiple NFTs and vote with all of them at once.  
A DAO can also use more advanced scenarios where multiple collections with different voting power are used.
This way a multi tier governance structure can be created where different NFTs can represent
different membership levels.

Only NFTs with certified collection on their Metadata can participate in governance.

:::danger Security
Beware the authority of the collection can certify and uncertify NFTs for the collection.
It means it has the ultimate power to decide who can and can't vote in the DAO.
It's recommended for the authority to be transferred to the DAO.
:::

## Create DAO

**Click on `Create DAO` on the home page and option and the following wizard will be shown:**

![multisiformempty](https://user-images.githubusercontent.com/22420711/178862160-75a2bd5a-133e-47a2-a487-9b7ad6f66137.png)

**Click on the `Community Token DAO` option**

**Name your wallet**

![multisigformname](https://user-images.githubusercontent.com/22420711/179073700-4f80df39-657c-48e0-b40b-04186a52624e.png)

:::tip
Realms will provide a governance program ID by default, users can add their own customer Program ID under Advanced Options at this step in the multisig wallet wizard.
:::

**Select your NFT collection from your wallet or input your collection address**

![multisigformname](https://user-images.githubusercontent.com/22420711/179074587-61f5122a-24be-49af-bdc9-4f712038c2e5.png)

**Select the total number of NFTs in the collection and the approval threshold to pass a proposal**

![multisigformname](https://user-images.githubusercontent.com/22420711/179075252-1032e31d-79e5-449c-9c89-ec3126c6bb3d.png)

### The Council

This will guide you to setup the council settings. This step is optional if you import your community token. It is mandatory if you are having realms create your community token. This is to ensure easy setup for initial governance rules. Here you have the ability to import other council tokens or create new ones. Council members can supervise and moderate DAO activities. It’s recommended to always create the council for DAOs in their incubation stage to prevent governance attacks or accidental losses of assets managed by the DAO.

![multisigformname](https://user-images.githubusercontent.com/22420711/179075601-2bcb0e47-fef4-4dd1-8f7f-d8db92bec0b0.png)

**After following this steps, you should have something like the image below:**

![multisigformname](https://user-images.githubusercontent.com/22420711/179075952-74bd47ce-d1f5-4e7b-a8bd-00f2763883e8.png)

**Then just click `Create NFT Community DAO`, your wallet will pop up asking for signature. Approve to create the tokens and deploy the DAO.**

After the transaction is complete, you'll be redirected to the DAO's page.
