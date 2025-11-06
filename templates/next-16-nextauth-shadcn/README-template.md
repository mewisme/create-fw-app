# Next.js + NextAuth.js + TypeScript + Tailwind CSS + ShadCN-UI

This project is a modern full-stack starter template using **Next.js** (App Router), **NextAuth.js**, **TypeScript**, **Tailwind CSS**, and **ShadCN-UI** for building beautiful, accessible, and secure web applications with authentication.

## 🚀 Features

- ⚡ **Next.js 16** – Fullstack React framework with SSR, API routes, and App Router
- 🔐 **NextAuth.js v5** – Complete authentication solution with multiple providers
- 🛠 **TypeScript** – Type-safe JavaScript
- 🎨 **Tailwind CSS** – Utility-first styling
- 💎 **ShadCN-UI** – Accessible, customizable components built on Radix UI
- 🌙 **Dark Mode** – Built-in theme switching support

## 🔐 Authentication Providers

This template includes three authentication providers:

1. **Google OAuth** – Sign in with Google account
2. **GitHub OAuth** – Sign in with GitHub account
3. **Credentials** – Email/password authentication (demo credentials included)

## 📦 Installation

```bash
npm install
```

## 🔧 Environment Setup

> ⚠️ **IMPORTANT**: The `NEXTAUTH_SECRET` environment variable is **REQUIRED**. Without it, you'll get JWT decryption errors.

1. Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

2. **Generate a secret key for `NEXTAUTH_SECRET` (REQUIRED):**

```bash
openssl rand -base64 32
```

Or on Windows PowerShell:
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))
```

3. Update the environment variables in `.env.local`:

```env
# REQUIRED: Authentication secret (minimum 32 characters)
NEXTAUTH_SECRET=your-generated-secret-key-here

# REQUIRED: Your app URL
NEXTAUTH_URL=http://localhost:3000

# Optional: Add OAuth provider credentials
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

### Troubleshooting JWT Decryption Errors

If you see `JWTSessionError: JWEDecryptionFailed` errors:

1. **Check NEXTAUTH_SECRET is set**: Ensure `.env.local` exists and contains `NEXTAUTH_SECRET`
2. **Clear browser cookies**: Old session cookies encrypted with a different secret will fail
3. **Restart dev server**: After setting `NEXTAUTH_SECRET`, restart your Next.js dev server
4. **Verify secret format**: The secret should be at least 32 characters long

To clear invalid session cookies, you can:
- Clear browser cookies for `localhost:3000`
- Or use browser DevTools → Application → Cookies → Delete all cookies

### Setting up OAuth Providers

#### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Create a new OAuth 2.0 Client ID
3. Add authorized redirect URIs:
   - For development: `http://localhost:3000/api/auth/callback/google`
   - For production: `https://yourdomain.com/api/auth/callback/google`
4. Copy the Client ID and Client Secret to your `.env.local`:
   ```env
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

> **Note**: You can add multiple redirect URIs (one for development, one for production) in the Google Cloud Console.

#### GitHub OAuth

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the application details:
   - **Application name**: Your app name
   - **Homepage URL**: `http://localhost:3000` (or your production URL)
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
     - For production, use: `https://yourdomain.com/api/auth/callback/github`
4. Click "Register application"
5. Copy the **Client ID** and generate a **Client Secret**
6. Add them to your `.env.local`:
   ```env
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   ```

> **Note**: The callback URL must match exactly. For production, update the callback URL in GitHub settings to match your production domain.

## 🚀 Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Demo Credentials

For testing the Credentials provider, use:

- **Email:** `demo@example.com`
- **Password:** `demo123`

> ⚠️ **Note:** This is a demo implementation. In production, you should implement proper password hashing and database validation.

