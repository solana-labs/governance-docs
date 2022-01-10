---
sidebar_position: 6
---

# Treasury Accounts

Treasury account is a shared wallet which holds assets
owned by a DAO. Each DAO can have any number of treasury accounts
holding different assets. Anybody can deposit tokens into treasury accounts
but only the DAO members can ever approve withdrawals through treasury transfer proposals.

![multisigbespoke](/img/treasuryAccount/vaults.png)
---

## Creating Treasury Account

To start select the plus button ![multisigbespoke](/img/treasuryAccount/add_treasury.png) in the right corner of the Treasury View

![multisigbespoke](/img/treasuryAccount/vaults.png)

### Token Treasury

If you want your treasury account to hold tokens (ex. USDC) you have to provide the token address (aka mint address) of the token you need.

**Common token addresses**

**USDC:**  `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`

**wSOL:** `So11111111111111111111111111111111111111112`

![multisigbespoke](/img/treasuryAccount/usdc.png)



### NFT treasury

If you want your treasury account to hold NFTs then choose the `NFT Treasury` option

![multisigbespoke](/img/treasuryAccount/nft.png)

### Treasury Governance Settings

**Min community tokens to create proposal:** The minimal amount of the DAO community governance tokens
a member of the DAO has to own to be allowed to propose transfers from the treasury.  

:::tip
For Multisig DAOs without the community governance token this value is irrelevant and we default it
to arbitrary number of `1,000,000`
:::

**Min instruction hold up time (days):** The minimal number of days before you can transfer funds from the treasury after a vote on the transfer proposal is approved.

:::tip
The delay for treasuries is usually set to `0` to allow transfers of the assets immediately after they are approved
:::

**Max voting time (days):** The maximum number of days the DAO can vote on the treasury proposals.
If consensus is not reached by the end of the voting time the proposal is defeated.

**Yes vote threshold (%):** The Yes vote threshold defines the number of Approve votes required to approve a transfer from a treasury account.  
For example if there are 10 members in the DAO and the Yes threshold is set to 60% then at least 6 members must approve any transfers from the treasury.


After providing all the details press the `Create` button and the new treasury account will created and accessible from the main page of your DAO
