# 🤿 Governance UI

## Governance UI

You most likely use the web-based UI as the primary point of interaction with the SPL Governance program. Therefore, we will conclude this article with a brief overview of the discussed concepts in the context of the UI.

### Creating a Realm

When you navigate to [**the Realms page**](https://app.realms.today/) , you can see the list of existing realms. Clicking on the **`Create DAO`** button presents you with three options to choose from:

<figure><img src="https://i.imgur.com/CUtuYeS.png" alt=""><figcaption></figcaption></figure>

All three options present a walkthrough wizard where different default parameters are predefined, and a different set of parameters has to be provided. The **`Multi-Signature`** wallet option creates a **`Realm`** where only the council is expected to vote, and the community is not enabled. The **`NFT Community DAO`** option creates a **`Realm`** where voting power comes from ownership of NFTs. It is a voter weight plugin that provides functionality for voting power calculation. The **`Community Token DAO`** is meant for community-driven **DAOs** where both the **`council`** and **`community`** are enabled.

When a **`Realm`** is created, the main Realm configuration page is presented. When you change some config, it is usually done via a configuration page that ends up creating a **`proposal`**. The proposal is a usual way to change the configuration of **`Realm`** and **`Governance`**.

<figure><img src="https://i.imgur.com/sqNzAmv.png" alt=""><figcaption></figcaption></figure>

Let's discuss the most important parts of the UI:

1. **My governance power**\
   \
   After connecting the wallet, the user can deposit tokens to the **`Realm`** and manage their delegation of voting power, withdraw tokens, and check on their created proposals. The **`My Proposals`** button shows proposals that the token owner has voted for, including active and unrelinquished ones. The menu names the _unrelinquished proposals_ as **`Unreleased Proposals`**. To withdraw tokens, the user has to to relinquish all proposals (i.e., the **`Release All`** button). Even for finished proposals, the user has to do the **`unrelinquish`** action to withdraw tokens.

<figure><img src="https://i.imgur.com/8mVDLoR.png" alt=""><figcaption></figcaption></figure>

2. **Params**\
   \
   This section shows the parameters of the **`Realm`** and allows for changes. The user can change the configuration of the **`Realm`** (stored in **`RealmConfigAccount`**) in the top right corner by clicking on **`Config -> Change Config`**. All **`Governance`** instances are listed below, and the voting settings can be changed by clicking on the **`Change Config`** button. There are other tabs on the right side of the list of **`Governance`** instances, including **`Accounts`**, where the user can list all related accounts to the Governance. The **`Accounts`** tab lists the **`native treasury`** wallet, ATA token wallets managed by the governance, and program accounts or a mint, if available.

<figure><img src="https://i.imgur.com/zpZDZfK.png" alt=""><figcaption></figcaption></figure>

3. **DAO Wallets**

This section provides a different perspective on the **`Governance`** accounts. Importantly, the user can create a new Governance instance by clicking on the **`New DAO wallet`** button. The list below the button represents the addresses of the **`native treasury`** wallets (every **`Governance`** has one). To add an asset to a wallet, the user can click on the **`Add Asset`** button on the right side. A new token account can be created. The tabs on the right side of the list of **`native treasury`** addresses show a list of processed transactions. The `Rules` tab provides a way to change **`Governance`** parameters (similar to the **`Params`** subpage), and the **`Treasury`** and **`NFTs`** tabs provide information about the assets.

<figure><img src="https://i.imgur.com/OyBbMo4.png" alt=""><figcaption></figcaption></figure>

4. **Programs**

This section allows the user to manage the **`upgrade authority`** of programs and do code upgrades. The **`New program`** button creates a new program type **`Governance`** (see _Different types of governances_) and takes over management power for the program.

<figure><img src="https://i.imgur.com/i9NSlMX.png" alt=""><figcaption></figcaption></figure>

5. **New proposal**

The last section we will touch on is the **`New proposal`** screen. Here, the user can create a new proposal that can be chosen from a list of common proposals (such as mint token, transfer, etc.) or pass a base64-encoded transaction as a proposal. The switch **`Vote by council`** defines if the proposal will be created as a council or community proposal (a council proposal is voted on only by the council and vice versa). At **`Preview transaction`** button, the user can check the instruction by simulating it. The **`Add proposal`** button then creates a new proposal that is eventually listed on the main configuration page.

<figure><img src="https://i.imgur.com/XkXKinc.png" alt=""><figcaption></figcaption></figure>

## Conclusion

In this article, we have discussed the SPL Governance Program and its main concepts. We have also touched on the UI and its main features. We hope that this article will help you understand the SPL Governance Program better.
