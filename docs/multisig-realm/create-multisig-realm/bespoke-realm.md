---
sidebar_position: 3
---

# Create a Bespoke Realm

![multisigbespoke](/img/multisig-realm/multisig-bespoke.png)

When you choose to create a bespoke realm, we assume that you're an advanced user who'll create all the realm artifacts by yourself so, we present you a more complex and flexible form than the multisig realm.

![multisigbespokeformempty](/img/multisig-realm/multisig-bespoke-empty.png)

:::tip
Note that this form will be split in the future to make the process simpler.
:::

So let's create a Bespoke Realm:

---

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

### Creating the Realm

With your artifacts in hand, you should fill the form as follows:

1.**Name your realm:** you don't need to use the devtools name but bear in mind that if you choose a name that already exists, the transaction will fail.
2. **Place the `Community Mint Id`** and note that some more fields will appear in the screen.

   1. **Min community tokens to create governance:** this field represents that to create a governance, there should be at least `N%` of the max supply of the tokens minted, being 1% the default value.
   2. **Community mint supply factor:** the vote weight of a community token. If it is set to 1, each community token will represent 1 vote.

![multisigbespokecomm](/img/multisig-realm/multisig-bespoke-community.png)

3. **Place the `Council Mint Id`**. The council token is a token that will be distributed to the realm's team. It's usually necessary if your realm has no community and needs some level of governance.

:::tip
This step is optional. You don't need council mint to create a bespoke realm.
:::

![multisigbespokecomm](/img/multisig-realm/multisig-bespoke-council.png)

4.**The `Governance Program Id`** field represents the Governance Program of the organization. If a Realm wants full control of their realms, they should deploy their own governance program. But to facilitate, Solana provides a default Governance program ID `GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw` so, if you don't want to deploy a governance program now, it is possible to use this instance.

![multisigbespokegov](/img/multisig-realm/multisig-bespoke-govtoken.png)

5. **Lastly, the `Governance program version`** that represents the version of the governance program. If you're using the default instance or it is your first realm, it's usually set to 1.

![multisigbespokeversion](/img/multisig-realm/multisig-bespoke-programversion.png)

6. **Click create, sign the transactions** and then you'll be redirected to the realm's page

![multisigbespokerealmspage](/img/multisig-realm/multisig-bespoke-realms-page.png)
