---
sidebar_position: 11
---

# 🟩 Treasury Domain Name

## Treasury Domain Name
The **Treasury domain name** is a feature in the Solana Governance UI that allows a treasury account to have a **`.sol`** address, such as **`mytreasury.sol`**, through [**Bonfida**](https://naming.bonfida.org/).

Anybody can send **`.sol`** domains to the treasury account. A **Bonfida** domain points to the current owner of said domain. For more information on solana domains, read [**Bonfida's documentation**](https://docs.bonfida.org/collection/an-introduction-to-the-solana-name-service).

:::info Youtube Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/h_MUt6sTLN8?si=qOiDmO5Ygk3poOJ5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

:::danger
A domain name must be owned _by the **treasury**, not the **governance** itself_ to **function**.

Do not transfer **ownership** of a domain to the **governance's pubkey**.
:::

### Step 1 - Purchasing a .sol Domain Name

To purchase a **`.sol`** domain name, you need to navigate to [**Bondifa's Solana Name Service**](https://naming.bonfida.org/) and follow the process detailed there.

### Step 2 - Setting up a Treasury Address

Before proceeding, ensure that your governance (e.g., **DAO**) has a SOL [**Treasury Accounts**]. If you don't have one set up yet, you should do so before continuing.

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2F3gjbXLwwKh6uZn4vFoBg%2FScreenshot_892.png?alt=media&token=bd6d3518-e2d8-40dc-9bbf-0678386432fe)

Once you have a treasury account, copy the **deposit address of the treasury**. This will be the address to which you'll transfer the **`.sol`** domain name

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2Fc96bVCDIhBrOEoOeFAAq%2FScreenshot_893.png?alt=media&token=9038ded5-0e8c-4e98-b664-612bdac029b0)

### Step 3 - Transferring the Domain to the DAO Treasury

After setting up a treasury address, the next step is to transfer your domain to the **treasury's address** (the one you just copied).

To do this, go to [**your domains**](https://naming.bonfida.org/#/profile?view=domains) on **Bonfida**, and select the domain you'd like to **transfer**. Under the "**Domain information**", "**Owner**" section, click the "**Transfer**" button. Paste in your **treasury address** and hit transfer.

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FnrpDvR1rBuG62P9NK7d6%2FbonfidaDomainView-8715c9640dae150718f14f1b53bf20f2.png?alt=media&token=94861963-a460-4dc9-bf47-6477f7b651d3)

Once the transaction is processed, your domain has been transferred to the **treasury** and is now pointing to your **treasury's address**. You can test this by sending a small amount of SOL to this **`.sol`** domain name and see that it arrives directly into your treasury.

:::info
It is currently only possible to transfer out a domain name from the treasury to a different address using a proposal with a custom instruction.
:::