---
sidebar_position: 6
---

# Treasury Account

![multisigbespoke](/img/multisig-DAO/treasuryAccount/vaults.png)

What is treasury account ? treasury account can be treated like a vault holding specified token managed by DAO.

---

## Creating the treasury account

To start you should click plus icon in the right corner of treasury account component

![multisigbespoke](/img/multisig-DAO/treasuryAccount/vaults.png)

### Step 1: NFT treasury

If you want your treasury account to hold NFTs you only need to click on nft treasury switch and skip to step 3

![multisigbespoke](/img/multisig-DAO/treasuryAccount/nft.png)

### Step 2: Token Treasury: Mint

If you want your treasury account to hold tokens you need to fill mint address of the token you want to hold inside, mint address is address of given coin.

**All well known coins can be find throughout solana exploler:** https://explorer.solana.com/address/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v

**Mostly used coins addresses**

**USDC:** EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v

**WSol:** So11111111111111111111111111111111111111112

![multisigbespoke](/img/multisig-DAO/treasuryAccount/usdc.png)

### Step 3: Proposal settings

**Min community tokens to create proposal:** Is minimal amount of your DAO community tokens you want someone to have to have ability to create proposals related to your treasury account for example: Proposal to transfer USDC from your DAO treasury to someone wallet as payment for his service.

**Min instruction hold up time (days):** Is minimal amount of days before you can execute proposal instructions after the vote on proposal ends.

**Max voting time (days):** This field is simply amount of days which will decide for how many days your DAO can vote on proposals.

**Yes vote threshold (%):** Is percentage of approvals that your DAO need to approve proposal for example: if you have 10 people inside your DAO and you set this field to 60% you need at least 6 people to approve your proposal

### Step 4: Proposal settings

After filling all field click create and new treasury account will be visible at the main page of your DAO

![multisigbespoke](/img/multisig-DAO/treasuryAccount/usdc.png)
