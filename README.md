<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/9e7fef67-4fb7-47d2-a07c-c0a93f69e20c

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Copy [.env.example](.env.example) and add server-side credentials where needed (AI routes read from the environment loaded by `tsx server.ts`, not from the browser bundle)
3. Run the app:
   `npm run dev`
