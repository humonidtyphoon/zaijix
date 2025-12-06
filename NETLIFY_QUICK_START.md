# Quick Netlify Deployment Checklist

## Prerequisites
- [x] Code pushed to GitHub
- [ ] Netlify account (signup: https://app.netlify.com/signup)
- [ ] Namecheap domain access

---

## 🚀 Quick Steps (20 minutes)

### 1. Push to GitHub
```bash
cd c:\Users\voider\Desktop\projects\zaijix
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/zaijix.git
git push -u origin main
```

### 2. Deploy to Netlify
1. Go to: https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select your `zaijix` repository
5. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `yarn build`
   - **Publish directory**: `frontend/dist`
6. Click "Deploy"
7. Wait 2-3 minutes ✅

### 3. Add Custom Domain
1. In Netlify: Site settings → Domain management
2. Add custom domain: `zaijix.com`
3. Add domain alias: `www.zaijix.com`

### 4. Configure Namecheap DNS

**Option A: Use Netlify DNS** (Easier)
1. Netlify shows you 4 nameservers
2. In Namecheap: Domain → Manage → Nameservers
3. Change to "Custom DNS"
4. Paste the 4 Netlify nameservers
5. Save

**Option B: Keep Namecheap DNS**
1. In Namecheap: Advanced DNS
2. Add A Record: `@` → `75.2.60.5`
3. Add CNAME: `www` → `YOUR-SITE.netlify.app`

### 5. Wait & Verify
- DNS propagation: 15 mins - 48 hours (usually 1 hour)
- Check: https://dnschecker.org
- SSL auto-provisions after DNS is verified

---

## ✅ Done!
Visit: **https://zaijix.com**

---

## 🔄 Future Updates
```bash
# Make changes
git add .
git commit -m "Update content"
git push
# Netlify auto-deploys!
```

---

## 📝 Important URLs
- **Netlify Dashboard**: https://app.netlify.com
- **Your Site**: https://zaijix.com
- **DNS Checker**: https://dnschecker.org
- **GitHub Repo**: https://github.com/YOUR_USERNAME/zaijix

---

## 🆘 Issues?
See full guide: `DEPLOY_TO_NETLIFY.md`

