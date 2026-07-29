# Hello World

A beautiful, modern "Hello World" landing page served via **Cloudflare Workers Assets**. This project demonstrates how to host a static website with a high-performance edge worker.

## What's Inside?

- **A UI**: A modern, responsive landing page with glassmorphism, gradients, and animations.
- **Cloudflare Workers**: A high-performance edge worker to handle requests.
- **Cloudflare Assets**: A modern way to serve static files directly from the Cloudflare edge.

---

## Prerequisites

Before you start, make sure you have the following:

1.  **[Node.js](https://nodejs.org/)**: The runtime that allows you to run JavaScript on your computer.
2.  **A Cloudflare Account**:
    *   Visit the [Cloudflare Sign Up page](https://dash.cloudflare.com/sign-up).
    *   Enter your email address and create a password.
    *   Verify your email address using the link sent to your inbox.
    *   Once verified, you can [log in to your dashboard](https://dash.cloudflare.com/) to manage your projects.

---

## Getting Started

### 1. Clone or Download
Download this folder to your computer or clone it using Git.

### 2. Install Dependencies
Open your terminal (Command Prompt, PowerShell, or Terminal on macOS), navigate to this folder, and run:

```bash
npm install
```
*This installs `wrangler`, the tool used to interact with Cloudflare.*

### 3. Preview Locally
Before going live, you can see exactly how your site looks and behaves on your own machine:

```bash
npm run dev
```
Once it starts, open your browser and go to: `http://localhost:8787`

---

## Deploying to the Internet

When you are ready to show the world, follow these steps:

### 1. Login to Cloudflare
In your terminal, run:

```bash
npx wrangler login
```
*A browser window will open. Click **Allow** to give your computer permission to deploy to your Cloudflare account.*

### 2. Deploy!
Run the magic command:

```bash
npm run deploy
```

### 3. View Your Site
Once the deployment finishes, Wrangler will print a URL (e.g., `https://my-hello-world.yourname.workers.dev`). **Click it to see your live site!**

---

## Using a Custom Domain

If you want to use your own domain instead of the default `*.workers.dev` URL, follow these steps:

### Method 1: Cloudflare Dashboard (Recommended)
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** and select your worker.
3. Go to **Settings** > **Triggers**.
4. Under **Custom Domains**, click **Add Custom Domain**.
5. Enter your domain/subdomain and click **Add Custom Domain**. Cloudflare will automatically configure the DNS for you.

### Method 2: Via `wrangler.toml`
You can also define a custom domain directly in your configuration file:

```toml
[[routes]]
pattern = "example.com"
custom_domain = true
```

*Note: When using `custom_domain = true`, do **not** use wildcards (like `/*`) in the pattern. Your domain must already be managed by Cloudflare for these methods to work.*

---

## Project Structure

- `assets/` - Where your static files (HTML, CSS, Images) live.
- `src/index.js` - The logic for your Cloudflare Worker.
- `wrangler.toml` - The "brain" of your project; it tells Cloudflare how to run your site.
- `package.json` - Manages your project tools and scripts.

## License

MIT
