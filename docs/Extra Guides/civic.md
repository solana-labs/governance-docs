---
sidebar_position: 19
---

# 🟨 Protect a DAO with Civic Pass

## Civic Pass

By default, a **DAO** grants permission to vote through a governance token. In many cases, this is insufficient, and a **DAO** needs to add additional constraints to its membership based on their real-world identity. Example use-cases are:

* Sybil-resistance and one-person-one-vote
* **DAOs** with [**quadratic voting systems**](https://en.wikipedia.org/wiki/Quadratic\_voting)
* Location-specific **DAOs**
* Bot-resistance
* Age-gated **DAOs**
* **DAOs** that require **KYC**

The [Civic](https://www.civic.com/) Pass plugin allows a **DAO** to connect their DAO to [Civic](https://www.civic.com/) Pass, a platform using the decentralized **Gateway Protocol** to verify and tokenize aspects of their members' real-world identity

![](https://296656056-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FDpqMXquEKUvr1Me1kPpW%2Fuploads%2FsqMz4uFANTu9T77t4X2p%2FHow-CP-Works.png?alt=media&#x26;token=df3113b7-de39-407e-a5c0-0c15d3501c79)

:::info
Please review the [**Civic Pass Terms of Service**](https://www.civic.com/legal/terms-of-service-civic-pass-v1/) carefully before continuing.

By installing or integrating the **Civic Pass** (or Captcha) plugin, you **agree** to **Civic Pass Terms of Service** on behalf of the organization, company or other legal entity for which you act, and represent that you have the authority to bind the same.

If you do not have such authority, or if you do not agree with this the **Civic Pass Terms of Service**, you must not continue and may not use the Services.
:::

:::info Yotube Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/mE2yV77rxVw?si=M86LjHZcc8_fXrgf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

In order to enable the **Civic Pass** plugin, use the following steps:

### Step 1 (Skip, if already created) - Create a DAO

Create a Community Token DAO in Realms.

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FsIDfuueJAmhmLANylC1J%2Fcreate-dao-72b9434779105a40e69ce1363ee9c8e0.png?alt=media&token=5db40827-1cf4-451d-aabf-81f1e494b052)

:::danger
The **spl-governance** program version must be equal or higher than **v2.2.6** for the **Civic Pass** plugin to work correctly.

If the plugin is enabled for **older versions** it can result in **irreversible deadlock** of the **DAO**.
:::

:::info
Set up the **DAO** with a council token.

The **Civic Pass** plugin does not affect the council.

Setting a council allows the configuration of a **DAO** without requiring the council members to first obtain passes.
:::

### Step 2 - Configure Civic Pass Plugin

In order to configure the Civic Pass Plugin, a "**Civic: Create Gateway plugin registrar**" proposal must be created.

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FFgAFABpIJxT2VtLz5U6K%2Fcreate-gateway-plugin-registrar-5b6b7821d922e4c2b2cd7ae09bba1b53.png?alt=media&token=ea2d8a7e-2fe5-4809-9748-ce66e1d47056)

Set the community token as the **governance token** and choose a **Civic Pass** type​.

:::info
The pass types offered via the UI change as new passes become available. \

Check [**docs.civic.com**](https://docs.civic.com) for more details.
:::

:::info
**Coming soon:** Combining passes.

If you are interested in using more than one **Civic Pass** type at once, contact [**civic.com**](https://www.civic.com/contact-us/) or visit the [**Discord**](https://discord.gg/8H5Kdtr5Wn).
:::

### Step 3 - Enable Civic Pass Plugin

Once the **Civic Pass** plugin configuration proposal is voted on and executed, the **DAO** can enable it through a **`DAO Config Change`** proposal.

From the DAO parameters page, select `Change Config` option

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FLZO1ki1M03fM6z1cnX0o%2FDAO-config-change-41d6e74324b45efd549953072ea19823.png?alt=media&token=baf77f9e-d167-41e0-9503-7aa70883c78e)

And set the **`Community voter weight addin`** parameter to the Civic Pass Gateway Program Id `GgathUhdrCWRHowoRKACjgWhYHfxCEdBi5ViqYN6HVxk`

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FOz5IdXdHxk0O70HFWN9E%2Fenable-gateway-plugin-0dd7b90e73945298b3fa0cd162621d47.png?alt=media&token=1035ada6-0249-43c7-a86e-60f80ab148f7)

:::info
If you want **DAO** community members to be able to create proposals, as well as vote on them, while still on the **DAO** parameters page, select '**Change Config**' on the _Governances_ section, and check the "Enabled" toggle beneath "**Min community tokens to create proposal**".
:::

### Step 4 - Obtaining a Civic Pass

Once the **Civic Pass** plugin has been added correctly, a button will appear on the **DAO** page.

![](https://1350030557-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FuD41l732PFwZVguNUpT3%2Fuploads%2FufB0xZna5z8Vp3cuRqq3%2Fidentity-button-148fd48a4438b93f9e6b7cc0fbbde879.png?alt=media&token=48392a55-08a1-4361-8796-be641522ed09)

The button shows the status of the current pass. A status of "**Active**" indicates that the member's pass is valid, and they can interact with the **DAO**.

Clicking the button opens an iFrame, which guides the user through the process of obtaining a **Civic Pass**.

:::info
The **Civic Pass** plugin supports composition with other plugins.

However, the Realms UI does not yet expose this feature. If you are interested in using the **Civic Pass** plugin with an NFT Community **DAO**, please [**contact Civic**](https://www.civic.com/contact-us/) or visit the [**Discord**](https://discord.gg/8H5Kdtr5Wn).&#x20;
:::

:::tip
In need of **help**? Hop on on [**Realms Discord**](https://discord.com/invite/VsPbrK2hJk) and ask away your questions!
:::