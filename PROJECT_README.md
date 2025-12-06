# Zaijix - Company Website

A modern, professional company website for Zaijix, a telecom & telematics solutions provider.

## Project Structure

```
zaijix/
├── frontend/          # React + TypeScript + Tailwind CSS
├── backend/           # Express + TypeScript API
└── readme.md          # Project requirements
```

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- Custom color palette matching Zaijix branding

### Backend
- **Express** with TypeScript
- **CORS** enabled for frontend communication
- RESTful API structure
- Contact form handling

## Getting Started

### Prerequisites
- Node.js 20.19+ or 22.12+
- Yarn package manager

### Frontend Setup

```bash
cd frontend
yarn install
yarn dev
```

The frontend will run on `http://localhost:5173`

### Backend Setup

```bash
cd backend
yarn install
yarn dev
```

The backend will run on `http://localhost:5000`

## Available Scripts

### Frontend
- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

### Backend
- `yarn dev` - Start development server with hot reload
- `yarn build` - Compile TypeScript to JavaScript
- `yarn start` - Run production server
- `yarn clean` - Remove dist folder

## Pages

The website includes 6 pages as per requirements:

1. **Home** (`/`) - Hero section, company intro, key services overview
2. **About** (`/about`) - Company summary, vision & mission, market opportunity
3. **Services** (`/services`) - Detailed service offerings
4. **Industries** (`/industries`) - Energy, Logistics, and Retail sectors
5. **FAQ** (`/faq`) - Common questions about telematics and Zaijix
6. **Contact** (`/contact`) - Contact form and email information

## Brand Colors

- **Primary Blue**: `#0A2A43` - Corporate, governmental
- **Secondary Blue**: `#1F5F8B` - Technical, clean
- **Accent Teal**: `#4FB3BF` - Modern, innovation
- **Neutral Dark**: `#1B1B1B`
- **Neutral Light**: `#F5F7F9` - Background

## API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form
  - Body: `{ name, email, company, message }`
  - Returns: Success/error response

### Health Check
- **GET** `/health` - Server health status

## Development Notes

- Frontend and backend run separately in development
- CORS is configured to allow frontend (port 5173) to communicate with backend (port 5000)
- Environment variables are stored in `.env` files (see `.env.example`)

## Content Guidelines

All content follows enterprise-level, government-ready professional tone:
- No Geotab partnership claims (pending approval)
- Focus on 3 industries: Energy, Logistics, Retail
- Technical accuracy with telematics terminology
- Professional, concise messaging

## Future Enhancements

- Database integration for contact form submissions
- Email notification system
- Admin dashboard
- Blog/news section (when ready)
- Additional industry pages (as business expands)

## License

Private - Zaijix © 2024

