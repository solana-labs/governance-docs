# 💰 Treasury Accounts

A **treasury account** is a shared wallet that holds assets owned by a **DAO**. Each **DAO** can have any number of treasury accounts holding different assets. Anybody can deposit tokens into treasury accounts but only the **DAO** members can approve withdrawals through treasury transfer proposals​.

<figure><img src="../../.gitbook/assets/Screenshot_894.png" alt="" width="397"><figcaption></figcaption></figure>

## Creating Treasury Account

To create a treasury account, select the plus button in the right corner of the Treasury View​.

<figure><img src="../../.gitbook/assets/Screenshot_895.png" alt=""><figcaption></figcaption></figure>

## Token Treasury

If you want your treasury account to hold tokens (e.g., **USDC**), you have to provide the token address (aka **mint address**) of the token you need​.

1. **Common token addresses:**

* **USDC:** `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`
* **USDT:** `Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`

<figure><img src="../../.gitbook/assets/Screenshot_896 (2).png" alt="" width="446"><figcaption></figcaption></figure>

<figure><img src="../../.gitbook/assets/Screenshot_897.png" alt="" width="563"><figcaption></figcaption></figure>

{% hint style="success" %}
Realms will automatically say if the token address is **correct** or **not**.
{% endhint %}

## NFT treasury

If you want your treasury account to hold NFTs, then choose the **`NFT Treasury`** option​.

<figure><img src="../../.gitbook/assets/Screenshot_896.png" alt=""><figcaption></figcaption></figure>

## Treasury Governance Settings

* **Min community tokens to create a proposal**: The minimal amount of the **DAO** community governance tokens a member of the DAO has to own to be allowed to propose transfers from the treasury.&#x20;

{% hint style="success" %}
For Multisig **DAOs** without the community governance token, this value is irrelevant and it's defaulted to an arbitrary number of `1,000,000.`
{% endhint %}

* **Min instruction hold up time (days)**: The minimal number of days before you can transfer funds from the treasury after a vote on the transfer proposal is approved​.&#x20;

{% hint style="success" %}
The delay for treasuries is usually set to `0` to allow transfers of the assets immediately after they are approved​.​
{% endhint %}

* **Max voting time (days)**: The maximum number of days the **DAO** can vote on the treasury proposals. If consensus is not reached by the end of the voting time, the proposal is defeated​.
* **Yes vote threshold (%)**: The Yes vote threshold defines the number of Approve votes required to approve a transfer from a treasury account. For example, if there are 10 members in the **DAO** and the Yes threshold is set to **60%**, then at least **6 members** must approve any transfers from the treasury​.

After providing all the details, press the `Create` button and the new treasury account will be created and accessible from the main page of your **DAO**​.
