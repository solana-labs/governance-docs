---
sidebar_position: 18
---

# 🟨 Change your DAO Logo & Banner

:::info Youtube Video
<iframe width="560" height="315" src="https://www.youtube.com/embed/t4nzLexzObE?si=eTUY5AtaZ9MzL0LU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
:::

### Step 1 - Fork the Repository

- Fork [**Solana-labs/Governance-ui**](https://github.com/solana-labs/governance-ui)**.**

![pasted image 0](https://user-images.githubusercontent.com/22420711/175720226-308f19ac-27ca-4d70-aac6-10976e0c52eb.png)

### Step 2 - Locate

- Go to the **public/ realms** folder.

![pasted image 0 (1)](https://user-images.githubusercontent.com/22420711/175720461-ecebfe22-2168-484c-8ab6-95a39969295e.png) ![pasted image 0 (2)](https://user-images.githubusercontent.com/22420711/175720483-b9f0481b-27ef-4707-aa46-9654284f73b6.png)

### Step 3 - Add Files

- Add a your **DAO** logo in a folder/file in this directory

![pasted image 0 (3)](https://user-images.githubusercontent.com/22420711/175720536-cc70306a-5016-489d-89bd-f48be6b6735c.png)

### Step 4 - Change Parameters

- Open **`mainnet-beta.json`**

![pasted image 0 (4)](https://user-images.githubusercontent.com/22420711/175720573-0b93ec32-3257-4979-814f-56d81ccb318c.png)

- Include your **projects information** in the format below to the end:

```
{ "symbol": "SOLI",

"displayName": "Solana Ecosystem Index",

"programId": "GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw",

"realmId": "J5ViB3N7S3YRnrMpy7iSy57yYQaviJJDmrfGVT51z44o",

"ogImage": "/realms/SOLI/soli_logo.png",

"website": "https://tokens.amun.com/token/SOLI",

"twitter": "@Amun" },
```

### Step 5 - Submit Changes

- Sign up for Vercel.com using your Github account info.
- Create a pull request to commit your changes to Solana-labs/Governance-ui
- Make sure to check that your image works and is mapped to your DAO.
- Click on preview and search for your DAO in the Realms browser to make sure it works

![test](https://user-images.githubusercontent.com/22420711/176802715-4cd276a4-44ec-4ab6-bfac-ae9999c99310.png)

:::tip
In need of **help**? Hop on on [**Realms Discord**](https://discord.com/invite/VsPbrK2hJk) and ask away your questions!
:::