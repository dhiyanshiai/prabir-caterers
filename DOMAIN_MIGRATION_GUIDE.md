# Domain Migration: Netlify → Vercel

## Your Situation
- ✅ Vercel deployment is ready
- ❌ Getting "invalid configuration" when adding domain to Vercel
- ❓ Should you remove domain from Netlify first?

---

## Answer: YES - Remove from Netlify First

**Why?**
A domain can only point to ONE hosting provider at a time. Netlify is currently "claiming" your domain, which is why Vercel shows "invalid configuration."

---

## Step-by-Step Migration (Zero Downtime)

### Phase 1: Prepare Vercel (5 mins)
**Do this BEFORE touching Netlify**

1. **Verify Vercel deployment works:**
   - Visit your Vercel URL: `https://[your-project].vercel.app`
   - Test all pages
   - Ensure everything works perfectly

2. **Note your Vercel deployment URL:**
   - Copy the full URL (e.g., `prabir-caterers.vercel.app`)
   - You'll need this for DNS

---

### Phase 2: Remove Domain from Netlify (2 mins)

1. **Login to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Select your site

2. **Remove custom domain:**
   - Go to: Site Settings → Domain Management
   - Find your domain (e.g., `prabir-caterers.in`)
   - Click "Options" → **"Remove domain"**
   - Confirm removal

3. **Important:** Don't delete the entire Netlify site yet - keep it as backup

---

### Phase 3: Add Domain to Vercel (5 mins)

1. **Go to Vercel project:**
   - Dashboard → Your Project → Settings → Domains

2. **Add domain:**
   - Click "Add"
   - Enter: `prabir-caterers.in` (or your domain)
   - Click "Add"

3. **Vercel will show DNS instructions:**
   - You'll see something like:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

### Phase 4: Update DNS Records (10 mins)

**Where to update DNS:**
- Go to your domain registrar (where you bought the domain)
- Common registrars: GoDaddy, Namecheap, Google Domains, etc.

**Steps:**

1. **Login to domain registrar**

2. **Find DNS settings:**
   - Look for: "DNS Management", "DNS Settings", or "Nameservers"

3. **Update/Add records as shown by Vercel:**

   **For root domain (prabir-caterers.in):**
   ```
   Type: A
   Name: @ (or leave blank)
   Value: [Vercel's IP - shown in Vercel dashboard]
   TTL: 3600 (or Auto)
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600 (or Auto)
   ```

4. **Remove old Netlify DNS records:**
   - Delete any A records pointing to Netlify IPs
   - Delete any CNAME records pointing to Netlify

5. **Save changes**

---

### Phase 5: Wait & Verify (10-30 mins)

1. **DNS propagation takes time:**
   - Usually: 5-10 minutes
   - Maximum: 24-48 hours (rare)

2. **Check propagation:**
   - Use: [whatsmydns.net](https://www.whatsmydns.net)
   - Enter your domain
   - Select "A" record
   - Should show Vercel's IP globally

3. **Test your domain:**
   - Visit: `https://prabir-caterers.in`
   - Should show Vercel deployment
   - Check SSL certificate (should be automatic)

---

## Common Issues & Solutions

### Issue 1: "Invalid Configuration" in Vercel
**Cause:** Domain still connected to Netlify
**Solution:** Remove domain from Netlify first (Phase 2)

### Issue 2: Domain shows old Netlify site
**Cause:** DNS hasn't propagated yet
**Solution:** Wait 10-30 minutes, clear browser cache

### Issue 3: SSL certificate error
**Cause:** Vercel is provisioning certificate
**Solution:** Wait 5-10 minutes, Vercel auto-provisions SSL

### Issue 4: "Domain already in use"
**Cause:** Domain claimed by another Vercel account
**Solution:** 
- Remove from other Vercel account
- Or use a different Vercel account

---

## DNS Record Examples

### Before (Netlify):
```
Type: A
Name: @
Value: 75.2.60.5 (Netlify IP)

Type: CNAME  
Name: www
Value: [your-site].netlify.app
```

### After (Vercel):
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel IP - check Vercel dashboard)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Zero-Downtime Strategy

**Option A: Quick Switch (5-10 min downtime)**
1. Remove from Netlify
2. Add to Vercel
3. Update DNS
4. Wait for propagation

**Option B: Parallel Setup (Zero downtime)**
1. Keep Netlify running
2. Set up Vercel with subdomain first (e.g., `new.prabir-caterers.in`)
3. Test thoroughly
4. Then switch main domain
5. Minimal downtime during DNS switch

---

## Recommended Approach

### For You (Fastest):

**Step 1:** Remove domain from Netlify NOW
- Site is already down, so no additional downtime
- Clears the way for Vercel

**Step 2:** Add domain to Vercel immediately
- Follow Vercel's DNS instructions exactly

**Step 3:** Update DNS at registrar
- Point to Vercel's servers

**Step 4:** Wait 10-30 minutes
- Site will be back online on Vercel

**Total downtime:** Same as current (site already down) + DNS propagation

---

## After Migration Checklist

✅ Site loads on custom domain
✅ SSL certificate is active (https://)
✅ All pages work correctly
✅ Images load properly
✅ Forms work (if any)
✅ Analytics tracking works
✅ No console errors

---

## Keep Netlify as Backup?

**Recommendation:** YES, keep it for 1 week

**Why:**
- Easy rollback if issues arise
- Can compare if something breaks
- Free to keep (just don't use bandwidth)

**After 1 week:**
- If Vercel works perfectly
- Delete Netlify deployment
- Or keep as emergency backup

---

## Quick Reference

**Current Status:**
- ❌ Netlify: Site paused (over limits)
- ✅ Vercel: Deployed and working
- ⏳ Domain: Still pointing to Netlify

**Action Required:**
1. Remove domain from Netlify
2. Add domain to Vercel  
3. Update DNS records
4. Wait for propagation
5. ✅ Site back online!

**Estimated Time:** 30 minutes total
**Downtime:** Already down + 10-30 min DNS propagation

---

## Need Help?

If you get stuck:
1. Share screenshot of Vercel error
2. Tell me your domain registrar
3. I can provide exact DNS settings

Let's get your site back online! 🚀
