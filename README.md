# Vega
_A proof-of-concept application dedicated to helping job seekers better manage, strategize, and more efficiently pursue the next step in their careers! **Official rebuild coming soon!**_

[View the demo video](https://www.youtube.com/watch?v=NjSP83HS4bg), or watch the [Find-a-Job feature walkthrough](https://www.youtube.com/watch?v=RwPbEVoYpzU)

## Table of Contents
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation Instructions](#installation-instructions)
  - [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)

## Getting Started
### Requirements
Before you begin, be sure you have the most recent versions of `node` and `npm` installed.

### Installation Instructions
1. Clone the repo:
```
git clone https://github.com/paulstgermain/vega-fe.git
```
2. Install packages:
```
npm install
```
3. Set up your `.env` file:
-  1. Create a free [Auth0](https://www.auth0.com/) account
-  2. Click **Create Application** in the dashboard, and follow the inputs and instructions to set up a new **Single Page Application**
-  3. Add `http://localhost:3000, http://localhost:3000/app` to your new app's **Allowed Callback URL's, Allowed Logout URLs, and Allowed Web Origins** fields
-  4. Rename the `.env.example` file to `.env`
-  5. Copy your new app's **Domain** value into the `.env` file's `REACT_APP_AUTH0_DOMAIN` value
-  6. Copy your new app's **Client ID** value into the `.env` file's `REACT_APP_AUTH0_CLIENT_ID` value
-  7. Go to **APIs** under **Applications** on the Auth0 Dashboard, create a new API with the basic settings left as-is
-  8. Copy your new API's **API Audience** value into the `.env` file's `REACT_APP_API_AUDIENCE` value
-  9. **(Optional)** From the Auth0 dashboard, create 2 dummy users to be used for demo purposes, take note of their `user_id`s
4. Complete the [back end repo's installation instructions](https://github.com/paulstgermain/vega-be?tab=readme-ov-file#installation-instructions) and start the server
5. Run the app:
```
npm start
```

### Usage
1. **Create an account**, or sign in with your existing Auth0 account to be taken to the **Dashboard**
2. From the dashboard, click the pink, circular `+` button to add a new Job card to the board

#### Once you have any job card on the board, you can take any of the following actions:
1. Use the `Status` dropdown to change the job's status quickly
2. Click the `To Job` button to be taken to the job's original posting URL (If a proper URL was added)
3. Click `View Job Data` to view all gathered info for that job
4. From this view, click the `Delete` button to delete the job from your database, or...
5. ... Edit the job's info, then click `Save` to save your changes

## Contribution Guidelines
Pull requests are welcome. For major changes, please open an issue first. Before writing any code, please be sure to open a feature branch.

For example, `feature/short_title_describing_feature` for a new feature, or `bugfix/short_title_describing_bugfix` for bug fixes.

**All PRs will be reviewed by the repository owner before they will be accepted and merged.**

## Screenshots
![image](https://github.com/user-attachments/assets/b7a82e1c-1f8e-4be5-91f4-a21bb8b0bade)
_Main page hero section_

![image](https://github.com/user-attachments/assets/d1f2d8ea-fc62-4223-b85f-423d71a48134)
_Main Dashboard view_

![image](https://github.com/user-attachments/assets/0f4ea9a8-c42e-4398-a953-5ff836c94926)
_Job card 'View Job Data' modal view example_
