# Complete Deployment Guide - Zaijix Website

## Quick Overview

Your Zaijix website has two parts:
1. **Frontend** (React) - Static files
2. **Backend** (Express API) - Node.js server

You need to deploy both and connect them to your Namecheap domain.

---

## 🎯 Recommended Setup (Easiest & Free to Start)

### Architecture:
```
zaijix.com          → Frontend (Vercel)
api.zaijix.com      → Backend (Railway)
www.zaijix.com      → Redirect to zaijix.com
```

### Costs:
- Vercel: **FREE** for personal/commercial projects
- Railway: **FREE** ($5 credit/month, ~500 hours)
- Namecheap domain: **Already paid**

---

## 📋 Complete Step-by-Step Process

### Phase 1: Prepare Your Code

1. **Initialize Git (if not already done)**
   ```bash
   cd c:\Users\voider\Desktop\projects\zaijix
   git add .
   git commit -m "Initial commit - ready for deployment"
   ```

2. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name: `zaijix`
   - Make it Private
   - Don't initialize with README (you already have files)
   - Copy the repository URL

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/zaijix.git
   git branch -M main
   git push -u origin main
   ```

---

### Phase 2: Deploy Backend First

**Why first?** You need the backend URL to configure the frontend.

#### Option A: Railway (Recommended)

1. **Sign up**: https://railway.app (use GitHub login)

2. **Create New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose `zaijix` repository
   - Railway auto-detects Node.js

3. **Configure Backend Service**:
   - Click on the service
   - Settings → Change root directory to `backend`
   - Add Start Command: `cd backend && yarn install && yarn build && yarn start`

4. **Add Environment Variables**:
   - Click "Variables" tab
   - Add:
     ```
     NODE_ENV=production
     PORT=5000
     FRONTEND_URL=https://zaijix.com
     ```

5. **Deploy**:
   - Railway auto-deploys
   - You get a URL like: `zaijix-backend-production.up.railway.app`

6. **Add Custom Domain** (api.zaijix.com):
   - In Railway: Settings → Custom Domain → Add `api.zaijix.com`
   - Railway shows you: "Add CNAME record pointing to: xyz.railway.app"

7. **Configure Namecheap DNS**:
   - Login to Namecheap
   - Domain List → Your domain → Manage
   - Advanced DNS → Add New Record
   ```
   Type: CNAME
   Host: api
   Value: [your-project].up.railway.app  (from Railway)
   TTL: Automatic
   ```

#### Option B: Render.com (Alternative)

1. **Sign up**: https://render.com
2. **New Web Service** → Connect GitHub → Choose repo
3. **Configure**:
   ```
   Name: zaijix-backend
   Root Directory: backend
   Build: yarn install && yarn build
   Start: yarn start
   Environment: Node
   ```
4. **Add Environment Variables** (same as above)
5. **Deploy** → Get URL like: `zaijix-backend.onrender.com`

---

### Phase 3: Deploy Frontend

#### Using Vercel (Recommended)

1. **Sign up**: https://vercel.com (use GitHub login)

2. **Import Project**:
   - Click "Add New..." → Project
   - Import your `zaijix` GitHub repo
   - Vercel will scan your repo

3. **Configure**:
   - Framework Preset: **Vite**
   - Root Directory: **frontend**
   - Build Command: `yarn build`
   - Output Directory: `dist`
   - Install Command: `yarn install`

4. **Add Environment Variables**:
   - Before deploying, add:
   ```
   VITE_API_URL=https://api.zaijix.com
   ```
   (Use your Railway/Render backend URL)

5. **Deploy**:
   - Click "Deploy"
   - Wait ~2 minutes
   - You'll get: `zaijix.vercel.app`

6. **Add Custom Domain**:
   - Project Settings → Domains
   - Add domain: `zaijix.com`
   - Add domain: `www.zaijix.com`
   
   Vercel shows you DNS records needed:
   ```
   For zaijix.com:
   A Record → @ → 76.76.19.19
   
   For www.zaijix.com:
   CNAME → www → cname.vercel-dns.com
   ```

7. **Configure Namecheap DNS**:
   - Advanced DNS → Add New Records:
   
   **Record 1** (Root domain):
   ```
   Type: A Record
   Host: @
   Value: 76.76.19.19
   TTL: Automatic
   ```
   
   **Record 2** (WWW):
   ```
   Type: CNAME Record
   Host: www
   Value: cname.vercel-dns.com
   TTL: Automatic
   ```

8. **Wait for DNS Propagation** (15 mins - 48 hours, usually ~1 hour)

9. **Verify**:
   - Check: https://zaijix.com
   - Vercel auto-provisions SSL certificate
   - Your site will be secure (HTTPS)

---

### Phase 4: Update Frontend to Use Production API

The contact form needs to use your production backend URL:

```bash
cd frontend
```

Create `.env.production`:
```env
VITE_API_URL=https://api.zaijix.com
```

Update `frontend/src/pages/Contact.tsx` to use environment variable - see instructions in DEPLOYMENT_BACKEND.md

Push changes:
```bash
git add .
git commit -m "Add production API URL"
git push
```

Vercel auto-redeploys when you push!

---

## 🎯 Final DNS Configuration Summary

Your Namecheap Advanced DNS should have these records:

```
Type         Host    Value                        TTL
─────────────────────────────────────────────────────────
A Record     @       76.76.19.19                  Automatic
CNAME        www     cname.vercel-dns.com         Automatic
CNAME        api     [your-project].railway.app   Automatic
```

Delete any other A or CNAME records for @ or www to avoid conflicts.

---

## ✅ Testing After Deployment

1. **Test Backend API**:
   ```bash
   curl https://api.zaijix.com/health
   # Should return: {"status":"healthy","timestamp":"..."}
   ```

2. **Test Frontend**:
   - Visit: https://zaijix.com
   - Should load the homepage

3. **Test Contact Form**:
   - Fill out the contact form
   - Check Railway/Render logs to see if submission was received

---

## 🔄 Making Updates After Deployment

### For Frontend Changes:
```bash
cd frontend
# Make your changes
git add .
git commit -m "Update homepage content"
git push
# Vercel auto-deploys in ~2 minutes
```

### For Backend Changes:
```bash
cd backend
# Make your changes
git add .
git commit -m "Add new API endpoint"
git push
# Railway/Render auto-deploys in ~3 minutes
```

---

## 💰 Cost Breakdown

### Free Tier Limits:
- **Vercel**: Unlimited bandwidth, 100GB monthly
- **Railway**: $5 free credit/month (~500 execution hours)
- **Total**: **$0/month** to start

### When You Outgrow Free Tier:
- **Vercel Pro**: $20/month (if you need more bandwidth)
- **Railway**: Pay-as-you-go after free credit (~$5-10/month for small app)
- **Alternative VPS**: DigitalOcean $6/month droplet (host both frontend & backend)

---

## 🆘 Common Issues

### "DNS_PROBE_FINISHED_NXDOMAIN"
- DNS not propagated yet, wait 1-24 hours
- Check DNS with: https://dnschecker.org

### Contact Form Not Working
- Check CORS settings in backend
- Verify `FRONTEND_URL` environment variable
- Check browser console for errors

### SSL Certificate Not Working
- Vercel/Railway auto-provision SSL, wait 10-15 minutes after DNS propagation
- Make sure your domain is verified

### Backend API Not Responding
- Check Railway/Render logs for errors
- Verify environment variables are set
- Test the .railway.app or .onrender.com URL directly first

---

## 📞 Need Help?

Check logs:
- **Vercel**: Project → Deployments → Click deployment → Function Logs
- **Railway**: Project → Service → Deployments → View Logs
- **Render**: Dashboard → Service → Logs

---

**Your Zaijix website will be live at https://zaijix.com with a professional setup! 🚀**