## 🏗 Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── api/auth/[...nextauth]/  # NextAuth API route
│   ├── auth/
│   │   ├── signin/              # Sign in page
│   │   └── error/                # Auth error page
│   ├── dashboard/                # Protected dashboard page
│   └── layout.tsx                # Root layout with providers
├── components/
│   ├── auth/
│   │   ├── sign-in-button.tsx   # Sign in button component
│   │   ├── credentials-sign-in.tsx  # Credentials sign-in form
│   │   └── user-menu.tsx        # User menu dropdown
│   └── providers/
│       ├── session-provider.tsx  # NextAuth session provider
│       └── theme-provider.tsx    # Theme provider
├── lib/
│   ├── auth.ts                   # NextAuth configuration
│   ├── auth-server.ts            # Server session utilities
│   ├── csrf.ts                   # CSRF token utilities
│   └── server-actions.ts         # Server actions for auth
└── proxy.ts                      # Next.js middleware for route protection
```

## 🔒 Authentication Flow

1. Users can sign in via `/auth/signin` using any configured provider
2. After authentication, users are redirected to `/dashboard`
3. Protected routes use the `auth()` function from `@/lib/auth`
4. Client components can access session via `useSession()` hook

## 🧱 Setup Notes

### ShadCN-UI Components

ShadCN-UI is initialized and ready to use. You can add components using:

```bash
npx shadcn@latest add <component>
```

Ensure your theme and paths are configured correctly in:

- [components.json](./components.json)
- [src/styles/globals.css](./src/styles/globals.css)

### Customizing Authentication

The NextAuth configuration is located in `src/lib/auth.ts`. You can:

- Add more providers
- Customize callbacks
- Add database adapters
- Configure session strategies
- Add custom pages

### Protecting Routes

#### Using Server Session Utilities

The template includes convenient server-side utilities in `src/lib/auth-server.ts`:

```typescript
import { requireAuth, getServerSession, requireUser } from "@/lib/auth-server";

// Option 1: Get session (returns null if not authenticated)
export default async function Page() {
  const session = await getServerSession();
  if (!session) {
    redirect("/auth/signin");
  }
  // Use session...
}

// Option 2: Require authentication (automatically redirects if not authenticated)
export default async function ProtectedPage() {
  const session = await requireAuth(); // Throws redirect if not authenticated
  // Use session...
}

// Option 3: Get user directly
export default async function UserPage() {
  const user = await requireUser(); // Throws redirect if not authenticated
  // Use user...
}
```

#### Using the auth() function directly

```typescript
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const session = await auth();
  
  if (!session) {
    redirect("/auth/signin");
  }
  
  return <div>Protected content</div>;
}
```

### CSRF Protection

NextAuth v5 includes built-in CSRF protection using the double submit cookie pattern. The middleware (`src/proxy.ts`) adds additional security headers:

- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-XSS-Protection**: Enables XSS filtering
- **Content-Security-Policy**: Restricts resource loading
- **Referrer-Policy**: Controls referrer information

CSRF tokens are automatically validated for all authentication routes. For custom CSRF validation, use utilities from `src/lib/csrf.ts`.

### Middleware

The template includes Next.js middleware (`src/proxy.ts`) that:

- Protects `/dashboard` routes (redirects to sign-in if not authenticated)
- Redirects authenticated users away from auth pages
- Adds security headers to all responses
- Processes requests before they reach your pages

### Server Actions

Server actions for authentication are available in `src/lib/server-actions.ts`:

```typescript
import { signInAction, signOutAction, getSessionAction } from "@/lib/server-actions";

// In a client component
<form action={signInAction.bind(null, "credentials")}>
  {/* form fields */}
</form>
```

### Security Features

The template includes comprehensive security features:

1. **Secure Cookies**: Configured with `httpOnly`, `secure`, and `sameSite` flags
2. **Session Management**: JWT-based sessions with configurable expiration (30 days max, 24 hour update)
3. **CSRF Protection**: Automatic CSRF token validation using double submit cookie pattern
4. **Security Headers**: Multiple security headers in middleware and Next.js config
5. **Route Protection**: Middleware-based route protection with automatic redirects
6. **HTTPS Enforcement**: HSTS header for production environments
7. **Rate Limiting Utilities**: Basic rate limiting utilities (use Redis/KV for production)

### Security Checklist

Before deploying to production, ensure:

- [ ] Set a strong `NEXTAUTH_SECRET` (use `openssl rand -base64 32`)
- [ ] Configure OAuth provider credentials (Google, GitHub)
- [ ] Update OAuth callback URLs to production domain (e.g., `https://yourdomain.com/api/auth/callback/github`)
- [ ] Set `NEXTAUTH_URL` to your production domain
- [ ] Enable HTTPS (required for secure cookies)
- [ ] Review and adjust Content Security Policy in `proxy.ts`
- [ ] Implement proper rate limiting (replace in-memory limiter with Redis/KV)
- [ ] Replace demo credentials provider with database-backed authentication
- [ ] Review and test all security headers
- [ ] Set up proper error logging and monitoring
- [ ] Configure database adapter if using database sessions

## 📚 References

- [Next.js Docs](https://nextjs.org/docs)
- [NextAuth.js Docs](https://next-auth.js.org)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [ShadCN-UI Docs](https://ui.shadcn.com)

Made with ❤️ using the modern React ecosystem.
