# Vercel Free Tier (Hobby) Limits Explained

## 1. Bandwidth (The Main Limit)
**Limit:** **100 GB per month**

This is the most important metric for your site. Every time someone loads your website, they download data (images, code, fonts).

### How many views is that?
It depends on your **Page Size**.

*   **Current Estimate (Unoptimized):**
    *   If your homepage is ~5 MB (due to large images).
    *   100 GB = 100,000 MB.
    *   100,000 MB / 5 MB ≈ **20,000 visits/month**.

*   **Optimized Estimate (Recommended):**
    *   If we optimize images to make page ~1 MB.
    *   100,000 MB / 1 MB ≈ **100,000 visits/month**.

> **Note:** Browsers "cache" images. So if a user visits twice, they might not download the images again, saving bandwidth.

---

## 2. Other Limits

| Metric | Limit | What it means |
| :--- | :--- | :--- |
| **Edge Requests** | 500k / month | How many times Vercel's fast servers handle a request. For a static site, this is usually 1 request per file loaded. |
| **Serverless Functions** | 100 GB-hours | Used if you have backend API routes. Your current site is mostly static (React), so this shouldn't be an issue. |
| **Build Minutes** | 6,000 mins/mo | Time spent building your app when you push to Git. 6,000 mins is HUGE (average build is ~2 mins = 3,000 builds). |

---

## 3. What happens if you hit the limit?
Unlike Netlify (which pauses your site immediately), Vercel is "soft" on limits initially.
*   They will **email you** a warning when you reach 80% and 100%.
*   They usually don't shut you down instantly for a one-time spike, but will ask you to upgrade to Pro ($20/mo) if you consistently exceed limits.

## 4. How to Check Usage
1.  Go to [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click on your team/account name (top left) -> **Usage**.
3.  You will see a bar chart for **Bandwidth** and **Requests**.

## 🚀 Recommendation
To stay safe within the free tier:
1.  **Optimize Images:** This is the #1 way to save bandwidth. We can compress your images (WebP format, lower quality setting) to reduce page size from ~5MB to ~1MB.
2.  **Cache Control:** We can set headers so users download images less often (already managed by Vercel for static assets).
