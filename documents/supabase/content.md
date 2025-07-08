TITLE: Authenticated-Only Page with getServerSideProps in Next.js
DESCRIPTION: Demonstrates how to create a page accessible only to authenticated users using `getServerSideProps` in Next.js. It fetches user data from Supabase and redirects unauthenticated users to the home page. Emphasizes using `supabase.auth.getUser()` for secure page protection, as `getSession()` is not guaranteed to revalidate the Auth token on the server.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/nextjs.mdx#_snippet_18

LANGUAGE: tsx
CODE:
```
import type { User } from '@supabase/supabase-js'
import type { GetServerSidePropsContext } from 'next'

import { createClient } from '@/utils/supabase/server-props'

export default function PrivatePage({ user }: { user: User }) {
  return <h1>Hello, {user.email || 'user'}!</h1>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const supabase = createClient(context)

  const { data, error } = await supabase.auth.getUser()

  if (error || !data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: data.user,
    },
  }
}
```

----------------------------------------

TITLE: Create a Next.js app with Supabase template
DESCRIPTION: Uses `create-next-app` with the `with-supabase` template to set up a Next.js application pre-configured with cookie-based authentication, TypeScript, and Tailwind CSS.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/quickstarts/nextjs.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app -e with-supabase
```

----------------------------------------

TITLE: Declaring Supabase Environment Variables (.env.local)
DESCRIPTION: This snippet shows the required environment variables for a Next.js application to connect to Supabase. `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` must be populated with values from the Supabase project settings, typically by renaming `.env.example` to `.env.local`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/quickstarts/nextjs.mdx#_snippet_2

LANGUAGE: Text
CODE:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

----------------------------------------

TITLE: Integrate Account and Auth Components into RedwoodJS Home Page
DESCRIPTION: Updates the RedwoodJS `HomePage` to dynamically render either the `Auth` component (for sign-in) or the `Account` component (for profile management) based on the user's authentication status, providing a seamless user experience.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-redwoodjs.mdx#_snippet_15

LANGUAGE: jsx
CODE:
```
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import Account from 'src/components/Account'
import Auth from 'src/components/Auth'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <MetaTags title="Welcome" />
      {!isAuthenticated ? <Auth /> : <Account />}
    </>
  )
}

export default HomePage
```

----------------------------------------

TITLE: Verify OTP and Session on Server-Side with Supabase JS Client
DESCRIPTION: Shows a TypeScript example using the Supabase JS client to extract authentication parameters from a URL, verify an OTP (One-Time Password) or token hash, and retrieve an authenticated session on the server-side. This code snippet is typically used on the server-side endpoint that a custom email link redirects to, allowing the backend to process the authentication before redirecting the user.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-email-templates.mdx#_snippet_5

LANGUAGE: typescript
CODE:
```
import { createClient, type EmailOtpType } from '@supabase/supabase-js'
const supabase = createClient('https://your-project-id.supabase.co', 'your-anon-key')

// ---cut---
const { token_hash, type } = Object.fromEntries(new URLSearchParams(window.location.search))
const {
  data: { session },
  error,
} = await supabase.auth.verifyOtp({ token_hash, type: type as EmailOtpType })

// subsequently redirect the user back to the client using the redirect_to param
// ...
```

----------------------------------------

TITLE: Migrate `withApiAuth` to `createPagesServerClient` for Next.js API Routes
DESCRIPTION: The `withApiAuth` higher-order function is deprecated. This snippet demonstrates how to update Next.js API routes by replacing `withApiAuth` with `createPagesServerClient`. The new approach involves explicitly creating an authenticated Supabase client within the `NextApiHandler` and manually checking for user sessions before performing RLS-enabled queries.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs-pages.mdx#_snippet_15

LANGUAGE: tsx
CODE:
```
import { withApiAuth } from '@supabase/auth-helpers-nextjs'

export default withApiAuth(async function ProtectedRoute(req, res, supabase) {
  // Run queries with RLS on the server
  const { data } = await supabase.from('test').select('*')
  res.json(data)
})
```

LANGUAGE: tsx
CODE:
```
import { NextApiHandler } from 'next'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'

const ProtectedRoute: NextApiHandler = async (req, res) => {
  // Create authenticated Supabase Client
  const supabase = createPagesServerClient({ req, res })
  // Check if we have a session
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user)
    return res.status(401).json({
      error: 'not_authenticated',
      description: 'The user does not have an active session or is not authenticated',
    })

  // Run queries with RLS on the server
  const { data } = await supabase.from('test').select('*')
  res.json(data)
}

export default ProtectedRoute
```

----------------------------------------

TITLE: Install Supabase Auth Helpers for Next.js
DESCRIPTION: This command installs the `@supabase/auth-helpers-nextjs` package, which provides authentication and authorization utilities for Next.js applications using the App Router, along with the core `@supabase/supabase-js` client library.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs.mdx#_snippet_0

LANGUAGE: sh
CODE:
```
npm install @supabase/auth-helpers-nextjs @supabase/supabase-js
```

----------------------------------------

TITLE: Configure Supabase Environment Variables in Next.js
DESCRIPTION: This snippet shows how to declare the `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variables in a `.env.local` file. These variables are crucial for connecting your Next.js application to your Supabase project's API.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

----------------------------------------

TITLE: HTML Signup Confirmation Email Template for PKCE Flow
DESCRIPTION: This HTML snippet provides the necessary structure for a signup confirmation email within the PKCE flow. It includes a dynamic link that directs the user to a confirmation endpoint, passing essential variables like `token_hash`, `type=email`, and `RedirectTo` for completing the authentication process after email verification.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/passwords.mdx#_snippet_1

LANGUAGE: html
CODE:
```
<h2>Confirm your signup</h2>

<p>Follow this link to confirm your user:</p>
<p>
  <a
    href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email&next={{ .RedirectTo }}"
    >Confirm your email</a
  >
</p>
```

----------------------------------------

TITLE: Supabase Auth MFA Enrollment Flow API Reference
DESCRIPTION: Details the sequence of API calls required to enroll a new Multi-Factor Authentication (MFA) factor using TOTP with Supabase Auth. This involves initiating enrollment, challenging the user for a code, and verifying the setup.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-mfa/totp.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
supabase.auth.mfa.enroll()
  Description: Initiates the enrollment of a new TOTP MFA factor for the current user.
  Returns:
    data: { qr_code: string, secret: string } - A base64 encoded QR code image or URI and the shared secret.
    error: Error - An error object if the enrollment fails.
  Usage Notes: Display the QR code for the user to scan with an authenticator app. Provide the secret as plain text if QR scanning is not possible.
```

LANGUAGE: APIDOC
CODE:
```
supabase.auth.mfa.challenge()
  Description: Prepares Supabase Auth to accept a verification code from the user.
  Returns:
    data: { challenge_id: string } - A unique ID for the challenge session.
    error: Error - An error object if the challenge fails.
  Usage Notes: This step is crucial before verifying a TOTP code. For Phone MFA, this step also sends the verification code to the user.
```

LANGUAGE: APIDOC
CODE:
```
supabase.auth.mfa.verify(challengeId: string, code: string)
  Description: Verifies that the user has indeed added the secret from step (1) into their app and is working correctly.
  Parameters:
    challengeId: string - The ID of the challenge session (obtained from challenge()).
    code: string - The Time-based One-Time Password (TOTP) provided by the user from their authenticator app.
  Returns:
    data: { success: boolean } - Indicates if the verification was successful.
    error: Error - An error object if the verification fails.
  Usage Notes: If the verification succeeds, the factor immediately becomes active for the user account. If not, you should repeat steps 2 and 3.
```

----------------------------------------

TITLE: Invoke Supabase Edge Function POST Endpoint via cURL
DESCRIPTION: Example cURL command to send a POST request with a JSON payload to the deployed 'hello-world' Edge Function, demonstrating how to send data to the function's POST route.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/routing.mdx#_snippet_4

LANGUAGE: cURL
CODE:
```
curl --request POST 'https://<project_ref>.supabase.co/functions/v1/hello-world' \
  --header 'Authorization: Bearer ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{ "name":"Foo" }'
```

----------------------------------------

TITLE: Launch RedwoodJS Development Server
DESCRIPTION: Command to start the RedwoodJS development server, which compiles and serves the application, making it accessible in a web browser for testing and development.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-redwoodjs.mdx#_snippet_16

LANGUAGE: bash
CODE:
```
yarn rw dev
```

----------------------------------------

TITLE: Implement Supabase Account Profile Management in React
DESCRIPTION: React component (`Account.js`) for managing user profiles. It uses RedwoodJS's `useAuth` hook to interact with Supabase for fetching and updating user data (username, website, avatar_url), handling loading states, and displaying alerts for errors. It also provides a sign-out button.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-redwoodjs.mdx#_snippet_14

LANGUAGE: jsx
CODE:
```
import { useState, useEffect } from 'react'
import { useAuth } from '@redwoodjs/auth'

const Account = () => {
  const { client: supabase, currentUser, logOut } = useAuth()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  useEffect(() => {
    getProfile()
  }, [supabase.auth.session])

  async function getProfile() {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      }

      const { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }

      alert('Updated profile!')
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row flex-center flex">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + RedwoodJS</h1>
        <p className="description">Your profile</p>
        <div className="form-widget">
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" value={currentUser.email} disabled />
          </div>
          <div>
            <label htmlFor="username">Name</label>
            <input
              id="username"
              type="text"
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="url"
              value={website || ''}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div>
            <button
              className="button primary block"
              onClick={() => updateProfile({ username, website, avatar_url })}
              disabled={loading}
            >
              {loading ? 'Loading ...' : 'Update'}
            </button>
          </div>

          <div>
            <button className="button block" onClick={() => logOut()}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account
```

----------------------------------------

TITLE: Grant and Revoke Permissions for Supabase Auth Hooks
DESCRIPTION: SQL commands to grant `execute` and `usage` permissions to the `supabase_auth_admin` role for a custom Auth Hook function, and to revoke `execute` permissions from `authenticated` and `anon` roles for security. This ensures the hook can be accessed by Supabase Auth but remains secure from public access.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks.mdx#_snippet_7

LANGUAGE: SQL
CODE:
```
grant execute
  on function public.custom_access_token_hook
  to supabase_auth_admin;

grant usage on schema public to supabase_auth_admin;

revoke execute
  on function public.custom_access_token_hook
  from authenticated, anon;
```

----------------------------------------

TITLE: Configure Supabase Auth Hook with PostgreSQL Function URI
DESCRIPTION: Example TOML configuration for a Supabase Auth Hook, setting its URI to a PostgreSQL function. This enables the hook to execute a database function.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks.mdx#_snippet_6

LANGUAGE: TOML
CODE:
```
[auth.hook.<hook_name>]
enabled = true
uri = "pg-functions://...."
```

----------------------------------------

TITLE: Create a Simple Postgres SQL Function
DESCRIPTION: Demonstrates how to create a basic SQL function in Postgres that returns a 'hello world' string. The snippet includes the function declaration, return type, language specification, and the function body. It uses 'create or replace' to allow for creation or updating of the function.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/functions.mdx#_snippet_0

LANGUAGE: sql
CODE:
```
create or replace function hello_world() 
returns text 
language sql 
as $$  
  select 'hello world';  
$$;
```

----------------------------------------

TITLE: Create New Supabase Edge Function
DESCRIPTION: Initializes a new Supabase Edge Function project with the specified name. This command generates the necessary template files for the function.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/telemetry/log-drains.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
supabase functions new hello-world
```

----------------------------------------

TITLE: Example Supabase Auth JWT `amr` claim structure
DESCRIPTION: This JSON snippet illustrates the `amr` (Authentication Methods Reference) claim found in Supabase Auth access tokens. It shows an array of objects, ordered most recent first, indicating the authentication methods a user has employed, along with their timestamps. For instance, a user first signing in with a password and then completing TOTP MFA.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-mfa.mdx#_snippet_8

LANGUAGE: json
CODE:
```
{
  "amr": [
    {
      "method": "totp",
      "timestamp": 1666086056
    },
    {
      "method": "password",
      "timestamp": 1666085924
    }
  ]
}
```

----------------------------------------

TITLE: Handle OAuth Callback and Code Exchange (SvelteKit TypeScript)
DESCRIPTION: This TypeScript code for SvelteKit (`src/routes/auth/callback/+server.js`) handles the OAuth callback. It extracts the authorization `code`, exchanges it for a user session using `supabase.auth.exchangeCodeForSession`, and then redirects the user using SvelteKit's `throw redirect` function.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/_partials/oauth_pkce_flow.mdx#_snippet_3

LANGUAGE: typescript
CODE:
```
import { redirect } from '@sveltejs/kit';

export const GET = async (event) => {
	const {
		url,
		locals: { supabase }
	} = event;
	const code = url.searchParams.get('code') as string;
	const next = url.searchParams.get('next') ?? '/';

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      throw redirect(303, `/${next.slice(1)}`);
    }
  }

  // return the user to an error page with instructions
  throw redirect(303, '/auth/auth-code-error');
};
```

----------------------------------------

TITLE: Link Email or Phone Identity to Anonymous User (Supabase Auth)
DESCRIPTION: Demonstrates how to link an email or phone identity to an anonymous user's account using the `updateUser()` or `update_user()` method in Supabase. Includes steps for email verification and password update.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-anonymous.mdx#_snippet_1

LANGUAGE: javascript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project.supabase.co', 'your-anon-key')

// ---cut---
const { data: updateEmailData, error: updateEmailError } = await supabase.auth.updateUser({
  email: 'valid.email@supabase.io',
})

// verify the user's email by clicking on the email change link
// or entering the 6-digit OTP sent to the email address

// once the user has been verified, update the password
const { data: updatePasswordData, error: updatePasswordError } = await supabase.auth.updateUser({
  password: 'password',
})
```

LANGUAGE: dart
CODE:
```
await supabase.auth.updateUser(UserAttributes(email: 'valid.email@supabase.io'));
```

LANGUAGE: swift
CODE:
```
try await supabase.auth.updateUser(
  user: UserAttributes(email: "valid.email@supabase.io")
)
```

LANGUAGE: kotlin
CODE:
```
supabase.auth.updateUser {
    email = "valid.email@supabase.io"
}
```

LANGUAGE: python
CODE:
```
response = supabase.auth.update_user({
  'email': 'valid.email@supabase.io',
})

# verify the user's email by clicking on the email change link
# or entering the 6-digit OTP sent to the email address

# once the user has been verified, update the password
response = supabase.auth.update_user({
  'password': 'password',
})
```

----------------------------------------

TITLE: Define a Postgres Pre-Request Function
DESCRIPTION: This SQL snippet defines a `plpgsql` function named `public.check_request` that can be configured to run before every Data API request. It serves as a placeholder for custom logic to enforce additional security or business rules.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/securing-your-api.mdx#_snippet_1

LANGUAGE: sql
CODE:
```
create function public.check_request()
  returns void
  language plpgsql
  security definer
  as $$
begin
  -- your logic here
end;
$$;
```

----------------------------------------

TITLE: Overview of Available Supabase Auth Hooks
DESCRIPTION: Documentation of pre-defined Supabase Auth Hooks, detailing their suggested function names, trigger events, and primary functionalities. This serves as a reference for integrating custom logic.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks.mdx#_snippet_5

LANGUAGE: APIDOC
CODE:
```
Hook: Send SMS
  Suggested Function Name: send_sms
  When it is called: Each time an SMS is sent
  What it Does: Allows you to customize message content and SMS Provider

Hook: Send Email
  Suggested Function Name: send_email
  When it is called: Each time an Email is sent
  What it Does: Allows you to customize message content and Email Provider

Hook: Custom Access Token
  Suggested Function Name: custom_access_token
  When it is called: Each time a new JWT is created
  What it Does: Returns the claims you wish to be present in the JWT.

Hook: MFA Verification Attempt
  Suggested Function Name: mfa_verification_attempt
  When it is called: Each time a user tries to verify an MFA factor.
  What it Does: Returns a decision on whether to reject the attempt and future ones, or to allow the user to keep trying.

Hook: Password Verification Attempt
  Suggested Function Name: password_verification_attempt
  When it is called: Each time a user tries to sign in with a password.
  What it Does: Return a decision whether to allow the user to reject the attempt, or to allow the user to keep trying.
```

----------------------------------------

TITLE: Supabase MFA Authenticator Assurance Level (AAL) API
DESCRIPTION: The `supabase.auth.mfa.getAuthenticatorAssuranceLevel()` API is used to determine if a user needs to complete an MFA challenge after initial login. It returns `currentLevel` and `nextLevel` which indicate the user's current authentication strength and the required strength. This allows applications to conditionally prompt users for MFA verification.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-mfa/totp.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
API Method:
  supabase.auth.mfa.getAuthenticatorAssuranceLevel()

Returns:
  Object containing 'currentLevel' and 'nextLevel' properties.

Authenticator Assurance Level (AAL) Meanings:
| Current Level | Next Level | Meaning                                                  |
| ------------: | :--------- | :------------------------------------------------------- |
|        `aal1` | `aal1`     | User does not have MFA enrolled.                         |
|        `aal1` | `aal2`     | User has an MFA factor enrolled but has not verified it. |
|        `aal2` | `aal2`     | User has verified their MFA factor.                      |
|        `aal2` | `aal1`     | User has disabled their MFA factor. (Stale JWT.)         |
```

----------------------------------------

TITLE: Serve Edge Function Locally for Testing
DESCRIPTION: Runs the Edge Function locally for development and testing. It loads environment variables from `.env.local` and optionally disables JWT verification for easier testing.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/hugging-face.mdx#_snippet_4

LANGUAGE: shell
CODE:
```
supabase functions serve --env-file .env.local --no-verify-jwt
```

----------------------------------------

TITLE: Supabase Auth: Sign in with Email Magic Link
DESCRIPTION: Demonstrates how to initiate a passwordless login using a Magic Link sent to a user's email address. The `signInWithOtp` method is used, which sends a Magic Link by default. Options like `shouldCreateUser` (to prevent automatic sign-up) and `emailRedirectTo` (for post-login redirection) can be configured.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-email-passwordless.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('url', 'anonKey')

async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithOtp({
    email: 'valid.email@supabase.io',
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: false,
      emailRedirectTo: 'https://example.com/welcome',
    },
  })
}
```

LANGUAGE: TypeScript
CODE:
```
import { makeRedirectUri } from 'expo-auth-session'

const redirectTo = makeRedirectUri()

const { error } = await supabase.auth.signInWithOtp({
  email: 'valid.email@supabase.io',
  options: {
    emailRedirectTo: redirectTo,
  },
})
```

LANGUAGE: Dart
CODE:
```
Future<void> signInWithEmail() async {
  final AuthResponse res = await supabase.auth.signinwithotp(email: 'valid.email@supabase.io');
}
```

LANGUAGE: Swift
CODE:
```
try await supabase.auth.signInWithOTP(
  email: "valid.email@supabase.io",
  redirectTo: URL(string: "https://example.com/welcome"),
  // set this to false if you do not want the user to be automatically signed up
  shouldCreateUser: false
)
```

LANGUAGE: Kotlin
CODE:
```
suspend fun signInWithEmail() {
	supabase.auth.signInWith(OTP) {
		email = "valid.email@supabase.io"
	}
}
```

LANGUAGE: Python
CODE:
```
response = supabase.auth.sign_in_with_otp({
  'email': 'valid.email@supabase.io',
  'options': {
    # set this to false if you do not want the user to be automatically signed up
    'should_create_user': False,
    'email_redirect_to': 'https://example.com/welcome',
  },
})
```

----------------------------------------

TITLE: Configure Supabase Auth Hook with HTTP URI
DESCRIPTION: Example TOML configuration for the `send_sms` Supabase Auth Hook, setting its URI to an external HTTP endpoint. This allows the hook to call an external service, such as a serverless function.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks.mdx#_snippet_9

LANGUAGE: TOML
CODE:
```
[auth.hook.send_sms]
enabled = true
uri = "http://host.docker.internal:54321/functions/v1/send_sms"
```

----------------------------------------

TITLE: Configure Supabase Environment Variables
DESCRIPTION: Add these environment variables to your project's `.env` file to connect to your Supabase instance. `VITE_SUPABASE_URL` is your Supabase project URL, and `VITE_SUPABASE_ANON_KEY` is your project's public API key. These are essential for the Supabase client to interact with your backend.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/ui-library/content/docs/react/social-auth.mdx#_snippet_0

LANGUAGE: env
CODE:
```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

----------------------------------------

TITLE: Configuring Query Parameters for Supabase Auth UI
DESCRIPTION: Explains how to pass custom query parameters to the authentication flow using the `queryParams` prop of the `Auth` component. This allows for advanced configurations like requesting offline access, forcing consent prompts, or restricting sign-ins to specific domains.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/auth-ui.mdx#_snippet_4

LANGUAGE: jsx
CODE:
```
<Auth
  supabaseClient={supabase}
  providers={['google']}
  queryParams={{
    access_type: 'offline',
    prompt: 'consent',
    hd: 'domain.com',
  }}
  onlyThirdPartyProviders
/>
```

----------------------------------------

TITLE: PostgreSQL: Revoke Default Execute Privileges for New Functions in Schema
DESCRIPTION: Demonstrates how to alter default privileges in a schema (e.g., `public`) to revoke `EXECUTE` permissions for any *new* functions created from the `public`, `anon`, and `authenticated` roles. This ensures new functions are restricted by default.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/functions.mdx#_snippet_10

LANGUAGE: sql
CODE:
```
alter default privileges in schema public revoke execute on functions from public;
alter default privileges in schema public revoke execute on functions from anon, authenticated;
```

----------------------------------------

TITLE: Pull Remote Supabase Database Changes Locally
DESCRIPTION: This command uses the Supabase CLI to pull database schema changes from a remote Supabase branch to the local migrations directory. It is essential for synchronizing changes made directly on the Supabase dashboard with your local Git repository.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/deployment/branching.mdx#_snippet_7

LANGUAGE: bash
CODE:
```
supabase db pull --db-url "postgres://postgres.xxxx:password@xxxx.pooler.supabase.com:6543/postgres"
```

----------------------------------------

TITLE: Create Postgres Table for API Route Generation
DESCRIPTION: This SQL snippet demonstrates how to create a `todos` table in a PostgreSQL database. Creating tables in Supabase automatically generates corresponding REST API endpoints for `GET`, `POST`, `PATCH`, and `DELETE` operations, making the data accessible via HTTP requests.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/creating-routes.mdx#_snippet_0

LANGUAGE: sql
CODE:
```
 -- Create a table called "todos" with a column to store tasks.
create table
  todos (
    id bigint generated by default as identity primary key,
    task text check (char_length(task) > 3)
  );
```

----------------------------------------

TITLE: Create AccountForm Component for User Profile Management (JavaScript)
DESCRIPTION: This React component allows authenticated users to view and update their profile details such as full name, username, website, and avatar URL. It fetches initial profile data on mount using Supabase and provides a function to update the profile. It also includes a sign-out button.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-nextjs.mdx#_snippet_11

LANGUAGE: jsx
CODE:
```
'use client'\nimport { useCallback, useEffect, useState } from 'react'\nimport { createClient } from '@/utils/supabase/client'\n\nexport default function AccountForm({ user }) {\n  const supabase = createClient()\n  const [loading, setLoading] = useState(true)\n  const [fullname, setFullname] = useState(null)\n  const [username, setUsername] = useState(null)\n  const [website, setWebsite] = useState(null)\n  const [avatar_url, setAvatarUrl] = useState(null)\n\n  const getProfile = useCallback(async () => {\n    try {\n      setLoading(true)\n\n      const { data, error, status } = await supabase\n        .from('profiles')\n        .select(`full_name, username, website, avatar_url`)\n        .eq('id', user?.id)\n        .single()\n\n      if (error && status !== 406) {\n        throw error\n      }\n\n      if (data) {\n        setFullname(data.full_name)\n        setUsername(data.username)\n        setWebsite(data.website)\n        setAvatarUrl(data.avatar_url)\n      }\n    } catch (error) {\n      alert('Error loading user data!')\n    } finally {\n      setLoading(false)\n    }\n  }, [user, supabase])\n\n  useEffect(() => {\n    getProfile()\n  }, [user, getProfile])\n\n  async function updateProfile({ username, website, avatar_url }) {\n    try {\n      setLoading(true)\n\n      const { error } = await supabase.from('profiles').upsert({\n        id: user?.id,\n        full_name: fullname,\n        username,\n        website,\n        avatar_url,\n        updated_at: new Date().toISOString(),\n      })\n      if (error) throw error\n      alert('Profile updated!')\n    } catch (error) {\n      alert('Error updating the data!')\n    } finally {\n      setLoading(false)\n    }\n  }\n\n  return (\n    <div className="form-widget">\n      <div>\n        <label htmlFor="email">Email</label>\n        <input id="email" type="text" value={user?.email} disabled />\n      </div>\n      <div>\n        <label htmlFor="fullName">Full Name</label>\n        <input\n          id="fullName"\n          type="text"\n          value={fullname || ''}\n          onChange={(e) => setFullname(e.target.value)}\n        />\n      </div>\n      <div>\n        <label htmlFor="username">Username</label>\n        <input\n          id="username"\n          type="text"\n          value={username || ''}\n          onChange={(e) => setUsername(e.target.value)}\n        />\n      </div>\n      <div>\n        <label htmlFor="website">Website</label>\n        <input\n          id="website"\n          type="url"\n          value={website || ''}\n          onChange={(e) => setWebsite(e.target.value)}\n        />\n      </div>\n\n      <div>\n        <button\n          className="button primary block"\n          onClick={() => updateProfile({ fullname, username, website, avatar_url })}\n          disabled={loading}\n        >\n          {loading ? 'Loading ...' : 'Update'}\n        </button>\n      </div>\n\n      <div>\n        <form action="/auth/signout" method="post">\n          <button className="button block" type="submit">\n            Sign out\n          </button>\n        </form>\n      </div>\n    </div>\n  )\n}
```

----------------------------------------

TITLE: Attempt to Grant Select Privilege as Non-Owner
DESCRIPTION: This snippet demonstrates that even the `postgres` superuser cannot grant privileges on a table if they are neither the owner nor have existing grant privileges on that object. This highlights the importance of object ownership in PostgreSQL permission management.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-04-11-postgres-roles-and-privileges.mdx#_snippet_14

LANGUAGE: SQL
CODE:
```
postgres=> grant select on table public.apps to senior_dev;
ERROR:  permission denied for table apps
```

----------------------------------------

TITLE: Serve Supabase function locally with Oak Server
DESCRIPTION: This command serves Supabase functions locally, disabling JWT verification for easier development and testing. Access the function via http://localhost:54321/functions/v1/oak-server/greet.
SOURCE: https://github.com/supabase/supabase/blob/master/examples/edge-functions/supabase/functions/oak-server/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
supabase functions serve --no-verify-jwt
```

----------------------------------------

TITLE: Configure Supabase Client with Custom Storage for Tokens
DESCRIPTION: This code snippet demonstrates how to configure the Supabase client on the server to use a custom storage object for access and refresh tokens. This approach is suitable for server-only web applications and requires implementing `getItem`, `setItem`, and `removeItem` methods for the custom storage.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/sessions.mdx#_snippet_0

LANGUAGE: typescript
CODE:
```
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('SUPABASE_URL', 'SUPABASE_ANON_KEY', {
  auth: {
    storage: {
      getItem: () => {
        return Promise.resolve('FETCHED_COOKIE')
      },
      setItem: () => {},
      removeItem: () => {},
    },
  },
})
```

----------------------------------------

TITLE: Send User Presence State using Supabase track()
DESCRIPTION: This section demonstrates how to send a user's online status or custom state to all subscribers on a Supabase Realtime channel using the `track()` method. When a client tracks, it triggers `sync` and `join` event handlers for other clients. The `userStatus` object contains the data to be sent.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/presence.mdx#_snippet_2

LANGUAGE: JavaScript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('your_project_url', 'your_supabase_api_key')

// ---cut---
const roomOne = supabase.channel('room_01')

const userStatus = {
  user: 'user-1',
  online_at: new Date().toISOString(),
}

roomOne.subscribe(async (status) => {
  if (status !== 'SUBSCRIBED') { return }

  const presenceTrackStatus = await roomOne.track(userStatus)
  console.log(presenceTrackStatus)
})
```

LANGUAGE: Dart
CODE:
```
final roomOne = supabase.channel('room_01');

final userStatus = {
  'user': 'user-1',
  'online_at': DateTime.now().toIso8601String(),
};

roomOne.subscribe((status, error) async {
  if (status != RealtimeSubscribeStatus.subscribed) return;

  final presenceTrackStatus = await roomOne.track(userStatus);
  print(presenceTrackStatus);
});
```

LANGUAGE: Swift
CODE:
```
let roomOne = await supabase.channel("room_01")

// Using a custom type
let userStatus = UserStatus(
    user: "user-1",
    onlineAt: Date().timeIntervalSince1970
)

await roomOne.subscribe()

try await roomOne.track(userStatus)

// Or using a raw JSONObject.
await roomOne.track(
  [
    "user": .string("user-1"),
    "onlineAt": .double(Date().timeIntervalSince1970)
  ]
)
```

LANGUAGE: Kotlin
CODE:
```
val roomOne = supabase.channel("room_01")

val userStatus = UserStatus( //Your custom class
    user = "user-1",
    onlineAt = Clock.System.now().toEpochMilliseconds()
)

roomOne.subscribe(blockUntilSubscribed = true) //You can also use the roomOne.status flow instead, but this parameter will block the coroutine until the status is joined.

roomOne.track(userStatus)
```

LANGUAGE: Python
CODE:
```
room_one = supabase.channel('room_01')

user_status = {
  "user": 'user-1',
  "online_at": datetime.datetime.now().isoformat(),
}

def on_subscribe(status, err):
  if status != RealtimeSubscribeStates.SUBSCRIBED:
    return

  room_one.track(user_status)

room_one.subscribe(on_subscribe)
```

----------------------------------------

TITLE: Protect SvelteKit API Routes with Supabase Session Check
DESCRIPTION: This example demonstrates how to secure a SvelteKit API route by checking for a valid Supabase user session. If no session is found, it throws a 401 Unauthorized error. Otherwise, it proceeds to fetch data from Supabase, ensuring only authenticated users can access the route.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_10

LANGUAGE: typescript
CODE:
```
// src/routes/api/protected-route/+server.ts
import { json, error } from '@sveltejs/kit'

export const GET = async ({ locals: { supabase, safeGetSession } }) => {
  const { session } = await safeGetSession()
  if (!session) {
    // the user is not signed in
    throw error(401, { message: 'Unauthorized' })
  }
  const { data } = await supabase.from('test').select('*')

  return json({ data })
}
```

----------------------------------------

TITLE: Define Product Data Transfer Object (DTO) in Kotlin
DESCRIPTION: This Kotlin `data class` (`ProductDto.kt`) acts as a Data Transfer Object (DTO) for deserializing product data from Supabase. It leverages `@Serializable` and `@SerialName` annotations to accurately map JSON fields from Supabase to Kotlin properties, ensuring proper data parsing.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-kotlin.mdx#_snippet_10

LANGUAGE: kotlin
CODE:
```
@Serializable
data class ProductDto(

    @SerialName("name")
    val name: String,

    @SerialName("price")
    val price: Double,

    @SerialName("image")
    val image: String?,

    @SerialName("id")
    val id: String
)
```

----------------------------------------

TITLE: Create PostgreSQL RLS Policy for User-Specific Rows
DESCRIPTION: This SQL snippet defines a Row Level Security (RLS) policy named `todo_select_policy` on the `todos` table. It allows users to select only their own rows by checking if the authenticated user's ID (`auth.uid()`) matches the `user_id` column in the `todos` table. This ensures data privacy and security by restricting access to individual rows based on user identity.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2021-12-01-realtime-row-level-security-in-postgresql.mdx#_snippet_0

LANGUAGE: sql
CODE:
```
create policy todo_select_policy
    on todos for select
    using ( (select auth.uid()) = user_id );
```

----------------------------------------

TITLE: Check User Team Membership with auth.jwt() in RLS
DESCRIPTION: Demonstrates how to create a Row Level Security policy that checks if a user's `app_metadata` (specifically a 'teams' array) contains a `team_id`, using the `auth.jwt()` function. This leverages `app_metadata` as it cannot be modified by the user, making it suitable for authorization data.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/row-level-security.mdx#_snippet_12

LANGUAGE: SQL
CODE:
```
create policy "User is in team"
on my_table
to authenticated
using ( team_id in (select auth.jwt() -> 'app_metadata' -> 'teams'));
```

----------------------------------------

TITLE: Create Supabase Server Client and Session Handler in SvelteKit
DESCRIPTION: Set up `hooks.server.js` or `hooks.server.ts` to initialize the Supabase server client. This includes a `safeGetSession` utility function that securely retrieves the user session by validating the JWT, ensuring server-side authentication reliability.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_2

LANGUAGE: js
CODE:
```
// src/hooks.server.js
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'

export const handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event,
  })

  /**
   * Unlike `supabase.auth.getSession`, which is unsafe on the server because it
   * doesn't validate the JWT, this function validates the JWT by first calling
   * `getUser` and aborts early if the JWT signature is invalid.
   */
  event.locals.safeGetSession = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()
    if (error) {
      return { session: null, user: null }
    }

    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return { session, user }
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range' || name === 'x-supabase-api-version'
    },
  })
}
```

LANGUAGE: ts
CODE:
```
// src/hooks.server.ts
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event,
  })

  /**
   * Unlike `supabase.auth.getSession`, which is unsafe on the server because it
   * doesn't validate the JWT, this function validates the JWT by first calling
   * `getUser` and aborts early if the JWT signature is invalid.
   */
  event.locals.safeGetSession = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()
    if (error) {
      return { session: null, user: null }
    }

    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return { session, user }
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range' || name === 'x-supabase-api-version'
    },
  })
}
```

----------------------------------------

TITLE: Implement Client-side Supabase Authentication in Next.js
DESCRIPTION: This code demonstrates how to handle user authentication (sign-up, sign-in, sign-out) within a Next.js Client Component using `@supabase/auth-helpers-nextjs`. It sets up a basic form with email and password inputs, and uses `createClientComponentClient` to interact with Supabase Auth. The `router.refresh()` call is used to re-render the page after authentication actions.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs.mdx#_snippet_4

LANGUAGE: JavaScript
CODE:
```
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.refresh()
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <>
      <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  )
}
```

LANGUAGE: TypeScript
CODE:
```
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import type { Database } from '@/lib/database.types'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.refresh()
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <>
      <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  )
}
```

----------------------------------------

TITLE: Create Partial Index for Specific Data Subsets
DESCRIPTION: This SQL command creates a partial index on the 'status' column in the 'orders' table, specifically for rows where the status is 'shipped'. Partial indexes are smaller and faster than full indexes when queries frequently target a specific subset of data, provided the query's WHERE clause exactly matches the index's condition.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/query-optimization.mdx#_snippet_6

LANGUAGE: sql
CODE:
```
create index idx_orders_status on orders (status)
where status = 'shipped';
```

----------------------------------------

TITLE: Verify OTP in Express.js
DESCRIPTION: This Express.js route handles OTP verification. It retrieves `token_hash` and `type` from query parameters, uses `supabase.auth.verifyOtp` for validation, and redirects the user to the specified `next` URL on success or an error page on failure.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/passwords.mdx#_snippet_4

LANGUAGE: js
CODE:
```
// The client you created from the Server-Side Auth instructions
const { createClient } = require("./lib/supabase")
...
app.get("/auth/confirm", async function (req, res) {
  const token_hash = req.query.token_hash
  const type = req.query.type
  const next = req.query.next ?? "/"

  if (token_hash && type) {
    const supabase = createClient({ req, res })
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      res.redirect(303, `/${next.slice(1)}`)
    }
  }

  // return the user to an error page with some instructions
  res.redirect(303, '/auth/auth-code-error')
})
```

----------------------------------------

TITLE: Send Broadcast Messages to a Supabase Realtime Channel in JavaScript
DESCRIPTION: This code demonstrates how to send a broadcast message to a Supabase Realtime channel. After initializing the client and channel, the `send` method is used with a `broadcast` type, an event name, and a payload. This is useful for rapid, ephemeral messages like cursor movements.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/concepts.mdx#_snippet_1

LANGUAGE: js
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://<project>.supabase.co', '<your-anon-key>')
const roomOne = supabase.channel('room-one') // set your topic here

roomOne.send({
  type: 'broadcast',
  event: 'test',
  payload: { message: 'hello, world' }
})
```

----------------------------------------

TITLE: Implement Supabase User Login Route in Next.js
DESCRIPTION: This snippet outlines how to create a server-side POST route for user login using Supabase authentication helpers in Next.js. It retrieves email and password from form data, uses `supabase.auth.signInWithPassword` to authenticate the user, and redirects to the origin URL upon successful login. TypeScript examples include type definitions for the Supabase client.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs.mdx#_snippet_6

LANGUAGE: JavaScript
CODE:
```
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })
}
```

LANGUAGE: TypeScript
CODE:
```
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { Database } from '@/lib/database.types'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

  await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })
}
```

----------------------------------------

TITLE: Add routes for instruments pages in App.tsx
DESCRIPTION: Define routes for the `list`, `create`, `show`, and `edit` pages of the `instruments` resource within `src/App.tsx`. It is recommended to remove the default `index` route for the Welcome page to avoid conflicts.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/quickstarts/refine.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { Refine, WelcomePage } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
```

----------------------------------------

TITLE: Define Supabase Auth Types in SvelteKit
DESCRIPTION: This snippet illustrates the necessary type definitions for Supabase authentication in SvelteKit's `app.d.ts` file. It shows the `UserSession` and `Locals` interfaces for older versions and the updated `Locals` and `PageData` interfaces for version 0.7.0.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_31

LANGUAGE: ts
CODE:
```
/// <reference types="@sveltejs/kit" />
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
  interface UserSession {
    user: import('@supabase/supabase-js').User
    accessToken?: string
  }

  interface Locals extends UserSession {
    error: import('@supabase/supabase-js').ApiError
  }

  interface Session extends UserSession {}

  // interface Platform {}
  // interface Stuff {}
}
```

LANGUAGE: ts
CODE:
```
/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    session: import('@supabase/auth-helpers-sveltekit').SupabaseSession
  }

  interface PageData {
    session: import('@supabase/auth-helpers-sveltekit').SupabaseSession
  }

  // interface Error {}
  // interface Platform {}
}
```

----------------------------------------

TITLE: Execute Supabase Database Function with Parameters
DESCRIPTION: Illustrates how to call the 'add_planet' function, passing a planet name as a parameter, using both direct SQL queries and various Supabase client libraries. This shows how to interact with parameterized database functions from application code.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/functions.mdx#_snippet_6

LANGUAGE: SQL
CODE:
```
select * from add_planet('Jakku');
```

LANGUAGE: JavaScript
CODE:
```
const { data, error } = await supabase.rpc('add_planet', { name: 'Jakku' })
```

LANGUAGE: Dart
CODE:
```
final data = await supabase
  .rpc('add_planet', params: { 'name': 'Jakku' });
```

LANGUAGE: Swift
CODE:
```
Using `Encodable` type:

struct Planet: Encodable {
  let name: String
}

try await supabase.rpc(
  "add_planet",
  params: Planet(name: "Jakku")
)
.execute()

Using `AnyJSON` convenience` type:

try await supabase.rpc(
  "add_planet",
  params: ["name": AnyJSON.string("Jakku")]
)
.execute()
```

LANGUAGE: Kotlin
CODE:
```
val data = supabase.postgrest.rpc(
    function = "add_planet",
    parameters = buildJsonObject { //You can put here any serializable object including your own classes
        put("name", "Jakku")
    }
)
```

LANGUAGE: Python
CODE:
```
data = supabase.rpc('add_planet', params={'name': 'Jakku'}).execute()
```

----------------------------------------

TITLE: Postgres FTS: Add Generated Column and GIN Index
DESCRIPTION: This SQL snippet demonstrates how to add a `fts_doc_en` generated column to a `movies` table, populating it with a `tsvector` from `title`, `original_title`, and `overview` fields. It also includes the creation of a GIN index on this column to optimize full-text search queries.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-10-14-postgres-full-text-search-vs-the-rest.mdx#_snippet_3

LANGUAGE: sql
CODE:
```
-- Add a generated column that contains the search document
alter table movies
	add column fts_doc_en
	generated always as to_tsvector (
		'english', title || ' ' || original_title || ' ' || overview
	)
	stored;

-- Create a GIN index to make our searches faster
create index movies_fts_doc_en_idx
	on movies
	using gin (fts_doc_en);
```

----------------------------------------

TITLE: Displaying Related Movies in Flutter with FutureBuilder
DESCRIPTION: This Flutter code snippet demonstrates how to asynchronously display a list of related movies using a FutureBuilder. It handles different states such as loading (CircularProgressIndicator), error (Text with error message), and data availability (Wrap of FilmCell widgets). Tapping on a movie navigates to its details page.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-02-26-content-recommendation-with-flutter.mdx#_snippet_10

LANGUAGE: dart
CODE:
```
FutureBuilder<List<Film>>(
              future: relatedFilmsFuture,
              builder: (context, snapshot) {
                if (snapshot.hasError) {
                  return Center(
                    child: Text(snapshot.error.toString()),
                  );
                }
                if (!snapshot.hasData) {
                  return const Center(child: CircularProgressIndicator());
                }
                final films = snapshot.data!;
                return Wrap(
                  children: films
                      .map((film) => InkWell(
                            onTap: () {
                              Navigator.of(context).push(MaterialPageRoute(
                                  builder: (context) =>
                                      DetailsPage(film: film)));
                            },
                            child: FractionallySizedBox(
                              widthFactor: 0.5,
                              child: FilmCell(
                                film: film,
                                isHeroEnabled: false,
                                fontSize: 16,
                              ),
                            ),
                          ))
                      .toList(),
                );
              })
```

----------------------------------------

TITLE: Flutter Canvas UI Layout with Gesture and Mouse Tracking
DESCRIPTION: This Flutter `build` method constructs the main UI for a collaborative design canvas. It integrates `MouseRegion` to track cursor positions for real-time updates, `GestureDetector` to manage drawing interactions (pan down, update, end), and `CustomPaint` to render the canvas content. Additionally, it includes a row of `IconButton` widgets for users to select different drawing modes.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-26-flutter-figma-clone.mdx#_snippet_23

LANGUAGE: dart
CODE:
```
class _CanvasPageState extends State<CanvasPage> {
	...

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: MouseRegion(
        onHover: (event) {
          _syncCanvasObject(event.position);
        },
        child: Stack(
          children: [
            // The main canvas
            GestureDetector(
              onPanDown: _onPanDown,
              onPanUpdate: _onPanUpdate,
              onPanEnd: onPanEnd,
              child: CustomPaint(
                size: MediaQuery.of(context).size,
                painter: CanvasPainter(
                  userCursors: _userCursors,
                  canvasObjects: _canvasObjects,
                ),
              ),
            ),

            // Buttons to change the current mode.
            Positioned(
              top: 0,
              left: 0,
              child: Row(
                children: _DrawMode.values
                    .map((mode) => IconButton(
                          iconSize: 48,
                          onPressed: () {
                            setState(() {
                              _currentMode = mode;
                            });
                          },
                          icon: Icon(mode.iconData),
                          color: _currentMode == mode ? Colors.green : null,
                        ))
                    .toList(),
              ),
            ),
          ],
        ),
      ),
    );
  }
```

----------------------------------------

TITLE: Install Flutter dependencies for Supabase and Google Sign-In
DESCRIPTION: This command adds the 'supabase_flutter' package for interacting with a Supabase instance and the 'google_sign_in' package for implementing social sign-in with Google to the Flutter project's dependencies. It updates the `pubspec.yaml` file and fetches the packages.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-07-18-flutter-authentication.mdx#_snippet_1

LANGUAGE: dart
CODE:
```
flutter pub add supabase_flutter google_sign_in
```

----------------------------------------

TITLE: Dart: Create CanvasPage StatefulWidget skeleton
DESCRIPTION: This snippet provides the basic structure for the `CanvasPage` widget, an interactive `StatefulWidget` in Flutter. It includes the `CanvasPage` class and its corresponding `_CanvasPageState` class, with placeholders for properties and methods to be added later.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-26-flutter-figma-clone.mdx#_snippet_15

LANGUAGE: dart
CODE:
```
/// Interactive art board page to draw and collaborate with other users.
class CanvasPage extends StatefulWidget {
  const CanvasPage({super.key});

  @override
  State<CanvasPage> createState() => _CanvasPageState();
}

class _CanvasPageState extends State<CanvasPage> {
	// TODO: Add properties

	// TODO: Add methods

  @override
  Widget build(BuildContext context) {
    return Scaffold();
  }
}
```

----------------------------------------

TITLE: Generate OpenAI Embedding with Arbitrary Dimensions
DESCRIPTION: This snippet illustrates that OpenAI's new embedding models allow generating embeddings with arbitrary dimension sizes, even non-standard ones like 123. While technically possible, the accompanying text advises against using such non-standard dimensions due to potential performance degradation. It uses the same `openai.embeddings.create` method but with a different `dimensions` value.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-02-13-matryoshka-embeddings.mdx#_snippet_1

LANGUAGE: typescript
CODE:
```
const {
  data: [{ embedding }],
} = await openai.embeddings.create({
  model: 'text-embedding-3-large',
  input: 'The cat chases the mouse',
  dimensions: 123,
})

console.log(embedding.length) // 123
```

----------------------------------------

TITLE: Implement Supabase Authentication Form in React Native
DESCRIPTION: This snippet creates a basic login and registration form in `app/index.tsx` for a React Native app. It handles user input for email and password, and uses Supabase's `signInWithPassword` and `signUp` methods for authentication, displaying alerts for errors and a loading spinner.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-08-01-react-native-storage.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
import { Alert, View, Button, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import { supabase } from '../config/initSupabase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // Sign in with email and password
  const onSignInPress = async () => {
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  // Create a new user
  const onSignUpPress = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <Spinner visible={loading} />

      <Text style={styles.header}>My Cloud</Text>

      <TextInput
        autoCapitalize="none"
        placeholder="john@doe.com"
        value={email}
        onChangeText={setEmail}
        style={styles.inputField}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.inputField}
      />

      <TouchableOpacity onPress={onSignInPress} style={styles.button}>
        <Text style={{ color: '#fff' }}>Sign in</Text>
      </TouchableOpacity>
      <Button onPress={onSignUpPress} title="Create Account" color={'#fff'}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    padding: 20,
    backgroundColor: '#151515',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    margin: 50,
    color: '#fff',
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#2b825b',
    borderRadius: 4,
    padding: 10,
    color: '#fff',
    backgroundColor: '#363636',
  },
  button: {
    marginVertical: 15,
    alignItems: 'center',
    backgroundColor: '#2b825b',
    padding: 12,
    borderRadius: 4,
  },
})

export default Login
```

----------------------------------------

TITLE: Improve Type Safety with Supabase Helper Types
DESCRIPTION: This snippet illustrates the improved developer experience with Supabase's new Helper Types. It shows how to simplify type declarations for database rows, moving from verbose nested types to a more concise and readable shorthand.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-08-08-supabase-local-dev.mdx#_snippet_6

LANGUAGE: tsx
CODE:
```
// Before
let movie: Database['public']['Tables']['movies']['Row'] = // ...

// After
let movie: Tables<'movies'> = // ...
```

----------------------------------------

TITLE: Create Supabase 'countries' Table and Insert Data
DESCRIPTION: This SQL snippet defines a 'countries' table with 'id' and 'name' columns and populates it with initial data. This table will be used as an example for generating TypeScript types and fetching data.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-12-react-query-nextjs-app-router-cache-helpers.mdx#_snippet_3

LANGUAGE: sql
CODE:
```
create table countries (
  "id" serial primary key,
  "name" text
);

insert into countries
  (id, name)
values
  (1, 'United Kingdom'),
  (2, 'United States'),
  (3, 'Singapore');
```

----------------------------------------

TITLE: Update a Single Document in FerretDB Collection
DESCRIPTION: Shows how to update a specific document in the 'players' collection in FerretDB using `db.players.updateOne`. This command targets a document by `player_name` and sets its `position` field.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-31-nosql-mongodb-compatibility-with-ferretdb-and-flydotio.mdx#_snippet_5

LANGUAGE: json5
CODE:
```
db.players.updateOne(
    { player_name: "Giggs" },
    { $set: { position: "CM" } }
);
```

----------------------------------------

TITLE: Define Circle Canvas Object in Dart
DESCRIPTION: Defines the `Circle` class, a `CanvasObject` representing a circle on a canvas. It includes constructors for initialization and JSON deserialization, methods for serialization (`toJson`), copying (`copyWith`), checking intersection with a point (`intersectsWith`), and moving the object (`move`). This class manages the circle's center, radius, ID, and color.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-26-flutter-figma-clone.mdx#_snippet_10

LANGUAGE: dart
CODE:
```
/// Circle displayed on the canvas.
class Circle extends CanvasObject {
  static String type = 'circle';

  final Offset center;
  final double radius;

  Circle({
    required super.id,
    required super.color,
    required this.radius,
    required this.center,
  });

  Circle.fromJson(Map<String, dynamic> json)
      : radius = json['radius'],
        center = Offset(json['center']['x'], json['center']['y']),
        super(id: json['id'], color: Color(json['color']));

  /// Constructor to be used when first starting to draw the object on the canvas
  Circle.createNew(this.center)
      : radius = 0,
        super(id: const Uuid().v4(), color: RandomColor.getRandom());

  @override
  Map<String, dynamic> toJson() {
    return {
      'object_type': type,
      'id': id,
      'color': color.value,
      'center': {
        'x': center.dx,
        'y': center.dy,
      },
      'radius': radius,
    };
  }

  @override
  Circle copyWith({
    double? radius,
    Offset? center,
    Color? color,
  }) {
    return Circle(
      radius: radius ?? this.radius,
      center: center ?? this.center,
      id: id,
      color: color ?? this.color,
    );
  }

  @override
  bool intersectsWith(Offset point) {
    final centerToPointerDistance = (point - center).distance;
    return radius > centerToPointerDistance;
  }

  @override
  Circle move(Offset delta) {
    return copyWith(center: center + delta);
  }
}
```

----------------------------------------

TITLE: Create React Context for Supabase Authentication State
DESCRIPTION: This snippet defines an `AuthContext` and `AuthProvider` in `provider/AuthProvider.tsx` to manage and provide the Supabase authentication state throughout the React Native app. It uses `onAuthStateChange` to listen for session changes, updates user and session states, and includes a `signOut` function.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-08-01-react-native-storage.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import React, { useState, useEffect, createContext, PropsWithChildren } from 'react'
import { Session, User } from '@supabase/supabase-js'
import { supabase } from '../config/initSupabase'

type AuthProps = {
  user: User | null
  session: Session | null
  initialized?: boolean
  signOut?: () => void
}

export const AuthContext = createContext<Partial<AuthProps>>({})

// Custom hook to read the context values
export function useAuth() {
  return React.useContext(AuthContext)
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>()
  const [session, setSession] = useState<Session | null>(null)
  const [initialized, setInitialized] = useState<boolean>(false)

  useEffect(() => {
    // Listen for changes to authentication state
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session)
      setUser(session ? session.user : null)
      setInitialized(true)
    })
    return () => {
      data.subscription.unsubscribe()
    }
  }, [])

  // Log out the user
  const signOut = async () => {
    await supabase.auth.signOut()
  }

  const value = {
    user,
    session,
    initialized,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
```

----------------------------------------

TITLE: Override Supabase Query Response Types
DESCRIPTION: This section shows how to override the TypeScript type of an individual successful response from a Supabase query. You can perform a partial type override to adjust only some properties, or a full replacement of the original return type using the `{ merge: false }` option. Examples include overriding types for standard selects and queries with `maybeSingle` or `single`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/docs/ref/javascript/typescript-support.mdx#_snippet_4

LANGUAGE: typescript
CODE:
```
// Partial type override allows you to only override some of the properties in your results
const { data } = await supabase.from('countries').select().overrideTypes<Array<{ id: string }>>()
// For a full replacement of the original return type use the `{ merge: false }` property as second argument
const { data } = await supabase
  .from('countries')
  .select()
  .overrideTypes<Array<{ id: string }>, { merge: false }>()
// Use it with `maybeSingle` or `single`
const { data } = await supabase.from('countries').select().single().overrideTypes<{ id: string }>()
```

----------------------------------------

TITLE: Insert or Update Vectors in Supabase Vecs Collection
DESCRIPTION: This Python code demonstrates how to add new vector records or update existing ones in a `vecs` collection using the `upsert` method. Each record includes a user-defined identifier, the vector data (as a list or NumPy array), and optional associated metadata.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-05-31-vecs.mdx#_snippet_2

LANGUAGE: Python
CODE:
```
# add records to the collection
docs.upsert(
    vectors=[
        (
          "vec0",           # the records user defined identifier
          [0.1, 0.2, 0.3],  # the vector. A list or np.array
          {"year": 1973}    # associated metadata
        )
    ]
)
```

----------------------------------------

TITLE: Authenticating Users with Supabase and Next.js Server Actions
DESCRIPTION: This snippet demonstrates how to implement server-side authentication using Supabase's `signInWithOAuth` method within a Next.js Server Action. It shows a basic form that triggers the sign-in process when submitted, leveraging the 'use server' directive for server-only execution.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-11-01-supabase-is-now-compatible-with-nextjs-14.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
export default async function Page() {
  const signIn = async () => {
    'use server'
    supabase.auth.signInWithOAuth({...})
  }

  return (
    <form action={signIn}>
      <button>Sign in with GitHub</button>
    </form>
  )
}
```

----------------------------------------

TITLE: Client-Side Data Fetching with Supabase RLS and React Hooks
DESCRIPTION: This component illustrates how to securely fetch data client-side using Supabase Row Level Security (RLS). It ensures queries are only executed after the user is authenticated and defined, utilizing `useSupabaseClient` and `useUser` hooks.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs-pages.mdx#_snippet_7

LANGUAGE: JavaScript
CODE:
```
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useEffect, useState } from 'react'

const LoginPage = () => {
  const supabaseClient = useSupabaseClient()
  const user = useUser()
  const [data, setData] = useState()

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from('test').select('*')
      setData(data)
    }
    // Only run query once user is logged in.
    if (user) loadData()
  }, [user])

  if (!user)
    return (
      <Auth
        redirectTo="http://localhost:3000/"
        appearance={{ theme: ThemeSupa }}
        supabaseClient={supabaseClient}
        providers={['google', 'github']}
        socialLayout="horizontal"
      />
    )

  return (
    <>
      <button onClick={() => supabaseClient.auth.signOut()}>Sign out</button>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>client-side data fetching with RLS</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default LoginPage
```

----------------------------------------

TITLE: Dart: Define _DrawMode enum for canvas actions
DESCRIPTION: This Dart enum, `_DrawMode`, defines the different interaction modes available to users on the canvas: `pointer` for moving objects, `circle` for drawing circles, and `rectangle` for drawing rectangles. Each mode is associated with a specific `IconData` for UI representation.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-26-flutter-figma-clone.mdx#_snippet_14

LANGUAGE: dart
CODE:
```
/// Different input modes users can perform
enum _DrawMode {
  /// Mode to move around existing objects
  pointer(iconData: Icons.pan_tool_alt),

  /// Mode to draw circles
  circle(iconData: Icons.circle_outlined),

  /// Mode to draw rectangles
  rectangle(iconData: Icons.rectangle_outlined);

  const _DrawMode({required this.iconData});

	/// Icon used in the IconButton to toggle the mode
  final IconData iconData;
}
```

----------------------------------------

TITLE: Define Supabase Type Declarations for SvelteKit
DESCRIPTION: This snippet shows how to define TypeScript type declarations for Supabase within the SvelteKit `app.d.ts` file. It illustrates the change from directly defining `SupabaseSession` in `Locals` and `PageData` for 0.7.x to introducing `App.Supabase` for database and schema types in 0.8.0.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_25

LANGUAGE: ts
CODE:
```
/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Locals {
    session: import('@supabase/auth-helpers-sveltekit').SupabaseSession
  }

  interface PageData {
    session: import('@supabase/auth-helpers-sveltekit').SupabaseSession
  }

  // interface Error {}
  // interface Platform {}
}
```

LANGUAGE: ts
CODE:
```
/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  interface Supabase {
    Database: import('./DatabaseDefinitions').Database
    SchemaName: 'public'
  }

  // interface Locals {}
  interface PageData {
    session: import('@supabase/auth-helpers-sveltekit').SupabaseSession
  }
  // interface Error {}
  // interface Platform {}
}
```

----------------------------------------

TITLE: Protecting SvelteKit Pages with Supabase Authentication
DESCRIPTION: These snippets demonstrate how to protect a SvelteKit page (`src/routes/profile/+page.svelte` and `src/routes/profile/+page.ts`) by checking for an active Supabase session. It shows the client-side Svelte component and the server-side `load` function for both 0.8.x and 0.9.0 versions, including redirection for unauthenticated users and data fetching from Supabase.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_20

LANGUAGE: svelte
CODE:
```
<!-- src/routes/profile/+page.svelte -->
<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data
  $: ({ user, tableData } = data)
</script>

<div>Protected content for {user.email}</div>
<pre>{JSON.stringify(tableData, null, 2)}</pre>
<pre>{JSON.stringify(user, null, 2)}</pre>
```

LANGUAGE: ts
CODE:
```
// src/routes/profile/+page.ts
import type { PageLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { redirect } from '@sveltejs/kit'

export const load: PageLoad = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (!session) {
    redirect(303, '/')
  }
  const { data: tableData } = await supabaseClient.from('test').select('*')

  return {
    user: session.user,
    tableData,
  }
}
```

LANGUAGE: svelte
CODE:
```
<!-- src/routes/profile/+page.svelte -->
<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
  $: ({ user, tableData } = data)
</script>

<div>Protected content for {user.email}</div>
<pre>{JSON.stringify(tableData, null, 2)}</pre>
<pre>{JSON.stringify(user, null, 2)}</pre>
```

LANGUAGE: ts
CODE:
```
// src/routes/profile/+page.ts
import type { PageLoad } from './$types'
import { redirect } from '@sveltejs/kit'

export const load: PageLoad = async ({ parent }) => {
  const { supabase, session } = await parent()
  if (!session) {
    redirect(303, '/')
  }
  const { data: tableData } = await supabase.from('test').select('*')

  return {
    user: session.user,
    tableData,
  }
}
```

----------------------------------------

TITLE: Overview of Supabase Client Creation Methods in Next.js Auth Helpers
DESCRIPTION: This section outlines the five different methods for instantiating the Supabase client within various Next.js contexts using the Auth Helpers. It details which `createClient` function to use for Client Components, Server Components, Server Actions, Route Handlers, and Middleware, emphasizing context-specific client instantiation.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs.mdx#_snippet_9

LANGUAGE: APIDOC
CODE:
```
Supabase Client Creation Methods:
  - createClientComponentClient: For use in Client Components
  - createServerComponentClient: For use in Server Components
  - createServerActionClient: For use in Server Actions
  - createRouteHandlerClient: For use in Route Handlers
  - createMiddlewareClient: For use in Middleware
```

----------------------------------------

TITLE: Install Supabase packages for Next.js
DESCRIPTION: Install the required Supabase packages, `@supabase/supabase-js` and `@supabase/ssr`, using npm. These packages provide the core Supabase client and server-side rendering helpers for Next.js.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/nextjs.mdx#_snippet_10

LANGUAGE: sh
CODE:
```
npm install @supabase/supabase-js @supabase/ssr
```

----------------------------------------

TITLE: Query data from the app
DESCRIPTION: In `App.jsx`, create a Supabase client to fetch the instruments data.

Add a `getInstruments` function to fetch the data and display the query result to the page.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/quickstarts/solidjs.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
import { createClient } from "@supabase/supabase-js";
import { createResource, For } from "solid-js";

const supabase = createClient('https://<project>.supabase.co', '<your-anon-key>');

async function getInstruments() {
  const { data } = await supabase.from("instruments").select();
  return data;
}

function App() {
  const [instruments] = createResource(getInstruments);

  return (
    <ul>
      <For each={instruments()}>{(instrument) => <li>{instrument.name}</li>}</For>
    </ul>
  );
}

export default App;
```

----------------------------------------

TITLE: Creating Local .env File for Secrets
DESCRIPTION: Shows how to create a local `.env.local` file within the `supabase` directory and add a secret to it using a bash command. This file is automatically loaded by `supabase start`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/secrets.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
echo "MY_NAME=Yoda" >> ./supabase/.env.local
```

----------------------------------------

TITLE: Identify Table Owner in PostgreSQL
DESCRIPTION: This snippet uses the `\dt` command in `psql` to determine the owner of a specific table. It confirms that `junior_dev` is the owner of the `public.apps` table, which explains why `junior_dev` has full privileges and can grant access.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-04-11-postgres-roles-and-privileges.mdx#_snippet_15

LANGUAGE: SQL
CODE:
```
postgres=> \dt public.apps
          List of relations
┌────────┬──────┬───────┬────────────┐
│ Schema │ Name │ Type  │   Owner    │
├────────┼──────┼───────┼────────────┤
│ public │ apps │ table │ junior_dev │
└────────┴──────┴───────┴────────────┘
(1 row)
```

----------------------------------------

TITLE: Query Vecs Collection by Text with Hugging Face Adapter
DESCRIPTION: This snippet demonstrates how to perform a search query on a `vecs` collection using plain text. Similar to upserting, the adapter transparently converts the query text into vectors, allowing the system to find relevant results based on the semantic meaning of the text.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-08-07-hugging-face-supabase.mdx#_snippet_2

LANGUAGE: Python
CODE:
```
# Search by text
docs.query(data="how many ping pong balls fit in a Boeing ...")

# Results: [...]
```

----------------------------------------

TITLE: Implement React Native Authentication Component
DESCRIPTION: Develop a `components/Auth.tsx` React Native component to handle user sign-in and sign-up functionalities. This component uses `useState` for email and password inputs, `supabase.auth.signInWithPassword` and `supabase.auth.signUp` for authentication, and displays alerts for errors or verification messages.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/quickstarts/react-native.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { supabase } from '../lib/supabase'
import { Button, Input } from '@rneui/themed'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
```

----------------------------------------

TITLE: Initial Refine Component Configuration in App.tsx
DESCRIPTION: This snippet displays the initial structure of the `App.tsx` file, showcasing the `<Refine />` component. It illustrates how `dataProvider`, `liveProvider`, and `authProvider` are configured using the `supabaseClient` and other Refine components like `RefineKbar`, `UnsavedChangesNotifier`, and `DocumentTitleHandler` for routing and application features.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-refine.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { Refine, WelcomePage } from '@refinedev/core'
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar'
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6'
import { dataProvider, liveProvider } from '@refinedev/supabase'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import authProvider from './authProvider'
import { supabaseClient } from './utility'

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <Refine
          dataProvider={dataProvider(supabaseClient)}
          liveProvider={liveProvider(supabaseClient)}
          authProvider={authProvider}
          routerProvider={routerBindings}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          <Routes>
            <Route index element={<WelcomePage />} />
          </Routes>
          <RefineKbar />
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </RefineKbarProvider>
    </BrowserRouter>
  )
}

export default App
```

----------------------------------------

TITLE: Supabase Auth Sign Up with Email Redirect
DESCRIPTION: Demonstrates how to use the `signUp` function with the Supabase client, setting the `emailRedirectTo` option to the new `/auth/callback` route handler for PKCE flow compatibility in Next.js Auth Helpers v0.7.x.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs.mdx#_snippet_19

LANGUAGE: jsx
CODE:
```
supabase.auth.signUp({
  email: 'valid.email@supabase.io',
  password: 'sup3rs3cur3',
  options: {
    emailRedirectTo: 'http://localhost:3000/auth/callback'
  }
})
```

----------------------------------------

TITLE: Supabase User Authentication Actions (Signup and Login)
DESCRIPTION: This TypeScript code defines server-side actions for user signup and login using Supabase authentication. It handles form data, calls Supabase `signUp` or `signInWithPassword`, and redirects based on the outcome (success or error).
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/sveltekit.mdx#_snippet_8

LANGUAGE: TypeScript
CODE:
```
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      console.error(error)
      redirect(303, '/auth/error')
    } else {
      redirect(303, '/')
    }
  },
  login: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      console.error(error)
      redirect(303, '/auth/error')
    } else {
      redirect(303, '/private')
    }
  }
```

----------------------------------------

TITLE: Create API Route for Supabase Email Confirmation
DESCRIPTION: This Next.js API route handles the email confirmation flow for Supabase authentication. It processes the token hash and type from the confirmation email link, verifies the OTP using the server-side Supabase client, and redirects the user based on the verification result.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/nextjs.mdx#_snippet_15

LANGUAGE: ts
CODE:
```
import { type EmailOtpType } from '@supabase/supabase-js'
import type { NextApiRequest, type NextApiResponse } from 'next'

import createClient from '@/utils/supabase/api'

function stringOrFirstString(item: string | string[] | undefined) {
  return Array.isArray(item) ? item[0] : item
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).appendHeader('Allow', 'GET').end()
    return
  }

  const queryParams = req.query
  const token_hash = stringOrFirstString(queryParams.token_hash)
  const type = stringOrFirstString(queryParams.type)

  let next = '/error'

  if (token_hash && type) {
    const supabase = createClient(req, res)
    const { error } = await supabase.auth.verifyOtp({
      type: type as EmailOtpType,
      token_hash
    })
    if (error) {
      console.error(error)
    } else {
      next = stringOrFirstString(queryParams.next) || '/'
    }
  }

  res.redirect(next)
}
```

----------------------------------------

TITLE: Create a Nuxt.js Application
DESCRIPTION: Initializes a new Nuxt.js application named `my-app` using the `npx nuxi` command, setting up the basic project structure.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/quickstarts/nuxtjs.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx nuxi@latest init my-app
```

----------------------------------------

TITLE: Protecting SvelteKit API Routes with Supabase Authentication
DESCRIPTION: These snippets illustrate how to secure a SvelteKit API route (`src/routes/api/protected-route/+server.ts`) using Supabase authentication. It provides examples for both 0.8.x and 0.9.0 versions, showing how to check for a session and handle unauthorized access (redirection or throwing an error) before fetching data from Supabase.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_21

LANGUAGE: ts
CODE:
```
// src/routes/api/protected-route/+server.ts
import type { RequestHandler } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'
import { json, redirect } from '@sveltejs/kit'

export const GET: RequestHandler = async (event) => {
  const { session, supabaseClient } = await getSupabase(event)
  if (!session) {
    redirect(303, '/')
  }
  const { data } = await supabaseClient.from('test').select('*')

  return json({ data })
}
```

LANGUAGE: ts
CODE:
```
// src/routes/api/protected-route/+server.ts
import type { RequestHandler } from './$types'
import { json, error } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ locals: { supabase, getSession } }) => {
  const { session } = await getSession()
  if (!session) {
    // the user is not signed in
    throw error(401, { message: 'Unauthorized' })
  }
  const { data } = await supabase.from('test').select('*')

  return json({ data })
}
```

----------------------------------------

TITLE: Initialize Supabase Server Client in Astro Middleware
DESCRIPTION: This snippet illustrates how to configure a Supabase server client within Astro middleware. The `onRequest` function intercepts requests, allowing the Supabase client to be initialized with custom cookie handling to synchronize cookies between the server and client for authentication and SSR.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/creating-a-client.mdx#_snippet_14

LANGUAGE: TypeScript
CODE:
```
import { createServerClient, parseCookieHeader } from '@supabase/ssr'
import { defineMiddleware } from 'astro:middleware'

export const onRequest = defineMiddleware(async (context, next) => {
  const supabase = createServerClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(context.request.headers.get('Cookie') ?? '')
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            context.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  return next()
})
```

----------------------------------------

TITLE: Create Supabase Server Client Utility for Express
DESCRIPTION: This snippet provides a reusable utility function for creating a Supabase server client in an Express application. It takes the Express `context` (containing `req` and `res`) to handle cookie parsing from the request headers and setting cookies in the response headers, facilitating SSR and authentication in Express.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/creating-a-client.mdx#_snippet_18

LANGUAGE: JavaScript
CODE:
```
const { createServerClient, parseCookieHeader, serializeCookieHeader } = require('@supabase/ssr')

exports.createClient = (context) => {
  return createServerClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return parseCookieHeader(context.req.headers.cookie ?? '')
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          context.res.appendHeader('Set-Cookie', serializeCookieHeader(name, value, options))
        )
      },
    },
  })
}
```

----------------------------------------

TITLE: Initialize Supabase Server Client in Astro
DESCRIPTION: This Astro component code demonstrates how to create a Supabase server client, handling cookie parsing from the request headers and setting cookies for responses.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/creating-a-client.mdx#_snippet_10

LANGUAGE: TypeScript
CODE:
```
---
import { createServerClient, parseCookieHeader } from "@supabase/ssr";

const supabase = createServerClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
  {
    cookies: {
      getAll() {
        return parseCookieHeader(Astro.request.headers.get('Cookie') ?? '')
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          Astro.cookies.set(name, value, options))
      },
    },
  }
);
---
```

----------------------------------------

TITLE: Configure Supabase Server Client in SvelteKit Hooks
DESCRIPTION: This snippet demonstrates how to set up the Supabase server client within SvelteKit's `hooks.server.ts` file. It includes custom cookie handling for `setAll` to ensure proper path setting and a `safeGetSession` utility to validate the JWT and retrieve user information.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/creating-a-client.mdx#_snippet_6

LANGUAGE: TypeScript
CODE:
```
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createServerClient } from '@supabase/ssr'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return event.cookies.getAll()
      },
      setAll(cookiesToSet) {
        /**
         * Note: You have to add the `path` variable to the
         * set and remove method due to sveltekit's cookie API
         * requiring this to be set, setting the path to an empty string
         * will replicate previous/standard behavior (https://kit.svelte.dev/docs/types#public-types-cookies)
         */
        cookiesToSet.forEach(({ name, value, options }) =>
          event.cookies.set(name, value, { ...options, path: '/' })
        )
      },
    },
  })

  /**
   * Unlike `supabase.auth.getSession()`, which returns the session _without_
   * validating the JWT, this function also calls `getUser()` to validate the
   * JWT before returning the session.
   */
  event.locals.safeGetSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    if (!session) {
      return { session: null, user: null }
    }

    const {
      data: { user },
      error,
    } = await event.locals.supabase.auth.getUser()
    if (error) {
      // JWT validation has failed
      return { session: null, user: null }
    }

    return { session, user }
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range' || name === 'x-supabase-api-version'
    },
  })
}
```

----------------------------------------

TITLE: Initialize Supabase Realtime Client and Channel in JavaScript
DESCRIPTION: This snippet demonstrates how to initialize the Supabase client and create a new Realtime channel. A channel is identified by a unique topic, enabling clients to send and receive messages bi-directionally. This is the foundational step for building real-time communication features.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/concepts.mdx#_snippet_0

LANGUAGE: js
CODE:
```
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://<project>.supabase.co', '<your-anon-key>')

const roomOne = supabase.channel('room-one') // set your topic here
```

----------------------------------------

TITLE: Basic Error Message Component
DESCRIPTION: A simple React component snippet that returns a paragraph element indicating an error.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/nextjs.mdx#_snippet_17

LANGUAGE: tsx
CODE:
```
return <p>Sorry, something went wrong</p>
```

----------------------------------------

TITLE: Creating RLS Policy with WITH CHECK for INSERT
DESCRIPTION: Shows how to define a Row-Level Security (RLS) policy using `WITH CHECK` for `INSERT` operations. This policy ensures that new rows meet specific conditions, such as matching the authenticated user's ID, preventing unauthorized data insertion. It acts as a dynamic `CHECK` constraint.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/rls-simplified-BJTcS8.mdx#_snippet_2

LANGUAGE: sql
CODE:
```
-- Allow users to add to table, but make sure their user_id matches the one in their JWT:

create policy "Allow user to add posts"
on "public"."posts"
as PERMISSIVE
for INSERT
to authenticated
with check(
  (select auth.uid()) = user_id
);

-- Example: failing insert
INSERT INTO posts
VALUES (<false id>, <comment>);

-- Example: successful insert
INSERT INTO posts
VALUES (<real id>, <comment>);
```

----------------------------------------

TITLE: SvelteKit Actions for Supabase User Authentication
DESCRIPTION: This TypeScript code defines SvelteKit actions for handling user sign-in and sign-out processes using Supabase authentication. It manages form data submission, interacts with the Supabase Auth API, and provides robust error handling and redirection logic.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_15

LANGUAGE: TypeScript
CODE:
```
import { fail, redirect } from '@sveltejs/kit'
import { AuthApiError } from '@supabase/supabase-js'

export const actions = {
  signin: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      if (error instanceof AuthApiError && error.status === 400) {
        return fail(400, {
          error: 'Invalid credentials.',
          values: {
            email,
          },
        })
      }
      return fail(500, {
        error: 'Server error. Try again later.',
        values: {
          email,
        },
      })
    }

    redirect(303, '/dashboard')
  },

  signout: async ({ locals: { supabase } }) => {
    await supabase.auth.signOut()
    redirect(303, '/')
  },
}
```

----------------------------------------

TITLE: Check User Session with Supabase getSession
DESCRIPTION: Determines if a user is authenticated by retrieving their session data from Supabase. The session contains unverified user metadata, which should not be used for authorization or sensitive purposes.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/remix.mdx#_snippet_5

LANGUAGE: jsx
CODE:
```
const {
  data: { session },
} = await supabaseClient.auth.getSession()
```

----------------------------------------

TITLE: Configure Angular AppModule with ReactiveFormsModule
DESCRIPTION: This code updates the `AppModule` to include `ReactiveFormsModule` from `@angular/forms`, which is necessary for handling form inputs in Angular applications. It also declares all necessary components like `AppComponent`, `AuthComponent`, `AccountComponent`, and `AvatarComponent`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-angular.mdx#_snippet_6

LANGUAGE: ts
CODE:
```
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AuthComponent } from './auth/auth.component'
import { AccountComponent } from './account/account.component'
import { ReactiveFormsModule } from '@angular/forms'
import { AvatarComponent } from './avatar/avatar.component'

@NgModule({
  declarations: [AppComponent, AuthComponent, AccountComponent, AvatarComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

----------------------------------------

TITLE: Implement Supabase Authentication and Logout in React
DESCRIPTION: This code snippet demonstrates how to handle user authentication (email/password, GitHub OAuth) and logout using the Supabase client within a React component. It accesses the Supabase instance via `useOutletContext` and provides handlers for different login methods and sign-out.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/remix.mdx#_snippet_14

LANGUAGE: jsx
CODE:
```
export default function Login() {
  const { supabase } = useOutletContext()

  const handleEmailLogin = async () => {
    await supabase.auth.signInWithPassword({
      email: 'valid.email@supabase.io',
      password: 'password',
    })
  }

  const handleGitHubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    })
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <>
      <button onClick={handleEmailLogin}>Email Login</button>
      <button onClick={handleGitHubLogin}>GitHub Login</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
```

LANGUAGE: tsx
CODE:
```
export default function Login() {
  const { supabase } = useOutletContext<{ supabase: SupabaseClient<Database> }>()

  const handleEmailLogin = async () => {
    await supabase.auth.signInWithPassword({
      email: 'valid.email@supabase.io',
      password: 'password',
    })
  }

  const handleGitHubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    })
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <>
      <button onClick={handleEmailLogin}>Email Login</button>
      <button onClick={handleGitHubLogin}>GitHub Login</button>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}
```

----------------------------------------

TITLE: SQL Seed Data for Role Permissions
DESCRIPTION: Inserts initial data into the `role_permissions` table, establishing which permissions are granted to specific roles. For example, 'admin' can delete channels and messages, while 'moderator' can only delete messages.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/custom-claims-and-role-based-access-control-rbac.mdx#_snippet_2

LANGUAGE: sql
CODE:
```
insert into public.role_permissions (role, permission)
values
  ('admin', 'channels.delete'),
  ('admin', 'messages.delete'),
  ('moderator', 'messages.delete');
```

----------------------------------------

TITLE: Protect SvelteKit Server Actions with Supabase Session Check
DESCRIPTION: This snippet illustrates how to secure a SvelteKit server action by verifying the user's Supabase session. If the user is not logged in, a 401 Unauthorized error is thrown. If authenticated, the action proceeds to process form data and interact with Supabase, for example, to create a new post.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_11

LANGUAGE: typescript
CODE:
```
// src/routes/posts/+page.server.ts
import { error, fail } from '@sveltejs/kit'

export const actions = {
  createPost: async ({ request, locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()

    if (!session) {
      // the user is not signed in
      throw error(401, { message: 'Unauthorized' })
    }
    // we are save, let the user create the post
    const formData = await request.formData()
    const content = formData.get('content')

    const { error: createPostError, data: newPost } = await supabase
      .from('posts')
      .insert({ content })

    if (createPostError) {
      return fail(500, {
        supabaseErrorMessage: createPostError.message,
      })
    }
    return {
      newPost,
    }
  },
}
```

----------------------------------------

TITLE: Generated TypeScript Database Types
DESCRIPTION: Illustrates the structure of the `database.types.ts` file generated by the Supabase CLI. It defines the `Json` type and the `Database` interface, including `Row`, `Insert`, and `Update` types for the `movies` table based on the SQL schema.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/rest/generating-types.mdx#_snippet_6

LANGUAGE: ts
CODE:
```
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      movies: {
        Row: {
          // the data expected from .select()
          id: number
          name: string
          data: Json | null
        }
        Insert: {
          // the data to be passed to .insert()
          id?: never // generated columns must not be supplied
          name: string // `not null` columns with no default must be supplied
          data?: Json | null // nullable columns can be omitted
        }
        Update: {
          // the data to be passed to .update()
          id?: never
          name?: string // `not null` columns are optional on .update()
          data?: Json | null
        }
      }
    }
  }
}
```

----------------------------------------

TITLE: Insert Encrypted Secret into Supabase Vault
DESCRIPTION: This code shows how to store a new secret and its associated metadata into the 'vault.secrets' table. The secret is automatically encrypted using the default project key upon insertion, ensuring it is stored securely.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-08-19-supabase-vault.mdx#_snippet_2

LANGUAGE: sql
CODE:
```
insert into vault.secrets
  (secret, associated)
values
  ('s3kr3t_k3y', 'This is the secret API service key.');
```

----------------------------------------

TITLE: Main Worker Delegating Request to User Worker
DESCRIPTION: This code demonstrates a Main Worker implementation that receives an HTTP request, creates a User Worker with specified memory limits, timeout, and environment variables, and then delegates the request handling to the User Worker. It includes error handling for worker creation or fetching.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-04-11-edge-runtime-self-hosted-deno-functions.mdx#_snippet_0

LANGUAGE: typescript
CODE:
```
serve(async (req: Request) => {
  const memoryLimitMb = 150
  const workerTimeoutMs = 1 * 60 * 1000
  const noModuleCache = false
  const importMapPath = null
  const envVars = [
    ['USER', 'foo'],
    ['PASSWORD', 'BAR'],
  ]

  try {
    const worker = await EdgeRuntime.userWorkers.create({
      servicePath,
      memoryLimitMb,
      workerTimeoutMs,
      noModuleCache,
      importMapPath,
      envVars,
    })
    return await worker.fetch(req)
  } catch (e) {
    const error = { msg: e.toString() }
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
})
```

----------------------------------------

TITLE: SupaShim: Firebase to Supabase Migration Tool
DESCRIPTION: SupaShim, developed by Roboflow, is a utility that translates Firebase API calls into their Supabase equivalents. This allows developers to migrate existing Firebase applications to a self-hosted Supabase instance by simply replacing the 'firebase' global with 'supashim', without requiring any changes to the application's core code.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-04-14-launch-week-7-community-highlights.mdx#_snippet_12

LANGUAGE: APIDOC
CODE:
```
SupaShim by Roboflow:
  - Hooks into Firebase calls and translates to Supabase equivalents
  - Enables migration of existing Firebase apps to Supabase
  - Requires swapping 'firebase' global for 'supashim'
  - No application code changes needed
  - GitHub: https://github.com/roboflow/supashim
```

----------------------------------------

TITLE: Supabase Contributions to PostgreSQL Core
DESCRIPTION: Supabase has actively contributed to the PostgreSQL Core by submitting several patches. These contributions include adding 'USER SET' parameter values for pg_db_role_setting, supporting custom tuple slots in custom executor nodes, and proposing optimizations for LWlock waiting queue scalability.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-04-14-launch-week-7-community-highlights.mdx#_snippet_13

LANGUAGE: APIDOC
CODE:
```
PostgreSQL Core Patches:
  - Added 'USER SET' parameter values for pg_db_role_setting:
    - Allows ordinary roles to set placeholder variables.
    - Patch: https://www.postgresql.org/message-id/flat/20230102154240.GL1153%40telsasoft.com#c04239ecde38752a3132236306784250
  - Added support for custom tuple slots in custom executor nodes:
    - Useful for custom table access methods.
    - Patch: https://www.postgresql.org/message-id/flat/CAPpHfduJUU6ToecvTyRE_yjxTS80FyPpct4OHaLFk3OEheMTNA%40mail.gmail.com
  - Optimizations for LWlock waiting queue scalability:
    - Proposals to make the queue lockless (under consideration).
    - Discussions: [one](https://www.postgresql.org/message-id/flat/CALT9ZEEz%2B%3DNepc5eti6x531q64Z6%2BDxtP3h-h_8O5HDdtkJcPw%40mail.gmail.com), [two](https://www.postgresql.org/message-id/flat/20221120204310.xywrhyxyytsajuajuuq%40awork3.anarazel.de), [three](https://www.postgresql.org/message-id/flat/20221027165914.2hofzp4cvutj6gin%40awork3.anarazel.de)
```

----------------------------------------

TITLE: Generate and Store Embeddings in PostgreSQL with JavaScript
DESCRIPTION: JavaScript (TSX) function to generate text embeddings using the OpenAI API and then store these embeddings, along with their original text content, into the 'documents' table in a Supabase PostgreSQL database. It handles iterating through documents and inserting the generated data.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-02-03-openai-embeddings-postgres-vector.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
import { createClient } from '@supabase/supabase-js'
import { Configuration, OpenAIApi } from 'openai'
import { supabaseClient } from './lib/supabase'

async function generateEmbeddings() {
  const configuration = new Configuration({ apiKey: '<YOUR_OPENAI_API_KEY>' })
  const openAi = new OpenAIApi(configuration)

  const documents = await getDocuments() // Your custom function to load docs

  // Assuming each document is a string
  for (const document of documents) {
    // OpenAI recommends replacing newlines with spaces for best results
    const input = document.replace(/\n/g, ' ')

    const embeddingResponse = await openai.createEmbedding({
      model: 'text-embedding-ada-002',
      input,
    })

    const [{ embedding }] = embeddingResponse.data.data

    // In production we should handle possible errors
    await supabaseClient.from('documents').insert({
      content: document,
      embedding,
    })
  }
}
```

----------------------------------------

TITLE: Postgres FTS: Querying with websearch_to_tsquery
DESCRIPTION: This SQL query demonstrates how to perform a full-text search on the `movies` table using the `websearch_to_tsquery` function. It searches the `doc_en` column for the term 'Avengers'.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-10-14-postgres-full-text-search-vs-the-rest.mdx#_snippet_4

LANGUAGE: sql
CODE:
```
select
	* from movies
where doc_en @@ websearch_to_tsquery('english', 'Avengers');
```

----------------------------------------

TITLE: TypeScript Interface for Supabase JWT Claims
DESCRIPTION: Defines a TypeScript interface, `JwtClaims`, that outlines the expected structure and types of claims found in Supabase JSON Web Tokens. It includes common claims and notes the conditional presence of the `ref` field.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/jwt-fields.mdx#_snippet_6

LANGUAGE: TypeScript
CODE:
```
interface JwtClaims {
  iss: string
  aud: string | string[]
  exp: number
  iat: number
  sub: string
  role: string
  aal: 'aal1' | 'aal2'
  session_id: string
  email: string
  phone: string
  is_anonymous: boolean
  jti?: string
  nbf?: number
  app_metadata?: Record<string, any>
  user_metadata?: Record<string, any>
  amr?: Array<{
    method: string
    timestamp: number
  }>
  ref?: string // Only in anon/service role tokens
}
```

----------------------------------------

TITLE: Configure Supabase Auth signUp with emailRedirectTo
DESCRIPTION: This snippet shows how to configure the 'signUp' function of the Supabase Auth client to use the 'emailRedirectTo' option. This is crucial for the PKCE Auth flow migration, ensuring that the authentication callback is directed to the new '/api/auth/callback' route for session exchange.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/remix.mdx#_snippet_16

LANGUAGE: JavaScript
CODE:
```
supabaseClient.auth.signUp({
  email: 'valid.email@supabase.io',
  password: 'sup3rs3cur3',
  options: {
    emailRedirectTo: 'http://localhost:3000/auth/callback',
  },
})
```

----------------------------------------

TITLE: Search for specific Postgres timezones
DESCRIPTION: This SQL query demonstrates how to search for specific timezones using a case-insensitive pattern match (`ilike`) on the timezone names. It's useful for finding timezones that contain a particular string, such as 'york'.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/configuration.mdx#_snippet_2

LANGUAGE: sql
CODE:
```
select *
from pg_timezone_names()
where name ilike '%york%';
```

----------------------------------------

TITLE: Test Text-to-Image Edge Function with cURL
DESCRIPTION: Demonstrates how to send a POST request to the locally served Edge Function using cURL. It includes a JSON payload with a text prompt and saves the resulting image to a file.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/hugging-face.mdx#_snippet_5

LANGUAGE: shell
CODE:
```
curl --output result.jpg --location --request POST 'http://localhost:54321/functions/v1/text-to-image' \
  --header 'Content-Type: application/json' \
  --data '{"prompt":"Llama wearing sunglasses"}'
```

----------------------------------------

TITLE: Deploy database seed data (optional)
DESCRIPTION: Push your migrations and seed the remote database.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/deployment/database-migrations.mdx#_snippet_14

LANGUAGE: bash
CODE:
```
supabase db push --include-seed
```

----------------------------------------

TITLE: Supabase User Authentication via Email and Password (JavaScript)
DESCRIPTION: Shows how to authenticate a user using the Supabase JavaScript client's `auth.signIn` method. This function takes user credentials (email and password) and, upon successful authentication, issues a user-specific JWT for subsequent authorized requests.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/jwts.mdx#_snippet_9

LANGUAGE: js
CODE:
```
supabase.auth.signIn({
  email: 'valid.email@supabase.io',
  password: 'They_Live_1988!',
})
```

----------------------------------------

TITLE: Implement Server-Side Rendering (SSR) with Supabase Auth in Next.js
DESCRIPTION: This example demonstrates how to perform server-side rendering in Next.js with Supabase authentication. It creates an authenticated Supabase client in `getServerSideProps` to retrieve the user session and redirect if no user is found.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs-pages.mdx#_snippet_8

LANGUAGE: JavaScript
CODE:
```
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'

export default function Profile({ user }) {
  return <div>Hello {user.name}</div>
}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = createPagesServerClient(ctx)
  // Check if we have a user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }

  return {
    props: {
      user,
    },
  }
}
```

----------------------------------------

TITLE: Create Supabase Auth User with Password Hash
DESCRIPTION: Demonstrates how to create a new user in Supabase Auth using the `supabase.auth.admin.createUser` method. This example provides a pre-hashed password (`password_hash`) and sets `email_confirm` to true for confirmed email addresses. Supabase supports bcrypt and Argon2 hashes.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/migrating-to-supabase/auth0.mdx#_snippet_0

LANGUAGE: ts
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('your_project_url', 'your_supabase_api_key')

const { data, error } = await supabase.auth.admin.createUser({
  email: 'valid.email@supabase.io',
  password_hash: '$2y$10$a9pghn27d7m0ltXvlX8LiOowy7XfFw0hW0G80OjKYQ1jaoejaA7NC',
  email_confirm: true,
})
```

----------------------------------------

TITLE: Add Avatar Widget to Account Page in JSX
DESCRIPTION: This snippet demonstrates how to import and integrate the `Avatar` component into the `Account.tsx` page. It shows the necessary import statement and how to render the component within an React/Ionic `IonContent` block, passing `url` and `onUpload` props.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-ionic-react.mdx#_snippet_10

LANGUAGE: jsx
CODE:
```
// Import the new component

import { Avatar } from '../components/Avatar';

// ...
return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Account</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <Avatar url={profile.avatar_url} onUpload={updateProfile}></Avatar>
```

----------------------------------------

TITLE: Initialize Supabase Project with CLI
DESCRIPTION: Initialize a Supabase project and start a local PostgreSQL instance using the Supabase CLI. This requires Docker to be running on your machine.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/vecs-python-client.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
supabase init

supabase start
```

----------------------------------------

TITLE: Configure Supabase environment variables in SvelteKit
DESCRIPTION: Create a `.env.local` file in the project root to store your Supabase project URL and anonymous key. These variables are publicly accessible and crucial for connecting to your Supabase project.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/sveltekit.mdx#_snippet_1

LANGUAGE: txt
CODE:
```
PUBLIC_SUPABASE_URL=<your_supabase_project_url>
PUBLIC_SUPABASE_ANON_KEY=<your_supabase_anon_key>
```

----------------------------------------

TITLE: Configure Expo URL Scheme for Deep Linking
DESCRIPTION: This JSON snippet demonstrates how to register a custom URL scheme in your Expo app's configuration (app.json or app.config.js). This scheme is crucial for enabling deep linking, which allows your native mobile application to handle OAuth callbacks and magic link redirects from external browsers or email clients.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-11-16-react-native-authentication.mdx#_snippet_6

LANGUAGE: json
CODE:
```
{
  "expo": {
    "scheme": "com.supabase"
  }
}
```

----------------------------------------

TITLE: Initialize Svelte App with Vite and TypeScript
DESCRIPTION: This snippet provides the `npm` commands to create a new Svelte project using the Vite Svelte TypeScript template, navigate into the project directory, and install initial dependencies. It sets up the basic project structure for a Svelte application.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-svelte.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm create vite@latest supabase-svelte -- --template svelte-ts
cd supabase-svelte
npm install
```

----------------------------------------

TITLE: Install Supabase JavaScript Client
DESCRIPTION: Installs the official Supabase JavaScript client library (`@supabase/supabase-js`) which is essential for interacting with Supabase services from your Next.js application.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-nextjs.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @supabase/supabase-js
```

----------------------------------------

TITLE: Logout with Supabase `signOut` method in React JSX
DESCRIPTION: Demonstrates how to replace the deprecated `/api/auth/logout` API route with the `supabaseClient.auth.signOut()` method within a React button component. This snippet shows the client-side implementation for user logout and redirection.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs-pages.mdx#_snippet_18

LANGUAGE: jsx
CODE:
```
<button
  onClick={async () => {
    await supabaseClient.auth.signOut()
    router.push('/')
  }}
>
  Logout
</button>
```

----------------------------------------

TITLE: Deploy Supabase Edge Functions
DESCRIPTION: Deploys a specific Edge Function from your local project to your live Supabase project.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/local-development/overview.mdx#_snippet_12

LANGUAGE: sh
CODE:
```
supabase functions deploy <function_name>
```

----------------------------------------

TITLE: Apply Supabase database migrations
DESCRIPTION: Apply the pending migration files to the local Supabase database. The `supabase db reset` command resets the database to the current state defined by the migrations, ensuring all schema changes are applied.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/local-development/overview.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
supabase db reset
```

----------------------------------------

TITLE: Pull Any Supabase Database Schema Locally
DESCRIPTION: This command allows pulling any specific database schema from your Supabase project to your local environment. Replace `<schema_name>` with the desired schema to synchronize its definition.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/local-development/overview.mdx#_snippet_19

LANGUAGE: bash
CODE:
```
supabase db pull --schema <schema_name>
```

----------------------------------------

TITLE: Enable and Disable pg_graphql Extension in PostgreSQL
DESCRIPTION: This SQL snippet demonstrates how to enable the 'pg_graphql' extension in a PostgreSQL database using `create extension` and how to disable it using `drop extension if exists`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pg_graphql.mdx#_snippet_0

LANGUAGE: sql
CODE:
```
create extension pg_graphql;

drop extension if exists pg_graphql;
```

----------------------------------------

TITLE: React Native Auth Component UI and Styles
DESCRIPTION: This snippet defines the user interface for an authentication component in React Native. It includes input fields for email and password, along with 'Sign in' and 'Sign up' buttons. The associated styling for layout and spacing is also provided using `StyleSheet.create`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/quickstarts/react-native.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
                placeholder="email@address.com"
                autoCapitalize={'none'}
              />
            </View>
            <View style={styles.verticallySpaced}>
              <Input
                label="Password"
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                placeholder="Password"
                autoCapitalize={'none'}
              />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
              <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
            </View>
            <View style={styles.verticallySpaced}>
              <Button title="Sign up" disabled={loading} onPress={() => signUpWithEmail()} />
            </View>
          </View>
        )
      }

      const styles = StyleSheet.create({
        container: {
          marginTop: 40,
          padding: 12,
        },
        verticallySpaced: {
          paddingTop: 4,
          paddingBottom: 4,
          alignSelf: 'stretch',
        },
        mt20: {
          marginTop: 20,
        }
      })
```

----------------------------------------

TITLE: Create Embedding for Question with OpenAI API (TypeScript)
DESCRIPTION: This snippet demonstrates how to convert a user's question into a vector embedding using the OpenAI Embeddings API. This embedding is crucial for performing similarity searches against a knowledge base.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/examples/nextjs-vector-search.mdx#_snippet_11

LANGUAGE: ts
CODE:
```
const embeddingResponse = await fetch('https://api.openai.com/v1/embeddings', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${openAiKey}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'text-embedding-ada-002',
    input: sanitizedQuery.replaceAll('\n', ' '),
  }),
})

if (embeddingResponse.status !== 200) {
  throw new ApplicationError('Failed to create embedding for question', embeddingResponse)
}

const {
  data: [{ embedding }],
} = await embeddingResponse.json()
```

----------------------------------------

TITLE: Configure Non-Singleton Supabase Client Instance
DESCRIPTION: By default, `createClientComponentClient` implements a Singleton pattern. This snippet shows how to override this behavior by passing `{ isSingleton: false }` to the function, allowing the creation of a new, independent Supabase client instance with each invocation.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs.mdx#_snippet_11

LANGUAGE: jsx
CODE:
```
const supabase = createClientComponentClient({ isSingleton: false })
```

----------------------------------------

TITLE: Extract Client IP from X-Forwarded-For Header
DESCRIPTION: This SQL query demonstrates how to extract the client's IP address from the `X-Forwarded-For` header, which is typically found in the `request.headers` setting. It uses `split_part` to get the first IP in the comma-separated list.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/securing-your-api.mdx#_snippet_8

LANGUAGE: sql
CODE:
```
SELECT split_part(
  current_setting('request.headers', true)::json->>'x-forwarded-for',
  ',', 1); -- takes the client IP before the first comma (,)
```

----------------------------------------

TITLE: Initializing Supabase Client in Python
DESCRIPTION: This snippet shows how to initialize the Supabase client asynchronously in Python. It imports `asyncio` and `acreate_client` from the `supabase` library. An asynchronous function `create_supabase` is defined to create and return the Supabase client instance using the provided URL and API key.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/broadcast.mdx#_snippet_4

LANGUAGE: Python
CODE:
```
import asyncio
from supabase import acreate_client

URL = "https://<project>.supabase.co"
KEY = "<your-anon-key>"

async def create_supabase():
  supabase = await acreate_client(URL, KEY)
  return supabase
```

----------------------------------------

TITLE: Supabase Auth Error Handling in Python
DESCRIPTION: Outlines how Supabase Auth errors are structured and handled in the Python client library, including `AuthError` and `AuthApiError`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/debugging/error-codes.mdx#_snippet_3

LANGUAGE: Python
CODE:
```
All errors originating from the `supabase.auth` namespace of the client library will be wrapped by the `AuthError` class.

Error objects are split in a few classes. `AuthApiError` is an error which originate from the Supabase Auth API.

Errors originating from the server API classed as `AuthApiError` always have a `code` property that can be used to identify the error returned by the server. The `status` property is also present, encoding the HTTP status code received in the response.
```

----------------------------------------

TITLE: Explain Query Plan in Postgres
DESCRIPTION: Provides the basic syntax for using the `EXPLAIN` keyword in PostgreSQL to view the execution plan of a query, which helps in understanding how the database processes the query and chooses indexes.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/how-postgres-chooses-which-index-to-use-_JHrf4.mdx#_snippet_3

LANGUAGE: SQL
CODE:
```
EXPLAIN <your query>
```

----------------------------------------

TITLE: Implement Groups Page Logic in Angular/Ionic
DESCRIPTION: This TypeScript code defines the `GroupsPage` component, managing group data and user interactions. It uses `ionViewWillEnter` to load all groups on page entry. The `createGroup` method presents an Ionic alert for user input, then calls a data service to create a new group, reloads the group list, and navigates the user to the new group's dedicated messages page. It also includes methods for user sign-out and navigation to the login page.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-11-08-authentication-in-ionic-angular.mdx#_snippet_20

LANGUAGE: ts
CODE:
```
import { Router } from '@angular/router'
import { AuthService } from './../../services/auth.service'
import { AlertController, NavController, LoadingController } from '@ionic/angular'
import { DataService } from './../../services/data.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  user = this.authService.getCurrentUser()
  groups = []

  constructor(
    private authService: AuthService,
    private data: DataService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private navController: NavController,
    private router: Router
  ) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    this.groups = await this.data.getGroups()
  }

  async createGroup() {
    const alert = await this.alertController.create({
      header: 'Start Chat Group',
      message: 'Enter a name for your group. Note that all groups are public in this app!',
      inputs: [
        {
          type: 'text',
          name: 'title',
          placeholder: 'My cool group',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Create group',
          handler: async (data) => {
            const loading = await this.loadingController.create()
            await loading.present()

            const newGroup = await this.data.createGroup(data.title)
            if (newGroup) {
              this.groups = await this.data.getGroups()
              await loading.dismiss()

              this.router.navigateByUrl(`/groups/${newGroup.data.id}`)
            }
          },
        },
      ],
    })

    await alert.present()
  }

  signOut() {
    this.authService.signOut()
  }

  openLogin() {
    this.navController.navigateBack('/')
  }
}
```

----------------------------------------

TITLE: Install Supabase Auth Helpers for Remix
DESCRIPTION: Install the necessary Supabase Auth Helpers and Supabase JS packages for Remix applications using npm.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/remix.mdx#_snippet_0

LANGUAGE: sh
CODE:
```
npm install @supabase/auth-helpers-remix @supabase/supabase-js
```

----------------------------------------

TITLE: Design User Registration Form with Ionic and Angular
DESCRIPTION: This HTML snippet provides the template for the registration page, utilizing Ionic components for UI and Angular's reactive forms for data binding. It includes input fields for email and password with validation messages, a back button, and a submit button that is disabled until the form is valid.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-11-08-authentication-in-ionic-angular.mdx#_snippet_17

LANGUAGE: HTML
CODE:
```
<ion-header>\n  <ion-toolbar color="primary">\n    <ion-buttons slot="start">\n      <ion-back-button defaultHref="/"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Supa Chat</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scrollY="false">\n  <ion-card>\n    <ion-card-content>\n      <form (ngSubmit)="createAccount()" [formGroup]="credentials">\n        <ion-item>\n          <ion-label position="stacked">Your Email</ion-label>\n          <ion-input\n            type="email"\n            inputmode="email"\n            placeholder="Email"\n            formControlName="email"\n          ></ion-input>\n          <ion-note slot="error" *ngIf="(email.dirty || email.touched) && email.errors"\n            >Please insert a valid email</ion-note\n          >\n        </ion-item>\n        <ion-item>\n          <ion-label position="stacked">Password</ion-label>\n          <ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n          <ion-note\n            slot="error"\n            *ngIf="(password.dirty || password.touched) && password.errors?.required"\n            >Please insert a password</ion-note\n          >\n          <ion-note\n            slot="error"\n            *ngIf="(password.dirty || password.touched) && password.errors?.minlength"\n            >Minlength 6 characters</ion-note\n          >\n        </ion-item>\n        <ion-button type="submit" expand="block" strong="true" [disabled]="!credentials.valid"\n          >Create my account</ion-button\n        >\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>
```

----------------------------------------

TITLE: Handle Supabase Auth Webhook and Send Welcome Email with Resend
DESCRIPTION: This TypeScript snippet demonstrates how to verify a Supabase authentication webhook payload, extract user and email-related data, and then send a welcome email using the Resend API. It includes robust error handling for API communication failures.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/send-email-hook.mdx#_snippet_12

LANGUAGE: typescript
CODE:
```
const { user, email_data } = wh.verify(payload, headers) as {
      user: {
        email: string;
      };
      email_data: {
        token: string;
        token_hash: string;
        redirect_to: string;
        email_action_type: string;
        site_url: string;
        token_new: string;
        token_hash_new: string;
      };
    };

    const { error } = await resend.emails.send({
      from: "welcome <onboarding@example.com>",
      to: [user.email],
      subject: "Welcome to my site!",
      text: `Confirm you signup with this code: ${email_data.token}`,
    });
    if (error) {
      throw error;
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: {
          http_code: error.code,
          message: error.message,
        },
      }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const responseHeaders = new Headers();
  responseHeaders.set("Content-Type", "application/json");
  return new Response(JSON.stringify({}), {
    status: 200,
    headers: responseHeaders,
  });
});
```

----------------------------------------

TITLE: Enforce MFA for New Supabase Users with RLS Policy
DESCRIPTION: This SQL Row Level Security (RLS) policy restricts database access based on user creation date. Users created after '2022-12-12T00:00:00Z' must have an 'aal2' assurance level, while older users can have 'aal1' or 'aal2'. The policy uses the 'as restrictive' clause to ensure it overrides other policies.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-mfa.mdx#_snippet_4

LANGUAGE: SQL
CODE:
```
create policy "Policy name."
  on table_name
  as restrictive -- very important!
  to authenticated
  using
    (array[(select auth.jwt()->>'aal')] <@ (
       select
         case
           when created_at >= '2022-12-12T00:00:00Z' then array['aal2']
           else array['aal1', 'aal2']
         end as aal
       from auth.users
       where (select auth.uid()) = id));
```

----------------------------------------

TITLE: Reverify Custom Domain DNS with Supabase CLI
DESCRIPTION: Initiates the re-verification process for a custom domain's DNS settings with a Supabase project via the CLI. This command checks for correct CNAME and TXT record propagation and triggers SSL certificate issuance by Let's Encrypt, which may take up to 30 minutes.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/custom-domains.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
supabase domains reverify --project-ref abcdefghijklmnopqrst
```

----------------------------------------

TITLE: Initializing Supabase Client with TypeScript Types
DESCRIPTION: Demonstrates how to initialize the Supabase client (`supabase-js`) by providing the generated `Database` TypeScript type. This enables full type-safety when interacting with your Supabase API, ensuring correct data structures for queries and mutations.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/rest/generating-types.mdx#_snippet_7

LANGUAGE: ts
CODE:
```
import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
```

----------------------------------------

TITLE: Create SvelteKit Magic Link Login Page UI
DESCRIPTION: This Svelte component defines the user interface for a magic link login/signup page. It includes an email input field, a submit button, and displays messages or errors from the server-side form action. It uses SvelteKit's `enhance` for progressive enhancement.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-sveltekit.mdx#_snippet_10

LANGUAGE: svelte
CODE:
```
<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms'
	import type { ActionData, SubmitFunction } from './$types.js'

	export let form: ActionData;

	let loading = false

	const handleSubmit: SubmitFunction = () => {
		loading = true
		return async ({ update }) => {
			update()
			loading = false
		}
	}
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<form class="row flex flex-center" method="POST" use:enhance={handleSubmit}>
	<div class="col-6 form-widget">
		<h1 class="header">Supabase + SvelteKit</h1>
		<p class="description">Sign in via magic link with your email below</p>
		{#if form?.message !== undefined}
		<div class="success {form?.success ? '' : 'fail'}">
			{form?.message}
		</div>
		{/if}
		<div>
			<label for="email">Email address</label>
			<input
				id="email"
				name="email"
				class="inputField"
				type="email"
				placeholder="Your email"
				value={form?.email ?? ''}
			/>
		</div>
		{#if form?.errors?.email}
		<span class="flex items-center text-sm error">
			{form?.errors?.email}
		</span>
		{/if}
		<div>
			<button class="button primary block">
				{ loading ? 'Loading' : 'Send magic link' }
			</button>
		</div>
	</div>
</form>
```

----------------------------------------

TITLE: PL/pgSQL: Record Failed Password Attempt Logic
DESCRIPTION: This PL/pgSQL code snippet, intended for a Supabase Auth hook, records a failed password verification attempt for a user in the `public.password_failed_verification_attempts` table. It updates the `last_failed_at` timestamp on conflict and then returns a decision to 'continue', allowing Supabase Auth to apply its default behavior, potentially leading to a block based on other logic.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/password-verification-hook.mdx#_snippet_5

LANGUAGE: sql
CODE:
```
'message',   'Please wait a moment before trying again.'
        )
      );
    end if;

    -- record this failed attempt
    insert into public.password_failed_verification_attempts
      (
        user_id,
        last_failed_at
      )
      values
      (
        event->'user_id',
        now()
      )
      on conflict do update
        set last_failed_at = now();

    -- finally let Supabase Auth do the default behavior for a failed attempt
    return jsonb_build_object('decision', 'continue');
  end;
$$;
```

----------------------------------------

TITLE: Supabase Function Environment Variables Configuration
DESCRIPTION: This snippet shows the content of a `.env` file used to store sensitive environment variables for the Supabase Edge Function. It includes the `RESEND_API_KEY` for integrating with an email sending service and the `SEND_EMAIL_HOOK_SECRET` for securing the Auth Hook.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/examples/auth-send-email-hook-react-email-resend.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
RESEND_API_KEY=your_resend_api_key
SEND_EMAIL_HOOK_SECRET=<base64_secret>
```

----------------------------------------

TITLE: Supabase auth.jwt() Function Reference
DESCRIPTION: Detailed documentation for the `auth.jwt()` function, which returns the JSON Web Token of the current user. It explains the distinction between `raw_user_meta_data` (user-updatable) and `raw_app_meta_data` (admin-only, suitable for authorization), and its use for checking Multi-Factor Authentication (AAL) levels.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/row-level-security.mdx#_snippet_11

LANGUAGE: APIDOC
CODE:
```
auth.jwt()
  Description: Returns the JWT of the user making the request.
  Claims:
    raw_user_meta_data:
      Description: User-updatable metadata. Not suitable for authorization data.
      Updatable by: supabase.auth.update()
    raw_app_meta_data:
      Description: Admin-only metadata. Cannot be updated by the user. Suitable for authorization data.
    aal (Authentication Assurance Level):
      Description: Indicates the level of authentication performed (e.g., 'aal2' for MFA).
      Usage: Used to enforce policies based on MFA status.
```

----------------------------------------

TITLE: GraphQL StringFilter Input Type with Text Matching Options
DESCRIPTION: Extends the 'StringFilter' input type to include new text matching options: 'startsWith', 'like', and 'ilike'. These fields allow for more flexible string comparisons beyond simple equality checks.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-04-21-whats-new-in-pg-graphql-v1-2.mdx#_snippet_6

LANGUAGE: GraphQL
CODE:
```
input StringFilter {
  eq: String
  ...
  startsWith: String
  like: String
  ilike: String
}
```

----------------------------------------

TITLE: Execute GraphQL Query with pg_graphql's gql.resolve
DESCRIPTION: Demonstrates how to execute a GraphQL query using the gql.resolve SQL function. This example fetches the id field for all Book nodes, illustrating the SQL syntax and the resulting JSON output from pg_graphql.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2021-12-03-pg-graphql.mdx#_snippet_3

LANGUAGE: SQL
CODE:
```
gqldb= select gql.resolve($$

query {
  allBooks {
    edges {
      node {
        id
      }
    }
  }
}

$$);

             resolve
----------------------------------------------------------------------
{\"data\": {\"allBooks\": {\"edges\": [{\"node\": {\"id\": 1}}]}}, \"errors\": []}
```

----------------------------------------

TITLE: Example Authenticated User JWT Payload
DESCRIPTION: A sample JSON Web Token (JWT) payload for an authenticated user in Supabase, illustrating common claims such as `aud`, `email`, `role`, and `sub`. This token grants standard user access based on RLS policies.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/jwt-fields.mdx#_snippet_2

LANGUAGE: JSON
CODE:
```
{
  "aal": "aal1",
  "amr": [
    {
      "method": "password",
      "timestamp": 1640991600
    }
  ],
  "app_metadata": {
    "provider": "email",
    "providers": ["email"]
  },
  "aud": "authenticated",
  "email": "user@example.com",
  "exp": 1640995200,
  "iat": 1640991600,
  "iss": "https://abcdefghijklmnopqrst.supabase.co/auth/v1",
  "phone": "",
  "role": "authenticated",
  "session_id": "123e4567-e89b-12d3-a456-426614174000",
  "sub": "123e4567-e89b-12d3-a456-426614174000",
  "user_metadata": {
    "name": "John Doe"
  },
  "is_anonymous": false
}
```

----------------------------------------

TITLE: Relocate PostGIS Extension Schema in Supabase
DESCRIPTION: Provides the correct procedure for relocating the PostGIS extension schema in Supabase projects, as the standard `ALTER EXTENSION` command can cause issues. The steps involve backing up the database, dropping existing PostGIS dependencies, enabling the extension in the new schema, and restoring data.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/postgis.mdx#_snippet_12

LANGUAGE: SQL
CODE:
```
DROP EXTENSION postgis CASCADE;
```

LANGUAGE: SQL
CODE:
```
CREATE EXTENSION postgis SCHEMA extensions;
```

----------------------------------------

TITLE: Supabase RLS Policy for Direct Postgres Connection
DESCRIPTION: Configures Row Level Security (RLS) on `document_sections` for `SELECT` operations. This policy uses a custom session variable, `app.current_user_id`, to filter documents based on the owner's ID, ensuring users can only access their own data when directly connected to Postgres.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/rag-with-permissions.mdx#_snippet_9

LANGUAGE: SQL
CODE:
```
-- enable row level security
alter table document_sections enable row level security;

-- setup RLS for select operations
create policy "Users can query their own document sections"
on document_sections for select to authenticated using (
  document_id in (
    select id
    from external.documents
    where owner_id = current_setting('app.current_user_id')::bigint
  )
);
```

----------------------------------------

TITLE: Create Supabase Image Loader for Next.js
DESCRIPTION: This snippet demonstrates how to create a custom loader function for Next.js that leverages Supabase Image Transformation. It constructs the image URL using the provided source, width, and quality, ensuring images are optimized via Supabase Storage. Remember to replace `projectId` with your actual Supabase project ID.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/serving/image-transformations.mdx#_snippet_4

LANGUAGE: ts
CODE:
```
const projectId = '' // your supabase project id

export default function supabaseLoader({ src, width, quality }) {
  return `https://${projectId}.supabase.co/storage/v1/render/image/public/${src}?width=${width}&quality=${quality || 75}`
}
```

----------------------------------------

TITLE: Link OAuth Identity Manually with Supabase Auth
DESCRIPTION: Demonstrates how a logged-in user can manually link an OAuth identity (e.g., Google) to their existing Supabase user account. This process redirects the user to the OAuth provider to complete the flow, then links the identity upon successful completion. Manual linking must be enabled in Supabase project settings or via environment variable.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-identity-linking.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('<your-supabase-url>', '<your-supabase-anon-key>')

// ---cut---
const { data, error } = await supabase.auth.linkIdentity({ provider: 'google' })
```

LANGUAGE: dart
CODE:
```
await supabase.auth.linkIdentity(OAuthProvider.google);
```

LANGUAGE: swift
CODE:
```
try await supabase.auth.linkIdentity(provider: .google)
```

LANGUAGE: kotlin
CODE:
```
supabase.auth.linkIdentity(Google)
```

LANGUAGE: python
CODE:
```
response = supabase.auth.link_identity({'provider': 'google'})
```

----------------------------------------

TITLE: Implement Account Component in Angular with Supabase
DESCRIPTION: This code defines the Angular `AccountComponent` responsible for fetching, displaying, and updating user profile details, as well as handling user sign-out. It interacts with a Supabase service to manage user data and authentication. The component includes form handling for profile updates and displays user email, username, and website.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-angular.mdx#_snippet_4

LANGUAGE: TypeScript
CODE:
```
import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { AuthSession } from '@supabase/supabase-js'
import { Profile, SupabaseService } from '../supabase.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  loading = false
  profile!: Profile

  @Input()
  session!: AuthSession

  updateProfileForm = this.formBuilder.group({
    username: '',
    website: '',
    avatar_url: '',
  })

  constructor(
    private readonly supabase: SupabaseService,
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getProfile()

    const { username, website, avatar_url } = this.profile
    this.updateProfileForm.patchValue({
      username,
      website,
      avatar_url,
    })
  }

  async getProfile() {
    try {
      this.loading = true
      const { user } = this.session
      const { data: profile, error, status } = await this.supabase.profile(user)

      if (error && status !== 406) {
        throw error
      }

      if (profile) {
        this.profile = profile
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.loading = false
    }
  }

  async updateProfile(): Promise<void> {
    try {
      this.loading = true
      const { user } = this.session

      const username = this.updateProfileForm.value.username as string
      const website = this.updateProfileForm.value.website as string
      const avatar_url = this.updateProfileForm.value.avatar_url as string

      const { error } = await this.supabase.updateProfile({
        id: user.id,
        username,
        website,
        avatar_url,
      })
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
    finally {
      this.loading = false
    }
  }

  async signOut() {
    await this.supabase.signOut()
  }
}
```

LANGUAGE: HTML
CODE:
```
<form [formGroup]="updateProfileForm" (ngSubmit)="updateProfile()" class="form-widget">
  <div>
    <label for="email">Email</label>
    <input id="email" type="text" [value]="session.user.email" disabled />
  </div>
  <div>
    <label for="username">Name</label>
    <input formControlName="username" id="username" type="text" />
  </div>
  <div>
    <label for="website">Website</label>
    <input formControlName="website" id="website" type="url" />
  </div>

  <div>
    <button type="submit" class="button primary block" [disabled]="loading">
      {{ loading ? 'Loading ...' : 'Update' }}
    </button>
  </div>

  <div>
    <button class="button block" (click)="signOut()">Sign Out</button>
  </div>
</form>
```

----------------------------------------

TITLE: Create Postgres Function to Truncate and Normalize Vectors
DESCRIPTION: This PL/pgSQL function, `sub_vector`, truncates a given vector to a specified number of dimensions and then re-normalizes it. It includes validation to ensure the requested dimensions do not exceed the original vector size and is marked as `immutable` for index compatibility.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-02-13-matryoshka-embeddings.mdx#_snippet_11

LANGUAGE: PL/pgSQL
CODE:
```
create or replace function sub_vector(v extensions.vector, dimensions int)
returns extensions.vector
language plpgsql
immutable
set search_path = ''
as $$
begin
  if dimensions > extensions.vector_dims(v) then
    raise exception 'dimensions must be less than or equal to the vector size';
  end if;

  return (
    with unnormed(elem) as (
      select x from unnest(v::float4[]) with ordinality v(x, ix)
      where ix <= dimensions
    ),
    norm(factor) as (
      select
        sqrt(sum(pow(elem, 2)))
      from
        unnormed
    )
    select
      array_agg(u.elem / r.factor)::extensions.vector
    from
      norm r, unnormed u
  );
end;
$$;
```

----------------------------------------

TITLE: Request Password Reset Email (Implicit Flow)
DESCRIPTION: This snippet shows how to initiate a password reset process by sending a reset email to the user. It requires specifying a `redirectTo` URL where the user will be redirected after clicking the link in the email, which should point to a change password page.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/passwords.mdx#_snippet_7

LANGUAGE: JavaScript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project.supabase.co', 'your-anon-key')

await supabase.auth.resetPasswordForEmail('valid.email@supabase.io', {
  redirectTo: 'http://example.com/account/update-password',
})
```

LANGUAGE: Swift
CODE:
```
try await supabase.auth.resetPasswordForEmail(
   "valid.email@supabase.io",
   redirectTo: URL(string: "http://example.com/account/update-password")
)
```

LANGUAGE: Kotlin
CODE:
```
supabase.auth.resetPasswordForEmail(
    email = "valid.email@supabase.io",
    redirectUrl = "http://example.com/account/update-password"
)
```

LANGUAGE: Python
CODE:
```
client.auth.reset_password_email(
  'valid.email@supabase.io',
  {'redirect_to':'http://example.com/account/update-password'}
)
```

----------------------------------------

TITLE: Declare Supabase Environment Variables in React
DESCRIPTION: Create a `.env.local` file and populate with your Supabase connection variables: `url` and `anonKey`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/quickstarts/reactjs.mdx#_snippet_2

LANGUAGE: text
CODE:
```
VITE_SUPABASE_URL=<SUBSTITUTE_SUPABASE_URL>
VITE_SUPABASE_ANON_KEY=<SUBSTITUTE_SUPABASE_ANON_KEY>
```

----------------------------------------

TITLE: Apply Background Styling to Registration Page
DESCRIPTION: This CSS snippet applies styling to the `ion-content` element of the registration page. It sets padding and a background image with a linear gradient overlay, providing a visually appealing backdrop for the form.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-11-08-authentication-in-ionic-angular.mdx#_snippet_18

LANGUAGE: CSS
CODE:
```
ion-content {\n  --padding-top: 20%;\n  --padding-start: 5%;\n  --padding-end: 5%;\n  --background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),\n    url('https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80')\n      no-repeat;\n}
```

----------------------------------------

TITLE: SQL Policy to Allow Users to Delete Their Own Storage Objects
DESCRIPTION: This SQL policy, applied to the `storage.objects` table, enables authenticated users to delete only the objects they own. It achieves this by comparing the object's `owner_id` with the current authenticated user's ID, retrieved using `auth.uid()`, thereby enforcing ownership-based access control for delete operations in Supabase Storage.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/security/ownership.mdx#_snippet_0

LANGUAGE: SQL
CODE:
```
create policy "User can delete their own objects"
on storage.objects
for delete
to authenticated
using (
    owner_id = (select auth.uid())
);
```

----------------------------------------

TITLE: Import Slider component
DESCRIPTION: Imports the Slider component from the local UI components path, making it available for use in a TypeScript/TSX file.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/slider.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { Slider } from '@/components/ui/slider'
```

----------------------------------------

TITLE: Set up React Native Expo App and Install Dependencies
DESCRIPTION: This snippet provides shell commands to initialize a new Expo React Native project using the tabs template. It then installs essential dependencies for integrating with Supabase, including the Supabase JS client, URL polyfill, base64 arraybuffer, a loading spinner, and Expo's Async Storage, Image Picker, and File System modules, which are crucial for handling user sessions, image selection, and file operations.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-08-01-react-native-storage.mdx#_snippet_1

LANGUAGE: sh
CODE:
```
npx create-expo-app@latest cloudApp --template tabs@49

npm i @supabase/supabase-js
npm i react-native-url-polyfill base64-arraybuffer react-native-loading-spinner-overlay @react-native-async-storage/async-storage

npx expo install expo-image-picker
npx expo install expo-file-system
```

----------------------------------------

TITLE: Supabase Edge Function for Resend Email Sending
DESCRIPTION: This JavaScript code defines a Supabase Edge Function that acts as an email sending hook using Resend. It imports necessary libraries, initializes the Resend client with an API key, and processes incoming webhook requests, ensuring they are valid before attempting to send emails.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/send-email-hook.mdx#_snippet_11

LANGUAGE: JavaScript
CODE:
```
import { Webhook } from "https://esm.sh/standardwebhooks@1.0.0";
import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY") as string);
const hookSecret = (Deno.env.get("SEND_EMAIL_HOOK_SECRET") as string).replace("v1,whsec_", "");

Deno.serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("not allowed", { status: 400 });
  }

  const payload = await req.text();
  const headers = Object.fromEntries(req.headers);
  const wh = new Webhook(hookSecret);
  try {
```

----------------------------------------

TITLE: Call `nearby_restaurants` function via Supabase RPC
DESCRIPTION: Demonstrates how to invoke the `nearby_restaurants` PostgreSQL function from various client-side languages (JavaScript, Dart, Swift, Kotlin) using the Supabase `rpc()` method. It passes the current latitude and longitude as parameters to retrieve nearby restaurants.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/postgis.mdx#_snippet_8

LANGUAGE: JavaScript
CODE:
```
const { data, error } = await supabase.rpc('nearby_restaurants', {
  lat: 40.807313,
  long: -73.946713,
})
```

LANGUAGE: Dart
CODE:
```
final data = await supabase.rpc('nearby_restaurants',params: {
  'lat': 40.807313,
  'long': -73.946713,
});
```

LANGUAGE: Swift
CODE:
```
struct Response: Codable {
  let id: Int
  let name: String
  let lat: Double
  let long: Double
  let distance: Double

  enum CodingKeys: String, CodingKey {
    case id, name, lat, long
    case distance = "dist_meters"
  }
}

let response: Response = try await supabase.rpc(
  "nearby_restaurants",
  params: [
    "lat": 40.807313,
    "long": -73.946713
  ]
)
.execute()
.value
```

LANGUAGE: Kotlin
CODE:
```
val data = supabase.postgrest.rpc(
    function = "nearby_restaurants",
    parameters = buildJsonObject { //You can put here any serializable object including your own classes
        put("lat", 40.807313)
        put("lon", -73.946713)
    }
)
```

----------------------------------------

TITLE: Configure Ionic PWA Elements in main.ts
DESCRIPTION: Update the main.ts file to include an additional bootstrapping call for the Ionic PWA Elements, ensuring custom elements are defined globally for proper UI rendering and native API polyfills.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-ionic-vue.mdx#_snippet_9

LANGUAGE: ts
CODE:
```
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { IonicVue } from '@ionic/vue'
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/ionic.bundle.css'

/* Theme variables */
import './theme/variables.css'

import { defineCustomElements } from '@ionic/pwa-elements/loader'
defineCustomElements(window)
const app = createApp(App).use(IonicVue).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
```

----------------------------------------

TITLE: MFA Verification Hook Inputs API Reference
DESCRIPTION: Reference for the input payload fields sent by Supabase Auth to the MFA verification hook, detailing each field's type and description.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/mfa-verification-hook.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
Inputs:
  factor_id: string - Unique identifier for the MFA factor being verified
  factor_type: string - 'totp' or 'phone'
  user_id: string - Unique identifier for the user
  valid: boolean - Whether the verification attempt was valid. For TOTP, this means that the six digit code was correct (true) or incorrect (false).
```

----------------------------------------

TITLE: PostgreSQL: Create `security definer` Function with `search_path`
DESCRIPTION: Demonstrates how to create a PostgreSQL function using `security definer`. It highlights the critical requirement of setting `search_path` to an empty string to prevent privilege escalation, emphasizing the need for explicit schema qualification for all relations within the function body.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/functions.mdx#_snippet_7

LANGUAGE: sql
CODE:
```
create function hello_world()
returns text
language plpgsql
security definer set search_path = ''
as $$
begin
  select 'hello world';
end;
$$;
```

----------------------------------------

TITLE: Import Drawer Components in React/Next.js
DESCRIPTION: Imports various sub-components of the Drawer (e.g., Drawer, DrawerClose, DrawerContent) from the local UI components path, making them available for use in a TypeScript React or Next.js application.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/drawer.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
```

----------------------------------------

TITLE: Initialize Supabase SSR Client in SvelteKit Server Hook
DESCRIPTION: Configures the Supabase client for server-side rendering in `src/hooks.server.ts`. This setup automatically uses cookies for session management, making the user's session available throughout the SvelteKit stack. It also includes a `safeGetSession` utility to validate the JWT before returning the session.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-sveltekit.mdx#_snippet_4

LANGUAGE: ts
CODE:
```
// src/hooks.server.ts
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createServerClient } from '@supabase/ssr'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      getAll: () => event.cookies.getAll(),
      /**
       * SvelteKit's cookies API requires `path` to be explicitly set in
       * the cookie options. Setting `path` to `/` replicates previous/
       * standard behavior.
       */
      setAll: (cookiesToSet) => {
        cookiesToSet.forEach(({ name, value, options }) => {
          event.cookies.set(name, value, { ...options, path: '/' })
        })
      }
    }
  })

  /**
   * Unlike `supabase.auth.getSession()`, which returns the session _without_
   * validating the JWT, this function also calls `getUser()` to validate the
   * JWT before returning the session.
   */
  event.locals.safeGetSession = async () => {
    const {
      data: { session }
    } = await event.locals.supabase.auth.getSession()
    if (!session) {
      return { session: null, user: null }
    }

    const {
      data: { user },
      error
    } = await event.locals.supabase.auth.getUser()
    if (error) {
      // JWT validation has failed
      return { session: null, user: null }
    }

    return { session, user }
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range' || name === 'x-supabase-api-version'
    }
  })
}
```

----------------------------------------

TITLE: Perform a Simple HTTP POST Request in PostgreSQL
DESCRIPTION: Shows how to use `http_post()` to send data to a RESTful endpoint, including a JSON body and content type, and casting the response to `jsonb`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/http.mdx#_snippet_3

LANGUAGE: sql
CODE:
```
select
  "status", "content"::jsonb
from
  http_post(
    'https://jsonplaceholder.typicode.com/posts',
    '{ "title": "foo", "body": "bar", "userId": 1 }',
    'application/json'
  );
```

----------------------------------------

TITLE: Password Verification Hook Input JSON Schema Definition
DESCRIPTION: Defines the JSON schema for the input payload of the password verification hook, specifying types and requirements for `user_id` (string) and `valid` (boolean).
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/password-verification-hook.mdx#_snippet_1

LANGUAGE: json
CODE:
```
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "x-faker": "random.uuid"
    },
    "valid": {
      "type": "boolean",
      "x-faker": "random.boolean"
    }
  },
  "required": ["user_id", "valid"]
}
```

----------------------------------------

TITLE: Verify and Decode a JSON Web Token (JWT) in PostgreSQL
DESCRIPTION: This SQL example demonstrates how to use the `extensions.verify` function from the `pgjwt` extension to decode and validate an existing JSON Web Token. It requires the token string, the secret key, and the algorithm used for signing.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pgjwt.mdx#_snippet_4

LANGUAGE: SQL
CODE:
```
select
  extensions.verify(
    token := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRm9vIn0.Q8hKjuadCEhnCPuqIj9bfLhTh_9QSxshTRsA5Aq4IuM',
    secret    := 'secret',
    algorithm := 'HS256'
  );
```

----------------------------------------

TITLE: Supabase Postgres Hook Function Permissions
DESCRIPTION: This SQL snippet demonstrates how Supabase automatically grants `execute` and `usage` permissions to the `supabase_auth_admin` role for Postgres functions configured as hooks. It also shows how to explicitly revoke `execute` permissions from `authenticated`, `anon`, and `public` roles to prevent direct access via Supabase Data APIs, ensuring the function's integrity.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks.mdx#_snippet_2

LANGUAGE: SQL
CODE:
```
-- Grant access to function to supabase_auth_admin
grant execute
  on function public.custom_access_token_hook
  to supabase_auth_admin;

-- Grant access to schema to supabase_auth_admin
grant usage on schema public to supabase_auth_admin;

-- Revoke function permissions from authenticated, anon and public
revoke execute
  on function public.custom_access_token_hook
  from authenticated, anon, public;
```

----------------------------------------

TITLE: Supabase CLI Command to Identify Unused PostgreSQL Indexes
DESCRIPTION: These Supabase CLI commands allow users to log in, link their project, and then run a utility to identify indexes that are not being used. This helps in cleaning up the database by removing unnecessary indexes that consume disk space and potentially slow down write operations.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/steps-to-improve-query-performance-with-indexes-q8PoC9.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
npx supabase login

npx supabase link

npx supabase inspect db unused-indexes
```

----------------------------------------

TITLE: Execute HTTP GET Request with pg_net
DESCRIPTION: Example demonstrating how to use the `net.http_get` function to send a GET request to a specified URL. The function returns a request ID, indicating that the request has been queued and will be executed once the current transaction is committed.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pg_net.mdx#_snippet_2

LANGUAGE: sql
CODE:
```
select
    net.http_get('https://news.ycombinator.com')
    as request_id;
request_id
----------
         1
(1 row)
```

----------------------------------------

TITLE: Implement Internationalized Email Templates with Postmark
DESCRIPTION: This JavaScript snippet provides a comprehensive framework for sending internationalized email templates using Postmark. It defines subject lines and HTML body templates for various email types (e.g., signup, recovery, invite) across multiple languages (English, Spanish, French), demonstrating a structured approach to multi-language content delivery.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/send-email-hook.mdx#_snippet_14

LANGUAGE: javascript
CODE:
```
import { Webhook } from 'https://esm.sh/standardwebhooks@1.0.0'
import { readAll } from 'https://deno.land/std/io/read_all.ts'

const postmarkEndpoint = 'https://api.postmarkapp.com/email'
// Replace this with your email
const FROM_EMAIL = 'myemail@gmail.com'

// Email Subjects
const subjects = {
  en: {
    signup: 'Confirm Your Email',
    recovery: 'Reset Your Password',
    invite: 'You have been invited',
    magic_link: 'Your Magic Link',
    email_change: 'Confirm Email Change',
    email_change_new: 'Confirm New Email Address',
    reauthentication: 'Confirm Reauthentication',
  },
  es: {
    signup: 'Confirma tu correo electrónico',
    recovery: 'Restablece tu contraseña',
    invite: 'Has sido invitado',
    magic_link: 'Tu enlace mágico',
    email_change: 'Confirma el cambio de correo electrónico',
    email_change_new: 'Confirma la Nueva Dirección de Correo',
    reauthentication: 'Confirma la reautenticación',
  },
  fr: {
    signup: 'Confirmez votre adresse e-mail',
    recovery: 'Réinitialisez votre mot de passe',
    invite: 'Vous avez été invité',
    magic_link: 'Votre Lien Magique',
    email_change: 'Confirmez le changement d’adresse e-mail',
    email_change_new: 'Confirmez la nouvelle adresse e-mail',
    reauthentication: 'Confirmez la réauthentification',
  },
}

// HTML Body
const templates = {
  en: {
    signup: `<h2>Confirm your email</h2><p>Follow this link to confirm your email:</p><p><a href="{{confirmation_url}}">Confirm your email address</a></p><p>Alternatively, enter the code: {{token}}</p>`,
    recovery: `<h2>Reset password</h2><p>Follow this link to reset the password for your user:</p><p><a href="{{confirmation_url}}">Reset password</a></p><p>Alternatively, enter the code: {{token}}</p>`,
    invite: `<h2>You have been invited</h2><p>You have been invited to create a user on {{site_url}}. Follow this link to accept the invite:</p><p><a href="{{confirmation_url}}">Accept the invite</a></p><p>Alternatively, enter the code: {{token}}</p>`,
    magic_link: `<h2>Magic Link</h2><p>Follow this link to login:</p><p><a href="{{confirmation_url}}">Log In</a></p><p>Alternatively, enter the code: {{token}}</p>`,
    email_change: `<h2>Confirm email address change</h2><p>Follow this link to confirm the update of your email address from {{old_email}} to {{new_email}}:</p><p><a href="{{confirmation_url}}">Change email address</a></p><p>Alternatively, enter the codes: {{token}} and {{new_token}}</p>`,
    email_change_new: `<h2>Confirm New Email Address</h2><p>Follow this link to confirm your new email address:</p><p><a href="{{confirmation_url}}">Confirm new email address</a></p><p>Alternatively, enter the code: {{new_token}}</p>`,
    reauthentication: `<h2>Confirm reauthentication</h2><p>Enter the code: {{token}}</p>`,
  },
  es: {
    signup: `<h2>Confirma tu correo electrónico</h2><p>Sigue este enlace para confirmar tu correo electrónico:</p><p><a href="{{confirmation_url}}">Confirma tu correo electrónico</a></p><p>Alternativamente, ingresa el código: {{token}}</p>`
  }
}
```

----------------------------------------

TITLE: Listen to Supabase Postgres Changes with Greater Than (GT) Filter
DESCRIPTION: Demonstrates how to set up a Supabase Realtime listener to receive updates when a column's value is greater than a specified client value. This filter uses Postgres' `>` operator and supports non-numeric types. Ensure to verify behavior for the compared data type.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/postgres-changes.mdx#_snippet_17

LANGUAGE: JavaScript
CODE:
```
const channel = supabase
  .channel('changes')
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'products',
      filter: 'quantity=gt.10',
    },
    (payload) => console.log(payload)
  )
  .subscribe()
```

LANGUAGE: Dart
CODE:
```
supabase
    .channel('changes')
    .onPostgresChanges(
        event: PostgresChangeEvent.insert,
        schema: 'public',
        table: 'products',
        filter: PostgresChangeFilter(
          type: PostgresChangeFilterType.gt,
          column: 'quantity',
          value: 10,
        ),
        callback: (payload) => print(payload))
    .subscribe();
```

LANGUAGE: Swift
CODE:
```
let myChannel = await supabase.channel("db-changes")

let changes = await myChannel.postgresChange(
  InsertAction.self,
  schema: "public",
  table: "products",
  filter: .gt("quantity", value: 10)
)

await myChannel.subscribe()

for await change in changes {
  print(change.record)
}
```

LANGUAGE: Kotlin
CODE:
```
val myChannel = supabase.channel("db-changes")

val changes = myChannel.postgresChangeFlow<PostgresAction.Update>(schema = "public") {
    table = "products"
    filter = "quantity=gt.10"
}

changes
    .onEach {
        println(it.record)
    }
    .launchIn(yourCoroutineScope)

myChannel.subscribe()
```

LANGUAGE: Python
CODE:
```
changes = supabase.channel('db-changes').on_postgres_changes(
  "UPDATE",
  schema="public",
  table="products",
  filter="quantity=gt.10",
  callback=lambda payload: print(payload)
)
.subscribe()
```

----------------------------------------

TITLE: Configure Rails root route to show articles
DESCRIPTION: Modify the `config/routes.rb` file to set the application's root path (`/`) to display the `index` action of the `articles` controller, showing the list of articles from the database.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-29-ruby-on-rails-postgres.mdx#_snippet_6

LANGUAGE: ruby
CODE:
```
Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "articles#index"
end
```

----------------------------------------

TITLE: Define Workflow Map for Database Insert Trigger
DESCRIPTION: This YAML snippet defines a 'Map' step, named `EmailUsers`, which iterates through `$.changes` (database events). Inside the iterator, a 'Choice' step `CheckInsert` checks if the event `$.type` is an `INSERT`. If true, it proceeds to `WaitOneDay`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2021-04-02-supabase-workflows.mdx#_snippet_2

LANGUAGE: yaml
CODE:
```
EmailUsers:
  Type: Map
  End: true
  InputPath: '$.changes'
  Iterator:
    StartAt: CheckInsert
    States:
      CheckInsert:
        Type: Choice
        Default: Complete
        Choices:
          - Variable: '$.type'
            StringEquals: INSERT
            Next: WaitOneDay
```

----------------------------------------

TITLE: Add and Manage Google Map Markers in TypeScript
DESCRIPTION: This asynchronous function efficiently adds new markers to a Google Map and removes markers that are no longer in the view, avoiding full re-renders for better performance. It manages an 'activeMarkers' array to link internal store IDs with map marker IDs, facilitating future interactions like displaying detailed store information upon marker click. It takes an array of 'StoreResult' objects, each containing location and store details.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-03-01-geo-queries-with-postgis-in-ionic-angular.mdx#_snippet_27

LANGUAGE: ts
CODE:
```
  async addMarkers(stores: StoreResult[]) {
    // Skip if there are no results
    if (stores.length === 0) {
      return;
    }

    // Find marker that are outside of the view
    const toRemove = this.activeMarkers.filter((marker) => {
      const exists = stores.find((item) => item.id === marker.storeId);
      return !exists;
    });

    // Remove markers
    if (toRemove.length) {
      await this.map.removeMarkers(toRemove.map((marker) => marker.markerId));
    }

    // Create new marker array
    const markers: Marker[] = stores.map((store) => {
      return {
        coordinate: {
          lat: store.lat,
          lng: store.long
        },
        title: store.name
      };
    });

    // Add markers, store IDs
    const newMarkerIds = await this.map.addMarkers(markers);

    // Crate active markers by combining information
    this.activeMarkers = stores.map((store, index) => {
      return {
        markerId: newMarkerIds[index],
        storeId: store.id
      };
    });

    this.addMarkerClicks();
  }

  addMarkerClicks() {
    // TODO
  }
```

----------------------------------------

TITLE: SQL Query for Blog Posts and Comments
DESCRIPTION: Demonstrates a SQL query joining `blog_posts` and `comments` tables to select post titles and comment bodies. This example highlights data duplication when fetching one-to-many relationships directly in SQL, which GraphQL aims to avoid.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-03-29-graphql-now-available.mdx#_snippet_5

LANGUAGE: sql
CODE:
```
select
  blog_posts.title,
  comments.body as comment_body
from
  blog_posts
  join comments on blog_posts.id = comments.blog_post_id;
```

----------------------------------------

TITLE: Save Paddle Credentials as a Postgres Foreign Server
DESCRIPTION: This SQL snippet demonstrates how to create a foreign server named `paddle_server` in Postgres using the `wasm_wrapper` foreign data wrapper. It configures the server with the Paddle FDW package URL, name, version, and checksum, along with your Paddle API URL and sandbox API key for authentication.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-08-16-postgres-foreign-data-wrappers-with-wasm.mdx#_snippet_2

LANGUAGE: sql
CODE:
```
-- create Paddle foreign server
create server paddle_server
  foreign data wrapper wasm_wrapper
  options (
    -- check all available versions at
    -- https://fdw.dev/catalog/paddle/#available-versions
    fdw_package_url 'https://github.com/supabase/wrappers/releases/download/wasm_paddle_fdw_v0.1.1/paddle_fdw.wasm',
    fdw_package_name 'supabase:paddle-fdw',
    fdw_package_version '0.1.1',
    fdw_package_checksum 'c5ac70bb2eef33693787b7d4efce9a83cde8d4fa40889d2037403a51263ba657',

    -- save your Paddle credentials
    api_url 'https://sandbox-api.paddle.com',
    api_key '<your Paddle sandbox API key>'
  );
```

----------------------------------------

TITLE: Inserting data with non-contiguous timestamp ranges into PostgreSQL 14
DESCRIPTION: Demonstrates how to insert records into the `sensor_range` table using the `tsmultirange` data type. This example highlights the ability to store multiple, disjointed time intervals within a single column, a new feature in PostgreSQL 14.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2021-11-28-whats-new-in-postgres-14.mdx#_snippet_3

LANGUAGE: sql
CODE:
```
insert into sensor_range
  (metric_desc, metric_level, metric_ts)
values
  (
    'Temperature',
    'high',
    '{[2021-11-01 6:00, 2021-11-01 10:00],[2021-11-05 14:00, 2021-11-05 20:00]}'
  );

insert into sensor_range
  (metric_desc, metric_level, metric_ts)
values
  (
    'Temperature',
    'low',
    '{[2021-11-01 10:00, 2021-11-01 12:00],[2021-11-05 21:00, 2021-11-05 22:00]}'
  );
```

----------------------------------------

TITLE: Add Required Dependencies for WatermelonDB and Supabase
DESCRIPTION: Installs the necessary npm packages: WatermelonDB for local data storage, Supabase JavaScript client for backend integration, and expo-build-properties for native build customizations.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-10-08-react-native-offline-first-watermelon-db.mdx#_snippet_1

LANGUAGE: sh
CODE:
```
npm install @nozbe/watermelondb @supabase/supabase-js expo-build-properties
```

----------------------------------------

TITLE: Set Supabase database URL as Fly.io secret
DESCRIPTION: Use the Fly.io CLI (`flyctl`) to securely set the Supabase database connection URI as an environment variable (secret) for the deployed Rails application on Fly.io.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-29-ruby-on-rails-postgres.mdx#_snippet_7

LANGUAGE: bash
CODE:
```
fly secrets set DATABASE_URL=$DATABASE_URL
```

----------------------------------------

TITLE: Supabase-js Client-Side Cookie Configuration
DESCRIPTION: Configures `supabase-js` for client-side access to session cookies, allowing browsers to securely read and manage user sessions. This setup complements server-side cookie management, ensuring consistent session handling across the application.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-11-01-supabase-is-now-compatible-with-nextjs-14.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    flowType: 'pkce',
    autoRefreshToken: true,
    detectSessionInUrl: true,
    persistSession: true,
    storage: {
      getItem: async (key: string) => {
        return parse(document.cookie[key])
      },
      setItem: async (key: string, value: string) => {
        document.cookie = serialize(key, value)
      }
    },
    removeItem: async (key: string) => {
      document.cookie = serialize(key, '', {
        maxAge: 0
      })
    }
  }
})
```

----------------------------------------

TITLE: Configure Statement Timeout for PostgREST Roles
DESCRIPTION: Demonstrates how to set `statement_timeout` for `anon`, `authenticated`, and `service_role` in PostgreSQL to limit query execution time for different user types. This helps prevent expensive queries from running too long.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-07-12-postgrest-11-1-release.mdx#_snippet_0

LANGUAGE: sql
CODE:
```
-- anonymous users can run queries that take 100 milliseconds max
alter
  role anon
set
  statement_timeout = '100ms';

-- authenticated users can run queries that take 5 seconds max
alter
  role authenticated
set
  statement_timeout = '5s';

-- backend-only users can run queries that take 15 seconds max
alter
  role service_role
set
  statement_timeout = '15s';
```

----------------------------------------

TITLE: MapLibre GL JS Configuration Using Edge Function Proxy
DESCRIPTION: This JavaScript snippet shows how to configure MapLibre GL JS to fetch PMTiles data through the deployed Supabase Edge Function. Instead of directly referencing the public storage URL, it uses the Edge Function's URL, which then proxies the requests to the private Supabase Storage bucket, ensuring controlled access.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-06-19-self-host-maps-storage-protomaps.mdx#_snippet_3

LANGUAGE: js
CODE:
```
// ...
const map = new maplibregl.Map({
  hash: true,
  container: 'map',
  style: {
    version: 8,
    glyphs: 'https://cdn.protomaps.com/fonts/pbf/{fontstack}/{range}.pbf',
    sources: {
      protomaps: {
        attribution:
          '<a href="https://github.com/protomaps/basemaps">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>',
        type: 'vector',
        url: 'pmtiles://https://<project_ref>.supabase.co/functions/v1/maps-private/my_area.pmtiles',
      },
    },
    layers: protomaps_themes_base.default('protomaps', 'dark'),
  },
})
// ...
```

----------------------------------------

TITLE: Configure Expo Build Properties for WatermelonDB Native Dependencies
DESCRIPTION: Modifies the `app.json` configuration to include `expo-build-properties` plugin, specifically adding `simdjson` as an extra Pod for iOS, which is a native dependency required by WatermelonDB.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-10-08-react-native-offline-first-watermelon-db.mdx#_snippet_2

LANGUAGE: json
CODE:
```
{
  "expo": {
    "plugins": [
      [
        "expo-build-properties",
        {
          "ios": {
            "extraPods": [
              {
                "name": "simdjson",
                "configurations": ["Debug", "Release"],
                "path": "../node_modules/@nozbe/simdjson",
                "modular_headers": true
              }
            ]
          }
        }
      ]
    ]
  }
}
```

----------------------------------------

TITLE: Ionic/Angular Store Page Component Logic
DESCRIPTION: This TypeScript component defines the logic for the StorePage modal. It initializes an empty StoreEntry object, handles image selection, and calls the addStore method from StoresService to persist the data before dismissing the modal.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-03-01-geo-queries-with-postgis-in-ionic-angular.mdx#_snippet_18

LANGUAGE: ts
CODE:
```
import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { StoreEntry, StoresService } from '../services/stores.service'

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  store: StoreEntry = {
    name: '',
    description: '',
    image: undefined,
    lat: undefined,
    long: undefined,
  }

  constructor(
    public modalCtrl: ModalController,
    private storesService: StoresService
  ) {}

  ngOnInit() {}

  imageSelected(ev: any) {
    this.store.image = ev.detail.event.target.files[0]
  }

  async addStore() {
    this.storesService.addStore(this.store)
    this.modalCtrl.dismiss()
  }
```

----------------------------------------

TITLE: Handle OAuth Callback and Code Exchange (Next.js TypeScript)
DESCRIPTION: This TypeScript code for Next.js (`app/auth/callback/route.ts`) processes the OAuth callback. It extracts the authorization `code` from the URL, exchanges it for a user session using `supabase.auth.exchangeCodeForSession`, and then redirects the user to the appropriate page, handling potential `x-forwarded-host` headers for production environments.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/_partials/oauth_pkce_flow.mdx#_snippet_2

LANGUAGE: typescript
CODE:
```
import { NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions
import { createClient } from '@/utils/supabase/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // if "next" is in param, use it as the redirect URL
  let next = searchParams.get('next') ?? '/'
  if (!next.startsWith('/')) {
    // if "next" is not a relative URL, use the default
    next = '/'
  }

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
      const isLocalEnv = process.env.NODE_ENV === 'development'
      if (isLocalEnv) {
        // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
        return NextResponse.redirect(`${origin}${next}`)
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`)
      } else {
        return NextResponse.redirect(`${origin}${next}`)
      }
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
```

----------------------------------------

TITLE: SQL: Enable/Disable PGAudit Logging of Table Rows
DESCRIPTION: These SQL commands control whether PGAudit logs observed table rows. Enabling `pgaudit.log_rows` can expose sensitive data and significantly impact database performance, so use it only when absolutely necessary.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pgaudit.mdx#_snippet_20

LANGUAGE: sql
CODE:
```
--enable
alter role "postgres" set pgaudit.log_rows to 'on';

-- disable
alter role "postgres" set pgaudit.log_rows to 'off';
```

----------------------------------------

TITLE: Deno Hook for Conditional WhatsApp/SMS Messaging with Twilio
DESCRIPTION: This TypeScript code implements a Deno serverless function that acts as a webhook. It integrates with Twilio to send messages, dynamically selecting between WhatsApp and SMS based on the recipient's country code. Numbers identified as Latin American receive WhatsApp messages, while all others receive SMS. The hook verifies incoming requests using `standardwebhooks` and manages the Twilio API calls for message dispatch, including error handling and response formatting.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/send-sms-hook.mdx#_snippet_11

LANGUAGE: TypeScript
CODE:
```
import { Webhook } from "https://esm.sh/standardwebhooks@1.0.0";
import { readAll } from "https://deno.land/std/io/read_all.ts";
import * as base64 from "https://denopkg.com/chiefbiiko/base64/mod.ts";

const accountSid: string | undefined = Deno.env.get("TWILIO_ACCOUNT_SID");
const authToken: string | undefined = Deno.env.get("TWILIO_AUTH_TOKEN");
const fromNumber: string = Deno.env.get("TWILIO_WHATSAPP_NUMBER");
const smsFromNumber: string = Deno.env.get("TWILIO_SMS_NUMBER");

const latinAmericanCountryCodes = ['54', '55', '56', '57', '58', '501', '502', '503', '504', '505', '506', '507', '508', '509', '51', '52', '53', '591', '592', '593', '594', '595', '596', '597', '598', '599'];

const sendMessage = async (
    messageBody: string,
    accountSid: string | undefined,
    authToken: string | undefined,
    fromNumber: string,
    toNumber: string,
    useWhatsApp: boolean,
): Promise < any > => {
    if (!accountSid || !authToken) {
        console.log("Your Twilio account credentials are missing. Please add them.");
        return;
    }
    const url: string = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

    const encodedCredentials: string = base64.fromUint8Array(
        new TextEncoder().encode(`${accountSid}:${authToken}`),
    );

    const body: URLSearchParams = new URLSearchParams({
        To: useWhatsApp ? `whatsapp:${toNumber}` : toNumber,
        From: useWhatsApp ? `whatsapp:${fromNumber}` : smsFromNumber,
        Body: messageBody,
    });

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${encodedCredentials}`,
        },
        body,
    });

    return response.json();
};

Deno.serve(async (req) => {
    const payload = await req.text();
    const base64_secret = Deno.env.get("SEND_SMS_HOOK_SECRET").replace('v1,whsec_', '');
    const headers = Object.fromEntries(req.headers);
    const wh = new Webhook(base64_secret);
    try {
        const {
            user,
            sms
        } = wh.verify(payload, headers);
        const messageBody = `Your OTP is: ${sms.otp}`;
        const userPhoneNumber = user.phone;
        const countryCode = userPhoneNumber.substring(1, userPhoneNumber.indexOf(userPhoneNumber.match(/\d/)!));

        const useWhatsApp = latinAmericanCountryCodes.includes(countryCode);

        const response = await sendMessage(
            messageBody,
            accountSid,
            authToken,
            fromNumber,
            userPhoneNumber,
            useWhatsApp,
        );

        if (response.status !== "queued") {
            return new Response(
                JSON.stringify({
                    error: `Failed to send message, Error Code: ${response.code} ${response.message} ${response.more_info}`,
                }), {
                    status: response.status,
                    headers: {
                        "Content-Type": "application/json"
                    }
                },
            );
        }
        return new Response(
            JSON.stringify({
                message: "Message sent successfully."
            }), {
                headers: {
                    "Content-Type": "application/json"
                }
            },
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: `Failed to process the request: ${error}`
            }), {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            },
        );
    }
});
```

----------------------------------------

TITLE: Supabase Send OTP Success Response
DESCRIPTION: This JSON snippet illustrates the expected response structure when a signInWithOtp request is successful. It indicates that the OTP has been sent, with user and session being null, prompting the user to check their email.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-email-passwordless.mdx#_snippet_5

LANGUAGE: JSON
CODE:
```
{
  "data": {
    "user": null,
    "session": null
  },
  "error": null
}
```

----------------------------------------

TITLE: Supabase Email Template Variables
DESCRIPTION: This section describes the variables available for use within Supabase email templates, providing context for personalizing authentication flow messages.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-email-templates.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
Email Template Variables:
  .ConfirmationURL:
    Description: Contains the confirmation URL. For example, a signup confirmation URL would look like: https://project-ref.supabase.co/auth/v1/verify?token={{ .TokenHash }}&type=email&redirect_to=https://example.com/path
  .Token:
    Description: Contains a 6-digit One-Time-Password (OTP) that can be used instead of the {{. ConfirmationURL }}.
  .TokenHash:
    Description: Contains a hashed version of the {{ .Token }}. This is useful for constructing your own email link in the email template.
  .SiteURL:
    Description: Contains your application's Site URL. This can be configured in your project's authentication settings.
  .RedirectTo:
    Description: Contains the redirect URL passed when signUp, signInWithOtp, signInWithOAuth, resetPasswordForEmail or inviteUserByEmail is called. The redirect URL allow list can be configured in your project's authentication settings.
  .Data:
    Description: Contains metadata from auth.users.user_metadata. Use this to personalize the email message.
```

----------------------------------------

TITLE: Initialize AI Inference Session in Edge Function
DESCRIPTION: Set up a new AI inference session within the Edge Function. This session, using the `gte-small` text embedding model, can be reused across multiple requests to efficiently generate embeddings.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/quickstarts/generate-text-embeddings.mdx#_snippet_2

LANGUAGE: ts
CODE:
```
const session = new Supabase.ai.Session('gte-small');
```

----------------------------------------

TITLE: PostgreSQL Function to Retrieve User Teams for RLS
DESCRIPTION: A PL/pgSQL security definer function `user_teams()` that returns an array of integer `team_id`s for the currently authenticated user. This function is designed to be used in Row Level Security policies to filter data based on user's team memberships.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/rls-performance-and-best-practices-Z5Jjwv.mdx#_snippet_9

LANGUAGE: sql
CODE:
```
CREATE OR REPLACE FUNCTION user_teams()
    RETURNS int[] as
$$
begin
    return array( select team_id from team_user where auth.uid() = user_id);
end;
$$ language plpgsql security definer;
```

----------------------------------------

TITLE: Initialize Supabase Client in SvelteKit Layout Load Function
DESCRIPTION: This snippet demonstrates how to create and expose a Supabase client in the root SvelteKit layout's load function. It uses `createSupabaseLoadClient` from `@supabase/auth-helpers-sveltekit` to ensure the client is available throughout the application, handling session data and reactivity with `depends('supabase:auth')`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_6

LANGUAGE: JavaScript
CODE:
```
// src/routes/+layout.js
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'

export const load = async ({ fetch, data, depends }) => {
  depends('supabase:auth')

  const supabase = createSupabaseLoadClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event: { fetch },
    serverSession: data.session,
  })

  /**
   * It's fine to use `getSession` here, because on the client, `getSession` is
   * safe, and on the server, it reads `session` from the `LayoutData`, which
   * safely checked the session using `safeGetSession`.
   */
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { supabase, session }
}
```

LANGUAGE: TypeScript
CODE:
```
// src/routes/+layout.ts
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'
import type { Database } from '../DatabaseDefinitions'

export const load = async ({ fetch, data, depends }) => {
  depends('supabase:auth')

  const supabase = createSupabaseLoadClient<Database>({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event: { fetch },
    serverSession: data.session,
  })

  /**
   * It's fine to use `getSession` here, because on the client, `getSession` is
   * safe, and on the server, it reads `session` from the `LayoutData`, which
   * safely checked the session using `safeGetSession`.
   */
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { supabase, session }
}
```

----------------------------------------

TITLE: Supabase CLI: List Edge Function Secrets
DESCRIPTION: Command to list all secrets currently set for your remote Supabase project using the Supabase CLI, allowing verification of deployed secrets.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/secrets.mdx#_snippet_9

LANGUAGE: bash
CODE:
```
supabase secrets list
```

----------------------------------------

TITLE: Validate JSON Instance with pg_jsonschema Function
DESCRIPTION: Demonstrates a basic usage of the `json_matches_schema` function to validate a JSON instance against a simple JSON Schema using a SELECT statement.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pg_jsonschema.mdx#_snippet_1

LANGUAGE: SQL
CODE:
```
select
  extensions.json_matches_schema(
    schema := '{"type": "object"}',
    instance := '{}'
  );
```

----------------------------------------

TITLE: Enable pgvector extension in Supabase
DESCRIPTION: Adds the `pgvector` extension to the public schema of the database. This extension is essential for enabling vector similarity search capabilities within PostgreSQL.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/examples/nextjs-vector-search.mdx#_snippet_2

LANGUAGE: sql
CODE:
```
-- Enable pgvector extension
create extension if not exists vector with schema public;
```

----------------------------------------

TITLE: Create Initial Prisma Migration Directory
DESCRIPTION: This command creates a directory for the initial Prisma migration files. It ensures that the necessary folder structure is in place before generating the migration script.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/prisma.mdx#_snippet_9

LANGUAGE: bash
CODE:
```
mkdir -p prisma/migrations/0_init_supabase
```

----------------------------------------

TITLE: Supabase Auth User Identity Object Attributes
DESCRIPTION: Details the attributes of the user identity object, including their type and description, as returned by Supabase Auth. This object represents an authentication method linked to a user.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/identities.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
UserIdentityObject:
  provider_id: string - The provider id returned by the provider. If the provider is an OAuth provider, the id refers to the user's account with the OAuth provider. If the provider is `email` or `phone`, the id is the user's id from the `auth.users` table.
  user_id: string - The user's id that the identity is linked to.
  identity_data: object - The identity metadata. For OAuth and SAML identities, this contains information about the user from the provider.
  id: string - The unique id of the identity.
  provider: string - The provider name.
  email: string - The email is a generated column that references the optional email property in the identity_data
  created_at: string - The timestamp that the identity was created.
  last_sign_in_at: string - The timestamp that the identity was last used to sign in.
  updated_at: string - The timestamp that the identity was last updated.
```

----------------------------------------

TITLE: Request Google Refresh Token during OAuth Sign-in
DESCRIPTION: Illustrates how to modify the `signInWithOAuth` call to request a Google refresh token. By setting `access_type` to 'offline' and `prompt` to 'consent' in `queryParams`, the application can obtain a `provider_refresh_token` for long-term, offline access to Google services on the user's behalf.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/social-login/auth-google.mdx#_snippet_4

LANGUAGE: js
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project.supabase.co', 'your-anon-key')

// ---cut---
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    queryParams: {
      access_type: 'offline',
      prompt: 'consent',
    },
  },
})
```

----------------------------------------

TITLE: Sign in Anonymously with Supabase
DESCRIPTION: Demonstrates how to create an anonymous user session using the `signInAnonymously()` method across various Supabase client libraries. This allows users to interact with the application without providing personal information, with the option to link a permanent identity later.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-anonymous.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project.supabase.co', 'your-anon-key')

// ---cut---
const { data, error } = await supabase.auth.signInAnonymously()
```

LANGUAGE: Dart
CODE:
```
await supabase.auth.signInAnonymously();
```

LANGUAGE: Swift
CODE:
```
let session = try await supabase.auth.signInAnonymously()
```

LANGUAGE: Kotlin
CODE:
```
supabase.auth.signInAnonymously()
```

LANGUAGE: Python
CODE:
```
response = supabase.auth.sign_in_anonymously()
```

----------------------------------------

TITLE: SQL Query to Monitor PostgreSQL Index Usage Percentage
DESCRIPTION: This SQL query determines the percentage of times an index is used when accessing a table, relative to sequential scans. It helps database administrators identify how effectively indexes are being utilized and if they are contributing to query performance as expected.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/steps-to-improve-query-performance-with-indexes-q8PoC9.mdx#_snippet_1

LANGUAGE: sql
CODE:
```
select
  relname,
  100 * idx_scan / (seq_scan + idx_scan) as percent_of_times_index_used,
  n_live_tup as rows_in_table
from pg_stat_user_tables
where seq_scan + idx_scan > 0
order by n_live_tup desc;
```

----------------------------------------

TITLE: Link Local Project to Remote Supabase
DESCRIPTION: Connects your local project directory to a specific remote Supabase project. Use the project ID obtained from `supabase projects list` to establish the link.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/deploy.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
supabase link --project-ref your-project-id
```

----------------------------------------

TITLE: SQL: Perform Semantic Search with RLS Enforcement
DESCRIPTION: Shows how to perform a semantic search (vector similarity search) on `document_sections`. The RLS policy remains active, ensuring that even similarity searches only return results accessible to the current user.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/rag-with-permissions.mdx#_snippet_3

LANGUAGE: sql
CODE:
```
-- Perform inner product similarity based on a match_threshold
select *
from document_sections
where document_sections.embedding <#> embedding < -match_threshold
order by document_sections.embedding <#> embedding;
```

----------------------------------------

TITLE: Create Custom Supabase Auth UI Themes in React
DESCRIPTION: This snippet demonstrates how to define a completely custom theme for the Supabase Auth UI component. It shows the structure for creating multiple theme variations (e.g., 'default', 'dark', 'evenDarker') with distinct color palettes, which can then be applied via the 'appearance.theme' prop.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/auth-ui.mdx#_snippet_8

LANGUAGE: js
CODE:
```
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'

const supabase = createClient('<INSERT PROJECT URL>', '<INSERT PROJECT ANON API KEY>')

const customTheme = {
  default: {
    colors: {
      brand: 'hsl(153 60.0% 53.0%)',
      brandAccent: 'hsl(154 54.8% 45.1%)',
      brandButtonText: 'white',
      // ..
    },
  },
  dark: {
    colors: {
      brandButtonText: 'white',
      defaultButtonBackground: '#2e2e2e',
      defaultButtonBackgroundHover: '#3e3e3e',
      //..
    },
  },
  // You can also add more theme variations with different names.
  evenDarker: {
    colors: {
      brandButtonText: 'white',
      defaultButtonBackground: '#1e1e1e',
      defaultButtonBackgroundHover: '#2e2e2e',
      //..
    },
  },
}

const App = () => (
  <Auth
    supabaseClient={supabase}
    theme="default" // can also be "dark" or "evenDarker"
    appearance={{ theme: customTheme }}
  />
)
```

----------------------------------------

TITLE: Disable Prepared Statements in Psycopg
DESCRIPTION: For the Psycopg library, disable prepared statements by setting the `prepare_threshold` attribute of the connection object to `None`. This prevents the driver from automatically preparing statements.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/disabling-prepared-statements-qL8lEL.mdx#_snippet_3

LANGUAGE: python
CODE:
```
connection.prepare_threshold = None
```

----------------------------------------

TITLE: Example JSON Payload for Supabase Email Sending
DESCRIPTION: Provides a sample JSON structure representing the `user` and `email_data` objects passed during the email sending process, including user details, OTP, and token hash.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/send-email-hook.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "user": {
    "id": "8484b834-f29e-4af2-bf42-80644d154f76",
    "aud": "authenticated",
    "role": "authenticated",
    "email": "valid.email@supabase.io",
    "phone": "",
    "app_metadata": {
      "provider": "email",
      "providers": ["email"]
    },
    "user_metadata": {
      "email": "valid.email@supabase.io",
      "email_verified": false,
      "phone_verified": false,
      "sub": "8484b834-f29e-4af2-bf42-80644d154f76"
    },
    "identities": [
      {
        "identity_id": "bc26d70b-517d-4826-bce4-413a5ff257e7",
        "id": "8484b834-f29e-4af2-bf42-80644d154f76",
        "user_id": "8484b834-f29e-4af2-bf42-80644d154f76",
        "identity_data": {
          "email": "valid.email@supabase.io",
          "email_verified": false,
          "phone_verified": false,
          "sub": "8484b834-f29e-4af2-bf42-80644d154f76"
        },
        "provider": "email",
        "last_sign_in_at": "2024-05-14T12:56:33.824231484Z",
        "created_at": "2024-05-14T12:56:33.824261Z",
        "updated_at": "2024-05-14T12:56:33.824261Z",
        "email": "valid.email@supabase.io"
      }
    ],
    "created_at": "2024-05-14T12:56:33.821567Z",
    "updated_at": "2024-05-14T12:56:33.825595Z",
    "is_anonymous": false
  },
  "email_data": {
    "token": "305805",
    "token_hash": "7d5b7b1964cf5d388340a7f04f1dbb5eeb6c7b52ef8270e1737a58d0",
    "redirect_to": "http://localhost:3000/",
    "email_action_type": "signup",
    "site_url": "http://localhost:9999",
    "token_new": "",
    "token_hash_new": ""
  }
}
```

----------------------------------------

TITLE: SQL: Enable RLS and Create Policy for Document Sections
DESCRIPTION: Enables Row Level Security on the `document_sections` table and creates a policy that restricts `select` operations. Users can only query document sections if they own the linked parent document, using `auth.uid()` for authentication.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/rag-with-permissions.mdx#_snippet_1

LANGUAGE: sql
CODE:
```
-- enable row level security
alter table document_sections enable row level security;

-- setup RLS for select operations
create policy "Users can query their own document sections"
on document_sections for select to authenticated using (
  document_id in (
    select id
    from documents
    where (owner_id = (select auth.uid()))
  )
);
```

----------------------------------------

TITLE: React Component for Supabase MFA TOTP Challenge and Verification
DESCRIPTION: This `AuthMFA` React component handles the user interaction for Multi-Factor Authentication (MFA) verification. It allows users to enter a TOTP code from their authenticator app. On submission, it lists available MFA factors using `supabase.auth.mfa.listFactors()`, creates a challenge for the first TOTP factor via `supabase.auth.mfa.challenge()`, and then verifies the entered code with `supabase.auth.mfa.verify()`. Any errors during the process are displayed to the user.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-mfa/totp.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
function AuthMFA() {
  const [verifyCode, setVerifyCode] = useState('')
  const [error, setError] = useState('')

  const onSubmitClicked = () => {
    setError('')
    ;(async () => {
      const factors = await supabase.auth.mfa.listFactors()
      if (factors.error) {
        throw factors.error
      }

      const totpFactor = factors.data.totp[0]

      if (!totpFactor) {
        throw new Error('No TOTP factors found!')
      }

      const factorId = totpFactor.id

      const challenge = await supabase.auth.mfa.challenge({ factorId })
      if (challenge.error) {
        setError(challenge.error.message)
        throw challenge.error
      }

      const challengeId = challenge.data.id

      const verify = await supabase.auth.mfa.verify({
        factorId,
        challengeId,
        code: verifyCode
      })
      if (verify.error) {
        setError(verify.error.message)
        throw verify.error
      }
    })()
  }

  return (
    <>
      <div>Please enter the code from your authenticator app.</div>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        value={verifyCode}
        onChange={(e) => setVerifyCode(e.target.value.trim())}
      />
      <input type="button" value="Submit" onClick={onSubmitClicked} />
    </>
  )
}
```

----------------------------------------

TITLE: Integrate Supabase Database Types into SvelteKit `app.d.ts`
DESCRIPTION: This TypeScript snippet shows how to extend the SvelteKit `App` namespace in `src/app.d.ts` to include Supabase client types (`SupabaseClient<Database>`) and a `safeGetSession` utility. This integration provides strong typing and IntelliSense for Supabase interactions within your SvelteKit application, leveraging types generated from your Supabase database.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_4

LANGUAGE: TypeScript
CODE:
```
// src/app.d.ts

import { SupabaseClient, Session, User } from '@supabase/supabase-js'
import { Database } from './DatabaseDefinitions'

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>
      safeGetSession(): Promise<{ session: Session | null; user: User | null }>
    }
    interface PageData {
      session: Session | null
      user: User | null
    }
    // interface Error {}
    // interface Platform {}
  }
}
```

----------------------------------------

TITLE: Project Directory Structure with .env and config.toml
DESCRIPTION: Illustrates the typical project directory structure, showing the placement of `.env`, `.env.example`, and `config.toml` files within a Supabase project.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/local-development/managing-config.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
.
├── .env
├── .env.example
└── supabase
    └── config.toml
```

----------------------------------------

TITLE: HTML Template for Reauthentication Confirmation
DESCRIPTION: HTML template for confirming user reauthentication, providing a token for verification.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/send-email-hook.mdx#_snippet_20

LANGUAGE: Spanish
CODE:
```
<h2>Confirma la reautenticación</h2><p>Ingresa el código: {{token}}</p>
```

LANGUAGE: French
CODE:
```
<h2>Confirmez la réauthentification</h2><p>Saisissez le code : {{token}}</p>
```

----------------------------------------

TITLE: Initialize Supabase Client for Client-Side in SvelteKit Layout
DESCRIPTION: This section details how to initialize the Supabase client for client-side usage within SvelteKit's root `+layout.ts` and `+layout.svelte` files. It covers the setup for both 0.8.x and 0.9.0 versions, including handling authentication state changes and session management.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_18

LANGUAGE: svelte
CODE:
```
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { supabaseClient } from '$lib/db'
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'

  onMount(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(() => {
      invalidate('supabase:auth')
    })

    return () => {
      subscription.unsubscribe()
    }
  })
</script>

<slot />
```

LANGUAGE: typescript
CODE:
```
// src/routes/+layout.ts
import { invalidate } from '$app/navigation'
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'
import type { LayoutLoad } from './$types'
import type { Database } from '../DatabaseDefinitions'

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
  depends('supabase:auth')

  const supabase = createSupabaseLoadClient<Database>({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event: { fetch },
    serverSession: data.session,
  })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { supabase, session }
}
```

LANGUAGE: svelte
CODE:
```
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { invalidate } from '$app/navigation';
  import { onMount } from 'svelte';
  import type { LayoutData } from './$types';

  export let data: LayoutData;

  $: ({ supabase, session } = data);

  onMount(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate('supabase:auth')
      }
    });

    return () => subscription.unsubscribe();
  });
</script>

<slot />
```

----------------------------------------

TITLE: Measure SQL Query Performance with EXPLAIN ANALYZE for RLS Testing
DESCRIPTION: Demonstrates how to set session roles and JWT claims to test Row Level Security (RLS) performance using EXPLAIN ANALYZE on a SELECT COUNT(*) query. This helps in comparing execution times under different RLS configurations.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/rls-performance-and-best-practices-Z5Jjwv.mdx#_snippet_6

LANGUAGE: sql
CODE:
```
set session role authenticated;
set request.jwt.claims to '{"role":"authenticated", "sub":"5950b438-b07c-4012-8190-6ce79e4bd8e5"}';

explain analyze SELECT count(*) FROM rlstest;
set session role postgres;
```

----------------------------------------

TITLE: Customize Refine authProvider Login with Supabase Magic Link
DESCRIPTION: This snippet demonstrates how to modify the `login` method within a Refine `authProvider` to use Supabase's `signInWithOtp` for passwordless email authentication. It handles success and error cases, alerting the user to check their email or displaying an error message.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-refine.mdx#_snippet_6

LANGUAGE: ts
CODE:
```
login: async ({ email }) => {
  try {
    const { error } = await supabaseClient.auth.signInWithOtp({ email });

    if (!error) {
      alert("Check your email for the login link!");
      return {
        success: true,
      };
    };

    throw error;
  } catch (e: any) {
    alert(e.message);
    return {
      success: false,
      e,
    };
  }
},
```

----------------------------------------

TITLE: Set Supabase Edge Function Secrets from Environment File
DESCRIPTION: This command uploads environment variables defined in a local `.env` file to the deployed Supabase Edge Function. This is crucial for providing API keys and other sensitive configurations to the function in a secure manner.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/examples/elevenlabs-generate-speech-stream.mdx#_snippet_9

LANGUAGE: bash
CODE:
```
supabase secrets set --env-file supabase/functions/.env
```

----------------------------------------

TITLE: HTML Template for Magic Link Login Email
DESCRIPTION: HTML template for sending magic login links. Users can click the link or use a token to sign in without a password.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/send-email-hook.mdx#_snippet_17

LANGUAGE: Spanish
CODE:
```
<h2>Tu enlace mágico</h2><p>Sigue este enlace para iniciar sesión:</p><p><a href="{{confirmation_url}}">Iniciar sesión</a></p><p>Alternativamente, ingresa el código: {{token}}</p>
```

LANGUAGE: French
CODE:
```
<h2>Votre Lien Magique</h2><p>Suivez ce lien pour vous connecter :</p><p><a href="{{confirmation_url}}">Connectez-vous</a></p><p>Vous pouvez aussi saisir le code : {{token}}</p>
```

----------------------------------------

TITLE: JSON Schema for Supabase Email Sending Payload
DESCRIPTION: Defines the structural requirements and data types for the `user` and `email_data` objects within the email sending payload, including validation rules and faker data generation hints.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/send-email-hook.mdx#_snippet_1

LANGUAGE: json
CODE:
```
{
  "type": "object",
  "properties": {
    "user": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string",
          "x-faker": "random.uuid"
        },
        "aud": {
          "type": "string",
          "enum": ["authenticated"]
        },
        "role": {
          "type": "string",
          "enum": ["anon", "authenticated"]
        },
        "email": {
          "type": "string",
          "x-faker": "internet.email"
        },
        "phone": {
          "type": "string",
          "x-faker": {
            "fake": "{{phone.phoneNumber('+1##########')}}"
          }
        },
        "app_metadata": {
          "type": "object",
          "properties": {
            "provider": {
              "type": "string",
              "enum": ["email"]
            },
            "providers": {
              "type": "array",
              "items": {
                "type": "string",
                "enum": ["email"]
              },
              "minItems": 1,
              "maxItems": 1
            }
          }
        },
        "user_metadata": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string",
              "x-faker": "internet.email"
            },
            "email_verified": {
              "type": "boolean",
              "x-faker": "random.boolean"
            },
            "phone_verified": {
              "type": "boolean",
              "x-faker": "random.boolean"
            },
            "sub": {
              "type": "string",
              "x-faker": "random.uuid"
            }
          }
        },
        "identities": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "identity_id": {
                "type": "string",
                "x-faker": "random.uuid"
              },
              "id": {

```

----------------------------------------

TITLE: Configure Supabase Email OTP Template
DESCRIPTION: This HTML snippet shows how to modify the Supabase email template to include the {{ .Token }} variable, which is necessary for sending OTPs instead of magic links. This change enables the system to send a one-time code to the user's email.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-email-passwordless.mdx#_snippet_3

LANGUAGE: HTML
CODE:
```
<h2>One time login code</h2>

<p>Please enter this code: {{ .Token }}</p>
```

----------------------------------------

TITLE: Supabase SQL RLS: Differentiating Anonymous and Permanent Users
DESCRIPTION: Illustrates how to define Row-Level Security (RLS) policies in Supabase using SQL to control access based on a user's anonymous status. The first policy restricts inserts to permanent users, while the second allows both anonymous and permanent users to view data.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-anonymous.mdx#_snippet_3

LANGUAGE: sql
CODE:
```
create policy "Only permanent users can post to the news feed"
on news_feed as restrictive for insert
to authenticated
with check ((select (auth.jwt()->>'is_anonymous')::boolean) is false );

create policy "Anonymous and permanent users can view the news feed"
on news_feed for select
to authenticated
using ( true );
```

----------------------------------------

TITLE: Angular Board Invite User Section
DESCRIPTION: HTML snippet for the user invitation section within the board component. It includes an input field for capturing the invitee's email using `[(ngModel)]` for two-way data binding and a button to trigger the `addUser()` method for sending the invitation.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-08-24-building-a-realtime-trello-board-with-supabase-and-angular.mdx#_snippet_31

LANGUAGE: HTML
CODE:
```
<div class="flex items-center gap-4 py-12">
  <span class="block text-3xl font-extrabold text-gray-900">Invite</span>

  <input
    [(ngModel)]="addUserEmail"
    placeholder="john@doe.com"
    class="block rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm"
  />
  <button
    (click)="addUser()"
```

----------------------------------------

TITLE: Angular Board Component Logic for Data Management
DESCRIPTION: This TypeScript code defines the `BoardComponent` in an Angular application, responsible for managing board-related data and interactions. It loads board information, lists, and cards using a `DataService`, and provides methods for adding, updating, and deleting boards, lists, and cards. It also includes functionality for inviting users to a board and a placeholder for future realtime updates.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-08-24-building-a-realtime-trello-board-with-supabase-and-angular.mdx#_snippet_26

LANGUAGE: TypeScript
CODE:
```
import { DataService } from './../../../services/data.service'
import { Component, HostListener, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  lists: any[] = []
  boardId: string | null = null
  editTitle: any = {}
  editCard: any = {}
  boardInfo: any = null
  titleChanged = false

  listCards: any = {}
  addUserEmail = ''

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.boardId = this.route.snapshot.paramMap.get('id')
    if (this.boardId) {
      // Load general board information
      const board = await this.dataService.getBoardInfo(this.boardId)
      this.boardInfo = board.data

      // Retrieve all lists
      this.lists = await this.dataService.getBoardLists(this.boardId)

      // Retrieve cards for each list
      for (let list of this.lists) {
        this.listCards[list.id] = await this.dataService.getListCards(list.id)
      }

      // For later...
      this.handleRealtimeUpdates()
    }
  }

  //
  // BOARD logic
  //
  async saveBoardTitle() {
    await this.dataService.updateBoard(this.boardInfo)
    this.titleChanged = false
  }

  async deleteBoard() {
    await this.dataService.deleteBoard(this.boardInfo)
    this.router.navigateByUrl('/workspace')
  }

  //
  // LISTS logic
  //
  async addList() {
    const newList = await this.dataService.addBoardList(this.boardId!, this.lists.length)
  }

  editingTitle(list: any, edit = false) {
    this.editTitle[list.id] = edit
  }

  async updateListTitle(list: any) {
    await this.dataService.updateBoardList(list)
    this.editingTitle(list, false)
  }

  async deleteBoardList(list: any) {
    await this.dataService.deleteBoardList(list)
  }

  //
  // CARDS logic
  //
  async addCard(list: any) {
    await this.dataService.addListCard(list.id, this.boardId!, this.listCards[list.id].length)
  }

  editingCard(card: any, edit = false) {
    this.editCard[card.id] = edit
  }

  async updateCard(card: any) {
    await this.dataService.updateCard(card)
    this.editingCard(card, false)
  }

  async deleteCard(card: any) {
    await this.dataService.deleteCard(card)
  }

  // Invites
  async addUser() {
    await this.dataService.addUserToBoard(this.boardId!, this.addUserEmail)
    this.addUserEmail = ''
  }

  handleRealtimeUpdates() {
    // TODO
  }
}
```

----------------------------------------

TITLE: Creating a named secret with description using vault.create_secret() in SQL
DESCRIPTION: This SQL snippet shows how to create a secret with an optional unique name and a description using the `vault.create_secret()` function. It takes three arguments: the secret value, a unique name, and a description. This allows for better organization and identification of secrets within the Vault.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/vault.mdx#_snippet_1

LANGUAGE: SQL
CODE:
```
select vault.create_secret('another_s3kre3t', 'unique_name', 'This is the description');
```

----------------------------------------

TITLE: Supabase Auth: Verify Magic Link Token Hash for PKCE Flow
DESCRIPTION: Demonstrates how to use the `verifyOtp` method to exchange a `token_hash` received from a Magic Link for a user session. This is a crucial step in the PKCE flow, typically performed at the redirect endpoint (`/auth/confirm`).
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-email-passwordless.mdx#_snippet_2

LANGUAGE: JavaScript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('url', 'anonKey')

const { error } = await supabase.auth.verifyOtp({
  token_hash: 'hash',
  type: 'email',
})
```

----------------------------------------

TITLE: Supabase Edge Log Request Data Fields
DESCRIPTION: Describes the key fields available in the 'request' object within Supabase edge logs, including the HTTP method, the full request URL with PostgREST query parameters, and the authenticated user's ID. These fields are crucial for analyzing query types and user behavior.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/discovering-and-interpreting-api-errors-in-the-logs-7xREI9.mdx#_snippet_5

LANGUAGE: APIDOC
CODE:
```
request.method: Request Method (PATCH, GET, PUT...)
request.url: Request URL, which contains the PostgREST formatted query
request.sb.auth_users: authenticated user's ID
```

----------------------------------------

TITLE: Initialize Supabase Client with Explicit Options
DESCRIPTION: Demonstrates how to initialize the Supabase client using createClient with explicit constructor options. This includes configurations for database schema, authentication storage and session management, real-time channels, and global fetch settings and headers.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/docs/ref/javascript/release-notes.mdx#_snippet_1

LANGUAGE: javascript
CODE:
```
const supabase = createClient(apiURL, apiKey, {
  db: {
    schema: 'public',
  },
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  realtime: {
    channels,
    endpoint,
  },
  global: {
    fetch: customFetch,
    headers: DEFAULT_HEADERS,
  },
})
```

----------------------------------------

TITLE: Supabase CLI: domains delete Command
DESCRIPTION: Removes an activated custom domain from a Supabase project. Reversing previous OAuth/SAML configuration changes may be necessary.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/custom-domains.mdx#_snippet_7

LANGUAGE: APIDOC
CODE:
```
supabase domains delete
  --project-ref <project_reference>: The reference ID of the Supabase project.
```

----------------------------------------

TITLE: Defining Data Models and Inserting Records with Supabase Kotlin
DESCRIPTION: This snippet provides the Kotlin data class definitions for 'BookMetadata' and 'Book', which are used to structure the data for insertion. It then shows how to perform a bulk insert operation into the "books" table using these data classes with the Supabase Kotlin client.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/json.mdx#_snippet_5

LANGUAGE: Kotlin
CODE:
```
@Serializable
data class BookMetadata(
    val description: String,
    val price: Double,
    val ages: List<Int>
)

@Serializable
data class Book(
    val title: String,
    val author: String,
    val metadata: BookMetadata
)
```

LANGUAGE: Kotlin
CODE:
```
val data = supabase.from("books").insert(listOf(
    Book("The Poky Little Puppy", "Janette Sebring Lowrey", BookMetadata("Puppy is slower than other, bigger animals.", 5.95, listOf(3, 6))),
    Book("Tale of Peter Rabbit", "Beatrix Potter", BookMetadata("Rabbit eats some vegetables.", 4.49, listOf(2, 5))),
    Book("Tootle", "Gertrude Crampton", BookMetadata("Little toy train has big dreams.", 3.99, listOf(2, 5))),
    Book("Green Eggs and Ham", "Dr. Seuss", BookMetadata("Sam has changing food preferences and eats unusually colored food.", 7.49, listOf(4, 8))),
    Book("Harry Potter and the Goblet of Fire", "J.K. Rowling", BookMetadata("Fourth year of school starts, big drama ensues.", 24.95, listOf(10, 99)))
))
```

----------------------------------------

TITLE: Set up Supabase Client for SvelteKit
DESCRIPTION: This snippet demonstrates how to configure the Supabase client in SvelteKit for both 0.7.x and 0.8.0 versions. It shows the differences in `createClient` usage and `setupSupabaseHelpers` for authentication.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_22

LANGUAGE: js
CODE:
```
import { createClient } from '@supabase/supabase-js'
import { setupSupabaseHelpers } from '@supabase/auth-helpers-sveltekit'
import { dev } from '$app/environment'
import { env } from '$env/dynamic/public'
// or use the static env

// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabaseClient = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY, {
  persistSession: false,
  autoRefreshToken: false,
})

setupSupabaseHelpers({
  supabaseClient,
  cookieOptions: {
    secure: !dev,
  },
})
```

LANGUAGE: js
CODE:
```
import { createClient } from '@supabase/auth-helpers-sveltekit'
import { env } from '$env/dynamic/public'
// or use the static env

// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabaseClient = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY)
```

----------------------------------------

TITLE: Jetpack Compose Add Product Screen
DESCRIPTION: A Jetpack Compose Composable function for the 'Add Product' screen. It includes a TopAppBar with navigation, and conditionally displays a loading screen or a success screen based on the state observed from the AddProductViewModel.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-kotlin.mdx#_snippet_25

LANGUAGE: kotlin
CODE:
```
@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AddProductScreen(
    modifier: Modifier = Modifier,
    navController: NavController,
    viewModel: AddProductViewModel = hiltViewModel(),
) {
    Scaffold(
        topBar = {
            TopAppBar(
                navigationIcon = {
                    IconButton(onClick = {
                        navController.navigateUp()
                    }) {
                        Icon(
                            imageVector = Icons.Filled.ArrowBack,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.onPrimary
                        )
                    }
                },
                backgroundColor = MaterialTheme.colorScheme.primary,
                title = {
                    Text(
                        text = stringResource(R.string.add_product_text_screen_title),
                        color = MaterialTheme.colorScheme.onPrimary,
                    )
                }
            )
        }
    ) { padding ->
        val navigateAddProductSuccess =
            viewModel.navigateAddProductSuccess.collectAsState(initial = null).value
        val isLoading =
            viewModel.isLoading.collectAsState(initial = null).value
        if (isLoading == true) {
            LoadingScreen(message = "Adding Product",
                onCancelSelected = {
                    navController.navigateUp()
                })
        } else {
            SuccessScreen(
                message = "Product added",
                onMoreAction = {
                    viewModel.onAddMoreProductSelected()
                },
                onNavigateBack = {
                    navController.navigateUp()
                })
        }

    }
}
```

----------------------------------------

TITLE: Create Supabase Client for Next.js Server Components
DESCRIPTION: This asynchronous utility function creates a Supabase client for Next.js server components. It uses `createServerClient` and integrates with `next/headers` cookies to manage session cookies, including a `setAll` error handler for Server Components where cookie setting might be ignored.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/creating-a-client.mdx#_snippet_4

LANGUAGE: ts
CODE:
```
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        }
      }
    }
  )
}
```

----------------------------------------

TITLE: Query Shifts with Explicit Multi-Key Joins using Supabase
DESCRIPTION: This code demonstrates how to fetch `shifts` data, explicitly joining `start_scan` and `end_scan` details from the `scans` table using Supabase's `select` method. It aliases the foreign key relationships to resolve ambiguity when multiple columns reference the same table.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/joins-and-nesting.mdx#_snippet_6

LANGUAGE: JavaScript
CODE:
```
const { data, error } = await supabase.from('shifts').select(
  `
    *,
    start_scan:scans!scan_id_start (
      id,
      user_id,
      badge_scan_time
    ),
   end_scan:scans!scan_id_end (
     id,
     user_id,
     badge_scan_time
    )
  `
)
```

LANGUAGE: Dart
CODE:
```
final data = await supabase.from('shifts').select('''
  *,
  start_scan:scans!scan_id_start (
    id,
    user_id,
    badge_scan_time
  ),
end_scan:scans!scan_id_end (
    id,
    user_id,
    badge_scan_time
  )
''');
```

LANGUAGE: Swift
CODE:
```
struct Shift: Codable {
  let id: Int
  let userId: Int
  let attendanceStatus: String?

  let scans: [Scan]

  struct Scan: Codable {
    let id: Int
    let userId: Int
    let badgeScanTime: TimeInterval

    enum CodingKeys: String, CodingKey {
      case id
      case userId = "user_id"
      case badgeScanTime = "badge_scan_time"
    }
  }

  enum CodingKeys: String, CodingKey {
    case id
    case userId = "user_id"
    case attendanceStatus = "attendance_status"
  }
}

let shifts: [Shift] = try await supabase
  .from("shifts")
  .select(
    """
      *,
      start_scan:scans!scan_id_start (
        id,
        user_id,
        badge_scan_time
      ),
     scans: scan_id_end (
        id,
        user_id,
        badge_scan_time
     )
    """
  )
  .execute()
  .value
```

LANGUAGE: Kotlin
CODE:
```
val data = supabase.from("shifts").select(Columns.raw('''
  *,
  start_scan:scans!scan_id_start (
    id,
    user_id,
    badge_scan_time
  ),
end_scan:scans!scan_id_end (
    id,
    user_id,
    badge_scan_time
  )
'''));
```

LANGUAGE: Python
CODE:
```
data = supabase.from_('shifts').select("""
  *,
  start_scan:scans!scan_id_start (
    id,
    user_id,
    badge_scan_time
  ),
  end_scan:scans!scan_id_end (
    id,
    user_id,
    badge_scan_time
  )
""").execute()
```

LANGUAGE: GraphQL
CODE:
```
const Query = `
  query {
    shiftsCollection {
      edges {
        node {
          id
          user_id
          attendance_status
          scan_id_start {
            id
            user_id
            badge_scan_time
          }
          scan_id_end {
            id
            user_id
            badge_scan_time
          }
        }
      }
    }
  }
`
```

----------------------------------------

TITLE: Supabase Redirect URLs for Netlify and Vercel Previews
DESCRIPTION: Provides recommended additional redirect URLs for local development and deployment previews on Netlify and Vercel, ensuring authentication works correctly across different environments. It highlights the use of dynamic Vercel URLs.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/redirect-urls.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
Netlify:
  - http://localhost:3000/**
  - https://**--my_org.netlify.app/**

Vercel:
  - http://localhost:3000/**
  - https://*-<team-or-account-slug>.vercel.app/**
```

----------------------------------------

TITLE: Invoke Security Definer Function from Supabase Client
DESCRIPTION: Demonstrates how to call the `public.get_stripe_products` security definer function from a JavaScript Supabase client. It passes a `name_prefix` parameter to filter the results and includes error handling for the API call.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/wrappers/overview.mdx#_snippet_6

LANGUAGE: js
CODE:
```
const { data, error } = await supabase
  .rpc('get_stripe_products', { name_prefix: 'Test' })
  .select('*')
if (error) console.error(error)
else console.log(data)
```

----------------------------------------

TITLE: Configure Supabase Auth Hooks in SvelteKit
DESCRIPTION: This section details how to set up server-side hooks for Supabase authentication in SvelteKit. It covers the `handleAuth` and `getSession` setup for older versions and the simplified `auth()` handler for version 0.7.0, including an optional sequence for additional handlers.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_30

LANGUAGE: ts
CODE:
```
import { handleAuth } from '@supabase/auth-helpers-sveltekit'
import type { GetSession, Handle } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'

export const handle: Handle = sequence(...handleAuth())

export const getSession: GetSession = async (event) => {
  const { user, accessToken, error } = event.locals
  return {
    user,
    accessToken,
    error,
  }
}
```

LANGUAGE: ts
CODE:
```
// make sure the supabase instance is initialized on the server
import '$lib/db'
import { dev } from '$app/environment'
import { auth } from '@supabase/auth-helpers-sveltekit/server'

export const handle = auth()
```

LANGUAGE: ts
CODE:
```
// make sure the supabase instance is initialized on the server
import '$lib/db'
import { dev } from '$app/environment'
import { auth } from '@supabase/auth-helpers-sveltekit/server'
import { sequence } from '@sveltejs/kit/hooks'

export const handle = sequence(auth(), yourHandler)
```

----------------------------------------

TITLE: Store and Index Image Embeddings in Supabase with vecs (Python)
DESCRIPTION: This Python code connects to a Supabase PostgreSQL database using the `vecs` client, creating or retrieving a collection named 'image_vectors' with a 512-dimension capacity. It then iterates through previously generated image embeddings, upserting them into the collection along with their filenames, and finally creates an index for efficient vector search.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/integrations/roboflow.mdx#_snippet_6

LANGUAGE: python
CODE:
```
import vecs

DB_CONNECTION = "postgresql://postgres:[password]@[host]:[port]/[database]"

vx = vecs.create_client(DB_CONNECTION)

# create a collection of vectors with 3 dimensions
images = vx.get_or_create_collection(name="image_vectors", dimension=512)

for result in results:
    image = result["filename"]
    embeddings = result["embeddings"][0]

    # insert a vector into the collection
    images.upsert(
        records=[
            (
                image,
                embeddings,
                {} # metadata
            )
        ]
    )

images.create_index()
```

----------------------------------------

TITLE: Next.js: Perform Server-Side OAuth Redirect with Supabase Auth Helpers
DESCRIPTION: This snippet demonstrates how to handle server-side OAuth redirects in a Next.js application using Supabase Auth Helpers. It utilizes `NextResponse.redirect` with the URL provided by `supabase.auth.signInWithOAuth`'s data property to ensure the user is correctly redirected after authentication.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/oauth-sign-in-isnt-redirecting-on-the-server-side-ShGMtr.mdx#_snippet_0

LANGUAGE: ts
CODE:
```
import { NextResponse } from "next/server";
...
const { data } = await supabase.auth.signInWithOAuth({
  provider: 'github',
})

return NextResponse.redirect(data.url)
```

----------------------------------------

TITLE: Define Import Map for Supabase Function
DESCRIPTION: This JSON snippet demonstrates how to define an `import_map.json` file within a Supabase function's directory. It specifies external dependencies, similar to a `package.json` file, allowing functions to resolve modules from specified URLs.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/dependencies.mdx#_snippet_5

LANGUAGE: json
CODE:
```
{
  "imports": {
    "lodash": "https://cdn.skypack.dev/lodash"
  }
}
```

----------------------------------------

TITLE: Preparing .env for Production Secrets Deployment
DESCRIPTION: Command to copy a local `.env.local` file to `./supabase/.env`, preparing it for deployment of secrets to a production Supabase project using the CLI. This file should not be committed to Git.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/secrets.mdx#_snippet_7

LANGUAGE: bash
CODE:
```
cp ./supabase/.env.local ./supabase/.env
```

----------------------------------------

TITLE: Generate Public URL using Supabase SDK
DESCRIPTION: This JavaScript snippet demonstrates how to use the Supabase SDK's `getPublicUrl` method to programmatically generate a public URL for an asset stored in a public bucket. It requires initializing the Supabase client with your project URL and API key.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/serving/downloads.mdx#_snippet_1

LANGUAGE: js
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('your_project_url', 'your_supabase_api_key')

// ---cut---
const { data } = supabase.storage.from('bucket').getPublicUrl('filePath.jpg')

console.log(data.publicUrl)
```

----------------------------------------

TITLE: Unassign Custom Audit Role and Verify for Object Logging
DESCRIPTION: Removes the assignment of the custom audit role from `pgaudit.role` for the 'postgres' user, effectively disabling object-level logging, and includes a query to verify the change.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pgaudit.mdx#_snippet_13

LANGUAGE: SQL
CODE:
```
-- change pgaudit.role to no longer reference some_audit_role
alter role "postgres" set pgaudit.role to '';

-- view if pgaudit.role changed with the following command:
select
  rolname,
  rolconfig
from pg_roles
where rolname = 'postgres';
-- should return a rolconfig path with "pgaudit.role="

```

----------------------------------------

TITLE: Attach Metadata to Requests with User-Agent Header Examples
DESCRIPTION: Examples of `User-Agent` header values for attaching additional request metadata like application name, version, and device ID. It is recommended for identification purposes, but Personal Identifiable Information (PII) should be avoided to comply with data protection privacy laws and prevent user fingerprinting.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/telemetry/logs.mdx#_snippet_2

LANGUAGE: text
CODE:
```
node MyApp/1.2.3 (device-id:abc123)
Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0 MyApp/1.2.3 (Foo v1.3.2; Bar v2.2.2)
```

----------------------------------------

TITLE: Supabase Auth: Sign In with Discord OAuth Provider
DESCRIPTION: Demonstrates how to authenticate users using Discord as an OAuth provider with Supabase. The examples show calling `signInWithOAuth` (or `signInWith` for Kotlin) with the Discord provider. The Flutter example includes optional configurations for redirect links and launch modes for web and mobile platforms.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/social-login/auth-discord.mdx#_snippet_1

LANGUAGE: JavaScript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project-id.supabase.co', 'your-anon-key')

async function signInWithDiscord() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
  })
}
```

LANGUAGE: Dart
CODE:
```
Future<void> signInWithDiscord() async {
  await supabase.auth.signInWithOAuth(
    OAuthProvider.discord,
    redirectTo: kIsWeb ? null : 'my.scheme://my-host', // Optionally set the redirect link to bring back the user via deeplink.
    authScreenLaunchMode:
        kIsWeb ? LaunchMode.platformDefault : LaunchMode.externalApplication, // Launch the auth screen in a new webview on mobile.
  );
}
```

LANGUAGE: Kotlin
CODE:
```
suspend fun signInWithDiscord() {
	supabase.auth.signInWith(Discord)
}
```

----------------------------------------

TITLE: Initialize Supabase Browser Client in Astro Component
DESCRIPTION: This snippet demonstrates how to create a Supabase client for client-side operations within an Astro component. It uses environment variables (PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY) to configure the client, suitable for direct browser interaction.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/creating-a-client.mdx#_snippet_12

LANGUAGE: TypeScript
CODE:
```
const supabase = createBrowserClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY
  );
```

----------------------------------------

TITLE: Get Current Network Restrictions via Supabase Management API
DESCRIPTION: Retrieve the current network restrictions applied to a Supabase project's database using the Management API. This API call requires an access token and project reference to authenticate and identify the project.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/network-restrictions.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
export SUPABASE_ACCESS_TOKEN="your-access-token"
export PROJECT_REF="your-project-ref"

curl -X GET "https://api.supabase.com/v1/projects/$PROJECT_REF/network-restrictions" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN"
```

----------------------------------------

TITLE: Supabase PKCE Auth Flow Configuration for Sign Up
DESCRIPTION: This TypeScript snippet illustrates how to configure the `signUp` function for Supabase authentication to correctly implement the PKCE (Proof Key for Code Exchange) flow. It's crucial to set the `emailRedirectTo` option to the designated code exchange route handler for proper authentication redirection.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_16

LANGUAGE: TypeScript
CODE:
```
await supabase.auth.signUp({
  email: 'valid.email@supabase.io',
  password: 'sup3rs3cur3',
  options: {
    emailRedirectTo: 'http://localhost:3000/auth/callback',
  },
})
```

----------------------------------------

TITLE: Migrate Supabase Storage Objects with JavaScript
DESCRIPTION: This Node.js script provides a method to manually migrate storage objects from an old Supabase project's buckets to a new one. It uses the @supabase/supabase-js library to iterate through objects, download them from the source, and upload them to the destination project.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/migrating-within-supabase/backup-restore.mdx#_snippet_9

LANGUAGE: javascript
CODE:
```
// npm install @supabase/supabase-js@1
const { createClient } = require('@supabase/supabase-js')

const OLD_PROJECT_URL = 'https://xxx.supabase.co'
const OLD_PROJECT_SERVICE_KEY = 'old-project-service-key-xxx'

const NEW_PROJECT_URL = 'https://yyy.supabase.co'
const NEW_PROJECT_SERVICE_KEY = 'new-project-service-key-yyy'

;(async () => {
  const oldSupabaseRestClient = createClient(OLD_PROJECT_URL, OLD_PROJECT_SERVICE_KEY, {
    db: {
      schema: 'storage',
    },
  })
  const oldSupabaseClient = createClient(OLD_PROJECT_URL, OLD_PROJECT_SERVICE_KEY)
  const newSupabaseClient = createClient(NEW_PROJECT_URL, NEW_PROJECT_SERVICE_KEY)

  // make sure you update max_rows in postgrest settings if you have a lot of objects
  // or paginate here
  const { data: oldObjects, error } = await oldSupabaseRestClient.from('objects').select()
  if (error) {
    console.log('error getting objects from old bucket')
    throw error
  }

  for (const objectData of oldObjects) {
    console.log(`moving ${objectData.id}`)
    try {
      const { data, error: downloadObjectError } = await oldSupabaseClient.storage
        .from(objectData.bucket_id)
        .download(objectData.name)
      if (downloadObjectError) {
        throw downloadObjectError
      }

      const { _, error: uploadObjectError } = await newSupabaseClient.storage
        .from(objectData.bucket_id)
        .upload(objectData.name, data, {
          upsert: true,
          contentType: objectData.metadata.mimetype,
          cacheControl: objectData.metadata.cacheControl,
        })
      if (uploadObjectError) {
        throw uploadObjectError
      }
    } catch (err) {
      console.log('error moving ', objectData)
      console.log(err)
    }
  }
})()
```

----------------------------------------

TITLE: Initialize Supabase Project and Create Edge Function
DESCRIPTION: Bash commands to initialize a Supabase project and create a new Edge Function named `push`, which will handle sending push notifications.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/examples/push-notifications.mdx#_snippet_3

LANGUAGE: Bash
CODE:
```
supabase init
supabase functions new push
```

----------------------------------------

TITLE: Example SAML 2.0 Assertion with Mapped Attributes
DESCRIPTION: This XML snippet illustrates a SAML 2.0 AttributeStatement containing 'mail' and 'givenName' attributes. These attributes are configured to be mapped to 'email' and 'first_name' respectively in the Supabase user identity.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/enterprise-sso/auth-sso-saml.mdx#_snippet_9

LANGUAGE: xml
CODE:
```
<saml:AttributeStatement>
  <!-- will be mapped to the email key -->
  <saml:Attribute
    Name="mail"
    NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
    >
    <saml:AttributeValue xsi:type="xs:string">
      valid.email@supabase.io
    </saml:AttributeValue>
  </saml:Attribute>

  <!-- will be mapped to the first_name key -->
  <saml:Attribute
    Name="givenName"
    NameFormat="urn:oasis:names:tc:SAML:2.0:attrname-format:basic"
    >
    <saml:AttributeValue xsi:type="xs:string">
      Jane Doe
    </saml:AttributeValue>
  </saml:Attribute>
</saml:AttributeStatement>
```

----------------------------------------

TITLE: Configure PGAudit Session Mode Logging Categories (Examples)
DESCRIPTION: Examples demonstrating how to set the 'pgaudit.log' configuration parameter to specify which categories of database operations (DDL, read, or none) should be logged in session mode. This allows for fine-grained control over auditing.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pgaudit.mdx#_snippet_1

LANGUAGE: sql
CODE:
```
-- log all CREATE, ALTER, and DROP events
... pgaudit.log = 'ddl';

-- log all CREATE, ALTER, DROP, and SELECT events
... pgaudit.log = 'read, ddl';

-- log nothing
... pgaudit.log = 'none';
```

----------------------------------------

TITLE: Execute PostgreSQL Vector Search Function with Supabase Client (TypeScript)
DESCRIPTION: This TypeScript code demonstrates how to call the `match_documents` PostgreSQL function from a Supabase client. It uses the `rpc()` method to pass the `query_embedding`, `match_threshold`, and `match_count` parameters, retrieving matching documents. This is the client-side interface for performing vector similarity searches.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/vector-columns.mdx#_snippet_4

LANGUAGE: ts
CODE:
```
const { data: documents } = await supabaseClient.rpc('match_documents', {
  query_embedding: embedding, // Pass the embedding you want to compare
  match_threshold: 0.78, // Choose an appropriate threshold for your data
  match_count: 10 // Choose the number of matches
})
```

----------------------------------------

TITLE: Configure Ktor Client Engines for Kotlin Multiplatform
DESCRIPTION: This example demonstrates how to configure different Ktor client engines for various targets in a Kotlin Multiplatform project. It shows specific engine dependencies for JVM (CIO), Android (inherits JVM), JS, and iOS (Darwin) within a `build.gradle.kts` file. This setup ensures the correct engine is used for each platform.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/docs/ref/kotlin/installing.mdx#_snippet_2

LANGUAGE: kotlin
CODE:
```
val commonMain by getting {
    dependencies {
        //supabase modules
    }
}
val jvmMain by getting {
    dependencies {
        implementation("io.ktor:ktor-client-cio:KTOR_VERSION")
    }
}
val androidMain by getting {
    dependsOn(jvmMain)
}
val jsMain by getting {
    dependencies {
        implementation("io.ktor:ktor-client-js:KTOR_VERSION")
    }
}
val iosMain by getting {
    dependencies {
        implementation("io.ktor:ktor-client-darwin:KTOR_VERSION")
    }
}
```

----------------------------------------

TITLE: Supabase Authentication Callback Handling
DESCRIPTION: These code examples demonstrate how to handle Supabase authentication callbacks across different JavaScript frameworks. The core logic involves extracting the authorization code from the URL, exchanging it for a user session using `supabase.auth.exchangeCodeForSession`, and then redirecting the user to their intended destination or an error page. Each example adapts the cookie handling mechanism to its respective framework's environment.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/_partials/oauth_pkce_flow.mdx#_snippet_5

LANGUAGE: javascript
CODE:
```
) 

 const { error } = await supabase.auth.exchangeCodeForSession(code) 

 if (!error) {
   return redirect(next)
 }
 }

 // return the user to an error page with instructions
 return redirect('/auth/auth-code-error')
}
```

LANGUAGE: typescript
CODE:
```
import { redirect, type LoaderFunctionArgs } from '@remix-run/node'
import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@supabase/ssr'

export async function loader({ request }: LoaderFunctionArgs) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') || '/'
  const headers = new Headers()

  if (code) {
    const supabase = createServerClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!, {
      cookies: {
        getAll() {
          return parseCookieHeader(request.headers.get('Cookie') ?? '')
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            headers.append('Set-Cookie', serializeCookieHeader(name, value, options))
          )
        }
      }
    })

    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      return redirect(next, { headers })
    }
  }

  // return the user to an error page with instructions
  return redirect('/auth/auth-code-error', { headers })
}
```

LANGUAGE: javascript
CODE:
```
...
app.get("/auth/callback", async function (req, res) {
  const code = req.query.code
  const next = req.query.next ?? "/"

  if (code) {
    const supabase = createServerClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return parseCookieHeader(context.req.headers.cookie ?? '')
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          context.res.appendHeader('Set-Cookie', serializeCookieHeader(name, value, options))
        )
      }
    }
  })
    await supabase.auth.exchangeCodeForSession(code)
  }

  res.redirect(303, `/${next.slice(1)}`)
})
```

----------------------------------------

TITLE: Create Login/Signup Form Component in Next.js
DESCRIPTION: This snippet demonstrates how to create a basic login and signup form component in a Next.js `page.jsx` file. It includes input fields for email and password, and buttons that trigger server actions for authentication.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-nextjs.mdx#_snippet_7

LANGUAGE: JSX
CODE:
```
import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  )
}
```

----------------------------------------

TITLE: Add Supabase and Ktor Dependencies to Gradle (Kotlin)
DESCRIPTION: Specifies the necessary `implementation` dependencies for Supabase (Postgrest, Storage, Auth) and Ktor HTTP client in the `build.gradle` (app) file. Placeholders for version numbers are used.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-kotlin.mdx#_snippet_3

LANGUAGE: Gradle
CODE:
```
implementation "io.github.jan-tennert.supabase:postgrest-kt:$supabase_version"
implementation "io.github.jan-tennert.supabase:storage-kt:$supabase_version"
implementation "io.github.jan-tennert.supabase:auth-kt:$supabase_version"
implementation "io.ktor:ktor-client-android:$ktor_version"
implementation "io.ktor:ktor-client-core:$ktor_version"
implementation "io.ktor:ktor-utils:$ktor_version"
```

----------------------------------------

TITLE: Extracting SSO Information from User JWT for RLS
DESCRIPTION: Provides SQL statements to extract SAML SSO-related information from a user's JWT, useful for Row Level Security policies. Includes methods for retrieving the authentication method, SSO provider UUID, and identity provider's EntityID.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/enterprise-sso/auth-sso-saml.mdx#_snippet_1

LANGUAGE: SQL
CODE:
```
auth.jwt()#>>'{amr,0,method}'
auth.jwt()#>>'{amr,0,provider}'
auth.jwt()#>>'{user_metadata,iss}'
```

----------------------------------------

TITLE: Initialize Supabase Client in Flutter Main Function
DESCRIPTION: This Dart code initializes the Supabase client in a Flutter application's `main` function using a provided URL and anonymous key. It also defines a `showSnackBar` extension method on `BuildContext` for displaying user feedback messages.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-flutter.mdx#_snippet_3

LANGUAGE: Dart
CODE:
```
import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

Future<void> main() async {
  await Supabase.initialize(
    url: 'YOUR_SUPABASE_URL',
    anonKey: 'YOUR_SUPABASE_ANON_KEY',
  );
  runApp(const MyApp());
}

final supabase = Supabase.instance.client;

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(title: 'Supabase Flutter');
  }
}

extension ContextExtension on BuildContext {
  void showSnackBar(String message, {bool isError = false}) {
    ScaffoldMessenger.of(this).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: isError
            ? Theme.of(this).colorScheme.error
            : Theme.of(this).snackBarTheme.backgroundColor,
      ),
    );
  }
}
```

----------------------------------------

TITLE: PostgreSQL RLS Policy: Enforce MFA for Selected Users Based on Verified Factors
DESCRIPTION: A restrictive PostgreSQL Row Level Security policy that conditionally enforces MFA. It allows access if the user has verified MFA factors ('aal2') or if they have no verified MFA factors ('aal1', 'aal2'), effectively enforcing MFA only for users who have enabled and verified it. The policy checks the 'auth.mfa_factors' table to determine if a user has verified MFA factors.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-12-14-mfa-auth-via-rls.mdx#_snippet_4

LANGUAGE: sql
CODE:
```
create policy "Allow access on table only if user has gone through MFA"
  on table_name
  as restrictive -- very important!
  to authenticated
  using (
    array[auth.jwt()->>'aal'] <@ (
      select
          case
            when count(id) > 0 then array['aal2']
            else array['aal1', 'aal2']
          end as aal
        from auth.mfa_factors
        where (select auth.uid()) = user_id and status = 'verified'
    ));
```

----------------------------------------

TITLE: Define hybrid_search function for combined full-text and semantic queries
DESCRIPTION: Implements the `hybrid_search` SQL function, which performs a combined full-text and semantic search. It accepts `query_text`, `query_embedding`, and `match_count` as primary parameters, along with optional weights for full-text and semantic contributions, and an RRF smoothing constant. The function returns a set of `documents` records, fusing results from both search methods using Reciprocal Rank Fusion.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/hybrid-search.mdx#_snippet_2

LANGUAGE: SQL
CODE:
```
create or replace function hybrid_search(
  query_text text,
  query_embedding vector(512),
  match_count int,
  full_text_weight float = 1,
  semantic_weight float = 1,
  rrf_k int = 50
)
returns setof documents
language sql
as $$
with full_text as (
  select
    id,
    -- Note: ts_rank_cd is not indexable but will only rank matches of the where clause
    -- which shouldn't be too big
    row_number() over(order by ts_rank_cd(fts, websearch_to_tsquery(query_text)) desc) as rank_ix
  from
    documents
  where
    fts @@ websearch_to_tsquery(query_text)
  order by rank_ix
  limit least(match_count, 30) * 2
),
semantic as (
  select
    id,
    row_number() over (order by embedding <#> query_embedding) as rank_ix
  from
    documents
  order by rank_ix
  limit least(match_count, 30) * 2
)
select
  documents.*
from
  full_text
  full outer join semantic
    on full_text.id = semantic.id
  join documents
    on coalesce(full_text.id, semantic.id) = documents.id
order by
  coalesce(1.0 / (rrf_k + full_text.rank_ix), 0.0) * full_text_weight +
  coalesce(1.0 / (rrf_k + semantic.rank_ix), 0.0) * semantic_weight
  desc
limit
  least(match_count, 30)
$$;
```

----------------------------------------

TITLE: Invoke Local Supabase Edge Function
DESCRIPTION: These examples demonstrate how to invoke a locally running Supabase Edge Function named `hello-world`. The cURL example uses a POST request with a JSON body and authorization header. The JavaScript example uses the Supabase client library to invoke the function with a body.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/local-quickstart.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
curl --request POST 'http://localhost:54321/functions/v1/hello-world' \
  --header 'Authorization: Bearer SUPABASE_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{ "name":"Functions" }'
```

LANGUAGE: javascript
CODE:
```
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

const { data, error } = await supabase.functions.invoke('hello-world', {
  body: { name: 'Functions' },
})
```

----------------------------------------

TITLE: Create SELECT policy for user's own profiles
DESCRIPTION: An alternative RLS policy for the `profiles` table, restricting `SELECT` access so that users can only view their own profile records by matching `auth.uid()` with the `user_id` column.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/row-level-security.mdx#_snippet_5

LANGUAGE: SQL
CODE:
```
create policy "User can see their own profile only."
on profiles
for select using ( (select auth.uid()) = user_id );
```

----------------------------------------

TITLE: Example SQL Query for Translation
DESCRIPTION: This SQL query serves as an input example for the SQL to REST API Translator tool. It demonstrates selecting specific columns, applying a case-insensitive filter, ordering results, and pagination, which the tool converts into equivalent PostgREST HTTP requests or Supabase client code.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/sql-to-rest.mdx#_snippet_0

LANGUAGE: SQL
CODE:
```
select
  title,
  description
from
  books
where
  description ilike '%cheese%'
order by
  title desc
limit
  5
offset
  10
```

----------------------------------------

TITLE: Implement Google Sign-in with Chrome Identity API and Supabase (TypeScript)
DESCRIPTION: This TypeScript code demonstrates how to initiate a Google sign-in flow within a Chrome Extension using `chrome.identity.launchWebAuthFlow()`. It constructs the OAuth URL with necessary parameters like client ID, redirect URI, and scopes. Upon successful authentication, it extracts the ID token from the redirected URL and uses `supabase.auth.signInWithIdToken()` to complete the user's sign-in with Supabase.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/social-login/auth-google.mdx#_snippet_20

LANGUAGE: typescript
CODE:
```
const manifest = chrome.runtime.getManifest()

const url = new URL('https://accounts.google.com/o/oauth2/auth')

url.searchParams.set('client_id', manifest.oauth2.client_id)
url.searchParams.set('response_type', 'id_token')
url.searchParams.set('access_type', 'offline')
url.searchParams.set('redirect_uri', `https://${chrome.runtime.id}.chromiumapp.org`)
url.searchParams.set('scope', manifest.oauth2.scopes.join(' '))

chrome.identity.launchWebAuthFlow(
  {
    url: url.href,
    interactive: true,
  },
  async (redirectedTo) => {
    if (chrome.runtime.lastError) {
      // auth was not successful
    } else {
      // auth was successful, extract the ID token from the redirectedTo URL
      const url = new URL(redirectedTo)
      const params = new URLSearchParams(url.hash)

      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: params.get('id_token'),
      })
    }
  }
)
```

----------------------------------------

TITLE: Create Flask Route for GitHub OAuth Sign-in
DESCRIPTION: Defines a Flask route `/signin/github` that initiates the GitHub OAuth sign-in process. This function calls `supabase.auth.sign_in_with_oauth`, specifying 'github' as the provider and providing a `redirect_to` URL for the callback. It then redirects the user's browser to the generated GitHub OAuth consent screen.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-11-21-oauth2-login-python-flask-apps.mdx#_snippet_3

LANGUAGE: python
CODE:
```
@app.route("/signin/github")
def signin_with_github():
    res = supabase.auth.sign_in_with_oauth(
        {
            "provider": "github",
            "options": {
	            "redirect_to": f"{request.host_url}callback"
	        },
        }
    )
    return redirect(res.url)
```

----------------------------------------

TITLE: Deno Serverless Function for Email Dispatch with Fallback
DESCRIPTION: This Deno.serve handler processes incoming webhook requests, verifies the payload using a secret, and attempts to send emails. It prioritizes Postmark as the primary email provider and falls back to SendGrid if Postmark fails. The function handles environment variables for API keys and webhook secrets, and returns appropriate JSON responses for success or failure.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/send-email-hook.mdx#_snippet_25

LANGUAGE: TypeScript
CODE:
```
Deno.serve(async (req) => {
    const payload = await req.text();
    const postmarkServerToken = Deno.env.get("POSTMARK_SERVER_TOKEN");
    const sendGridApiKey = Deno.env.get("SENDGRID_API_KEY");
    const headers = Object.fromEntries(req.headers);
    const base64_secret = Deno.env.get('SEND_EMAIL_HOOK_SECRET').replace('v1,whsec_', '');
    const wh = new Webhook(base64_secret);
    const {
        user,
        email_data
    } = wh.verify(payload, headers);

    try {
        // Try sending email using Postmark
        let response = await sendEmailWithPostmark(user, email_data, postmarkServerToken!);

        if (!response.ok) {
            // If Postmark fails, try SendGrid
            console.error(`Primary email send failed: ${await response.text()}`);
            response = await sendEmailWithSendGrid(user, email_data, sendGridApiKey!);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Failed to send email via backup: ${errorData.errors[0].message}`);
            }
        }

        return new Response(JSON.stringify({
            message: "Email sent successfully."
        }), {
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({
            error: `Failed to process the request: ${error.message}`
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
});
```

----------------------------------------

TITLE: Expected entrypoint.sh file permissions
DESCRIPTION: This output shows the required permissions for the `entrypoint.sh` file (`-rwxr-xr-x`), indicating it should be executable by the owner, group, and others.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/grafana-not-displaying-data-sXJrMj.mdx#_snippet_6

LANGUAGE: text
CODE:
```
-rwxr-xr-x
```

----------------------------------------

TITLE: Return Retry-able Error from HTTP Hook
DESCRIPTION: This example demonstrates how to construct a retry-able error response for an HTTP Hook. The response should include an appropriate status code (e.g., 429) and a non-empty 'retry-after' header. All responses, including errors, must have a 'Content-Type' of 'application/json'.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks.mdx#_snippet_15

LANGUAGE: jsx
CODE:
```
return new Response(
  JSON.stringify({
    error: `Failed to process the request: ${error}`,
  }),
  { status: 429, headers: { 'Content-Type': 'application/json', 'retry-after': 'true' } }
)
```

----------------------------------------

TITLE: Re-routing Requests with Supabase Edge Runtime
DESCRIPTION: This example demonstrates how to use Edge Runtime to re-route an incoming request from one endpoint (`/rest/v1/old_table`) to another (`/rest/v1/new_table`). It shows how to forward headers, method, and body, and includes basic error handling for potential issues during the fetch operation.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-04-11-edge-runtime-self-hosted-deno-functions.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
serve(async (req) => {
  try {
    if (req.url.endsWith('/rest/v1/old_table')) {
      return await fetch('http://rest:3000/rest/v1/new_table', {
        headers: req.headers,
        method: req.method,
        body: req.body
      })
    }
  } catch (e) {
    const error = { msg: e.toString() }
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})
```

----------------------------------------

TITLE: Deploy Supabase Migrations to Staging with GitHub Actions
DESCRIPTION: This GitHub Actions workflow automates the deployment of Supabase database migrations to a staging environment. It's triggered on pushes to the 'develop' branch or manual dispatch. The workflow links to the specified Supabase project using environment variables and pushes database migrations.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/deployment/managing-environments.mdx#_snippet_12

LANGUAGE: yaml
CODE:
```
name: Deploy Migrations to Staging

on:
  push:
    branches:
      - develop
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest

    env:
      SUPABASE_ACCESS_TOKEN: ${{ secrets.SUPABASE_ACCESS_TOKEN }}
      SUPABASE_DB_PASSWORD: ${{ secrets.STAGING_DB_PASSWORD }}
      SUPABASE_PROJECT_ID: ${{ secrets.STAGING_PROJECT_ID }}

    steps:
      - uses: actions/checkout@v4

      - uses: supabase/setup-cli@v1
        with:
          version: latest

      - run: supabase link --project-ref $SUPABASE_PROJECT_ID
      - run: supabase db push
```

----------------------------------------

TITLE: Example TOTP otpauth URI Format
DESCRIPTION: This snippet shows an example of the `otpauth` URI format used for Time-Based One Time Passwords (TOTP). It includes parameters like algorithm, digits, issuer, period, and the shared secret, which are used by authenticator applications to generate OTP codes.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-12-14-mfa-auth-via-rls.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
otpauth://totp/supabase.io:j@supacats.io?algorithm=SHA1&digits=6&issuer=supabase.io&period=30&secret=BFSXQHFB2BGAZIOQWCDBJUF7B54A52JQ
```

----------------------------------------

TITLE: Install Supabase Python Library
DESCRIPTION: Installs the `supabase` Python library using pip, which is a prerequisite for interacting with Supabase services and implementing authentication in a Flask application.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-11-21-oauth2-login-python-flask-apps.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
pip install supabase
```

----------------------------------------

TITLE: MFA Verification Hook Outputs API Reference
DESCRIPTION: Reference for the output payload fields expected from the MFA verification hook, including the decision on authentication flow and an optional message.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/mfa-verification-hook.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Outputs:
  decision: string - The decision on whether to allow authentication to move forward. Use 'reject' to deny the verification attempt and log the user out of all active sessions. Use 'continue' to use the default Supabase Auth behavior.
  message: string - The message to show the user if the decision was 'reject'.
```

----------------------------------------

TITLE: Insert Multiple Records into Supabase 'movies' Table
DESCRIPTION: Demonstrates how to insert multiple movie records into a 'movies' table using various programming languages and SQL. This method is suitable for small to medium-sized data insertions, interacting with the Supabase client library or direct SQL.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/tables.mdx#_snippet_4

LANGUAGE: SQL
CODE:
```
insert into movies
  (name, description)
values
  (
    'The Empire Strikes Back',
    'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda.'
  ),
  (
    'Return of the Jedi',
    'After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star.'
  );
```

LANGUAGE: JavaScript
CODE:
```
const { data, error } = await supabase.from('movies').insert([
  {
    name: 'The Empire Strikes Back',
    description:
      'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda.',
  },
  {
    name: 'Return of the Jedi',
    description:
      'After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star.',
  },
])
```

LANGUAGE: Dart
CODE:
```
await supabase
  .from('movies')
  .insert([{
    name: 'The Empire Strikes Back',
    description: 'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda.'
  }, {
    name: 'Return of the Jedi',
    description: 'After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star.'
  }]);
```

LANGUAGE: Swift
CODE:
```
try await supabase.from("movies")
  .insert(
    [
      [
        "name": "The Empire Strikes Back",
        "description":
          "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda.",
      ],
      [
        "name": "Return of the Jedi",
        "description":
          "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star.",
      ],
    ]
  )
  .execute()
```

LANGUAGE: Python
CODE:
```
client.from_("movies").insert([
    {
        "name": "The Empire Strikes Back",
        "description": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda."
    },
    {
        "name": "Return of the Jedi",
        "description": "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star."
    }
]).execute()
```

LANGUAGE: Kotlin
CODE:
```
@Serializable
data class Movie(
    val name: String,
    val description: String
)

supabase
    .from("movies")
    .insert(listOf(
        Movie("The Empire Strikes Back", "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda."),
        Movie("Return of the Jedi", "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star."),
    ))
```

----------------------------------------

TITLE: Find Failed pg_net HTTP Requests
DESCRIPTION: Provides a SQL query to identify and list all failed HTTP requests stored in `net._http_response`. It filters for entries with a status code of 400 or higher, or where an error message is present, ordered by creation time.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pg_net.mdx#_snippet_13

LANGUAGE: sql
CODE:
```
select
  *
from net._http_response
where "status_code" >= 400 or "error_msg" is not null
order by "created" desc;
```

----------------------------------------

TITLE: Insert initial data into a table using SQL
DESCRIPTION: Example SQL statement to insert multiple rows into the 'countries' table. This demonstrates a basic data seeding operation for populating a database with default or sample records.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/local-development/seeding-your-database.mdx#_snippet_0

LANGUAGE: SQL
CODE:
```
insert into countries
  (name, code)
values
  ('United States', 'US'),
  ('Canada', 'CA'),
  ('Mexico', 'MX');
```

----------------------------------------

TITLE: Configure Supabase CLI for Local Background Task Testing
DESCRIPTION: Shows how to modify the supabase/config.toml file to set the edge_runtime policy to per_worker. This configuration prevents local Edge Function instances from terminating automatically after a request, allowing background tasks to run to completion during local development and testing.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/background-tasks.mdx#_snippet_2

LANGUAGE: TOML
CODE:
```
[edge_runtime]
policy = "per_worker"
```

----------------------------------------

TITLE: Initialize Supabase Client with service_role Secret for Server-Side Admin Tasks
DESCRIPTION: This code initializes a Supabase client instance using the `createClient` method from `@supabase/supabase-js`. It's configured for server-side administration tasks by providing the `service_role` secret and disabling session persistence, auto-refresh, and URL session detection to prevent accidental exposure and ensure proper functionality in a server environment.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/performing-administration-tasks-on-the-server-side-with-the-servicerole-secret-BYM4Fa.mdx#_snippet_0

LANGUAGE: ts
CODE:
```
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(supabaseUrl, serviceRoleSecret, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
})
```

----------------------------------------

TITLE: Raise Custom HTTP Error in Postgres Function
DESCRIPTION: This SQL snippet demonstrates how to raise a custom HTTP error (e.g., 402 Payment Required) from within a Postgres function. It uses `json_build_object` to construct a detailed error message, including a hint and custom headers, which PostgREST will translate into an HTTP response.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/securing-your-api.mdx#_snippet_4

LANGUAGE: sql
CODE:
```
raise sqlstate 'PGRST' using
  message = json_build_object(
    'code',    '123',
    'message', 'Payment Required',
    'details', 'Quota exceeded',
    'hint',    'Upgrade your plan')::text,
  detail = json_build_object(
    'status',  402,
    'headers', json_build_object(
      'X-Powered-By', 'Nerd Rage'))::text;
```

----------------------------------------

TITLE: Create dequeue_and_run_jobs PL/pgSQL Function
DESCRIPTION: This PL/pgSQL function periodically dequeues and processes jobs from the `job_queue`. It selects pending jobs that are scheduled to run, updates their status to 'completed' upon success, and implements a retry mechanism for failures, delaying retries by one minute up to a maximum number of attempts.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/send-email-hook.mdx#_snippet_5

LANGUAGE: PL/pgSQL
CODE:
```
create or replace function dequeue_and_run_jobs() returns void as $$
declare
    job record;
begin
    for job in
        select * from job_queue
        where status = 'pending'
          and scheduled_at <= now()
        order by priority desc, created_at
        for update skip locked
    loop
        begin
            -- add job processing logic here.
            -- for demonstration, we'll just update the job status to 'completed'.
            update job_queue
            set status = 'completed'
            where job_id = job.job_id;

        exception when others then
            -- handle job failure and retry logic
            if job.retry_count < job.max_retries then
                update job_queue
                set retry_count = retry_count + 1,
                    scheduled_at = now() + interval '1 minute'  -- delay retry by 1 minute
                where job_id = job.job_id;
            else
                update job_queue
                set status = 'failed'
                where job_id = job.job_id;
            end if;
        end;
    end loop;
end;
$$ language plpgsql;
```

----------------------------------------

TITLE: Acknowledging Broadcast Messages with Supabase Realtime in Kotlin
DESCRIPTION: This snippet demonstrates how to configure a Supabase Realtime channel in Kotlin to acknowledge broadcast messages back to the sender. Setting `broadcast.acknowledgeBroadcasts` to `true` ensures the sender receives confirmation. It includes channel creation, blocking subscription until joined, and broadcasting a message.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/broadcast.mdx#_snippet_26

LANGUAGE: kotlin
CODE:
```
val myChannel = supabase.channel("room-2") {
    broadcast {
        acknowledgeBroadcasts = true
    }
}

myChannel.subscribe(blockUntilSubscribed = true) //You can also use the myChannel.status flow instead, but this parameter will block the coroutine until the status is joined.

myChannel.broadcast(event = "acknowledge", buildJsonObject {  })
```

----------------------------------------

TITLE: Supabase Edge Function to Generate Embeddings (Webhook)
DESCRIPTION: This TypeScript Edge Function serves as a database webhook. It's triggered when a new row is inserted or updated in the `embeddings` table. It uses the `gte-small` model from `Supabase.ai.Session` to generate a text embedding for the `content` and then updates the `embedding` column in the database.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/examples/semantic-search.mdx#_snippet_1

LANGUAGE: typescript
CODE:
```
const model = new Supabase.ai.Session('gte-small')

Deno.serve(async (req) => {
  const payload: WebhookPayload = await req.json()
  const { content, id } = payload.record

  // Generate embedding.
  const embedding = await model.run(content, {
    mean_pool: true,
    normalize: true,
  })

  // Store in database.
  const { error } = await supabase
    .from('embeddings')
    .update({ embedding: JSON.stringify(embedding) })
    .eq('id', id)
  if (error) console.warn(error.message)

  return new Response('ok')
})
```

----------------------------------------

TITLE: Advanced Logging Techniques in PostgreSQL PL/pgSQL
DESCRIPTION: Demonstrates various logging methods within a PL/pgSQL function `advanced_example`. This includes logging formatted variables, results from SELECT queries, entire rows as JSON, and values returned from INSERT statements. It also shows how to log the start of a function call and includes basic exception handling.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/functions.mdx#_snippet_17

LANGUAGE: sql
CODE:
```
create or replace function advanced_example(num int default 10)
returns text
language plpgsql
as $$
declare
    var1 int := 20;
    var2 text;
begin
    -- Logging start of function
    raise log 'logging start of function call: (%)', (select now());

    -- Logging a variable from a SELECT query
    select
      col_1 into var1
    from some_table
    limit 1;
    raise log 'logging a variable (%)', var1;

    -- It is also possible to avoid using variables, by returning the values of your query to the log
    raise log 'logging a query with a single return value(%)', (select col_1 from some_table limit 1);

    -- If necessary, you can even log an entire row as JSON
    raise log 'logging an entire row as JSON (%)', (select to_jsonb(some_table.*) from some_table limit 1);

    -- When using INSERT or UPDATE, the new value(s) can be returned
    -- into a variable.
    -- When using DELETE, the deleted value(s) can be returned.
    -- All three operations use "RETURNING value(s) INTO variable(s)" syntax
    insert into some_table (col_2)
    values ('new val')
    returning col_2 into var2;

    raise log 'logging a value from an INSERT (%)', var2;

    return var1 || ',' || var2;
exception
    -- Handle exceptions here if needed
    when others then
        raise exception 'An error occurred in function <advanced_example>: %', sqlerrm;
end;
$$;

select advanced_example();
```

----------------------------------------

TITLE: Unlink a User Identity from Supabase
DESCRIPTION: This multi-language code snippet demonstrates the process of unlinking a specific identity (e.g., Google) from a user's Supabase account. It involves first retrieving all linked identities, identifying the target identity, and then calling the appropriate `unlinkIdentity` method. A user must be logged in and have at least two linked identities to successfully perform this operation.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-identity-linking.mdx#_snippet_1

LANGUAGE: JavaScript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('<your-supabase-url>', '<your-supabase-anon-key>')

// ---cut---
// retrieve all identities linked to a user
const { data: identities, error: identitiesError } = await supabase.auth.getUserIdentities()

if (!identitiesError) {
  // find the google identity linked to the user
  const googleIdentity = identities.identities.find((identity) => identity.provider === 'google')

  if (googleIdentity) {
    // unlink the google identity from the user
    const { data, error } = await supabase.auth.unlinkIdentity(googleIdentity)
  }
}
```

LANGUAGE: Dart
CODE:
```
// retrieve all identities linked to a user
final List<UserIdentity> identities = await supabase.auth.getUserIdentities();

// find the google identity linked to the user
final UserIdentity googleIdentity =
    identities.singleWhere((identity) => identity.provider == 'google');

// unlink the google identity from the user
await supabase.auth.unlinkIdentity(googleIdentity);
```

LANGUAGE: Swift
CODE:
```
// retrieve all identities linked to a user
let identities = try await supabase.auth.userIdentities()

// find the google identity linked to the user
let googleIdentity = identities.first { $0.provider == .google }

// unlink the google identity from the user
try await supabase.auth.unlinkIdentity(googleIdentity)
```

LANGUAGE: Kotlin
CODE:
```
//get all identities linked to a user
val identities = supabase.auth.currentIdentitiesOrNull() ?: emptyList()

//find the google identity linked to the user
val googleIdentity = identities.first { it.provider == "google" }

//unlink the google identity from the user
supabase.auth.unlinkIdentity(googleIdentity.identityId!!)
```

LANGUAGE: Python
CODE:
```
# retrieve all identities linked to a user
response = supabase.auth.get_user_identities()

# find the google identity linked to the user
google_identity = next((identity for identity in response.identities if identity.provider == 'google'), None)

# unlink the google identity from the user
if google_identity:
    response = supabase.auth.unlink_identity(google_identity.identity_id)
```

----------------------------------------

TITLE: Sign Out User from Supabase Session
DESCRIPTION: Illustrates how to sign out a user from their current Supabase session, effectively removing their authentication tokens from the browser or local storage. This action typically invalidates the user's current session.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/social-login/auth-github.mdx#_snippet_2

LANGUAGE: JavaScript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project-id.supabase.co', 'your-anon-key')

async function signOut() {
  const { error } = await supabase.auth.signOut()
}
```

LANGUAGE: Dart
CODE:
```
Future<void> signOut() async {
  await supabase.auth.signOut();
}
```

LANGUAGE: Kotlin
CODE:
```
suspend fun signOut() {
	supabase.auth.signOut()
}
```

----------------------------------------

TITLE: Password Verification Hook Input JSON Example
DESCRIPTION: Illustrates the JSON structure of the input payload received by the password verification hook, containing the `user_id` and a `valid` boolean indicating the password attempt's success.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/password-verification-hook.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "user_id": "3919cb6e-4215-4478-a960-6d3454326cec",
  "valid": true
}
```

----------------------------------------

TITLE: Create SQL View for ProjectOwner
DESCRIPTION: Defines a SQL view named 'ProjectOwner' by joining 'account' and 'role' tables, filtering for accounts with the 'project_owner' role. This view simplifies access to project owner information.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-04-21-whats-new-in-pg-graphql-v1-2.mdx#_snippet_0

LANGUAGE: SQL
CODE:
```
create view "ProjectOwner" as
  select
    acc.id,
    acc.name
  from
    account as acc
    join role as r on r.id = acc.role_id
  where acc.role = 'project_owner';
```

----------------------------------------

TITLE: Configure Per-Role Query Cost Limits
DESCRIPTION: These SQL commands illustrate how to apply different query cost limits based on user roles using pg_plan_filter_module. Anonymous users are restricted to cheaper queries, while authenticated users are allowed to run more expensive ones, providing granular control over resource usage and security.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-02-29-postgrest-aggregate-functions.mdx#_snippet_6

LANGUAGE: SQL
CODE:
```
-- anonymous users can only run cheap queries
ALTER
  USER anon
SET
  plan_filter.statement_cost_limit = 10000;

-- authenticated users can run more expensive queries
ALTER
  USER authenticated
SET
  plan_filter.statement_cost_limit = 1e6;
```

----------------------------------------

TITLE: Install Mistral Model with Ollama
DESCRIPTION: Installs the Mistral AI model using the Ollama command-line tool, making it available for local inference. This is a prerequisite for running AI models with Ollama.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/ai-models.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
ollama pull mistral
```

----------------------------------------

TITLE: Enable PostGIS Extension via SQL in Supabase
DESCRIPTION: This SQL snippet demonstrates how to enable the PostGIS extension directly from the Supabase SQL Editor. Enabling PostGIS provides access to advanced geospatial data types and functions necessary for handling geographic information efficiently within your PostgreSQL database.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-03-01-geo-queries-with-postgis-in-ionic-angular.mdx#_snippet_0

LANGUAGE: SQL
CODE:
```
-- enable the PostGIS extension
create extension postgis with schema extensions;
```

----------------------------------------

TITLE: Supabase Support for OrioleDB Development
DESCRIPTION: Supabase continues to support the development of OrioleDB, which focuses on building scalable storage mechanisms for PostgreSQL using table access methods. The latest OrioleDB Alpha12 release is compatible with Postgres 15 and introduces significant improvements, including parallel sequential scan for index-organized tables.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-04-14-launch-week-7-community-highlights.mdx#_snippet_14

LANGUAGE: APIDOC
CODE:
```
OrioleDB Development Support:
  - OrioleDB: https://github.com/orioledb/orioledb
  - Current Version: Alpha12
  - Compatibility: Postgres 15
  - Key Improvements:
    - Parallel sequential scan of OrioleDB relations (analogue of heap parallel scan)
    - Speeds up select queries involving sequential scans on multi-CPU systems
    - Foundation for building Orioledb indexes using parallel workers
  - Release Notes: https://github.com/orioledb/orioledb/releases/tag/alpha12
```

----------------------------------------

TITLE: Supabase signInWithSSO with redirectTo for Multi-Subdomain SSO
DESCRIPTION: This TypeScript example demonstrates how to use `supabase.auth.signInWithSSO` with the `redirectTo` option. It enables cross-origin authentication by directing the user to a specific URL after a SAML response, facilitating multi-subdomain Single Sign-On.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/enterprise-sso/auth-sso-saml.mdx#_snippet_16

LANGUAGE: TypeScript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project.supabase.co', 'your-anon-key')

// ---cut---
const { data, error } = await supabase.auth.signInWithSSO({
  domain: 'company.com',
  options: {
    redirectTo: `https://app.company.com/callback`,
  },
})
```

----------------------------------------

TITLE: Enable and Disable plpgsql_check Extension
DESCRIPTION: SQL commands to enable and disable the plpgsql_check extension in PostgreSQL. Enabling the extension allows access to its linting capabilities, while disabling removes it.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/plpgsql_check.mdx#_snippet_0

LANGUAGE: sql
CODE:
```
-- Enable the "plpgsql_check" extension
create extension plpgsql_check;

-- Disable the "plpgsql_check" extension
drop extension if exists plpgsql_check;
```

----------------------------------------

TITLE: Animating Staggered Elements with Framer Motion in React
DESCRIPTION: This snippet shows how to apply a staggered animation effect to a list of items using the Framer Motion library in React. Each `motion.div` component is configured with `initial`, `animate`, and `transition` properties, including a `delay` calculated to create a domino-like appearance based on the item's index and current pagination offset.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-04-04-infinite-scroll-with-nextjs-framer-motion.mdx#_snippet_5

LANGUAGE: jsx
CODE:
```
import { motion } from 'framer-motion'

// ...

{
  loadedTickets.map((ticket, index) => {
    // each ticket will be delayed based on it's index
    // but we need to subtract the delay from all the previously loaded tickets
    const recalculatedDelay = i >= PAGE_COUNT * 2 ? (i - PAGE_COUNT * (offset - 1)) / 15 : i / 15

    return (
      <motion.div
        key={ticket.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.25, 0, 1],
          delay: recalculatedDelay,
        }}
      >
        {/* Actual ticket component */}
      </motion.div>
    )
  })
}
```

----------------------------------------

TITLE: Adding Admin Role to JWT Claims (SQL)
DESCRIPTION: This SQL function implements a custom access token hook that checks if a user is an administrator based on an `is_admin` flag in a `profiles` table. If the user is an admin, it adds an `admin: true` claim to their `app_metadata` within the JWT, allowing for restricted actions. It also includes DDL for the `profiles` table and grants/revokes for permissions.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/custom-access-token-hook.mdx#_snippet_3

LANGUAGE: SQL
CODE:
```
create table profiles (
  user_id uuid not null primary key references auth.users (id),
  is_admin boolean not null default false
);
```

LANGUAGE: SQL
CODE:
```
create or replace function public.custom_access_token_hook(event jsonb)
returns jsonb
language plpgsql
as $$
  declare
    claims jsonb;
    is_admin boolean;
  begin
    -- Check if the user is marked as admin in the profiles table
    select is_admin into is_admin from profiles where user_id = (event->>'user_id')::uuid;

    -- Proceed only if the user is an admin
    if is_admin then
      claims := event->'claims';

      -- Check if 'app_metadata' exists in claims
      if jsonb_typeof(claims->'app_metadata') is null then
        -- If 'app_metadata' does not exist, create an empty object
        claims := jsonb_set(claims, '{app_metadata}', '{}');
      end if;

      -- Set a claim of 'admin'
      claims := jsonb_set(claims, '{app_metadata, admin}', 'true');

      -- Update the 'claims' object in the original event
      event := jsonb_set(event, '{claims}', claims);
    end if;

    -- Return the modified or original event
    return event;
  end;
$$;
```

LANGUAGE: SQL
CODE:
```
grant all
  on table public.profiles
  to supabase_auth_admin;

revoke all
  on table public.profiles
  from authenticated, anon, public;
```

----------------------------------------

TITLE: Initialize S3 Client with Access Keys (JavaScript AWS SDK)
DESCRIPTION: Demonstrates how to configure the AWS S3Client using generated S3 access keys. These keys provide full access to S3 operations and are intended for server-side use only. Replace placeholders with your project's region, reference, access key ID, and secret access key.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/s3/authentication.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
import { S3Client } from '@aws-sdk/client-s3';

const client = new S3Client({
  forcePathStyle: true,
  region: 'project_region',
  endpoint: 'https://project_ref.supabase.co/storage/v1/s3',
  credentials: {
    accessKeyId: 'your_access_key_id',
    secretAccessKey: 'your_secret_access_key',
  }
})
```

----------------------------------------

TITLE: Query Data from Supabase in Nuxt App
DESCRIPTION: Demonstrates how to query data from a Supabase database within a Nuxt `app.vue` component. It initializes the Supabase client with environment variables, fetches data from the 'instruments' table, and displays it in a list.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/quickstarts/nuxtjs.mdx#_snippet_3

LANGUAGE: vue
CODE:
```
<script setup>
import { createClient } from '@supabase/supabase-js'
const config = useRuntimeConfig()
const supabase = createClient(config.public.supabaseUrl, config.public.supabaseAnonKey)
const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}

onMounted(() => {
  getInstruments()
})
</script>

<template>
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">{{ instrument.name }}</li>
  </ul>
</template>
```

----------------------------------------

TITLE: Supabase Direct PostgreSQL Connection String
DESCRIPTION: This example shows a direct connection string to a Supabase PostgreSQL database. It uses the standard PostgreSQL port 5432 and connects directly to the database instance, bypassing any pooler. This type of connection is stateful and enduring, suitable for long-standing applications.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/supavisor-faq-YyP5tI.mdx#_snippet_0

LANGUAGE: sh
CODE:
```
postgresql://postgres:[YOUR-PASSWORD]@db.ajrbwkcuthywfihaarmflo.supabase.co:5432/postgres
```

----------------------------------------

TITLE: Validating JSON Data with pg_jsonschema in SQL
DESCRIPTION: This SQL snippet demonstrates how to validate `json` or `jsonb` data types against a JSON Schema using the `pg_jsonschema` extension. It shows creating a `customers` table with a `metadata` JSON column and then adding a `CHECK` constraint that uses `json_matches_schema` to ensure the `metadata` conforms to a specified schema, in this case, requiring an array of strings for the 'tags' property.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/json.mdx#_snippet_8

LANGUAGE: sql
CODE:
```
create table customers (
  id serial primary key,
  metadata json
);

alter table customers
add constraint check_metadata check (
  json_matches_schema(
    '{
        "type": "object",
        "properties": {
            "tags": {
                "type": "array",
                "items": {
                    "type": "string",
                    "maxLength": 16
                }
            }
        }
    }',
    metadata
  )
);
```

----------------------------------------

TITLE: Update Driver Marker and Adjust Map View in Flutter
DESCRIPTION: This Dart code snippet provides functions for dynamically updating a driver's position and orientation on a map, adjusting the map's view to encompass both the driver and destination, and calculating the driver's heading based on location changes. It ensures the map accurately reflects the driver's real-time movement.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-09-05-flutter-uber-clone.mdx#_snippet_14

LANGUAGE: Dart
CODE:
```
  void _updateDriverMarker(Driver driver) {
    setState(() {
      _markers.removeWhere((marker) => marker.markerId.value == 'driver');

      double rotation = 0;
      if (_previousDriverLocation != null) {
        rotation =
            _calculateRotation(_previousDriverLocation!, driver.location);
      }

      _markers.add(Marker(
        markerId: const MarkerId('driver'),
        position: driver.location,
        icon: _carIcon!,
        anchor: const Offset(0.5, 0.5),
        rotation: rotation,
      ));

      _previousDriverLocation = driver.location;
    });
  }

  void _adjustMapView({required LatLng target}) {
    if (_driver != null && _selectedDestination != null) {
      LatLngBounds bounds = LatLngBounds(
        southwest: LatLng(
          min(_driver!.location.latitude, target.latitude),
          min(_driver!.location.longitude, target.longitude),
        ),
        northeast: LatLng(
          max(_driver!.location.latitude, target.latitude),
          max(_driver!.location.longitude, target.longitude),
        ),
      );
      _mapController?.animateCamera(CameraUpdate.newLatLngBounds(bounds, 100));
    }
  }

  double _calculateRotation(LatLng start, LatLng end) {
    double latDiff = end.latitude - start.latitude;
    double lngDiff = end.longitude - start.longitude;
    double angle = atan2(lngDiff, latDiff);
    return angle * 180 / pi;
  }
```

----------------------------------------

TITLE: Check PostgreSQL Auto-Increment Sequence Synchronization
DESCRIPTION: Use these SQL commands to determine if your table's auto-increment sequence is out of sync. The first query retrieves the maximum existing value in the sequenced column, and the second retrieves the next value the sequence would generate. If these values differ significantly, the sequence needs resynchronization.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/inserting-into-sequenceserial-table-causes-duplicate-key-violates-unique-constraint-error-pi6DnC.mdx#_snippet_0

LANGUAGE: SQL
CODE:
```
SELECT MAX(<sequenced_column>) FROM <table_name>;

SELECT nextval(pg_get_serial_sequence('<public.table_name>', '<sequenced_column_name>'));
```

----------------------------------------

TITLE: Dart: Initialize CanvasPage state and Supabase Realtime
DESCRIPTION: This snippet shows the `initState` method and the `_initialize` asynchronous function for `_CanvasPageState`. It generates a unique user ID, sets up a Supabase Realtime channel to listen for broadcast events (like cursor and object updates from other clients), and prepares to load initial canvas state from the database.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-26-flutter-figma-clone.mdx#_snippet_17

LANGUAGE: dart
CODE:
```
class _CanvasPageState extends State<CanvasPage> {
	...

  @override
  void initState() {
    super.initState();
    _initialize();
  }

  Future<void> _initialize() async {
    // Generate a random UUID for the user.
    // We could replace this with Supabase auth user ID if we want to make it
    // more like Figma.
    _myId = const Uuid().v4();

    // Start listening to broadcast messages to display other users' cursors and objects.
    _canvasChanel = supabase
        .channel(Constants.channelName)
        .onBroadcast(
            event: Constants.broadcastEventName,
```

----------------------------------------

TITLE: Example of an Encoded JWT String
DESCRIPTION: Shows a complete, encoded JSON Web Token string, composed of three base64Url-encoded parts: header, payload, and signature.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/jwts.mdx#_snippet_3

LANGUAGE: Text
CODE:
```
eyJhbGciOiJIUzI1NiJ9
  .eyJzdWIiOiIwMDAxIiwibmFtZSI6IlNhbSBWaW1lcyIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE4MjM5MDIyfQ
  .zMcHjKlkGhuVsiPIkyAkB2rjXzyzJsMMgpvEGvGtjvA
```

----------------------------------------

TITLE: Optimize Postgres Seq Scan with High Filtered Rows
DESCRIPTION: Examine sequential scans that filter out a large number of rows. If a scan processes many rows but only a few meet the filter condition, it indicates an opportunity to add an index on the filtered column to improve performance.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/understanding-postgresql-explain-output-Un9dqX.mdx#_snippet_7

LANGUAGE: Postgres Explain Output
CODE:
```
Seq Scan on products  (cost=0.00..100.00 rows=300 width=50) (actual time=50.000..100.000 rows=3 loops=1)
   Filter: (price > 1000)
   Rows Removed by Filter: 2997
```

----------------------------------------

TITLE: Reset Supabase Database to Apply Seed Data (CLI)
DESCRIPTION: Reset your Supabase database using the CLI to reapply migrations and populate it with the newly added seed data from `supabase/seed.sql`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/deployment/database-migrations.mdx#_snippet_7

LANGUAGE: bash
CODE:
```
supabase db reset
```

----------------------------------------

TITLE: Detecting Viewport Intersection for Infinite Scroll in React
DESCRIPTION: This React snippet demonstrates how to use `useRef` and `getBoundingClientRect` to check if a container element's bottom edge has entered the viewport. It updates a state variable (`isInView`) which can then trigger further actions like loading more data. It also includes a `handleScroll` function to manage the check.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-04-04-infinite-scroll-with-nextjs-framer-motion.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
import { useRef, useState } from 'react'

// ...

const containerRef = useRef(null)
const [offset, setOffset] = useState(1)
const [isInView, setIsInView] = useState(false)

const handleScroll = (container) => {
  if (containerRef.current && typeof window !== 'undefined') {
    const container = containerRef.current
    const { bottom } = container.getBoundingClientRect()
    const { innerHeight } = window
    setIsInView((prev) => bottom <= innerHeight)
  }
}

useEffect(() => {
  if (isInView) {
    loadMoreUsers(offset)
  }
}, [isInView])

return <div ref={containerRef}>{/* List of loaded tickets */}</div>
```

----------------------------------------

TITLE: Configure Sentry for Next.js Browser Environment with Supabase
DESCRIPTION: This snippet demonstrates how to initialize Sentry in a Next.js browser environment, integrating it with Supabase. It uses `supabaseIntegration` to capture tracing, breadcrumbs, and errors from Supabase client operations, and `Sentry.browserTracingIntegration` to manage request spans, excluding Supabase REST API calls.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/telemetry/sentry-monitoring.mdx#_snippet_4

LANGUAGE: ts
CODE:
```
import * as Sentry from '@sentry/nextjs'
import { SupabaseClient } from '@supabase/supabase-js'
import { supabaseIntegration } from '@supabase/sentry-js-integration'

Sentry.init({
  dsn: SENTRY_DSN,
  integrations: [
    supabaseIntegration(SupabaseClient, Sentry, {
      tracing: true,
      breadcrumbs: true,
      errors: true,
    }),
    Sentry.browserTracingIntegration({
      shouldCreateSpanForRequest: (url) => {
        return !url.startsWith(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest`)
      },
    }),
  ],

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: true,
})
```

----------------------------------------

TITLE: SQL: Example Select Query on Document Sections
DESCRIPTION: Demonstrates a simple `select` query on `document_sections`. Due to the active RLS policy, this query will implicitly filter results, returning only rows owned by the authenticated user.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/rag-with-permissions.mdx#_snippet_2

LANGUAGE: sql
CODE:
```
select * from document_sections;
```

----------------------------------------

TITLE: Create SQL Table for Job Queue
DESCRIPTION: Creates the `job_queue` table to store messaging-related jobs. This table includes columns for `job_id`, `job_data` (JSONB), `created_at`, `status`, `priority`, `retry_count`, `max_retries`, and `scheduled_at` to manage the lifecycle of queued messages, ensuring messages are processed in intervals.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/send-sms-hook.mdx#_snippet_4

LANGUAGE: SQL
CODE:
```
create table job_queue (
  job_id uuid primary key default gen_random_uuid(),
  job_data jsonb not null,
  created_at timestamp default now(),
  status text default 'pending',
  priority int default 0,
  retry_count int default 0,
  max_retries int default 2,
  scheduled_at timestamp default now()
);
```

----------------------------------------

TITLE: PostgreSQL Function to Get Primary Key Columns for a Table
DESCRIPTION: This SQL function, `audit.primary_key_columns`, takes a table's OID (`entity_oid`) as input and returns an array of text representing the names of its primary key columns. It queries `pg_index` and `pg_attribute` to identify the primary key attributes, which is essential for constructing a unique record identifier.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-03-08-postgres-audit.mdx#_snippet_7

LANGUAGE: SQL
CODE:
```
create or replace function audit.primary_key_columns(entity_oid oid)
    returns text[]
    stable
    security definer
    language sql
as $$
    -- Looks up the names of a table's primary key columns
    select
        coalesce(
            array_agg(pa.attname::text order by pa.attnum),
            array[]::text[]
        ) column_names
    from
        pg_index pi
        join pg_attribute pa
            on pi.indrelid = pa.attrelid
            and pa.attnum = any(pi.indkey)
    where
        indrelid = $1
        and indisprimary
$$;
```

----------------------------------------

TITLE: Design Groups Page UI in Ionic/Angular
DESCRIPTION: This HTML template defines the user interface for the Groups page. It includes an Ionic header with a title and conditional buttons for signing out (if authenticated) or signing in (if unauthenticated). The main content displays a list of chat groups, iterating through the `groups` array and linking each item to its respective group page. A floating action button (FAB) is provided for creating new groups, visible only to authenticated users, reinforcing UI-level security.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-11-08-authentication-in-ionic-angular.mdx#_snippet_21

LANGUAGE: html
CODE:
```
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>Supa Chat Groups</ion-title>
    <ion-buttons slot="end">
      <ion-button (click)="signOut()" *ngIf="user | async">
        <ion-icon name="log-out-outline" slot="icon-only"></ion-icon>
      </ion-button>

      <ion-button (click)="openLogin()" *ngIf="(user | async) === false"> Sign in </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
    <ion-item *ngFor="let group of groups" [routerLink]="[group.id]" button>
      <ion-label
        >{{group.title }}
        <p>By {{group.users.email}}</p>
      </ion-label>
    </ion-item>
  </ion-list>
  <ion-fab vertical="bottom" horizontal="end" slot="fixed" *ngIf="user | async">
    <ion-fab-button (click)="createGroup()">
      <ion-icon name="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>
```

----------------------------------------

TITLE: Initialize Supabase Client in SolidJS
DESCRIPTION: Create a helper file to initialize the Supabase client using the environment variables. This client instance will be used throughout your SolidJS application to interact with Supabase services.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-solidjs.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

----------------------------------------

TITLE: Normalize Fauna Raw Data into Relational Tables
DESCRIPTION: SQL examples demonstrating the process of normalizing data from the `fauna_users_raw` JSONB table into structured relational tables (`users` and `orders`). It showcases using Postgres JSON functions like `->` and `->>` for extracting fields and `LATERAL jsonb_array_elements` for flattening nested arrays into separate rows.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2025-03-21-migrating-from-fauna-to-supabase.mdx#_snippet_5

LANGUAGE: sql
CODE:
```
-- Example normalization for users
INSERT INTO users (name, email)
SELECT
  data->'data'->'name' AS name,
  data->'data'->'email' AS email
FROM fauna_users_raw;

-- Example normalization of nested orders
INSERT INTO orders (user_id, product, quantity)
SELECT
  u.id,
  order_data->>'product',
  (order_data->>'quantity')::INTEGER
FROM fauna_users_raw f
JOIN users u ON (f.data->'data'->>'email') = u.email,
LATERAL jsonb_array_elements(f.data->'data'->'orders') AS order_data;
```

----------------------------------------

TITLE: Google Workspace SAML Service Provider Details for Supabase SSO
DESCRIPTION: Details required to configure the Service Provider settings in Google Workspace for Supabase Single Sign-On (SSO) using SAML. These values define how Google Workspace communicates with Supabase as the Service Provider.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/sso/gsuite.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
| Detail         | Value                                               |
| -------------- | --------------------------------------------------- |
| ACS URL        | `https://alt.supabase.io/auth/v1/sso/saml/acs`      |
| Entity ID      | `https://alt.supabase.io/auth/v1/sso/saml/metadata` |
| Start URL      | `https://supabase.com/dashboard`                    |
| Name ID format | PERSISTENT                                          |
| Name ID        | _Basic Information > Primary email_                 |
```

----------------------------------------

TITLE: Configure AWS Credentials for Supabase Edge Function
DESCRIPTION: This snippet outlines the environment variables required for configuring AWS access keys, secret keys, session tokens, and default region within a Supabase Edge Function's .env file. These credentials enable the function to authenticate and interact with AWS services like Amazon Bedrock.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/examples/amazon-bedrock-image-generator.mdx#_snippet_0

LANGUAGE: txt
CODE:
```
AWS_DEFAULT_REGION="<your_region>"
AWS_ACCESS_KEY_ID="<replace_your_own_credentials>"
AWS_SECRET_ACCESS_KEY="<replace_your_own_credentials>"
AWS_SESSION_TOKEN="<replace_your_own_credentials>"

# Mocked config files
AWS_SHARED_CREDENTIALS_FILE="./aws/credentials"
AWS_CONFIG_FILE="./aws/config"
```

----------------------------------------

TITLE: Configure Android Deep Link Intent Filter in Manifest
DESCRIPTION: This XML snippet shows how to add an `intent-filter` to the Android manifest file. This filter defines the deep link scheme and host, allowing the Android OS to open the application when a URL matching the specified format is clicked, typically for magic link authentication.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/native-mobile-deep-linking.mdx#_snippet_10

LANGUAGE: xml
CODE:
```
<manifest ...>
  <!-- ... other tags -->
  <application ...>
    <activity ...>
      <!-- ... other tags -->

      <!-- Deep Links -->
      <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <!-- Accepts URIs that begin with YOUR_SCHEME://YOUR_HOST -->
        <data
          android:scheme="YOUR_SCHEME"
          android:host="YOUR_HOSTNAME" />
      </intent-filter>
    </activity>
  </application>
</manifest>
```

----------------------------------------

TITLE: Supabase User Invitation Logic for Boards in TypeScript
DESCRIPTION: This asynchronous TypeScript function `addUserToBoard` attempts to find a user's ID based on their email in the `USERS_TABLE`. If the user exists, it inserts a new entry into the `USER_BOARDS_TABLE` to associate the user with a specific board. It returns the result of the insertion or `null` if the user is not found.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-08-24-building-a-realtime-trello-board-with-supabase-and-angular.mdx#_snippet_25

LANGUAGE: TypeScript
CODE:
```
// Invite others
  async addUserToBoard(boardId: string, email: string) {
    const user = await this.supabase
      .from(USERS_TABLE)
      .select('id')
      .match({ email })
      .single();

    if (user.data?.id) {
      const userId = user.data.id;
      const userBoard = await this.supabase.from(USER_BOARDS_TABLE).insert({
        user_id: userId,
        board_id: boardId
      });
      return userBoard;
    } else {
      return null;
    }
  }
```

----------------------------------------

TITLE: Define Supabase Hook Secrets Variable
DESCRIPTION: Illustrates how to define a variable that references environment variables for Supabase hook secrets, typically used within function code.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks.mdx#_snippet_10

LANGUAGE: text
CODE:
```
secrets = "env(SEND_SMS_HOOK_SECRETS)"
```

----------------------------------------

TITLE: Automating Supabase Type Updates with GitHub Actions Workflow (YAML)
DESCRIPTION: This YAML snippet defines a GitHub Actions workflow that runs daily to automatically update Supabase database types. It checks out the repository, sets up Node.js, runs the `update-types` script defined in `package.json`, checks for file changes, commits any new type definitions, and pushes them back to the repository. It requires `SUPABASE_ACCESS_TOKEN` and `PROJECT_REF` as environment variables.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/rest/generating-types.mdx#_snippet_17

LANGUAGE: yaml
CODE:
```
name: Update database types

on:
  schedule:
    # sets the action to run daily. You can modify this to run the action more or less frequently
    - cron: '0 0 * * *'

jobs:
  update:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    env:
      SUPABASE_ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
      PROJECT_REF: <your-project-id>
    steps:
      - uses: actions/checkout@v4
        with:
          persist-credentials: false
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm run update-types
      - name: check for file changes
        id: git_status
        run: |
          echo "status=$(git status -s)" >> $GITHUB_OUTPUT
      - name: Commit files
        if: ${{contains(steps.git_status.outputs.status, ' ')}}
        run: |
          git add database.types.ts
          git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git config --local user.name "github-actions[bot]"
          git commit -m "Update database types" -a
      - name: Push changes
        if: ${{contains(steps.git_status.outputs.status, ' ')}}
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          branch: ${{ github.ref }}
```

----------------------------------------

TITLE: Create documents table for hybrid search in Postgres
DESCRIPTION: Defines the `documents` table schema for storing searchable content. It includes columns for `id`, `content` (text), `fts` (generated `tsvector` for full-text search), and `embedding` (vector for semantic search). The `embedding` column is set to 512 dimensions, which should match the output of your embedding model.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/hybrid-search.mdx#_snippet_0

LANGUAGE: SQL
CODE:
```
create table documents (
  id bigint primary key generated always as identity,
  content text,
  fts tsvector generated always as (to_tsvector('english', content)) stored,
  embedding vector(512)
);
```

----------------------------------------

TITLE: Generate TypeScript Types for Supabase Schema using CLI
DESCRIPTION: This bash command sequence uses the Supabase CLI to log in, initialize, link to a project, and then generate TypeScript types from the 'public' schema, outputting them to 'utils/database.types.ts'. These types enable strong typing for data returned from Supabase queries.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-12-react-query-nextjs-app-router-cache-helpers.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
supabase login
supabase init
supabase link
supabase gen types typescript --linked --schema=public > utils/database.types.ts
```

----------------------------------------

TITLE: Supabase Edge Functions SLA
DESCRIPTION: Defines the Service Level Agreement for Supabase Edge Functions, covering its regional SLA scope, lack of dependencies, and specific conditions that constitute downtime or are excluded from SLA coverage, particularly regarding user code and external integrations.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/pages/sla.mdx#_snippet_9

LANGUAGE: APIDOC
CODE:
```
Functions:
  SLA Scope: Regional
  Dependencies: None
  Downtime Definition: Any period during which Supabase Edge Functions are unavailable to be executed, created, updated, or deleted by permitted users in a region.
  Exclusions:
    - Outages caused by user code errors, infinite loops, or unsupported packages.
    - Failures due to integration with external dependencies or services.
    - Failures resulting from downstream dependencies explicitly invoked by the user within their function logic (e.g., Postgres queries, HTTP requests to PostgREST, Auth, Storage, or third-party services). These are considered outside the scope of the Functions SLA.
```

----------------------------------------

TITLE: Parse Tree After Closing Leaf Nodes
DESCRIPTION: Shows the conceptual parse tree after the `AConst` and `ResTarget` nodes have been closed and removed from the active tree, returning the parser's focus to its parent, `SelectStmt`, as it prepares for the next token.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-12-08-postgres-language-server-implementing-parser.mdx#_snippet_15

LANGUAGE: markdown
CODE:
```
Remaining Tokens: ["from", "contact"]

Parse Tree:

  SelectStmt (0, [From])
                   \
                     2 (RangeVar, ['contact'])

CST:
SelectStmt
    Select@0..6 "select"
    Whitespace@6..7 " "
    ResTarget@7..10
      AConst@7..10
        Sconst@7..10 "'1'"
```

----------------------------------------

TITLE: SvelteKit Private Route Server Layout Trigger
DESCRIPTION: This empty TypeScript file (`+layout.server.ts`) is crucial for ensuring that all routes within the `private` directory are protected. Its presence forces SvelteKit to treat these routes as dynamic, triggering server-side checks defined in `hooks.server.ts`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/sveltekit.mdx#_snippet_13

LANGUAGE: TypeScript
CODE:
```
/**
 * This file is necessary to ensure protection of all routes in the `private`
 * directory. It makes the routes in this directory _dynamic_ routes, which
 * send a server request, and thus trigger `hooks.server.ts`.
 **/
```

----------------------------------------

TITLE: Schedule Database Function Call with SQL
DESCRIPTION: This SQL command schedules a cron job named 'call-db-function' to run every 5 minutes. It executes a `SELECT` statement to call a pre-defined database function named `hello_world()`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/cron/quickstart.mdx#_snippet_9

LANGUAGE: SQL
CODE:
```
select cron.schedule('call-db-function', '*/5 * * * *', 'SELECT hello_world()');
```

----------------------------------------

TITLE: Filter Supabase Logs by Client IP Address
DESCRIPTION: This SQL query helps monitor successful authentication events by client IP address. It groups logs by `connection_from` and `event_message` to show the count of connections from each IP, useful for identifying connection patterns and ensuring security, especially with static IP connections.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/how-to-interpret-and-explore-the-postgres-logs-OuCIOj.mdx#_snippet_14

LANGUAGE: sql
CODE:
```
-- filter by IP
select
  event_message,
  connection_from as ip,
  count(connection_from) as ip_count
from
  postgres_logs
  cross join unnest(metadata) as metadata
  cross join unnest(parsed) as parsed
where
  regexp_contains(user_name, '<ROLE>')
  and regexp_contains(backend_type, 'client backend') -- only search for connections from outside the database (excludes cron jobs)
  and regexp_contains(event_message, '^connection authenticated') -- only view successful authentication events
group by connection_from, event_message
order by ip_count desc
limit 100;
```

----------------------------------------

TITLE: Database View: michelp-adminpack index_usage Schema
DESCRIPTION: Schema definition for the `index_usage` view within `michelp-adminpack`, providing columns to identify potentially unused indexes for performance optimization. This view includes details on schema, table, index names, sizes, uniqueness, and scan/tuple counts.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-04-14-dbdev.mdx#_snippet_6

LANGUAGE: APIDOC
CODE:
```
Column          | Type
--------------- | ------
schemaname      | name
tablename      | name
num_rows        | bigint
table_size      | text
index_name      | name
index_size      | text
unique          | text
number_of_scans | bigint
tuples_read     | bigint
tuples_fetched  | bigint
```

----------------------------------------

TITLE: Receiving Broadcast Messages with Supabase Realtime - Dart
DESCRIPTION: This Dart example illustrates subscribing to a Supabase Realtime broadcast channel. It creates a channel instance, sets up a `messageReceived` function to print payloads, and then subscribes to 'shout' broadcast events on 'test-channel'.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/broadcast.mdx#_snippet_6

LANGUAGE: dart
CODE:
```
final myChannel = supabase.channel('test-channel');

// Simple function to log any messages we receive
void messageReceived(payload) {
  print(payload);
}

// Subscribe to the Channel
myChannel
    .onBroadcast(
        event: 'shout', // Listen for "shout". Can be "*" to listen to all events
        callback: (payload) => messageReceived(payload)
    )
    .subscribe();
```

----------------------------------------

TITLE: Search Documents using Supabase Vector Store in LangChain (Node.js)
DESCRIPTION: This JavaScript code demonstrates how to initialize `SupabaseVectorStore` with `OpenAIEmbeddings` and perform a similarity search. It connects to Supabase using service role key and URL, then adds sample texts and metadata before querying for similar documents.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/langchain.mdx#_snippet_1

LANGUAGE: js
CODE:
```
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { createClient } from '@supabase/supabase-js'

const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!supabaseKey) throw new Error(`Expected SUPABASE_SERVICE_ROLE_KEY`)

const url = process.env.SUPABASE_URL
if (!url) throw new Error(`Expected env var SUPABASE_URL`)

export const run = async () => {
  const client = createClient(url, supabaseKey)

  const vectorStore = await SupabaseVectorStore.fromTexts(
    ['Hello world', 'Bye bye', "What's this?"],
    [{ id: 2 }, { id: 1 }, { id: 3 }],
    new OpenAIEmbeddings(),
    {
      client,
      tableName: 'documents',
      queryName: 'match_documents',
    }
  )

  const resultOne = await vectorStore.similaritySearch('Hello world', 1)

  console.log(resultOne)
}
```

----------------------------------------

TITLE: Define a Simple Postgres Function for GraphQL
DESCRIPTION: This SQL snippet defines an `immutable` Postgres function named `addNums` that takes two integer arguments, one with a default value, and returns their sum. This function will be automatically reflected in the GraphQL schema.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-12-12-pg-graphql-postgres-functions.mdx#_snippet_0

LANGUAGE: SQL
CODE:
```
create function "addNums"(a int, b int default 1)
returns int
immutable
language sql
as $$
	select a + b;
$$;
```

----------------------------------------

TITLE: Execute AI Model Inference
DESCRIPTION: After instantiating an AI session, this code shows how to perform an inference by calling the `run` method on the model object. It takes an input and optional configuration parameters, returning the model's output.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/ai-models.mdx#_snippet_2

LANGUAGE: ts
CODE:
```
const output = await model.run(input, options)
```

----------------------------------------

TITLE: Initialize Supabase and Flutter Auth UI
DESCRIPTION: Example demonstrating how to initialize Supabase in a Flutter application, which is a prerequisite for using the authentication UI widgets. It uses environment variables for URL and anonymous key.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/flutter-auth-ui.mdx#_snippet_1

LANGUAGE: dart
CODE:
```
import 'package:flutter/material.dart';
import 'package:supabase_auth_ui/supabase_auth_ui.dart';

void main() async {
  await Supabase.initialize(
    url: dotenv.get('SUPABASE_URL'),
    anonKey: dotenv.get('SUPABASE_ANON_KEY'),
  );

  runApp(const MyApp());
}
```

----------------------------------------

TITLE: Calling Postgres Function with Supabase TypeScript Client
DESCRIPTION: TypeScript example showing how to call a Postgres Database Function ('calculate_customer_discount') using the Supabase client's '.rpc()' method, leveraging auto-generated types for clean and declarative integration.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2025-05-17-simplify-backend-with-data-api.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
const { data, error } = await supabase.rpc('calculate_customer_discount', {
  customer_id: 'uuid-of-customer',
})
```

----------------------------------------

TITLE: Implementing Realtime Broadcast and Presence with Supabase Flutter
DESCRIPTION: Demonstrates how to utilize Supabase Flutter's first-class support for Realtime Multiplayer features. This includes listening to and sending broadcast events for low-latency data sharing, and managing presence states to track connected client statuses.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-10-21-supabase-flutter-sdk-v1-released.mdx#_snippet_3

LANGUAGE: Dart
CODE:
```
final channel = Supabase.instance.client.channel('my_channel');

// listen to `location` broadcast events
channel.on(
    RealtimeListenTypes.broadcast,
    ChannelFilter(
      event: 'location',
    ), (payload, [ref]) {
	// Do something exciting with the broadcast event
});

// send `location` broadcast events
channel.send(
  type: RealtimeListenTypes.broadcast,
  event: 'location',
  payload: {'lat': 1.3521, 'lng': 103.8198},
);

// listen to presence states
channel.on(RealtimeListenTypes.presence, ChannelFilter(event: 'sync'),
    (payload, [ref]) {
	// Do something exciting with the presence state
});

// subscribe to the above changes
channel.subscribe((status) async {
  if (status == 'SUBSCRIBED') {
    // if subscribed successfully, send presence event
    final status = await channel.track({'user_id': myUserId});
  }
});
```

----------------------------------------

TITLE: Supabase Auth SDK: Verify OTP Reference
DESCRIPTION: References the `auth-verifyotp` method within the Supabase SDK, indicating its relevance to handling One-Time Password (OTP) verification processes.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/error-invalid-totp-code-entered-CukLCj.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
SDK: auth-verifyotp
```

----------------------------------------

TITLE: Set Postgres Role-Level Timeout
DESCRIPTION: Modifies the statement timeout for a specific PostgreSQL role. This allows custom timeout configurations for different user roles like `anon`, `authenticated`, `service_role`, or custom roles.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/timeouts.mdx#_snippet_3

LANGUAGE: sql
CODE:
```
alter role example_role set statement_timeout = '10min'; -- could also use seconds '10s'
```

----------------------------------------

TITLE: Set up Supabase Client for Server-Side in SvelteKit
DESCRIPTION: This snippet demonstrates how to configure the Supabase client for server-side operations in SvelteKit. It shows the setup for both older (0.8.x) and newer (0.9.0) versions, highlighting the shift from `src/lib/db.ts` to `src/hooks.server.ts` and the introduction of `safeGetSession` for JWT validation.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_17

LANGUAGE: javascript
CODE:
```
// src/lib/db.ts
import { createClient } from '@supabase/auth-helpers-sveltekit'
import { env } from '$env/dynamic/public'
// or use the static env

// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabaseClient = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY)
```

LANGUAGE: typescript
CODE:
```
// src/hooks.server.ts
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event,
  })

  /**
   * Unlike `supabase.auth.getSession`, which is unsafe on the server because it
   * doesn't validate the JWT, this function validates the JWT by first calling
   * `getUser` and aborts early if the JWT signature is invalid.
   */
  event.locals.safeGetSession = async () => {
    const {
      data: { user },
      error,
    } = await event.locals.supabase.auth.getUser()
    if (error) return { session: null, user: null }

    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return { session, user }
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range' || name === 'x-supabase-api-version'
    },
  })
}
```

----------------------------------------

TITLE: Supabase Vault Secret Data Structure Example
DESCRIPTION: This example shows the typical fields and their format for a secret entry stored in Supabase Vault. It includes the encrypted `secret`, the `key_id` used for encryption, `associated` data for authentication, a unique `nonce`, and the `created_at` timestamp.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-08-19-supabase-vault.mdx#_snippet_7

LANGUAGE: Data Output
CODE:
```
secret     | YWxuTnWdF55MuRrZ7xneBvaz2uH59U1dJV/7CCZjSn5B5jELOoy/csq8x/s=
key_id     | f9f176eb-7069-4743-9403-582c04354ffc
associated | This is some different associated data.
nonce      | \xd39808b07c9ae52c8f02c33a7f87595c
created_at | 2022-08-18 22:34:07.219941+00
```

----------------------------------------

TITLE: Example Anonymous User JWT Payload
DESCRIPTION: A sample JSON Web Token (JWT) payload for an anonymous user in Supabase, demonstrating the minimal claims including `iss`, `ref`, `role`, `iat`, and `exp`. This token is typically used for public access with Row Level Security (RLS) policies.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/jwt-fields.mdx#_snippet_3

LANGUAGE: JSON
CODE:
```
{
  "iss": "supabase",
  "ref": "abcdefghijklmnopqrst",
  "role": "anon",
  "iat": 1640991600,
  "exp": 1640995200
}
```

----------------------------------------

TITLE: Handle Google Sign-in Callback with Supabase (Nonce Included)
DESCRIPTION: This enhanced TypeScript function for handling Google's sign-in callback includes a `nonce` for added security. The nonce, which should be generated randomly, is passed along with the ID token to Supabase's `signInWithIdToken` method.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/social-login/auth-google.mdx#_snippet_8

LANGUAGE: typescript
CODE:
```
async function handleSignInWithGoogle(response) {
  const { data, error } = await supabase.auth.signInWithIdToken({
    provider: 'google',
    token: response.credential,
    nonce: '<NONCE>',
  })
}
```

----------------------------------------

TITLE: Supabase Configurable Postgres Parameters
DESCRIPTION: A list of 13 new configurable Postgres parameters available through the Supabase CLI, enabling fine-grained control over database replication, connections, resource usage, and WAL management. Each parameter's purpose is briefly described.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-10-30-supabase-clickhouse-partnership.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Postgres Parameters:
  logical_decoding_work_mem: Controls memory used during logical decoding.
  max_connections: Limits total connections to the Postgres server.
  max_locks_per_transaction: Sets the maximum locks allowed in a single transaction.
  max_replication_slots: Defines the number of replication slots for data streaming.
  max_slot_wal_keep_size: Limits disk space for WAL in replication slots.
  max_standby_archive_delay: Sets how long standby servers can wait for archive recovery.
  max_standby_streaming_delay: Controls delay on standby servers for streaming replication.
  max_wal_size: Specifies the maximum size of the Write Ahead Log.
  max_wal_senders: Sets the maximum number of processes sending WAL data.
  max_worker_processes: Defines the number of background worker processes.
  shared_buffers: Determines the amount of memory for shared buffers.
  wal_keep_size: Sets minimum WAL size to keep for standby servers.
  wal_sender_timeout: Specifies the timeout for inactive WAL sender processes.
```

----------------------------------------

TITLE: Upsert Model Data to Brick Repository
DESCRIPTION: This Dart example shows how to upsert (insert or update) a `User` model into the `Repository`. It handles both creation and modification of the model, automatically uploading it to Supabase without manual JSON serialization, including associated models.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-10-08-offline-first-flutter-apps.mdx#_snippet_10

LANGUAGE: dart
CODE:
```
await Repository().upsert<User>(User(name: 'Thomas'));
```

----------------------------------------

TITLE: Reload PostgREST Configuration Cache
DESCRIPTION: Shows the command to notify PostgREST to reload its configuration cache, which is necessary for new role settings or other configuration changes to take effect.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-07-12-postgrest-11-1-release.mdx#_snippet_1

LANGUAGE: sql
CODE:
```
NOTIFY pgrst,
'reload config';
```

----------------------------------------

TITLE: Setup Supabase Client with WorkOS AuthKit in TypeScript
DESCRIPTION: This snippet demonstrates how to initialize the Supabase client library to use WorkOS AuthKit for access token retrieval. It integrates WorkOS's `authkit-js` to provide the `accessToken` to Supabase, ensuring authenticated requests.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/third-party/workos.mdx#_snippet_0

LANGUAGE: typescript
CODE:
```
import { createClient } from '@supabase/supabase-js'
import { createClient as createAuthKitClient } from '@workos-inc/authkit-js'

const authkit = await createAuthKitClient('WORKOS_CLIENT_ID', {
  apiHostname: '<WORKOS_AUTH_DOMAIN>',
})

const supabase = createClient('https://<supabase-project>.supabase.co', 'SUPABASE_ANON_KEY', {
  accessToken: async () => {
    return authkit.getAccessToken()
  },
})
```

----------------------------------------

TITLE: Efficiently Change Column Type on Large PostgreSQL Table
DESCRIPTION: Provides a three-step alternative to directly altering a column's data type on a large PostgreSQL table, which can be slow and disruptive. This method involves adding a new column with the desired type, copying data, and then dropping the old column, minimizing transaction time and disruption.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/slow-execution-of-alter-table-on-large-table-when-changing-column-type-qmZRpZ.mdx#_snippet_0

LANGUAGE: SQL
CODE:
```
ALTER TABLE "table_name" ADD COLUMN "new_column_name" new_data_type;
```

LANGUAGE: SQL
CODE:
```
UPDATE "table_name" SET "old_column_name" = "new_column_name"::new_data_type;
```

LANGUAGE: SQL
CODE:
```
ALTER TABLE "table_name" DROP COLUMN "old_column_name";
```

----------------------------------------

TITLE: Define SQL functions for computed relationships (many-to-one, one-to-many)
DESCRIPTION: Illustrates how to create SQL functions that act as 'computed relationships' for PostgREST. These functions enable embedding between views or other database objects that cannot directly use foreign keys, supporting both many-to-one and one-to-many scenarios.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-08-19-postgrest-v10.mdx#_snippet_9

LANGUAGE: sql
CODE:
```
-- many-to-one relationship on scores -> players
create function player(scores)
returns setof players rows 1 -- rows 1 defines a "one" end
language sql stable
as $$
  select *
	from players
	where id = $1.player_id;
$$;

-- one-to-many relationship on players -> scores
create function scores(players)
returns setof scores -- there's an implicit rows 1000 here, which is assumed to be "many"
language sql stable
as $$
  select *
	from scores
	where player_id = $1.id;
$$;
```

----------------------------------------

TITLE: Pinecone Pod Types and Scaling Options
DESCRIPTION: Details the different pod types available for Pinecone indexes, including their capacity, QPS, accuracy, and pricing. Also explains vertical and horizontal scaling capabilities for fitting more vectors or increasing queries per second (QPS).
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-10-10-pgvector-vs-pinecone.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
Pinecone Pod Types:
  - s1:
      Capacity: 5,000,000 768d (~2,500,000 1536d) vectors
      QPS: Slowest
      Accuracy: 0.98
      Price per unit per month: $80
  - p1:
      Capacity: 1,000,000 768d (~500,000 1536d) vectors
      QPS: Medium
      Accuracy: 0.99
      Price per unit per month: $80
  - p2:
      Capacity: 1,100,000 768d (~550,000 1536d) vectors
      QPS: Fastest
      Accuracy: 0.94
      Price per unit per month: $120

Scaling Options:
  - Vertical Scaling:
      Purpose: Fit more vectors on a single pod
      Options: x1, x2, x4, x8
  - Horizontal Scaling:
      Purpose: Increase the number of pods or create replicas to boost QPS
      Behavior: Works linearly; doubling replicas doubles QPS
```

----------------------------------------

TITLE: Supabase User Object Properties Reference
DESCRIPTION: Describes the various fields available on a Supabase user object, including their data types and a brief explanation of their purpose. This helps developers understand the structure of user data returned by Supabase authentication.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/users.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
User Properties:
  identities: UserIdentity[]
    Description: Contains an object array of identities linked to the user.
  created_at: string
    Description: The timestamp that the user was created.
  updated_at: string
    Description: The timestamp that the user was last updated.
  is_anonymous: boolean
    Description: Is true if the user is an anonymous user.
```

----------------------------------------

TITLE: General Guidelines for Protecting External APIs with Supabase JWT
DESCRIPTION: Recommendations for securing external APIs when using Supabase. This involves using a robust JWT verification library, extracting and comparing the 'aal' claim from the JWT, and querying the `auth/factors` REST endpoint to check for verified MFA factors. It advises against logging users out if AAL can be increased.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-mfa.mdx#_snippet_7

LANGUAGE: APIDOC
CODE:
```
API Protection Guidelines:
  1. Use a good JWT verification and parsing library for your language.
     Purpose: Securely parse JWTs and extract claims.
  2. Retrieve the 'aal' claim from the JWT and compare its value.
     Purpose: Check the Authenticator Assurance Level (AAL) for access control.
     Action: If AAL can be increased, prompt user to continue login.
  3. Use the 'https://<project-ref>.supabase.co/rest/v1/auth/factors' REST endpoint.
     Purpose: Identify if the user has enrolled any MFA factors.
     Constraint: Only 'verified' factors should be acted upon.
```

----------------------------------------

TITLE: Invoke Supabase Edge Function from Client-Side
DESCRIPTION: JavaScript code demonstrating how to invoke the deployed 'cloudflare-turnstile' Supabase Edge Function from a client-side application, passing the Turnstile token in the request body for validation.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/examples/cloudflare-turnstile.mdx#_snippet_3

LANGUAGE: javascript
CODE:
```
const { data, error } = await supabase.functions.invoke('cloudflare-turnstile', {
  body: { token },
})
```

----------------------------------------

TITLE: Compare Truncated vs. API Shortened Embeddings (After Normalization)
DESCRIPTION: Logs both the manually truncated and renormalized embedding and the API-generated shortened embedding. This comparison demonstrates that, after proper normalization, the two embeddings are now identical (apart from minor floating-point differences).
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-02-13-matryoshka-embeddings.mdx#_snippet_8

LANGUAGE: tsx
CODE:
```
console.log(truncatedEmbedding)

// [ -0.03311979, -0.023642497, 0.0048071386, ...]

console.log(shortenedEmbedding)

// [ -0.03311979, -0.023642497, 0.0048071383, ... ]
```

----------------------------------------

TITLE: Initialize Supabase Client for Next.js Environments
DESCRIPTION: These snippets demonstrate how to create Supabase client instances tailored for different Next.js environments: server-side, browser-side (components), and API routes. Each client uses environment variables for configuration, and the API route client includes custom cookie handling for authentication.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/nextjs.mdx#_snippet_13

LANGUAGE: ts
CODE:
```
import { createServerClient } from '@supabase/ssr'

export function createClient() {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return supabase
}
```

LANGUAGE: ts
CODE:
```
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return supabase
}
```

LANGUAGE: ts
CODE:
```
import { createServerClient, serializeCookieHeader } from '@supabase/ssr'
import { type NextApiRequest, type NextApiResponse } from 'next'

export default function createClient(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return Object.keys(req.cookies).map((name) => ({ name, value: req.cookies[name] || '' }))
        },
        setAll(cookiesToSet) {
          res.setHeader(
            'Set-Cookie',
            cookiesToSet.map(({ name, value, options }) =>
              serializeCookieHeader(name, value, options)
            )
          )
        }
      }
    }
  )

  return supabase
}
```

----------------------------------------

TITLE: Enable and Disable pgvector Extension in Supabase Postgres
DESCRIPTION: This SQL snippet shows how to enable the `pgvector` extension in a Supabase Postgres database, which is essential for storing and querying vector data. It also includes the command to disable the extension if it's no longer needed.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/vector-columns.mdx#_snippet_0

LANGUAGE: sql
CODE:
```
-- Example: enable the "vector" extension.
create extension vector
with
  schema extensions;

-- Example: disable the "vector" extension
drop
  extension if exists vector;
```

----------------------------------------

TITLE: Supabase Realtime: Database Broadcast Workload
DESCRIPTION: Describes the test methodology for evaluating Realtime's capacity to send Broadcast messages from the database using the `realtime.broadcast_changes` function.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/benchmarks.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
WebSocket Connection:
  - Establishes and maintains a WebSocket connection
Channel Joins:
  - Joins a distinct channel (100 users per channel) for group communication
Database Interaction:
  - Database has a trigger set to run `realtime.broadcast_changes` on every insert
  - Database triggers 10_000 inserts per second
```

----------------------------------------

TITLE: Implement Password Reset with SupaResetPassword
DESCRIPTION: Illustrates how to use the `SupaResetPassword` widget to create a form for users to reset their passwords. It requires an access token and provides callbacks for success and error.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/flutter-auth-ui.mdx#_snippet_4

LANGUAGE: dart
CODE:
```
SupaResetPassword(
  accessToken: supabase.auth.currentSession?.accessToken,
  onSuccess: (UserResponse response) {},
  onError: (error) {},
)
```

----------------------------------------

TITLE: Configure OpenAI Environment Variables for Llamafile (OpenAI Deno SDK)
DESCRIPTION: Sets OPENAI_BASE_URL and OPENAI_API_KEY environment variables in the Supabase functions .env file. These variables configure the OpenAI Deno SDK to connect to the local Llamafile server.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/ai-models.mdx#_snippet_14

LANGUAGE: bash
CODE:
```
echo "OPENAI_BASE_URL=http://host.docker.internal:8080/v1" >> supabase/functions/.env
echo "OPENAI_BASE_URL=OPENAI_API_KEY=sk-XXXXXXXX" >> supabase/functions/.env
```

----------------------------------------

TITLE: Configure Uppy for Resumable Uploads with Supabase in React
DESCRIPTION: This React hook initializes and configures the Uppy file uploader to work with Supabase Storage's TUS endpoint. It handles user session authentication, sets up retry delays, defines chunk sizes, and attaches necessary metadata like bucket name and object name to files before upload. It returns the configured Uppy instance for use in a React component.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/uploads/resumable-uploads.mdx#_snippet_2

LANGUAGE: typescript
CODE:
```
export const useUppyWithSupabase = ({ bucketName }: { bucketName: string }) => {
    // Initialize Uppy instance only once
    const [uppy] = useState(() => new Uppy());
    // Initialize Supabase client with project URL and anon key
    const supabase = createClient(projectURL, anonKey);

    useEffect(() => {
        const initializeUppy = async () => {
        // Retrieve the current user's session for authentication
        const {
            data: { session },
        } = await supabase.auth.getSession();

        uppy.use(Tus, {
                endpoint: `${projectURL}/storage/v1/upload/resumable`, // Supabase TUS endpoint
                retryDelays: [0, 3000, 5000, 10000, 20000], // Retry delays for resumable uploads
                headers: {
                    authorization: `Bearer ${session?.access_token}`, // User session access token
                    apikey: anonKey, // API key for Supabase
                },
                uploadDataDuringCreation: true, // Send metadata with file chunks
                removeFingerprintOnSuccess: true, // Remove fingerprint after successful upload
                chunkSize: 6 * 1024 * 1024, // Chunk size for TUS uploads (6MB)
                allowedMetaFields: [
                    "bucketName",
                    "objectName",
                    "contentType",
                    "cacheControl"
                ], // Metadata fields allowed for the upload
                onError: (error) => console.error("Upload error:", error) // Error handling for uploads
            }).on("file-added", (file) => {
                // Attach metadata to each file, including bucket name and content type
                file.meta = {
                    ...file.meta,
                    bucketName, // Bucket specified by the user of the hook
                    objectName: file.name, // Use file name as object name
                    contentType: file.type // Set content type based on file MIME type
                };
            });
        };

        // Initialize Uppy with Supabase settings
        initializeUppy();
    }, [uppy, bucketName]);

    // Return the configured Uppy instance
    return uppy;
};
```

----------------------------------------

TITLE: Create Supabase Profile Photo Upload Widget in React
DESCRIPTION: This React component (`Avatar.jsx`) allows users to upload profile photos to Supabase Storage. It handles image download for display, file selection, and uploads the selected image to the 'avatars' bucket, updating the UI with upload status and calling an `onUpload` callback.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-nextjs.mdx#_snippet_15

LANGUAGE: jsx
CODE:
```
'use client'
import React, { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import Image from 'next/image'

export default function Avatar({ uid, url, size, onUpload }) {
  const supabase = createClient()
  const [avatarUrl, setAvatarUrl] = useState(url)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    async function downloadImage(path) {
      try {
        const { data, error } = await supabase.storage.from('avatars').download(path)
        if (error) {
          throw error
        }

        const url = URL.createObjectURL(data)
        setAvatarUrl(url)
      } catch (error) {
        console.log('Error downloading image: ', error)
      }
    }

    if (url) downloadImage(url)
  }, [url, supabase])

  const uploadAvatar = async (event) => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const filePath = `${uid}-${Math.random()}.${fileExt}`

      const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (error) {
      alert('Error uploading avatar!')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      {avatarUrl ? (
        <Image
          width={size}
          height={size}
          src={avatarUrl}
          alt="Avatar"
          className="avatar image"
          style={{ height: size, width: size }}
        />
      ) : (
        <div className="avatar no-image" style={{ height: size, width: size }} />
      )}
      <div style={{ width: size }}>
        <label className="button primary block" htmlFor="single">
          {uploading ? 'Uploading ...' : 'Upload'}
        </label>
        <input
          style={{
            visibility: 'hidden',
            position: 'absolute',
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
    </div>
  )
}
```

----------------------------------------

TITLE: Demonstrate Initial NO ACTION INITIALLY DEFERRED Behavior
DESCRIPTION: This snippet shows that, in isolation, `NO ACTION INITIALLY DEFERRED` appears to behave like `NO ACTION` or `RESTRICT`, preventing a `DELETE` operation and raising an error if child records still reference the parent.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/cascade-deletes.mdx#_snippet_6

LANGUAGE: shell
CODE:
```
postgres=# delete from grandparent;
ERROR: update or delete on table "parent" violates foreign key constraint "child_father_fkey" on table "child"
DETAIL: Key (id)=(1) is still referenced from table "child".
```

----------------------------------------

TITLE: Hono Middleware for Supabase Server Client
DESCRIPTION: This TypeScript middleware for Hono creates and configures a Supabase server client. It uses `createServerClient` from `@supabase/ssr` to manage cookies for authentication and ensures that `SUPABASE_URL` and `SUPABASE_ANON_KEY` environment variables are present.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/creating-a-client.mdx#_snippet_21

LANGUAGE: TypeScript
CODE:
```
import { createServerClient, parseCookieHeader } from '@supabase/ssr'
import { SupabaseClient } from '@supabase/supabase-js'
import type { Context, MiddlewareHandler } from 'hono'
import { env } from 'hono/adapter'
import { setCookie } from 'hono/cookie'

declare module 'hono' {
  interface ContextVariableMap {
    supabase: SupabaseClient
  }
}

export const getSupabase = (c: Context) => {
  return c.get('supabase')
}

type SupabaseEnv = {
  SUPABASE_URL: string
  SUPABASE_ANON_KEY: string
}

export const supabaseMiddleware = (): MiddlewareHandler => {
  return async (c, next) => {
    const supabaseEnv = env<SupabaseEnv>(c)
    const supabaseUrl = supabaseEnv.SUPABASE_URL
    const supabaseAnonKey = supabaseEnv.SUPABASE_ANON_KEY

    if (!supabaseUrl) {
      throw new Error('SUPABASE_URL missing!')
    }

    if (!supabaseAnonKey) {
      throw new Error('SUPABASE_ANON_KEY missing!')
    }

    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return parseCookieHeader(c.req.header('Cookie') ?? '')
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => setCookie(c, name, value, options))
        }
      }
    })

    c.set('supabase', supabase)

    await next()
  }
}
```

----------------------------------------

TITLE: Create HNSW Index for Inner Product Distance in pgvector
DESCRIPTION: This SQL snippet demonstrates how to create a Hierarchical Navigable Small World (HNSW) index on an 'embedding' column within a 'documents' table. The index utilizes the 'vector_ip_ops' operator class, optimized for inner product distance, to enhance the speed and efficiency of approximate nearest neighbor searches in high-dimensional vector spaces.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-09-06-increase-performance-pgvector-hnsw.mdx#_snippet_0

LANGUAGE: sql
CODE:
```
-- Add a HNSW index for the inner product distance function
CREATE INDEX ON documents
USING hnsw (embedding vector_ip_ops);
```

----------------------------------------

TITLE: Installing the new Supabase SSR package
DESCRIPTION: Command to install the new `@supabase/ssr` package, which provides server-side rendering capabilities for Supabase authentication.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/migrating-to-ssr-from-auth-helpers.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @supabase/ssr
```

----------------------------------------

TITLE: Deprecated Supabase Client Creation Functions
DESCRIPTION: Lists the deprecated `createClient` functions in v0.7.x of Next.js Auth Helpers and their respective replacements, following a new naming convention. These functions will be removed in future versions.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs.mdx#_snippet_20

LANGUAGE: APIDOC
CODE:
```
createMiddlewareSupabaseClient -> createMiddlewareClient
createBrowserSupabaseClient -> createClientComponentClient
createServerComponentSupabaseClient -> createServerComponentClient
createRouteHandlerSupabaseClient -> createRouteHandlerClient
```

----------------------------------------

TITLE: Add SQL for table creation and column-level privileges
DESCRIPTION: Define a 'posts' table with identity primary key, user ID, title, content, and timestamps. Implement row-level security to allow updates only for owners and apply column-level security to revoke 'update' privilege on the 'title' column from authenticated users.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/column-level-security.mdx#_snippet_4

LANGUAGE: sql
CODE:
```
create table
posts (
id bigint primary key generated always as identity,
user_id text,
title text,
content text,
created_at timestamptz default now()
updated_at timestamptz default now()
);

-- Add row-level security
create policy "Allow update for owners" on posts for
update
using ((select auth.uid()) = user_id);

-- Add column-level security
revoke
update
(title) on table public.posts
from
authenticated;
```

----------------------------------------

TITLE: Create Tables for Many-to-Many Relationship (Movies, Actors, Performances)
DESCRIPTION: This SQL example illustrates how to set up tables for a many-to-many relationship between 'movies' and 'actors'. It defines 'movies' and 'actors' tables, and then creates a 'performances' join table that links movies and actors using foreign keys, allowing an actor to be in multiple movies and a movie to have multiple actors.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/tables.mdx#_snippet_7

LANGUAGE: SQL
CODE:
```
create table movies (
  id bigint generated by default as identity primary key,
  name text,
  description text
);

create table actors (
  id bigint generated by default as identity primary key,
  name text
);

create table performances (
  id bigint generated by default as identity primary key,
  movie_id bigint not null references movies,
  actor_id bigint not null references actors
);
```

----------------------------------------

TITLE: SvelteKit Callback Endpoint for Supabase Auth Code Exchange
DESCRIPTION: This SvelteKit (TypeScript) example illustrates the implementation of a `/callback` endpoint. It processes the authorization code received from the Identity Provider (IdP) and exchanges it for a user session using `locals.supabase.auth.exchangeCodeForSession`, then redirects the user.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/enterprise-sso/auth-sso-saml.mdx#_snippet_17

LANGUAGE: TypeScript
CODE:
```
import { error, redirect } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ url, locals }) => {
  const code = url.searchParams.get('code')

  if (!code) {
    error(400, 'No authorization code provided')
  }

  const { error: tokenExchangeError } = await locals.supabase.auth.exchangeCodeForSession(code)

  if (tokenExchangeError) {
    error(400, 'Failed to exchange authorization code for session')
  }

  redirect(303, '/')
}
```

----------------------------------------

TITLE: Send Message to Supabase Queue from Client (Supabase JS)
DESCRIPTION: Illustrates sending messages to a Supabase Queue from a client-side application using the Supabase JavaScript client library's `rpc` method. Note that the `pgmq_public` schema must be exposed and secured with Row Level Security (RLS) for client access.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-12-05-supabase-queues.mdx#_snippet_1

LANGUAGE: TSX
CODE:
```
import { createClient } from '@supabase/supabase-js'

const url = 'SUPABASE_URL'
const key = 'SUPABASE_ANON_KEY'

const queues = createClient(url, key, {
  db: { schema: 'pgmq_public' },
})

const { data, error } = await queues.rpc('send', {
  queue_name: 'foo',
  message: { hello: 'world' },
})

console.log('Message: ', data)
```

----------------------------------------

TITLE: Set IVFFlat Probes for Current Session in SQL
DESCRIPTION: This SQL command sets the `ivfflat.probes` parameter to 10 for the duration of the current database session. Increasing the number of probes allows the search to examine more clusters, which can improve recall in approximate nearest neighbor searches at the expense of query speed.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/vector-indexes/ivf-indexes.mdx#_snippet_3

LANGUAGE: SQL
CODE:
```
set ivfflat.probes = 10;
```

----------------------------------------

TITLE: Generate a new migration file for table modification
DESCRIPTION: To modify the existing 'employees' table, generate another migration file. This new file will contain the SQL statements for adding a new column, such as 'department'.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/deployment/database-migrations.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
supabase migration new add_department_column
```

----------------------------------------

TITLE: Create a New Supabase Edge Function
DESCRIPTION: This command initializes a new Supabase Edge Function locally, creating the necessary directory and boilerplate files for your function.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/examples/auth-send-email-hook-react-email-resend.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
supabase functions new send-email
```

----------------------------------------

TITLE: Initializing Supabase Client in Swift
DESCRIPTION: This snippet illustrates how to initialize the Supabase client in Swift. It defines constants for the Supabase URL and anonymous public API key, then creates a `SupabaseClient` instance. The URL is converted to a `URL` object before being passed to the client constructor.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/broadcast.mdx#_snippet_2

LANGUAGE: Swift
CODE:
```
import Supabase

let SUPABASE_URL = "https://<project>.supabase.co"
let SUPABASE_KEY = "<your-anon-key>"

let supabase = SupabaseClient(supabaseURL: URL(string: SUPABASE_URL)!, supabaseKey: SUPABASE_KEY)
```

----------------------------------------

TITLE: Sending Broadcast Message via cURL to Supabase Realtime API
DESCRIPTION: This cURL command demonstrates how to send a broadcast message to the Supabase Realtime API. It requires an API key and sets the content type to application/json, including a JSON payload with the message's topic, event, and data. The request targets the '/realtime/v1/api/broadcast' endpoint.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/broadcast.mdx#_snippet_16

LANGUAGE: bash
CODE:
```
curl -v \
-H 'apikey: <SUPABASE_TOKEN>' \
-H 'Content-Type: application/json' \
--data-raw '{
  "messages": [
    {
      "topic": "test",
      "event": "event",
      "payload": { "test": "test" }
    }
  ]
}' \
'https://<PROJECT_REF>.supabase.co/realtime/v1/api/broadcast'
```

----------------------------------------

TITLE: Testing Supabase Edge Function with cURL POST Request
DESCRIPTION: Provides a cURL command to test the deployed Supabase Edge Function. It demonstrates how to send a JSON payload containing the user query to the function's endpoint, including necessary headers like Authorization and Content-Type.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/hybrid-search.mdx#_snippet_5

LANGUAGE: cURL
CODE:
```
curl -i --location --request POST \
  'http://127.0.0.1:54321/functions/v1/hybrid-search' \
  --header 'Authorization: Bearer <anonymous key>' \
  --header 'Content-Type': 'application/json' \
  --data '{"query":"Italian recipes with tomato sauce"}'
```

----------------------------------------

TITLE: Server Reply Message for Realtime Protocol Connection
DESCRIPTION: The server responds to a client's join request with this message, providing the Postgres configuration including unique IDs for subscribed changes. Clients use these IDs to route incoming real-time updates to the correct callback functions, along with a status indicating success or error.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/protocol.mdx#_snippet_1

LANGUAGE: ts
CODE:
```
{
   "event": "phx_reply",
   "topic": string,
   "payload": {
      "response": {
         "postgres_changes": [
            {
               "id": number,
               "event": "*" | "INSERT" | "UPDATE" | "DELETE",
               "schema": string,
               "table": string,
               "filter": string + '=' + "eq" | "neq" | "gt" | "gte" | "lt" | "lte" | "in" +  '.' + string
            }
         ]
      },
      "status": "ok" | "error"
   },
   "ref": string
}
```

----------------------------------------

TITLE: Create New Supabase Edge Function
DESCRIPTION: Creates a new Supabase Edge Function named `scribe-bot`, which will serve as the handler for Telegram webhook requests.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/examples/elevenlabs-transcribe-speech.mdx#_snippet_3

LANGUAGE: Bash
CODE:
```
supabase functions new scribe-bot
```

----------------------------------------

TITLE: Generate migration from declared schema
DESCRIPTION: Use the Supabase CLI to generate a new migration file by diffing the current database state against the declared schema. The `-f` flag specifies a descriptive name for the migration, which will be stored in the `supabase/migrations` directory.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/local-development/declarative-database-schemas.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
supabase db diff -f create_employees_table
```

----------------------------------------

TITLE: Supabase CLI: vanity-subdomains check-availability Command
DESCRIPTION: Checks the availability of a desired vanity subdomain for a Supabase project. Requires the project reference and the desired subdomain name. This command is currently experimental.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/custom-domains.mdx#_snippet_8

LANGUAGE: APIDOC
CODE:
```
supabase vanity-subdomains check-availability
  --project-ref <project_reference>: The reference ID of the Supabase project.
  --desired-subdomain <subdomain_name>: The desired vanity subdomain name.
  --experimental: Flag indicating the command is experimental.
```

----------------------------------------

TITLE: Example Database Schema and Generated TypeScript Types
DESCRIPTION: This example illustrates a `public.movies` SQL table definition and the corresponding TypeScript types generated for it. It showcases how `supabase-js` infers `Row`, `Insert`, and `Update` interfaces, handling generated columns and nullability.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/docs/ref/javascript/typescript-support.mdx#_snippet_1

LANGUAGE: sql
CODE:
```
create table public.movies (
  id bigint generated always as identity primary key,
  name text not null,
  data jsonb null
);
```

LANGUAGE: ts
CODE:
```
export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      movies: {
        Row: {               // the data expected from .select()
          id: number
          name: string
          data: Json | null
        }
        Insert: {            // the data to be passed to .insert()
          id?: never         // generated columns must not be supplied
          name: string       // `not null` columns with no default must be supplied
          data?: Json | null // nullable columns can be omitted
        }
        Update: {            // the data to be passed to .update()
          id?: never
          name?: string      // `not null` columns are optional on .update()
          data?: Json | null
        }
      }
    }
  }
}
```

----------------------------------------

TITLE: Define Chat States for Cubit in Dart
DESCRIPTION: This Dart code defines the various states for a chat feature using the `bloc` library's Cubit pattern. It includes `ChatInitial`, `ChatLoaded` (with a list of messages), `ChatEmpty`, and `ChatError` states, providing a clear representation of the chat's UI and data status.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-11-22-flutter-authorization-with-rls.mdx#_snippet_11

LANGUAGE: Dart
CODE:
```
part of 'chat_cubit.dart';

@immutable
abstract class ChatState {}

class ChatInitial extends ChatState {}

class ChatLoaded extends ChatState {
  ChatLoaded(this.messages);
  final List<Message> messages;
}

class ChatEmpty extends ChatState {}

class ChatError extends ChatState {
  ChatError(this.message);
  final String message;
}
```

----------------------------------------

TITLE: Invoke Supabase Edge Function with pg_net
DESCRIPTION: Provides an example of making an HTTP POST request to a Supabase Edge Function using `net.http_post`. It includes setting necessary headers like `Content-Type` and `Authorization` (Bearer token) and sending a JSON body payload.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pg_net.mdx#_snippet_16

LANGUAGE: sql
CODE:
```
select
    net.http_post(
        url:='https://project-ref.supabase.co/functions/v1/function-name',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer <YOUR_ANON_KEY>"}'::jsonb,
        body:='{"name": "pg_net"}'::jsonb
    ) as request_id;
```

----------------------------------------

TITLE: Configure SAML Attribute Mapping JSON for Supabase
DESCRIPTION: This JSON structure defines how SAML assertion attributes like 'mail' and 'givenName' are mapped to Supabase user identity properties 'email' and 'first_name'. This configuration is used when setting up or updating an identity provider.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/enterprise-sso/auth-sso-saml.mdx#_snippet_7

LANGUAGE: json
CODE:
```
{
  "keys": {
    "email": {
      "name": "mail"
    },
    "first_name": {
      "name": "givenName"
    }
  }
}
```

----------------------------------------

TITLE: Initialize Supabase Client with ComposeAuth for Google Sign-in (Kotlin)
DESCRIPTION: This Kotlin code snippet demonstrates how to initialize the Supabase client for a Kotlin Multiplatform application. It configures the client with `Auth` and `ComposeAuth` plugins, specifically setting up `googleNativeLogin` with the web client ID for Google authentication. This setup is crucial for enabling Google sign-in capabilities within the application.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/social-login/auth-google.mdx#_snippet_17

LANGUAGE: kotlin
CODE:
```
val supabaseClient = createSupabaseClient(
    supabaseUrl = "SUPABASE_URL",
    supabaseKey = "SUPABASE_KEY"
) {
    install(Auth)
    install(ComposeAuth) {
        googleNativeLogin("WEB_GOOGLE_CLIENT_ID") //Use the Web Client ID, not the Android one!
    }
}
```

----------------------------------------

TITLE: Update React Table Component with State Management
DESCRIPTION: This TypeScript React component demonstrates how to set up a data table using `useReactTable` from `@tanstack/react-table`. It manages various table states including sorting, column filters, visibility, and row selection, providing a foundational structure for interactive data tables.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/data-table.mdx#_snippet_15

LANGUAGE: tsx
CODE:
```
export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div>
      <div className="rounded-md border">
        <Table />
      </div>
    </div>
  )
}
```

----------------------------------------

TITLE: Integrate React Query Client Provider into Next.js Root Layout
DESCRIPTION: This code demonstrates how to wrap the main `RootLayout` of a Next.js App Router application with the `ReactQueryClientProvider`. This ensures that all components within the application have access to the React Query client for data fetching and caching.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-12-react-query-nextjs-app-router-cache-helpers.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ReactQueryClientProvider>
  )
}
```

----------------------------------------

TITLE: SQL: Creating New PostgreSQL Users
DESCRIPTION: Illustrates how to create new database users in PostgreSQL with associated passwords using the CREATE USER command. This enables distinct user accounts for database access, separate from the default 'postgres' user.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/supavisor-faq-YyP5tI.mdx#_snippet_4

LANGUAGE: SQL
CODE:
```
CREATE USER postgres WITH PASSWORD 'super-secret-password';
CREATE USER some_new_user WITH PASSWORD 'password';
```

----------------------------------------

TITLE: Placeholder for Generated Database Types
DESCRIPTION: Represents the content of a `database-generated.types.ts` file, which would typically contain the raw types generated by the Supabase CLI. This file serves as the base before any manual overrides or enhancements are applied.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/rest/generating-types.mdx#_snippet_8

LANGUAGE: ts
CODE:
```
export type Json = // ...

export interface Database {
  // ...
}
```

----------------------------------------

TITLE: Run EXPLAIN VERBOSE to view query_id for a query
DESCRIPTION: This SQL query demonstrates the use of EXPLAIN (VERBOSE, COSTS OFF) to show detailed execution plan information, including the Query Identifier, for a query that selects schema and table names while introducing a delay using pg_sleep.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2021-11-28-whats-new-in-postgres-14.mdx#_snippet_6

LANGUAGE: sql
CODE:
```
explain (verbose, costs off)
select schemaname, tablename
from pg_tables, pg_sleep(5)
where schemaname <> 'pg_catalog';
```

----------------------------------------

TITLE: Supabase Client Libraries for Ruby
DESCRIPTION: Lists available community-maintained Supabase client libraries for Ruby, including core Supabase and Postgrest components.
SOURCE: https://github.com/supabase/supabase/blob/master/i18n/README.fr.md#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Supabase Ruby Client: https://github.com/supabase-community/supabase-rb
Postgrest Ruby Client: https://github.com/supabase-community/postgrest-rb
```

----------------------------------------

TITLE: Filter user data with Supabase JavaScript client before RLS
DESCRIPTION: Demonstrates how to filter user data by a specific user ID using the Supabase JavaScript client, showing a common pattern before applying Row Level Security policies.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2020-08-05-supabase-auth.mdx#_snippet_0

LANGUAGE: js
CODE:
```
const loggedInUserId = 'd0714948'
let user = await supabase.from('users').select('user_id, name').eq('user_id', loggedInUserId)
// Returns { id: 'd0714948', name: 'Jane'
```

----------------------------------------

TITLE: Create and run a database migration
DESCRIPTION: This step demonstrates how to create and apply database migrations using Rails' Active Record. You generate an `Article` model with `title` and `body` fields, which automatically creates a migration file. Running `bin/rails db:migrate` then applies these schema changes to your connected Supabase database, preparing it for data storage.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/quickstarts/ruby-on-rails.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
bin/rails generate model Article title:string body:text
bin/rails db:migrate
```

----------------------------------------

TITLE: Disconnect from Supabase Vecs Client
DESCRIPTION: This simple Python snippet shows how to properly close the connection to the Supabase Vecs client, releasing resources.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-05-31-vecs.mdx#_snippet_5

LANGUAGE: Python
CODE:
```
vx.disconnect()
```

----------------------------------------

TITLE: Handle Magic Link Sign-In with Supabase in Ionic Alert
DESCRIPTION: This TypeScript/JavaScript snippet demonstrates the handler function for a 'Get Magic Link' button within an Ionic alert controller. It uses the Supabase authentication service to sign in a user with their email, displays a loading indicator, and provides feedback (success/error) to the user via alerts.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-11-08-authentication-in-ionic-angular.mdx#_snippet_12

LANGUAGE: TypeScript
CODE:
```
name: "email",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Get Magic Link",
          handler: async (result) => {
            const loading = await this.loadingController.create();
            await loading.present();
            const { data, error } = await this.authService.signInWithEmail(
              result.email
            );
            await loading.dismiss();

            if (error) {
              this.showAlert("Failed", error.message);
            } else {
              this.showAlert(
                "Success",
                "Please check your emails for further instructions!"
              );
            }
          },
        },
      ],
    });
    await alert.present();
```

----------------------------------------

TITLE: Supabase Query Error Handling Pattern
DESCRIPTION: Illustrates the evolution of error handling in Supabase.js queries, moving from a try-catch block (previously) to a returned error object pattern (now) for improved developer experience.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2020-10-30-improved-dx.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
try {
  const { body } = supabase.from('todos').select('*')
} catch (error) {
  console.log(error)
}
```

LANGUAGE: JavaScript
CODE:
```
const { data, error } = supabase.from('todos').select('*')
if (error) console.log(error)
// else, carry on ..
```

----------------------------------------

TITLE: Embed Dark Mode Supabase Badge (Markdown & HTML)
DESCRIPTION: This snippet offers code examples for embedding the 'Made with Supabase' badge optimized for dark-themed interfaces. It includes both Markdown and HTML versions, ensuring compatibility with various documentation or web page setups. The badge links to the official Supabase website.
SOURCE: https://github.com/supabase/supabase/blob/master/i18n/README.ko.md#_snippet_1

LANGUAGE: Markdown
CODE:
```
[![Made with Supabase](https://supabase.com/badge-made-with-supabase-dark.svg)](https://supabase.com)
```

LANGUAGE: HTML
CODE:
```
<a href="https://supabase.com">
  <img
    width="168"
    height="30"
    src="https://supabase.com/badge-made-with-supabase-dark.svg"
    alt="Made with Supabase"
  />
</a>
```

----------------------------------------

TITLE: Implement Supabase Server Actions for User Authentication
DESCRIPTION: This code snippet illustrates how to create server actions (`login` and `signup`) in Next.js using `createClient` from `@/utils/supabase/server`. These actions handle user authentication (sign-in and sign-up) by extracting email and password from form data, interacting with Supabase Auth, and redirecting based on the authentication outcome. Input validation is recommended in a production environment.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/how-to-migrate-from-supabase-auth-helpers-to-ssr-package-5NRunM.mdx#_snippet_3

LANGUAGE: TypeScript
CODE:
```
// app/login/actions.ts

'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
```

----------------------------------------

TITLE: Upsert Data with Async Vecs Client (Python Mock)
DESCRIPTION: This mock Python code demonstrates a potential future async client for `vecs`. It shows an `await` call for the `upsert` method, indicating non-blocking operations when interacting with the database or network, improving performance for I/O-bound tasks.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-05-31-vecs.mdx#_snippet_9

LANGUAGE: Python
CODE:
```
# This is mock code only, not currently functional

await docs.upsert([
    ("id_0", [0.1, 0.2, 0.3], {}),
])
```

----------------------------------------

TITLE: Popover Component
DESCRIPTION: Displays rich content in a portal, triggered by a button.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/public/llms.txt#_snippet_6

LANGUAGE: APIDOC
CODE:
```
Popover:
  Description: Displays rich content in a portal, triggered by a button.
  Type: UI Component
```

----------------------------------------

TITLE: Run SolidJS Application Locally
DESCRIPTION: This command starts the SolidJS development server, making the application accessible in a web browser, typically at `localhost:3000`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-solidjs.mdx#_snippet_6

LANGUAGE: bash
CODE:
```
npm start
```

----------------------------------------

TITLE: Handle Supabase Magic Link Login on SvelteKit Server
DESCRIPTION: This SvelteKit `+page.server.ts` file handles the server-side logic for the magic link login. It checks if a user is already logged in and redirects them, validates the email input, and uses Supabase's `signInWithOtp` method to send a magic link. It returns appropriate success or error messages.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-sveltekit.mdx#_snippet_11

LANGUAGE: ts
CODE:
```
// src/routes/+page.server.ts
import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url, locals: { safeGetSession } }) => {
  const { session } = await safeGetSession()

  // if the user is already logged in return them to the account page
  if (session) {
    redirect(303, '/account')
  }

  return { url: url.origin }
}

export const actions: Actions = {
  default: async (event) => {
    const {
      url,
      request,
      locals: { supabase },
    } = event
    const formData = await request.formData()
    const email = formData.get('email') as string
    const validEmail = /^[w-\.\+]+@([\w-]+\.)+[\w-]{2,8}$/.test(email)

    if (!validEmail) {
      return fail(400, { errors: { email: 'Please enter a valid email address' }, email })
    }

    const { error } = await supabase.auth.signInWithOtp({ email })

    if (error) {
      return fail(400, {
        success: false,
        email,
        message: `There was an issue, Please contact support.`,
      })
    }

    return {
      success: true,
      message: 'Please check your email for a magic link to log into the website.',
    }
  },
}
```

----------------------------------------

TITLE: Define Product Repository Interface in Kotlin
DESCRIPTION: Defines the contract for managing product data, including operations for creating, retrieving, updating, and deleting products. It specifies methods for interacting with a product data source.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-kotlin.mdx#_snippet_12

LANGUAGE: kotlin
CODE:
```
interface ProductRepository {
    suspend fun createProduct(product: Product): Boolean
    suspend fun getProducts(): List<ProductDto>?
    suspend fun getProduct(id: String): ProductDto
    suspend fun deleteProduct(id: String)
    suspend fun updateProduct(
        id: String, name: String, price: Double, imageName: String, imageFile: ByteArray
    )
}
```

----------------------------------------

TITLE: Supabase Client Libraries for Swift
DESCRIPTION: This entry lists the available community-maintained client libraries for Supabase services in Swift, covering the main Supabase client, Postgrest, GoTrue, Realtime, Storage, and Functions. Links to their GitHub repositories are provided.
SOURCE: https://github.com/supabase/supabase/blob/master/i18n/README.da.md#_snippet_5

LANGUAGE: APIDOC
CODE:
```
Supabase Client: supabase-swift (https://github.com/supabase-community/supabase-swift)
Postgrest Client: postgrest-swift (https://github.com/supabase-community/postgrest-swift)
GoTrue Client: gotrue-swift (https://github.com/supabase-community/gotrue-swift)
Realtime Client: realtime-swift (https://github.com/supabase-community/realtime-swift)
Storage Client: storage-swift (https://github.com/supabase-community/storage-swift)
Functions Client: functions-swift (https://github.com/supabase-community/functions-swift)
```

----------------------------------------

TITLE: Logging in to Supabase CLI
DESCRIPTION: Authenticates the Supabase CLI with your Supabase account. This step requires a Personal Access Token and enables the CLI to interact with your Supabase projects.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/rest/generating-types.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npx supabase login
```

----------------------------------------

TITLE: RealtimeCursors Component Props API
DESCRIPTION: API documentation for the `RealtimeCursors` component, detailing the available properties, their types, and descriptions. These props are essential for configuring the component's behavior, such as identifying the collaborative room and the current user.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/ui-library/content/docs/react-router/realtime-cursor.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
RealtimeCursors Component:
  Props:
    roomName:
      Type: string
      Description: Unique identifier for the shared room or session.
    username:
      Type: string
      Description: Name of the current user; used to track and label cursors.
```

----------------------------------------

TITLE: Create a new Supabase migration file
DESCRIPTION: Generate a new migration file using the Supabase CLI to store SQL changes for a new table. This command creates an empty SQL file with a timestamp in the `supabase/migrations/` directory.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/local-development/overview.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
supabase migration new create_employees_table
```

----------------------------------------

TITLE: Create PostgreSQL table for vector embeddings
DESCRIPTION: This SQL snippet defines a new table named 'posts' with columns for ID, title, body, and a 'vector' type column for storing embeddings. The 'vector(384)' specifies a vector of 384 dimensions.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pgvector.mdx#_snippet_1

LANGUAGE: sql
CODE:
```
create table posts (
  id serial primary key,
  title text not null,
  body text not null,
  embedding vector(384)
);
```

----------------------------------------

TITLE: Supabase Edge Function for Telegram Bot Location Updates
DESCRIPTION: This TypeScript code defines a Supabase Edge Function that acts as a webhook callback for a Telegram Bot. It listens for 'edit:location' updates, extracts latitude, longitude, and user ID, and then uses a Supabase RPC call ('location_insert') to store this live location data in the database. It includes error handling for database insertion and secret validation for the webhook.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-07-04-postgres-realtime-location-sharing-with-maplibre.mdx#_snippet_0

LANGUAGE: typescript
CODE:
```
import { Bot, webhookCallback } from 'https://deno.land/x/grammy@v1.20.3/mod.ts'
import { createClient } from 'jsr:@supabase/supabase-js@2.39.7'
import { Database } from '../_shared/database.types.ts'

const token = Deno.env.get('BOT_TOKEN')
if (!token) throw new Error('BOT_TOKEN is unset')

const supabase = createClient<Database>(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

const bot = new Bot(token)
// ...

bot.on('edit:location', async (ctx) => {
  const {
    location,
    from: { id: user_id },
    edit_date,
  } = ctx.update.edited_message!
  if (location) {
    // Insert into db
    const { error } = await supabase.rpc('location_insert', {
      _user_id: user_id,
      _lat: location.latitude,
      _long: location.longitude,
      _timestamp: edit_date,
    })
    if (
      error &&
      error.message !==
        'null value in column "event_id" of relation "locations" violates not-null constraint' &&
      error.message !== 'duplicate key value violates unique constraint "locations_pkey"'
    ) {
      return console.log(`edit:location:insert:error:user:${user_id}: ${error.message}`)
    }
  }
  return
})

const handleUpdate = webhookCallback(bot, 'std/http')

Deno.serve(async (req) => {
  const headers = req.headers
  try {
    const url = new URL(req.url)
    if (url.searchParams.get('secret') !== Deno.env.get('FUNCTION_SECRET')) {
      return new Response('not allowed', { status: 405 })
    }

    return await handleUpdate(req)
  } catch (err) {
    console.log(headers)
    console.error(err)
  }
  return new Response()
})
```

----------------------------------------

TITLE: Filter Postgres logs by error severity levels
DESCRIPTION: Identify critical issues by filtering log events based on their error severity. This query finds entries with 'ERROR', 'FATAL', or 'PANIC' levels, which indicate command, session, or database abortion respectively. sql_state_code can provide further details.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/how-to-interpret-and-explore-the-postgres-logs-OuCIOj.mdx#_snippet_7

LANGUAGE: SQL
CODE:
```
-- find error events
... query
where
  parsed.error_severity in ('ERROR', 'FATAL', 'PANIC')
```

----------------------------------------

TITLE: JavaScript Supabase Client Select Query Example
DESCRIPTION: This JavaScript snippet demonstrates how to perform a simple 'select' query using the Supabase JS client. It fetches the 'name' column from the 'countries' table and captures any potential errors.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/discovering-and-interpreting-api-errors-in-the-logs-7xREI9.mdx#_snippet_9

LANGUAGE: js
CODE:
```
let { data: countries, error } = await supabase.from('countries').select('name')
```

----------------------------------------

TITLE: Retrieve User IP Addresses from Edge Logs (SQL)
DESCRIPTION: This SQL query demonstrates how to extract user IP addresses (x_real_ip) from Supabase edge_logs. It involves cross joining and unnesting nested metadata, request, and headers fields to access the required data. The query filters for non-null IP addresses and specifically targets 'GET' requests.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/telemetry/logs.mdx#_snippet_15

LANGUAGE: sql
CODE:
```
select datetime(timestamp), h.x_real_ip
from
  edge_logs
  cross join unnest(metadata) as m
  cross join unnest(m.request) as r
  cross join unnest(r.headers) as h
where h.x_real_ip is not null and r.method = "GET";
```

----------------------------------------

TITLE: Retrieve Supabase Auth Rate Limits (Management API)
DESCRIPTION: This `bash` command demonstrates how to fetch the current rate limit configurations for Supabase Auth using the Management API. It requires a `SUPABASE_ACCESS_TOKEN` and `PROJECT_REF` for authentication and targets the `/v1/projects/$PROJECT_REF/config/auth` endpoint with a GET request. The `jq` command filters the output to display only rate limit-related keys.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/rate-limits.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
export SUPABASE_ACCESS_TOKEN="your-access-token"
export PROJECT_REF="your-project-ref"

curl -X GET "https://api.supabase.com/v1/projects/$PROJECT_REF/config/auth" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  | jq 'to_entries | map(select(.key | startswith("rate_limit_"))) | from_entries'
```

----------------------------------------

TITLE: Conditionally Render Email Content based on User Domain
DESCRIPTION: This Go Template snippet demonstrates how to send different email content to users based on their domain. Specifically, it checks if the user's domain matches 'https://www.example.com' or 'https://www.earlyaccess.trial.com' to deliver tailored welcome messages, including special access information for early access members. It relies on the '.Data.Domain' property available within the template context.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-email-templates.mdx#_snippet_6

LANGUAGE: Go Template
CODE:
```
{{ if eq .Data.Domain "https://www.example.com" }}
<h1>Welcome to Our Database Service!</h1>
  <p>Dear Developer,</p>
  <p>Welcome to Billy, the scalable developer platform!</p>
  <p>Best Regards,<br>
Billy Team</p>
{{ else if eq .Data.Domain "https://www.earlyaccess.trial.com" }}
<h1>Welcome to Our Database Service!</h1>
  <p>Dear Developer,</p>
  <p>Welcome Billy, the scalable developer platform!</p>
  <p> As an early access member, you have access to select features like Point To Space Restoration.</p>
  <p>Best Regards,<br>
Billy Team</p>
{{ end }}
```

----------------------------------------

TITLE: Initialize and Start Supabase for CI/CD Testing
DESCRIPTION: These commands are typically used in CI/CD pipelines to initialize a new Supabase project and start the local development environment. This setup allows for comprehensive testing of all migrations on a fresh database instance, ensuring reliability.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-08-15-supabase-cli-v1-and-admin-api-beta.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
supabase init
supabase start
```

----------------------------------------

TITLE: Supabase Edge Function Handler for Custom Auth Emails
DESCRIPTION: This TypeScript handler function for a Supabase Edge Function processes incoming webhook requests from Supabase Auth. It verifies the webhook payload using a secret, renders a React email template (`MagicLinkEmail`) with user and email data, and then sends the generated HTML email using the Resend API. The function handles errors during the email sending process and returns appropriate HTTP responses.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/examples/auth-send-email-hook-react-email-resend.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import React from 'npm:react@18.3.1'
import { Webhook } from 'https://esm.sh/standardwebhooks@1.0.0'
import { Resend } from 'npm:resend@4.0.0'
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import { MagicLinkEmail } from './_templates/magic-link.tsx'

const resend = new Resend(Deno.env.get('RESEND_API_KEY') as string)
const hookSecret = Deno.env.get('SEND_EMAIL_HOOK_SECRET') as string

Deno.serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('not allowed', { status: 400 })
  }

  const payload = await req.text()
  const headers = Object.fromEntries(req.headers)
  const wh = new Webhook(hookSecret)
  try {
    const {
      user,
      email_data: { token, token_hash, redirect_to, email_action_type },
    } = wh.verify(payload, headers) as {
      user: {
        email: string
      }
      email_data: {
        token: string
        token_hash: string
        redirect_to: string
        email_action_type: string
        site_url: string
        token_new: string
        token_hash_new: string
      }
    }

    const html = await renderAsync(
      React.createElement(MagicLinkEmail, {
        supabase_url: Deno.env.get('SUPABASE_URL') ?? '',
        token,
        token_hash,
        redirect_to,
        email_action_type,
      })
    )

    const { error } = await resend.emails.send({
      from: 'welcome <onboarding@resend.dev>',
      to: [user.email],
      subject: 'Supa Custom MagicLink!',
      html,
    })
    if (error) {
      throw error
    }
  } catch (error) {
    console.log(error)
    return new Response(
      JSON.stringify({
        error: {
          http_code: error.code,
          message: error.message,
        },
      }),
      {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  const responseHeaders = new Headers()
  responseHeaders.set('Content-Type', 'application/json')
  return new Response(JSON.stringify({}), {
    status: 200,
    headers: responseHeaders,
  })
})
```

----------------------------------------

TITLE: Grant Permissions for Custom Schema Exposure
DESCRIPTION: SQL commands to grant necessary permissions (USAGE, ALL on TABLES, ROUTINES, SEQUENCES, and ALTER DEFAULT PRIVILEGES) to `anon`, `authenticated`, and `service_role` for a custom schema, making it accessible via Supabase data APIs. Replace `myschema` with your schema name.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/using-custom-schemas.mdx#_snippet_1

LANGUAGE: sql
CODE:
```
GRANT USAGE ON SCHEMA myschema TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA myschema TO anon, authenticated, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA myschema TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA myschema TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA myschema GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA myschema GRANT ALL ON ROUTINES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA myschema GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
```

----------------------------------------

TITLE: Install Input Component via CLI
DESCRIPTION: Installs the Input component using the shadcn-ui CLI tool, adding it to your project. This command fetches and integrates the component's code into your local development environment.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/input.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-ui@latest add input
```

----------------------------------------

TITLE: Define audit record storage table using JSONB
DESCRIPTION: This SQL snippet defines the 'audit.record_version' table. It uses PostgreSQL's JSONB data type to store record data, allowing a single table to audit multiple source tables without requiring schema migrations when source tables change. It includes metadata columns like operation type, timestamp, and table identifiers.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-03-08-postgres-audit.mdx#_snippet_3

LANGUAGE: SQL
CODE:
```
create table audit.record_version (
  id bigserial primary key,
  -- auditing metadata
  record_id uuid, -- identifies a new record by it's table + primary key
  old_record_id uuid, -- ^
  op varchar(8) not null, -- INSERT/UPDATE/DELETE/TRUNCATE
  ts timestamptz not null default now(),
  -- table identifiers
  table_oid oid not null, -- pg internal id for a table
  table_schema name not null, -- audited table's schema name e.g. 'public'
  table_name name not null, -- audited table's table name e.g. 'account'
  -- record data
  record jsonb, -- contents of the new record
  old_record jsonb -- previous record contents (for UPDATE/DELETE)
);
```

----------------------------------------

TITLE: Perform Basic Full Text Search on a Single Column
DESCRIPTION: This example demonstrates how to perform a basic full text search on a specific column (e.g., 'description') to find occurrences of a word using the `@@` operator or `textSearch` method. It showcases filtering records where a column's content matches a given text query.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/full-text-search.mdx#_snippet_4

LANGUAGE: SQL
CODE:
```
select
  *
from
  books
where
  to_tsvector(description)
  @@ to_tsquery('big');
```

LANGUAGE: JavaScript
CODE:
```
const { data, error } = await supabase.from('books').select().textSearch('description', "'big'")
```

LANGUAGE: Dart
CODE:
```
final result = await client
  .from('books')
  .select()
  .textSearch('description', "'big'");
```

LANGUAGE: Swift
CODE:
```
let response = await client.from("books")
  .select()
  .textSearch("description", value: "'big'")
  .execute()
```

LANGUAGE: Kotlin
CODE:
```
val data = supabase.from("books").select {
    filter {
        textSearch("description", "'big'", TextSearchType.NONE)
    }
}
```

LANGUAGE: Python
CODE:
```
data = supabase.from_('books').select().text_search('description', "'big'").execute()
```

----------------------------------------

TITLE: Grant Bypass RLS Privilege to a Postgres Role
DESCRIPTION: Shows how to alter a Postgres role to grant it the `bypassrls` privilege, allowing it to ignore Row Level Security policies. This is useful for system-level administrative access but should never be shared with end-users.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/row-level-security.mdx#_snippet_14

LANGUAGE: SQL
CODE:
```
alter role "role_name" with bypassrls;
```

----------------------------------------

TITLE: Set User Session ID for Direct Postgres RLS
DESCRIPTION: Sets the `app.current_user_id` session variable for the current Postgres session. This variable is referenced by RLS policies to identify the current user and enforce data access rules for direct database connections.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/rag-with-permissions.mdx#_snippet_10

LANGUAGE: SQL
CODE:
```
set app.current_user_id = '<current-user-id>';
```

----------------------------------------

TITLE: Identify High Execution Time in Postgres Hash Join
DESCRIPTION: Focus on the 'actual time' metric within a Hash Join node to pinpoint operations consuming significant execution time, indicating a potential performance bottleneck.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/understanding-postgresql-explain-output-Un9dqX.mdx#_snippet_5

LANGUAGE: Postgres Explain Output
CODE:
```
Hash Join  (cost=100.00..200.00 rows=1000 width=50) (actual time=50.012..150.023 rows=1000 loops=1)
```

----------------------------------------

TITLE: Supabase Postgres Row Level Security (RLS) Schema and Policies
DESCRIPTION: Defines the `profiles` table with UUID references to `auth.users` and enables RLS. It includes policies for public read access, and authenticated user-specific insert/update operations. Also configures Realtime and Storage for avatars with appropriate access policies.
SOURCE: https://github.com/supabase/supabase/blob/master/examples/user-management/svelte-user-management/README.md#_snippet_3

LANGUAGE: sql
CODE:
```
-- Create a table for Public Profiles
create table
	profiles (
		id uuid references auth.users not null,
		updated_at timestamp
		with
			time zone,
			username text unique,
			avatar_url text,
			website text,
			primary key (id),
			unique (username),
			constraint username_length check (char_length(username) >= 3)
	);

alter table
	profiles enable row level security;

create policy "Public profiles are viewable by everyone." on profiles for
select
	using (true);

create policy "Users can insert their own profile." on profiles for insert
with
	check ((select auth.uid()) = id);

create policy "Users can update own profile." on profiles for
update
	using ((select auth.uid()) = id);

-- Set up Realtime!
begin;

drop
	publication if exists supabase_realtime;

create publication supabase_realtime;

commit;

alter
	publication supabase_realtime add table profiles;

-- Set up Storage!
insert into
	storage.buckets (id, name)
values
	('avatars', 'avatars');

create policy "Avatar images are publicly accessible." on storage.objects for
select
	using (bucket_id = 'avatars');

create policy "Anyone can upload an avatar." on storage.objects for insert
with
	check (bucket_id = 'avatars');
```

----------------------------------------

TITLE: Define Zod Schema for Form Validation
DESCRIPTION: Shows how to define a Zod schema to specify the validation rules and shape of the form data, in this case, a username field with minimum and maximum length constraints.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/form.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
'use client'

import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(2).max(50),
})
```

----------------------------------------

TITLE: Handle User Logout in Next.js Route Handler with Supabase
DESCRIPTION: This code defines a Next.js API route handler for user logout. It uses `createRouteHandlerClient` to access the Supabase client, signs out the user, and then redirects them to the login page. It demonstrates how to manage user sessions securely on the server side.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs.mdx#_snippet_7

LANGUAGE: JavaScript
CODE:
```
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const requestUrl = new URL(request.url)
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  await supabase.auth.signOut()

  return NextResponse.redirect(`${requestUrl.origin}/login`, {
    status: 301,
  })
}
```

LANGUAGE: TypeScript
CODE:
```
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { Database } from '@/lib/database.types'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

  await supabase.auth.signOut()

  return NextResponse.redirect(`${requestUrl.origin}/login`, {
    status: 301,
  })
}
```

----------------------------------------

TITLE: Realtime Chat Component with Initial Messages (React/Next.js)
DESCRIPTION: Illustrates how to pre-populate the Realtime Chat component with existing messages, typically fetched from a data source using a custom hook like `useMessagesQuery`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/ui-library/content/docs/react-router/realtime-chat.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { RealtimeChat } from '@/components/realtime-chat'
import { useMessagesQuery } from '@/hooks/use-messages-query'

export default function ChatPage() {
  const { data: messages } = useMessagesQuery()

  return <RealtimeChat roomName="my-chat-room" username="john_doe" messages={messages} />
}
```

----------------------------------------

TITLE: Receiving Broadcast Messages with Supabase Realtime - Kotlin
DESCRIPTION: This Kotlin example demonstrates how to listen for broadcast messages on a Supabase Realtime channel using Flows. It initializes 'test-channel', sets up a `broadcastFlow` for 'shout' events, prints each received object, and subscribes to the channel.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/broadcast.mdx#_snippet_8

LANGUAGE: kotlin
CODE:
```
val myChannel = supabase.channel("test-channel")

/ Listen for broadcast messages
val broadcastFlow: Flow<JsonObject> = myChannel
    .broadcastFlow<JsonObject>("shout") // Listen for "shout". Can be "*" to listen to all events
    .onEach { println(it) }
    .launchIn(yourCoroutineScope) // you can also use .collect { }

myChannel.subscribe()
```

----------------------------------------

TITLE: Install Supabase SSR Package for Next.js
DESCRIPTION: Installs the `@supabase/ssr` package, which provides functionalities specifically designed for integrating Supabase server-side authentication with Next.js applications, enabling cookie-based session management.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-nextjs.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
npm install @supabase/ssr
```

----------------------------------------

TITLE: Create 'todos' table in Supabase
DESCRIPTION: Set up a new table named 'todos' with an auto-incrementing ID and a text column for tasks within your Supabase database.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/postgres-changes.mdx#_snippet_0

LANGUAGE: sql
CODE:
```
-- Create a table called "todos"
-- with a column to store tasks.
create table todos (
  id serial primary key,
  task text
);
```

----------------------------------------

TITLE: Create File Listing Page with Floating Action Button (React Native)
DESCRIPTION: This snippet creates a React Native page to display a user's files from Supabase Storage and includes a Floating Action Button (FAB) to initiate an image picker. It uses `useEffect` to load files upon user authentication and `useState` to manage the list of `FileObject`s. The `loadImages` function fetches files from the 'files' bucket using the user's ID as the folder name, preparing the UI for file display.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-08-01-react-native-storage.mdx#_snippet_8

LANGUAGE: tsx
CODE:
```
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'}
import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useAuth } from '../../provider/AuthProvider'
import * as FileSystem from 'expo-file-system'
import { decode } from 'base64-arraybuffer'
import { supabase } from '../../config/initSupabase'
import { FileObject } from '@supabase/storage-js'

const list = () => {
  const { user } = useAuth()
  const [files, setFiles] = useState<FileObject[]>([])

  useEffect(() => {
    if (!user) return

    // Load user images
    loadImages()
  }, [user])

  const loadImages = async () => {
    const { data } = await supabase.storage.from('files').list(user!.id)
    if (data) {
      setFiles(data)
    }
  }

  const onSelectImage = async () => {
    // TODO
  }

  return (
    <View style={styles.container}>
      {/* FAB to add images */}
      <TouchableOpacity onPress={onSelectImage} style={styles.fab}>
        <Ionicons name="camera-outline" size={30} color={'#fff'} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#151515',
  },
  fab: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 40,
    right: 30,
    height: 70,
    backgroundColor: '#2b825b',
    borderRadius: 100,
  },
})

export default list
```

----------------------------------------

TITLE: Import Location Data into Supabase Postgres
DESCRIPTION: Imports the generated SQL file (places.sql) into the Supabase Postgres database using psql. Users need to replace placeholders with their actual project credentials found in the Supabase Dashboard.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-06-26-postgis-generate-vector-tiles.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
psql -h aws-0-us-west-1.pooler.supabase.com -p 5432 -d postgres -U postgres.project-ref < places.sql
```

----------------------------------------

TITLE: RealtimeAvatarStack Component Props
DESCRIPTION: Defines the properties available for the `RealtimeAvatarStack` React component, including their types, default values, and descriptions.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/ui-library/content/docs/react/realtime-avatar-stack.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
RealtimeAvatarStack Component Props:
  roomName:
    Type: string
    Default: null
    Description: The name of the Supabase Realtime room to connect to
```

----------------------------------------

TITLE: Fetch Data Server-Side in Next.js Server Components
DESCRIPTION: This snippet demonstrates how to pre-fetch data on the server using `prefetchQuery` from `@supabase-cache-helpers/postgrest-react-query` within a Next.js Server Component. It initializes a `QueryClient` and uses `dehydrate` with `HydrationBoundary` to pass the pre-fetched data to client components, ensuring data is available immediately upon render.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-12-react-query-nextjs-app-router-cache-helpers.mdx#_snippet_9

LANGUAGE: TSX
CODE:
```
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { prefetchQuery } from '@supabase-cache-helpers/postgrest-react-query'
import useSupabaseServer from '@/utils/supabase-server'
import { cookies } from 'next/headers'
import Country from '../country'
import { getCountryById } from '@/queries/get-country-by-id'

export default async function CountryPage({ params }: { params: { id: number } }) {
  const queryClient = new QueryClient()
  const cookieStore = cookies()
  const supabase = useSupabaseServer(cookieStore)

  await prefetchQuery(queryClient, getCountryById(supabase, params.id))

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Country id={params.id} />
    </HydrationBoundary>
  )
}
```

----------------------------------------

TITLE: Add Ktor Client Engine Dependency to Gradle/Maven
DESCRIPTION: This snippet shows how to add a Ktor client engine dependency to your project's build file. It provides examples for Gradle (Kotlin DSL and Groovy) and Maven (XML). Remember to replace `[engine]` with the specific engine name and `KTOR_VERSION` with the appropriate Ktor version. Some engines may not support WebSockets, which is crucial for the Realtime module.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/docs/ref/kotlin/installing.mdx#_snippet_1

LANGUAGE: kotlin
CODE:
```
implementation("io.ktor:ktor-client-[engine]:KTOR_VERSION")
```

LANGUAGE: groovy
CODE:
```
implementation 'io.ktor:ktor-client-[engine]:KTOR_VERSION'
```

LANGUAGE: xml
CODE:
```
<dependency>
    <groupId>io.ktor</groupId>
    <artifactId>ktor-client-[engine]</artifactId>
    <version>KTOR_VERSION</version>
</dependency>
```

----------------------------------------

TITLE: Simplify RLS Policy using Custom JWT Check Function
DESCRIPTION: This SQL snippet demonstrates how to simplify restrictive RLS policies by calling the previously defined `public.is_supabase_or_firebase_project_jwt()` function. This approach makes policies more concise and easier to manage, especially when applied across numerous tables, Storage buckets, or Realtime channels.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/third-party/firebase-auth.mdx#_snippet_4

LANGUAGE: sql
CODE:
```
create policy "Restrict access to correct Supabase and Firebase projects"
  on table_name
  as restrictive
  to authenticated
  using ((select public.is_supabase_or_firebase_project_jwt()) is true);
```

----------------------------------------

TITLE: Creating Postgres Role Hierarchy with Inheritance
DESCRIPTION: Demonstrates how to create a child role that inherits permissions from a parent role. This simplifies permission management by allowing permissions defined at a higher level to automatically apply to all child roles.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/roles.mdx#_snippet_3

LANGUAGE: sql
CODE:
```
create role "child_role_name" inherit "parent_role_name";
```

----------------------------------------

TITLE: Alternative GraphQL Query Using Built-in Collection Filter
DESCRIPTION: This GraphQL query provides an alternative method to achieve the same result as the custom SQL function. It uses the default `accountCollection` field with an `ilike` filter on the `email` field to find accounts matching '%foo.com' and retrieves the first two results.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-12-12-pg-graphql-postgres-functions.mdx#_snippet_8

LANGUAGE: GraphQL
CODE:
```
query {
  accountCollection(filter: { email: { ilike: "%foo.com" } }, first: 2) {
    edges {
      node {
        id
        email
      }
    }
  }
}
```

----------------------------------------

TITLE: Realtime Chat with Initial Messages (TSX)
DESCRIPTION: Illustrates how to pre-populate the chat interface with existing messages by passing an array of `ChatMessage` objects to the `messages` prop, typically fetched from a data source.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/ui-library/content/docs/tanstack/realtime-chat.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { RealtimeChat } from '@/components/realtime-chat'
import { useMessagesQuery } from '@/hooks/use-messages-query'

export default function ChatPage() {
  const { data: messages } = useMessagesQuery()

  return <RealtimeChat roomName="my-chat-room" username="john_doe" messages={messages} />
}
```

----------------------------------------

TITLE: Enable or Disable pg_hashids Extension
DESCRIPTION: This snippet demonstrates how to enable the 'pg_hashids' extension in PostgreSQL using SQL, and how to disable it. It's recommended to create the extension within a separate schema like 'extensions' to keep the 'public' schema clean.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pg_hashids.mdx#_snippet_0

LANGUAGE: SQL
CODE:
```
-- Enable the "pg_hashids" extension
create extension pg_hashids with schema extensions;

-- Disable the "pg_hashids" extension
drop extension if exists pg_hashids;
```

----------------------------------------

TITLE: SQL RLS Policy: Allow Authenticated Users to Read Messages on Specific Topic
DESCRIPTION: This SQL RLS policy demonstrates how to restrict read access to the `realtime.messages` table for authenticated users, allowing them to receive broadcasts only from a specific channel topic, 'room-1', by utilizing the `realtime.topic()` helper function.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/authorization.mdx#_snippet_0

LANGUAGE: SQL
CODE:
```
create policy "authenticated can read all messages on topic"
on "realtime"."messages"
for select
to authenticated
using (
  (select realtime.topic()) = 'room-1'
);
```

----------------------------------------

TITLE: Install Supabase React Auth Helpers
DESCRIPTION: Installs the `@supabase/auth-helpers-react` package, which provides components and hooks for React-based frameworks to manage user authentication.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs-pages.mdx#_snippet_1

LANGUAGE: sh
CODE:
```
npm install @supabase/auth-helpers-react
```

----------------------------------------

TITLE: Controlling Dialog Centering (TSX)
DESCRIPTION: Demonstrates how to disable the default centering behavior of the DialogContent component by passing `centered={false}` to its props, allowing for custom positioning.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/dialog.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
<Dialog>
  <ContextMenuTrigger>Click here</ContextMenuTrigger>
  <DialogContent centered={false}>
    {/*
     * Content in here
     */}
  </DialogContent>
</Dialog>
```

----------------------------------------

TITLE: Grant CREATE Privilege on Public Schema to Junior Dev
DESCRIPTION: Illustrates how the 'postgres' user, acting as an administrator, grants the 'CREATE' privilege on the 'public' schema to the 'junior_dev' role. This resolves the previous 'permission denied' error, allowing 'junior_dev' to create objects.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-04-11-postgres-roles-and-privileges.mdx#_snippet_8

LANGUAGE: sql
CODE:
```
# as postgres
postgres=> grant create on schema public to junior_dev;
GRANT
```

----------------------------------------

TITLE: Example Daily Health Tracking Data in JSON
DESCRIPTION: This JSON object represents a single day's health tracking data, including weight, notes, and arrays for food, water, and exercise entries. It demonstrates a hierarchical, document-like structure suitable for NoSQL approaches, which can be stored and queried efficiently in PostgreSQL.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-11-24-sql-or-nosql-both-with-postgresql.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "date": "2022-01-01",
  "weight": 172.6,
  "notes": "This new diet is awesome!",
  "food": [
    { "title": "Apple", "calories": 72, "meal": "Breakfast" },
    { "title": "Oatmeal", "calories": 146, "meal": "Breakfast" },
    { "title": "Sandwich", "calories": 445, "meal": "Lunch" },
    { "title": "Chips", "calories": 280, "meal": "Lunch" },
    { "title": "Cookie", "calories": 108, "meal": "Lunch" },
    { "title": "Mixed Nuts", "calories": 175, "meal": "Snack" },
    { "title": "Pasta/Sauce", "calories": 380, "meal": "Dinner" },
    { "title": "Garlic Bread", "calories": 200, "meal": "Dinner" },
    { "title": "Broccoli", "calories": 32, "meal": "Dinner" }
  ],
  "water": [
    { "time": "08:15", "qty": 1 },
    { "time": "09:31", "qty": 1 },
    { "time": "10:42", "qty": 2 },
    { "time": "10:42", "qty": 2 },
    { "time": "12:07", "qty": 1 },
    { "time": "14:58", "qty": 1 },
    { "time": "17:15", "qty": 1 },
    { "time": "18:40", "qty": 1 },
    { "time": "19:05", "qty": 1 }
  ],
  "exercise": [{ "time": "11:02", "duration": 0.5, "type": "Walking" }]
}
```

----------------------------------------

TITLE: Reset HCaptcha challenge
DESCRIPTION: Invokes the `resetCaptcha()` method on the `HCaptcha` component instance via its ref, clearing the current CAPTCHA challenge after a sign-up attempt.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-captcha.mdx#_snippet_6

LANGUAGE: jsx
CODE:
```
captcha.current.resetCaptcha()
```

----------------------------------------

TITLE: Send JSON response
DESCRIPTION: Constructs and returns a new HTTP Response object from a Cloudflare Worker. It serializes the provided data to a JSON string and sets the 'Content-Type' header to 'application/json', ensuring the browser correctly interprets the response.
SOURCE: https://github.com/supabase/supabase/blob/master/examples/with-cloudflare-workers/README.md#_snippet_6

LANGUAGE: javascript
CODE:
```
return new Response(JSON.stringify(data), {
  headers: {
    "Content-Type": "application/json"
  }
});
```

----------------------------------------

TITLE: Skeleton Component
DESCRIPTION: Use to show a placeholder while content is loading.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/public/llms.txt#_snippet_17

LANGUAGE: APIDOC
CODE:
```
Skeleton:
  Description: Use to show a placeholder while content is loading.
  Type: UI Component
```

----------------------------------------

TITLE: Supabase Auth: Magic Link Email Template for PKCE Flow
DESCRIPTION: This HTML snippet provides an example of how to customize the Magic Link email template to include the `token_hash`. This hash is essential for implementing the PKCE (Proof Key for Code Exchange) flow, allowing the client to exchange it for a session upon redirection.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-email-passwordless.mdx#_snippet_1

LANGUAGE: HTML
CODE:
```
<h2>Magic Link</h2>

<p>Follow this link to login:</p>
<p><a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email">Log In</a></p>
```

----------------------------------------

TITLE: Supabase Client Libraries for Godot Engine (GDScript)
DESCRIPTION: Lists community-maintained client libraries for Supabase services in GDScript, covering the main Supabase client, Postgrest, GoTrue, Realtime, Storage, and Functions.
SOURCE: https://github.com/supabase/supabase/blob/master/i18n/README.ru.md#_snippet_6

LANGUAGE: APIDOC
CODE:
```
GDScript Libraries:
- supabase-gdscript: https://github.com/supabase-community/godot-engine.supabase
- postgrest-gdscript: https://github.com/supabase-community/postgrest-gdscript
- gotrue-gdscript: https://github.com/supabase-community/gotrue-gdscript
- realtime-gdscript: https://github.com/supabase-community/realtime-gdscript
- storage-gdscript: https://github.com/supabase-community/storage-gdscript
- functions-gdscript: https://github.com/supabase-community/functions-gdscript
```

----------------------------------------

TITLE: Install Resizable Component via shadcn-ui CLI
DESCRIPTION: Use the shadcn-ui CLI to quickly add the Resizable component and its dependencies to your project.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/design-system/content/docs/components/resizable.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx shadcn-ui@latest add resizable
```

----------------------------------------

TITLE: React Components for 3D Particle Visualization
DESCRIPTION: Implements `ParticlesCanvas` and `Particle` React components using `@react-three/fiber` to render interactive 3D particle effects. `ParticlesCanvas` sets up the 3D scene and iterates over particles, while `Particle` defines individual particle geometry, material, and animation logic based on configuration from `useParticlesConfig`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-08-04-interactive-constellation-threejs-react-three-fiber.mdx#_snippet_18

LANGUAGE: jsx
CODE:
```
import React, { useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { AdditiveBlending } from 'three'
import useParticlesConfig from './hooks/useParticlesConfig'

const ParticlesCanvas = () => {
  if (typeof window === 'undefined') return null
  const { config, particles } = useParticlesConfig()

  const Geometry = useMemo(
    () => () => <circleGeometry args={[config.particlesSize, config.particlesSides]} />,
    []
  )

  const Material = () =>
    useMemo(
      () => (
        <meshStandardMaterial
          color={config.color}
          blending={config.particlesBlending ? AdditiveBlending : undefined}
        />
      ),
      []
    )

  return (
    <div style={{ width: 100vw, height: 100vh, background: "#000000" }}>
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 75, position: [0, 0, 500] }}
      >
        <ambientLight intensity={config.lightIntensity} />
        <group>
          {particles?.map((particle, index) => (
            <Particle
              key={particle.username}
            >
              <Geometry />
              <Material />
            </Particle>
          ))}
        </group>
      </Canvas>
    </div>
  )
}

const Particle = ({ children }: Props) => {
  const particle = useRef(null)

  const pathOffset =
    Math.pow(
      Math.random() * config.xRandomnessShape,
      config.xRandomness - config.xRandomness / 2
    ) * config.xThickness

  const verticalRandomness = Math.random() * (config.yThickness - 1) + 1 - config.yThickness / 2

  const speed = Math.random() * (config.min_speed - config.max_speed) + config.max_speed

  const circumference = (config.widthRadius * Math.PI * 2) / 100
  const delayOffsetFactor = 100
  const delayOffset = Math.random() * delayOffsetFactor

  useFrame(({ clock }) => {
    const timer = clock.getElapsedTime() * speed + delayOffset
    const isEven = Math.floor(timer / circumference) % 2 == 0
		// When the loop count is even, draw bottom 8 shape
    // if odd, draw top 8 shape
    particle.current.position.x = isEven
      ? Math.sin(timer) * config.widthRadius * config.widthRatio + pathOffset
      : Math.sin(timer) * config.widthRadius + pathOffset
    particle.current.position.y = isEven
      ? Math.cos(timer) * config.bottomHeightRadius -
        config.bottomHeightRadius +
```

----------------------------------------

TITLE: Create PostgreSQL Function as Superuser
DESCRIPTION: Demonstrates how to create a simple SQL function named 'add' in PostgreSQL as a superuser (postgres). This function takes two integers and returns their sum.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-04-11-postgres-roles-and-privileges.mdx#_snippet_40

LANGUAGE: sql
CODE:
```
postgres=> create function add(integer, integer)
returns integer
as 'select $1 + $2;'
language sql;
CREATE FUNCTION
```

----------------------------------------

TITLE: Defining Transferable AvatarImage Type (Swift)
DESCRIPTION: This Swift code defines an `AvatarImage` struct that conforms to `Transferable` and `Equatable`, allowing it to be used with `PhotosPicker` for importing images. It includes a `DataRepresentation` for handling image data and an extension for initializing from `Data`, along with an error enum for import failures.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-swift.mdx#_snippet_5

LANGUAGE: Swift
CODE:
```
import SwiftUI

struct AvatarImage: Transferable, Equatable {
  let image: Image
  let data: Data

  static var transferRepresentation: some TransferRepresentation {
    DataRepresentation(importedContentType: .image) { data in
      guard let image = AvatarImage(data: data) else {
        throw TransferError.importFailed
      }

      return image
    }
  }
}

extension AvatarImage {
  init?(data: Data) {
    guard let uiImage = UIImage(data: data) {
      return nil
    }

    let image = Image(uiImage: uiImage)
    self.init(image: image, data: data)
  }
}

enum TransferError: Error {
  case importFailed
}
```

----------------------------------------

TITLE: Install dat.gui library
DESCRIPTION: Installs the `dat.gui` library at a specific version using npm, a package manager for JavaScript.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-08-04-interactive-constellation-threejs-react-three-fiber.mdx#_snippet_15

LANGUAGE: bash
CODE:
```
npm install dat.gui@0.7.9
```

----------------------------------------

TITLE: Implement Player Component with Health Gauge and Collision in Flame (Dart)
DESCRIPTION: This Dart code defines the `Player` component for a Flame game, extending `PositionComponent` and incorporating `HasGameRef` and `CollisionCallbacks`. It manages whether the instance is the player or an opponent (`_isMyPlayer`), sets initial positions accordingly, and adds a `CircleHitbox` for collision detection. A nested `_Gauge` component visualizes health. The `onCollision` method handles interactions with bullets, and `getMirroredPercentPosition` calculates a mirrored position for network sharing.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-02-14-flutter-real-time-multiplayer-game.mdx#_snippet_7

LANGUAGE: dart
CODE:
```
import 'dart:async';

import 'package:flame/collisions';
import 'package:flame/components.dart';
import 'package:flame_realtime_shooting/game/bullet.dart';
import 'package:flutter/material.dart';

class Player extends PositionComponent with HasGameRef, CollisionCallbacks {
  Vector2 velocity = Vector2.zero();

  late final Vector2 initialPosition;

  Player({required bool isMe}) : _isMyPlayer = isMe;

  /// Whether it's me or the opponent
  final bool _isMyPlayer;

  static const radius = 30.0;

  @override
  Future<void>? onLoad() async {
    anchor = Anchor.center;
    width = radius * 2;
    height = radius * 2;

    final initialX = gameRef.size.x / 2;
    initialPosition = _isMyPlayer
        ? Vector2(initialX, gameRef.size.y * 0.8)
        : Vector2(initialX, gameRef.size.y * 0.2);
    position = initialPosition;

    add(CircleHitbox());
    add(_Gauge());
    await super.onLoad();
  }

  void move(Vector2 delta) {
    position += delta;
  }

  void updateHealth(double healthLeft) {
    for (final child in children) {
      if (child is _Gauge) {
        child._healthLeft = healthLeft;
      }
    }
  }

  @override
  void onCollision(Set<Vector2> intersectionPoints, PositionComponent other) {
    super.onCollision(intersectionPoints, other);
    if (other is Bullet && _isMyPlayer != other.isMine) {
      other.hasBeenHit = true;
      other.removeFromParent();
    }
  }

  /// returns the mirrored percent position of the player
  /// to be broadcasted to other clients
  Vector2 getMirroredPercentPosition() {
    final mirroredPosition = gameRef.size - position;
    return Vector2(mirroredPosition.x / gameRef.size.x,
        mirroredPosition.y / gameRef.size.y);
  }
}

class _Gauge extends PositionComponent {
  double _healthLeft = 1.0;

  @override
  FutureOr<void> onLoad() {
    final playerParent = parent;
    if (playerParent is Player) {
      width = playerParent.width;
      height = 10;
      anchor = Anchor.centerLeft;
      position = Vector2(0, 0);
    }
    return super.onLoad();
  }

  @override
  void render(Canvas canvas) {
    super.render(canvas);
    canvas.drawRect(
        Rect.fromPoints(
          const Offset(0, 0),
          Offset(width, height),
        ),
        Paint()..color = Colors.white);
    canvas.drawRect(
        Rect.fromPoints(
          const Offset(0, 0),
          Offset(width * _healthLeft, height),
        ),
        Paint()
          ..color = _healthLeft > 0.5
              ? Colors.green
              : _healthLeft > 0.25
                  ? Colors.orange
                  : Colors.red);
  }
}
```

----------------------------------------

TITLE: Supabase Verify OTP Success Session Response
DESCRIPTION: This JSON snippet shows the structure of a successful response after verifying an OTP, indicating that a user session has been created. It includes an access token, token type, expiry, refresh token, and user details.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-email-passwordless.mdx#_snippet_7

LANGUAGE: JSON
CODE:
```
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjI3MjkxNTc3LCJzdWIiOiJmYTA2NTQ1Zi1kYmI1LTQxY2EtYjk1NC1kOGUyOTg4YzcxOTEiLCJlbWFpbCI6IiIsInBob25lIjoiNjU4NzUyMjAyOSIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6InBob25lIn0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCJ9.1BqRi0NbS_yr1f6hnr4q3s1ylMR3c1vkiJ4e_N55dhM",
  "token_type": "bearer",
  "expires_in": 3600,
  "refresh_token": "LSp8LglPPvf0DxGMSj-vaQ",
  "user": {...}
}
```

----------------------------------------

TITLE: Use a custom `access_token` JWT with Supabase
DESCRIPTION: Explains the updated method for using a custom JWT `access_token` with Supabase. The 'Before' example uses `setAuth`, which is now replaced by configuring the `Authorization` header during client initialization in the 'After' example.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/docs/ref/javascript/v1/upgrade-guide.mdx#_snippet_11

LANGUAGE: ts
CODE:
```
const { user, error } = supabase.auth.setAuth(access_token)
```

LANGUAGE: ts
CODE:
```
const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY,
  {
    global: {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  }
)
```

----------------------------------------

TITLE: Serve Supabase Edge Function Locally
DESCRIPTION: Runs a specific Edge Function locally, enabling testing and debugging before redeployment.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/quickstart.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
supabase functions serve function-name
```

----------------------------------------

TITLE: Drop PostgreSQL Subscriptions and Replication Slots
DESCRIPTION: This SQL snippet provides commands to drop existing PostgreSQL subscriptions and replication slots. Dropping these is a necessary destructive action before restoring a database from a backup, as they would otherwise conflict with the restore process. Replace `<subscription>` with the actual subscription name and ensure you understand the implications of dropping replication slots.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/failed-to-restore-from-backup-all-subscriptions-and-replication-slots-must-be-dropped-before-a-backup-can-be-restored-L-rCvt.mdx#_snippet_1

LANGUAGE: SQL
CODE:
```
DROP SUBSCRIPTION <subscription>;

SELECT pg_drop_replication_slot(slot_name);
```

----------------------------------------

TITLE: Extract Vercel Postgres Connection URL
DESCRIPTION: Shows the specific database connection URL part extracted from the full `psql` command. This string is used to set environment variables for migration.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/migrating-to-supabase/vercel-postgres.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
"postgres://default:xxxxxxxxxxxx@yy-yyyyy-yyyyyy-yyyyyyy.us-west-2.aws.neon.tech:5432/verceldb?sslmode=require"
```

----------------------------------------

TITLE: Verify OTP with Supabase Auth (Next.js & Express)
DESCRIPTION: Demonstrates how to verify an OTP (One-Time Password) using Supabase authentication in both a Next.js environment (server-side) and an Express.js application. It handles token hash and type, redirecting on success or error.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/passwords.mdx#_snippet_10

LANGUAGE: JavaScript (Next.js)
CODE:
```
},
        setAll(key, value, options) {
          headers.append('Set-Cookie', serializeCookieHeader(key, value, options))
        },
      },
    })

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })

    if (!error) {
      return redirect(next, { headers })
    }
  }

  // return the user to an error page with instructions
  return redirect('/auth/auth-code-error', { headers })
}
```

LANGUAGE: JavaScript (Express)
CODE:
```
// The client you created from the Server-Side Auth instructions
const { createClient } = require("./lib/supabase")
...
app.get("/auth/confirm", async function (req, res) {
  const token_hash = req.query.token_hash
  const type = req.query.type
  const next = req.query.next ?? "/"

  if (token_hash && type) {
    const supabase = createClient({ req, res })
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      res.redirect(303, `/${next.slice(1)}`)
    }
  }

  // return the user to an error page with some instructions
  res.redirect(303, '/auth/auth-code-error')
})
```

----------------------------------------

TITLE: Grant Privilege with Grant Option
DESCRIPTION: This snippet shows how to grant `SELECT` privilege to the `postgres` role on `public.apps` table, including the `WITH GRANT OPTION`. This allows `postgres` to further grant this `SELECT` privilege to other roles, even though `postgres` is not the table owner.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-04-11-postgres-roles-and-privileges.mdx#_snippet_19

LANGUAGE: SQL
CODE:
```
postgres=> grant select on public.apps to postgres with grant option;
GRANT
```

----------------------------------------

TITLE: Specify Content Type During File Upload to Supabase Storage
DESCRIPTION: This code demonstrates how to explicitly set the content type of an asset when uploading it to Supabase Storage. By default, Storage infers the content type from the file extension, but the `contentType` option allows overriding this behavior, ensuring the asset is correctly identified, for example, as an 'image/jpeg'.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/uploads/standard-uploads.mdx#_snippet_2

LANGUAGE: JavaScript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const file = new Blob()

// ---cut---
// Create Supabase client
const supabase = createClient('your_project_url', 'your_supabase_api_key')

await supabase.storage.from('bucket_name').upload('file_path', file, {
  contentType: 'image/jpeg',
})
```

LANGUAGE: Dart
CODE:
```
await supabase.storage.from('bucket_name').upload(
      'file_path',
      file,
      fileOptions: const FileOptions(contentType: 'image/jpeg'),
    );
```

LANGUAGE: Swift
CODE:
```
import Supabase

// Create Supabase client
let supabase = SupabaseClient(supabaseURL: URL(string: "your_project_url")!, supabaseKey: "your_supabase_api_key")

try await supabase.storage.from("bucket_name")
  .upload(
    path: "file_path",
    file: file,
    options: FileOptions(
      contentType: "image/jpeg"
    )
  )
```

LANGUAGE: Kotlin
CODE:
```
supabase.storage.from("bucket_name").upload("file_path", bytes) {
    contentType = ContentType.Image.JPEG
}
```

LANGUAGE: Python
CODE:
```
response = supabase.storage.from_('bucket_name').upload('file_path', file, {
  'content-type': 'image/jpeg',
})
```

----------------------------------------

TITLE: Initialize SvelteKit Project with TypeScript
DESCRIPTION: This command initializes a new SvelteKit application named `supabase-sveltekit` using the SvelteKit Skeleton Project template, configured for TypeScript. It also includes navigating into the new directory and installing initial dependencies.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-sveltekit.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm create svelte@latest supabase-sveltekit
cd supabase-sveltekit
npm install
```

----------------------------------------

TITLE: Create Supabase PL/pgSQL Utility Functions
DESCRIPTION: This snippet defines a `util` schema and three PL/pgSQL functions: `util.project_url()` to retrieve the Supabase project URL from Vault, `util.invoke_edge_function()` to make authenticated HTTP POST requests to Edge Functions, and `util.clear_column()` to clear a specified column on update using a trigger.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/automatic-embeddings.mdx#_snippet_1

LANGUAGE: sql
CODE:
```
-- Schema for utility functions
create schema util;

-- Utility function to get the Supabase project URL (required for Edge Functions)
create function util.project_url()
returns text
language plpgsql
security definer
as $$
declare
  secret_value text;
begin
  -- Retrieve the project URL from Vault
  select decrypted_secret into secret_value from vault.decrypted_secrets where name = 'project_url';
  return secret_value;
end;
$$;

-- Generic function to invoke any Edge Function
create or replace function util.invoke_edge_function(
  name text,
  body jsonb,
  timeout_milliseconds int = 5 * 60 * 1000  -- default 5 minute timeout
)
returns void
language plpgsql
as $$
declare
  headers_raw text;
  auth_header text;
begin
  -- If we're in a PostgREST session, reuse the request headers for authorization
  headers_raw := current_setting('request.headers', true);

  -- Only try to parse if headers are present
  auth_header := case
    when headers_raw is not null then
      (headers_raw::json->>'authorization')
    else
      null
  end;

  -- Perform async HTTP request to the edge function
  perform net.http_post(
    url => util.project_url() || '/functions/v1/' || name,
    headers => jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', auth_header
    ),
    body => body,
    timeout_milliseconds => timeout_milliseconds
  );
end;
$$;

-- Generic trigger function to clear a column on update
create or replace function util.clear_column()
returns trigger
language plpgsql as $$
declare
    clear_column text := TG_ARGV[0];
begin
    NEW := NEW #= hstore(clear_column, NULL);
    return NEW;
end;
$$;
```

----------------------------------------

TITLE: Broadcasting Messages from Supabase Database with SQL
DESCRIPTION: This SQL snippet demonstrates how to send real-time broadcast messages directly from the Supabase database using the `realtime.send()` function. It allows specifying a JSONB payload, event name, topic, and a public/private flag for the broadcast.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/broadcast.mdx#_snippet_15

LANGUAGE: SQL
CODE:
```
select
  realtime.send(
    jsonb_build_object('hello', 'world'), -- JSONB Payload
    'event', -- Event name
    'topic', -- Topic
    false -- Public / Private flag
  );
```

----------------------------------------

TITLE: Apply Custom Inline CSS Styles to Supabase Auth UI Elements in React
DESCRIPTION: This example demonstrates how to apply custom inline CSS styles directly to individual elements of the Supabase Auth UI component. The 'appearance.style' property allows for direct style object definitions, providing granular control over element presentation.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/auth-ui.mdx#_snippet_10

LANGUAGE: js
CODE:
```
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'

const supabase = createClient('<INSERT PROJECT URL>', '<INSERT PROJECT ANON API KEY>')

const App = () => (
  <Auth
    supabaseClient={supabase}
    appearance={{
      style: {
        button: { background: 'red', color: 'white' },
        anchor: { color: 'blue' },
        //..
      },
    }}
  />
)
```

----------------------------------------

TITLE: Enable Supabase Project SSL Enforcement via Management API
DESCRIPTION: Enables SSL enforcement for the database connections of a Supabase project using the Management API. Requires an access token, project reference, and a JSON payload.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/ssl-enforcement.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
curl -X PUT "https://api.supabase.com/v1/projects/$PROJECT_REF/ssl-enforcement" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "requestedConfig": {
      "database": true
    }
  }'
```

----------------------------------------

TITLE: Supabase Auth Error Definitions
DESCRIPTION: Defines common HTTP status codes and their corresponding error messages related to authentication failures, specifically the 'invalid claim: missing sub' error, which indicates an issue with the JWT's 'sub' claim.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/auth-error-401-invalid-claim-missing-sub--AFwMR.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
Errors:
  - http_status_code: 401
    message: "invalid claim: missing sub"
  - http_status_code: 403
    message: "invalid claim: missing sub"
```

----------------------------------------

TITLE: Enable Solana Web3 Wallet Provider in Supabase CLI
DESCRIPTION: This TOML configuration snippet enables the Solana Web3 wallet provider within your Supabase project's `supabase/config.toml` file, allowing users to authenticate using Solana wallets.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-web3.mdx#_snippet_0

LANGUAGE: toml
CODE:
```
[auth.web3.solana]
enabled = true
```

----------------------------------------

TITLE: MFA Verification Hook Output Payload Example
DESCRIPTION: Example JSON payload to be returned by the MFA verification hook, indicating the decision (e.g., 'reject') and an optional message to the user.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/mfa-verification-hook.mdx#_snippet_4

LANGUAGE: json
CODE:
```
{
  "decision": "reject",
  "message": "You have exceeded maximum number of MFA attempts."
}
```

----------------------------------------

TITLE: Add a new column to the employees table
DESCRIPTION: Within the newly created migration file, add the SQL code to alter the 'employees' table. This specific SQL statement will add a 'department' column with a default value.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/deployment/database-migrations.mdx#_snippet_4

LANGUAGE: sql
CODE:
```
alter table if exists public.employees
add department text default 'Hooli';
```

----------------------------------------

TITLE: Configure Next.js to Use Supabase Custom Image Loader
DESCRIPTION: This configuration snippet for `next.config.js` instructs Next.js to use a custom image loader. It sets the `loader` property to 'custom' and specifies the path to the `supabase-image-loader.js` file, enabling Supabase-powered image optimization for Next.js applications.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/serving/image-transformations.mdx#_snippet_5

LANGUAGE: js
CODE:
```
module.exports = {
  images: {
    loader: 'custom',
    loaderFile: './supabase-image-loader.js',
  },
}
```

----------------------------------------

TITLE: Management API: Create Edge Function Secret
DESCRIPTION: API call to create new secrets for a Supabase project using the Management API. This requires an access token and the project reference, and secrets are provided in a JSON array.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/secrets.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
export SUPABASE_ACCESS_TOKEN="your-access-token"
export PROJECT_REF="your-project-ref"

curl -X POST "https://api.supabase.com/v1/projects/$PROJECT_REF/secrets" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '[
    {
    "name": "MY_SECRET_NAME",
    "value": "my-secret-value"
  }
]'
```

----------------------------------------

TITLE: Performing Data Mutations with Supabase and Next.js Server Actions
DESCRIPTION: This snippet shows how to combine data fetching and mutation logic within a Next.js Server Component using Server Actions. It demonstrates inserting data into a Supabase table (`supabase.from('...').insert()`) via a server-side function, co-located with the component that fetches data.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-11-01-supabase-is-now-compatible-with-nextjs-14.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
export default async function Page() {
  const { data } = await supabase.from('...').select()

  const createNote = async () => {
    'use server'
    await supabase.from('...').insert({...})
  }

  return ...
}
```

----------------------------------------

TITLE: Supabase CLI: Connect to local Postgres and inspect bloat
DESCRIPTION: Demonstrates how to connect the Supabase CLI to any Postgres database, including a local instance, by providing a connection string via the `--db-url` flag. This example runs the `bloat` inspection command.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/inspect.mdx#_snippet_1

LANGUAGE: Shell
CODE:
```
supabase --db-url postgresql://postgres:postgres@localhost:5432/postgres inspect db bloat
```

----------------------------------------

TITLE: Install HCaptcha React component
DESCRIPTION: Installs the `@hcaptcha/react-hcaptcha` package as a project dependency for integrating HCaptcha into a React application.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-captcha.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npm install @hcaptcha/react-hcaptcha
```

----------------------------------------

TITLE: Authenticate with Brave Wallet using `window.braveSolana`
DESCRIPTION: For non-standard Solana wallets or when disambiguating between multiple wallets, you can explicitly provide the wallet object. This example shows how to authenticate a user using Brave Wallet's `window.braveSolana` object.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-web3.mdx#_snippet_3

LANGUAGE: typescript
CODE:
```
const { data, error } = await supabase.auth.signInWithWeb3({
  chain: 'solana',
  statement: 'I accept the Terms of Service at https://example.com/tos',
  wallet: window.braveSolana,
})
```

----------------------------------------

TITLE: Supabase JavaScript Client for Realtime Broadcast Subscription
DESCRIPTION: Demonstrates how to use the Supabase JavaScript client to subscribe to real-time broadcast events. It initializes the client, sets authentication for Realtime Authorization, creates a private channel for a specific topic, and listens for 'INSERT', 'UPDATE', and 'DELETE' broadcast events.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/subscribing-to-database-changes.mdx#_snippet_3

LANGUAGE: javascript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('your_project_url', 'your_supabase_api_key')

// ---cut---
const gameId = 'id'
await supabase.realtime.setAuth() // Needed for Realtime Authorization
const changes = supabase
  .channel(`topic:${gameId}`, {
    config: { private: true },
  })
  .on('broadcast', { event: 'INSERT' }, (payload) => console.log(payload))
  .on('broadcast', { event: 'UPDATE' }, (payload) => console.log(payload))
  .on('broadcast', { event: 'DELETE' }, (payload) => console.log(payload))
  .subscribe()
```

----------------------------------------

TITLE: Manually Run Full Vacuum on a Postgres Table
DESCRIPTION: This SQL command executes a `VACUUM FULL` operation on a specified Postgres table. This immediately reclaims physical space used by dead tuples, but it will lock the table until the operation completes and can temporarily increase resource utilization. Use with caution, especially on production systems.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/database-size.mdx#_snippet_3

LANGUAGE: sql
CODE:
```
vacuum full <table name>;
```

----------------------------------------

TITLE: Enable and Disable uuid-ossp Extension in PostgreSQL
DESCRIPTION: This snippet demonstrates the SQL commands to enable the `uuid-ossp` extension, optionally specifying a schema like `extensions` to keep the `public` schema clean. It also shows how to disable the extension using `drop extension`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/uuid-ossp.mdx#_snippet_0

LANGUAGE: SQL
CODE:
```
-- Example: enable the "uuid-ossp" extension
create extension "uuid-ossp" with schema extensions;

-- Example: disable the "uuid-ossp" extension
drop extension if exists "uuid-ossp";
```

----------------------------------------

TITLE: Download Supabase Edge Function
DESCRIPTION: Downloads the code for a specific Edge Function from your Supabase project to your local machine, allowing for local edits.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/quickstart.mdx#_snippet_2

LANGUAGE: bash
CODE:
```
supabase functions download function-name
```

----------------------------------------

TITLE: Example Input for Custom Access Token Hook (JSON)
DESCRIPTION: This JSON snippet illustrates a sample input payload for the custom access token hook, detailing the `user_id`, existing `claims`, and the `authentication_method` used. It shows typical values for required and optional claims that can be modified or extended by the hook.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/custom-access-token-hook.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "user_id": "8ccaa7af-909f-44e7-84cb-67cdccb56be6",
  "claims": {
    "aud": "authenticated",
    "exp": 1715690221,
    "iat": 1715686621,
    "sub": "8ccaa7af-909f-44e7-84cb-67cdccb56be6",
    "email": "",
    "phone": "",
    "app_metadata": {},
    "user_metadata": {},
    "role": "authenticated",
    "aal": "aal1",
    "amr": [ { "method": "anonymous", "timestamp": 1715686621 } ],
    "session_id": "4b938a09-5372-4177-a314-cfa292099ea2",
    "is_anonymous": true
  },
  "authentication_method": "anonymous"
}
```

----------------------------------------

TITLE: Generate RedwoodJS Avatar Component Files
DESCRIPTION: This command uses the RedwoodJS CLI to scaffold a new 'Avatar' component, creating its main file, test file, and storybook file. It's the first step in setting up the profile photo feature.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-redwoodjs.mdx#_snippet_17

LANGUAGE: bash
CODE:
```
yarn rw g component avatar
  ✔ Generating component files...
    ✔ Successfully wrote file `./web/src/components/Avatar/Avatar.test.js`
    ✔ Successfully wrote file `./web/src/components/Avatar/Avatar.stories.js`
    ✔ Successfully wrote file `./web/src/components/Avatar/Avatar.js`
```

----------------------------------------

TITLE: PostgreSQL: Capture and Modify Errors with `exception when others`
DESCRIPTION: Demonstrates how to use the `exception when others then` block in PL/pgSQL to catch and handle any errors that occur within a function. It shows how to re-raise a custom error message, including the original SQL error message (`sqlerrm`), providing more informative debugging.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/functions.mdx#_snippet_16

LANGUAGE: sql
CODE:
```
create function error_example()
returns void
language plpgsql
as $$
begin
  -- fails: cannot read from nonexistent table
  select * from table_that_does_not_exist;

  exception
      when others then
          raise exception 'An error occurred in function <function name>: %', sqlerrm;
end;
$$;
```

----------------------------------------

TITLE: Test Column Existence and Primary Key Status with pgTAP
DESCRIPTION: This `pgTAP` SQL example tests two properties of a column: its existence within a specified table ('profiles', 'id') and whether it is designated as a primary key. The test plan expects two assertions and runs within a transaction.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pgtap.mdx#_snippet_2

LANGUAGE: sql
CODE:
```
begin;
select plan( 2 );

select has_column( 'profiles', 'id' ); -- test that the "id" column exists in the "profiles" table
select col_is_pk( 'profiles', 'id' ); -- test that the "id" column is a primary key

select * from finish();
rollback;
```

LANGUAGE: APIDOC
CODE:
```
has_column(): Tests whether or not a column exists in a given table, view, materialized view or composite type.
col_is_pk(): Tests whether the specified column or columns in a table is/are the primary key for that table.
```

----------------------------------------

TITLE: Configure VS Code Deno Language Server for Subfolders
DESCRIPTION: This JSON configuration for `.vscode/settings.json` enables the Deno language server specifically for the `./supabase/functions` path and sets the import map location, allowing VS Code's built-in JavaScript/TypeScript server for other files.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/local-development.mdx#_snippet_0

LANGUAGE: json
CODE:
```
{
  "deno.enablePaths": ["./supabase/functions"],
  "deno.importMap": "./supabase/functions/import_map.json"
}
```

----------------------------------------

TITLE: Supabase Auth UI Localization Variables Reference
DESCRIPTION: This API documentation provides a comprehensive list of customizable label tags available for various authentication flows within the Supabase Auth UI. Each section details the `Label Tag` (the variable name) and its `Default Label` for specific UI elements, allowing developers to override these values using the `localization.variables` property.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/auth-ui.mdx#_snippet_12

LANGUAGE: APIDOC
CODE:
```
Sign Up Labels:
  email_label: Email address
  password_label: Create a Password
  email_input_placeholder: Your email address
  password_input_placeholder: Your password
  button_label: Sign up
  loading_button_label: Signing up ...
  social_provider_text: Sign in with {{provider}}
  link_text: Don't have an account? Sign up
  confirmation_text: Check your email for the confirmation link

Sign In Labels:
  email_label: Email address
  password_label: Your Password
  email_input_placeholder: Your email address
  password_input_placeholder: Your password
  button_label: Sign in
  loading_button_label: Signing in ...
  social_provider_text: Sign in with {{provider}}
  link_text: Already have an account? Sign in

Magic Link Labels:
  email_input_label: Email address
  email_input_placeholder: Your email address
  button_label: Sign in
  loading_button_label: Signing in ...
  link_text: Send a magic link email
  confirmation_text: Check your email for the magic link

Forgotten Password Labels:
  email_label: Email address
  password_label: Your Password
  email_input_placeholder: Your email address
  button_label: Send reset password instructions
  loading_button_label: Sending reset instructions ...
  link_text: Forgot your password?
  confirmation_text: Check your email for the password reset link

Update Password Labels:
  password_label: New Password
  password_input_placeholder: Your new password
  button_label: Update password
  loading_button_label: Updating password ...
  confirmation_text: Your password has been updated

Verify OTP Labels:
  email_input_label: Email address
  email_input_placeholder: Your email address
  phone_input_label: Phone number
  phone_input_placeholder: Your phone number
  token_input_label: Token
  token_input_placeholder: Your OTP token
  button_label: Verify token
  loading_button_label: Signing in ...
```

----------------------------------------

TITLE: Creating RLS Policy for UPDATE with USING and WITH CHECK
DESCRIPTION: Demonstrates how to create a comprehensive Row-Level Security (RLS) policy for `UPDATE` operations, combining both `USING` to filter rows that can be updated and `WITH CHECK` to validate the new values being added to the table. This ensures only authorized users can modify their own data and that modified data adheres to specific rules.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/rls-simplified-BJTcS8.mdx#_snippet_3

LANGUAGE: sql
CODE:
```
create policy "Allow user to edit their stuff"
on "public"."<SOME TABLE NAME>"
as RESTRICTIVE
for UPDATE
to authenticated
using (
  (select auth.uid()) = user_id
)
with check(
  (select auth.uid()) = user_id
);
```

----------------------------------------

TITLE: Performing Type-Safe JSON Queries with Supabase (TypeScript)
DESCRIPTION: This example shows how TypeScript automatically infers the correct types when querying JSON columns using Supabase's `select` method. It demonstrates accessing nested JSON properties and highlights how `->` and `->>` operators are handled for type inference.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/rest/generating-types.mdx#_snippet_11

LANGUAGE: TypeScript
CODE:
```
const res = await client.from('your_table').select('data->bar->baz, data->en, data->bar')

if (res.data) {
  console.log(res.data)
  // TypeScript infers the shape of your JSON data:
  // [
  //   {
  //     baz: number;
  //     en: 'ONE' | 'TWO' | 'THREE';
  //     bar: { baz: number };
  //   }
  // ]
}
```

----------------------------------------

TITLE: Supabase Email Template Variables and Usage
DESCRIPTION: This reference details the dynamic variables available for use within Supabase email templates. Each variable's purpose is explained, along with examples demonstrating how to incorporate them into HTML email content to display dynamic data like confirmation URLs or user-specific information.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/local-development/customizing-email-templates.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
ConfirmationURL:
  Description: Contains the confirmation URL. For example, a signup confirmation URL would look like: https://project-ref.supabase.co/auth/v1/verify?token={{ .TokenHash }}&type=email&redirect_to=https://example.com/path
  Usage: <p>Click here to confirm: {{ .ConfirmationURL }}</p>
Token:
  Description: Contains a 6-digit One-Time-Password (OTP) that can be used instead of the ConfirmationURL.
  Usage: <p>Here is your one time password: {{ .Token }}</p>
TokenHash:
  Description: Contains a hashed version of the Token. This is useful for constructing your own email link in the email template.
  Usage: <p>Follow this link to confirm your user:</p>\n<p>\n  <a href="{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email">Confirm your email</a>\n</p>
SiteURL:
  Description: Contains your application's Site URL. This can be configured in your project's authentication settings.
  Usage: <p>Visit <a href="{{ .SiteURL }}">here</a> to log in.</p>
Email:
  Description: Contains the user's email address.
  Usage: <p>A recovery request was sent to {{ .Email }}.</p>
NewEmail:
  Description: Contains the new user's email address. This is only available in the email_change email template.
  Usage: <p>You are requesting to update your email address to {{ .NewEmail }}.</p>
```

----------------------------------------

TITLE: Chain explain() method to a Supabase query
DESCRIPTION: Example of how to append the `explain()` method to a Supabase query to retrieve its execution plan. This demonstrates a basic select operation on the 'instruments' table.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/debugging-performance.mdx#_snippet_1

LANGUAGE: ts
CODE:
```
const { data, error } = await supabase
  .from('instruments')
  .select()
  .explain()
```

----------------------------------------

TITLE: Full example: Create table, enable RLS, and create public SELECT policy
DESCRIPTION: A comprehensive example demonstrating the steps to set up a new `profiles` table, enable Row Level Security on it, and then create a `SELECT` policy that makes all profiles visible to everyone, including unauthenticated users (`anon` role).
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/row-level-security.mdx#_snippet_4

LANGUAGE: SQL
CODE:
```
-- 1. Create table
create table profiles (
  id uuid primary key,
  user_id references auth.users,
  avatar_url text
);

-- 2. Enable RLS
alter table profiles enable row level security;

-- 3. Create Policy
create policy "Public profiles are visible to everyone."
on profiles for select
to anon         -- the Postgres Role (recommended)
using ( true ); -- the actual Policy
```

----------------------------------------

TITLE: Create Postgres function for semantic search using negative inner product
DESCRIPTION: SQL function `match_documents` to perform optimized semantic search using negative inner product (`<#>`) for normalized embeddings. It takes a query embedding, a similarity threshold, and a match count, returning relevant documents. The vector size (512) and table (`documents`) should be adjusted as needed. Note the negation of `match_threshold` due to the operator's nature.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/semantic-search.mdx#_snippet_4

LANGUAGE: sql
CODE:
```
-- Match documents using negative inner product (<#>)
create or replace function match_documents (
  query_embedding vector(512),
  match_threshold float,
  match_count int
)
returns setof documents
language sql
as $$
  select *
  from documents
  where documents.embedding <#> query_embedding < -match_threshold
  order by documents.embedding <#> query_embedding asc
  limit least(match_count, 200);
$$;
```

----------------------------------------

TITLE: Sentry Deno SDK Scope Management
DESCRIPTION: This API documentation describes key Sentry Deno SDK methods relevant for managing event context and scopes within Edge Functions. It highlights `Sentry.withScope` for encapsulating API calls and the ability to pass context directly to `Sentry.captureException` and `Sentry.captureMessage` to ensure proper event attribution in environments with shared global state.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/examples/sentry-monitoring.mdx#_snippet_4

LANGUAGE: APIDOC
CODE:
```
Sentry.withScope(callback: (scope: Scope) => void): void
  callback: A function that receives a new Scope instance.
  Purpose: Encapsulates Sentry SDK API calls within a new scope, ensuring context separation between requests.

Sentry.captureException(exception: any, hint?: EventHint): string
  exception: The error or exception to capture.
  hint: Optional EventHint object for additional context.
  Purpose: Captures an exception and sends it to Sentry. Context can be passed directly via the hint.

Sentry.captureMessage(message: string, level?: SeverityLevel, hint?: EventHint): string
  message: The message string to capture.
  level: Optional severity level (e.g., 'info', 'warning', 'error').
  hint: Optional EventHint object for additional context.
  Purpose: Captures a message and sends it to Sentry. Context can be passed directly via the hint.
```

----------------------------------------

TITLE: Install Supabase JavaScript Client
DESCRIPTION: Command to install the `@supabase/supabase-js` library, the official JavaScript client for interacting with Supabase services.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-vue-3.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
npm install @supabase/supabase-js
```

----------------------------------------

TITLE: SQL: Enable Auditing on a Table
DESCRIPTION: Invokes the public `audit.enable_tracking` function to activate auditing for a specified PostgreSQL table. This function internally sets up a trigger to log changes.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-03-08-postgres-audit.mdx#_snippet_11

LANGUAGE: sql
CODE:
```
select audit.enable_tracking('<schema>.<table>'::regclass);
```

----------------------------------------

TITLE: Execute Supabase Ollama Function via cURL
DESCRIPTION: Demonstrates how to invoke the ollama-test Supabase Edge Function using a cURL command. It sends a prompt and includes an authorization header to get an AI-generated response.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/ai-models.mdx#_snippet_10

LANGUAGE: bash
CODE:
```
curl --get "http://localhost:54321/functions/v1/ollama-test" \
--data-urlencode "prompt=write a short rap song about Supabase, the Postgres Developer platform, as sung by Nicki Minaj" \
-H "Authorization: $ANON_KEY"
```

----------------------------------------

TITLE: Implement Kysely Postgres Driver for Deno
DESCRIPTION: This TypeScript code defines a custom `PostgresDriver` and `PostgresConnection` class for Kysely, enabling interaction with a PostgreSQL database via the `deno-postgres` library. It handles connection pooling, transaction management (begin, commit, rollback), query execution, and connection release, providing a robust interface for database operations within a Deno environment.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/kysely-postgres.mdx#_snippet_1

LANGUAGE: ts
CODE:
```
import {
  CompiledQuery,
  DatabaseConnection,
  Driver,
  PostgresCursorConstructor,
  QueryResult,
  TransactionSettings
} from 'https://esm.sh/kysely@0.23.4'
import { freeze, isFunction } from 'https://esm.sh/kysely@0.23.4/dist/esm/util/object-utils.js'
import { extendStackTrace } from 'https://esm.sh/kysely@0.23.4/dist/esm/util/stack-trace-utils.js'
import { Pool, PoolClient } from 'https://deno.land/x/postgres@v0.17.0/mod.ts'

export interface PostgresDialectConfig {
  pool: Pool | (() => Promise<Pool>)
  cursor?: PostgresCursorConstructor
  onCreateConnection?: (connection: DatabaseConnection) => Promise<void>
}

const PRIVATE_RELEASE_METHOD = Symbol()

export class PostgresDriver implements Driver {
  readonly #config: PostgresDialectConfig
  readonly #connections = new WeakMap<PoolClient, DatabaseConnection>()
  #pool?: Pool

  constructor(config: PostgresDialectConfig) {
    this.#config = freeze({ ...config })
  }

  async init(): Promise<void> {
    this.#pool = isFunction(this.#config.pool) ? await this.#config.pool() : this.#config.pool
  }

  async acquireConnection(): Promise<DatabaseConnection> {
    const client = await this.#pool!.connect()
    let connection = this.#connections.get(client)

    if (!connection) {
      connection = new PostgresConnection(client, {
        cursor: this.#config.cursor ?? null,
      })
      this.#connections.set(client, connection)

      // The driver must take care of calling `onCreateConnection` when a new
      // connection is created. The `pg` module doesn't provide an async hook
      // for the connection creation. We need to call the method explicitly.
      if (this.#config?.onCreateConnection) {
        await this.#config.onCreateConnection(connection)
      }
    }

    return connection
  }

  async beginTransaction(
    connection: DatabaseConnection,
    settings: TransactionSettings
  ): Promise<void> {
    if (settings.isolationLevel) {
      await connection.executeQuery(
        CompiledQuery.raw(`start transaction isolation level ${settings.isolationLevel}`)
      )
    } else {
      await connection.executeQuery(CompiledQuery.raw('begin'))
    }
  }

  async commitTransaction(connection: DatabaseConnection): Promise<void> {
    await connection.executeQuery(CompiledQuery.raw('commit'))
  }

  async rollbackTransaction(connection: DatabaseConnection): Promise<void> {
    await connection.executeQuery(CompiledQuery.raw('rollback'))
  }

  async releaseConnection(connection: PostgresConnection): Promise<void> {
    connection[PRIVATE_RELEASE_METHOD]()
  }

  async destroy(): Promise<void> {
    if (this.#pool) {
      const pool = this.#pool
      this.#pool = undefined
      await pool.end()
    }
  }
}

interface PostgresConnectionOptions {
  cursor: PostgresCursorConstructor | null
}

class PostgresConnection implements DatabaseConnection {
  #client: PoolClient
  #options: PostgresConnectionOptions

  constructor(client: PoolClient, options: PostgresConnectionOptions) {
    this.#client = client
    this.#options = options
  }

  async executeQuery<O>(compiledQuery: CompiledQuery): Promise<QueryResult<O>> {
    try {
      const result = await this.#client.queryObject<O>(compiledQuery.sql, [
        ...compiledQuery.parameters,
      ])

      if (
        result.command === 'INSERT' ||
        result.command === 'UPDATE' ||
        result.command === 'DELETE'
      ) {
        const numAffectedRows = BigInt(result.rowCount || 0)

        return {
          numUpdatedOrDeletedRows: numAffectedRows,
          numAffectedRows,
          rows: result.rows ?? [],
        } as any
      }

      return {
        rows: result.rows ?? [],
      }
    } catch (err) {
      throw extendStackTrace(err, new Error())
    }
  }

  async *streamQuery<O>(
    _compiledQuery: CompiledQuery,
    chunkSize: number
  ): AsyncIterableIterator<QueryResult<O>> {
    if (!this.#options.cursor) {
      throw new Error(
        "'cursor' is not present in your postgres dialect config. It's required to make streaming work in postgres."
      )
    }

    if (!Number.isInteger(chunkSize) || chunkSize <= 0) {
      throw new Error('chunkSize must be a positive integer')
    }

    // stream not available
    return null
  }

  [PRIVATE_RELEASE_METHOD](): void {
    this.#client.release()
  }
}
```

----------------------------------------

TITLE: Initiate SSO Login with Supabase JavaScript Client
DESCRIPTION: This code demonstrates how to initiate a Single Sign-On (SSO) login flow using the `signInWithSSO` method from the `supabase-js` library. It takes a domain as input and redirects the user to the SSO provider's URL if available.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-04-13-supabase-auth-sso-pkce.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
const { data } = await supabase.auth.signInWithSSO({ domain: 'acme.corp' })

if (data.url) window.location.href = data.url
```

----------------------------------------

TITLE: Example Service Role JWT Payload
DESCRIPTION: A sample JSON Web Token (JWT) payload for a service role in Supabase, highlighting the `service_role` claim. This token grants administrative privileges and is intended for server-side use only.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/jwt-fields.mdx#_snippet_4

LANGUAGE: JSON
CODE:
```
{
  "iss": "supabase",
  "ref": "abcdefghijklmnopqrst",
  "role": "service_role",
  "iat": 1640991600,
  "exp": 1640995200
}
```

----------------------------------------

TITLE: Create Supabase client utility functions for Next.js
DESCRIPTION: Provides utility functions to initialize Supabase clients for different execution environments. It includes a client for browser-side (Client Components) and a server-side client for Server Components, Server Actions, and Route Handlers, handling cookie management for user sessions.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/nextjs.mdx#_snippet_2

LANGUAGE: ts
CODE:
```
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

LANGUAGE: ts
CODE:
```
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        }
      }
    }
  )
}
```

----------------------------------------

TITLE: Supabase Auth Email Template Types Reference
DESCRIPTION: This section provides a detailed reference for the various built-in Supabase Auth email templates. It outlines their default subjects, the specific scenarios in which they are sent, their primary purpose, and the general content they contain, aiding in understanding and customization.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/local-development/customizing-email-templates.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
auth.email.template.invite:
  Default subject: "You have been invited"
  When sent: When a user is invited to join your application via email invitation
  Purpose: Allows administrators to invite users who don't have accounts yet
  Content: Contains a link for the invited user to accept the invitation and create their account
auth.email.template.confirmation:
  Default subject: "Confirm Your Signup"
  When sent: When a user signs up and needs to verify their email address
  Purpose: Email verification for new user registrations
  Content: Contains a confirmation link to verify the user's email address
auth.email.template.recovery:
  Default subject: "Reset Your Password"
  When sent: When a user requests a password reset
  Purpose: Password recovery flow for users who forgot their password
  Content: Contains a link to reset the user's password
auth.email.template.magic_link:
  Default subject: "Your Magic Link"
  When sent: When a user requests a magic link for passwordless authentication
  Purpose: Passwordless login using email links
  Content: Contains a secure link that automatically logs the user in when clicked
auth.email.template.email_change:
  Default subject: "Confirm Email Change"
  When sent: When a user requests to change their email address
  Purpose: Verification for email address changes
  Content: Contains a confirmation link to verify the new email address
auth.email.template.reauthentication:
  Default subject: "Confirm Reauthentication"
  When sent: When a user needs to re-authenticate for sensitive operations
  Purpose: Additional verification for sensitive actions (like changing password, deleting account)
  Content: Contains a 6-digit OTP code for verification
```

----------------------------------------

TITLE: Flutter Chat Message Input Bar Widget (_MessageBar)
DESCRIPTION: This Flutter widget, `_MessageBar`, provides a text input field and a 'Send' button for users to compose and submit chat messages. It manages the text controller, handles message submission (clearing the input and sending via `ChatCubit`), and disposes resources properly.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-11-22-flutter-authorization-with-rls.mdx#_snippet_15

LANGUAGE: Dart
CODE:
```
/// Set of widget that contains TextField and Button to submit message
class _MessageBar extends StatefulWidget {
  const _MessageBar({
    Key? key,
  }) : super(key: key);

  @override
  State<_MessageBar> createState() => _MessageBarState();
}

class _MessageBarState extends State<_MessageBar> {
  late final TextEditingController _textController;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Theme.of(context).cardColor,
      child: Padding(
        padding: EdgeInsets.only(
          top: 8,
          left: 8,
          right: 8,
          bottom: MediaQuery.of(context).padding.bottom,
        ),
        child: Row(
          children: [
            Expanded(
              child: TextFormField(
                keyboardType: TextInputType.text,
                maxLines: null,
                autofocus: true,
                controller: _textController,
                decoration: const InputDecoration(
                  hintText: 'Type a message',
                  border: InputBorder.none,
                  focusedBorder: InputBorder.none,
                  contentPadding: EdgeInsets.all(8),
                ),
              ),
            ),
            TextButton(
              onPressed: () => _submitMessage(),
              child: const Text('Send'),
            ),
          ],
        ),
      ),
    );
  }

  @override
  void initState() {
    _textController = TextEditingController();
    super.initState();
  }

  @override
  void dispose() {
    _textController.dispose();
    super.dispose();
  }

  void _submitMessage() async {
    final text = _textController.text;
    if (text.isEmpty) {
      return;
    }
    BlocProvider.of<ChatCubit>(context).sendMessage(text);
    _textController.clear();
  }
}
```

----------------------------------------

TITLE: Postgres Declarative Table Partitioning Example
DESCRIPTION: Illustrates the basic syntax for declarative partitioning in PostgreSQL, where a parent table is defined to be partitioned by a range on a specific column (e.g., `logdate`). This method is suitable for creating new, empty partitions directly.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-10-03-postgres-dynamic-table-partitioning.mdx#_snippet_2

LANGUAGE: SQL
CODE:
```
CREATE TABLE measurement (
city_id int not null,
logdate date not null,
peaktemp int,
unitsales int
) PARTITION BY RANGE (logdate);
```

----------------------------------------

TITLE: Compare Supabase Auth Admin methods for user listing (v2 vs v1)
DESCRIPTION: Shows the migration of server-side Auth methods from `supabase.auth.api` (v1) to `supabase.auth.admin` (v2). Methods under the `admin` namespace are explicitly designated for trusted server-side environments and require a `SERVICE_ROLE` key, enhancing security clarity.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2022-08-16-supabase-js-v2.mdx#_snippet_4

LANGUAGE: ts
CODE:
```
// v2
const { data: user, error } = await supabase.auth.admin.listUsers()
```

LANGUAGE: ts
CODE:
```
// v1
const { data: user, error } = await supabase.auth.api.listUsers()
```

----------------------------------------

TITLE: Run OpenAPI Specification Generation Script
DESCRIPTION: This bash command executes the Deno script responsible for generating the OpenAPI specification. It grants the necessary read and write permissions for the script to access source files and write the output JSON file.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-05-15-building-chatgpt-plugins-template.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
deno run --allow-read --allow-write scripts/generate-openapi-spec.ts
```

----------------------------------------

TITLE: Creating Postgres Users with Password Login
DESCRIPTION: Shows how to create a Postgres role that can be used for password-based logins by including the `WITH LOGIN PASSWORD` clause. This is essential for roles that require direct user authentication.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/roles.mdx#_snippet_1

LANGUAGE: sql
CODE:
```
create role "role_name" with login password 'extremely_secure_password';
```

----------------------------------------

TITLE: Create Database User for Logging
DESCRIPTION: Creates a new database user with a specified password, intended for specific application integrations like Zapier, to enable granular logging.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pgaudit.mdx#_snippet_4

LANGUAGE: SQL
CODE:
```
create user "zapier" with password '<new password>';
```

----------------------------------------

TITLE: Supabase CLI Commands for SSO Management
DESCRIPTION: This snippet shows the available commands for managing Single Sign-On (SSO) identity providers using the Supabase CLI. It includes commands for adding, listing, showing, updating, and removing SSO configurations, as well as retrieving SSO settings.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2023-04-13-supabase-auth-sso-pkce.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
$ supabase sso --help
Manage Single Sign-On (SSO) authentication for projects

Usage:
  supabase sso [command]

Available Commands:
  add         Add a new SSO identity provider
  info        Returns the SAML SSO settings required for the identity provider
  list        List all SSO identity providers for a project
  remove      Remove an existing SSO identity provider
  show        Show information about an SSO identity provider
  update      Update information about an SSO identity provider
```

----------------------------------------

TITLE: Configure Supabase environment variables for SSR
DESCRIPTION: Set your Supabase project URL and anonymous key as environment variables, adapting to the specific naming conventions required by different JavaScript frameworks and environments for SSR.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/creating-a-client.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

LANGUAGE: bash
CODE:
```
PUBLIC_SUPABASE_URL=your_supabase_project_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

LANGUAGE: bash
CODE:
```
PUBLIC_SUPABASE_URL=your_supabase_project_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

LANGUAGE: bash
CODE:
```
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

LANGUAGE: bash
CODE:
```
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

LANGUAGE: bash
CODE:
```
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

----------------------------------------

TITLE: Set Environment Variables for Supabase Management API
DESCRIPTION: This bash snippet demonstrates how to export necessary environment variables (SUPABASE_ACCESS_TOKEN and PROJECT_REF) required for authenticating and interacting with the Supabase Management API. These variables are crucial for programmatically configuring services like the Apple authentication provider.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/social-login/auth-apple.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
# Get your access token from https://supabase.com/dashboard/account/tokens
export SUPABASE_ACCESS_TOKEN="your-access-token"
export PROJECT_REF="your-project-ref"
```

----------------------------------------

TITLE: Configure SMTP Environment Variables for Email Services
DESCRIPTION: This snippet provides the essential environment variables for configuring an SMTP server to enable email functionalities within Supabase. It covers settings for the admin email, host, port, user, password, and sender name. All services must be restarted for these changes to take effect, and AWS SES is recommended for production environments.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/self-hosting/docker.mdx#_snippet_17

LANGUAGE: Shell
CODE:
```
SMTP_ADMIN_EMAIL=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SMTP_SENDER_NAME=
```

----------------------------------------

TITLE: Initialize Supabase Client for Apple Native Login in Kotlin
DESCRIPTION: This Kotlin code snippet shows how to initialize the Supabase client for Compose Multiplatform. It configures the client to use the GoTrue and ComposeAuth plugins, specifically enabling native Apple login support.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/social-login/auth-apple.mdx#_snippet_11

LANGUAGE: kotlin
CODE:
```
val supabaseClient = createSupabaseClient(
	supabaseUrl = "SUPABASE_URL",
	supabaseKey = "SUPABASE_KEY"
) {
	install(GoTrue)
	install(ComposeAuth) {
		appleNativeLogin()
	}
}
```

----------------------------------------

TITLE: Enable Anonymous Sign-ins in Supabase CLI
DESCRIPTION: To enable anonymous sign-ins for local development, upgrade the Supabase CLI and add this configuration to the `config.toml` file.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-04-17-anonymous-sign-ins.mdx#_snippet_0

LANGUAGE: toml
CODE:
```
[auth]
enable_anonymous_sign_ins = true
```

----------------------------------------

TITLE: Receiving Broadcast Messages with Supabase Realtime - Python
DESCRIPTION: This Python snippet illustrates how to receive broadcast messages from a Supabase Realtime channel. It joins 'test-channel', defines an `async` `message_received` function to log payloads, and subscribes to 'shout' broadcast events.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/broadcast.mdx#_snippet_9

LANGUAGE: python
CODE:
```
# Join a room/topic. Can be anything except for 'realtime'.
my_channel = supabase.channel('test-channel')

# Simple function to log any messages we receive
def message_received(payload):
  print(f"Broadcast received: {payload}")

# Subscribe to the Channel
await my_channel
  .on_broadcast('shout', message_received) # Listen for "shout". Can be "*" to listen to all events
  .subscribe()
```

----------------------------------------

TITLE: Retrieve User Metadata
DESCRIPTION: These code examples show how to retrieve the `user_metadata` associated with the currently authenticated user. The metadata is accessed from the `user` object, which contains the `raw_user_meta_data` stored during signup.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/managing-user-data.mdx#_snippet_3

LANGUAGE: JavaScript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)

// ---cut---
const {
  data: { user },
} = await supabase.auth.getUser()
let metadata = user?.user_metadata
```

LANGUAGE: Dart
CODE:
```
final User? user = supabase.auth.currentUser;
final Map<String, dynamic>? metadata = user?.userMetadata;
```

LANGUAGE: Swift
CODE:
```
let user = try await supabase.auth.user()
let metadata = user.userMetadata
```

LANGUAGE: Kotlin
CODE:
```
val user = supabase.auth.retrieveUserForCurrentSession()
//Or you can use the user from the current session:
val user = supabase.auth.currentUserOrNull()
val metadata = user?.userMetadata
```

----------------------------------------

TITLE: Start Rails console
DESCRIPTION: Launch the Rails console to interact with the application's models and database directly, allowing for data manipulation and querying.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/www/_blog/2024-01-29-ruby-on-rails-postgres.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
bin/rails console
```

----------------------------------------

TITLE: Configure Edge Function Properties in config.toml
DESCRIPTION: Example of setting individual Edge Function configurations like JWT verification and import map location via the 'config.toml' file.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/cicd-workflow.mdx#_snippet_3

LANGUAGE: toml
CODE:
```
[functions.hello-world]
verify_jwt = false
```

----------------------------------------

TITLE: Create PostgreSQL function for nearest-neighbor restaurant search
DESCRIPTION: Defines a SQL function `nearby_restaurants` that takes `lat` and `long` as input. It queries the `public.restaurants` table, calculates the distance to the given point using `gis.st_distance`, and orders results by proximity using the `gis.<->` operator, returning restaurant details including `dist_meters`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/postgis.mdx#_snippet_6

LANGUAGE: SQL
CODE:
```
create or replace function nearby_restaurants(lat float, long float)
returns table (id public.restaurants.id%TYPE, name public.restaurants.name%TYPE, lat float, long float, dist_meters float)
set search_path = ''
language sql
as $$
  select id, name, gis.st_y(location::gis.geometry) as lat, gis.st_x(location::gis.geometry) as long, gis.st_distance(location, gis.st_point(long, lat)::gis.geography) as dist_meters
  from public.restaurants
  order by location operator(gis.<->) gis.st_point(long, lat)::gis.geography;
$$;
```

----------------------------------------

TITLE: Inserting Multiple Records with Supabase Python
DESCRIPTION: This snippet illustrates how to perform a bulk insert of multiple book records into the "books" table using the Supabase Python client. It demonstrates the dictionary-based structure for data, including nested metadata, required for the 'insert' operation.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/json.mdx#_snippet_6

LANGUAGE: Python
CODE:
```
supabase.from_('books').insert([
  {
    'title': 'The Poky Little Puppy',
    'author': 'Janette Sebring Lowrey',
    'metadata': {
      'description': 'Puppy is slower than other, bigger animals.',
      'price': 5.95,
      'ages': [3, 6],
    },
  },
  {
    'title': 'The Tale of Peter Rabbit',
    'author': 'Beatrix Potter',
    'metadata': {
      'description': 'Rabbit eats some vegetables.',
      'price': 4.49,
      'ages': [2, 5],
    },
  },
  {
    'title': 'Tootle',
    'author': 'Gertrude Crampton',
    'metadata': {
      'description': 'Little toy train has big dreams.',
      'price': 3.99,
      'ages': [2, 5],
    },
  },
  {
    'title': 'Green Eggs and Ham',
    'author': 'Dr. Seuss',
    'metadata': {
      'description':
          'Sam has changing food preferences and eats unusually colored food.',
      'price': 7.49,
      'ages': [4, 8],
    },
  },
  {
    'title': 'Harry Potter and the Goblet of Fire',
    'author': 'J.K. Rowling',
    'metadata': {
      'description': 'Fourth year of school starts, big drama ensues.',
      'price': 24.95,
      'ages': [10, 99],
    },
  },
]).execute()
```

----------------------------------------

TITLE: Change Postgres database timezone
DESCRIPTION: This SQL command alters the default timezone for the 'postgres' database. While UTC is generally recommended, this demonstrates how to change it to a specific timezone like 'America/New_York'.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/configuration.mdx#_snippet_0

LANGUAGE: sql
CODE:
```
alter database postgres
set timezone to 'America/New_York';
```

----------------------------------------

TITLE: Start SvelteKit Development Server
DESCRIPTION: Execute the `npm run dev` command to start the SvelteKit development server. Once running, you can access your application in a web browser, typically at `http://localhost:5173`, to see the list of instruments fetched from Supabase.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/quickstarts/sveltekit.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Allow Individual User Access to Own Uploaded Files
DESCRIPTION: An SQL policy that grants authenticated users `SELECT` access only to files they previously uploaded, by comparing their `auth.uid()` with the `owner_id` of the object.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/security/access-control.mdx#_snippet_4

LANGUAGE: sql
CODE:
```
create policy "Individual user Access"
on storage.objects for select
to authenticated
using ( (select auth.uid()) = owner_id::uuid );
```

----------------------------------------

TITLE: Signing in with phone OTP
DESCRIPTION: This code snippet demonstrates how to initiate a phone OTP login. It sends a one-time password to the specified phone number, which the user then uses to verify their identity. The OTP is typically a 6-digit pin sent via SMS and expires within 60 seconds.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/phone-login.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('url', 'anonKey')

// ---cut---
const { data, error } = await supabase.auth.signInWithOtp({
  phone: '+13334445555',
})
```

LANGUAGE: Swift
CODE:
```
try await supabase.auth.signInWithOTP(
  phone: "+13334445555"
)
```

LANGUAGE: Kotlin
CODE:
```
supabase.auth.signInWith(OTP) {
    phone = "+13334445555"
}
```

LANGUAGE: Python
CODE:
```
response = supabase.auth.sign_in_with_otp({
  'phone': '+13334445555',
})
```

LANGUAGE: HTTP
CODE:
```
curl -X POST 'https://cvwawazfelidkloqmbma.supabase.co/auth/v1/otp' \
-H "apikey: SUPABASE_KEY" \
-H "Content-Type: application/json" \
-d '{
  "phone": "+13334445555"
}'
```

----------------------------------------

TITLE: Integrate Avatar Component into React Native Account Page
DESCRIPTION: This snippet demonstrates how to import and integrate the `Avatar` component into an existing React Native `Account` page. It shows how to pass necessary props like `size`, `url`, and handle the `onUpload` callback to update the user's profile.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-expo-react-native.mdx#_snippet_12

LANGUAGE: tsx
CODE:
```
// Import the new component
import Avatar from './Avatar'

// ...
return (
  <View>
    {/* Add to the body */}
    <View>
      <Avatar
        size={200}
        url={avatarUrl}
        onUpload={(url: string) => {
          setAvatarUrl(url)
          updateProfile({ username, website, avatar_url: url })
        }}
      />
    </View>
    {/* ... */}
  </View>
)
// ...
```

----------------------------------------

TITLE: Implement Supabase User Sign-up Route in Next.js
DESCRIPTION: This snippet demonstrates how to create a server-side POST route for user sign-up using Supabase authentication helpers in Next.js. It retrieves email and password from form data, uses `supabase.auth.signUp` to register the user, and redirects to the origin URL upon completion. TypeScript examples include type definitions for the Supabase client.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs.mdx#_snippet_5

LANGUAGE: JavaScript
CODE:
```
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    },
  })

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })
}
```

LANGUAGE: TypeScript
CODE:
```
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

import type { Database } from '@/lib/database.types'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

  await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    },
  })

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  })
}
```

----------------------------------------

TITLE: Start the React development server
DESCRIPTION: Start the app, go to http://localhost:5173 in a browser, and open the browser console and you should see the list of instruments.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/quickstarts/reactjs.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Test Edge Function with cURL Request
DESCRIPTION: Send a POST request to the locally running Edge Function using cURL. The request includes an `input` string in the JSON body and requires authorization with the project's anonymous key to generate and retrieve the text embedding.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/quickstarts/generate-text-embeddings.mdx#_snippet_5

LANGUAGE: shell
CODE:
```
curl --request POST 'http://localhost:54321/functions/v1/embed' \
  --header 'Authorization: Bearer ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{ "input": "hello world" }'
```

----------------------------------------

TITLE: Configure OpenAI API Key in Local .env File
DESCRIPTION: This snippet illustrates how to set the `OPENAI_API_KEY` environment variable within a `.env` file, which is essential for authenticating with OpenAI's API during local development of the Edge Function.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/automatic-embeddings.mdx#_snippet_11

LANGUAGE: Shell
CODE:
```
OPENAI_API_KEY=your-api-key
```

----------------------------------------

TITLE: Expo React Native Apple Authentication Component
DESCRIPTION: This TypeScript JSX (TSX) component illustrates how to integrate Apple authentication in an Expo React Native application. It conditionally renders an `AppleAuthenticationButton` for iOS platforms, leveraging `expo-apple-authentication` and `supabase-js`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/social-login/auth-apple.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { Platform } from 'react-native'
import * as AppleAuthentication from 'expo-apple-authentication'
import { supabase } from 'app/utils/supabase'

export function Auth() {
  if (Platform.OS === 'ios')
    return (
      <AppleAuthentication.AppleAuthenticationButton
```

----------------------------------------

TITLE: IdP Metadata URL Structure Example
DESCRIPTION: Illustrates the typical structure of the IdP Metadata URL obtained from Okta, which is required by Supabase to finalize SSO setup. This URL provides Supabase with the necessary identity provider metadata.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/sso/okta.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
https://<okta-org>.okta.com/apps/<app-id>/sso/saml/metadata
```

----------------------------------------

TITLE: Implement CORS Preflight and Main Logic in Supabase Edge Function
DESCRIPTION: This TypeScript snippet illustrates how to integrate CORS handling into a Supabase Edge Function. It imports shared `corsHeaders` and checks for `OPTIONS` requests to handle CORS preflights. For actual function calls, it parses JSON input, constructs a response, and applies the CORS headers, ensuring proper communication and error handling for browser-initiated requests.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/cors.mdx#_snippet_1

LANGUAGE: ts
CODE:
```
import { corsHeaders } from '../_shared/cors.ts'

console.log(`Function "browser-with-cors" up and running!`)

Deno.serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name } = await req.json()
    const data = {
      message: `Hello ${name}!`, 
    }

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})
```

----------------------------------------

TITLE: Enable and Disable pgTAP Extension in PostgreSQL
DESCRIPTION: This snippet demonstrates how to enable the `pgtap` extension within a PostgreSQL database, specifically recommending its creation in a separate schema like `extensions` to maintain a clean `public` schema. It also shows the command to disable the extension if no longer needed.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pgtap.mdx#_snippet_0

LANGUAGE: sql
CODE:
```
-- Enable the "pgtap" extension
create extension pgtap with schema extensions;

-- Disable the "pgtap" extension
drop extension if exists pgtap;
```

----------------------------------------

TITLE: Postgres: Create BEFORE Trigger
DESCRIPTION: Illustrates how to create a trigger that executes its associated function before the triggering event (e.g., an `INSERT` operation) occurs on a table. This ensures actions are taken prior to data modification.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/postgres/triggers.mdx#_snippet_3

LANGUAGE: sql
CODE:
```
create trigger before_insert_trigger
before insert on orders
for each row
execute function before_insert_function();
```

----------------------------------------

TITLE: Create and Insert Unstructured Metadata in SQL
DESCRIPTION: This SQL example illustrates how to store all metadata in a flexible jsonb column, which does not specify expected fields. It includes an insert statement demonstrating this approach. The trade-off is reduced querying and filtering flexibility compared to dedicated columns, and increased burden on application code for data integrity.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/structured-unstructured.mdx#_snippet_1

LANGUAGE: sql
CODE:
```
create table docs (
  id uuid primary key,
  embedding vector(3),
  meta jsonb
);

insert into docs
  (id, embedding, meta)
values
  (
    '79409372-7556-4ccc-ab8f-5786a6cfa4f7',
    array[0.1, 0.2, 0.3],
    '{"content": "Hello world", "url": "/hello-world"}'
  );
```

----------------------------------------

TITLE: Create Vue.js Avatar Upload Widget with Supabase Storage
DESCRIPTION: This Vue.js component (`Avatar.vue`) allows users to upload profile photos to Supabase Storage. It handles image display, file selection, upload logic, and error handling. It emits `update:path` and `upload` events upon successful upload.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-nuxt-3.mdx#_snippet_7

LANGUAGE: Vue
CODE:
```
<script setup>
const props = defineProps(['path'])
const { path } = toRefs(props)

const emit = defineEmits(['update:path', 'upload'])

const supabase = useSupabaseClient()

const uploading = ref(false)
const src = ref('')
const files = ref()

const downloadImage = async () => {
  try {
    const { data, error } = await supabase.storage.from('avatars').download(path.value)
    if (error) throw error
    src.value = URL.createObjectURL(data)
  } catch (error) {
    console.error('Error downloading image: ', error.message)
  }
}

const uploadAvatar = async (evt) => {
  files.value = evt.target.files
  try {
    uploading.value = true

    if (!files.value || files.value.length === 0) {
      throw new Error('You must select an image to upload.')
    }

    const file = files.value[0]
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    const { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file)

    if (uploadError) throw uploadError

    emit('update:path', filePath)
    emit('upload')
  } catch (error) {
    alert(error.message)
  } finally {
    uploading.value = false
  }
}

downloadImage()

watch(path, () => {
  if (path.value) {
    downloadImage()
  }
})
</script>

<template>
  <div>
    <img
      v-if="src"
      :src="src"
      alt="Avatar"
      class="avatar image"
      style="width: 10em; height: 10em;"
    />
    <div v-else class="avatar no-image" :style="{ height: size, width: size }" />

    <div style="width: 10em; position: relative;">
      <label class="button primary block" for="single">
        {{ uploading ? 'Uploading ...' : 'Upload' }}
      </label>
      <input
        style="position: absolute; visibility: hidden;"
        type="file"
        id="single"
        accept="image/*"
        @change="uploadAvatar"
        :disabled="uploading"
      />
    </div>
  </div>
</template>
```

----------------------------------------

TITLE: Pre-warm Postgres Index into RAM
DESCRIPTION: Utilize the `pg_prewarm` function to load a specified index, such as `vecs.docs_vec_idx`, directly into the database's RAM. This technique helps mitigate 'cold cache' issues, ensuring that subsequent queries against the index benefit from in-memory access, thereby improving initial query performance and overall efficiency, especially before benchmarks or production deployment.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/going-to-prod.mdx#_snippet_2

LANGUAGE: SQL
CODE:
```
select pg_prewarm('vecs.docs_vec_idx');
```

----------------------------------------

TITLE: Sign In with GitLab using Supabase OAuth
DESCRIPTION: Demonstrates how to authenticate users with GitLab OAuth using the `signInWithOAuth()` method in Supabase client applications. This method initiates the OAuth flow, redirecting the user to GitLab for authentication and then back to the application upon success.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/social-login/auth-gitlab.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://your-project-id.supabase.co', 'your-anon-key')

// ---cut---
async function signInWithGitLab() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'gitlab',
  })
}
```

LANGUAGE: Flutter
CODE:
```
Future<void> signInWithGitLab() async {
  await supabase.auth.signInWithOAuth(
    OAuthProvider.gitlab,
    redirectTo: kIsWeb ? null : 'my.scheme://my-host', // Optionally set the redirect link to bring back the user via deeplink.
    authScreenLaunchMode:
        kIsWeb ? LaunchMode.platformDefault : LaunchMode.externalApplication, // Launch the auth screen in a new webview on mobile.
  );
}
```

LANGUAGE: Kotlin
CODE:
```
suspend fun signInWithGitLab() {
	supabase.auth.signInWith(Gitlab)
}
```

----------------------------------------

TITLE: Send multiple table rows in one request using pg_net
DESCRIPTION: This SQL snippet demonstrates how to aggregate multiple rows from a table into a single JSONB array and then send this array as the body of an HTTP POST request using `pg_net`. This method is useful for batching data from a table to an external API, improving efficiency by reducing the number of individual requests.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pg_net.mdx#_snippet_19

LANGUAGE: SQL
CODE:
```
with "selected_table_rows" as (
    select
        -- Converts all the rows into a JSONB array
        jsonb_agg(to_jsonb(<table_name>.*)) as JSON_payload
    from <table_name>
    -- good practice to LIMIT the max amount of rows
)
select
    net.http_post(
        url := 'https://postman-echo.com/post'::text,
        body := JSON_payload
    ) AS request_id
FROM "selected_table_rows";
```

----------------------------------------

TITLE: HTML Template for New Email Address Confirmation
DESCRIPTION: HTML template specifically for confirming a new email address during an email change process. It provides a confirmation link and a token.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-hooks/send-email-hook.mdx#_snippet_19

LANGUAGE: Spanish
CODE:
```
<h2>Confirma la Nueva Dirección de Correo</h2><p>Sigue este enlace para confirmar tu nueva dirección de correo electrónico:</p><p><a href="{{confirmation_url}}">Confirma la nueva dirección de correo</a></p><p>Alternativamente, ingresa el código: {{new_token}}</p>
```

LANGUAGE: French
CODE:
```
<h2>Confirmez la nouvelle adresse e-mail</h2><p>Suivez ce lien pour confirmer votre nouvelle adresse e-mail :</p><p><a href="{{confirmation_url}}">Confirmez la nouvelle adresse e-mail</a></p><p>Vous pouvez aussi saisir le code : {{new_token}}</p>
```

----------------------------------------

TITLE: Update the title of an existing document
DESCRIPTION: Updates the title of a document in the `documents` table. This action resets the `embedding` column to `null`, triggering a new embedding generation by the Edge Function.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/automatic-embeddings.mdx#_snippet_20

LANGUAGE: SQL
CODE:
```
-- Update the title of the document
update documents
set title = 'Understanding Vector Databases with Supabase'
where title = 'Understanding Vector Databases';
```

----------------------------------------

TITLE: Update Supabase SvelteKit Type Definitions
DESCRIPTION: This snippet shows how to update the `src/app.d.ts` file to correctly define Supabase types for SvelteKit applications. It includes examples for both 0.8.x and 0.9.0 versions, detailing changes in type imports and interface structures for `App.Supabase`, `App.Locals`, and `App.PageData`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/sveltekit.mdx#_snippet_19

LANGUAGE: ts
CODE:
```
// src/app.d.ts
import { SupabaseClient, Session, User } from '@supabase/supabase-js'
import { Database } from './DatabaseDefinitions'

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>
      safeGetSession(): Promise<{ session: Session | null; user: User | null }>
    }
    interface PageData {
      session: Session | null
      user: User | null
    }
    // interface Error {}
    // interface Platform {}
  }
}
```

----------------------------------------

TITLE: Filter Supabase Realtime Changes for Specific Inserts
DESCRIPTION: Demonstrates how to subscribe to real-time PostgreSQL changes for 'INSERT' events on a specific table and filter by a column's exact value (e.g., `id=eq.1`). This allows clients to receive only relevant data updates.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/postgres-changes.mdx#_snippet_12

LANGUAGE: JavaScript
CODE:
```
const changes = supabase
  .channel('table-filter-changes')
  .on(
    'postgres_changes',
    {
      event: 'INSERT',
      schema: 'public',
      table: 'todos',
      filter: 'id=eq.1',
    },
    (payload) => console.log(payload)
  )
  .subscribe()
```

LANGUAGE: Dart
CODE:
```
  supabase
      .channel('table-filter-changes')
      .onPostgresChanges(
          event: PostgresChangeEvent.insert,
          schema: 'public',
          table: 'todos',
          filter: PostgresChangeFilter(
            type: PostgresChangeFilterType.eq,
            column: 'id',
            value: 1,
          ),
          callback: (payload) => print(payload))
      .subscribe();
```

LANGUAGE: Swift
CODE:
```
let myChannel = await supabase.channel("db-changes")

let changes = await myChannel.postgresChange(
  InsertAction.self,
  schema: "public",
  table: "todos",
  filter: .eq("id", value: 1)
)

await myChannel.subscribe()

for await change in changes {
  print(change.record)
}
```

LANGUAGE: Kotlin
CODE:
```
val myChannel = supabase.channel("db-changes")

val changes = myChannel.postgresChangeFlow<PostgresAction.Insert>(schema = "public") {
    table = "todos"
    filter = "id=eq.1"
}

changes
    .onEach {
        println(it.record)
    }
    .launchIn(yourCoroutineScope)

myChannel.subscribe()
```

LANGUAGE: Python
CODE:
```
changes = supabase.channel('db-changes').on_postgres_changes(
  "INSERT",
  schema="public",
  table="todos",
  filter="id=eq.1",
  callback=lambda payload: print(payload)
)
.subscribe()
```

----------------------------------------

TITLE: Supabase Authenticated Client in Remix Loader Function
DESCRIPTION: Loader functions execute on the server before component rendering and handle all GET requests for a route. This snippet demonstrates how to create an authenticated Supabase client using `createServerClient` with `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `Request`, and `Response` objects. It's crucial to return the `response.headers` to allow Supabase to manage user authentication sessions via cookies.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/remix.mdx#_snippet_3

LANGUAGE: JavaScript
CODE:
```
import { json } from '@remix-run/node' // change this import to whatever runtime you are using
import { createServerClient } from '@supabase/auth-helpers-remix'

export const loader = async ({ request }) => {
  const response = new Response()
  // an empty response is required for the auth helpers
  // to set cookies to manage auth

  const supabaseClient = createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    { request, response }
  )

  const { data } = await supabaseClient.from('test').select('*')

  // in order for the set-cookie header to be set,
  // headers must be returned as part of the loader response
  return json(
    { data },
    {
      headers: response.headers,
    }
  )
}
```

LANGUAGE: TypeScript
CODE:
```
import { json } from '@remix-run/node' // change this import to whatever runtime you are using
import { createServerClient } from '@supabase/auth-helpers-remix'

import type { LoaderFunctionArgs } from '@remix-run/node' // change this import to whatever runtime you are using

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const response = new Response()
  const supabaseClient = createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    { request, response }
  )

  const { data } = await supabaseClient.from('test').select('*')

  return json(
    { data },
    {
      headers: response.headers,
    }
  )
}
```

----------------------------------------

TITLE: Create and populate example 'instruments' table
DESCRIPTION: SQL commands to create an 'instruments' table with `id` and `name` columns, and insert sample data for demonstration purposes.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/debugging-performance.mdx#_snippet_2

LANGUAGE: sql
CODE:
```
create table instruments (
  id int8 primary key,
  name text
);

insert into instruments
  (id, name)
values
  (1, 'violin'),
  (2, 'viola'),
  (3, 'cello');
```

----------------------------------------

TITLE: Wrap fetch with fetch-retry and create Supabase client
DESCRIPTION: This JavaScript snippet demonstrates how to wrap the global `fetch` function with `fetch-retry` and then pass the resulting `fetchWithRetry` instance to the `supabase-js` client's global options, enabling automatic retries for all Supabase API calls.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/api/automatic-retries-in-supabase-js.mdx#_snippet_1

LANGUAGE: javascript
CODE:
```
import { createClient } from '@supabase/supabase-js'
import fetchRetry from 'fetch-retry'

// Wrap the global fetch with fetch-retry
const fetchWithRetry = fetchRetry(fetch)

// Create a Supabase client instance with the custom fetch
const supabase = createClient('https://your-supabase-url.supabase.co', 'your-anon-key', {
  global: {
    fetch: fetchWithRetry,
  },
})
```

----------------------------------------

TITLE: Implementing Product List ViewModel in Kotlin
DESCRIPTION: This `ProductListViewModel` handles the business logic for the product list screen. It uses `MutableStateFlow` to expose product data and loading state, `viewModelScope` for asynchronous operations, and interacts with a `ProductRepository` to fetch and delete products. It also includes a private extension function to convert `ProductDto` to a domain `Product` model.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-kotlin.mdx#_snippet_17

LANGUAGE: kotlin
CODE:
```
@HiltViewModel
class ProductListViewModel @Inject constructor(
private val productRepository: ProductRepository,
) : ViewModel() {

    private val _productList = MutableStateFlow<List<Product>?>(listOf())
    val productList: Flow<List<Product>?> = _productList


    private val _isLoading = MutableStateFlow(false)
    val isLoading: Flow<Boolean> = _isLoading

    init {
        getProducts()
    }

    fun getProducts() {
        viewModelScope.launch {
            val products = productRepository.getProducts()
            _productList.emit(products?.map { it -> it.asDomainModel() })
        }
    }

    fun removeItem(product: Product) {
        viewModelScope.launch {
            val newList = mutableListOf<Product>().apply { _productList.value?.let { addAll(it) } }
            newList.remove(product)
            _productList.emit(newList.toList())
            // Call api to remove
            productRepository.deleteProduct(id = product.id)
            // Then fetch again
            getProducts()
        }
    }

    private fun ProductDto.asDomainModel(): Product {
        return Product(
            id = this.id,
            name = this.name,
            price = this.price,
            image = this.image
        )
    }

}
```

----------------------------------------

TITLE: Recommended Supabase Edge Functions Folder Structure
DESCRIPTION: This snippet illustrates the recommended folder structure for Supabase Edge Functions, promoting 'fat functions' and shared code. It includes a top-level import map, a `_shared` directory for common utilities, individual function folders, and a `tests` directory for unit tests.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/functions/development-tips.mdx#_snippet_1

LANGUAGE: bash
CODE:
```
└── supabase
    ├── functions
    │   ├── import_map.json # A top-level import map to use across functions.
    │   ├── _shared
    │   │   ├── supabaseAdmin.ts # Supabase client with SERVICE_ROLE key.
    │   │   └── supabaseClient.ts # Supabase client with ANON key.
    │   │   └── cors.ts # Reusable CORS headers.
    │   ├── function-one # Use hyphens to name functions.
    │   │   └── index.ts
    │   └── function-two
    │   │   └── index.ts
    │   └── tests
    │       └── function-one-test.ts
    │       └── function-two-test.ts
    ├── migrations
    └── config.toml
```

----------------------------------------

TITLE: Query pg_net._http_response for failed embedding jobs
DESCRIPTION: Queries the `net._http_response` table to diagnose issues with the embedding generation process, specifically looking for responses with failed jobs.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/automatic-embeddings.mdx#_snippet_22

LANGUAGE: SQL
CODE:
```
select
  *
from
  net._http_response
where
  (headers->>'x-failed-jobs')::int > 0;
```

----------------------------------------

TITLE: SvelteKit Authentication Layout Component
DESCRIPTION: This Svelte layout component defines the basic structure for authentication-related pages. It includes a header with navigation and renders child components within its structure.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/sveltekit.mdx#_snippet_10

LANGUAGE: Svelte
CODE:
```
<script>
  let { children } = $props()
</script>

<header>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>

{@render children()}
```

----------------------------------------

TITLE: React App Component for Supabase Session Management
DESCRIPTION: This main application component manages the user's Supabase session state. It initializes the session on load and listens for authentication state changes, conditionally rendering either the `Auth` component for sign-in/sign-up or the `Account` component for authenticated users.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/tutorials/with-react.mdx#_snippet_6

LANGUAGE: jsx
CODE:
```
import './App.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth'
import Account from './Account'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    </div>
  )
}

export default App
```

----------------------------------------

TITLE: Scaffold New Supabase Edge Function
DESCRIPTION: Create a new TypeScript-based Supabase Edge Function named 'openai' using the CLI, which generates the boilerplate file at `./supabase/functions/openai/index.ts`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/examples/openai.mdx#_snippet_1

LANGUAGE: shell
CODE:
```
supabase functions new openai
```

----------------------------------------

TITLE: Create Postgres function for optimized Supabase Storage object listing
DESCRIPTION: This SQL function, `list_objects`, provides a highly optimized way to retrieve objects from a Supabase Storage bucket. Unlike the generic `supabase.storage.list()` method, it directly queries the `storage.objects` table, allowing for faster execution, especially with a large number of objects. It supports filtering by a prefix and includes pagination parameters for efficient data retrieval.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/storage/production/scaling.mdx#_snippet_0

LANGUAGE: sql
CODE:
```
create or replace function list_objects(
    bucketid text,
    prefix text,
    limits int default 100,
    offsets int default 0
) returns table (
    name text,
    id uuid,
    updated_at timestamptz,
    created_at timestamptz,
    last_accessed_at timestamptz,
    metadata jsonb
) as $$
begin
    return query SELECT
        objects.name,
        objects.id,
        objects.updated_at,
        objects.created_at,
        objects.last_accessed_at,
        objects.metadata
    FROM storage.objects
    WHERE objects.name like prefix || '%'
    AND bucket_id = bucketid
    ORDER BY name ASC
    LIMIT limits
    OFFSET offsets;
end;
$$ language plpgsql stable;
```

----------------------------------------

TITLE: Broadcasting Messages with Supabase Dart Client
DESCRIPTION: This snippet illustrates broadcasting messages using the Supabase Dart client. It covers sending messages over HTTP before channel subscription and via WebSockets once the channel is subscribed. The `sendBroadcastMessage` function is used for sending.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/realtime/broadcast.mdx#_snippet_11

LANGUAGE: Dart
CODE:
```
final myChannel = supabase.channel('test-channel');

// Sending a message before subscribing will use HTTP
final res = await myChannel.sendBroadcastMessage(
  event: "shout",
  payload: { 'message': 'Hi' },
);
print(res);

// Sending a message after subscribing will use Websockets
myChannel.subscribe((status, error) {
  if (status != RealtimeSubscribeStatus.subscribed) {
    return;
  }

  myChannel.sendBroadcastMessage(
    event: 'shout',
    payload: { 'message': 'hello, world' },
  );
});
```

----------------------------------------

TITLE: Create RUM Index with rum_anyarray_ops for Array Types
DESCRIPTION: Shows how to create a RUM index on an anyarray column using rum_anyarray_ops. This operator class supports various array operators and ordering by the distance operator.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/rum.mdx#_snippet_5

LANGUAGE: SQL
CODE:
```
CREATE TABLE test_array (i int2[]);
INSERT INTO test_array VALUES ('{}'), ('{0}'), ('{1,2,3,4}'), ('{1,2,3}'), ('{1,2}'), ('{1}');
CREATE INDEX idx_array ON test_array USING rum (i rum_anyarray_ops);
```

----------------------------------------

TITLE: Fetch Supabase Data in Static Next.js Server Component (Unauthenticated)
DESCRIPTION: This snippet illustrates how to fetch data from Supabase within a Next.js Server Component for static content. It uses `createClient` without authentication context, suitable for data fetched at build time. The example retrieves all 'todos'.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/auth-helpers/nextjs.mdx#_snippet_17

LANGUAGE: JavaScript
CODE:
```
import { createClient } from '@supabase/supabase-js'

export default async function Page() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  const { data } = await supabase.from('todos').select()
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
```

LANGUAGE: TypeScript
CODE:
```
import { createClient } from '@supabase/supabase-js'

import type { Database } from '@/lib/database.types'

export default async function Page() {
  const supabase = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const { data } = await supabase.from('todos').select()
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
```

----------------------------------------

TITLE: Create Local Document Sections Table with Embeddings in Supabase
DESCRIPTION: This SQL snippet defines the `document_sections` table within the Supabase database. This table stores content and embeddings for document sections, allowing for similarity search via `pgvector`. It references external documents by `document_id` without a foreign key.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/rag-with-permissions.mdx#_snippet_8

LANGUAGE: sql
CODE:
```
create table document_sections (
  id bigint primary key generated always as identity,
  document_id bigint not null,
  content text not null,
  embedding vector (384)
);
```

----------------------------------------

TITLE: Test Hypothetical Index and Re-Analyze Query Plan
DESCRIPTION: Demonstrates how to use `hypopg_create_index` to create a virtual index on the 'account(id)' column. Immediately following, `EXPLAIN` is used again to show how the query plan changes to an 'Index Scan', indicating the hypothetical index's potential benefit. Note that hypothetical indexes are session-specific and should be created and tested in a single query.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/hypopg.mdx#_snippet_3

LANGUAGE: sql
CODE:
```
select * from hypopg_create_index('create index on account(id)');

explain select * from account where id=1;

                                     QUERY PLAN
------------------------------------------------------------------------------------
 Index Scan using <13504>btree_account_id on hypo  (cost=0.29..8.30 rows=1 width=13)
   Index Cond: (id = 1)
(2 rows)
```

----------------------------------------

TITLE: Renaming Case-Sensitive Tables to Lowercase in SQL
DESCRIPTION: Provides a SQL query to rename a case-sensitive table (enclosed in double quotes) to a lowercase, case-insensitive name. This helps resolve 'relation does not exist' errors caused by capitalization mismatches.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/resolving-42p01-relation-does-not-exist-error-W4_9-V.mdx#_snippet_2

LANGUAGE: sql
CODE:
```
alter table "Table_name"
rename to table_name;
```

----------------------------------------

TITLE: Enable Global PGAudit Logging for Postgres Role
DESCRIPTION: Configures PGAudit to record all database events by setting the log level to 'all' for the 'postgres' superuser role, effectively monitoring all database activity.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pgaudit.mdx#_snippet_7

LANGUAGE: SQL
CODE:
```
alter role "postgres" set pgaudit.log to 'all';
```

----------------------------------------

TITLE: Supabase CLI: Link to a Supabase project
DESCRIPTION: Explains how to link the Supabase CLI with a specific Supabase project using its reference ID. Once linked, the CLI automatically connects to the project's database when in the project folder, eliminating the need for the `--db-url` flag.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/inspect.mdx#_snippet_2

LANGUAGE: Shell
CODE:
```
supabase link --project-ref <project-id>
```

----------------------------------------

TITLE: Create Supabase Auth User with Custom Metadata
DESCRIPTION: This TypeScript snippet demonstrates how to create a new user in Supabase Auth using the `supabase.auth.admin.createUser` method. It shows how to include `user_metadata` for user-updatable information (e.g., full name) and `app_metadata` for admin-controlled attributes (e.g., role). These fields map to `raw_user_meta_data` and `raw_app_meta_data` columns in the `auth.users` table.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/migrating-to-supabase/auth0.mdx#_snippet_7

LANGUAGE: typescript
CODE:
```
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('your_project_url', 'your_supabase_api_key')

const { data, error } = await supabase.auth.admin.createUser({
  email: 'valid.email@supabase.io',
  user_metadata: {
    full_name: 'Foo Bar',
  },
  app_metadata: {
    role: 'admin',
  },
})
```

----------------------------------------

TITLE: SvelteKit Server Load Function for Private Notes Page
DESCRIPTION: This TypeScript server load function for a SvelteKit private page fetches user-specific notes from the Supabase database. It uses `depends` to invalidate the cache when the `notes` table changes and retrieves `id` and `note` fields ordered by `id`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/server-side/sveltekit.mdx#_snippet_16

LANGUAGE: TypeScript
CODE:
```
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
  depends('supabase:db:notes')
  const { data: notes } = await supabase.from('notes').select('id,note').order('id')
}
```

----------------------------------------

TITLE: Supabase Custom Domain Hourly Billing Example
DESCRIPTION: Illustrates how custom domain charges are calculated based on hourly activation, showing that a full hour is billed even for partial usage within that hour.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/manage-your-usage/custom-domains.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
| Time Window                                 | Custom Domain Activated | Hours Billed | Description         |
| ------------------------------------------- | ----------------------- | ------------ | ------------------- |
| January 1, 00:00 AM - January 10, 4:00 PM   | No                      | 0            |                     |
| January 10, 04:00 PM - January 10, 4:30 PM  | No                      | 0            |                     |
| January 10, 04:30 PM - January 10, 5:00 PM  | Yes                     | 1            | full hour is billed |
| January 10, 05:00 PM - January 31, 23:59 PM | Yes                     | 511          |                     |
```

----------------------------------------

TITLE: Accessing Custom Schemas with Supabase JS Client
DESCRIPTION: Demonstrates how to explicitly reference a custom schema (e.g., 'myschema') when querying tables using the Supabase JavaScript client. This is crucial to avoid 'relation does not exist' errors when tables are not in the default 'public' schema.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/resolving-42p01-relation-does-not-exist-error-W4_9-V.mdx#_snippet_1

LANGUAGE: js
CODE:
```
const { data, error } = await supabase.schema('myschema').from('mytable').select()
```

----------------------------------------

TITLE: Supabase CLI: domains activate Command
DESCRIPTION: Activates a custom domain for a Supabase project. Requires the project reference. This command is used after preparing applications and integrations for the domain change.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/platform/custom-domains.mdx#_snippet_6

LANGUAGE: APIDOC
CODE:
```
supabase domains activate
  --project-ref <project_reference>: The reference ID of the Supabase project.
```

----------------------------------------

TITLE: Complete `supabase-js` soft delete and restore workflow
DESCRIPTION: A comprehensive example demonstrating the full workflow of soft deleting an item, querying active items, and then restoring a soft-deleted item using `supabase-js`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/troubleshooting/soft-deletes-with-supabase-js.mdx#_snippet_5

LANGUAGE: javascript
CODE:
```
// 1. Soft delete an item
await supabase.from('items').update({ deleted_at: new Date().toISOString() }).eq('id', 123)

// 2. Query active (non-deleted) items
const { data, error } = await supabase
  .from('active_items') // Query the view, not the table
  .select('*')

if (error) console.error('Error fetching active items:', error)
else console.log('Active items:', data)

// 3. Restore a soft-deleted item
await supabase.from('items').update({ deleted_at: null }).eq('id', 123)
```

----------------------------------------

TITLE: Run Next.js development server
DESCRIPTION: Starts the Next.js development server, making the application accessible locally to view the queried Supabase data at http://localhost:3000/instruments.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/getting-started/quickstarts/nextjs.mdx#_snippet_3

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Process and Schedule Embedding Jobs with PL/pgSQL and pg_cron
DESCRIPTION: This PL/pgSQL function, `util.process_embeddings`, reads embedding job messages from the 'embedding_jobs' queue, groups them into batches, and invokes an 'embed' Edge Function for each batch to generate embeddings. It includes parameters for batch size, max requests, and timeout. The `cron.schedule` command then schedules this function to run every 10 seconds using `pg_cron`, ensuring continuous asynchronous processing of embedding requests.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/ai/automatic-embeddings.mdx#_snippet_6

LANGUAGE: SQL
CODE:
```
create or replace function util.process_embeddings(
  batch_size int = 10,
  max_requests int = 10,
  timeout_milliseconds int = 5 * 60 * 1000 -- default 5 minute timeout
)
returns void
language plpgsql
as $$
declare
  job_batches jsonb[];
  batch jsonb;
begin
  with
    -- First get jobs and assign batch numbers
    numbered_jobs as (
      select
        message || jsonb_build_object('jobId', msg_id) as job_info,
        (row_number() over (order by 1) - 1) / batch_size as batch_num
      from pgmq.read(
        queue_name => 'embedding_jobs',
        vt => timeout_milliseconds / 1000,
        qty => max_requests * batch_size
      )
    ),
    -- Then group jobs into batches
    batched_jobs as (
      select
        jsonb_agg(job_info) as batch_array,
        batch_num
      from numbered_jobs
      group by batch_num
    )
  -- Finally aggregate all batches into array
  select array_agg(batch_array)
  from batched_jobs
  into job_batches;

  -- Invoke the embed edge function for each batch
  foreach batch in array job_batches loop
    perform util.invoke_edge_function(
      name => 'embed',
      body => batch,
      timeout_milliseconds => timeout_milliseconds
    );
  end loop;
end;
$$;

-- Schedule the embedding processing
select
  cron.schedule(
    'process-embeddings',
    '10 seconds',
    $$
    select util.process_embeddings();
    $$
  );
```

----------------------------------------

TITLE: Generate and store embeddings using JavaScript and Supabase
DESCRIPTION: This JavaScript snippet demonstrates how to generate a vector embedding from text using Transformer.js and then store it into a PostgreSQL table via the Supabase client. It covers generating the embedding and inserting it into the 'posts' table.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pgvector.mdx#_snippet_2

LANGUAGE: javascript
CODE:
```
import { pipeline } from '@xenova/transformers'
const generateEmbedding = await pipeline('feature-extraction', 'Supabase/gte-small')

const title = 'First post!'
const body = 'Hello world!'

// Generate a vector using Transformers.js
const output = await generateEmbedding(body, {
  pooling: 'mean',
  normalize: true,
})

// Extract the embedding output
const embedding = Array.from(output.data)

// Store the vector in Postgres
const { data, error } = await supabase.from('posts').insert({
  title,
  body,
  embedding,
})
```

----------------------------------------

TITLE: Supabase CLI: Configure LinkedIn OIDC Provider
DESCRIPTION: Shows how to update the `config.toml` file for the Supabase CLI to enable and configure the new `linkedin_oidc` external authentication provider, including placeholders for client ID and secret.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/social-login/auth-linkedin.mdx#_snippet_3

LANGUAGE: TOML
CODE:
```
[auth.external.linkedin_oidc]
enabled = true
client_id = ...
secret = ...
```

----------------------------------------

TITLE: Verify Global PGAudit Logging for Postgres Role
DESCRIPTION: Checks the configuration of the 'postgres' role to confirm if PGAudit logging is enabled globally, by inspecting the `rolconfig` for `pgaudit.log=all`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/database/extensions/pgaudit.mdx#_snippet_8

LANGUAGE: SQL
CODE:
```
select
  rolname,
  rolconfig
from pg_roles
where rolname = 'postgres';
-- should return a rolconfig path with "pgaudit.log=all" present
```

----------------------------------------

TITLE: Successful OTP Verification Response Format
DESCRIPTION: This JSON snippet illustrates the structure of a successful response after verifying a phone OTP with Supabase. It includes an access token, token type, expiration time, and a refresh token, which are essential for subsequent authenticated operations.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/phone-login.mdx#_snippet_2

LANGUAGE: JSON
CODE:
```
{
  "access_token": "<ACCESS_TOKEN>",
  "token_type": "bearer",
  "expires_in": 3600,
  "refresh_token": "<REFRESH_TOKEN>"
}
```

----------------------------------------

TITLE: Configure iOS Info.plist for Flutter Google Sign-in
DESCRIPTION: This XML snippet is to be added to the `/ios/Runner/Info.plist` file for Flutter applications. It configures the `CFBundleURLTypes` to enable Google Sign-in by defining a URL scheme. Users must replace the placeholder string with their reversed client ID obtained from `GoogleService-Info.plist`.
SOURCE: https://github.com/supabase/supabase/blob/master/apps/docs/content/guides/auth/social-login/auth-google.mdx#_snippet_1

LANGUAGE: xml
CODE:
```
<!-- Put me in the [my_project]/ios/Runner/Info.plist file -->
<!-- Google Sign-in Section -->
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLSchemes</key>
    <array>
      <!-- TODO Replace this value: -->
      <!-- Copied from GoogleService-Info.plist key REVERSED_CLIENT_ID -->
      <string>com.googleusercontent.apps.861823949799-vc35cprkp249096uujjn0vvnmcvjppkn</string>

```