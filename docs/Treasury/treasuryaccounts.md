---
sidebar_position: 10
---

# 🟩 Treasury Account

## Treasury Account

A **treasury account** is a shared wallet that holds assets owned by a **DAO**.

Each **DAO** can have any number of treasury accounts holding different assets. Anybody can deposit tokens into treasury accounts but only the **DAO** members can approve withdrawals through treasury transfer proposals​.

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2F81BxWLXqvMkXeyMasJwE%2FScreenshot_894.png?alt=media&token=75d13ac2-94e3-4c26-92db-99e4fbfad820)

:::info Youtube Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/h_MUt6sTLN8?si=qOiDmO5Ygk3poOJ5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## Step 1 - Creating a Treasury Account

To create a treasury account, select the plus button in the right corner of the Treasury View​.

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FNurCEx0Fmms6tQ8C3wFE%2FScreenshot_895.png?alt=media&token=4cc81250-e55e-4885-93d2-51c11737c6d9)

## Step 2 - Token Treasury

If you want your treasury account to hold tokens (e.g., **USDC**), you have to provide the token address (aka **mint address**) of the token you need​.

### Step 2.1 - Common Token Addresses

:::info
* **USDC:** `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`
* **USDT:** `Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`
:::

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FJzog0uqGN0fcHP1EQEVU%2FScreenshot_896.png?alt=media&token=691096b9-e02d-4475-8f9f-fa1d1615a02c)

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FiAkrfj46fEKteCb2n0l4%2FScreenshot_897.png?alt=media&token=73ebfb6d-1bdd-4dea-b042-4c27e5846298)

:::info
Realms will automatically say if the token address is **correct** or **not**.
:::

## Step 3 - NFT treasury

If you want your treasury account to hold NFTs, then choose the **`NFT Treasury`** option​.

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FtTlR4ucextl9HkU2fueQ%2FScreenshot_896.png?alt=media&token=806b3d92-83bc-4d88-87b3-5d85df224adb)

## Settings - Treasury Governance Settings

* **Min community tokens to create a proposal**: The minimal amount of the **DAO** community governance tokens a member of the DAO has to own to be allowed to propose transfers from the treasury.&#x20;

:::info
For Multisig **DAOs** without the community governance token, this value is irrelevant and it's defaulted to an arbitrary number of `1,000,000.`
:::

* **Min instruction hold up time (days)**: The minimal number of days before you can transfer funds from the treasury after a vote on the transfer proposal is approved​.

:::info
The delay for treasuries is usually set to `0` to allow transfers of the assets immediately after they are approved​.​
:::

* **Max voting time (days)**: The maximum number of days the **DAO** can vote on the treasury proposals. If consensus is not reached by the end of the voting time, the proposal is defeated​.
* **Yes vote threshold (%)**: The Yes vote threshold defines the number of Approve votes required to approve a transfer from a treasury account. For example, if there are 10 members in the **DAO** and the Yes threshold is set to **60%**, then at least **6 members** must approve any transfers from the treasury​.

After providing all the details, press the `Create` button and the new treasury account will be created and accessible from the main page of your **DAO**​.