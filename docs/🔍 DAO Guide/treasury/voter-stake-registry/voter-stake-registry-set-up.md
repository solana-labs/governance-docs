# 🔒 Voter Stake Registry Set Up

{% hint style="success" %}
This guide has screenshots and text used by the [**PsyOptions DAO**](https://twitter.com/PsyOptions) on their docs explanation about VSR, for any additional help or in-depth questions visit our [**Discord**](https:discord.gg/6UZHcNJFr8)!
{% endhint %}

By establishing a **Voter Stake Registry** for your **DAO** in [**Realms**](https://realms.today/), you can empower contributors, investors, and advisors to engage in governance while their tokens are in the vesting process. This not only fosters alignment and active participation in the **DAO**, but also ensures that every action is traceable on the chain!

## Setting up VSR for Your DAO

Deploy your own instance of the **Voter Stake Registry** to the **DAO**. Deploying your own is safest because it cannot be upgrade by some other authority, whether that authority is a person or another DAO.

{% hint style="info" %}
This step is optional, but is the safest route to go!
{% endhint %}

Create a Registrar by passing in the governance program ID, and the community token mint. Registrars are uniquely constrained (via PDA usage) by those two parameters.

{% hint style="warning" %}
Using the SPL Governance UI today will default to the Voter Stake Registry to the Mango **DAO**. \
\
Using protocols controlled by others can open the **DAO** to risks as their alignment with yours may differ in the future. This is a concern for any protocol holding tokens for an extended period of time. For example, the Mango token holders could collude to upgrade the protocol with an instruction that sucks all the tokens out of other vesting/locked contracts.
{% endhint %}

<figure><img src="https://i.imgur.com/du0bIq2.png" alt=""><figcaption></figcaption></figure>

Use **`ConfigureVotingMint`** to add a token to the Registrar and set it’s vote weight. This instruction is where a lot of magic happens and _**needs to be carefully paid attention to!**_

{% hint style="info" %}
**Consider this -** Should the vote weight be relative to the community token that is tied to the Registrar?
{% endhint %}

{% hint style="warning" %}
Remaining accounts must be all the token mints that have registered as voting mints, _**including the newly registered one.**_
{% endhint %}

## ConfigureVotingMint Parameters

* **idx:** index of the rate to be set. There is an array of `VotingMintConfig`s, and the idx references the index that the corresponding config is or should be placed. When adding a new one it should be the next index.
* **digit\_shift:** The amount of digits to shift the native token amount.
* **baseline\_vote\_weight\_scaled\_factor:** vote weight factor for all funds in vault, in 1/1e9 units. So 1e9 means 1!
* **max\_extra\_lockup\_vote\_weight\_scaled\_factor:** max extra weight for lockups, in 1/1e9 units. So 1e9 means no matter how long a lock up period is the voting weight can never exceed this factor.
* **lockup\_saturation\_secs:** lockup duration at which the full vote weight bonus is given to locked up deposits. This is a factor that dampens the lock up vote power boost until this has passed. If this max boost power is 1e9 (factoring in the scale factor it's 1), then this value does not matter.
* **grant\_authority:** The authority that can grant the additional vote weight. This should be a governance authority.

{% hint style="info" %}
**voting\_power** = baseline\_vote\_weight + min(lockup\_time\_remaining / lockup\_saturation\_secs, 1) \* max\_extra\_lockup\_vote\_weight
{% endhint %}

<figure><img src="https://i.imgur.com/rQVQNKm.png" alt=""><figcaption></figcaption></figure>

Enable the voter weight plugin by calling the **`SetRealmConfig`** instruction on the SPL Governance program used.

{% hint style="info" %}
Use the Realm Config proposal, and put the voter stake registry program ID as the community vote plugin.
{% endhint %}

{% hint style="info" %}
In need of **help**? Hop on on [**Realms Discord**](https://discord.com/invite/VsPbrK2hJk) and ask away your questions!
{% endhint %}
