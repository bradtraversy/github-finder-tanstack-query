# GitHub Finder App

This is a project from my Modern React From The Beginning Course to show how to use TanStack Query. It allows you to search GitHub users using the GitHub API.

<img src="public/screen.png" width="500" alt="" />

## Features

- Search user by login
- Dropdown filtering
- Recent searches (saved to localstorage)
- Follow/Unfollow button
- Sonner for toast notifications
- TypeScript & TanStack Query

## Important Note

This project is for learning purposes only. We store your Github personal token in the .env file and use it to follow/unfollow users through the app. If you push this to production, do not use the follow feature and take your key out of the `.env` It was only used to demonstrate how to use TanStack Query mutations.

## Usage

Install dependencies:

```bash
npm Install
```

Rename the `.env-example` to `.env` and add your key if you are running locally.

Run the server:

```bash
npm run dev
```
