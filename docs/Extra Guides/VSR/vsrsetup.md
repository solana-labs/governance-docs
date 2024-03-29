---
sidebar_position: 12
---

# 🟨 Voter Stake Registry Set Up

:::info
This guide has screenshots and text used by the [**PsyOptions DAO**](https://twitter.com/PsyOptions) on their docs explanation about VSR, for any additional help or in-depth questions visit our [**Discord**](https:discord.gg/6UZHcNJFr8)!
:::

By establishing a **Voter Stake Registry** for your **DAO** in [**Realms**](https://realms.today/), you can empower contributors, investors, and advisors to engage in governance while their tokens are in the vesting process. This not only fosters alignment and active participation in the **DAO**, but also ensures that every action is traceable on the chain!

:::info Youtube Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/mE2yV77rxVw?si=WdTbqHCWqgKLbrSn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

## Setting up VSR for Your DAO

Deploy your own instance of the **Voter Stake Registry** to the **DAO**. Deploying your own is safest because it cannot be upgrade by some other authority, whether that authority is a person or another DAO.

:::info
This step is optional, but is the safest route to go!
:::

### Step 1 - Registrar

Create a Registrar by passing in the governance program ID, and the community token mint. Registrars are uniquely constrained (via PDA usage) by those two parameters.

:::info
Using the SPL Governance UI today will default to the community owned VSR instance.
:::

![](https://i.imgur.com/du0bIq2.png)

Use **`ConfigureVotingMint`** to add a token to the Registrar and set it’s vote weight. This instruction is where a lot of magic happens and _**needs to be carefully paid attention to!**_

:::info
**Consider this -** Should the vote weight be relative to the community token that is tied to the Registrar?
:::

:::warning
Remaining accounts must be all the token mints that have registered as voting mints, _**including the newly registered one.**_
:::

### Step 2 -  ConfigureVotingMint Parameters

* **idx:** index of the rate to be set. There is an array of `VotingMintConfig`s, and the idx references the index that the corresponding config is or should be placed. When adding a new one it should be the next index.
* **digit\_shift:** The amount of digits to shift the native token amount.
* **baseline\_vote\_weight\_scaled\_factor:** vote weight factor for all funds in vault, in 1/1e9 units. So 1e9 means 1!
* **max\_extra\_lockup\_vote\_weight\_scaled\_factor:** max extra weight for lockups, in 1/1e9 units. So 1e9 means no matter how long a lock up period is the voting weight can never exceed this factor.
* **lockup\_saturation\_secs:** lockup duration at which the full vote weight bonus is given to locked up deposits. This is a factor that dampens the lock up vote power boost until this has passed. If this max boost power is 1e9 (factoring in the scale factor it's 1), then this value does not matter.
* **grant\_authority:** The authority that can grant the additional vote weight. This should be a governance authority.

:::info
**voting\_power** = baseline\_vote\_weight + min(lockup\_time\_remaining / lockup\_saturation\_secs, 1) \* max\_extra\_lockup\_vote\_weight
:::

![](https://i.imgur.com/rQVQNKm.png)

### Step 3 -  Realm Config

Enable the voter weight plugin by calling the **`SetRealmConfig`** instruction on the SPL Governance program used.

:::info
Use the Realm Config proposal, and put the voter stake registry program ID as the community vote plugin.
:::

:::tip
In need of **help**? Hop on on [**Realms Discord**](https://discord.com/invite/VsPbrK2hJk) and ask away your questions!
:::