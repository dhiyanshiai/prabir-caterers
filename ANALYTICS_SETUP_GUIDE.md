# 📊 Google Analytics 4 (GA4) - Step-by-Step Setup Guide

This guide assumes you are logged into your **Developer Google Account**.

## Phase 1: Create the Account
1.  Go to [analytics.google.com](https://analytics.google.com/).
2.  Click **Start measuring** (or if you already have an account, click **Admin** ⚙️ (bottom left) → **+ Create** → **Account**).
3.  **Account Name:** Enter `Prabir Caterer & Tent House`.
    *   *(This keeps the client's data separate from your other projects)*.
4.  **Account Data Sharing Settings:** You can leave these correctly checked (Google defaults).
5.  Click **Next**.

## Phase 2: Create the Property
1.  **Property Name:** Enter `Prabir Caterer Website`.
2.  **Reporting Time Zone:** Select `India` (GMT+05:30).
3.  **Currency:** Select `Indian Rupee (INR ₹)`.
4.  Click **Next**.

## Phase 3: Business Details
1.  **Industry Category:** Select `Food & Drink`.
2.  **Business Size:** Select `Small` (1-10 employees).
3.  Click **Next**.

## Phase 4: Business Objectives
1.  Select **Generate leads** (This is crucial for the "Build Your Plate" and WhatsApp buttons).
2.  Select **Raise brand awareness**.
3.  (Optional) Select **Examine user behavior**.
4.  *Do NOT select "Get baseline reports" (it simplifies too much).*
5.  Click **Create**.
6.  Accept the **Terms of Service** (Select India region).

## Phase 5: Data Stream Setup
1.  Choose a platform: Click **Web**.
2.  **Website URL:** `www.prabir-caterers.in` (Select `https://`).
3.  **Stream Name:** `Prabir Caterer Website`.
4.  **Enhanced Measurement:** Keep this **ON** (It automatically tracks scrolling and clicks).
5.  Click **Create stream**.

## Phase 6: Get the ID (Crucial Step)
1.  You will see a screen titled "Web stream details".
2.  Look for **MEASUREMENT ID** in the top right corner.
3.  It will look like: `G-XXXXXXXXXX`.
4.  **Copy this ID.**

---

## 👨‍💻 Last Step: Send Code to Me
Once you have the `G-XXXXXXXXXX` ID, paste it in the chat here.

I will automatically inject it into the website code so it starts tracking immediately.

### (Optional) How I will add it:
I will add this standard Google tag to `index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YOUR_ID');
</script>
```
