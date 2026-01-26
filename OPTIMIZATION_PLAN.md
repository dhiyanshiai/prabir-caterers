# Asset Optimization Plan

## 🎯 Goal
Reduce bandwidth usage to stay comfortably within Vercel's 100GB/month free tier limit.
**Target Bandwidth Usage:** < 50GB/month (Safety margin)
**Target Traffic Support:** 50,000+ visitors/month

---

## 📹 Video Optimization (High Priority)
**Current Status:**
- File: `Prabir Caterer and Tent House - Wedding Celebrations in Varanasi.mp4`
- Size: **35 MB** (Huge! 🚨)
- Impact: 1,000 views = 35 GB bandwidth (35% of monthly limit!)

**Strategy:**
1.  **Remove Audio:** Background videos don't need audio.
2.  **Resize:** 720p (1280x720) is sufficient for web background.
3.  **Compress:** Lower bitrate (CRF 28-30).
4.  **Format:** Provide WebM (smaller) and MP4 (fallback).

**Expected Savings:**
- New Size: **~2-5 MB** (85-95% reduction)
- Impact: 1,000 views = 2-5 GB bandwidth.

**Action Plan:**
- [ ] Use FFmpeg to strip audio and compress.
- [ ] Generate WebM version.
- [ ] Update code to use `<video>` with multiple sources.

---

## 🖼️ Image Optimization
**Current Status:**
- Many images are > 500 KB.
- Formats are mixed (some WebP, some potentially unoptimized).
- `Images` folder layout is now fixed in `public/`.

**Strategy:**
1.  **Format:** Convert ALL to **WebP** (already mostly done, but verify settings).
2.  **Dimensions:**
    - **Hero/Slideshow:** Max width 1920px.
    - **Gallery Grid:** Max width 800px (standardize).
    - **Thumbnails:** Max width 400px.
3.  **Quality:** Set quality to 80% (visually lossless).

**Expected Savings:**
- Target average size: **50-100 KB** per image.
- Total Gallery Page load: < 2 MB (currently likely > 10 MB).

**Action Plan:**
- [ ] Identify images > 200 KB.
- [ ] Batch resize and compress using script or tools.

---

## 🛠️ Implementation Steps

### Phase 1: Video (Immediate)
This is the single biggest bandwidth saver.
1.  Compress `Prabir Caterer...mp4`.
2.  Replace file in `public/video/`.

### Phase 2: Heavy Images
Target the top 20 largest images.
1.  Resize manually or via script.
2.  Replace in `public/Images/`.

### Phase 3: Automation (Future)
- Set up a GitHub Action to auto-compress new images on Pull Request.
- Or use a pre-commit hook.

---

## 📉 Estimated Bandwidth Impact

| Asset Type | Current Cost (per 1k views) | Optimized Cost (per 1k views) | Savings |
| :--- | :--- | :--- | :--- |
| **Video** | 35 GB | 3 GB | **91%** |
| **Gallery (20 imgs)** | 10 GB | 1.5 GB | **85%** |
| **TOTAL** | **45 GB** | **4.5 GB** | **90%** |

## ✅ Recommendation
Start with **Video Optimization** immediately. It gives the highest ROI for the least effort.
