---
sidebar_position: 9
---

# Treasury domain name
It is possible for a treasury account to have a `.sol` address (eg. `mytreasury.sol`) through [Bonfida](https://naming.bonfida.org/). Anybody can send `.sol` domains to the treasury account. A Bonfida domain points to the current owner of said domain. For more information on solana domains, read [Bonfida's documentation](https://docs.bonfida.org/collection/an-introduction-to-the-solana-name-service).

Note that a domain name must be owned *by the treasury, not the governance itself* to function. Do not transfer ownership of a domain to the governance's pubkey.

## Purchasing a .sol domain name
To purchase a `.sol` domain name, head to [Bondifa's Solana Name Service](https://naming.bonfida.org/) and follow the process.

## Set up treasury address
Make sure your governance (eg. DAO) has a SOL treasury account. See [Treasury Accounts](treasury-account.md) if you haven't set one up yet.

![treasuryCard](/img/treasurySolAddress/treasuryCard.png)

Copy the deposit address of the treasury. This will be the address you'll transfer the `.sol` domain name to.

![treasuryView](/img/treasurySolAddress/treasuryView.png)

## Transfer domain to treasury
As mentioned before, your domain must be transferred to the *treasury's address* (the one that you just copied).

Head to [your domains](https://naming.bonfida.org/#/profile?view=domains) on Bonfida, and select the domain you'd like to transfer. Under the "Domain information", "Owner" section, click the "Transfer" button. Paste in your treasury address and hit transfer.

![bonfidaDomainView](/img/treasurySolAddress/bonfidaDomainView.png)

After the transaction is processed, your domain has been transferred to the treasury and is now pointing to your treasury's address. You can send a small amount of SOL to this `.sol` domain name and see that it arrives directly into your treasury.

## Transfer out domain name
It is currently only possible to transfer out a domain name from the treasury to a different address using a proposal with a custom instruction.