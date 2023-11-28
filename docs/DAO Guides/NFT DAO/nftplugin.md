---
sidebar_position: 8
---

# 🔲 Configure NFT Voting Plugin and Enable NFT Voting Plugin

**NFT Community DAO** is a **DAO** where NFTs are used as the governance token. Any DAO can enable NFT voting through the `Plug & Play` mechanism of [**`spl-governance`**](https://github.com/solana-labs/solana-program-library/blob/master/governance/README.md).

In order to enable NFT governance for a DAO the [**`NFT voting plugin`**](https://github.com/solana-labs/governance-program-library) has to be enabled for the **DAO**.

The NFT voting plugin grants governance power to NFTs based on the [**Metaplex Certified Collection**](https://www.metaplex.com/posts/certified-collections) they belong to.&#x20;

:::info
**Metaplex** supports certified collections from **version 1.1** of the standard.

NFTs minted with the older Metadata standard must be upgraded first to the **latest version** before they can be used for governance.
:::

In the most basic scenario each NFT gives its owner **1 vote**. The owner can have multiple NFTs and vote with all of them at once.

A **DAO** can also use more advanced scenarios where multiple collections with different voting power are used. This way a multi tier governance structure can be created where different NFTs can represent different membership levels.

Only NFTs with **certified collection** on their metadata can participate in governance.

:::danger
Beware the **authority** of the collection can certify and uncertify NFTs for the collection.

It means it has the **ultimate power** to decide who can and can't vote in the **DAO**. It's recommended for the **authority** to be transferred to the **DAO**.
:::

1. **Create DAO:**

If you already have your DAO created, you can skip this section. However, please take note of the DAO parameters needed for the setup and adjust your DAO configuration accordingly. To create the NFT Community DAO, use the Bespoke DAO Wizard with the following parameters:

* **`Min community tokens to create proposal`**: Set to 1 to allow each NFT holder to create new governances. If a more restrictive setup is required, the min threshold can be set to a higher value accordingly.
* **`Custom program Id`**: Use the default instance of **`spl-governance`** or an instance with a minimum **version of v2.2.4**.

:::danger
spl-governance program version must be equal or higher than **v2.2.4** for the NFT plugin to work correctly.

If the plugin is enabled for **older versions** it can result in irreversible deadlock of the **DAO**.
:::

* **`Council`**: Setup a DAO with the council.

:::info
It's recommended to always set up the council as a Multisig for the initial DAO members. The members would be able to moderate the DAO governance process at its inception and prevent irreversible actions like setting impossible quorums or defending the DAO from governance attacks. After successful decentralization, the council can be removed through a proposal​.
:::

2. **Configure NFT Voting Plugin:**

To configure the NFT Plugin, a proposal with the following 3 instructions must be created:

* Create NFT plugin registrar.

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2F6byRZsJENCbe9P869rP3%2FScreenshot_883.png?alt=media&token=b417fcce-a36f-4ee5-a496-1a9f8dc90f0e)

* Create NFT plugin max voter weight.

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FiDzl7Afb3aLUA2GnoooX%2FScreenshot_884.png?alt=media&token=ab754e24-66b8-44fc-993d-5aaaa3e27189)

* Configure NFT plugin collection.

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FVAixsi6brTWDH7GZJxsr%2FScreenshot_885.png?alt=media&token=b8b699a8-1917-440a-9e2c-018fedf13a0e)

The NFT collection configuration instruction must be added for every NFT collection which should be allowed to participate in governance of the **DAO**. Each NFT collection has the following parameters:

* **`Collection size`**: The number of certified NFTs in the collection. The size of the collection is used to calculate the maximum voter weight and voting quorum levels.
* **`Collection weight`**: The relative voting weight of the NFTs from the collection.
* **`Collection`**: The Id of the NFT collection which should be used for governance​.

:::tip
The **collection ID** can be found on the NFT explorer view. For example for [Dean's List](https://explorer.solana.com/address/B5DeZ7s9FLmSMMftwFNtbSWKACW7EjHDh4caYV3oFKks) NFT the collection id is **`5FusHaKEKjfKsmQwXNrhFcFABGGxu7iYCdbvyVSRe3Ri`**
:::

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FLrfTtjrHZVVZGamHHoBT%2FScreenshot_886.png?alt=media&token=92b501f6-48b6-4eab-8468-512dd73c0c93)

3. **Enable NFT Voting Plugin:**

Once the NFT voting plugin configuration proposal is voted on and all instructions executed, the DAO can enable NFT governance through a **`DAO Config Change`** proposal.

From the **DAO** parameters page, select **`Change Config`** option or create a **`Proposal`** directly.

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FaB0ZHshaSG86RagXILDj%2FScreenshot_887.png?alt=media&token=63922a8e-ea97-40d4-ac3e-bd4b40708612)

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FQmBRqoHlPO0ZaAV9xftM%2FScreenshot_889.png?alt=media&token=61e7c7d1-6bec-4665-af00-a45cdbdc5c9f)

And then set the **DAO** configuration parameters.

Both **`Community voter weight addin`** and **`Community max voter weight addin`** parameters should be set to the NFT Voting Plugin Program Id:

**`GnftV5kLjd67tvHpNGyodwWveEKivz3ZWvvE3Z4xi2iw`**

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FtmxYk7Yb0BAj6PyTaEuL%2FScreenshot_888.png?alt=media&token=a68773c9-ef55-4357-a35c-153a55a91d37)

4. **Voting with NFTs:**

Once the proposal to enable the NFT Voting Plugin for the **DAO** is executed, any owner of an NFT from the configured collection can participate in the **DAO** governance.

The NFTs eligible for governance are displayed in the account view.

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FvntgqEQClcssc4kTQRs1%2F1112323232.png?alt=media&token=396a1635-f118-4d87-932c-c08f9839043e)

:::tip
In need of **help**? Hop on on [**Realms Discord**](https://discord.com/invite/VsPbrK2hJk) and ask away your questions!
:::