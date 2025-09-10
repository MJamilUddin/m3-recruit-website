# M3 Labs - Landing Page

A modern landing page for M3 Labs featuring M3 Recruit, inspired by n8n.io, built with Next.js, Tailwind CSS, and ShadCN UI components.

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS v4
- **UI Components:** ShadCN UI
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Adding Components

### ShadCN Components

Add new ShadCN components using:
```bash
npx shadcn@latest add [component-name]
```

### 21st.dev Components

To integrate components from 21st.dev:
```bash
npx shadcn@latest add "https://21st.dev/r/[component-name]"
```

### v0 Components

1. Visit [v0.dev](https://v0.dev)
2. Generate components based on your requirements
3. Download the generated code
4. Integrate into your project by placing the components in the appropriate directories

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   └── ui/             # ShadCN UI components
└── lib/
    └── utils.ts        # Utility functions
```

## Features

- 🎨 Modern design inspired by n8n.io
- 📱 Fully responsive layout
- ⚡ Built with performance in mind
- 🧩 Modular component architecture
- 🎯 TypeScript for type safety

## Email Setup

The contact form uses Resend for sending emails with your verified domain.

### Current Configuration ✅
- **API Key**: ✅ Configured in `.env.local`
- **Domain**: ✅ `m3labs.co.uk` verified
- **Recipient**: `info@m3labs.co.uk` (your business email)
- **Sender**: `noreply@m3labs.co.uk` (professional sender)

### Features
- **✅ Domain Verification**: Using your verified `m3labs.co.uk` domain
- **✅ Professional Emails**: Branded HTML templates
- **✅ Business Email**: Sends to `info@m3labs.co.uk`
- **✅ Form Validation**: Required fields and email format validation
- **✅ Error Handling**: Proper user feedback

### Testing
The contact form is production-ready! Submit a form at `/contact` and receive professional emails at your business address.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is ready to deploy to Vercel, Netlify, or any other platform supporting Next.js applications.