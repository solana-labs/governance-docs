---
sidebar_position: 3
---

# Create a Community Token DAO

When you choose to create a community DAO, we assume that you're an advanced user who understands all the governance setup details and we present you a more complex and flexible form than the multisig DAO.

So let's create a Community DAO:

---

**Click on `Create DAO` on the home page and option and the following wizard will be shown:**

![multisiformempty](https://user-images.githubusercontent.com/22420711/178862160-75a2bd5a-133e-47a2-a487-9b7ad6f66137.png)

**Click on the `Community Token DAO` option**

**Name your wallet**

![multisigformname](https://user-images.githubusercontent.com/22420711/179025138-518b96aa-64cb-430f-a597-7ba22a369bb8.png)

:::tip
Realms will provide a governance program ID by default, users can add their own customer Program ID under Advanced Options at this step in the multisig wallet wizard.
:::

**Determine the DAO's community token**

**Place the `Community Token Mint`** if you have one, and if not, it will be generated for you. The community token mint is the token that will be used by the community to vote on proposals and it is required to create a governance.
    When you put the community token mint, a switch `Transfer Authority` will show up. If checked, it will transfer the authority of the community token to the realm.

**Min community tokens to create governance:** this field represents that to create a governance, there should be at least `N%` of the max supply of the tokens minted, being 1% the default value for tokens with supply bigger than 0. If the supply is 0, then this value will be set to `1000000` by default.

:::tip
Realms provides the ability to determine the votes needed to pass a proposal by calculating the number of tokens in circulation (instead of using the total Mint supply) , users can do this under Advanced Options at this step in the Community Token DAO wizard.
:::

![multisigformname](https://user-images.githubusercontent.com/22420711/179033113-bfb2f48a-f1c8-403d-9c35-07b3029dbd4c.png)

![multisigformname](https://user-images.githubusercontent.com/22420711/179033254-4917cd81-c931-40bb-9858-1a01a1cb917e.png)

**Select the minimum percentage of `yes votes` to approve a proposal. The default is 60%**

![multisigformname](https://user-images.githubusercontent.com/22420711/179034017-03bd93cf-2c46-4601-9af9-6cb4e8c9489d.png)

---

### The Council

This will guide you to setup the council settings. This step is optional if you import your community token. It is mandatory if you are having realms create your community token. This is to ensure easy setup for initial governance rules. Here you have the ability to import other council tokens or create new ones. Council members can supervise and moderate DAO activities. It’s recommended to always create the council for DAOs in their incubation stage to prevent governance attacks or accidental losses of assets managed by the DAO.

![multisigformname](https://user-images.githubusercontent.com/22420711/179035193-1a3cca8e-4c23-469b-9cd0-a8132ac6c32c.png)

**Invite Members**

Input solana addresses to add members to the Community Token DAO

![multisigformname](https://user-images.githubusercontent.com/22420711/179035734-95c36450-c0c9-416d-9947-a40c715b43fa.png)

**After following thes steps, you should have something like the image below:**

![multisigformname](https://user-images.githubusercontent.com/22420711/179036613-8f6431f2-0943-411c-bb73-30c91bd3ee7d.png)

**Then just click `Create Community Token DAO`, your wallet will pop up asking for signature. Approve to create the tokens and deploy the DAO.**

After the transaction is complete, you'll be redirected to the DAO's page.
