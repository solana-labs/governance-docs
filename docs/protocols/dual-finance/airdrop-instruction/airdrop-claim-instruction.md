# 🧬 Airdrop Claim - Instruction

## Airdrop Claim

1. Generating The Merkle Root.\
   \
   Head over to [https://beta.dual.finance/upload](https://beta.dual.finance/upload) and connect your wallet. \
   \
   Click on “**select file**” and upload a **CSV** containing wallets and amounts without any header. This will generate a Merkle root and the next steps will showcase why this is important.

<figure><img src="https://miro.medium.com/v2/resize:fit:720/0*rw3J6xNqT3ZJkvjV" alt="" width="375"><figcaption></figcaption></figure>

2. Making The Proposal\
   \
   Go to your community **DAO** on **Realms**, connect your wallet with governance power & press “**New Proposa**l.”\
   \
   Write up your proposal title & description like you usually do. It is important that you **mention** that this proposal is with instruction, that is, the passage of the proposal allows the proposer to execute the transaction.

<figure><img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*kvXCPPDrIIR5HEdOm6EfPQ.png" alt="" width="563"><figcaption></figcaption></figure>

3.  Adding The Instruction\
    \
    After writing your proposal title and description, scroll down to the transaction interface. Once here, you have to choose the **Dual Finance Airdrop** from the drop-down menu for the instruction type.\
    \
    Once selected, the interface will expand and require inputs to the airdrop as follows:

    * **Airdrop Type**: Choose Merkle Proof
    * **Root:** Insert the root address generated in Step 1.
    * **Total Number of Tokens**: This is the total airdrop amount.
    * **Treasury**: This is the Realms treasury account that holds the token that needs to be airdropped.

    Add the proposal & you are all set.

<figure><img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*dajZ8znf1XusV8-QZxBoVQ.png" alt="" width="563"><figcaption></figcaption></figure>

<figure><img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*11Y07FNaRSvrk0rEhjDxsg.png" alt="" width="563"><figcaption></figcaption></figure>

<figure><img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*b3XEHkQ8Ppv1KdFRC9rSyA.png" alt="" width="563"><figcaption></figcaption></figure>

4. On passage of the proposal, the initiator will finalize the proposal & execute the instruction which will move the tokens from the **DAO’s Realms** Treasury to a vault held by the airdrop program. \
   \
   The airdrop is now ready for “**claim**” whereby whitelisted wallets can head to [**https://beta.dual.finance/airdrop**](https://beta.dual.finance/airdrop), connect their wallet and choose the airdrop they want to claim from the drop-down menu.\
   \
   When a user hits the **claim** button and verifies the transaction when prompted, the airdrop vault on Dual Finance is debited and the claimant’s wallet is credited with the tokens. Here is a short demo of the claim process in action.

<figure><img src="https://miro.medium.com/v2/resize:fit:720/0*bRyXl7uQeBjb9EM4" alt="" width="375"><figcaption></figcaption></figure>

{% embed url="https://youtu.be/_p4904x_IAs" %}

{% hint style="info" %}
_The example above uses the Merkle distributor as a verifier, that is, involves a claim process similar to how one would mint an NFT by checking eligibility against a list of wallets._ \
\
_The Dual Finance Airdrop vaults support a crank airdrop as well where the tokens can be directly airdropped to a list of wallets. You may read up on the design specs & strengths of their airdrop vaults_ [_**here**_](https://dual-finance.gitbook.io/dual-finance-documentation/product-suite/dual-airdrop/design-specs) _or alternatively reach out to their team through_ [_**Discord**_](https://discord.gg/P3uH9AvEp5) _for the best approach for you._
{% endhint %}

{% hint style="success" %}
In need of **help**? Hop on on [**Realms Discord**](https://discord.com/invite/VsPbrK2hJk) **or** [**Dual Finance Discord**](https://discord.gg/P3uH9AvEp5) and ask away your questions!
{% endhint %}
