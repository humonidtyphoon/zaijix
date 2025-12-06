# Backend Deployment

## Option 1: Railway (Recommended - Free Tier Available)

### Steps to Deploy Backend

1. **Sign up at Railway**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your zaijix repository
   - Railway will detect it's a Node.js app

3. **Configure Service**
   - Root directory: `backend`
   - Build command: `yarn build`
   - Start command: `yarn start`

4. **Environment Variables**
   Add these in Railway dashboard:
   ```
   NODE_ENV=production
   PORT=5000
   FRONTEND_URL=https://zaijix.com
   ```

5. **Generate Domain**
   - Railway gives you a free subdomain: `your-app.railway.app`
   - Or add custom domain: `api.zaijix.com`

### Custom Subdomain Setup (Namecheap → Railway)

1. **In Railway Dashboard:**
   - Go to your service settings
   - Click "Custom Domain"
   - Add `api.zaijix.com`
   - Railway will show DNS records

2. **In Namecheap:**
   - Go to Advanced DNS
   
3. **Add CNAME Record:**
   ```
   Type: CNAME Record
   Host: api
   Value: [your-app].railway.app
   TTL: Automatic
   ```

4. **Wait for DNS Propagation**

---

## Option 2: Render (Also Free Tier)

### Steps to Deploy Backend

1. **Sign up at Render**
   - Go to https://render.com
   - Sign up with GitHub

2. **Create Web Service**
   - Click "New +"
   - Select "Web Service"
   - Connect your GitHub repo
   
3. **Configure Service**
   ```
   Name: zaijix-backend
   Root Directory: backend
   Build Command: yarn install && yarn build
   Start Command: yarn start
   ```

4. **Environment Variables**
   ```
   NODE_ENV=production
   FRONTEND_URL=https://zaijix.com
   ```

5. **Deploy**
   - Click "Create Web Service"
   - You'll get: `your-app.onrender.com`

### Custom Domain (same as Railway above)

---

## Option 3: DigitalOcean App Platform

### Benefits
- More control than Railway/Render
- Still simple to deploy
- $5/month for basic app

### Steps

1. **Sign up at DigitalOcean**
   - Go to https://digitalocean.com
   - Get $200 credit for 60 days (new users)

2. **Create App**
   - Go to App Platform
   - Click "Create App"
   - Connect GitHub

3. **Configure**
   - Detect Node.js automatically
   - Set root directory to `backend`
   - Build: `yarn install && yarn build`
   - Run: `yarn start`

4. **Add Custom Domain**
   - DigitalOcean provides DNS management
   - Can add `api.zaijix.com` easily

---

## Important: Update Frontend to Use Backend URL

After deploying backend, update your frontend to point to the production API:

### Create `.env.production` in frontend folder:
```env
VITE_API_URL=https://api.zaijix.com
```

### Update Contact.tsx to use environment variable:
```typescript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// In handleSubmit:
const response = await fetch(`${API_URL}/api/contact`, {
  // ...
});
```

Then redeploy frontend.

