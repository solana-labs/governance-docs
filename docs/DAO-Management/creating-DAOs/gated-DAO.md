---
sidebar_position: 5
---

# Protect a DAO with Civic Pass

By default, a DAO grants permission to vote through a governance token.

In many cases, this is insufficient,
and a DAO needs to add additional constraints to its membership based on their real-world identity.

Example use-cases are:
- Sybil-resistance and one-person-one-vote
- DAOs with [quadratic voting systems](https://en.wikipedia.org/wiki/Quadratic_voting#:~:text=Quadratic%20voting%20is%20a%20collective,voting%20paradox%20and%20majority%20rule.)
- Location-specific DAOs
- Bot-resistance
- Age-gated DAOs
- DAOs that require KYC

The Civic Pass plugin allows a DAO to connect their DAO to [Civic Pass](https://civic.com),
a platform using the decentralized [Gateway Protocol](https://www.identity.com/ecosystem/gateway-protocol-3/)
to verify and tokenize aspects of their members' real-world identity.

In order to enable the Civic Pass plugin, use the following steps:

## Create DAO

Create a Community Token DAO in Realms. 

![create-dao](/img/Gateway-DAO/create-dao.png)

:::danger
The spl-governance program version must be equal or higher than v2.2.6 for the Civic Pass plugin to work correctly.
If the plugin is enabled for older versions it can result in irreversible deadlock of the DAO.
:::

:::tip
Set up the DAO with a council token.

The Civic Pass plugin does not affect the council.
Setting a council allows the configuration of a DAO without requiring the council members to first obtain passes.
:::

## Configure Civic Pass Plugin

In order to configure the Civic Pass Plugin a "Civic: Create Gateway plugin registrar" proposal must be created.

![create-gateway-plugin-registrar](/img/Gateway-DAO/create-gateway-plugin-registrar.png)

Set the community token as the governance token, and choose a Civic Pass type.

:::tip
The pass types offered via the UI change as new passes become available. Check [docs.civic.com](https://docs.civic.com) for more details.
:::

:::tip
Coming soon: Combining passes. 
If you are interested in using more than one Civic Pass type at once, contact [civic.com](https://www.civic.com/contact-us/)
or visit the [Discord](https://discord.gg/8H5Kdtr5Wn).
:::

## Enable Civic Pass Plugin

Once the Civic Pass plugin configuration proposal is voted on and executed, the DAO can enable it
through a `DAO Config Change` proposal.

From the DAO parameters page, select `Change Config` option 

![DAO-config-change](/img/Gateway-DAO/DAO-config-change.png)

and set the **`Community voter weight addin`** parameter to 
the Civic Pass Gateway Program Id `GgathUhdrCWRHowoRKACjgWhYHfxCEdBi5ViqYN6HVxk`

![enable-gateway-plugin](/img/Gateway-DAO/enable-gateway-plugin.png)

:::tip
If you want DAO community members to be able to create proposals, as well as vote on them,
while still on the DAO parameters page, select 'Change Config' on the *Governances* section,
and check the "Enabled" toggle beneath "Min community tokens to create proposal".

![enable-create-proposal](/img/Gateway-DAO/enable-create-proposal.png)
:::

## Obtaining a Civic Pass

Once the Civic Pass plugin has been added correctly, a [button](https://docs.civic.com/civic-pass/ui-integration-react-component/the-identity-button)
will appear on the DAO page.

![identity-button](/img/Gateway-DAO/identity-button.png)

The button shows the status of the current pass. A status of "Active" indicates that the member's pass is valid,
and they can interact with the DAO.

Clicking the button opens an iFrame, which guides the user through the process of obtaining a Civic Pass.

:::tip
The Civic Pass plugin supports composition with other plugins. However, the Realms UI does not yet expose this feature.
If you are interested in using the Civic Pass plugin with an NFT Community DAO, please [contact Civic](https://www.civic.com/contact-us/)
or visit the [Discord](https://discord.gg/8H5Kdtr5Wn).
:::