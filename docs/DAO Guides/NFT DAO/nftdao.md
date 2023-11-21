---
sidebar_position: 7
---

# 🔲 Create a NFT Community DAO

## DAO Creation

**NFT Community DAO** is a **DAO** where NFTs are used as the governance token. Any DAO can enable NFT voting through the `Plug & Play` mechanism of [**`spl-governance`**](https://github.com/solana-labs/solana-program-library/blob/master/governance/README.md).

In order to enable NFT governance for a DAO the [**`NFT voting plugin`**](https://github.com/solana-labs/governance-program-library) has to be enabled for the **DAO**.

The NFT voting plugin grants governance power to NFTs based on the [**Metaplex Certified Collection**](https://www.metaplex.com/posts/certified-collections) they belong to.&#x20;

:::info
**Metaplex** supports certified collections from **version 1.1** of the standard.

NFTs minted with the older Metadata standard must be upgraded first to the **latest version** before they can be used for governance.
:::

In the most basic scenario each NFT gives its owner **1 vote**. The owner can have multiple NFTs and vote with all of them at once.\

A **DAO** can also use more advanced scenarios where multiple collections with different voting power are used. This way a multi tier governance structure can be created where different NFTs can represent different membership levels.

Only NFTs with **certified collection** on their metadata can participate in governance.

:::danger
Beware the **authority** of the collection can certify and uncertify NFTs for the collection.

It means it has the **ultimate power** to decide who can and can't vote in the **DAO**. It's recommended for the **authority** to be transferred to the **DAO**.
:::

:::info Youtube Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/sLQMMWsrXWM?si=bBiH3EhQXZ8J74ap" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

### Step 1 - Selection

Go to [**Realms**](https://app.realms.today/realms) and connect your wallet in the top right corner by clicking on **`Sign in with Solana`**.

![](https://paragraph.xyz/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpapyrus_images%2Fec38b3e9dcca7e83e29bdb3a12570155.png&#x26;w=1080&#x26;q=75)

Click on **`Create DAO`** button and the following wizard will be shown, in our case we will select **NFT Community DAO**:

![](https://paragraph.xyz/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpapyrus_images%2F39107618c738116b8b2d0713a6637cb7.png&#x26;w=1080&#x26;q=75)

### Step 2 - Name

Your **DAO** needs a name, so now is the time to choose one. We will use [**SMB Collection**](https://opensea.io/collection/solana-monkey-business) as an example in this walkthrough.

![](https://paragraph.xyz/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpapyrus_images%2F872f88c484d981be8084897b2a99df2e.png&#x26;w=1080&#x26;q=75)

:::info
Realms will provide a governance program ID by **default**, users can add their own customer Program ID under **`Advanced Options`** at this step in the community token **DAO** wizard.
:::

### Step 3 - NFT Collection

In this step, you will need to add the address of the **NFT Collection** you wish to use for voting.

:::tip
The **collection ID** can be found on the NFT explorer view. For example for [Dean's List](https://explorer.solana.com/address/B5DeZ7s9FLmSMMftwFNtbSWKACW7EjHDh4caYV3oFKks) NFT the collection id is **`5FusHaKEKjfKsmQwXNrhFcFABGGxu7iYCdbvyVSRe3Ri`**
:::

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FLrfTtjrHZVVZGamHHoBT%2FScreenshot_886.png?alt=media&token=92b501f6-48b6-4eab-8468-512dd73c0c93)

![](https://paragraph.xyz/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpapyrus_images%2F8b0e989bee931a4e6d6925c09d99dba2.png&#x26;w=1080&#x26;q=75)

:::danger
It is important to ensure that the collection is [**certified by the Metaplex standard**](https://docs.metaplex.com/programs/token-metadata/certified-collections) since it only possible to procced to the next step if the collection is **certified**.

This certification ensures that the collection has been verified as authentic and meets the required standards for governance.
:::

Once you have added the collection address, you will also need to input the number of NFTs in the collection. It's **important** to be as accurate as possible with this number, as it is used to calculate the number of votes needed for a proposal to pass.

### Step 4 - Approval Treshold

Finally, you will need to adjust the percentage of the total NFT supply that is required for a proposal to pass. By default, the threshold is set to **60%**, but you can adjust this based on the needs of your DAO.

For example, if the approval threshold is set at **60%**, this means that a proposal needs to receive **60%** or more "**yes**" votes to be approved. If the proposal receives less than **60%** "**yes**" votes, it will not be **approved**.

**DAOs** can set their own approval thresholds, and they can vary depending on the context and the specific rules of the **DAO**. In some **DAOs**, the approval threshold may be set very high to ensure that decisions are only made with a broad consensus, while in other **DAOs**, the approval threshold may be set lower to allow for more flexibility in decision making.

### Step 5 - DAO Council

In this step you will be able to **create** or **use an existing token** for the DAO's council.

If the your DAO's Council have an existing token select "**Yes**" and provide the address of the token you would like to use. If the your DAO's doesn't have an existing token select "**No**" and skip to the next step.

:::info
**Realms** will automatically say if the token address is **correct** or **not**.
:::

![](https://paragraph.xyz/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpapyrus_images%2Ffe5f70e0cbf03273d501f4787c0e8f0c.png&#x26;w=1080&#x26;q=75)

Whether to create a new token for the **DAO** council or use an existing token depends on the specific **goals**, **structure**, and **context of your DAO**. Here are some factors to consider:

* **Purpose and utility:** If the existing token already serves the **DAO's** purpose and aligns with its goals, using it for the council can streamline governance. However, if a new token can provide additional utility or better align with the **DAO's** objectives, creating a new one may be beneficial.
* **Token distribution:** If the existing token's distribution is fair and representative of the community, it may be suitable for the **DAO** council. Otherwise, a new token might be necessary to ensure broader and more balanced representation.
* **Community engagement:** Using an existing token can leverage the existing community and its interest, while a new token might attract a fresh audience and foster new engagement.
* **Economic factors:** Consider the potential impact on token value, inflation, and overall token economics when deciding between using an existing token or creating a new one.

### Step 6 - Council Members Invitiation

In this step you will be able to invite council members to the **DAO** by using their Solana wallet address.

![](https://paragraph.xyz/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpapyrus_images%2Fae8e73ccfaed2ab122aa38a4eaec5112.png&#x26;w=1080&#x26;q=75)

:::info
Council members can supervise and moderate **DAO** activities.

It’s recommended to always create the council for **DAOs** in their incubation stage to prevent **governance attacks** or **accidental losses** of assets managed by the **DAO**.
:::

### Step 7 - DAO Council Approval Threshold

In this step you will be able to invite council members to the DAO by using their Solana wallet address.

![](https://paragraph.xyz/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpapyrus_images%2F0ac87898ffc296499bd137a654e194b1.png&#x26;w=1080&#x26;q=75)

:::warning
Starting with a lower approval threshold can provide easier **decision-making** and **flexibility**, but may also risk power concentration and susceptibility to attacks.

The ideal threshold depends on the **DAO's** goals, community needs, and balance between efficiency, decentralisation, and security.

The specific threshold will depend on the goals and characteristics of the **DAO** and its community. It can also be adjusted over time based on feedback.
:::

### Step 8 - Review

![](https://paragraph.xyz/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpapyrus_images%2F82fd33131196d843ef768623810d0f37.png&#x26;w=1080&#x26;q=75)

:::warning
Make sure to review all info and **double check** if everything is correct.
:::

:::info
After the transaction is complete, you'll be redirected to the **DAO**'s page.
:::

:::tip
In need of **help**? Hop on on [**Realms Discord**](https://discord.com/invite/VsPbrK2hJk) and ask away your questions!
:::