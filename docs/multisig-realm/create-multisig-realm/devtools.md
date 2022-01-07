---
sidebar_position: 4
---

# Devtools: Artifacts Helper

The artifacts helper is part of our ecosystem as a tool to create generic artifacts to your realm.

:::tip
You don't need to generate artifacts anymore as our platform does it automatically.
:::

### Generate the Artifacts

If you really want to generate the artifacts to your realm and create a Custom realm but you don't really know what to do, for a limited time, we have an available helper that creates all the artifacts for you, but doesn't deploy any governance program, then if you want a custom governance program you'll need to deploy it by yourself.

1. Click [here](https://solana-labs.github.io/oyster-gov/#/devtools) to access the `devtools`

2. In the devtools, connect your wallet clicking `Connect` in the top right corner of the page, the wallet will pop up just like is seen [here](./realm-wizard).

![devtoolsconnect](/img/multisig-realm/devtools-connect.png)

:::tip
If you want to change the Network, click in the gear icon and select the desired network.
:::

3. With your wallet connected, you can now click on Generate

![devtoolsgenerate](/img/multisig-realm/devtools-generate.png)

This step will generate the artifacts for you, so it will create transactions to be signed. You must approve all the transactions
in order to complete this step. You need to wait until the transaction is completed, as it can take a while so don't close the page until
the transaction is complete or result in an error.

4. Note that the devtools spits 4 different addresses. Save it somewhere safe. By now we'll only need the `Council Mint` and `Community Mint`

![devtoolsartifacts](/img/multisig-realm/devtools-artifacts.png)

---
