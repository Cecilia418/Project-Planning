# MiniFightRL Progress

A single-page course progress tracker for **MiniFightRL：从 PyTorch 到机器人强化学习**. Lesson completion is saved in each visitor's browser with `localStorage`; there is no backend or environment variable setup.

## Deploy to Vercel

1. Create an empty GitHub repository named `Project-Planning`. A private repository is fine. Do not add a README, license, or `.gitignore` on GitHub.
2. From PowerShell in `D:\Project-Planning`, connect this local repository and push the `main` branch:

   ```powershell
   git remote add origin https://github.com/<your-username>/Project-Planning.git
   git push -u origin main
   ```

3. In Vercel, choose **Add New… → Project**, import `Project-Planning`, keep the detected **Next.js** framework and root directory `./`, then click **Deploy**. No environment variables or custom output directory are needed.
4. After deployment succeeds, bookmark the `*.vercel.app` address shown by Vercel. That address remains available without this computer or a local development server running. If `project-planning.vercel.app` is already taken, choose another available project name.

Vercel rebuilds the production site when new commits are pushed to the connected `main` branch.

## Build checks

```bash
npm run lint
npm run build
```
