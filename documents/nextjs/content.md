TITLE: Create Next.js App with API Routes Middleware Example
DESCRIPTION: Instructions to bootstrap a new Next.js project using the `create-next-app` utility, pre-configured with the API routes middleware example. This command sets up the project directory and installs necessary dependencies, allowing users to quickly get started with the example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/api-routes-middleware/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example api-routes-middleware api-routes-middleware-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example api-routes-middleware api-routes-middleware-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example api-routes-middleware api-routes-middleware-app
```

----------------------------------------

TITLE: Initialize Next.js Project with API Example
DESCRIPTION: Demonstrates how to use `create-next-app` with the `--api` flag to automatically include an example `route.ts` file, facilitating the creation of API endpoints in a new Next.js project.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/backend-for-frontend.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app@latest --api
```

----------------------------------------

TITLE: Bootstrap Next.js GraphQL API Example Project
DESCRIPTION: Commands to initialize a new Next.js project with the provided GraphQL API example. Choose your preferred package manager: npx (npm), yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/api-routes-graphql/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example api-routes-graphql api-routes-graphql-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example api-routes-graphql api-routes-graphql-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example api-routes-graphql api-routes-graphql-app
```

----------------------------------------

TITLE: Bootstrap Next.js App with Context API Example
DESCRIPTION: These commands initialize a new Next.js application using the `create-next-app` utility, specifically bootstrapping it with the `with-context-api` example template. This allows developers to quickly set up a project that demonstrates React Context API usage, using different package managers like npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-context-api/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-context-api with-context-api-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-context-api with-context-api-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-context-api with-context-api-app
```

----------------------------------------

TITLE: Example .env.local File Configuration
DESCRIPTION: Shows a complete example of the `.env.local` file with configured Sanity project ID, dataset, and API read token.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sanity/README.md#_snippet_7

LANGUAGE: bash
CODE:
```
NEXT_PUBLIC_SANITY_PROJECT_ID="r0z1eifg"
NEXT_PUBLIC_SANITY_DATASET="blog-vercel"
SANITY_API_READ_TOKEN="sk..."
```

----------------------------------------

TITLE: Bootstrap Next.js API Routes REST Example Project
DESCRIPTION: Commands to initialize a new Next.js project using the `api-routes-rest` example template. This sets up the project structure and dependencies, demonstrating usage with npm, Yarn, and pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/api-routes-rest/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example api-routes-rest api-routes-rest-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example api-routes-rest api-routes-rest-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example api-routes-rest api-routes-rest-app
```

----------------------------------------

TITLE: Bootstrap Next.js API Routes CORS Example Project
DESCRIPTION: These commands initialize a new Next.js project using the `create-next-app` utility, specifically bootstrapping it with the `api-routes-cors` example. Each command creates a new directory named `api-routes-cors-app` for the project using a different package manager.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/api-routes-cors/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example api-routes-cors api-routes-cors-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example api-routes-cors api-routes-cors-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example api-routes-cors api-routes-cors-app
```

----------------------------------------

TITLE: Initialize Next.js TypeScript GraphQL Example Project
DESCRIPTION: These bash commands illustrate how to bootstrap the Next.js example project, which integrates TypeScript and GraphQL, using different package managers: `npx` (npm), `yarn`, and `pnpm`. Each command creates a new Next.js application pre-configured with the example's setup, allowing users to quickly get started.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-typescript-graphql/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-typescript-graphql with-typescript-graphql-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-typescript-graphql with-typescript-graphql-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-typescript-graphql with-typescript-graphql-app
```

----------------------------------------

TITLE: Initializing Next.js Project with an Example (CLI)
DESCRIPTION: This snippet demonstrates how to initialize a Next.js project using a specific example from the official Next.js examples collection. The `--example` flag allows users to bootstrap their application with pre-configured setups, such as `route-handlers`, accelerating development by providing a functional starting point.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npx create-next-app --example route-handlers
```

----------------------------------------

TITLE: Configure Umbraco Delivery API
DESCRIPTION: Adds or updates the Delivery API configuration within the Umbraco CMS settings in appsettings.json to enable the API and optionally set an API key for preview functionality.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco/README.md#_snippet_4

LANGUAGE: json
CODE:
```
"Umbraco": {
    "CMS": {
      "DeliveryApi": {
        "Enabled": true,
        "ApiKey": "my-secret-api-key"
      },
      ....

```

----------------------------------------

TITLE: Initial .env.local Configuration
DESCRIPTION: Example content for the `.env.local` file, showing the placeholder for the production Enterspeed API key and commented-out placeholders for preview mode.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-enterspeed/README.md#_snippet_6

LANGUAGE: bash
CODE:
```
ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY=

# Only required if you want to enable preview mode
# ENTERSPEED_PREVIEW_ENVIRONMENT_API_KEY=
# ENTERSPEED_PREVIEW_SECRET
```

----------------------------------------

TITLE: Next.js API Routes for Todo Item Management
DESCRIPTION: Documents the API endpoints exposed by the Next.js application for managing todo items, including operations for fetching, adding, searching, updating, and deleting items.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-tigris/README.md#_snippet_6

LANGUAGE: APIDOC
CODE:
```
pages/api/items/index.ts:
  GET /api/items - to get an array of to-do items as Array<TodoItem>
  POST /api/items - to add an item to the list

/pages/api/items/search.ts:
  GET /api/items/search?q=query - to find and return items matching the given query

pages/api/item/[id].ts:
  GET /api/item/{id} - to fetch an item
  PUT /api/item/{id} - to update the given item
  DELETE /api/item/[id] - to delete an item
```

----------------------------------------

TITLE: Next.js Preview Mode API Endpoint
DESCRIPTION: This API endpoint is used to enable Next.js Preview Mode, allowing users to view draft content from the CMS before it's published. It requires a secret string for authentication and the slug of the content to be previewed.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-takeshape/README.md#_snippet_4

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/preview?secret=<secret>&slug=<slug>
  <secret>: The string entered for TAKESHAPE_PREVIEW_SECRET
  <slug>: The post's slug attribute (from TakeShape)
```

----------------------------------------

TITLE: Module Entrypoints Configuration (Text)
DESCRIPTION: This configuration block illustrates how module entrypoints are mapped within the build system. It specifies the ModuleEvaluation starting point and explicitly lists named exports like 'GET' and 'runtime', associating them with their respective module parts for efficient bundling and resolution.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/route-handler/output.md#_snippet_3

LANGUAGE: text
CODE:
```
{
    ModuleEvaluation: 0,
    Export(
        "GET",
    ): 0,
    Export(
        "runtime",
    ): 2,
    Exports: 2,
}
```

----------------------------------------

TITLE: Next.js Preview Mode API Endpoint
DESCRIPTION: Describes the URL structure for enabling Next.js Preview Mode. This API endpoint allows viewing draft content by passing a secret key and the post's slug as query parameters.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/README.md#_snippet_4

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/preview?secret=<secret>&slug=<slug>
```

----------------------------------------

TITLE: Example .env.local File Configuration
DESCRIPTION: This snippet illustrates the structure and required environment variables for the `.env.local` file. It includes placeholders for the TakeShape Project ID, API Key, and a secret string for Next.js Preview Mode, which are essential for connecting the application to the CMS.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-takeshape/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
TAKESHAPE_PROJECT_ID=...
TAKESHAPE_API_KEY=...
TAKESHAPE_PREVIEW_SECRET=...
```

----------------------------------------

TITLE: Define Next.js GET API Route Handler (JavaScript)
DESCRIPTION: This code defines an asynchronous GET request handler for a Next.js API route. It takes a req (request) object and uses NextResponse.json to return a JSON payload containing the pathname extracted from req.nextUrl. This is a fundamental pattern for creating serverless API endpoints.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/route-handler/output.md#_snippet_1

LANGUAGE: js
CODE:
```
export const GET = (req)=>{
    return NextResponse.json({
        pathname: req.nextUrl.pathname
    });
};
```

----------------------------------------

TITLE: Bootstrap Next.js DatoCMS Example Project
DESCRIPTION: Use `create-next-app` with npm, Yarn, or pnpm to initialize a new Next.js project based on the DatoCMS example. This command sets up the project structure and dependencies required to start development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-datocms/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-datocms cms-datocms-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-datocms cms-datocms-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-datocms cms-datocms-app
```

----------------------------------------

TITLE: WordPress REST API Endpoint Registrations for Sitemap
DESCRIPTION: These code blocks register custom REST API endpoints under the `sitemap/v1` namespace. Each endpoint is configured to use the `GET` method and calls a specific `wsra_generate_*_api` function to retrieve sitemap data.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_15

LANGUAGE: APIDOC
CODE:
```
sitemap/v1/posts:
  Method: GET
  Callback: wsra_generate_posts_api
  Description: Retrieves a list of post URLs and their last modified dates.

sitemap/v1/taxonomy:
  Method: GET
  Callback: wsra_generate_taxonomy_api
  Description: Retrieves a list of taxonomy (category/tag) URLs.

sitemap/v1/author:
  Method: GET
  Callback: wsra_generate_author_api
  Description: Retrieves a list of author URLs.

sitemap/v1/totalpages:
  Method: GET
  Callback: wsra_generate_totalpages_api
  Description: Retrieves total counts for categories, tags, users, and published posts by type.
```

----------------------------------------

TITLE: Example .env.local configuration for Prepr
DESCRIPTION: Illustrates the structure and required environment variables for connecting a Next.js application to Prepr. It includes the GraphQL API endpoint, production and preview access tokens, and a custom preview secret for enabling preview mode.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-prepr/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
PREPRIO_API=https://graphql.prepr.io/graphql
PREPRIO_PRODUCTION_TOKEN='your Production access token'
PREPRIO_PREVIEW_TOKEN='your Preview access token'
PREPRIO_PREVIEW_SECRET='your secret id'
```

----------------------------------------

TITLE: Bootstrap Next.js Example with create-next-app
DESCRIPTION: These commands illustrate how to initialize a new Next.js project by cloning the 'with-passport-and-next-connect' example using different package managers. This process sets up the necessary project structure and dependencies, allowing users to quickly get started with the example application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-passport-and-next-connect/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-passport-and-next-connect with-passport-and-next-connect-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-passport-and-next-connect with-passport-and-next-connect-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-passport-and-next-connect with-passport-and-next-connect-app
```

----------------------------------------

TITLE: Bootstrap Next.js TakeShape Blog Example
DESCRIPTION: These commands demonstrate how to initialize a new Next.js application pre-configured with the TakeShape CMS example using different package managers: npm, Yarn, and pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-takeshape/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-takeshape cms-takeshape-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-takeshape cms-takeshape-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-takeshape cms-takeshape-app
```

----------------------------------------

TITLE: MDX Example for Single and Multi-line Notes
DESCRIPTION: Shows the MDX syntax for creating 'Good to know' notes, including examples for both single-line and multi-line bulleted notes, used for important but non-critical information.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_15

LANGUAGE: mdx
CODE:
```
> **Good to know**: This is a single line note.

> **Good to know**:
>
> - We also use this format for multi-line notes.
> - There are sometimes multiple items worth knowing or keeping in mind.
```

----------------------------------------

TITLE: Create a Basic GET Route Handler
DESCRIPTION: Demonstrates how to create a simple GET request handler that returns a JSON response using the Web Response API.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/route.mdx#_snippet_0

LANGUAGE: ts
CODE:
```
export async function GET() {
  return Response.json({ message: 'Hello World' })
}
```

LANGUAGE: js
CODE:
```
export async function GET() {
  return Response.json({ message: 'Hello World' })
}
```

----------------------------------------

TITLE: Bootstrap Next.js api.video example application
DESCRIPTION: Commands to initialize a new Next.js project using the `create-next-app` utility with the `with-apivideo` example template. This allows users to quickly set up the project structure and initial files using their preferred package manager (npx, yarn, or pnpm).
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-apivideo/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-apivideo with-apivideo-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-apivideo with-apivideo-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-apivideo with-apivideo-app
```

----------------------------------------

TITLE: Install Dependencies and Run Development Server
DESCRIPTION: Commands to install project dependencies and start the Next.js development server using either npm or yarn.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-enterspeed/README.md#_snippet_7

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Implement Dynamic API Routes in Next.js
DESCRIPTION: This example demonstrates how to create dynamic API routes in Next.js, following the same file naming conventions as dynamic pages. It shows how to access dynamic parameters from the request query and use them in the response, enabling flexible routing based on URL segments.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_16

LANGUAGE: ts
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pid } = req.query
  res.end(`Post: ${pid}`)
}
```

LANGUAGE: js
CODE:
```
export default function handler(req, res) {
  const { pid } = req.query
  res.end(`Post: ${pid}`)
}
```

----------------------------------------

TITLE: API Endpoints for Post Management
DESCRIPTION: Documentation for the REST API endpoints used to create, update, publish, and delete posts within the application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-edgedb/README.md#_snippet_8

LANGUAGE: APIDOC
CODE:
```
POST /api/post:
  Description: Create a new post
  Body: {title: string; content: string; authorName: string}
```

LANGUAGE: APIDOC
CODE:
```
PATCH /api/post/:id:
  Description: Update a post by ID
  Body: {title?: string; content?: string;}
```

LANGUAGE: APIDOC
CODE:
```
PUT /api/publish/:id:
  Description: Publish a post by ID
```

LANGUAGE: APIDOC
CODE:
```
DELETE /api/post/:id:
  Description: Delete a post by ID
```

----------------------------------------

TITLE: Configure Webiny CMS API Key
DESCRIPTION: Instructions for creating an API key in Webiny's Headless CMS. The key should have custom access level for all content model groups with 'read' and 'preview' permissions to allow fetching both published and draft content.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-webiny/README.md#_snippet_4

LANGUAGE: APIDOC
CODE:
```
API Key Configuration:
  - Name: Any
  - Description: Any
  - Headless CMS Access: Custom
    - Content Model Groups: All
      - Permissions: read, preview
```

----------------------------------------

TITLE: Define GET Route Handlers in Next.js App Router
DESCRIPTION: Illustrates how to create custom GET request handlers using Route Handlers in the `app` directory. These handlers leverage Web Request and Response APIs, replacing traditional API Routes for server-side logic. Examples are provided for both TypeScript and JavaScript.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/migrating/app-router-migration.mdx#_snippet_30

LANGUAGE: ts
CODE:
```
export async function GET(request: Request) {}
```

LANGUAGE: js
CODE:
```
export async function GET(request) {}
```

----------------------------------------

TITLE: Next.js Docs File System Routing: Alphabetical Sorting
DESCRIPTION: Demonstrates how Next.js documentation uses file-system routing where pages are sorted alphabetically by default, as seen in the functions API reference.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_1

LANGUAGE: txt
CODE:
```
04-functions
├── after.mdx
├── cacheLife.mdx
├── cacheTag.mdx
└── ...
```

----------------------------------------

TITLE: URL API Documentation
DESCRIPTION: Documents the URL Web API, an object providing static methods for creating object URLs.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_59

LANGUAGE: APIDOC
CODE:
```
URL:
  Description: Represents an object providing static methods used for creating object URLs
```

----------------------------------------

TITLE: Project File Structure Overview
DESCRIPTION: This snippet illustrates the directory and file organization of the Next.js Tigris example application, highlighting key folders like `lib`, `db`, and `pages` which contain Tigris client configuration, database models, and API routes respectively.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-tigris/README.md#_snippet_7

LANGUAGE: text
CODE:
```
├── package.json
├── lib
│   ├── tigris.ts
├── db
│   └── models
│       └── todoItems.ts
└── pages
    ├── index.tsx
    └── api
        ├── item
        │   ├── [id].ts
        └── items
            ├── index.ts
            └── search.ts
```

----------------------------------------

TITLE: Cache a GET Route Handler in Next.js
DESCRIPTION: Illustrates how to enable static caching for a GET Route Handler in Next.js by setting `export const dynamic = 'force-static'`. The example fetches data from an external API and returns it as JSON, demonstrating a common use case for cached GET requests.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/15-route-handlers-and-middleware.mdx#_snippet_1

LANGUAGE: ts
CODE:
```
export const dynamic = 'force-static'

export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()

  return Response.json({ data })
}
```

LANGUAGE: js
CODE:
```
export const dynamic = 'force-static'

export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()

  return Response.json({ data })
}
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: These commands install project dependencies and then start the Next.js development server. This allows you to view your blog locally at `http://localhost:3000` and enables hot-reloading for development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-builder-io/README.md#_snippet_4

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Bootstrap Next.js Xata Example Project
DESCRIPTION: These commands use different package managers (npm, Yarn, pnpm) to create a new Next.js application based on the 'with-xata' example template. This sets up the initial project structure, allowing users to quickly get started with a pre-configured Next.js and Xata integration.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-xata/README.md#_snippet_0

LANGUAGE: shell
CODE:
```
npx create-next-app --example with-xata with-xata-app
```

LANGUAGE: shell
CODE:
```
yarn create next-app --example with-xata with-xata-app
```

LANGUAGE: shell
CODE:
```
pnpm create next-app --example with-xata with-xata-app
```

----------------------------------------

TITLE: Adding Sanity API Read Token to .env.local
DESCRIPTION: Adds the `SANITY_API_READ_TOKEN` to your `.env.local` file. This token is crucial for authentication when Sanity Studio live previews the application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sanity/README.md#_snippet_6

LANGUAGE: bash
CODE:
```
SANITY_API_READ_TOKEN="<paste your token here>"
```

----------------------------------------

TITLE: Bootstrap Next.js Apollo Server Example with create-next-app
DESCRIPTION: These commands demonstrate how to initialize a new Next.js application by cloning the `api-routes-apollo-server` example. Users can choose their preferred package manager (npm, Yarn, or pnpm) to quickly set up the project for local development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/api-routes-apollo-server/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example api-routes-apollo-server api-routes-apollo-server-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example api-routes-apollo-server api-routes-apollo-server-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example api-routes-apollo-server api-routes-apollo-server-app
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Instructions to install project dependencies and start the Next.js development server locally using npm or Yarn.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-ghost/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Registering Taxonomy Sitemap REST API Route (PHP)
DESCRIPTION: This snippet registers a WordPress REST API endpoint for retrieving taxonomy sitemap data. It defines the route `sitemap/v1/taxonomy` with a GET method, which calls the `wsra_generate_taxonomy_api` function to handle the request and return the taxonomy URLs.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_17

LANGUAGE: PHP
CODE:
```
add_action('rest_api_init', function () {
  register_rest_route('sitemap/v1', '/taxonomy', array(
    'methods' => 'GET',
    'callback' => 'wsra_generate_taxonomy_api',
  ));
});
```

----------------------------------------

TITLE: Example .env.local Configuration for Sanity
DESCRIPTION: This snippet shows an example `.env.local` file with essential environment variables for a Next.js and Sanity project. It includes the Sanity Project ID, Dataset name, and a read token for API access and live preview.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sanity/README.md#_snippet_10

LANGUAGE: plaintext
CODE:
```
NEXT_PUBLIC_SANITY_PROJECT_ID="r0z1eifg"
NEXT_PUBLIC_SANITY_DATASET="blog-vercel"
SANITY_API_READ_TOKEN="sk..."
```

----------------------------------------

TITLE: Registering Posts Sitemap REST API Route (PHP)
DESCRIPTION: This snippet registers a WordPress REST API endpoint for retrieving post sitemap data. It defines the route `sitemap/v1/posts` with a GET method, which calls the `wsra_generate_posts_api` function to handle the request and return the post URLs.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_16

LANGUAGE: PHP
CODE:
```
add_action('rest_api_init', function () {
  register_rest_route('sitemap/v1', '/posts', array(
    'methods' => 'GET',
    'callback' => 'wsra_generate_posts_api',
  ));
});
```

----------------------------------------

TITLE: Fixing Dynamic API Call in Next.js API Route
DESCRIPTION: This example shows how to resolve the 'Dynamic API called outside request' error in a Next.js API route by moving the `headers()` function call from the global scope into the `GET` async function, ensuring it's executed within the request scope.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/next-dynamic-api-wrong-context.mdx#_snippet_1

LANGUAGE: javascript
CODE:
```
```diff filename="app/foo/route.js"
import { headers } from 'next/headers'

- const headersList = await headers()
export async function GET() {
+ const headersList = await headers()
  return ...
}
```
```

----------------------------------------

TITLE: Import Kontent.ai Content Models using Backup Manager
DESCRIPTION: This command installs the Kontent.ai Backup Manager globally and then uses it to restore content models and data into a Kontent.ai project. It requires a Management API key and the Project ID, along with the path to the backup zip file, to populate the project with predefined content structures.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-kontent-ai/README.md#_snippet_1

LANGUAGE: sh
CODE:
```
npm i -g @kontent-ai/backup-manager
kbm --action=restore --apiKey=<Management API key> --projectId=<Project ID> --zipFilename=kontent-ai-backup
```

----------------------------------------

TITLE: Registering Author Sitemap REST API Route (PHP)
DESCRIPTION: This snippet registers a WordPress REST API endpoint for retrieving author sitemap data. It defines the route `sitemap/v1/author` with a GET method, which calls the `wsra_generate_author_api` function to handle the request and return the author URLs.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_18

LANGUAGE: PHP
CODE:
```
add_action('rest_api_init', function () {
  register_rest_route('sitemap/v1', '/author', array(
    'methods' => 'GET',
    'callback' => 'wsra_generate_author_api',
  ));
});
```

----------------------------------------

TITLE: Caching a GET Route Handler in JavaScript
DESCRIPTION: This example shows how to enable caching for a GET Route Handler by setting `export const dynamic = 'force-static'`. The handler fetches data from an external API and returns it as JSON, demonstrating how to make a static data fetch within a cached route.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-building-your-application/01-routing/13-route-handlers.mdx#_snippet_3

LANGUAGE: javascript
CODE:
```
export const dynamic = 'force-static'

export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()

  return Response.json({ data })
}
```

----------------------------------------

TITLE: Next.js Docs Required Page Metadata (YAML)
DESCRIPTION: Example of a YAML front matter block defining the essential `title` and `description` fields required for every Next.js documentation page, crucial for SEO and page rendering.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_3

LANGUAGE: yaml
CODE:
```
---
title: Page Title
description: Page Description
---
```

----------------------------------------

TITLE: Create Next.js App with Neo4j Example
DESCRIPTION: Initializes a new Next.js project using the `create-next-app` utility, specifically bootstrapping it with the `with-neo4j` example template. This can be done using `npx`, `yarn`, or `pnpm`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-neo4j/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-neo4j with-neo4j-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-neo4j with-neo4j-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-neo4j with-neo4j-app
```

----------------------------------------

TITLE: ReactDOM.preload API Reference
DESCRIPTION: API documentation for the `ReactDOM.preload` method, which is used to start loading a resource early in the browser's rendering lifecycle. It takes a `href` string and an `options` object with an `as` property.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/generate-metadata.mdx#_snippet_43

LANGUAGE: APIDOC
CODE:
```
ReactDOM.preload(href: string, options: { as: string })
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: This snippet provides commands to install project dependencies and start the Next.js application in development mode. It includes options for both npm and yarn, allowing developers to choose their preferred package manager to get the application running locally.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-datocms/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev

# or

yarn install
yarn dev
```

----------------------------------------

TITLE: Parsing User Inputs for WordPress API Queries
DESCRIPTION: This PHP function `wsra_get_user_inputs` parses `GET` request parameters (`pageNo`, `perPage`, `taxonomyType`, `postType`) to construct arguments for WordPress queries. It sanitizes and defaults values, preparing arrays (`$args`, `$postArgs`) suitable for functions like `get_users` or `WP_Query`, and determines the taxonomy type for sitemap generation or other API endpoints.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_9

LANGUAGE: PHP
CODE:
```
function wsra_get_user_inputs()
{
  $pageNo = sprintf("%d", $_GET['pageNo']);
  $perPage = sprintf("%d", $_GET['perPage']);
  // Check for array key taxonomyType
  if (array_key_exists('taxonomyType', $_GET)) {
    $taxonomy = $_GET['taxonomyType'];
  } else {
    $taxonomy = 'category';
  }
  $postType = $_GET['postType'];
  $paged = $pageNo ? $pageNo : 1;
  $perPage = $perPage ? $perPage : 100;
  $offset = ($paged - 1) * $perPage;
  $args = array(
    'number' => $perPage,
    'offset' => $offset,
  );
  $postArgs = array(
    'posts_per_page' => $perPage,
    'post_type' => strval($postType ? $postType : 'post'),
    'paged' => $paged,
  );

  return [$args, $postArgs, $taxonomy];
}
```

----------------------------------------

TITLE: Configure Agility CMS Environment Variables for Next.js
DESCRIPTION: This step involves copying the example environment file and populating it with specific Agility CMS API keys and GUIDs. These variables are crucial for the Next.js application to establish a connection with the CMS, enabling content fetching and preview mode functionalities.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-agilitycms/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

LANGUAGE: bash
CODE:
```
AGILITY_CMS_GUID=...
AGILITY_CMS_API_FETCH_KEY=...
AGILITY_CMS_API_PREVIEW_KEY=...
AGILITY_CMS_SECURITY_KEY=...
```

----------------------------------------

TITLE: Construct Next.js Preview Mode URL
DESCRIPTION: Illustrates the required format for accessing the Next.js preview mode API endpoint. This URL requires a secret token for authentication, which should match the one defined in your `.env.local` file, and the slug of the content you wish to preview.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-graphcms/README.md#_snippet_3

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/preview?secret=<YOUR_SECRET_TOKEN>&slug=<SLUG_TO_PREVIEW>
```

----------------------------------------

TITLE: Bootstrap Next.js Contentful Blog Example
DESCRIPTION: Use `create-next-app` with npm, Yarn, or pnpm to quickly set up the Next.js blog example integrated with Contentful.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-contentful cms-contentful-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-contentful cms-contentful-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-contentful cms-contentful-app
```

----------------------------------------

TITLE: Direct Streaming with Web APIs in Next.js Route Handlers
DESCRIPTION: This example illustrates how to implement server-side streaming directly using native Web APIs like `ReadableStream` and `TextEncoder` in a Next.js Route Handler. It defines helper functions to convert an async iterator to a stream and simulate delays, then generates a stream of HTML paragraphs. The `GET` handler returns a `Response` object with the created stream.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-building-your-application/01-routing/13-route-handlers.mdx#_snippet_15

LANGUAGE: TypeScript
CODE:
```
// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    }
  })
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const encoder = new TextEncoder()

async function* makeIterator() {
  yield encoder.encode('<p>One</p>')
  await sleep(200)
  yield encoder.encode('<p>Two</p>')
  await sleep(200)
  yield encoder.encode('<p>Three</p>')
}

export async function GET() {
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)

  return new Response(stream)
}
```

LANGUAGE: JavaScript
CODE:
```
// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    }
  })
}

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const encoder = new TextEncoder()

async function* makeIterator() {
  yield encoder.encode('<p>One</p>')
  await sleep(200)
  yield encoder.encode('<p>Two</p>')
  await sleep(200)
  yield encoder.encode('<p>Three</p>')
}

export async function GET() {
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)

  return new Response(stream)
}
```

----------------------------------------

TITLE: Bootstrap Next.js Elasticsearch Example Application
DESCRIPTION: Commands to initialize a new Next.js project based on the 'with-elasticsearch' example. This sets up the basic project structure and dependencies required to start developing with Elasticsearch integration. Users can choose between npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-elasticsearch/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-elasticsearch with-elasticsearch-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-elasticsearch with-elasticsearch-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-elasticsearch with-elasticsearch-app
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Provides commands to install project dependencies and start the Next.js application in development mode, allowing access via http://localhost:3000.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev

# or

yarn install
yarn dev
```

----------------------------------------

TITLE: Registering Total Pages Sitemap REST API Route (PHP)
DESCRIPTION: This snippet registers a WordPress REST API endpoint for retrieving total page counts for various content types. It defines the route `sitemap/v1/totalpages` with a GET method, which calls the `wsra_generate_totalpages_api` function to handle the request and return the aggregated counts.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_19

LANGUAGE: PHP
CODE:
```
add_action('rest_api_init', function () {
  register_rest_route('sitemap/v1', '/totalpages', array(
    'methods' => 'GET',
    'callback' => 'wsra_generate_totalpages_api',
  ));
});
```

----------------------------------------

TITLE: Next.js Docs Optional Page Metadata (YAML)
DESCRIPTION: Example of a YAML front matter block showcasing optional metadata fields like `nav_title`, `source`, `related`, and `version` to customize navigation, share content, and link related pages in Next.js documentation.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_4

LANGUAGE: yaml
CODE:
```
---
nav_title: Nav Item Title
source: app/building-your-application/optimizing/images
related:
  description: See the image component API reference.
  links:
    - app/api-reference/components/image
version: experimental
---
```

----------------------------------------

TITLE: Next.js: Example Preview Mode API Route URL
DESCRIPTION: Provides an example URL structure for accessing the preview API route, including secret for authentication and slug for content identification. This URL is used to initiate preview mode.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/02-guides/preview-mode.mdx#_snippet_6

LANGUAGE: bash
CODE:
```
https://<your-site>/api/preview?secret=<token>&slug=<path>
```

----------------------------------------

TITLE: MDX Example for Using Check and Cross Icons
DESCRIPTION: Provides an MDX snippet demonstrating how to embed `<Check>` and `<Cross>` components with a specified size, which are available for use in the documentation.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_14

LANGUAGE: mdx
CODE:
```
<Check size={18} />
<Cross size={18} />
```

----------------------------------------

TITLE: Common Module Part 0 (JavaScript)
DESCRIPTION: This JavaScript code represents a common module part used in both development and production builds. It includes the NextResponse import, the GET API route definition, and various exports, including Turbopack-specific re-exports (__TURBOPACK_VAR__). This part forms a foundational segment of the compiled module.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/route-handler/output.md#_snippet_4

LANGUAGE: js
CODE:
```
import { NextResponse } from "next/server";
import "next/server";
const GET = (req)=>{
    return NextResponse.json({
        pathname: req.nextUrl.pathname
    });
};
export { GET };
export { GET as a } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};
export { };
```

----------------------------------------

TITLE: Create Next.js App with Jotai Example
DESCRIPTION: Bootstraps a new Next.js application using the `create-next-app` utility, pre-configured with the Jotai example. This command initializes a project directory named `with-jotai-app` and includes the necessary Jotai setup.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-jotai/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-jotai with-jotai-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-jotai with-jotai-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-jotai with-jotai-app
```

----------------------------------------

TITLE: Defining and Exporting a GET API Route Handler
DESCRIPTION: Presents a standard JavaScript function GET that is exported, typical for Next.js API routes. This function returns a JSON response, demonstrating how imported client components can be referenced within a server-side API endpoint.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/typeof-1/output.md#_snippet_1

LANGUAGE: javascript
CODE:
```
export function GET() {
    return NextResponse.json({
        clientComponent: typeof ClientComponent,
        myModuleClientComponent: typeof MyModuleClientComponent
    });
}
```

----------------------------------------

TITLE: Start Next.js Development Server
DESCRIPTION: Starts the Next.js development server, making the application accessible locally for development and testing.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mysql/README.md#_snippet_9

LANGUAGE: bash
CODE:
```
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm dev
```

----------------------------------------

TITLE: Configure Contentful Environment Variables for Next.js
DESCRIPTION: Explains how to copy the example .env.local file and set Contentful API keys and secrets required for the Next.js application. This includes Space ID, Access Token, Preview Access Token, Preview Secret, and Revalidate Secret.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

LANGUAGE: bash
CODE:
```
CONTENTFUL_SPACE_ID=...
CONTENTFUL_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_ACCESS_TOKEN=...
CONTENTFUL_PREVIEW_SECRET=...
CONTENTFUL_REVALIDATE_SECRET=...
```

----------------------------------------

TITLE: Enable Next.js Preview Mode
DESCRIPTION: URL endpoint to activate Next.js Preview Mode, requiring a secret string for authentication.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-enterspeed/README.md#_snippet_9

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/preview?secret=<secret>
```

----------------------------------------

TITLE: Bootstrap Next.js Project with XState Example
DESCRIPTION: Provides commands to quickly set up a new Next.js application pre-configured with the XState example using `create-next-app` via npm, Yarn, or pnpm. This is the recommended way to start with the example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-xstate/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-xstate with-xstate-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-xstate with-xstate-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-xstate with-xstate-app
```

----------------------------------------

TITLE: Bootstrap Next.js Project with Webiny Example
DESCRIPTION: These commands demonstrate how to quickly initialize a new Next.js application using the `create-next-app` utility, pre-configured with the Webiny CMS example. Choose your preferred package manager (npm, Yarn, or pnpm) to set up the project.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-webiny/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-webiny cms-webiny-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-webiny cms-webiny-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-webiny cms-webiny-app
```

----------------------------------------

TITLE: Bootstrap Next.js App with create-next-app
DESCRIPTION: This snippet demonstrates how to initialize a new Next.js project using the `create-next-app` command. It provides examples for npm, Yarn, and pnpm package managers, specifically for the `cms-builder-io` example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-builder-io/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-builder-io cms-builder-io-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-builder-io cms-builder-io-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-builder-io cms-builder-io-app
```

----------------------------------------

TITLE: Configure Builder.io Public API Key
DESCRIPTION: After generating a Builder.io space, the CLI will output your public API key. This key needs to be added to your Next.js project's environment files (`.env.production` and `.env.development`) to connect the application with Builder.io.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-builder-io/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
BUILDER_PUBLIC_KEY=...
```

----------------------------------------

TITLE: Ingest Blog Collection Type to Enterspeed
DESCRIPTION: Demonstrates how to use a cURL POST request to the Enterspeed Ingest API to create a 'blog' content type. This type acts as a parent or collection for individual blog posts, with a specified URL path.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-enterspeed/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
curl --location --request POST 'https://api.enterspeed.com/ingest/v2/1' \
--header 'X-Api-Key: [YOUR DATA SOUCE API KEY]' \
--header 'Content-Type: application/json' \
--data-raw '{
  "type": "blog",
  "url": "/blog"
}'
```

----------------------------------------

TITLE: Constructing Prepr preview URL
DESCRIPTION: Describes the URL format for enabling preview mode for a specific content item in a Next.js application integrated with Prepr. It requires a 'secret' for authentication and the 'slug' of the content item to be previewed.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-prepr/README.md#_snippet_5

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/preview?secret=<PREPRIO_PREVIEW_SECRET>&slug=<SLUG_TO_PREVIEW>

Parameters:
  <PREPRIO_PREVIEW_SECRET>: The secret value defined in .env.local for preview mode.
  <SLUG_TO_PREVIEW>: The slug of the content item to be previewed.
```

----------------------------------------

TITLE: Copy Environment Variable Example File
DESCRIPTION: Command to copy the example environment file (`.env.local.example`) to a local `.env.local` file. This file is used to store sensitive configuration like API keys and is ignored by Git for security.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-graphcms/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: MDX Code Block with Bash Command and Filename Example
DESCRIPTION: Demonstrates the syntax for embedding a Bash command within an MDX file, including the `filename` prop to display a Terminal icon and indicate where the command should be entered.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_9

LANGUAGE: mdx
CODE:
```
```bash filename="Terminal"
npx create-next-app
```
```

----------------------------------------

TITLE: Install and Run Next.js Application Locally
DESCRIPTION: This snippet provides the necessary shell commands to install project dependencies and start the Next.js development server for the Formspree integration example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-formspree/README.md#_snippet_0

LANGUAGE: shell
CODE:
```
# Install dependencies
npm install

# Run next locally at localhost:3000
npm run dev
```

----------------------------------------

TITLE: Bootstrapping Next.js Project with pnpm
DESCRIPTION: This command initializes a new Next.js application using `create-next-app` and the provided Temporal example template via pnpm. It sets up the project structure and dependencies required to start development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-temporal/README.md#_snippet_3

LANGUAGE: Bash
CODE:
```
pnpm create next-app --example with-temporal next-temporal-app
```

----------------------------------------

TITLE: Generate Author URLs for Sitemap API in WordPress
DESCRIPTION: This PHP function retrieves a list of author URLs from a WordPress site. It uses `wsra_get_user_inputs()` to get arguments, then iterates through users to construct their full URLs, removing the home URL prefix to create relative paths. The function returns an array of author URLs.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_11

LANGUAGE: PHP
CODE:
```
function wsra_generate_author_api()
{
  [$args] = wsra_get_user_inputs();
  $author_urls = array();
  $users = get_users($args);
  foreach ($users as $user) {
    $fullUrl = esc_url(get_author_posts_url($user->ID));
    $url = str_replace(home_url(), '', $fullUrl);
    $tempArray = [
      'url' => $url,
    ];
    array_push($author_urls, $tempArray);
  }
  return array_merge($author_urls);
}
```

----------------------------------------

TITLE: Bootstrap Next.js Joi Example Application
DESCRIPTION: Instructions on how to initialize a new Next.js project using the `with-joi` example template with various package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-joi/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-joi with-joi-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-joi with-joi-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-joi with-joi-app
```

----------------------------------------

TITLE: Import NextResponse for Next.js API Routes (JavaScript)
DESCRIPTION: This snippet demonstrates the standard way to import the NextResponse object from next/server. NextResponse is a crucial utility for constructing HTTP responses within Next.js API routes, providing methods for JSON, redirects, and more.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/route-handler/output.md#_snippet_0

LANGUAGE: js
CODE:
```
import { NextResponse } from "next/server";
```

----------------------------------------

TITLE: Set Up Environment Variables for Next.js and Webiny
DESCRIPTION: This snippet describes the essential environment variables (`.env.local`) required to connect the Next.js application with the Webiny CMS. It covers `PREVIEW_API_SECRET`, `WEBINY_API_SECRET`, and the public Webiny API URLs for both read and preview modes.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-webiny/README.md#_snippet_5

LANGUAGE: APIDOC
CODE:
```
Environment Variables:
  - PREVIEW_API_SECRET: Random string (e.g., MY_SECRET) - for Next.js Preview Mode.
  - WEBINY_API_SECRET: Security token generated in Webiny.
  - NEXT_PUBLIC_WEBINY_API_URL: Webiny GraphQL Read API URL (from `yarn webiny info` or API Playground).
  - NEXT_PUBLIC_WEBINY_PREVIEW_API_URL: Webiny GraphQL Preview API URL (from `yarn webiny info` or API Playground).
```

----------------------------------------

TITLE: Bootstrap Next.js Project with TinaCMS Example
DESCRIPTION: Commands to initialize a new Next.js application pre-configured with the TinaCMS example using npx, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-tina/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-tina cms-tina-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-tina cms-tina-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-tina cms-tina-app
```

----------------------------------------

TITLE: Bootstrap Next.js Kontent.ai Blog with create-next-app
DESCRIPTION: These commands demonstrate how to quickly set up a new Next.js project pre-configured with the Kontent.ai example. Users can choose their preferred package manager (npm, Yarn, or pnpm) to initialize the application, which creates a new directory with the specified name and populates it with the example's files.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-kontent-ai/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-kontent-ai cms-kontent-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-kontent-ai cms-kontent-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-kontent-ai cms-kontent-app
```

----------------------------------------

TITLE: Configure Local Environment File for Next.js
DESCRIPTION: This snippet demonstrates how to copy the example environment file to .env.local, which is essential for storing sensitive API tokens and preview secrets. The .env.local file is automatically ignored by Git, ensuring credentials are not committed to version control.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-datocms/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Bootstrap Next.js Application with MySQL Example
DESCRIPTION: Initializes a new Next.js project using the `with-mysql` example template. This command sets up the basic project structure and dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mysql/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-mysql nextjs-mysql
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-mysql nextjs-mysql
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-mysql nextjs-mysql
```

----------------------------------------

TITLE: Generate dotCMS API Token
DESCRIPTION: This cURL command demonstrates how to generate an API token for the dotCMS demo site. It sends a POST request with user credentials (admin@dotcms.com, admin) to the authentication endpoint, which returns a token valid for 10 days. This token is required for accessing dotCMS content.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-dotcms/README.md#_snippet_0

LANGUAGE: Bash
CODE:
```
curl -H "Content-Type:application/json" --insecure  -X POST -d  '
{ "user":"admin@dotcms.com", "password":"admin", "expirationDays": 10 }
' http://demo.dotcms.com:8080/api/v1/authentication/api-token
```

----------------------------------------

TITLE: Initialize Next.js Project with dotCMS Example
DESCRIPTION: These commands initialize a new Next.js application pre-configured with the dotCMS example. Choose the command corresponding to your preferred package manager (npm, Yarn, or pnpm) to bootstrap the project. This sets up the necessary files and dependencies to start developing your dotCMS-powered Next.js blog.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-dotcms/README.md#_snippet_1

LANGUAGE: Bash
CODE:
```
npx create-next-app --example cms-dotcms cms-dotcms-app
```

LANGUAGE: Bash
CODE:
```
yarn create next-app --example cms-dotcms cms-dotcms-app
```

LANGUAGE: Bash
CODE:
```
pnpm create next-app --example cms-dotcms cms-dotcms-app
```

----------------------------------------

TITLE: Bootstrap Next.js Umbraco Blog Example
DESCRIPTION: Commands to initialize a new Next.js project using the Umbraco CMS example template with different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-umbraco umbraco-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-umbraco umbraco-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-umbraco umbraco-app
```

----------------------------------------

TITLE: Bootstrap Next.js Ghost Blog Example
DESCRIPTION: Commands to initialize a new Next.js project using the `cms-ghost` example template with different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-ghost/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-ghost cms-ghost-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-ghost cms-ghost-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-ghost cms-ghost-app
```

----------------------------------------

TITLE: Next.js Link Component Basic Usage in App Router (TSX)
DESCRIPTION: Illustrates a minimum working example of the Next.js `<Link>` component, including the necessary import statement, for use within the App Router. This code is runnable without additional configuration.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_8

LANGUAGE: tsx
CODE:
```
import Link from 'next/link'

export default function Page() {
  return <Link href="/about">About</Link>
}
```

----------------------------------------

TITLE: Running Next.js Development Server (npm)
DESCRIPTION: These commands first install all project dependencies using npm, then start the Next.js development server. This allows you to view your application locally at `http://localhost:3000` and enables hot-reloading for development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-builder-io/README.md#_snippet_6

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Commands to install project dependencies and start the Next.js development server locally, making the application accessible on localhost:3000.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-webiny/README.md#_snippet_6

LANGUAGE: Shell
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Bootstrap Next.js urql Example Project
DESCRIPTION: Commands to initialize a new Next.js project pre-configured with the urql example using different package managers. This sets up the project structure and dependencies for a quick start.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-urql/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-urql with-urql-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-urql with-urql-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-urql with-urql-app
```

----------------------------------------

TITLE: Next.js NextRequest and NextResponse API Overview
DESCRIPTION: This section provides an overview of `NextRequest` and `NextResponse`, which extend the standard Web `Request` and `Response` APIs in Next.js. It highlights their enhanced capabilities, such as simplified cookie handling, access to parsed URL properties via `nextUrl`, and helper methods for common operations like `json()`, `redirect()`, and `rewrite()`.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/backend-for-frontend.mdx#_snippet_9

LANGUAGE: APIDOC
CODE:
```
NextRequest:
  Extends: Web API Request
  Properties:
    nextUrl: URL
      Description: Parsed values from the incoming request, including pathname and search parameters.
  Methods:
    (Inherits from Request)
    Cookie handling methods (e.g., .cookies.get(), .cookies.set())

NextResponse:
  Extends: Web API Response
  Helper Methods:
    next(): NextResponse
      Description: Creates a response that continues to the next middleware or route.
    json(data: any, options?: ResponseInit): NextResponse
      Description: Creates a JSON response.
    redirect(url: string | URL, status?: number): NextResponse
      Description: Creates a redirect response.
    rewrite(url: string | URL, status?: number): NextResponse
      Description: Creates a rewrite response.
  Methods:
    (Inherits from Response)
    Cookie handling methods (e.g., .cookies.get(), .cookies.set())
```

----------------------------------------

TITLE: Initialize Next.js project with Prepr CMS example
DESCRIPTION: Commands to bootstrap a new Next.js application using the 'create-next-app' utility, specifically leveraging the 'cms-prepr' example template. This sets up the basic project structure for a blog.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-prepr/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-prepr cms-prepr-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-prepr cms-prepr-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-prepr cms-prepr-app
```

----------------------------------------

TITLE: Enable Next.js Preview Mode via API Endpoint
DESCRIPTION: This snippet demonstrates the URL structure to enable Preview Mode in a Next.js application integrated with Umbraco. It requires a secret string, which should match the UMBRACO_PREVIEW_SECRET configured in the environment variables. Accessing this URL allows viewing unpublished changes from Umbraco.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco/README.md#_snippet_8

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/preview?secret=<secret>
```

----------------------------------------

TITLE: Copy Cloudflare Turnstile Environment Variables Example
DESCRIPTION: Command to duplicate the example environment file (.env.local.example) to .env.local, which is necessary for configuring Cloudflare Turnstile API keys within the Next.js application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cloudflare-turnstile/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Start Tigris Local Development Environment
DESCRIPTION: Initializes and starts the local Tigris development server, which is required for the application to interact with the database.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-tigris/README.md#_snippet_2

LANGUAGE: Shell
CODE:
```
tigris dev start
```

----------------------------------------

TITLE: MDX Code Block with TypeScript and JavaScript Switcher
DESCRIPTION: Illustrates how to set up a language switcher in MDX documentation, allowing users to toggle between TypeScript and JavaScript versions of a code example. This involves placing TSX and JSX code blocks sequentially with the `switcher` prop.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_10

LANGUAGE: mdx
CODE:
```
```tsx filename="app/page.tsx" switcher

```

```jsx filename="app/page.js" switcher

```
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Commands to install project dependencies and start the Next.js development server using npm, yarn, or pnpm, making the application accessible locally.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-userbase/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm install
pnpm dev
```

----------------------------------------

TITLE: Bootstrap Next.js Project with Magic Example
DESCRIPTION: These commands initialize a new Next.js application using the 'with-magic' example template. They set up the basic project structure and dependencies required to start developing with Magic authentication.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-magic/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-magic with-magic-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-magic with-magic-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-magic with-magic-app
```

----------------------------------------

TITLE: Fetch Data with getServerSideProps in Next.js
DESCRIPTION: Demonstrates how to use `getServerSideProps` to fetch data from an external API on each request and pass it as props to a Next.js page. This ensures the page always displays the most current data. The example fetches data from the GitHub API for the 'vercel/next.js' repository.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/04-api-reference/03-functions/get-server-side-props.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type Repo = {
  name: string
  stargazers_count: number
}

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo: Repo = await res.json()
  // Pass data to the page via props
  return { props: { repo } }
}) satisfies GetServerSideProps<{ repo: Repo }>

export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <p>{repo.stargazers_count}</p>
    </main>
  )
}
```

LANGUAGE: jsx
CODE:
```
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { repo } }
}

export default function Page({ repo }) {
  return (
    <main>
      <p>{repo.stargazers_count}</p>
    </main>
  )
}
```

----------------------------------------

TITLE: Next.js getStaticProps API Reference and Usage Guidelines
DESCRIPTION: Detailed API documentation for Next.js `getStaticProps`, outlining its purpose, optimal use cases, and execution behavior. It clarifies when and where `getStaticProps` runs, its server-side nature, and its limitations regarding access to client-side request data.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/03-data-fetching/01-get-static-props.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
getStaticProps API Overview:
  Purpose: Pre-render Next.js pages at build time using returned props.
  Execution Context:
    - Always runs on the server, never on the client.
    - Runs during 'next build'.
    - Runs in the background with 'fallback: true'.
    - Called before initial render with 'fallback: blocking'.
    - Runs in the background when using 'revalidate'.
    - Runs on-demand in the background with 'revalidate()'.
    - Does not have access to incoming request details (query parameters, HTTP headers).
  Usage Scenarios:
    - Data available at build time.
    - Data from a headless CMS.
    - Page requires pre-rendering for SEO and fast performance (generates HTML/JSON, cacheable by CDN).
    - Data can be publicly cached (not user-specific).
  Limitations:
    - Cannot access client-side request details.
    - Sensitive information should not be passed in 'props' as it's viewable on the client-side.
```

----------------------------------------

TITLE: create-next-app CLI Command Line Options Reference
DESCRIPTION: A detailed reference of all available command-line options for `create-next-app`, including their short forms, long forms, and descriptions, enabling fine-grained control over project initialization.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/06-cli/create-next-app.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
create-next-app CLI Options:
  -h, --help: Show all available options
  -v, --version: Output the version number
  --no-*: Negate default options. E.g. --no-eslint
  --ts, --typescript: Initialize as a TypeScript project (default)
  --js, --javascript: Initialize as a JavaScript project
  --tailwind: Initialize with Tailwind CSS config (default)
  --eslint: Initialize with ESLint config
  --app: Initialize as an App Router project
  --api: Initialize a project with only route handlers
  --src-dir: Initialize inside a `src/` directory
  --turbopack: Enable Turbopack by default for development
  --import-alias <alias-to-configure>: Specify import alias to use (default "@/*")
  --empty: Initialize an empty project
  --use-npm: Explicitly tell the CLI to bootstrap the application using npm
  --use-pnpm: Explicitly tell the CLI to bootstrap the application using pnpm
  --use-yarn: Explicitly tell the CLI to bootstrap the application using Yarn
  --use-bun: Explicitly tell the CLI to bootstrap the application using Bun
  -e, --example [name] [github-url]: An example to bootstrap the app with
  --example-path <path-to-example>: Specify the path to the example separately
  --reset-preferences: Explicitly tell the CLI to reset any stored preferences
  --skip-install: Explicitly tell the CLI to skip installing packages
  --disable-git: Explicitly tell the CLI to disable git initialization
  --yes: Use previous preferences or defaults for all options
```

----------------------------------------

TITLE: useSelectedLayoutSegment API Reference
DESCRIPTION: Detailed API documentation for the `useSelectedLayoutSegment` hook, including its parameters, return values, and example segment mappings based on URL and layout.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/use-selected-layout-segment.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
Signature:
const segment = useSelectedLayoutSegment(parallelRoutesKey?: string)

Parameters:
  parallelRoutesKey?: string
    Description: An optional key that allows you to read the active route segment within that slot.

Returns:
  string | null
    Description: Returns a string of the active segment or null if one doesn't exist.

Examples of Returned Segment:
| Layout                    | Visited URL                    | Returned Segment |
| ------------------------- | ------------------------------ | ---------------- |
| `app/layout.js`           | `/`                            | `null`           |
| `app/layout.js`           | `/dashboard`                   | `'dashboard'`    |
| `app/dashboard/layout.js` | `/dashboard`                   | `null`           |
| `app/dashboard/layout.js` | `/dashboard/settings`          | `'settings'`     |
| `app/dashboard/layout.js` | `/dashboard/analytics`         | `'analytics'`    |
| `app/dashboard/layout.js` | `/dashboard/analytics/monthly` | `'analytics'`    |
```

----------------------------------------

TITLE: Configure Ghost CMS Environment Variables
DESCRIPTION: Example of a `.env.local` file structure for connecting the Next.js application to a Ghost CMS instance using its Content API URL and Key. These variables are crucial for fetching content from Ghost.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-ghost/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
GHOST_API_URL=...
GHOST_API_KEY=...
```

----------------------------------------

TITLE: Bootstrap Next.js GraphQL Hooks Example Project
DESCRIPTION: These commands demonstrate how to quickly set up a new Next.js project pre-configured with the `with-graphql-hooks` example using different Node.js package managers. This allows developers to bootstrap the project and start experimenting with GraphQL Hooks immediately.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-graphql-hooks/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-graphql-hooks with-graphql-hooks-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-graphql-hooks with-graphql-hooks-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-graphql-hooks with-graphql-hooks-app
```

----------------------------------------

TITLE: NextRequest API Reference
DESCRIPTION: Detailed API reference for the `NextRequest` class, extending the Web Request API with convenience methods, specifically for cookie manipulation.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/next-request.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
NextRequest:
  extends: Web Request API
  properties:
    cookies: NextRequestCookies
      description: Read or mutate the Set-Cookie header of the request.
      methods:
        set(name: string, value: string): void
          description: Set a cookie with the given name and value.
          parameters:
            name: The name of the cookie.
            value: The value to set for the cookie.
        get(name: string): { name: string, value: string, Path: string } | undefined
          description: Get the value of a cookie by name.
          parameters:
            name: The name of the cookie.
          returns: Cookie object or undefined.
        getAll(name?: string): Array<{ name: string, value: string, Path: string }>
          description: Get all cookies or all values for a specific cookie name.
          parameters:
            name: Optional. The name of the cookie to filter by.
          returns: An array of cookie objects.
        delete(name: string): boolean
          description: Delete a cookie by name.
          parameters:
            name: The name of the cookie to delete.
          returns: True if deleted, false otherwise.
        has(name: string): boolean
          description: Check if a cookie exists by name.
          parameters:
            name: The name of the cookie to check.
          returns: True if exists, false otherwise.
        clear(): void
          description: Remove the Set-Cookie header from the request.
```

----------------------------------------

TITLE: Bootstrap Next.js App with Apollo Example
DESCRIPTION: Commands to initialize a new Next.js application pre-configured with the Apollo Server and Client example, using different package managers like npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/api-routes-apollo-server-and-client/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example api-routes-apollo-server-and-client api-routes-apollo-server-and-client-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example api-routes-apollo-server-and-client api-routes-apollo-server-and-client-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example api-routes-apollo-server-and-client api-routes-apollo-server-and-client-app
```

----------------------------------------

TITLE: Common Module Part 2 (JavaScript)
DESCRIPTION: This JavaScript module part acts as an intermediary, re-exporting GET and runtime from other Turbopack-managed parts (__TURBOPACK_PART__). It demonstrates a pattern for composing and linking different segments of a compiled module, ensuring proper export resolution.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/route-handler/output.md#_snippet_6

LANGUAGE: js
CODE:
```
export { GET } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: "export GET"
};
export { runtime } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: "export runtime"
};
```

----------------------------------------

TITLE: Bootstrap Next.js Blog Example Project
DESCRIPTION: Commands to initialize a new Next.js project using the 'blog' example template. These commands demonstrate how to use `create-next-app` with different package managers: npm (via npx), Yarn, and pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/blog/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example blog my-blog
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example blog my-blog
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example blog my-blog
```

----------------------------------------

TITLE: Run Temporal Next.js Project Locally
DESCRIPTION: Commands to start the Temporal Server, Next.js development server, and Temporal worker processes for local development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-temporal/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
docker compose up
```

LANGUAGE: bash
CODE:
```
npm run dev
```

LANGUAGE: bash
CODE:
```
npm run build-worker.watch
```

LANGUAGE: bash
CODE:
```
npm run start-worker
```

----------------------------------------

TITLE: Tigris Next.js Todo App File Structure
DESCRIPTION: Illustrates the directory and file organization of the Next.js todo application, highlighting key components like `lib`, `db`, and `pages/api`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-tigris/README.md#_snippet_5

LANGUAGE: text
CODE:
```
├── package.json
├── lib
│   ├── tigris.ts
├── db
│   └── models
│       └── todoItems.ts
└── pages
    ├── index.tsx
    └── api
        ├── item
        │   ├── [id].ts
        └── items
            ├── index.ts
            └── search.ts
```

----------------------------------------

TITLE: Starting Next.js Development Server
DESCRIPTION: This command starts the Next.js development server, enabling hot-reloading and other development features. It is typically run in the root directory of the Next.js application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-temporal/README.md#_snippet_5

LANGUAGE: Bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Install Dependencies and Run Next.js Development Server
DESCRIPTION: Installs project dependencies using either npm or yarn, and then starts the Next.js development server. This makes the application accessible locally for development and testing.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-kontent-ai/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn
yarn dev
```

----------------------------------------

TITLE: Bootstrap Next.js Sitefinity Example Project
DESCRIPTION: Initialize a new Next.js project based on the Sitefinity CMS example using various package managers like npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sitefinity/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-sitefinity cms-sitefinity-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-sitefinity cms-sitefinity-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-sitefinity cms-sitefinity-app
```

----------------------------------------

TITLE: Next.js Metadata API for SEO
DESCRIPTION: Improve your application's Search Engine Optimization (SEO) by using the Metadata API to add page titles, descriptions, and other metadata.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/production-checklist.mdx#_snippet_23

LANGUAGE: APIDOC
CODE:
```
Next.js Metadata API:
  Purpose: Enhance Search Engine Optimization (SEO).
  Capabilities:
    - Add page titles.
    - Add page descriptions.
    - Manage other page-level metadata.
```

----------------------------------------

TITLE: Next.js 15 Dynamic API Synchronous Access Warning Example
DESCRIPTION: Illustrates how direct, synchronous access to dynamic APIs like `params` in Next.js 15 will issue a warning, as these APIs are now asynchronous. This code will trigger the warning.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/sync-dynamic-apis.mdx#_snippet_0

LANGUAGE: jsx
CODE:
```
function Page({ params }) {
  // direct access of `params.id`.
  return <p>ID: {params.id}</p>
}
```

----------------------------------------

TITLE: Run Storybook Development Server
DESCRIPTION: Commands to start the Storybook development server, allowing you to view and interact with your components in isolation.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-storybook/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm run storybook
```

LANGUAGE: bash
CODE:
```
yarn storybook
```

LANGUAGE: bash
CODE:
```
pnpm storybook
```

----------------------------------------

TITLE: Vercel One-Click Deploy URL for Next.js GraphCMS Example
DESCRIPTION: This URL provides a convenient one-click deployment solution for the Next.js GraphCMS example application on Vercel. It pre-configures the GitHub repository, project name, and essential environment variables (GRAPHCMS_PROJECT_API, GRAPHCMS_PROD_AUTH_TOKEN, GRAPHCMS_DEV_AUTH_TOKEN, GRAPHCMS_PREVIEW_SECRET) necessary for the application to connect and function correctly with GraphCMS.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-graphcms/README.md#_snippet_4

LANGUAGE: APIDOC
CODE:
```
https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/cms-graphcms&project-name=cms-graphcms&repository-name=cms-graphcms&env=GRAPHCMS_PROJECT_API,GRAPHCMS_PROD_AUTH_TOKEN,GRAPHCMS_DEV_AUTH_TOKEN,GRAPHCMS_PREVIEW_SECRET&envDescription=Required%20to%20connect%20the%20app%20with%20GraphCMS&envLink=https://vercel.link/cms-graphcms-env
```

----------------------------------------

TITLE: Bootstrap Next.js Project with Sanity CMS Example
DESCRIPTION: Execute `create-next-app` with npm, Yarn, or pnpm to bootstrap the example blog project using the `cms-sanity` example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sanity/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-sanity next-sanity-blog
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-sanity next-sanity-blog
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-sanity next-sanity-blog
```

----------------------------------------

TITLE: Configure Contentful Content Preview URL for Next.js Draft Mode
DESCRIPTION: Specifies the URL format required for Contentful's content preview settings to enable Next.js Draft Mode. This URL includes placeholders for the Contentful preview secret and the entry's slug.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/README.md#_snippet_4

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/draft?secret=<CONTENTFUL_PREVIEW_SECRET>&slug={entry.fields.slug}
```

----------------------------------------

TITLE: Run Next.js Application in Development Mode
DESCRIPTION: These commands install the necessary project dependencies and then start the Next.js development server. Running the application in development mode enables features like hot module replacement and provides a local URL for testing and debugging.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-takeshape/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev

# or

yarn install
yarn dev
```

----------------------------------------

TITLE: Stream Responses from Next.js API Route with Server-Sent Events
DESCRIPTION: This JavaScript example demonstrates how to implement server-sent events (SSE) or other streaming responses from a Next.js API route. It uses `res.writeHead` to set the `Content-Type` to `text/event-stream` and `res.write` to send data incrementally.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_20

LANGUAGE: js
CODE:
```
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': "no-store"
  })
  let i = 0
  while (i < 10) {
    res.write(`data: ${i}\n\n`)
    i++
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
  res.end()
}
```

----------------------------------------

TITLE: Bootstrap Next.js Unsplash Example Application
DESCRIPTION: Commands to initialize a new Next.js project using the `with-unsplash` example template with different package managers (npx, Yarn, pnpm). This sets up the basic project structure.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-unsplash/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-unsplash with-unsplash-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-unsplash with-unsplash-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-unsplash with-unsplash-app
```

----------------------------------------

TITLE: Fetching Draft-Specific Data in getStaticProps
DESCRIPTION: Shows an example of how to conditionally fetch data from different API endpoints (e.g., a draft API vs. a production API) within `getStaticProps` based on the `context.draftMode` flag, allowing for distinct content retrieval in draft mode.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/02-guides/draft-mode.mdx#_snippet_5

LANGUAGE: js
CODE:
```
export async function getStaticProps(context) {
  const url = context.draftMode
    ? 'https://draft.example.com'
    : 'https://production.example.com'
  const res = await fetch(url)
  // ...
}
```

----------------------------------------

TITLE: Configure Stripe API Keys in .env.local
DESCRIPTION: Example configuration for setting your Stripe Publishable Key and Secret Key in the .env.local file, essential for connecting to the Stripe API.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/README.md#_snippet_2

LANGUAGE: plaintext
CODE:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<replace-with-your-publishable-key>
STRIPE_SECRET_KEY=<replace-with-your-secret-key>
```

----------------------------------------

TITLE: Copy Environment Variable Template File
DESCRIPTION: Command to copy the example environment file (`.env.local.example`) to a local, Git-ignored version (`.env.local`) for configuring Unsplash API keys and user settings.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-unsplash/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Bootstrapping Next.js Project with Yarn
DESCRIPTION: This command initializes a new Next.js application using `create-next-app` and the provided Temporal example template via Yarn. It sets up the project structure and dependencies required to start development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-temporal/README.md#_snippet_2

LANGUAGE: Bash
CODE:
```
yarn create next-app --example with-temporal next-temporal-app
```

----------------------------------------

TITLE: Run Next.js development server
DESCRIPTION: Commands to start the Next.js development server. This makes the application accessible locally, typically at 'http://localhost:3000', for development and testing purposes with hot-reloading.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-prepr/README.md#_snippet_4

LANGUAGE: bash
CODE:
```
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn dev
```

----------------------------------------

TITLE: Example of Unmigratable Dynamic API Access with Codemod Error
DESCRIPTION: Illustrates a scenario where the Next.js codemod cannot automatically fix dynamic API access, leaving a `@next-codemod-error` comment. This requires manual intervention, such as making the function async and awaiting the API call.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/sync-dynamic-apis.mdx#_snippet_4

LANGUAGE: ts
CODE:
```
export function MyCookiesComponent() {
  const c =
    /* @next-codemod-error Manually await this call and refactor the function to be async */
    cookies()
  return c.get('name')
}
```

----------------------------------------

TITLE: Bootstrap Next.js App with tsParticles Example
DESCRIPTION: These commands bootstrap a new Next.js application pre-configured with the tsParticles example. They use `create-next-app` with different package managers (npx, yarn, pnpm) to set up the project structure and dependencies, allowing users to quickly start developing with particle animations.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-particles/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-particles with-particles-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-particles with-particles-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app -- --example with-particles with-particles-app
```

----------------------------------------

TITLE: Run Next.js Development Server with TinaCMS
DESCRIPTION: Commands to install dependencies and start the Next.js development server with TinaCMS locally, allowing content editing via the /admin path.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-tina/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm install
npm run tina-dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn tina-dev
```

----------------------------------------

TITLE: Bootstrap Next.js Application with Umbraco Heartcore Example
DESCRIPTION: These commands demonstrate how to initialize a new Next.js project using the `create-next-app` utility, specifically bootstrapping it with the `cms-umbraco-heartcore` example. It provides options for npm, Yarn, and pnpm package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco-heartcore/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-umbraco-heartcore cms-umbraco-heartcore-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-umbraco-heartcore cms-umbraco-heartcore-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-umbraco-heartcore cms-umbraco-heartcore-app
```

----------------------------------------

TITLE: Bootstrap Next.js Application with Knex Example
DESCRIPTION: These commands initialize a new Next.js project using the `create-next-app` utility, specifically bootstrapping it with the `with-knex` example template. This allows for quick setup of the example application using npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-knex/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-knex with-knex-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-knex with-knex-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-knex with-knex-app
```

----------------------------------------

TITLE: Running Next.js Development Server (Yarn)
DESCRIPTION: These commands first install all project dependencies using Yarn, then start the Next.js development server. This allows you to view your application locally at `http://localhost:3000` and enables hot-reloading for development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-builder-io/README.md#_snippet_7

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Commands to start the Next.js development server for the blog application. Once running, the blog will be accessible locally at http://localhost:3000.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-prismic/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn dev
```

----------------------------------------

TITLE: Next.js Sitemaps and Robots File Generation
DESCRIPTION: Help Search Engines crawl and index your pages by generating sitemaps and robots files in your Next.js application.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/production-checklist.mdx#_snippet_25

LANGUAGE: APIDOC
CODE:
```
Next.js Sitemaps and Robots:
  Purpose: Improve Search Engine crawling and indexing.
  Functionality:
    - Generate sitemaps.
    - Generate robots.txt files.
```

----------------------------------------

TITLE: Deprecated Next.js Middleware API Signature Example
DESCRIPTION: Illustrates a Next.js Middleware function using the deprecated `event` parameter. This signature is no longer supported and will cause errors, requiring an update to the new API.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/middleware-new-signature.mdx#_snippet_0

LANGUAGE: typescript
CODE:
```
import { NextResponse } from 'next/server'

export function middleware(event) {
  if (event.request.nextUrl.pathname === '/blocked') {
    event.respondWith(
      new NextResponse(null, {
        status: 403,
      })
    )
  }
}
```

----------------------------------------

TITLE: Configure Cosmic Environment Variables
DESCRIPTION: Example structure for the `.env.local` file, showing placeholders for Cosmic API keys and a preview secret required for connecting the Next.js application to the Cosmic CMS. These variables enable data fetching and preview mode.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-cosmic/README.md#_snippet_2

LANGUAGE: plaintext
CODE:
```
COSMIC_BUCKET_SLUG=...
COSMIC_READ_KEY=...
COSMIC_PREVIEW_SECRET=...
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Commands to install project dependencies and start the Next.js development server. This makes the application accessible locally, typically at `http://localhost:3000`, allowing for development and testing.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-graphcms/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Next.js Dynamic APIs and Rendering (App Router)
DESCRIPTION: Explains the impact of Dynamic APIs like `cookies` and `searchParams` on Dynamic Rendering, advising intentional usage and wrapping with <Suspense>.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/production-checklist.mdx#_snippet_4

LANGUAGE: APIDOC
CODE:
```
Dynamic APIs:
  - cookies()
  - searchParams (prop)
Behavior: Opts route/application into Dynamic Rendering
Recommendation: Use intentionally, wrap in <Suspense> boundaries.
```

----------------------------------------

TITLE: Bootstrap Next.js Enterspeed Example Project
DESCRIPTION: These commands demonstrate how to bootstrap the Next.js blog example using Enterspeed as the CMS. You can choose your preferred package manager: npm (via npx), Yarn, or pnpm. Executing one of these commands will create a new directory named `enterspeed-app` with the example project files.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-enterspeed/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-enterspeed enterspeed-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-enterspeed enterspeed-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app -- --example cms-enterspeed enterspeed-app
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Commands to install project dependencies and start the Next.js development server, making the blog accessible locally. This allows for local development and testing of the application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-cosmic/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Initialize Next.js GraphQL Gateway Example Project
DESCRIPTION: These commands demonstrate how to bootstrap a new Next.js application pre-configured with the GraphQL Gateway example. Users can choose their preferred package manager (npx, yarn, or pnpm) to create the project directory and set up the initial files.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-graphql-gateway/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-graphql-gateway with-graphql-gateway-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-graphql-gateway with-graphql-gateway-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-graphql-gateway with-graphql-gateway-app
```

----------------------------------------

TITLE: Define a Basic GET Route Handler in Next.js
DESCRIPTION: Illustrates how to create a simple GET request handler using the `route.ts` or `route.js` file convention in Next.js. This handler will respond to GET requests sent to the `/api` path.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/backend-for-frontend.mdx#_snippet_1

LANGUAGE: ts
CODE:
```
export function GET(request: Request) {}
```

LANGUAGE: js
CODE:
```
export function GET(request) {}
```

----------------------------------------

TITLE: Set Custom Response Limit for Next.js API Route
DESCRIPTION: This example demonstrates how to set a custom maximum response size for a Next.js API Route before a warning is displayed. The `responseLimit` can be specified in bytes or string formats like '8mb'.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_9

LANGUAGE: js
CODE:
```
export const config = {
  api: {
    responseLimit: '8mb',
  },
}
```

----------------------------------------

TITLE: Configure Supabase Environment Variables
DESCRIPTION: Set up your Supabase project's API credentials by renaming the example environment file and updating it with your specific Supabase URL and anonymous key. These variables are crucial for your Next.js application to connect and interact with your Supabase backend.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md#_snippet_2

LANGUAGE: plaintext
CODE:
```
NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
```

----------------------------------------

TITLE: Bootstrap Next.js Storyblok Blog Example
DESCRIPTION: Use `create-next-app` with npm, Yarn, or pnpm to quickly set up a new Next.js project pre-configured with the Storyblok CMS example. This command initializes a new directory with the specified example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-storyblok cms-storyblok-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-storyblok cms-storyblok-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-storyblok cms-storyblok-app
```

----------------------------------------

TITLE: Bootstrap Next.js HTTP2 Example with create-next-app
DESCRIPTION: These commands demonstrate how to quickly set up a new Next.js project using the `with-http2` example. It utilizes `create-next-app` with different package managers (npm, Yarn, and pnpm) to initialize the project structure and dependencies for the HTTP2 server example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-http2/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-http2 with-http2-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-http2 with-http2-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-http2 with-http2-app
```

----------------------------------------

TITLE: Running Next.js Application Locally
DESCRIPTION: Installs project dependencies and starts the Next.js application in development mode, making it accessible on `http://localhost:3000`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sanity/README.md#_snippet_8

LANGUAGE: bash
CODE:
```
npm install && npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install && yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm install && pnpm dev
```

----------------------------------------

TITLE: Add TypeScript Types to Next.js API Routes
DESCRIPTION: This example shows how to enhance type safety in Next.js API Routes by importing `NextApiRequest` and `NextApiResponse` types from `next`. It also demonstrates how to define and apply custom types for the response data, improving code clarity and reducing potential errors.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_15

LANGUAGE: ts
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
```

----------------------------------------

TITLE: Building and Starting Next.js App in Production Mode
DESCRIPTION: These commands prepare the Next.js application for production and then start the server. `npm run build` compiles the application, and `npm start` runs the compiled application in production mode, utilizing translated message files for localization.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-react-intl/README.md#_snippet_4

LANGUAGE: bash
CODE:
```
npm run build
npm start
```

----------------------------------------

TITLE: Start Next.js Development Server
DESCRIPTION: These commands start the Next.js application in development mode. This enables features like hot module replacement and provides a local server, typically accessible at `http://localhost:3000`, for development and testing. It supports npm, Yarn, and pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-knex/README.md#_snippet_4

LANGUAGE: bash
CODE:
```
npm run dev
# or
yarn dev
# or
pnpm dev
```

----------------------------------------

TITLE: Correcting 204/304 Status Code Response in Next.js API Routes
DESCRIPTION: This snippet illustrates the incorrect and correct methods for handling responses in Next.js API routes when using HTTP status codes 204 or 304. The 'Before' example shows an invalid attempt to send a body, while the 'After' example demonstrates the correct approach of ending the response without a body, aligning with HTTP specifications for these status codes.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/invalid-api-status-body.mdx#_snippet_0

LANGUAGE: js
CODE:
```
export default function handler(req, res) {
  res.status(204).send('invalid body')
}
```

LANGUAGE: js
CODE:
```
export default function handler(req, res) {
  res.status(204).end()
}
```

----------------------------------------

TITLE: Bootstrap Next.js Project with next-sitemap Example
DESCRIPTION: Commands to initialize a new Next.js application pre-configured with the `with-next-sitemap` example using `create-next-app` via npm, Yarn, or pnpm. This sets up a local development environment with the necessary configurations.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-next-sitemap/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-next-sitemap with-next-sitemap-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-next-sitemap with-next-sitemap-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-next-sitemap with-next-sitemap-app
```

----------------------------------------

TITLE: Type Next.js API Route Handlers
DESCRIPTION: Provides an example of typing a basic Next.js API route handler using `NextApiRequest` and `NextApiResponse` from `next`. This ensures type safety for incoming requests and outgoing responses.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/05-config/02-typescript.mdx#_snippet_7

LANGUAGE: ts
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' })
}
```

----------------------------------------

TITLE: Sitecore XM Cloud Environment Variables
DESCRIPTION: Defines the essential environment variables required to configure a Next.js application for integration with Sitecore XM Cloud, covering application naming, API endpoints, authentication, and data fetching methods.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sitecore-xmcloud/README.md#_snippet_0

LANGUAGE: APIDOC
CODE:
```
JSS_APP_NAME: The name of the JSS app that is configured in XM Cloud.
GRAPH_QL_ENDPOINT: The GraphQL Edge endpoint. This is required for Sitecore Experience Edge.
SITECORE_API_KEY: The Sitecore API key is required to build the app.
SITECORE_API_HOST: The host of the Sitecore API.
FETCH_WITH: The fetch method to the Sitecore API. This can be either GraphQL or REST.
```

----------------------------------------

TITLE: Copy .env.local.example for Environment Variables
DESCRIPTION: Copies the example environment file to `.env.local`, which is ignored by Git. This file will store sensitive information like Storyblok API keys and preview secrets required for the application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Install Dependencies and Run Next.js Development Server
DESCRIPTION: Commands to install project dependencies and start the Next.js development server. These commands are essential for running the application locally and testing changes during development, making the app accessible at `http://localhost:3000`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm install
pnpm dev
```

----------------------------------------

TITLE: Ingest Individual Blog Post Content to Enterspeed
DESCRIPTION: Shows a cURL POST request to the Enterspeed Ingest API for creating a 'blogPost' content type. This includes comprehensive properties such as title, featured image, date, author details, categories, excerpt, and the full HTML content of the blog post, linking it to a parent 'blog' type.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-enterspeed/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
curl --location --request POST 'https://api.enterspeed.com/ingest/v2/2' \
--header 'X-Api-Key: [YOUR DATA SOUCE API KEY]' \
--header 'Content-Type: application/json' \
--data-raw '{
  "type": "blogPost",
  "url": "/preview-mode-for-static-generation",
  "originParentId": "1",
  "properties": {
      "title": "Preview Mode for Static Generation",
      "featuredImage": "https://res.cloudinary.com/enterspeed/image/upload/v1648804237/Next.js%20-%20Example%20With%20Enterspeed/cover5.webp",
      "date": "2022-04-01T01:07:42",
      "author": {
          "name": "Vercel Team",
          "avatar": {
              "url": "https://res.cloudinary.com/enterspeed/image/upload/v1648804719/Next.js%20-%20Example%20With%20Enterspeed/vercel-avatar.webp"
          }
      },
      "categories": ["Next.js", "Static Generation"],
      "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
      "content": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</p><p>Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.</p><h2>Lorem Ipsum</h2><p>Tristique senectus et netus et malesuada fames ac turpis. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.</p>",
      "tags": ["SSG", "Preview"]
  }
}'
```

----------------------------------------

TITLE: Run Next.js Application in Development Mode
DESCRIPTION: Commands to install project dependencies and start the Next.js development server for the Nhost example, supporting npm, Yarn, and pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-nhost-auth-realtime-graphql/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm install
pnpm dev
```

----------------------------------------

TITLE: Example .env.local Configuration for DatoCMS
DESCRIPTION: This code block illustrates the structure of the .env.local file, showing placeholders for the DATOCMS_API_TOKEN and DATOCMS_PREVIEW_SECRET. These variables are crucial for connecting the Next.js application to DatoCMS and enabling the preview mode functionality.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-datocms/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
DATOCMS_API_TOKEN=...
DATOCMS_PREVIEW_SECRET=...
```

----------------------------------------

TITLE: Install Umbraco Sample Data NuGet Package
DESCRIPTION: Adds the Umbraco.Sample.Headless.Blog NuGet package to the project, providing pre-configured blog sample data.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
dotnet add package Umbraco.Sample.Headless.Blog
```

----------------------------------------

TITLE: Install Dependencies and Run Next.js in Development
DESCRIPTION: Install project dependencies and start the Next.js development server, making the blog accessible locally. This process can be done using either npm or Yarn.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sitefinity/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn
yarn dev
```

----------------------------------------

TITLE: Redirect Client in Next.js API Routes
DESCRIPTION: This example demonstrates how to redirect a client to a specified path or URL after an operation, such as a form submission, in a Next.js API Route. It uses `res.redirect()` with a 307 status code for temporary redirects and includes error handling.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_14

LANGUAGE: ts
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, message } = req.body

  try {
    await handleFormInputAsync({ name, message })
    res.redirect(307, '/')
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch data' })
  }
}
```

LANGUAGE: js
CODE:
```
export default async function handler(req, res) {
  const { name, message } = req.body

  try {
    await handleFormInputAsync({ name, message })
    res.redirect(307, '/')
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}
```

----------------------------------------

TITLE: Starting Temporal Worker Process
DESCRIPTION: This command starts the Temporal worker process, which is responsible for executing Workflow and Activity tasks. It connects to the Temporal Server and processes tasks from the configured task queue.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-temporal/README.md#_snippet_7

LANGUAGE: Bash
CODE:
```
npm run start-worker
```

----------------------------------------

TITLE: Bootstrap Next.js Project with graphql-react Example
DESCRIPTION: Instructions to initialize a new Next.js application pre-configured with the `with-graphql-react` example. This snippet provides commands for `npx`, `yarn`, and `pnpm` to quickly set up the project.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-graphql-react/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-graphql-react with-graphql-react-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-graphql-react with-graphql-react-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-graphql-react with-graphql-react-app
```

----------------------------------------

TITLE: Setting Builder.io Public API Key in Environment
DESCRIPTION: This snippet shows the format for setting the Builder.io public API key in your `.env` files (e.g., `.env.production`, `.env.development`). This key is crucial for your Next.js application to fetch content from your Builder.io space.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-builder-io/README.md#_snippet_5

LANGUAGE: env
CODE:
```
BUILDER_PUBLIC_KEY=...
```

----------------------------------------

TITLE: Create Next.js App with Linaria Example
DESCRIPTION: Bootstrap a new Next.js application pre-configured with the Linaria styling solution using `create-next-app`. This command fetches the `with-linaria` example from the Next.js repository, allowing users to quickly set up a project with Linaria integrated.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-linaria/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-linaria with-linaria-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-linaria with-linaria-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-linaria with-linaria-app
```

----------------------------------------

TITLE: Set Body Parser Size Limit for Next.js API Route
DESCRIPTION: This example shows how to specify the maximum allowed size for the parsed request body in a Next.js API Route. The `sizeLimit` can be defined using various formats supported by the `bytes` library, such as '500kb'.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_6

LANGUAGE: js
CODE:
```
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '500kb',
    },
  },
}
```

----------------------------------------

TITLE: Starting Temporal Server with Docker Compose
DESCRIPTION: This command starts the Temporal Server locally using Docker Compose. It is typically executed in the Temporal Server's Docker directory to bring up all necessary services for local development and testing.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-temporal/README.md#_snippet_4

LANGUAGE: Bash
CODE:
```
docker compose up
```

----------------------------------------

TITLE: Bootstrap Next.js Application with MongoDB Example
DESCRIPTION: Commands to initialize a new Next.js project using the `create-next-app` utility, pre-configured with the MongoDB and Mongoose example. This allows users to quickly set up the project structure with the necessary dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-mongodb-mongoose with-mongodb-mongoose-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-mongodb-mongoose with-mongodb-mongoose-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-mongodb-mongoose with-mongodb-mongoose-app
```

----------------------------------------

TITLE: Bootstrap Next.js App with MongoDB Example
DESCRIPTION: Commands to initialize a new Next.js project pre-configured with the MongoDB example using npx, yarn, or pnpm. This sets up the basic project structure and necessary files for the application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-mongodb with-mongodb-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-mongodb with-mongodb-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-mongodb with-mongodb-app
```

----------------------------------------

TITLE: Next.js CLI Tools Reference
DESCRIPTION: Reference documentation for the Next.js command-line interface tools, `create-next-app` and `next`, detailing their purpose and primary functions.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/06-cli/index.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
create-next-app:
  Description: Quickly create a new Next.js application using the default template or an example from a public GitHub repository.
```

LANGUAGE: APIDOC
CODE:
```
next:
  Description: Run the Next.js development server, build your application, and more.
```

----------------------------------------

TITLE: Vercel Template Deployment URL with Environment Variables
DESCRIPTION: This URL provides a direct link to deploy the Next.js TakeShape CMS template on Vercel. It pre-configures the deployment process by specifying the repository, project names, and automatically setting up the required environment variables (TAKESHAPE_PROJECT_ID, TAKESHAPE_API_KEY, TAKESHAPE_PREVIEW_SECRET) for a seamless setup.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-takeshape/README.md#_snippet_5

LANGUAGE: APIDOC
CODE:
```
https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/cms-takeshape&project-name=cms-takeshape&repository-name=cms-takeshape&env=TAKESHAPE_PROJECT_ID,TAKESHAPE_API_KEY,TAKESHAPE_PREVIEW_SECRET&envDescription=Required%20to%20connect%20the%20app%20with%20TakeShape&envLink=https://vercel.link/cms-takeshape-env
  repository-url: URL of the GitHub repository to clone
  project-name: Name for the Vercel project
  repository-name: Name for the cloned repository
  env: Comma-separated list of environment variable names to pre-fill
  envDescription: Description for the environment variables
  envLink: Link for more information about environment variables
```

----------------------------------------

TITLE: API Reference for `searchParams` Prop in Next.js Page
DESCRIPTION: Documents the `searchParams` prop, an optional promise resolving to an object of URL search parameters. Explains its structure, examples, and critical implications for dynamic rendering and asynchronous access, noting its plain object format.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/page.mdx#_snippet_5

LANGUAGE: APIDOC
CODE:
```
Prop: searchParams (optional)
  Type: Promise<{ [key: string]: string | string[] | undefined }>
  Description: A promise that resolves to an object containing the search parameters of the current URL.
  Access: Must use `async/await` or React's `use` function.
  Note: In Next.js 15+, `searchParams` is a promise. Synchronous access (v14 and earlier) is deprecated.
  Behavior: `searchParams` is a Dynamic API; using it opts the page into dynamic rendering.
  Format: It is a plain JavaScript object, not a `URLSearchParams` instance.

  Example URL     | `searchParams`
  --------------- | -----------------------------
  `/shop?a=1`     | `Promise<{ a: '1' }>`
  `/shop?a=1&b=2` | `Promise<{ a: '1', b: '2' }>`
  `/shop?a=1&a=2` | `Promise<{ a: ['1', '2'] }>`
```

----------------------------------------

TITLE: Configure Local Environment Variables
DESCRIPTION: Command to copy the example environment file (`.env.local.example`) to the active local environment file (`.env.local`), which is crucial for setting up API keys and other configurations while being ignored by version control.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-google-maps-embed/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Install Dependencies and Run Next.js Development Server
DESCRIPTION: These commands show how to install the project's dependencies and then start the Next.js development server. The development server enables hot-reloading and other development features, making it suitable for local development. Options are provided for both npm and Yarn.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco-heartcore/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Bootstrap Next.js Apollo Example Project
DESCRIPTION: These commands utilize `create-next-app` with various package managers (npm, Yarn, pnpm) to quickly set up a new Next.js project pre-configured with the Apollo Server and Client authentication example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/api-routes-apollo-server-and-client-auth/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example api-routes-apollo-server-and-client-auth api-routes-apollo-server-and-client-auth-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example api-routes-apollo-server-and-client-auth api-routes-apollo-server-and-client-auth-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example api-routes-apollo-server-and-client-auth api-routes-apollo-server-and-client-auth-app
```

----------------------------------------

TITLE: Send JSON Response in Next.js API Routes
DESCRIPTION: This example demonstrates how to send a JSON response back to the client from a Next.js API Route. It includes error handling within a try-catch block to return appropriate status codes (200 for success, 500 for errors) and messages, ensuring the response is a serializable object.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_12

LANGUAGE: ts
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await someAsyncOperation()
    res.status(200).json({ result })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
```

LANGUAGE: js
CODE:
```
export default async function handler(req, res) {
  try {
    const result = await someAsyncOperation()
    res.status(200).json({ result })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
```

----------------------------------------

TITLE: Run Umbraco CMS Locally
DESCRIPTION: Starts the Umbraco CMS application locally, initiating the installation wizard if it's the first run.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco/README.md#_snippet_5

LANGUAGE: bash
CODE:
```
dotnet run
```

----------------------------------------

TITLE: Run Next.js Firebase Project Locally
DESCRIPTION: Commands to start the Next.js application locally using Firebase emulators for testing and development before deployment.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-firebase-hosting/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npm run serve
```

LANGUAGE: bash
CODE:
```
yarn serve
```

----------------------------------------

TITLE: Read Request Headers from `NextRequest` Web API in Next.js
DESCRIPTION: This example illustrates how to read request headers directly from the `NextRequest` object's `headers` property, providing access to the underlying Web API `Headers` object.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/route.mdx#_snippet_10

LANGUAGE: typescript
CODE:
```
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
}
```

LANGUAGE: javascript
CODE:
```
export async function GET(request) {
  const requestHeaders = new Headers(request.headers)
}
```

----------------------------------------

TITLE: Running Next.js Development Server with npm
DESCRIPTION: This command executes the `dev` script defined in `package.json` using npm, which typically starts the Next.js development server. This allows developers to run the application locally and see changes in real-time.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-prepr/README.md#_snippet_7

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Commands to start the local development server for the Next.js application. This will typically open the application in your browser at http://localhost:3000 and also start the Inngest development server at http://localhost:8288.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/inngest/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm dev
```

LANGUAGE: bash
CODE:
```
bun dev
```

----------------------------------------

TITLE: Configure .env.local for Preview Mode
DESCRIPTION: Example content for the `.env.local` file, showing the inclusion of `ENTERSPEED_PREVIEW_ENVIRONMENT_API_KEY` and `ENTERSPEED_PREVIEW_SECRET` for enabling preview mode.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-enterspeed/README.md#_snippet_8

LANGUAGE: bash
CODE:
```
ENTERSPEED_PRODUCTION_ENVIRONMENT_API_KEY=

# Only required if you want to enable preview mode
ENTERSPEED_PREVIEW_ENVIRONMENT_API_KEY=
ENTERSPEED_PREVIEW_SECRET
```

----------------------------------------

TITLE: Next.js Docs Shared Content Source (MDX)
DESCRIPTION: An MDX file demonstrating how a page serves as a primary source for content that can be pulled into other documentation pages, preventing duplication and ensuring consistency.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_5

LANGUAGE: mdx
CODE:
```
---
title: <Link>
description: API reference for the <Link> component.
---

This API reference will help you understand how to use the props
and configuration options available for the Link Component.
```

----------------------------------------

TITLE: Bootstrap Next.js Prismic Blog Example
DESCRIPTION: Commands to initialize a new Next.js application using the Prismic CMS example template. This sets up the project structure and dependencies for the blog.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-prismic/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-prismic cms-prismic-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-prismic cms-prismic-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-prismic cms-prismic-app
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Commands to start the Next.js development server using various package managers like npm, yarn, pnpm, or bun. The server will typically run on http://localhost:3000.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/default-empty/js/README-template.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

----------------------------------------

TITLE: API Reference for `params` Prop in Next.js Page
DESCRIPTION: Details the `params` prop, an optional promise resolving to an object of dynamic route parameters. Explains its structure, examples, and important considerations regarding its asynchronous nature and deprecation of synchronous access in Next.js 15+.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/page.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
Prop: params (optional)
  Type: Promise<{ [key: string]: string | string[] }>
  Description: A promise that resolves to an object containing dynamic route parameters from the root segment down to that page.
  Access: Must use `async/await` or React's `use` function.
  Note: In Next.js 15+, `params` is a promise. Synchronous access (v14 and earlier) is deprecated.

  Example Route                        | URL         | `params`
  ------------------------------------ | ----------- | ---------------------------------------
  `app/shop/[slug]/page.js`            | `/shop/1`   | `Promise<{ slug: '1' }>`
  `app/shop/[category]/[item]/page.js` | `/shop/1/2` | `Promise<{ category: '1', item: '2' }>`
  `app/shop/[...slug]/page.js`         | `/shop/1/2` | `Promise<{ slug: ['1', '2'] }>`
```

----------------------------------------

TITLE: PlanetScale Password Creation Output Example
DESCRIPTION: An example of the output received after successfully creating a PlanetScale database password. This output contains the username, host URL, role, and plain text password needed for the connection string.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mysql/README.md#_snippet_5

LANGUAGE: text
CODE:
```
Password production-password was successfully created.
Please save the values below as they will not be shown again

  NAME                  USERNAME       ACCESS HOST URL                     ROLE               PLAIN TEXT
 --------------------- -------------- ----------------------------------- ------------------ -------------------------------------------------------
  production-password   xxxxxxxxxxxxx   xxxxxx.us-east-2.psdb.cloud   Can Read & Write   pscale_pw_xxxxxxx
```

----------------------------------------

TITLE: Next.js Data Fetching and Router API References
DESCRIPTION: References to key Next.js API elements related to data fetching methods and the `next/router` object, detailing their behavior in the context of Automatic Static Optimization.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/02-rendering/04-automatic-static-optimization.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
Next.js Data Fetching Functions:
  getServerSideProps:
    Description: Function used to fetch data on each request, preventing static optimization.
  getInitialProps:
    Description: Legacy function for data fetching, prevents static optimization if used in custom App/Document.
  getStaticProps:
    Description: Function for static data fetching; parameters from dynamic routes are always available in query.

next/router Object Properties:
  query:
    Description: Object containing route parameters. Empty during prerendering, updated after hydration.
  isReady:
    Type: boolean
    Description: Indicates if the router's query object is fully updated and ready for use.
  asPath:
    Description: The path as shown in the browser URL. Only known on the client for statically optimized pages. Avoid using before router.isReady is true to prevent mismatch errors.
```

----------------------------------------

TITLE: Clone Tigris Next.js Starter Repository
DESCRIPTION: Clones the `tigris-vercel-starter` repository from GitHub to your local machine, which contains the Next.js todo application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-tigris/README.md#_snippet_0

LANGUAGE: Shell
CODE:
```
git clone https://github.com/tigrisdata/tigris-vercel-starter
```

----------------------------------------

TITLE: Experimental NFT Plugin Configuration Options
DESCRIPTION: Detailed documentation for the configuration options available within the `createNodeFileTrace` function, including types, default values, and descriptions for each property.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/packages/turbo-tracing-next-plugin/README.md#_snippet_2

LANGUAGE: APIDOC
CODE:
```
cwd?: string (default: process.cwd())
  Description: Overrides the current working directory for running experimental NFT.
contextDirectory?: string (relative to cwd, default: .)
  Description: Specifies the directory where `node_modules` is located. For monorepos, this should be the root directory. Respects `PROJECT_CWD` and `npm_config_local_prefix` environment variables.
path?: string
  Description: Additional path to be appended to the `PATH` environment variable.
log?:
  all?: boolean (default: false)
    Description: Controls whether all logs should be displayed.
  level?: string (default: error)
    Description: Sets the logging level.
  detail?: boolean (default: false)
    Description: Determines whether log details should be expanded.
```

----------------------------------------

TITLE: Start Prismic Slice Machine
DESCRIPTION: Command to start the Prismic Slice Machine application locally. This allows developers to view and manage the premade content models and slices, typically accessible at http://localhost:9999.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-prismic/README.md#_snippet_2

LANGUAGE: sh
CODE:
```
npm run slicemachine
```

----------------------------------------

TITLE: Prepare app for localization and production
DESCRIPTION: Commands to build the application and start the server in production mode, enabling the use of translated message files ('lang/*.json') instead of 'defaultMessage's.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-react-intl/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
$ npm run build
```

LANGUAGE: bash
CODE:
```
$ npm start
```

----------------------------------------

TITLE: Next.js Environment Variables Configuration
DESCRIPTION: This table lists the required environment variables for the Next.js application, detailing their purpose and providing examples. These variables facilitate communication with the WordPress API, manage image optimization, and secure public exchanges between the frontend and backend.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_2

LANGUAGE: APIDOC
CODE:
```
NEXT_PUBLIC_BASE_URL:
  Description: Used for generating sitemap, redirects etc.
  Example: http://localhost:3000
NEXT_PUBLIC_WORDPRESS_API_URL:
  Description: Used when requesting wordpress for data
  Example: http://wp-domain.com
NEXT_PUBLIC_WORDPRESS_API_HOSTNAME:
  Description: The hostname without protocol for your WordPress installation
  Example: wp-domain.com
HEADLESS_SECRET:
  Description: Used for public exhanges between frontend and backend
  Example: INSERT_RANDOM_SECRET_KEY
WP_USER:
  Description: Username for a system user created specifically for interacting with your WordPress installation
  Example: username
WP_APP_PASS:
  Description: Generate an application password for the WordPress user defined in WP_USER
  Example: 1234 5678 abcd efgh
```

----------------------------------------

TITLE: Initialize Next.js Blog Starter Project
DESCRIPTION: These commands demonstrate how to bootstrap a new Next.js project using the `blog-starter` example. Choose your preferred package manager (npm, Yarn, or pnpm) to execute `create-next-app` and set up the project directory named `blog-starter-app`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/blog-starter/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example blog-starter blog-starter-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example blog-starter blog-starter-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example blog-starter blog-starter-app
```

----------------------------------------

TITLE: Configure ButterCMS API Key Environment Variable
DESCRIPTION: Copy the example environment file to `.env.local` and set your `NEXT_PUBLIC_BUTTER_CMS_API_KEY` to connect your Next.js app with your ButterCMS account.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-buttercms/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Run Next.js Application in Development Mode
DESCRIPTION: Commands to install project dependencies and start the Next.js development server. This allows developers to run the application locally and test the Elasticsearch integration. Users can choose between npm or Yarn for dependency management and execution.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-elasticsearch/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Exit Next.js Preview Mode
DESCRIPTION: URL endpoint to deactivate Next.js Preview Mode.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-enterspeed/README.md#_snippet_10

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/exit-preview
```

----------------------------------------

TITLE: Set HTTP Status Code and Send JSON Response in Next.js API Route
DESCRIPTION: This example demonstrates how to set the HTTP status code of a response to `200` (OK) and send a JSON object containing a `message` property from a Next.js API Route. It shows both TypeScript and JavaScript implementations.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_11

LANGUAGE: ts
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
```

LANGUAGE: js
CODE:
```
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
```

----------------------------------------

TITLE: Copy Environment Variables File
DESCRIPTION: This command copies the example environment variables file (`.env.local.example`) to `.env.local`. The `.env.local` file is used to store sensitive configuration like API keys and secrets, and is typically ignored by Git for security.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-magic/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: This command initiates the Next.js development server, allowing you to run and test your application locally. It provides options for different package managers commonly used in JavaScript projects.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/app-api/ts/README-template.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

----------------------------------------

TITLE: Initialize Next.js App from Any Public GitHub Example
DESCRIPTION: Command to create a new Next.js application by bootstrapping it with an example from any public GitHub repository, specified by its URL.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/06-cli/create-next-app.mdx#_snippet_5

LANGUAGE: bash
CODE:
```
npx create-next-app@latest --example "https://github.com/.../" [your-project-name]
```

----------------------------------------

TITLE: Install project dependencies
DESCRIPTION: Commands to install all required Node.js packages listed in the 'package.json' file. This step ensures all necessary libraries and frameworks are available for the project to run.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-prepr/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
```

LANGUAGE: bash
CODE:
```
yarn install
```

----------------------------------------

TITLE: Install Dependencies and Run Next.js Development Server
DESCRIPTION: Commands to install project dependencies and start the Next.js development server, making the application accessible locally. Options are provided for npm, Yarn, and pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-unsplash/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm install
pnpm dev
```

----------------------------------------

TITLE: Next.js Preview API Route Basic Handler
DESCRIPTION: A basic example of a Next.js API route handler that calls `res.setPreviewData({})` to enable preview mode. This function sets specific cookies on the browser to activate the preview functionality for subsequent requests.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/02-guides/preview-mode.mdx#_snippet_0

LANGUAGE: JavaScript
CODE:
```
export default function handler(req, res) {
  // ...
  res.setPreviewData({})
  // ...
}
```

----------------------------------------

TITLE: Type Response Data in Next.js API Routes
DESCRIPTION: Extends the API route typing example to include a custom type for the response data. By specifying `NextApiResponse<Data>`, TypeScript enforces the structure of the JSON response.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/05-config/02-typescript.mdx#_snippet_8

LANGUAGE: ts
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
```

----------------------------------------

TITLE: Run Next.js Production Build
DESCRIPTION: These commands are used to build and start the Next.js application in production mode. The 'build' command compiles the application for deployment, and 'start' serves the compiled application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-sass/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm run build
npm run start
```

LANGUAGE: bash
CODE:
```
yarn build
yarn start
```

LANGUAGE: bash
CODE:
```
pnpm build
pnpm start
```

----------------------------------------

TITLE: Bootstrap Next.js App with Azure Cosmos DB Example
DESCRIPTION: Commands to initialize a new Next.js project using `create-next-app` and the `with-azure-cosmos` example template, demonstrating how to quickly set up the application structure with different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-azure-cosmos/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-azure-cosmos with-azure-cosmos-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-azure-cosmos with-azure-cosmos-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-azure-cosmos with-azure-cosmos-app
```

----------------------------------------

TITLE: Create Next.js App with Turso Example
DESCRIPTION: Commands to initialize a new Next.js application using the `with-turso` example template, which sets up a local SQLite `dev.db` for development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-turso/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-turso with-turso-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-turso with-turso-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-turso with-turso-app
```

----------------------------------------

TITLE: Installing TypeScript Development Dependencies
DESCRIPTION: Installs the necessary development dependencies for TypeScript support in a Next.js project, including typescript itself and type definitions for React and Node.js.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-firebase-hosting/README.md#_snippet_5

LANGUAGE: bash
CODE:
```
npm install --save-dev typescript @types/react @types/node
```

----------------------------------------

TITLE: Implement Streaming Responses using Web APIs in Next.js Route Handlers
DESCRIPTION: Demonstrates how to create a streaming response using native Web APIs like `ReadableStream` and `TextEncoder`. This example shows how to convert an async iterator into a stream for chunked responses, providing fine-grained control over the streaming process.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/route.mdx#_snippet_16

LANGUAGE: TypeScript
CODE:
```
// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    }
  })
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const encoder = new TextEncoder()

async function* makeIterator() {
  yield encoder.encode('<p>One</p>')
  await sleep(200)
  yield encoder.encode('<p>Two</p>')
  await sleep(200)
  yield encoder.encode('<p>Three</p>')
}

export async function GET() {
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)

  return new Response(stream)
}
```

LANGUAGE: JavaScript
CODE:
```
// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()

      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    }
  })
}

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const encoder = new TextEncoder()

async function* makeIterator() {
  yield encoder.encode('<p>One</p>')
  await sleep(200)
  yield encoder.encode('<p>Two</p>')
  await sleep(200)
  yield encoder.encode('<p>Three</p>')
}

export async function GET() {
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)

  return new Response(stream)
}
```

----------------------------------------

TITLE: Configure Kontent.ai Preview URL for Post Content Type
DESCRIPTION: Sets up the preview URL in Kontent.ai for the 'Post' content type. This URL enables real-time preview of draft content in the Next.js application, using a secret for authentication and a slug for content identification.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-kontent-ai/README.md#_snippet_4

LANGUAGE: plain
CODE:
```
http://localhost:3000/api/preview?secret=<KONTENT_PREVIEW_SECRET>&slug={URLslug}
```

----------------------------------------

TITLE: Next.js Preview Mode API Route URL Structure
DESCRIPTION: This snippet illustrates the required URL format for the Next.js API route that enables preview mode. It includes placeholders for a secret key and the object slug, which are dynamically replaced by Cosmic CMS when generating the preview link.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-cosmic/README.md#_snippet_4

LANGUAGE: URL
CODE:
```
http://localhost:3000/api/preview?secret=<secret>&slug=[object_slug]
```

----------------------------------------

TITLE: Create a Basic Next.js API Route with JSON Response
DESCRIPTION: This snippet demonstrates how to create a simple API route in Next.js that returns a JSON response with a 200 status code. Files in `pages/api` are treated as API endpoints, allowing server-side logic without increasing client-side bundle size.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_0

LANGUAGE: typescript
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
```

LANGUAGE: javascript
CODE:
```
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
```

----------------------------------------

TITLE: Next.js Route Handlers API Reference
DESCRIPTION: Detailed API reference for Next.js Route Handlers, covering supported HTTP methods and available parameters for request handling.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/route.mdx#_snippet_4

LANGUAGE: APIDOC
CODE:
```
HTTP Methods:
  Supported: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS
  Description: A route file allows creating custom request handlers for a given route. Next.js automatically implements OPTIONS if not defined, setting the appropriate Response Allow header.

Parameters:
  request (optional):
    Type: NextRequest (extension of Web Request API)
    Description: Provides further control over incoming requests, including easy access to cookies and an extended, parsed URL object (nextUrl).
  context (optional):
    Properties:
      params:
        Type: Promise<object>
        Description: A promise that resolves to an object containing the dynamic route parameters for the current route.
        Examples:
          - app/dashboard/[team]/route.js (URL: /dashboard/1) -> params: Promise<{ team: '1' }>
          - app/shop/[tag]/[item]/route.js (URL: /shop/1/2) -> params: Promise<{ tag: '1', item: '2' }>
          - app/blog/[...slug]/route.js (URL: /blog/1/2) -> params: Promise<{ slug: ['1', '2'] }>
```

----------------------------------------

TITLE: Implement Next.js Catch-All API Route Handler
DESCRIPTION: This code demonstrates how to create a catch-all API route handler in Next.js using `[...slug].ts` or `[...slug].js`. The `slug` array from `req.query` contains all matched path segments, which can then be processed.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_18

LANGUAGE: ts
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query
  res.end(`Post: ${slug.join(', ')}`)
}
```

LANGUAGE: js
CODE:
```
export default function handler(req, res) {
  const { slug } = req.query
  res.end(`Post: ${slug.join(', ')}`)
}
```

----------------------------------------

TITLE: Next.js Preview API Route for Manual Testing
DESCRIPTION: A complete example of a Next.js API route (`pages/api/preview.js`) designed for manually testing preview mode. It sets preview data and sends a confirmation message to the browser, allowing developers to observe the `__prerender_bypass` and `__next_preview_data` cookies being set.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/02-guides/preview-mode.mdx#_snippet_1

LANGUAGE: JavaScript
CODE:
```
// simple example for testing it manually from your browser.
export default function handler(req, res) {
  res.setPreviewData({})
  res.end('Preview mode enabled')
}
```

----------------------------------------

TITLE: Handle HTTP Methods in Next.js API Routes
DESCRIPTION: This snippet demonstrates how to conditionally process requests based on their HTTP method (e.g., GET, POST, PUT, DELETE) within a Next.js API route handler. The `req.method` property allows for branching logic to handle different request types.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_2

LANGUAGE: typescript
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
```

LANGUAGE: javascript
CODE:
```
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle any other HTTP method
  }
}
```

----------------------------------------

TITLE: Install Dependencies and Run Next.js Development Server
DESCRIPTION: Commands to install project dependencies and start the Next.js development server. This allows you to run and test the application locally, typically accessible at http://localhost:3000. It also checks for MongoDB connection status.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm install
pnpm dev
```

----------------------------------------

TITLE: Bootstrap Next.js project with Redis example
DESCRIPTION: Use create-next-app with npm, Yarn, or pnpm to quickly set up a new Next.js project pre-configured with the Redis example. This command initializes the project in a new directory named 'roadmap'.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-redis/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-redis roadmap
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-redis roadmap
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-redis roadmap
```

----------------------------------------

TITLE: Run Next.js Application in Development Mode
DESCRIPTION: After setting up the Next.js project, use these commands to install dependencies and start the development server. This will make the application accessible locally for testing and development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-webiny/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm install
```

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Provides commands to start the Next.js development server using npm, yarn, pnpm, or bun. The server will be accessible at http://localhost:3000.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/default-tw/ts/README-template.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

----------------------------------------

TITLE: Initialize Next.js Project with Meilisearch Example
DESCRIPTION: Commands to bootstrap a new Next.js application pre-configured with the Meilisearch and InstantSearch example. These commands use different package managers to achieve the same outcome, setting up the project directory 'with-meilisearch-app'. A Meilisearch Cloud project or local instance is required for full functionality.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-meilisearch/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-meilisearch with-meilisearch-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-meilisearch with-meilisearch-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-meilisearch with-meilisearch-app
```

LANGUAGE: bash
CODE:
```
bunx create-next-app --example with-meilisearch with-meilisearch-app
```

----------------------------------------

TITLE: Test Next.js page response using fetch API
DESCRIPTION: Explains how to test a Next.js page by making a direct `fetch` request to its URL. This method allows for inspecting the raw HTTP response, including headers and body, which is useful for testing API routes or server-side rendered content before it's fully processed by a browser.
SOURCE: https://github.com/vercel/next.js/blob/canary/test/e2e/example.txt#_snippet_3

LANGUAGE: javascript
CODE:
```
it('should work with fetch', async () => {
    const res = await next.fetch('/')
    const html = await res.text()
    expect(html).toContain('hello world')
  })
```

----------------------------------------

TITLE: Install Dependencies and Start Development Server
DESCRIPTION: Installs all necessary project dependencies using npm and then launches the development server, enabling live preview and hot-reloading for the Stencil component.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-stencil/packages/test-component/readme.md#_snippet_1

LANGUAGE: bash
CODE:
```
npm install
npm start
```

----------------------------------------

TITLE: Send HTTP Response in Next.js API Routes
DESCRIPTION: This example illustrates how to send a generic HTTP response from a Next.js API Route. Similar to JSON responses, it handles asynchronous operations and errors, returning a 200 status for success and a 500 status for failures. The response body can be a string, object, or Buffer.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_13

LANGUAGE: ts
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await someAsyncOperation()
    res.status(200).send({ result })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}
```

LANGUAGE: js
CODE:
```
export default async function handler(req, res) {
  try {
    const result = await someAsyncOperation()
    res.status(200).send({ result })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}
```

----------------------------------------

TITLE: Fetch data with getInitialProps in Next.js Pages
DESCRIPTION: This example demonstrates how to use `getInitialProps` to fetch data from an external API (GitHub in this case) and pass it as props to a Next.js page component. The function runs on both the server and client during page transitions, making the fetched `stars` count available to the `Page` component.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/04-api-reference/03-functions/get-initial-props.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import { NextPageContext } from 'next'

Page.getInitialProps = async (ctx: NextPageContext) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default function Page({ stars }: { stars: number }) {
  return stars
}
```

LANGUAGE: jsx
CODE:
```
Page.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default function Page({ stars }) {
  return stars
}
```

----------------------------------------

TITLE: Copying .env.local Example File
DESCRIPTION: Copies the `.env.local.example` file to `.env.local` to initialize environment variables for the project.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sanity/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
cp -i .env.local.example .env.local
```

----------------------------------------

TITLE: API Definition for Next.js Request Context `waitUntil`
DESCRIPTION: This API documentation defines the TypeScript interfaces that Next.js expects for the global request context object. It specifies the `NextRequestContext` type, which provides a `get()` method, and the `NextRequestContextValue` type, which optionally includes the `waitUntil` function for managing asynchronous operations.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/after.mdx#_snippet_4

LANGUAGE: APIDOC
CODE:
```
type NextRequestContext = {
  get(): NextRequestContextValue | undefined
}

type NextRequestContextValue = {
  waitUntil?: (promise: Promise<any>) => void
}
```

----------------------------------------

TITLE: Exit Next.js Preview Mode via API Endpoint
DESCRIPTION: This snippet provides the URL to disable Preview Mode in the Next.js application. Navigating to this endpoint will revert the application to displaying only published content from Umbraco.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco/README.md#_snippet_9

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/exit-preview
```

----------------------------------------

TITLE: Bootstrap Next.js App with Markdoc Example
DESCRIPTION: These commands demonstrate how to initialize a new Next.js project using the `create-next-app` utility, specifically bootstrapping it with the Markdoc example. You can choose your preferred package manager: npm (via npx), Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/markdoc/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example markdoc markdoc-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example markdoc markdoc-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example markdoc markdoc-app
```

----------------------------------------

TITLE: Bootstrap Next.js App with Cloudinary Example
DESCRIPTION: Commands to quickly set up a new Next.js application, 'with-cloudinary-app', using the 'with-cloudinary' example template. Choose your preferred package manager: 'npx', 'yarn', or 'pnpm'.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-cloudinary/README.md#_snippet_0

LANGUAGE: Bash
CODE:
```
npx create-next-app --example with-cloudinary with-cloudinary-app
```

LANGUAGE: Bash
CODE:
```
yarn create next-app --example with-cloudinary with-cloudinary-app
```

LANGUAGE: Bash
CODE:
```
pnpm create next-app --example with-cloudinary with-cloudinary-app
```

----------------------------------------

TITLE: Start Next.js Development Server
DESCRIPTION: This code snippet provides various commands to start the Next.js development server using different JavaScript package managers. Running any of these commands will launch the application, typically accessible at http://localhost:3000 in your browser.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/app-empty/js/README-template.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

----------------------------------------

TITLE: Bootstrap Next.js App with Google Analytics Example
DESCRIPTION: Commands to initialize a new Next.js project using the `with-google-analytics` example. These commands demonstrate setup with `npx` (npm), `yarn`, and `pnpm`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-google-analytics with-google-analytics-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-google-analytics with-google-analytics-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-google-analytics with-google-analytics-app
```

----------------------------------------

TITLE: Copy Environment Variables File
DESCRIPTION: Copies the example environment variables file (`.env.local.example`) to `.env.local`. The `.env.local` file will contain the actual database connection details and will be ignored by Git.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-neo4j/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Full Next.js API Route for Manual Draft Mode Testing
DESCRIPTION: A complete TypeScript example of a Next.js API route (`pages/api/draft.ts`) designed for manual testing of Draft Mode. When accessed, it enables Draft Mode and sends a confirmation message, allowing developers to observe the `__prerender_bypass` cookie.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/02-guides/draft-mode.mdx#_snippet_1

LANGUAGE: ts
CODE:
```
// simple example for testing it manually from your browser.
export default function handler(req, res) {
  res.setDraftMode({ enable: true })
  res.end('Draft mode is enabled')
}
```

----------------------------------------

TITLE: Initialize Next.js Project with Playwright Example
DESCRIPTION: This command uses `create-next-app` to quickly set up a new Next.js project pre-configured with Playwright for End-to-End testing. It leverages the `with-playwright` example template for a fast start.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/testing/playwright.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app@latest --example with-playwright with-playwright-app
```

----------------------------------------

TITLE: Next.js Cookies API Methods Reference
DESCRIPTION: This section details the available methods for interacting with the `cookies` object in Next.js, including functions for getting, setting, deleting, and checking the existence of cookies.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/cookies.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
get('name'): Object
  Description: Accepts a cookie name and returns an object with the name and value.
getAll(): Array of objects
  Description: Returns a list of all the cookies with a matching name.
has('name'): Boolean
  Description: Accepts a cookie name and returns a boolean based on if the cookie exists.
set(name, value, options): -
  Description: Accepts a cookie name, value, and options and sets the outgoing request cookie.
delete(name): -
  Description: Accepts a cookie name and deletes the cookie.
clear(): -
  Description: Deletes all cookies.
toString(): String
  Description: Returns a string representation of the cookies.
```

----------------------------------------

TITLE: Run Next.js Development Server Locally
DESCRIPTION: Starts the Next.js development server, making the application accessible on `localhost:3000`. This step also initializes Tigris collections and requires `ts-node`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-tigris/README.md#_snippet_3

LANGUAGE: Shell
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Install and Log In to Firebase CLI Tools
DESCRIPTION: Instructions for setting up the Firebase command-line interface, including global installation, logging into your Firebase account, and listing available projects to retrieve the project ID.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-firebase-hosting/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm i -g firebase-tools
firebase login
firebase projects:list
```

----------------------------------------

TITLE: Next.js Local Development Workflow
DESCRIPTION: A step-by-step guide for local development, covering repository cloning, branch creation, dependency installation, starting the development server, committing changes, and creating a pull request using GitHub CLI.
SOURCE: https://github.com/vercel/next.js/blob/canary/contributing/core/developing.md#_snippet_1

LANGUAGE: bash
CODE:
```
gh repo clone vercel/next.js -- --filter=blob:none --branch canary --single-branch
```

LANGUAGE: bash
CODE:
```
git checkout -b MY_BRANCH_NAME origin/canary
```

LANGUAGE: bash
CODE:
```
pnpm install
```

LANGUAGE: bash
CODE:
```
pnpm dev
```

LANGUAGE: bash
CODE:
```
git add .
```

LANGUAGE: bash
CODE:
```
git commit -m "DESCRIBE_YOUR_CHANGES_HERE"
```

LANGUAGE: bash
CODE:
```
gh pr create
```

----------------------------------------

TITLE: Configure Makeswift API Host and Key in Environment
DESCRIPTION: Instructions and a diff snippet for updating the `.env.local.example` file to `.env.local` and setting the `MAKESWIFT_API_HOST` and `MAKESWIFT_SITE_API_KEY` environment variables. This crucial step connects the Next.js application to your Makeswift site for content retrieval and visual editing.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-makeswift/README.md#_snippet_2

LANGUAGE: diff
CODE:
```
-- MAKESWIFT_API_HOST=
-- MAKESWIFT_SITE_API_KEY=
++ MAKESWIFT_API_HOST=https://api.makeswift.com
++ MAKESWIFT_SITE_API_KEY=<YOUR_MAKESWIFT_SITE_API_KEY>
```

----------------------------------------

TITLE: Bootstrap Next.js App with next-page-transitions Example
DESCRIPTION: Instructions on how to initialize a new Next.js project using the `with-next-page-transitions` example. This can be achieved using `npx` (npm), `yarn create`, or `pnpm create` commands, which will set up a new application directory with the example's pre-configured structure.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-next-page-transitions/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-next-page-transitions with-next-page-transitions-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-next-page-transitions with-next-page-transitions-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-next-page-transitions with-next-page-transitions-app
```

----------------------------------------

TITLE: Bootstrap Next.js App with Vanilla Extract Example
DESCRIPTION: These commands initialize a new Next.js project pre-configured with the vanilla-extract example. Choose the command corresponding to your preferred Node.js package manager (npm, Yarn, or pnpm). The commands create a new directory named 'with-vanilla-extract-app' containing the example project.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-vanilla-extract/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-vanilla-extract with-vanilla-extract-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-vanilla-extract with-vanilla-extract-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-vanilla-extract with-vanilla-extract-app
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Commands to start the Next.js development server locally. This allows you to view your application in a browser at `http://localhost:3000` and enables hot-reloading for development.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/default-tw/js/README-template.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

----------------------------------------

TITLE: Bootstrap Next.js Redis Cache Example Project
DESCRIPTION: Use create-next-app with npx, yarn, or pnpm to quickly set up a new Next.js application configured with the Redis cache handler example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cache-handler-redis/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cache-handler-redis cache-handler-redis-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cache-handler-redis cache-handler-redis-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cache-handler-redis cache-handler-redis-app
```

----------------------------------------

TITLE: Generating Author Post URLs for Sitemap or API
DESCRIPTION: This PHP function `wsra_generate_author_api` retrieves user inputs using `wsra_get_user_inputs` to fetch a list of authors. It then iterates through the authors to generate their respective post URLs using `get_author_posts_url`, intended for use in sitemap generation or a custom author API endpoint.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_10

LANGUAGE: PHP
CODE:
```
function wsra_generate_author_api()
{
  [$args] = wsra_get_user_inputs();
  $author_urls = array();
  $authors =  get_users($args);
  foreach ($authors as $author) {
    $fullUrl = esc_url(get_author_posts_url($author->ID));
```

----------------------------------------

TITLE: Run Next.js Development Server with npm or Yarn
DESCRIPTION: This snippet provides commands to install dependencies and start the Next.js development server. It offers options for both npm and Yarn package managers, allowing developers to choose their preferred tool. The application will typically run on http://localhost:3000.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco/README.md#_snippet_7

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Magic Authentication Environment Variables
DESCRIPTION: This section details the required environment variables for configuring the Magic authentication example. These keys link the application to your Magic dashboard and secure user tokens, ensuring proper functionality and security.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-magic/README.md#_snippet_2

LANGUAGE: APIDOC
CODE:
```
NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY: string
  Description: Your Magic publishable key.
  Example: pk_test_abc or pk_live_ABC
MAGIC_SECRET_KEY: string
  Description: Your Magic secret key.
  Example: sk_test_ABC or sk_live_ABC
TOKEN_SECRET: string
  Description: A secret string for encrypting authentication tokens.
  Constraint: Must be at least 32 characters long.
```

----------------------------------------

TITLE: Next.js headers() Function API Reference
DESCRIPTION: Detailed API documentation for the `headers` function, including its parameters, return type, and the methods available on the returned Web Headers object, along with important usage considerations.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/headers.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
headers() Function
  Parameters:
    - None
  Returns:
    - Web Headers object (read-only)
      Methods:
        - Headers.entries(): Returns an iterator allowing to go through all key/value pairs.
        - Headers.forEach(): Executes a provided function once for each key/value pair.
        - Headers.get(name: string): Returns a String sequence of all values of a header with a given name.
        - Headers.has(name: string): Returns a boolean stating whether a Headers object contains a certain header.
        - Headers.keys(): Returns an iterator allowing you to go through all keys.
        - Headers.values(): Returns an iterator allowing you to go through all values.
  Good to know:
    - Asynchronous function; requires async/await or React's `use` function.
    - Read-only; cannot `set` or `delete` outgoing request headers.
    - Dynamic API; using it will opt a route into dynamic rendering.
```

----------------------------------------

TITLE: Configure Ably API Key and Local Root in .env
DESCRIPTION: Example of a `.env` file configuration, setting the `ABLY_API_KEY` and `API_ROOT` environment variables. These variables are crucial for the Ably demo to function correctly, allowing the application to authenticate with Ably and define its local API endpoint.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-ably/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
ABLY_API_KEY=your-ably-api-key:goes-here
API_ROOT=http://localhost:3000
```

----------------------------------------

TITLE: Create New Umbraco Project
DESCRIPTION: Creates a new Umbraco project using the installed .NET CLI templates in the current directory.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
dotnet new umbraco
```

----------------------------------------

TITLE: Next.js Middleware Config with Regex Negative Lookahead
DESCRIPTION: This example shows how to use full regex in the Middleware `config` matcher to exclude specific paths, such as API routes, static files, and the favicon, from being processed by the middleware.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/middleware-upgrade-guide.mdx#_snippet_1

LANGUAGE: ts
CODE:
```
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|favicon.ico).*)',
  ],
}
```

----------------------------------------

TITLE: Fetch Data from CMS using Next.js getStaticProps
DESCRIPTION: This example demonstrates how to implement `getStaticProps` in Next.js to fetch a list of blog posts from an external API or CMS. The function runs exclusively on the server at build time, populating the page component with data before it's rendered, ensuring static content generation.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/03-data-fetching/01-get-static-props.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
// posts will be populated at build time by getStaticProps()
export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
```

LANGUAGE: jsx
CODE:
```
// posts will be populated at build time by getStaticProps()
export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
```

----------------------------------------

TITLE: Next.js Docs File System Routing: Custom Order Sorting
DESCRIPTION: Illustrates how to control the navigation order in Next.js documentation by prepending two-digit numbers to file or folder names, ensuring concepts are learned in a specific sequence.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_2

LANGUAGE: txt
CODE:
```
01-routing
├── 01-defining-routes.mdx
├── 02-pages.mdx
├── 03-layouts-and-templates.mdx
└── ...
```

----------------------------------------

TITLE: Adjusting WordPress REST API Links for Headless Frontend
DESCRIPTION: This PHP function filters the REST API response for pages and posts (`rest_prepare_page`, `rest_prepare_post`) to ensure links point to the headless frontend. For draft posts, it uses the custom preview link. For published posts, it replaces the WordPress `site_url()` in the permalink with the `HEADLESS_URL`, ensuring that the frontend consumes correct URLs for content.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_7

LANGUAGE: PHP
CODE:
```
add_filter( 'rest_prepare_page', 'set_headless_rest_preview_link', 10, 2 );
add_filter( 'rest_prepare_post', 'set_headless_rest_preview_link' , 10, 2 );
function set_headless_rest_preview_link( WP_REST_Response $response, WP_Post $post ): WP_REST_Response {
  // Check if the post status is 'draft' and set the preview link accordingly.
  if ( 'draft' === $post->post_status ) {
    $response->data['link'] = get_preview_post_link( $post );
    return $response;
  }

  // For published posts, modify the permalink to point to the frontend.
  if ( 'publish' === $post->post_status ) {

    // Get the post permalink.
    $permalink = get_permalink( $post );

    // Check if the permalink contains the site URL.
    if ( false !== stristr( $permalink, get_site_url() ) ) {

      $frontendUrl = HEADLESS_URL;

      // Replace the site URL with the frontend URL.
      $response->data['link'] = str_ireplace(
        get_site_url(),
        $frontendUrl,
        $permalink
      );
    }
  }

  return $response;
}
```

----------------------------------------

TITLE: Fetch data in Next.js Server Components
DESCRIPTION: Demonstrates how to use the extended `fetch` API within a Next.js Server Component to retrieve and display data from an external API. This example shows asynchronous data fetching and rendering a list of items.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/fetch.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
export default async function Page() {
  let data = await fetch('https://api.vercel.app/blog')
  let posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

LANGUAGE: jsx
CODE:
```
export default async function Page() {
  let data = await fetch('https://api.vercel.app/blog')
  let posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

----------------------------------------

TITLE: Bootstrap Next.js Auth0 Example Application
DESCRIPTION: Instructions on how to initialize a new Next.js application using the Auth0 example template. This can be done with `npx`, `yarn`, or `pnpm`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/auth0/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example auth0 auth0-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example auth0 auth0-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example auth0 auth0-app
```

----------------------------------------

TITLE: Starting Redis Stack Server with Docker Compose
DESCRIPTION: This command starts the Redis Stack server in detached mode (`-d`) using Docker Compose. This is a prerequisite for the Next.js application to utilize Redis as its shared cache, typically used for local development environments.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cache-handler-redis/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
docker compose up -d
```

----------------------------------------

TITLE: structuredClone API Documentation
DESCRIPTION: Documents the structuredClone Web API, used for creating a deep copy of a value.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_51

LANGUAGE: APIDOC
CODE:
```
structuredClone:
  Description: Creates a deep copy of a value
```

----------------------------------------

TITLE: Running Next.js Development Server with pnpm
DESCRIPTION: This command first installs all project dependencies using pnpm, then starts the Next.js development server. This allows local development and live reloading of the application, typically accessible at `http://localhost:3000`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sanity/README.md#_snippet_13

LANGUAGE: bash
CODE:
```
pnpm install && pnpm dev
```

----------------------------------------

TITLE: Deleting Cookies in Next.js API Routes
DESCRIPTION: This example demonstrates how to delete a cookie by setting its `Max-Age` to 0 and an empty value using `res.setHeader('Set-Cookie', ...)` in a Next.js API Route. This effectively instructs the browser to remove the specified cookie.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/03-data-fetching/03-forms-and-mutations.mdx#_snippet_3

LANGUAGE: TypeScript
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Set-Cookie', 'username=; Path=/; HttpOnly; Max-Age=0')
  res.status(200).send('Cookie has been deleted.')
}
```

LANGUAGE: JavaScript
CODE:
```
export default async function handler(req, res) {
  res.setHeader('Set-Cookie', 'username=; Path=/; HttpOnly; Max-Age=0')
  res.status(200).send('Cookie has been deleted.')
}
```

----------------------------------------

TITLE: Running Next.js Development Server with npm
DESCRIPTION: This command first installs all project dependencies using npm, then starts the Next.js development server. This allows local development and live reloading of the application, typically accessible at `http://localhost:3000`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sanity/README.md#_snippet_11

LANGUAGE: bash
CODE:
```
npm install && npm run dev
```

----------------------------------------

TITLE: Bootstrap Next.js App with Google Tag Manager Example
DESCRIPTION: Commands to initialize a new Next.js application using the `with-google-tag-manager` example template, demonstrating usage with `npx`, `yarn`, and `pnpm`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-google-tag-manager/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-google-tag-manager with-google-tag-manager-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-google-tag-manager with-google-tag-manager-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-google-tag-manager with-google-tag-manager-app
```

----------------------------------------

TITLE: Next.js Canary Features API References
DESCRIPTION: References to API directives, functions, and configuration options available in Next.js canary versions, categorized by feature area. These APIs provide access to experimental functionalities.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/17-upgrading.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Caching:
  "use cache": /docs/app/api-reference/directives/use-cache
  cacheLife: /docs/app/api-reference/functions/cacheLife
  cacheTag: /docs/app/api-reference/functions/cacheTag
  dynamicIO: /docs/app/api-reference/config/next-config-js/dynamicIO

Authentication:
  forbidden: /docs/app/api-reference/functions/forbidden
  unauthorized: /docs/app/api-reference/functions/unauthorized
  forbidden.js: /docs/app/api-reference/file-conventions/forbidden
  unauthorized.js: /docs/app/api-reference/file-conventions/unauthorized
  authInterrupts: /docs/app/api-reference/config/next-config-js/authInterrupts
```

----------------------------------------

TITLE: default.js Component Props Reference
DESCRIPTION: API documentation for the `params` prop available to the `default.js` component.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/default.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
params (optional):
  Type: Promise<object>
  Description: A promise that resolves to an object containing the dynamic route parameters from the root segment down to the slot's subpages.
  Access: Must use `async/await` or React's `use` function to access values.
  Note: In Next.js 14 and earlier, `params` was synchronous. Synchronous access is still supported in Next.js 15 for backwards compatibility but will be deprecated.
  Examples:
    `app/[artist]/@sidebar/default.js` (URL: `/zack`) -> `Promise<{ artist: 'zack' }>`
    `app/[artist]/[album]/@sidebar/default.js` (URL: `/zack/next`) -> `Promise<{ artist: 'zack', album: 'next' }>`
```

----------------------------------------

TITLE: Bootstrap Next.js Project with Polyfills Example
DESCRIPTION: These commands demonstrate how to initialize a new Next.js application using the `create-next-app` utility, specifically bootstrapping it with the `with-polyfills` example. Each command uses a different package manager (npm, Yarn, or pnpm) to create a new directory named `with-polyfills-app` containing the project files.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-polyfills/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-polyfills with-polyfills-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-polyfills with-polyfills-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-polyfills with-polyfills-app
```

----------------------------------------

TITLE: Running Next.js Development Server with Yarn
DESCRIPTION: This command executes the `dev` script defined in `package.json` using Yarn, starting the Next.js development server. It provides the same functionality as `npm run dev` but uses Yarn.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-prepr/README.md#_snippet_8

LANGUAGE: bash
CODE:
```
yarn dev
```

----------------------------------------

TITLE: Create Next.js App with Lingui Example
DESCRIPTION: Commands to bootstrap a new Next.js application pre-configured with the Lingui internationalization example using different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-lingui/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-lingui with-lingui-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-lingui with-lingui-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-lingui with-lingui-app
```

----------------------------------------

TITLE: Fixing Dynamic API Call in Next.js Page Component
DESCRIPTION: This example demonstrates how to fix the 'Dynamic API called outside request' error in a Next.js page component by moving the `cookies()` function call from the global scope into the `Page` component's `async` function, ensuring it's within the request scope.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/next-dynamic-api-wrong-context.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
```diff filename="app/page.js"
import { cookies } from 'next/headers'

- const cookieStore = await cookies()
export default async function Page() {
+ const cookieStore = await cookies()
  return ...
}
```
```

----------------------------------------

TITLE: Initialize Next.js Blog with Comment Example
DESCRIPTION: Bootstraps a new Next.js application using the `create-next-app` utility, specifically cloning the `blog-with-comment` example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/blog-with-comment/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example blog-with-comment blog-with-comment-app
```

----------------------------------------

TITLE: Bootstrap Next.js Temporal Example
DESCRIPTION: Commands to initialize a new Next.js project pre-configured with the Temporal example using different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-temporal/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-temporal next-temporal-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-temporal next-temporal-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-temporal next-temporal-app
```

----------------------------------------

TITLE: Safely Access Browser APIs in Next.js Client Components
DESCRIPTION: This example illustrates how to safely access browser-specific Web APIs (like `window`) within a Next.js Client Component. By using the `useEffect` hook, the code ensures that browser APIs are only accessed after the component has mounted on the client-side, preventing server-side rendering errors.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/static-exports.mdx#_snippet_8

LANGUAGE: JSX
CODE:
```
'use client';

import { useEffect } from 'react';

export default function ClientComponent() {
  useEffect(() => {
    // You now have access to `window`
    console.log(window.innerHeight);
  }, [])

  return ...;
}
```

----------------------------------------

TITLE: Bootstrap Next.js MQTT Example Application
DESCRIPTION: These commands initialize a new Next.js project using the `create-next-app` utility, pre-configured with the `with-mqtt-js` example. Choose the command corresponding to your preferred package manager (npm, Yarn, or pnpm).
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mqtt-js/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-mqtt-js with-mqtt-js-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-mqtt-js with-mqtt-js-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-mqtt-js with-mqtt-js-app
```

----------------------------------------

TITLE: Setting Custom API Route Response Size Limit in Next.js
DESCRIPTION: This configuration snippet sets a custom maximum response size for a Next.js API Route. The `responseLimit` property can accept a numeric value in bytes or a string format (e.g., '500kb', '3mb') to define the limit before a warning is displayed. This example sets the limit to 8MB.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/api-routes-response-size-limit.mdx#_snippet_1

LANGUAGE: js
CODE:
```
export const config = {
  api: {
    responseLimit: '8mb',
  },
}
```

----------------------------------------

TITLE: NextResponse.cookies.getAll() Method API
DESCRIPTION: Retrieves all cookies from the response. Can optionally filter by cookie name to get all values for a specific cookie.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/next-response.mdx#_snippet_6

LANGUAGE: APIDOC
CODE:
```
`getAll(name?: string)`
  Parameters:
    `name` (optional): The name of the cookie to filter by.
  Returns: `Array<{ name: string; value: string; Path: string; }>`
  Description: Given a cookie name, return the values of the cookie. If no name is given, return all cookies on the response.
```

----------------------------------------

TITLE: Initialize Next.js Project with Userbase Example
DESCRIPTION: Commands to bootstrap a new Next.js application using the `with-userbase` example template via `create-next-app` with different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-userbase/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-userbase next-userbase-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-userbase next-userbase-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-userbase next-userbase-app
```

----------------------------------------

TITLE: Next.js useSearchParams Hook API Reference
DESCRIPTION: Comprehensive API documentation for the `useSearchParams` hook in Next.js, detailing its signature, parameters, return value, and the methods available on the returned `URLSearchParams` interface for interacting with URL query strings.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/use-search-params.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
useSearchParams(): ReadonlyURLSearchParams | null

Parameters:
  None

Returns:
  ReadonlyURLSearchParams | null - A read-only version of the URLSearchParams interface, or null for compatibility during migration in /pages directory without getServerSideProps.

ReadonlyURLSearchParams Methods:
  get(name: string): string | null
    - Returns the first value associated with the search parameter 'name'.
    - Example: URL `/dashboard?a=1` -> `searchParams.get("a")` returns `'1'`
    - Example: URL `/dashboard?a=` -> `searchParams.get("a")` returns `''`
    - Example: URL `/dashboard?b=3` -> `searchParams.get("a")` returns `null`
    - Example: URL `/dashboard?a=1&a=2` -> `searchParams.get("a")` returns `'1'` (use getAll() for all values)

  has(name: string): boolean
    - Returns a boolean value indicating if the given parameter 'name' exists.
    - Example: URL `/dashboard?a=1` -> `searchParams.has("a")` returns `true`
    - Example: URL `/dashboard?b=3` -> `searchParams.has("a")` returns `false`

  getAll(name: string): string[]
    - Returns all values associated with a given search parameter.

  keys(): Iterator<string>
    - Returns an iterator allowing traversal of all keys contained in this object.

  values(): Iterator<string>
    - Returns an iterator allowing traversal of all values contained in this object.

  entries(): Iterator<[string, string]>
    - Returns an iterator allowing traversal of all key/value pairs contained in this object.

  forEach(callbackFn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void
    - Iterates over each key/value pair in the search parameters.

  toString(): string
    - Returns a string containing a query string suitable for use in a URL.
```

----------------------------------------

TITLE: Copy Local Environment Variables File
DESCRIPTION: Copy the example environment variables file (`.env.local.example`) to `.env.local` to configure Mux API tokens locally. The `.env.local` file is ignored by Git.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mux-video/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Copy Environment Variable Template
DESCRIPTION: Command to copy the example environment file (`.env.local.example`) to `.env.local` for local configuration. The `.env.local` file is ignored by Git and should contain sensitive information like the MongoDB connection string (`MONGODB_URI`).
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Configure Userbase App ID Environment Variable
DESCRIPTION: Example content for the `.env.local` file, demonstrating how to set the `NEXT_PUBLIC_USERBASE_APP_ID` with your Userbase App ID.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-userbase/README.md#_snippet_2

LANGUAGE: text
CODE:
```
NEXT_PUBLIC_USERBASE_APP_ID=...
```

----------------------------------------

TITLE: Setting CORS Headers for GET Requests in Next.js Route Handler (JavaScript)
DESCRIPTION: This snippet demonstrates how to configure Cross-Origin Resource Sharing (CORS) headers for a GET request in a Next.js Route Handler. It uses the standard Web API `Response` object to set `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, and `Access-Control-Allow-Headers` to enable cross-origin requests. This allows clients from any origin to make GET, POST, PUT, DELETE, and OPTIONS requests with specified headers.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-building-your-application/01-routing/13-route-handlers.mdx#_snippet_19

LANGUAGE: js
CODE:
```
export async function GET(request) {
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
```

----------------------------------------

TITLE: Setting CORS Headers for GET Requests in Next.js Route Handler (TypeScript)
DESCRIPTION: This snippet demonstrates how to configure Cross-Origin Resource Sharing (CORS) headers for a GET request in a Next.js Route Handler. It uses the standard Web API `Response` object to set `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, and `Access-Control-Allow-Headers` to enable cross-origin requests. This allows clients from any origin to make GET, POST, PUT, DELETE, and OPTIONS requests with specified headers.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-building-your-application/01-routing/13-route-handlers.mdx#_snippet_18

LANGUAGE: ts
CODE:
```
export async function GET(request: Request) {
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}
```

----------------------------------------

TITLE: Run Next.js Application in Development Mode
DESCRIPTION: Commands to install project dependencies and start the Next.js development server, providing options for both npm and Yarn package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-couchbase/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Bootstrap Next.js App with Tigris Example
DESCRIPTION: Uses `create-next-app` to scaffold a new Next.js project pre-configured with the Tigris example. Provides commands for npm, Yarn, and pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-tigris/README.md#_snippet_4

LANGUAGE: Bash
CODE:
```
npx create-next-app --example with-tigris tigris-next-app
```

LANGUAGE: Bash
CODE:
```
yarn create next-app --example with-tigris tigris-next-app
```

LANGUAGE: Bash
CODE:
```
pnpm create next-app --example with-tigris tigris-next-app
```

----------------------------------------

TITLE: Run Next.js development server for api.video app
DESCRIPTION: Commands to start the local development server for the Next.js application. This allows developers to test and iterate on the application locally, providing a live-reloading environment for development purposes using npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-apivideo/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm dev
```

----------------------------------------

TITLE: NextResponse.cookies Property API
DESCRIPTION: The `cookies` property provides methods to read, set, get, and delete `Set-Cookie` headers on the response object.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/next-response.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
`cookies` property:
  Type: `ResponseCookies`
  Description: Read or mutate the `Set-Cookie` header of the response.
```

----------------------------------------

TITLE: Running Next.js and TinaCMS in Development Mode
DESCRIPTION: These commands install project dependencies and then start the Next.js application in development mode, along with the TinaCMS development server. This allows for local content editing and real-time preview of changes.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-tina/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run tina-dev

# or

yarn install
yarn tina-dev
```

----------------------------------------

TITLE: Generate Taxonomy URLs for Sitemap API in WordPress
DESCRIPTION: This PHP function generates URLs for categories or tags based on user input. It determines whether to fetch tags or categories using `wsra_get_user_inputs()`, then iterates through the terms, constructs their full URLs, and converts them to relative paths. The function returns an array of taxonomy URLs.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_12

LANGUAGE: PHP
CODE:
```
function wsra_generate_taxonomy_api()
{
  [$args,, $taxonomy] = wsra_get_user_inputs();
  $taxonomy_urls = array();
  $taxonomys = $taxonomy == 'tag' ? get_tags($args) : get_categories($args);
  foreach ($taxonomys as $taxonomy) {
    $fullUrl = esc_url(get_category_link($taxonomy->term_id));
    $url = str_replace(home_url(), '', $fullUrl);
    $tempArray = [
      'url' => $url,
    ];
    array_push($taxonomy_urls, $tempArray);
  }
  return array_merge($taxonomy_urls);
}
```

----------------------------------------

TITLE: Next.js Preview Mode API Endpoint Structure
DESCRIPTION: Defines the generic URL structure for enabling Next.js preview mode, requiring a secret token and a content slug. This endpoint is typically called from the client-side or a backend service to activate preview functionality for draft content.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco-heartcore/README.md#_snippet_4

LANGUAGE: HTTP
CODE:
```
http://localhost:3000/api/preview?secret=<secret>&slug=<slug>
```

----------------------------------------

TITLE: Next.js Metadata File Conventions API
DESCRIPTION: Describes the conventions for defining file-based metadata in Next.js applications, including static and dynamic file types, and how Next.js processes them for serving and updating HTML head elements. It also covers caching behavior and middleware compatibility.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/01-metadata/index.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
Metadata File Conventions:
  Overview:
    - Purpose: Define file-based metadata by adding special metadata files to route segments.
    - Processing: Next.js automatically serves files (with hashes in production for caching) and updates relevant head elements (URL, file type, image size).

  File Types:
    - Static Files:
      - Example: opengraph-image.jpg
      - Description: Directly serves the defined file.
    - Dynamic Variants:
      - Example: opengraph-image.js
      - Description: Uses code to generate the file content dynamically.

  Specific Convention Examples (Cached by Default):
    - sitemap.ts
    - opengraph-image.tsx
    - icon.tsx
    - Other metadata files

  Important Considerations:
    - Caching: Special Route Handlers (e.g., sitemap.ts, opengraph-image.tsx, icon.tsx) and other metadata files are cached by default.
    - Middleware: If using middleware.ts, configure the matcher to exclude metadata files to prevent conflicts.
```

----------------------------------------

TITLE: Next.js Script Component API Reference
DESCRIPTION: Detailed API documentation for the `next/script` component, outlining its available props, their types, and descriptions. This includes required and optional properties like `src`, `strategy`, `onLoad`, `onReady`, and `onError`.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/02-components/script.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
Script Component Props:
  src:
    Type: String
    Required: Yes (unless inline script is used)
    Description: A path string specifying the URL of an external script. This can be either an absolute external URL or an internal path.
  strategy:
    Type: String
    Required: No
    Description: The loading strategy of the script.
    Possible values:
      - beforeInteractive: Load before any Next.js code and before any page hydration occurs.
      - afterInteractive: (default) Load early but after some hydration on the page occurs.
      - lazyOnload: Load during browser idle time.
      - worker: (experimental) Load in a web worker.
  onLoad:
    Type: Function
    Required: No
  onReady:
    Type: Function
    Required: No
  onError:
    Type: Function
    Required: No
```

----------------------------------------

TITLE: Next.js Docs Shared Content Consumer (MDX)
DESCRIPTION: An MDX file illustrating how to consume content from a designated source page using the `source` metadata field, allowing content reuse across different sections like App and Pages Routers.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_6

LANGUAGE: mdx
CODE:
```
---
title: <Link>
description: API reference for the <Link> component.
source: app/api-reference/components/link
---

{/* DO NOT EDIT THIS PAGE. */}
{/* The content of this page is pulled from the source above. */}
```

----------------------------------------

TITLE: Bootstrap Next.js Agility CMS Example Project
DESCRIPTION: These commands demonstrate how to quickly set up a new Next.js project pre-configured with the Agility CMS example. Users can choose their preferred package manager (npx, yarn, or pnpm) to initialize the application, which will create a new directory and populate it with the example's files.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-agilitycms/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-agilitycms cms-agilitycms-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-agilitycms cms-agilitycms-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-agilitycms cms-agilitycms-app
```

----------------------------------------

TITLE: Next.js generateImageMetadata Function API Reference
DESCRIPTION: Detailed API documentation for the `generateImageMetadata` function, including its parameters and expected return structure for image metadata.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/generate-image-metadata.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
generateImageMetadata(params?: object): Array<object>

Parameters:
  params (optional):
    Type: object
    Description: An object containing dynamic route parameters from the root segment down to the segment generateImageMetadata is called from.
    Example values:
      app/shop/icon.js -> /shop -> undefined
      app/shop/[slug]/icon.js -> /shop/1 -> { slug: '1' }
      app/shop/[tag]/[item]/icon.js -> /shop/1/2 -> { tag: '1', item: '2' }

Returns:
  Type: Array<object>
  Description: An array of objects, each containing metadata for an image. Each object must include an 'id' value.
  Image Metadata Object Properties:
    id (required):
      Type: string
      Description: Unique identifier for the image, passed to the props of the image generating function.
    alt:
      Type: string
      Description: Alternative text for the image.
    size:
      Type: { width: number; height: number }
      Description: Dimensions of the image.
    contentType:
      Type: string
      Description: MIME type of the image (e.g., 'image/png').
```

----------------------------------------

TITLE: Web Crypto API Overview
DESCRIPTION: Lists core Web Crypto APIs and their primary functions, providing access to cryptographic functionalities, key management, and common primitives like hashing, signing, and encryption.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
API: crypto
  Description: Provides access to the cryptographic functionality of the platform
API: CryptoKey
  Description: Represents a cryptographic key
API: SubtleCrypto
  Description: Provides access to common cryptographic primitives, like hashing, signing, encryption or decryption
```

----------------------------------------

TITLE: Modifying WordPress REST API Root URL for Headless Setup
DESCRIPTION: This PHP function modifies the default WordPress REST API root URL. It replaces the `home_url()` with `site_url()` to ensure that REST API requests are routed correctly, especially in headless configurations where the WordPress installation might be on a different domain or subdomain than the frontend application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_5

LANGUAGE: PHP
CODE:
```
/**
 * Changes the REST API root URL to use the home URL as the base.
 *
 * @param string $url The complete URL including scheme and path.
 * @return string The REST API root URL.
 */
add_filter('rest_url', 'home_url_as_api_url');
function home_url_as_api_url($url)
{
  $url = str_replace(home_url(), site_url(), $url);
  return $url;
}
```

----------------------------------------

TITLE: Run Next.js Application in Development Mode
DESCRIPTION: Installs project dependencies and starts the Next.js development server. This command allows developers to run the application locally for testing and development purposes, typically accessible at `http://localhost:3000`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-storyblok/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev

# or

yarn install
yarn dev
```

----------------------------------------

TITLE: NextResponse.next() Method API
DESCRIPTION: Static method to create a `NextResponse` instance that allows middleware to continue routing. Can optionally forward or modify request headers.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/next-response.mdx#_snippet_17

LANGUAGE: APIDOC
CODE:
```
`static next(init?: ResponseInit & { request?: RequestInit })`
  Parameters:
    `init` (optional): An object containing response options, including `request` for modifying forwarded headers.
  Returns: `NextResponse`
  Description: The `next()` method is useful for Middleware, as it allows you to return early and continue routing.
```

----------------------------------------

TITLE: Bootstrap Next.js Project with NextUI Example
DESCRIPTION: These commands show how to initialize a new Next.js application using the 'with-next-ui' example template. They demonstrate the process using npx (npm), yarn, and pnpm, allowing users to quickly set up a project with NextUI integration.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-next-ui/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-next-ui with-next-ui-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-next-ui with-next-ui-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-next-ui with-next-ui-app
```

----------------------------------------

TITLE: Rename Environment Example File
DESCRIPTION: Renames the `.env.example` file to `.env`, which is used to store environment variables for the application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mysql/README.md#_snippet_3

LANGUAGE: sh
CODE:
```
mv .env.example .env
```

----------------------------------------

TITLE: External Tools for JavaScript Bundle Analysis
DESCRIPTION: Additional tools like Import Cost, Package Phobia, Bundle Phobia, and bundlejs can help understand the impact of new dependencies on application bundle size.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/production-checklist.mdx#_snippet_32

LANGUAGE: APIDOC
CODE:
```
External Bundle Analysis Tools:
  Purpose: Assess impact of new dependencies on bundle size.
  Tools:
    - Import Cost
    - Package Phobia
    - Bundle Phobia
    - bundlejs
```

----------------------------------------

TITLE: Creating a Redirect API Route in Next.js Pages Router (TypeScript/JavaScript)
DESCRIPTION: This API route handles dynamic URL redirects for the Next.js Pages Router. It expects a `pathname` query parameter, retrieves the corresponding redirect from `redirects.json`, and responds with the redirect entry or a 400 status for bad requests or missing redirects. This example provides both TypeScript and JavaScript implementations for the `handler` function.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/redirecting.mdx#_snippet_16

LANGUAGE: TypeScript
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'
import redirects from '@/app/redirects/redirects.json'

type RedirectEntry = {
  destination: string
  permanent: boolean
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pathname = req.query.pathname
  if (!pathname) {
    return res.status(400).json({ message: 'Bad Request' })
  }

  // Get the redirect entry from the redirects.json file
  const redirect = (redirects as Record<string, RedirectEntry>)[pathname]

  // Account for bloom filter false positives
  if (!redirect) {
    return res.status(400).json({ message: 'No redirect' })
  }

  // Return the redirect entry
  return res.json(redirect)
}
```

LANGUAGE: JavaScript
CODE:
```
import redirects from '@/app/redirects/redirects.json'

export default function handler(req, res) {
  const pathname = req.query.pathname
  if (!pathname) {
    return res.status(400).json({ message: 'Bad Request' })
  }

  // Get the redirect entry from the redirects.json file
  const redirect = redirects[pathname]

  // Account for bloom filter false positives
  if (!redirect) {
    return res.status(400).json({ message: 'No redirect' })
  }

  // Return the redirect entry
  return res.json(redirect)
}
```

----------------------------------------

TITLE: Bootstrap Next.js App with Prefetching Example
DESCRIPTION: These commands demonstrate how to initialize a new Next.js project using the 'with-prefetching' example. They utilize `create-next-app` with different package managers (npx, Yarn, pnpm) to quickly set up the application locally.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-prefetching/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-prefetching with-prefetching-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-prefetching with-prefetching-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-prefetching with-prefetching-app
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Commands to start the Next.js development server locally. The server will typically run on `http://localhost:3000` and automatically reload on file changes.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/default-empty/ts/README-template.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm dev
```

LANGUAGE: bash
CODE:
```
bun dev
```

----------------------------------------

TITLE: Configure Auth0 Application Settings and Environment Variables
DESCRIPTION: Outlines the steps to configure an Auth0 Single Page Web Application, including setting callback, logout, and web origins URLs. It also lists the required Auth0 environment variables for the Next.js application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/blog-with-comment/README.md#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Auth0 Application Settings:
  Allowed Callback URLs: URL(s) where Auth0 can redirect after authentication (e.g., http://localhost:3000/ for local testing or https://myapp.com/ for deployment).
  Allowed Logout URLs: URL(s) where Auth0 can redirect after logout (e.g., http://localhost:3000/ for local testing or https://myapp.com/ for deployment).
  Allowed Web Origins: URL(s) from which your application can make cross-origin requests to Auth0 (e.g., http://localhost:3000 for local testing or https://myapp.com/ for deployment).

Auth0 Environment Variables:
  NEXT_PUBLIC_AUTH0_DOMAIN: Your Auth0 tenant domain, found in the Auth0 dashboard under 'settings'.
  NEXT_PUBLIC_AUTH0_CLIENT_ID: The client ID of your Auth0 application, found in the Auth0 dashboard under 'settings'.
  NEXT_PUBLIC_AUTH0_ADMIN_EMAIL: The email of the admin user, used for signing in via Auth0, who has the privilege to delete any comment.
```

----------------------------------------

TITLE: Define a Static GET Route Handler in Next.js `export` Mode
DESCRIPTION: This example demonstrates how to create a GET Route Handler in Next.js that is configured for static export. By setting `export const dynamic = 'force-static'`, the handler can be used to generate static files (e.g., HTML, JSON) during the build process when Next.js is in `export` mode. It returns a simple 'Hello World' response.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/backend-for-frontend.mdx#_snippet_20

LANGUAGE: typescript
CODE:
```
export const dynamic = 'force-static'

export function GET() {
  return new Response('Hello World', { status: 200 })
}
```

----------------------------------------

TITLE: Running Next.js Development Server with Yarn
DESCRIPTION: This command first installs all project dependencies using Yarn, then starts the Next.js development server. This allows local development and live reloading of the application, typically accessible at `http://localhost:3000`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sanity/README.md#_snippet_12

LANGUAGE: bash
CODE:
```
yarn install && yarn dev
```

----------------------------------------

TITLE: Create a Basic Next.js Page Component
DESCRIPTION: This snippet defines a default functional component for a Next.js page. It renders a simple paragraph with 'hello world' text. This is a common starting point for any Next.js application.
SOURCE: https://github.com/vercel/next.js/blob/canary/test/e2e/example-file.txt#_snippet_0

LANGUAGE: JavaScript
CODE:
```
export default function Page() {
    return <p>hello world</p>
}
```

----------------------------------------

TITLE: Bootstrap Next.js Sitemap Example Project
DESCRIPTION: Commands to initialize a new Next.js project with the sitemap example using different package managers: npx, yarn, or pnpm. This sets up the basic project structure.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-sitemap/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-sitemap with-sitemap-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-sitemap with-sitemap-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-sitemap with-sitemap-app
```

----------------------------------------

TITLE: Create Next.js App with HLS.js Example
DESCRIPTION: Bootstrap a new Next.js application pre-configured with the HLS.js example using different package managers like npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-hls-js/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-hls-js with-hls-js-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-hls-js with-hls-js-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-hls-js with-hls-js-app
```

----------------------------------------

TITLE: Initialize Next.js Custom Server Example Project
DESCRIPTION: These commands show how to bootstrap a new Next.js application using the 'custom-server' example. You can choose your preferred package manager: npm (via npx), Yarn, or pnpm, to create the project directory 'custom-server-app' pre-configured with the example's setup.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/custom-server/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example custom-server custom-server-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example custom-server custom-server-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example custom-server custom-server-app
```

----------------------------------------

TITLE: Next.js API Route Response Helper Methods
DESCRIPTION: This section documents the Express.js-like helper methods available on the `res` (Server Response) object in Next.js API Routes. These methods simplify sending various types of HTTP responses, including setting status codes, sending JSON, raw data, redirects, and revalidating pages.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_10

LANGUAGE: APIDOC
CODE:
```
res.status(code)
  - Parameters:
    - code: number (HTTP status code)
  - Description: Sets the HTTP status code for the response.

res.json(body)
  - Parameters:
    - body: object (serializable)
  - Description: Sends a JSON response.

res.send(body)
  - Parameters:
    - body: string | object | Buffer
  - Description: Sends the HTTP response.

res.redirect([status,] path)
  - Parameters:
    - status: number (Optional, HTTP status code, defaults to 307)
    - path: string (URL or path)
  - Description: Redirects to a specified path or URL.

res.revalidate(urlPath)
  - Parameters:
    - urlPath: string (URL path)
  - Description: Revalidates a page on demand using `getStaticProps`.
```

----------------------------------------

TITLE: Initialize Next.js Project with Firebase Example
DESCRIPTION: Commands to bootstrap a new Next.js application pre-configured with the Firebase example template using different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-firebase/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-firebase with-firebase-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-firebase with-firebase-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-firebase with-firebase-app
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Commands to start the Next.js development server, which allows you to view your application locally. The server typically runs on http://localhost:3000 and supports hot-reloading as you edit files.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/app/ts/README-template.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm dev
```

LANGUAGE: bash
CODE:
```
bun dev
```

----------------------------------------

TITLE: NextResponse.json() Method API
DESCRIPTION: Static method to create a `NextResponse` instance with a JSON body. Allows specifying a custom HTTP status code.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/next-response.mdx#_snippet_10

LANGUAGE: APIDOC
CODE:
```
`static json(body: any, init?: ResponseInit)`
  Parameters:
    `body`: The JavaScript object to be serialized as JSON.
    `init` (optional): An object containing response options like `status` and `headers`.
  Returns: `NextResponse`
  Description: Produce a response with the given JSON body.
```

----------------------------------------

TITLE: Bootstrap Next.js Application with FingerprintJS Pro Example
DESCRIPTION: These commands demonstrate how to initialize a new Next.js project using the `create-next-app` utility, pre-configured with the FingerprintJS Pro example. Users can choose their preferred package manager (npm, Yarn, or pnpm) to set up the application quickly.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-fingerprintjs-pro/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-fingerprintjs-pro with-fingerprintjs-pro-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-fingerprintjs-pro with-fingerprintjs-pro-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-fingerprintjs-pro with-fingerprintjs-pro-app
```

----------------------------------------

TITLE: Bootstrapping Next.js Project with TinaCMS using pnpm
DESCRIPTION: This command initializes a new Next.js application using the `create-next-app` utility via pnpm, specifically bootstrapping it with the `cms-tina` example. It creates a new directory named `cms-tina-app` containing the project files.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-tina/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-tina cms-tina-app
```

----------------------------------------

TITLE: NextResponse Class API Overview
DESCRIPTION: NextResponse extends the Web Response API, providing enhanced methods for handling HTTP responses in Next.js, particularly useful in Middleware and API Routes.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/next-response.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
NextResponse extends the [Web Response API](https://developer.mozilla.org/docs/Web/API/Response) with additional convenience methods.
```

----------------------------------------

TITLE: Bootstrap Next.js App with Firebase Hosting Example
DESCRIPTION: Commands to initialize a new Next.js project using the `create-next-app` utility, specifically leveraging the `with-firebase-hosting` example template. This prepares the project structure for Firebase deployment.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-firebase-hosting/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-firebase-hosting with-firebase-hosting-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-firebase-hosting with-firebase-hosting-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-firebase-hosting with-firebase-hosting-app
```

----------------------------------------

TITLE: NextResponse.redirect() Method API
DESCRIPTION: Static method to create a `NextResponse` instance that performs an HTTP redirect to a specified URL.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/next-response.mdx#_snippet_12

LANGUAGE: APIDOC
CODE:
```
`static redirect(url: string | URL, status?: number)`
  Parameters:
    `url`: The URL to redirect to.
    `status` (optional): The HTTP status code for the redirect (e.g., 307, 308).
  Returns: `NextResponse`
  Description: Produce a response that redirects to a URL.
```

----------------------------------------

TITLE: Next.js: Disallowing re-exported config
DESCRIPTION: Explains that `export const config` must be directly defined in the page or API Route file, not re-exported from another module. The 'Not Allowed' example shows a re-export, while 'Allowed' shows a direct empty object export.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/invalid-page-config.mdx#_snippet_3

LANGUAGE: js
CODE:
```
export { config } from '../config'
```

LANGUAGE: js
CODE:
```
export const config = {}
```

----------------------------------------

TITLE: Bootstrap Next.js Application with Yoga Design System Example
DESCRIPTION: This snippet provides commands to initialize a new Next.js application pre-configured with the Yoga Design System example. It leverages `create-next-app` to set up the project structure and necessary dependencies. Users can choose their preferred package manager: npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-yoga/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-yoga with-yoga-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-yoga with-yoga-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-yoga with-yoga-app
```

----------------------------------------

TITLE: Creating Next.js App with pnpm
DESCRIPTION: This command initializes a new Next.js project named 'hello-world-app' using `pnpm create` and the 'hello-world' example template. It sets up the basic project structure and dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/hello-world/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example hello-world hello-world-app
```

----------------------------------------

TITLE: Bootstrap Next.js with Slate.js Example
DESCRIPTION: Commands to initialize a new Next.js project pre-configured with the Slate.js example using different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-slate/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-slate with-slate-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-slate with-slate-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-slate with-slate-app
```

----------------------------------------

TITLE: Create Next.js App from Bug Reproduction Template
DESCRIPTION: Demonstrates how to initialize a Next.js application using the `create-next-app` utility, specifically for creating a bug reproduction template. This command bootstraps a new Next.js project named `reproduction-app` based on the `reproduction-template-pages` example, using different package managers (npm, Yarn, pnpm).
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/reproduction-template-pages/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example reproduction-template-pages reproduction-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example reproduction-template-pages reproduction-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example reproduction-template-pages reproduction-app
```

----------------------------------------

TITLE: Next.js: Preventing dynamic expressions in runtime config
DESCRIPTION: Highlights that the `runtime` property within Next.js `config` must be a static string. The 'Not Allowed' example uses a template literal with an expression, while 'Allowed' examples show valid static string assignments.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/invalid-page-config.mdx#_snippet_2

LANGUAGE: js
CODE:
```
export const config = {
  runtime: `node${'js'}`,
}
```

LANGUAGE: js
CODE:
```
export const config = {
  runtime: 'nodejs',
}
```

LANGUAGE: js
CODE:
```
export const config = {
  runtime: `edge`,
}
```

----------------------------------------

TITLE: GraphQL Mesh Configuration for PetStore REST API
DESCRIPTION: This YAML configuration file instructs GraphQL Mesh on how to source data from the PetStore REST API. It defines a named source 'PetStore' and uses the 'newOpenapi' handler to specify the base URL and the OpenAPI specification file for the API, enabling GraphQL Mesh to automatically generate a GraphQL schema from it.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-graphql-gateway/README.md#_snippet_0

LANGUAGE: yaml
CODE:
```
sources:
  - name: PetStore
    handler:
      newOpenapi:
        baseUrl: https://petstore.swagger.io/v2/
        oasFilePath: https://petstore.swagger.io/v2/swagger.json
```

----------------------------------------

TITLE: Setting HTTP-Only Cookies in Next.js API Routes
DESCRIPTION: This example shows how to set an HTTP-only cookie using `res.setHeader('Set-Cookie', ...)` within a Next.js API Route. HTTP-only cookies are not accessible via client-side JavaScript, enhancing security for sensitive information like session tokens.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/03-data-fetching/03-forms-and-mutations.mdx#_snippet_1

LANGUAGE: TypeScript
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Set-Cookie', 'username=lee; Path=/; HttpOnly')
  res.status(200).send('Cookie has been set.')
}
```

LANGUAGE: JavaScript
CODE:
```
export default async function handler(req, res) {
  res.setHeader('Set-Cookie', 'username=lee; Path=/; HttpOnly')
  res.status(200).send('Cookie has been set.')
}
```

----------------------------------------

TITLE: Start Next.js Development Server
DESCRIPTION: After configuring the environment, these commands install all necessary project dependencies and then launch the Next.js application in development mode. This allows for local testing and real-time development with hot-reloading capabilities.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-agilitycms/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Commands to start the Next.js development server using various package managers. The server will be accessible locally at http://localhost:3000, and the page will auto-update upon file edits.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/default/ts/README-template.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

----------------------------------------

TITLE: String API Documentation
DESCRIPTION: Documents the JavaScript String object, which represents a sequence of characters.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_50

LANGUAGE: APIDOC
CODE:
```
String:
  Description: Represents a sequence of characters
```

----------------------------------------

TITLE: Run Contentful Setup Script for Content Model
DESCRIPTION: This command executes a setup script to automatically create the necessary content structures in your Contentful space. It requires your Contentful Space ID and a Management API token as environment variables. The script will import content types, editor interfaces, and locales.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/README.md#_snippet_1

LANGUAGE: shell
CODE:
```
npx cross-env CONTENTFUL_SPACE_ID=YOUR_SPACE_ID CONTENTFUL_MANAGEMENT_TOKEN=XXX npm run setup
```

----------------------------------------

TITLE: Bootstrap Next.js App with Three.js Example
DESCRIPTION: These commands demonstrate how to initialize a new Next.js application pre-configured with the `with-three-js` example using different package managers: npm (via npx), Yarn, and pnpm. This sets up the project structure and installs necessary dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-three-js/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-three-js with-three-js-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-three-js with-three-js-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-three-js with-three-js-app
```

----------------------------------------

TITLE: Bootstrapping Next.js with Auth0 Example using pnpm
DESCRIPTION: This command uses `pnpm create` to initialize a new Next.js application, specifically bootstrapping it with the official Auth0 example. It creates a new directory named `auth0-app` containing the pre-configured project structure for Auth0 integration.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/auth0/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example auth0 auth0-app
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: These commands start the Next.js development server, making the application accessible locally for testing and development. The server typically runs on `http://localhost:3000` and provides live reloading for a smooth development experience.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-magic/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm dev
```

----------------------------------------

TITLE: ImageResponse Constructor API Reference
DESCRIPTION: Documents the `ImageResponse` constructor, detailing its parameters for generating dynamic images using JSX and CSS. It outlines options for dimensions, emoji styles, custom fonts, debug mode, and HTTP response settings like status and headers.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/image-response.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
ImageResponse:
  new ImageResponse(element: ReactElement, options: object)

Parameters:
  element: ReactElement
    Description: The React element to render as the image content.
  options: object
    Description: Configuration options for the image generation and HTTP response.
    Properties:
      width?: number = 1200
        Description: The width of the generated image in pixels.
      height?: number = 630
        Description: The height of the generated image in pixels.
      emoji?: 'twemoji' | 'blobmoji' | 'noto' | 'openmoji' = 'twemoji'
        Description: The emoji style to use.
      fonts?: { name: string, data: ArrayBuffer, weight: number, style: 'normal' | 'italic' }[]
        Description: An array of custom fonts to use.
        Properties of font object:
          name: string
            Description: The name of the font.
          data: ArrayBuffer
            Description: The font data as an ArrayBuffer.
          weight: number
            Description: The font weight.
          style: 'normal' | 'italic'
            Description: The font style.
      debug?: boolean = false
        Description: Enables debug mode.
      status?: number = 200
        Description: The HTTP status code for the response.
      statusText?: string
        Description: The HTTP status text for the response.
      headers?: Record<string, string>
        Description: Custom HTTP headers for the response.
```

----------------------------------------

TITLE: Next.js Legacy Image Component API Reference
DESCRIPTION: This section provides a detailed API reference for the `next/legacy/image` component, outlining its required and optional properties, their types, and specific behaviors. It also includes a comparison with the new `next/image` component to highlight key changes and deprecated features.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/04-api-reference/01-components/image-legacy.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
Next.js Image Component Comparison (Legacy vs. New):
  New next/image changes compared to next/legacy/image:
    - Removes <span> wrapper around <img> (uses native computed aspect ratio).
    - Adds support for canonical style prop.
    - Removes layout, objectFit, objectPosition props (use style or className).
    - Removes IntersectionObserver (uses native lazy loading).
    - Removes lazyBoundary, lazyRoot props (no native equivalent).
    - Removes loader config (uses loader prop).
    - alt prop changed from optional to required.
    - onLoadingComplete callback receives reference to <img> element.
```

LANGUAGE: APIDOC
CODE:
```
Image Component Prop: src
  Description: Specifies the image source.
  Type: string | StaticImageData
  Required: Yes (except for statically imported images or layout="fill")
  Details:
    - A statically imported image file.
    - A path string (absolute external URL or internal path depending on the loader prop or loader configuration).
    - When using the default loader:
      - External URLs require remotePatterns configuration.
      - Animated or unknown formats (JPEG, PNG, WebP, AVIF, GIF, TIFF) are served as-is.
      - SVG format is blocked unless unoptimized or dangerouslyAllowSVG is enabled.
```

LANGUAGE: APIDOC
CODE:
```
Image Component Prop: width
  Description: Defines the image's width in pixels.
  Type: number
  Required: Yes (except for statically imported images or layout="fill")
  Details:
    - When using layout="intrinsic" or layout="fixed": Represents the rendered width, affecting how large the image appears.
    - When using layout="responsive" or layout="fill": Represents the original width, affecting only the aspect ratio.
```

LANGUAGE: APIDOC
CODE:
```
Image Component Prop: height
  Description: Defines the image's height in pixels.
  Type: number
  Required: Yes (except for statically imported images or layout="fill")
  Details:
    - When using layout="intrinsic" or layout="fixed": Represents the rendered height, affecting how large the image appears.
    - When using layout="responsive" or layout="fill": Represents the original height, affecting only the aspect ratio.
```

----------------------------------------

TITLE: Configure Environment Variables
DESCRIPTION: Command to copy the example environment variable file to a local '.env.local' file. This file is used to store sensitive configuration like Plasmic project IDs and API tokens, and is ignored by Git for security.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-plasmic/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Running Next.js Development Server Locally
DESCRIPTION: This command starts the Next.js development server, typically accessible at `http://localhost:3000`. It enables hot-reloading and provides a development environment for building and testing the Next.js application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-docker/README.md#_snippet_8

LANGUAGE: bash
CODE:
```
npm run dev\n# or\nyarn dev
```

----------------------------------------

TITLE: Bootstrap Next.js Project with Axiom Example
DESCRIPTION: Commands to initialize a new Next.js application pre-configured with the Axiom integration example. These commands use `create-next-app` via different package managers (npm, Yarn, or pnpm) to set up the project structure and dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-axiom/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-axiom with-axiom-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-axiom with-axiom-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-axiom with-axiom-app
```

----------------------------------------

TITLE: unstable_cache API Reference
DESCRIPTION: Comprehensive API documentation for the `unstable_cache` function, detailing its parameters (`fetchData`, `keyParts`, `options` with `tags` and `revalidate`) and its return value.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/unstable_cache.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
unstable_cache(fetchData: Function, keyParts: string[], options?: object): Function

Parameters:
  fetchData:
    Type: Function (async)
    Description: An asynchronous function that fetches the data to be cached. It must be a function that returns a Promise.
  keyParts:
    Type: string[] (optional)
    Description: An extra array of keys that further adds identification to the cache. By default, unstable_cache already uses the arguments and the stringified version of your function as the cache key. It is optional in most cases; the only time you need to use it is when you use external variables without passing them as parameters. However, it is important to add closures used within the function if you do not pass them as parameters.
  options:
    Type: object (optional)
    Description: An object that controls how the cache behaves.
    Properties:
      tags:
        Type: string[]
        Description: An array of tags that can be used to control cache invalidation. Next.js will not use this to uniquely identify the function.
      revalidate:
        Type: number | false (optional)
        Description: The number of seconds after which the cache should be revalidated. Omit or pass false to cache indefinitely or until matching revalidateTag() or revalidatePath() methods are called.

Returns:
  Type: Function
  Description: A function that when invoked, returns a Promise that resolves to the cached data. If the data is not in the cache, the provided function will be invoked, and its result will be cached and returned.
```

----------------------------------------

TITLE: Fetch Data and Render Page with getServerSideProps
DESCRIPTION: This example demonstrates how to use `getServerSideProps` in Next.js to fetch data from an external API (GitHub in this case) at request time. The fetched data is then passed as props to the page component, allowing the page to render dynamic content based on the server-side data.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/03-data-fetching/03-get-server-side-props.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type Repo = {
  name: string
  stargazers_count: number
}

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo: Repo = await res.json()
  // Pass data to the page via props
  return { props: { repo } }
}) satisfies GetServerSideProps<{ repo: Repo }>

export default function Page({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <p>{repo.stargazers_count}</p>
    </main>
  )
}
```

LANGUAGE: jsx
CODE:
```
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { repo } }
}

export default function Page({ repo }) {
  return (
    <main>
      <p>{repo.stargazers_count}</p>
    </main>
  )
}
```

----------------------------------------

TITLE: Create Next.js App with React-GA4 Example
DESCRIPTION: These commands demonstrate how to bootstrap a new Next.js application using the `create-next-app` utility, specifically leveraging the `with-react-ga4` example. It covers usage with `npx` (npm), `yarn`, and `pnpm`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-react-ga4/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-react-ga4 with-react-ga-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-react-ga4 with-react-ga-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-react-ga4 with-react-ga-app
```

----------------------------------------

TITLE: Define getStaticPaths and getStaticProps for Dynamic Routes in Next.js
DESCRIPTION: This example demonstrates how to use `getStaticPaths` to specify paths for static pre-rendering and `getStaticProps` to fetch data for those paths in a Next.js dynamic route page. It fetches repository data from GitHub API and renders the stargazers count.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/03-data-fetching/02-get-static-paths.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'

type Repo = {
  name: string
  stargazers_count: number
}

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          name: 'next.js',
        },
      },
    ],
    fallback: true,
  }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  return { props: { repo } }
}) satisfies GetStaticProps<{
  repo: Repo
}>

export default function Page({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return repo.stargazers_count
}
```

LANGUAGE: jsx
CODE:
```
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          name: 'next.js',
        },
      },
    ],
    fallback: true,
  }
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  return { props: { repo } }
}

export default function Page({ repo }) {
  return repo.stargazers_count
}
```

----------------------------------------

TITLE: Build Static Storybook for Deployment
DESCRIPTION: Commands to build a static version of your Storybook, which can then be deployed to a static hosting service like Vercel.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-storybook/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npm run build-storybook
```

LANGUAGE: bash
CODE:
```
yarn build-storybook
```

LANGUAGE: bash
CODE:
```
pnpm build-storybook
```

----------------------------------------

TITLE: Configure Umbraco Heartcore Environment Variables
DESCRIPTION: This snippet illustrates the required environment variables for connecting the Next.js application to Umbraco Heartcore. It includes placeholders for the project alias, API key, and a preview secret, which are essential for data fetching and preview mode functionality.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco-heartcore/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
UMBRACO_PROJECT_ALIAS=...
UMBRACO_API_KEY=...
UMBRACO_PREVIEW_SECRET=...
```

----------------------------------------

TITLE: Available Build and Development Commands
DESCRIPTION: This snippet lists various `npm` or `yarn` script commands available for managing the Electron and Next.js application. It includes commands for building individual layers, building both, starting development, creating production builds, and type checking.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-electron-typescript/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
"build-renderer": build and transpile Next.js layer
"build-electron": transpile electron layer
"build": build both layers
"dev": start dev version
"dist": create production electron build
"type-check": check TypeScript in project
```

----------------------------------------

TITLE: Forwarding Authorization Header in Next.js Server Component
DESCRIPTION: This example demonstrates how to retrieve the 'authorization' header using the `headers` function and then forward it in a `fetch` request within a Next.js Server Component. It illustrates a common pattern for authenticating API calls.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/headers.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
import { headers } from 'next/headers'

export default async function Page() {
  const authorization = (await headers()).get('authorization')
  const res = await fetch('...', {
    headers: { authorization }, // Forward the authorization header
  })
  const user = await res.json()

  return <h1>{user.name}</h1>
}
```

----------------------------------------

TITLE: Copy .env.local.example to .env.local
DESCRIPTION: Copies the example environment file to the local environment file, which will be ignored by Git. This is the first step in setting up local environment variables for the Next.js application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-kontent-ai/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Copying Environment Variable Example File
DESCRIPTION: This command copies the `.env.local.example` file to `.env.local`. The `.env.local` file is used to store sensitive environment variables like Mux API tokens and is ignored by Git for security.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mux-video/README.md#_snippet_4

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Initialize Next.js Project with Passport.js Example
DESCRIPTION: These commands demonstrate how to quickly set up a new Next.js project pre-configured with the Passport.js authentication example. They utilize `create-next-app` with different package managers (npx, yarn, pnpm) to clone and initialize the example repository.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-passport/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-passport with-passport-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-passport with-passport-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-passport with-passport-app
```

----------------------------------------

TITLE: Bootstrap Next.js Electron TypeScript Example
DESCRIPTION: Commands to initialize a new project using `create-next-app` with the `with-electron-typescript` example, supporting npx, Yarn, and pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-electron-typescript/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-electron-typescript with-electron-typescript-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-electron-typescript with-electron-typescript-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-electron-typescript with-electron-typescript-app
```

----------------------------------------

TITLE: permanentRedirect Function API Reference
DESCRIPTION: Detailed API documentation for the `permanentRedirect` function, including its parameters and return behavior.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/permanentRedirect.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
permanentRedirect(path, type)

Parameters:
  path: string
    Description: The URL to redirect to. Can be a relative or absolute path.
  type: 'replace' | 'push'
    Description: The type of redirect to perform.
    Default: 'replace' (default), 'push' (default in Server Actions).
    Note: The 'type' parameter has no effect when used in Server Components.

Returns:
  void (does not return a value)
```

----------------------------------------

TITLE: Configure API Route Response Size Limit in Next.js
DESCRIPTION: Provides examples for modifying the default 4MB response size limit in Next.js API Routes. This includes disabling the limit entirely or setting a custom maximum size using the `responseLimit` property within the `export const config` object. Adjusting this limit can impact performance.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/api-routes-response-size-limit.mdx#_snippet_0

LANGUAGE: javascript
CODE:
```
export const config = {
  api: {
    responseLimit: false,
  },
}
```

LANGUAGE: javascript
CODE:
```
export const config = {
  api: {
    responseLimit: '8mb',
  },
}
```

----------------------------------------

TITLE: Run Next.js Application in Development Mode
DESCRIPTION: Commands to install project dependencies and start the Next.js development server. This allows you to run and test the application locally, connecting to your configured Azure Cosmos DB instance.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-azure-cosmos/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Bootstrap Next.js Application with Clerk Example
DESCRIPTION: Commands to initialize a new Next.js project pre-configured with the Clerk example. These commands use different package managers to create a new directory and set up the project structure based on the provided example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-clerk/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-clerk with-clerk-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-clerk with-clerk-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-clerk with-clerk-app
```

----------------------------------------

TITLE: Initialize Next.js Redux Toolkit Example Project
DESCRIPTION: Commands to bootstrap a new Next.js application pre-configured with the Redux Toolkit example using different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-redux/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-redux with-redux-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-redux with-redux-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-redux with-redux-app
```

----------------------------------------

TITLE: Umbraco Heartcore Preview Button Configuration URL
DESCRIPTION: An example URL used to configure the preview button within the Umbraco Heartcore backoffice. This specific URL includes a placeholder for the preview secret and is used to direct users to the draft content in preview mode when the button is clicked.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco-heartcore/README.md#_snippet_5

LANGUAGE: HTTP
CODE:
```
http://localhost:3000/api/preview?secret=YOUR_PREVIEW_SECRET
```

----------------------------------------

TITLE: Run the Next.js development server
DESCRIPTION: Start the development server for the Next.js project. This command will typically watch for file changes and hot-reload the application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-relay-modern/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm dev
```

----------------------------------------

TITLE: Next.js Custom Cache Handler API Reference
DESCRIPTION: This section details the API interface for a custom Next.js cache handler, outlining the methods that must be implemented for managing cached data. It includes specifications for `get`, `set`, `revalidateTag`, and `resetRequestCache` methods, including their parameters, types, and return values.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/05-config/01-next-config-js/incrementalCacheHandlerPath.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
Cache Handler Interface:
  Methods:
    get(key: string)
      Description: Returns the cached value or null if not found.
      Parameters:
        key: string - The key to the cached value.

    set(key: string, data: Data | null, ctx: { tags: [] })
      Description: Returns Promise<void>.
      Parameters:
        key: string - The key to store the data under.
        data: Data or null - The data to be cached.
        ctx: { tags: [] } - The cache tags provided.

    revalidateTag(tag: string | string[])
      Description: Returns Promise<void>.
      Parameters:
        tag: string or string[] - The cache tags to revalidate.

    resetRequestCache()
      Description: This method resets the temporary in-memory cache for a single request before the next request. Returns void.
```

----------------------------------------

TITLE: Initialize Next.js Project with Radix UI Example
DESCRIPTION: These commands initialize a new Next.js application named `radix-ui-app` using the `radix-ui` example template. They demonstrate how to bootstrap the project using different package managers: `npx` (npm), `yarn create`, or `pnpm create`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/radix-ui/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example radix-ui radix-ui-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example radix-ui radix-ui-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example radix-ui radix-ui-app
```

----------------------------------------

TITLE: Bootstrap Next.js Example with Nhost
DESCRIPTION: Commands to initialize a new Next.js application pre-configured with the Nhost authentication and real-time GraphQL example using various package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-nhost-auth-realtime-graphql/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-nhost-auth-realtime-graphql nhost-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-nhost-auth-realtime-graphql nhost-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-nhost-auth-realtime-graphql nhost-app
```

----------------------------------------

TITLE: Bootstrap Next.js Drupal Example Application
DESCRIPTION: Commands to initialize a new Next.js project using the cms-drupal example template with different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-drupal/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-drupal cms-drupal-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-drupal cms-drupal-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-drupal cms-drupal-app
```

----------------------------------------

TITLE: Bootstrap Next.js Project with WindiCSS Example
DESCRIPTION: These commands bootstrap a new Next.js application pre-configured with WindiCSS. They utilize `create-next-app` with the `--example with-windicss` flag, specifying the new application directory as `with-windicss-app`. This allows users to quickly set up a development environment with WindiCSS integrated, using their preferred package manager.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-windicss/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-windicss with-windicss-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-windicss with-windicss-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-windicss with-windicss-app
```

----------------------------------------

TITLE: Bootstrap Next.js Apollo Example Project
DESCRIPTION: Commands to initialize a new Next.js project pre-configured with the Apollo example using different package managers like npx, yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-apollo/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-apollo with-apollo-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-apollo with-apollo-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-apollo with-apollo-app
```

----------------------------------------

TITLE: Navigate Between Pages Using Next.js Link Component
DESCRIPTION: This example demonstrates how to use the Next.js '<Link>' component for client-side navigation between pages. It shows how to import 'Link' and use it within a list to create dynamic links to individual blog posts, leveraging its prefetching capabilities.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/03-layouts-and-pages.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
import Link from 'next/link'

export default async function Post({ post }) {
  const posts = await getPosts()

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
```

LANGUAGE: jsx
CODE:
```
import Link from 'next/link'

export default async function Post({ post }) {
  const posts = await getPosts()

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
```

----------------------------------------

TITLE: Implement Data Fetching in Next.js Not Found Component
DESCRIPTION: This example demonstrates how to make the `not-found.js` component an `async` Server Component to fetch and display dynamic data. It uses `next/headers` to get the host domain and then fetches site-specific data, integrating it into the 'Not Found' UI.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/not-found.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import Link from 'next/link'
import { headers } from 'next/headers'

export default async function NotFound() {
  const headersList = await headers()
  const domain = headersList.get('host')
  const data = await getSiteData(domain)
  return (
    <div>
      <h2>Not Found: {data.name}</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  )
}
```

LANGUAGE: jsx
CODE:
```
import Link from 'next/link'
import { headers } from 'next/headers'

export default async function NotFound() {
  const headersList = await headers()
  const domain = headersList.get('host')
  const data = await getSiteData(domain)
  return (
    <div>
      <h2>Not Found: {data.name}</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  )
}
```

----------------------------------------

TITLE: Next.js loading.js API Reference and Behavior
DESCRIPTION: This section provides an API reference for the `loading.js` special file in Next.js, detailing its lack of parameters and its behavior regarding navigation, instant loading states, SEO implications, HTTP status codes, and browser limitations when streaming.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/loading.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
Reference:
  Parameters:
    - Loading UI components do not accept any parameters.

Behavior:
  Navigation:
    - The Fallback UI is prefetched, making navigation immediate unless prefetching hasn't completed.
    - Navigation is interruptible, meaning changing routes does not need to wait for the content of the route to fully load before navigating to another route.
    - Shared layouts remain interactive while new route segments load.
  Instant Loading States:
    - An instant loading state is fallback UI that is shown immediately upon navigation.
    - You can pre-render loading indicators such as skeletons and spinners, or a small but meaningful part of future screens such as a cover photo, title, etc.
    - This helps users understand the app is responding and provides a better user experience.
    - Create a loading state by adding a `loading.js` file inside a folder.
    - In the same folder, `loading.js` will be nested inside `layout.js`. It will automatically wrap the `page.js` file and any children below in a `<Suspense>` boundary.
  SEO:
    - Next.js will wait for data fetching inside `generateMetadata` to complete before streaming UI to the client. This guarantees the first part of a streamed response includes `<head>` tags.
    - Since streaming is server-rendered, it does not impact SEO.
    - You can use the Rich Results Test tool from Google to see how your page appears to Google's web crawlers and view the serialized HTML.
  Status Codes:
    - When streaming, a `200` status code will be returned to signal that the request was successful.
    - The server can still communicate errors or issues to the client within the streamed content itself, for example, when using `redirect` or `notFound`.
    - Since the response headers have already been sent to the client, the status code of the response cannot be updated. This does not affect SEO.
  Browser limits:
    - Some browsers buffer a streaming response. You may not see the streamed response until the response exceeds 1024 bytes.
    - This typically only affects “hello world” applications, but not real applications.
```

----------------------------------------

TITLE: Generate Total Page Counts for Sitemap API in WordPress
DESCRIPTION: This PHP function calculates and returns the total counts for various content types in WordPress, including categories, tags, users, and published posts for all public post types. It aggregates counts from `get_categories()`, `get_tags()`, `count_users()`, and `wp_count_posts()` for each post type, excluding attachments.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_14

LANGUAGE: PHP
CODE:
```
function wsra_generate_totalpages_api()
{
  $args = array(
    'exclude_from_search' => false
  );
  $argsTwo = array(
    'publicly_queryable' => true
  );
  $post_types = get_post_types($args, 'names');
  $post_typesTwo = get_post_types($argsTwo, 'names');
  $post_types = array_merge($post_types, $post_typesTwo);
  unset($post_types['attachment']);
  $defaultArray = [
    'category' => count(get_categories()),
    'tag' => count(get_tags()),
    'user' => (int)count_users()['total_users'],
  ];
  $tempValueHolder = array();
  foreach ($post_types as $postType) {
    $tempValueHolder[$postType] = (int)wp_count_posts($postType)->publish;
  }
  return array_merge($defaultArray, $tempValueHolder);
}
```

----------------------------------------

TITLE: Fetch Data in Client Component using SWR Library
DESCRIPTION: This example illustrates client-side data fetching using the SWR library. It defines a `fetcher` function to retrieve JSON data from an API endpoint and uses the `useSWR` hook to manage the fetching state, including loading and error handling. This approach leverages SWR's caching and revalidation features for efficient data management.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/09-fetching-data.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
'use client'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function BlogPage() {
  const { data, error, isLoading } = useSWR(
    'https://api.vercel.app/blog',
    fetcher
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      {data.map((post: { id: string; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

LANGUAGE: jsx
CODE:
```
'use client'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function BlogPage() {
  const { data, error, isLoading } = useSWR(
    'https://api.vercel.app/blog',
    fetcher
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

----------------------------------------

TITLE: Bootstrap Next.js Plasmic Example App
DESCRIPTION: Commands to initialize a new Next.js project based on the Plasmic CMS example using different package managers (npm, Yarn, pnpm). This sets up the basic project structure.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-plasmic/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-plasmic cms-plasmic-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-plasmic cms-plasmic-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-next-app --example cms-plasmic cms-plasmic-app
```

----------------------------------------

TITLE: Bootstrap Next.js Rematch Example Project
DESCRIPTION: These commands demonstrate how to quickly set up the Next.js Rematch example project using `create-next-app`. Users can choose their preferred package manager: npm (via npx), Yarn, or pnpm. Each command creates a new directory named `with-rematch-app` containing the bootstrapped project, ready for development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-rematch/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-rematch with-rematch-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-rematch with-rematch-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-rematch with-rematch-app
```

----------------------------------------

TITLE: Initialize Next.js App with Rebass Example
DESCRIPTION: Commands to bootstrap a new Next.js application pre-configured with the Rebass example using `create-next-app` via npx, yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-rebass/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-rebass with-rebass-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-rebass with-rebass-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-rebass with-rebass-app
```

----------------------------------------

TITLE: Clone Stencil Component Starter Repository
DESCRIPTION: Initializes a new project by cloning the Stencil component starter repository from GitHub and prepares it for local development by removing the original remote.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-stencil/packages/test-component/readme.md#_snippet_0

LANGUAGE: bash
CODE:
```
git clone https://github.com/ionic-team/stencil-component-starter.git my-component
cd my-component
git remote rm origin
```

----------------------------------------

TITLE: Render Navigation Links in Next.js Blog Layout
DESCRIPTION: An asynchronous Layout component for a blog that fetches a list of posts and dynamically renders `NavLink` components for each post. This example demonstrates how to integrate a custom client component (`NavLink`) within a server component layout to create interactive and data-driven navigation.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/layout.mdx#_snippet_13

LANGUAGE: TypeScript
CODE:
```
import { NavLink } from './nav-link'
import getPosts from './get-posts'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const featuredPosts = await getPosts()
  return (
    <div>
      {featuredPosts.map((post) => (
        <div key={post.id}>
          <NavLink slug={post.slug}>{post.title}</NavLink>
        </div>
      ))}
      <div>{children}</div>
    </div>
  )
}
```

LANGUAGE: JavaScript
CODE:
```
import { NavLink } from './nav-link'
import getPosts from './get-posts'

export default async function Layout({ children }) {
  const featuredPosts = await getPosts()
  return (
    <div>
      {featuredPosts.map((post) => (
        <div key={post.id}>
          <NavLink slug={post.slug}>{post.title}</NavLink>
        </div>
      ))}
      <div>{children}</div>
    </div>
  )
}
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: After setting up the API key, run the Next.js development server to view your fully-functional starter project with dynamic content from ButterCMS.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-buttercms/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

----------------------------------------

TITLE: Create Next.js Pages Router API Route for Dynamic Redirects
DESCRIPTION: This example provides a complete Next.js Pages Router API route for serving dynamic redirects. It takes a 'pathname' query parameter, retrieves the corresponding redirect from a 'redirects.json' file, and responds with the redirect entry or an error for invalid requests or missing redirects.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/redirecting.mdx#_snippet_12

LANGUAGE: typescript
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'
import redirects from '@/app/redirects/redirects.json'

type RedirectEntry = {
  destination: string
  permanent: boolean
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pathname = req.query.pathname
  if (!pathname) {
    return res.status(400).json({ message: 'Bad Request' })
  }

  // Get the redirect entry from the redirects.json file
  const redirect = (redirects as Record<string, RedirectEntry>)[pathname]

  // Account for bloom filter false positives
  if (!redirect) {
    return res.status(400).json({ message: 'No redirect' })
  }

  // Return the redirect entry
  return res.json(redirect)
}
```

LANGUAGE: javascript
CODE:
```
import redirects from '@/app/redirects/redirects.json'

export default function handler(req, res) {
  const pathname = req.query.pathname
  if (!pathname) {
    return res.status(400).json({ message: 'Bad Request' })
  }

  // Get the redirect entry from the redirects.json file
  const redirect = redirects[pathname]

  // Account for bloom filter false positives
  if (!redirect) {
    return res.status(400).json({ message: 'No redirect' })
  }

  // Return the redirect entry
  return res.json(redirect)
}
```

----------------------------------------

TITLE: Bootstrap Next.js Project with create-next-app
DESCRIPTION: Commands to initialize a new Next.js application using the `cms-cosmic` example template with different package managers (npm, Yarn, pnpm). This sets up the basic project structure.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-cosmic/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-cosmic cms-cosmic-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-cosmic cms-cosmic-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-cosmic cms-cosmic-app
```

----------------------------------------

TITLE: Recommended: Server-Side Data Fetching in Next.js Page
DESCRIPTION: This example showcases the recommended approach for data fetching in Next.js by making the Page component an `async` Server Component. It fetches data directly on the server before rendering, enabling direct use of `await` for API calls.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/no-async-client-component.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

----------------------------------------

TITLE: APIDOC: Middleware Matcher Property
DESCRIPTION: Details on the `matcher` option within the middleware `config` object. It allows targeting specific paths for middleware execution using strings, arrays, regular expressions, and objects with detailed matching conditions.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/middleware.mdx#_snippet_6

LANGUAGE: APIDOC
CODE:
```
Matcher property:
  - Type: string | string[] | object[]
  - Purpose: Target specific paths for Middleware execution.
  - Simple usage:
    - Single path: '/about'
    - Multiple paths: ['/about', '/contact']
  - Complex usage (array of objects):
    - source: string (path or pattern)
    - regexp (optional): string (regular expression for fine-tuning)
    - locale (optional): boolean (false to ignore locale-based routing)
    - has (optional): array of objects (conditions based on presence of headers, query params, cookies)
      - type: 'header' | 'query' | 'cookie'
      - key: string
      - value: string
    - missing (optional): array of objects (conditions based on absence of headers, query params, cookies)
      - type: 'header' | 'query' | 'cookie'
      - key: string
      - value: string
  - Configured matchers rules:
    1. MUST start with '/'
    2. Can include named parameters: '/about/:path'
    3. Can have modifiers on named parameters: '/about/:path*', '/about/:path?', '/about/:path+'
    4. Can use regular expression enclosed in parenthesis: '/about/(.*)'
  - Constraints:
    - Values must be constants for static analysis at build-time.
    - '/public' is considered '/public/index' for backward compatibility.
```

----------------------------------------

TITLE: On-Demand Page Revalidation with `res.revalidate()` in Next.js API Routes
DESCRIPTION: This API Route example shows how to implement on-demand page revalidation using `res.revalidate()` in the Next.js Pages Router. It includes a security check for a secret token and demonstrates how to revalidate a specific page path, ensuring the latest content is served.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/incremental-static-regeneration.mdx#_snippet_8

LANGUAGE: ts
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    // This should be the actual path not a rewritten path
    // e.g. for "/posts/[id]" this should be "/posts/1"
    await res.revalidate('/posts/1')
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
```

LANGUAGE: js
CODE:
```
export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    // This should be the actual path not a rewritten path
    // e.g. for "/posts/[id]" this should be "/posts/1"
    await res.revalidate('/posts/1')
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
```

----------------------------------------

TITLE: Run Next.js Local Development Server
DESCRIPTION: Start the Next.js local development server to view and test your application. This command compiles your code and serves it on localhost, allowing you to see changes in real-time as you develop.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm run dev
```

----------------------------------------

TITLE: Integrate Client Navigation Component into Next.js Layout
DESCRIPTION: This example shows how to import and render the `NavLinks` client component within a root `layout.tsx` or `layout.js` file. This allows the layout to display dynamic navigation while keeping the navigation logic encapsulated in a client-side component.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/layout.mdx#_snippet_16

LANGUAGE: tsx
CODE:
```
import { NavLinks } from '@/app/ui/nav-links'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        <main>{children}</main>
      </body>
    </html>
  )
}
```

LANGUAGE: jsx
CODE:
```
import { NavLinks } from '@/app/ui/nav-links'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        <main>{children}</main>
      </body>
    </html>
  )
}
```

----------------------------------------

TITLE: Bootstrap Next.js App with Couchbase Example
DESCRIPTION: Commands to initialize a new Next.js project using the 'with-couchbase' example, demonstrating different package managers (npx, yarn, pnpm).
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-couchbase/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-couchbase with-couchbase-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-couchbase with-couchbase-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-couchbase with-couchbase-app
```

----------------------------------------

TITLE: Bootstrap Next.js Application with Apollo and Redux Example
DESCRIPTION: Use `create-next-app` with your preferred package manager (npm, Yarn, or pnpm) to quickly set up a new Next.js project pre-configured with the Apollo and Redux integration example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-apollo-and-redux/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-apollo-and-redux with-apollo-and-redux-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-apollo-and-redux with-apollo-and-redux-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-apollo-and-redux with-apollo-and-redux-app
```

----------------------------------------

TITLE: Bootstrap Next.js App with React Native Web Example
DESCRIPTION: These commands initialize a new Next.js project using the `with-react-native-web` example template. They set up the basic project structure and dependencies required for developing cross-platform applications with React Native Web, demonstrating usage with `npx`, `yarn`, and `pnpm`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-react-native-web/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-react-native-web with-react-native-web-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-react-native-web with-react-native-web-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-react-native-web with-react-native-web-app
```

----------------------------------------

TITLE: Implementing Server-side Rendering with getServerSideProps in Next.js
DESCRIPTION: This example demonstrates how to use `getServerSideProps` in Next.js to perform Server-side Rendering. The `getServerSideProps` function is an `async` function called on every request to fetch dynamic data from an external API and pass it as props to the page component. This ensures the page content is always up-to-date, unlike Static Generation which pre-renders at build time.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/blog/pages/posts/pages.md#_snippet_5

LANGUAGE: javascript
CODE:
```
function Page({ data }) {
  // Render data...
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../data`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Page
```

----------------------------------------

TITLE: Next.js notFound() Function API Reference
DESCRIPTION: Detailed API documentation for the `notFound` function in Next.js, explaining its purpose, behavior, and implications for route rendering and SEO.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/not-found.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
Function: notFound()
  Purpose: Renders the 'not-found' file and injects a '<meta name="robots" content="noindex" />' tag.
  Behavior:
    - Throws: 'NEXT_HTTP_ERROR_FALLBACK;404' error.
    - Effect: Terminates rendering of the current route segment.
    - Error Handling: Allows graceful handling via a 'not-found' file for custom UI.
  TypeScript Type: 'never' (implies no 'return' statement is needed after invocation).
```

----------------------------------------

TITLE: Bootstrap Next.js App with rbx-bulma-pro Example
DESCRIPTION: Commands to initialize a new Next.js project using the 'with-rbx-bulma-pro' example. These commands utilize 'create-next-app' with different package managers (npx, Yarn, pnpm) to quickly set up the project structure and dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-rbx-bulma-pro/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-rbx-bulma-pro with-rbx-bulma-pro-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-rbx-bulma-pro with-rbx-bulma-pro-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-rbx-bulma-pro with-rbx-bulma-pro-app
```

----------------------------------------

TITLE: Initialize Next.js Project with Makeswift Example
DESCRIPTION: Commands to bootstrap a new Next.js application using the `create-next-app` utility, specifically configured for the `cms-makeswift` example. This step sets up the foundational project structure and includes the necessary Makeswift integration files.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-makeswift/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-makeswift cms-makeswift-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-makeswift cms-makeswift-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-makeswift cms-makeswift-app
```

----------------------------------------

TITLE: Configure Next.js Image Optimization Formats (WebP)
DESCRIPTION: Configures the acceptable image formats for the default Image Optimization API. The API automatically detects the browser's supported image formats via the request's `Accept` header. If multiple formats match, the first in the array is used. This example configures WebP as the preferred format.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/04-api-reference/01-components/image-legacy.mdx#_snippet_27

LANGUAGE: js
CODE:
```
module.exports = {
  images: {
    formats: ['image/webp']
  }
}
```

----------------------------------------

TITLE: Contentful Webhook Revalidation Endpoint URL
DESCRIPTION: The required POST URL for the Contentful webhook, which targets the Next.js API route responsible for triggering on-demand revalidation. The <YOUR_VERCEL_DEPLOYMENT_URL> placeholder must be replaced with the actual URL of your Vercel deployment.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/README.md#_snippet_5

LANGUAGE: APIDOC
CODE:
```
https://<YOUR_VERCEL_DEPLOYMENT_URL>/api/revalidate
```

----------------------------------------

TITLE: Next.js App Directory Request Functions API Reference
DESCRIPTION: API documentation for the `headers` and `cookies` functions available in the Next.js `app` directory for accessing request data within Server Components.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/migrating/app-router-migration.mdx#_snippet_19

LANGUAGE: APIDOC
CODE:
```
Function: headers()
  Description: Based on the Web Headers API.
  Usage Context: Can be used inside Server Components.
  Purpose: Retrieve request headers.

Function: cookies()
  Description: Based on the Web Cookies API.
  Usage Context: Can be used inside Server Components.
  Purpose: Retrieve cookies.
```

----------------------------------------

TITLE: Next.js Route Handlers (App Router)
DESCRIPTION: Explains the use of Route Handlers for accessing backend resources from Client Components, with a caution against calling them from Server Components.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/production-checklist.mdx#_snippet_7

LANGUAGE: APIDOC
CODE:
```
File Convention: app/api/route.js (Route Handlers)
  Usage: Access backend resources from Client Components
  Caution: Avoid calling from Server Components (prevents additional server requests)
```

----------------------------------------

TITLE: Bootstrap Next.js Chakra UI App
DESCRIPTION: Instructions for quickly setting up a new Next.js project pre-configured with Chakra UI using various package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-chakra-ui with-chakra-ui-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-chakra-ui with-chakra-ui-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-chakra-ui with-chakra-ui-app
```

----------------------------------------

TITLE: Next.js API Routes (Pages Router)
DESCRIPTION: Describes the use of API Routes for accessing backend resources and preventing sensitive secrets from being exposed to the client in the Pages Router.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/production-checklist.mdx#_snippet_12

LANGUAGE: APIDOC
CODE:
```
File Convention: pages/api/*.js (API Routes)
  Usage: Access backend resources, prevent sensitive secrets exposure to client.
```

----------------------------------------

TITLE: Create Next.js App with Storybook Example
DESCRIPTION: Commands to bootstrap a new Next.js application pre-configured with the Storybook example using different package managers (npm, Yarn, pnpm).
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-storybook/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-storybook with-storybook-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-storybook with-storybook-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-storybook with-storybook-app
```

----------------------------------------

TITLE: Run Next.js Development Server Locally
DESCRIPTION: These commands start the Next.js development server, making the application accessible at `http://localhost:3000`. This allows for local development with hot-reloading and access to API routes.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-docker/README.md#_snippet_4

LANGUAGE: bash
CODE:
```
npm run dev
# or
yarn dev
```

----------------------------------------

TITLE: Bootstrap Next.js Algolia React InstantSearch Example
DESCRIPTION: Provides commands to quickly set up a new Next.js project pre-configured with the Algolia React InstantSearch example. These commands utilize different package managers to create the application directory and install dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-algolia-react-instantsearch/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-algolia-react-instantsearch with-algolia-react-instantsearch-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-algolia-react-instantsearch with-algolia-react-instantsearch-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-algolia-react-instantsearch with-algolia-react-instantsearch-app
```

LANGUAGE: bash
CODE:
```
bunx create-next-app --example with-algolia-react-instantsearch with-algolia-react-instantsearch-app
```

----------------------------------------

TITLE: Bootstrapping Next.js Project with pnpm
DESCRIPTION: This command employs `pnpm create` to initialize a new Next.js project named 'roadmap' from the 'with-redis' example. It offers another package manager option for setting up the project, known for its efficient disk space usage.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-redis/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-redis roadmap
```

----------------------------------------

TITLE: Copy Environment Variable Template
DESCRIPTION: Command to copy the example environment file (.env.local.example) to the local environment configuration file (.env.local) for setting up required API keys.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Fetching Data with API Key (Potential Client Exposure)
DESCRIPTION: This function demonstrates fetching data from an external service using an `API_KEY` from `process.env`. Without proper safeguards, this `API_KEY` could be exposed to the client if the module is accidentally imported into a Client Component, leading to environment variable poisoning.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/05-server-and-client-components.mdx#_snippet_12

LANGUAGE: typescript
CODE:
```
export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })

  return res.json()
}
```

LANGUAGE: javascript
CODE:
```
export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })

  return res.json()
}
```

----------------------------------------

TITLE: Create Reusable Preload Utility with React Cache
DESCRIPTION: Illustrates how to create a reusable data fetching utility using React's `cache` function and the `server-only` package. This approach caches the `getItem` function, ensuring it runs only on the server and optimizes subsequent calls for the same data, making the preloading mechanism more robust and efficient.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/09-fetching-data.mdx#_snippet_12

LANGUAGE: ts
CODE:
```
import { cache } from 'react'
import 'server-only'
import { getItem } from '@/lib/data'

export const preload = (id: string) => {
  void getItem(id)
}

export const getItem = cache(async (id: string) => {
  // ...
})
```

LANGUAGE: js
CODE:
```
import { cache } from 'react'
import 'server-only'
import { getItem } from '@/lib/data'

export const preload = (id) => {
  void getItem(id)
}

export const getItem = cache(async (id) => {
  // ...
})
```

----------------------------------------

TITLE: Next.js API Route for Client Component Type Check
DESCRIPTION: This JavaScript code defines a Next.js API route (GET endpoint) that imports two client components, `MyModuleClientComponent` and `ClientComponent`. The route then returns a JSON response containing the `typeof` each imported client component, demonstrating how server-side code can reference and inspect client-side modules during module evaluation.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/typeof-1/output.md#_snippet_5

LANGUAGE: javascript
CODE:
```
import { MyModuleClientComponent } from 'my-module/MyModuleClientComponent';
import { NextResponse } from 'next/server';
import { ClientComponent } from '../../ClientComponent';
import 'next/server';
import '../../ClientComponent';
import 'my-module/MyModuleClientComponent';
function GET() {
    return NextResponse.json({
        clientComponent: typeof ClientComponent,
        myModuleClientComponent: typeof MyModuleClientComponent
    });
}
export { GET };
export { GET as a } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};
export { };
```

----------------------------------------

TITLE: Configure Upstash Environment Variables
DESCRIPTION: Details the required environment variable for connecting to an Upstash Redis database. Users need to create a database in the Upstash Console and retrieve the connection URL.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/blog-with-comment/README.md#_snippet_2

LANGUAGE: APIDOC
CODE:
```
Upstash Environment Variables:
  REDIS_URL: The URL for connecting to the Upstash Redis database, found in the database details page under 'Redis Connect' in the Upstash Console.
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Provides various package manager commands to start the local development server for a Next.js application, enabling live updates as files are edited. After running, the application will be accessible via a web browser, typically at http://localhost:3000.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/app-tw-empty/ts/README-template.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

----------------------------------------

TITLE: Bootstrap Next.js App with ReactMD and TypeScript Example
DESCRIPTION: Commands to initialize a new Next.js application using the `create-next-app` utility, specifically cloning the `with-react-md-typescript` example. These commands allow users to quickly set up a local development environment using different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-react-md-typescript/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-react-md-typescript with-react-md-typescript-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-react-md-typescript with-react-md-typescript-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-react-md-typescript with-react-md-typescript-app
```

----------------------------------------

TITLE: Next.js Client and Server Components Composition (App Router)
DESCRIPTION: Recommendations for composing Server and Client Components, emphasizing the strategic placement of "use client" boundaries to optimize client-side JavaScript bundle size.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/production-checklist.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Concepts:
  - Server Components
  - Client Components
Directive: "use client"
Recommendation: Follow composition patterns, optimize "use client" boundary placement to reduce client-side JS bundle.
```

----------------------------------------

TITLE: Copy Environment Variable Example File
DESCRIPTION: Command to copy the example environment file (`.env.local.example`) to `.env.local` for local configuration, ensuring it's ignored by Git.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-userbase/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Bootstrap Next.js GraphCMS Example Project
DESCRIPTION: Commands to quickly initialize a new Next.js application pre-configured with the GraphCMS example using different package managers (npm, Yarn, pnpm). This sets up the project structure and initial files.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-graphcms/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-graphcms cms-graphcms-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-graphcms cms-graphcms-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-graphcms cms-graphcms-app
```

----------------------------------------

TITLE: Bootstrap Next.js App with Video.js Example
DESCRIPTION: Commands to initialize a new Next.js project using the `with-videojs` example template. This sets up the basic project structure and dependencies for integrating Video.js, supporting different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-videojs/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-videojs with-videojs-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-videojs with-videojs-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-videojs with-videojs-app
```

----------------------------------------

TITLE: Bootstrap Next.js Application with Stencil.js Example
DESCRIPTION: Demonstrates how to initialize a new Next.js project pre-configured with the Stencil.js example. This can be done using `create-next-app` via `npx`, `yarn`, or `pnpm`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-stencil/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-stencil with-stencil-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-stencil with-stencil-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-stencil with-stencil-app
```

----------------------------------------

TITLE: Bootstrap Next.js Facebook Pixel Example Project
DESCRIPTION: Commands to initialize a new Next.js project using `create-next-app` with the pre-configured Facebook Pixel example, demonstrating usage with `npx`, `yarn`, and `pnpm`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-facebook-pixel/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-facebook-pixel with-facebook-pixel-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-facebook-pixel with-facebook-pixel-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-facebook-pixel with-facebook-pixel-app
```

----------------------------------------

TITLE: Next.js CLI Commands Reference
DESCRIPTION: This reference lists the primary commands available in the Next.js CLI, along with a brief description of their functionality, such as starting development servers, building production applications, or running linters.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/06-cli/next.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
Commands:
  dev: Starts Next.js in development mode with Hot Module Reloading, error reporting, and more.
  build: Creates an optimized production build of your application. Displaying information about each route.
  start: Starts Next.js in production mode. The application should be compiled with `next build` first.
  info: Prints relevant details about the current system which can be used to report Next.js bugs.
  lint: Runs ESLint for all files in the `/src`, `/app`, `/pages`, `/components`, and `/lib` directories. It also provides a guided setup to install any required dependencies if ESLint it is not already configured in your application.
  telemetry: Allows you to enable or disable Next.js' completely anonymous telemetry collection.
```

----------------------------------------

TITLE: Bootstrapping Next.js Project with Yarn
DESCRIPTION: This command uses `yarn create` to bootstrap a new Next.js project named `cms-dotcms-app` from the `cms-dotcms` example. It provides an alternative method for setting up the project for users who prefer Yarn.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-dotcms/README.md#_snippet_2

LANGUAGE: Shell
CODE:
```
yarn create next-app --example cms-dotcms cms-dotcms-app
```

----------------------------------------

TITLE: Bootstrap a Next.js project with Relay Modern example
DESCRIPTION: Use `create-next-app` with npm, Yarn, or pnpm to quickly set up a new Next.js application pre-configured with the Relay Modern example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-relay-modern/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-relay-modern with-relay-modern-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-relay-modern with-relay-modern-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-relay-modern with-relay-modern-app
```

----------------------------------------

TITLE: Supported Web APIs in Next.js Edge Runtime
DESCRIPTION: A list of standard Web APIs that are available for use within the Next.js Edge Runtime, providing common functionalities for web development.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_60

LANGUAGE: APIDOC
CODE:
```
API: URLPattern
Description: Represents a URL pattern
Link: https://developer.mozilla.org/docs/Web/API/URLPattern

API: URLSearchParams
Description: Represents a collection of key/value pairs
Link: https://developer.mozilla.org/docs/Web/API/URLSearchParams

API: WeakMap
Description: Represents a collection of key/value pairs in which the keys are weakly referenced
Link: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakMap

API: WeakSet
Description: Represents a collection of objects in which each object may occur only once
Link: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

API: WebAssembly
Description: Provides access to WebAssembly
Link: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly
```

----------------------------------------

TITLE: Next.js App Directory: generateStaticParams Function API
DESCRIPTION: API reference for the `generateStaticParams` function in the Next.js `app` directory, detailing its purpose, return shape, and usage context.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/migrating/app-router-migration.mdx#_snippet_24

LANGUAGE: APIDOC
CODE:
```
generateStaticParams(): Array<Object>
  Description: Replaces getStaticPaths in the app directory. Used to define dynamic paths that should be pre-rendered at build time.
  Return Shape: An array of segment objects (e.g., [{ id: '1' }, { id: '2' }]).
  Usage Context: Can be used inside layouts.
```

----------------------------------------

TITLE: Installing Node.js Dependencies with Yarn
DESCRIPTION: This command installs all project dependencies using Yarn, based on the `package.json` file. It serves the same purpose as `npm install` but uses Yarn as the package manager.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-prepr/README.md#_snippet_6

LANGUAGE: bash
CODE:
```
yarn install
```

----------------------------------------

TITLE: Reading and Setting Headers in Next.js Route Handlers using next/headers
DESCRIPTION: This example demonstrates how to read incoming HTTP headers using the `headers` function from `next/headers` and set outgoing headers in a Next.js Route Handler. The `GET` function retrieves the 'referer' header and then includes it in the response, showcasing header manipulation.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-building-your-application/01-routing/13-route-handlers.mdx#_snippet_9

LANGUAGE: TypeScript
CODE:
```
import { headers } from 'next/headers'

export async function GET(request: Request) {
  const headersList = await headers()
  const referer = headersList.get('referer')

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { referer: referer },
  })
}
```

LANGUAGE: JavaScript
CODE:
```
import { headers } from 'next/headers'

export async function GET(request) {
  const headersList = await headers()
  const referer = headersList.get('referer')

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { referer: referer },
  })
}
```

----------------------------------------

TITLE: Get All Cookies in Next.js Server Components
DESCRIPTION: Shows how to retrieve all available cookies or all cookies matching a specific name using the `cookies().getAll()` method. This example maps over the returned cookies to display their names and values.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/cookies.mdx#_snippet_4

LANGUAGE: tsx
CODE:
```
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  return cookieStore.getAll().map((cookie) => (
    <div key={cookie.name}>
      <p>Name: {cookie.name}</p>
      <p>Value: {cookie.value}</p>
    </div>
  ))
}
```

LANGUAGE: jsx
CODE:
```
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  return cookieStore.getAll().map((cookie) => (
    <div key={cookie.name}>
      <p>Name: {cookie.name}</p>
      <p>Value: {cookie.value}</p>
    </div>
  ))
}
```

----------------------------------------

TITLE: Initialize Next.js Project with Convex Example
DESCRIPTION: Commands to bootstrap a new Next.js application using the Convex example template, demonstrating usage with npm, Yarn, and pnpm package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/convex/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example convex convex-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example convex convex-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example convex convex-app
```

----------------------------------------

TITLE: Bootstrap Next.js App with styled-components Example
DESCRIPTION: Commands to initialize a new Next.js project using the `with-styled-components` example. These commands demonstrate how to bootstrap the application using different package managers: npm (via npx), Yarn, and pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-styled-components with-styled-components-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-styled-components with-styled-components-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-styled-components with-styled-components-app
```

----------------------------------------

TITLE: Contentful Custom Image Loader Function
DESCRIPTION: Example custom image loader function for Contentful. It constructs an image URL, setting format (`webp`), width, and quality parameters for Contentful's image API.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/05-config/01-next-config-js/images.mdx#_snippet_7

LANGUAGE: js
CODE:
```
// Docs: https://www.contentful.com/developers/docs/references/images-api/
export default function contentfulLoader({ src, width, quality }) {
  const url = new URL(`https://example.com${src}`)
  url.searchParams.set('fm', 'webp')
  url.searchParams.set('w', width.toString())
  url.searchParams.set('q', (quality || 75).toString())
  return url.href
}
```

----------------------------------------

TITLE: Bootstrap Next.js Mantine Example Application
DESCRIPTION: Commands to initialize a new Next.js project pre-configured with the 'with-mantine' example. These commands create a new directory named 'with-mantine-app' and set up the project structure using different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mantine/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-mantine with-mantine-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-mantine with-mantine-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-mantine with-mantine-app
```

----------------------------------------

TITLE: API Reference for `onRequestError` Function Parameters
DESCRIPTION: This API documentation details the parameters accepted by the `onRequestError` function in Next.js. It specifies the structure and types for the `error` object (including its `digest` property), the `request` object (with path, method, and headers), and the `context` object (providing router type, route path, and error context).
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/instrumentation.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
export function onRequestError(
  error: { digest: string } & Error,
  request: {
    path: string // resource path, e.g. /blog?name=foo
    method: string // request method. e.g. GET, POST, etc
    headers: { [key: string]: string }
  },
  context: {
    routerKind: 'Pages Router' | 'App Router' // the router type
    routePath: string // the route file path, e.g. /app/blog/[dynamic]
    routeType: 'render' | 'route' | 'action' | 'middleware' // the context in which the error occurred
    renderSource:
      | 'react-server-components'
      | 'react-server-components-payload'
      | 'server-rendering'
    revalidateReason: 'on-demand' | 'stale' | undefined // undefined is a normal request without revalidation
    renderType: 'dynamic' | 'dynamic-resume' // 'dynamic-resume' for PPR
  }
): void | Promise<void>
```

----------------------------------------

TITLE: JavaScript Dynamic Operations and Linting Example
DESCRIPTION: This code snippet showcases various dynamic operations in JavaScript that are typically flagged by static analysis tools due to their unpredictable nature. It includes examples of spawning child processes, dynamic module loading using both `require` and `import()`, and file system access. The 'unknown' variables highlight the dynamic arguments that make static analysis challenging.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-tests/tests/snapshot/dynamic-request/very-dynamic/issues/__l___lint TP1001__ import(FreeVar(Math)[__quo__ra-139331.txt#_snippet_0

LANGUAGE: JavaScript
CODE:
```
child_process.spawnSync('node', [unknown, unknown])

require(unknown)

import(unknown)

fs.readFileSync(unknown)
readFileSync(unknown)
```

----------------------------------------

TITLE: Next.js `getStaticPaths` and `getStaticProps` with `fallback: false`
DESCRIPTION: This example demonstrates pre-rendering blog posts using `getStaticPaths` and `getStaticProps` in Next.js. It fetches a list of posts from an API, generates static paths for each, and sets `fallback: false` to ensure that only these specific paths are built at compile time, resulting in a 404 for any unlisted routes. `getStaticProps` then fetches the detailed data for each post.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/04-api-reference/03-functions/get-static-paths.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
function Post({ post }) {
  // Render post...
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}

export default Post
```

----------------------------------------

TITLE: Bootstrap Next.js with kea example
DESCRIPTION: Commands to initialize a new Next.js application pre-configured with the kea example using different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-kea/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-kea with-kea-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-kea with-kea-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-kea with-kea-app
```

----------------------------------------

TITLE: Enable Next.js Preview Mode URL
DESCRIPTION: Construct a URL to activate Next.js Preview Mode for a specific draft post. This URL requires a secret key for authentication and the slug of the post to be previewed.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-webiny/README.md#_snippet_7

LANGUAGE: HTTP
CODE:
```
http://localhost:3000/api/preview?secret=<secret>&slug=draft
```

----------------------------------------

TITLE: Bootstrap Next.js App with next-intl Example
DESCRIPTION: Commands to initialize a new Next.js application pre-configured with the `with-i18n-next-intl` example, using different package managers like npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-i18n-next-intl/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-i18n-next-intl with-i18n-next-intl-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-i18n-next-intl with-i18n-next-intl-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-i18n-next-intl with-i18n-next-intl-app
```

----------------------------------------

TITLE: Bootstrap Next.js project with react-multi-carousel example
DESCRIPTION: These commands initialize a new Next.js application using the `create-next-app` utility, specifically bootstrapping it with the `with-react-multi-carousel` example. This sets up the project structure and dependencies required to use the `react-multi-carousel` component.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-react-multi-carousel/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-react-multi-carousel with-react-multi-carousel-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-react-multi-carousel with-react-multi-carousel-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-react-multi-carousel with-react-multi-carousel-app
```

----------------------------------------

TITLE: Initialize Next.js Authentication Example Project
DESCRIPTION: Commands to bootstrap a new Next.js project with the NextAuth.js authentication example using different package managers like npm, Yarn, pnpm, and Bun. This sets up a local development environment for the authentication example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/auth/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example auth auth-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example auth auth-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example auth auth-app
```

LANGUAGE: bash
CODE:
```
bunx create-next-app --example auth auth-app
```

----------------------------------------

TITLE: turbo-persistence On-Disk Format Overview
DESCRIPTION: Describes the overall on-disk persistence format for the turbo-persistence crate, including the CURRENT file and various immutable file types identified by sequence numbers.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbo-persistence/README.md#_snippet_0

LANGUAGE: APIDOC
CODE:
```
CURRENT file: Stores the latest committed sequence number.
Other files (e.g., 0000123.sst): Have a sequence number as file name.
Immutability: All files are immutable once their sequence number is <= the committed sequence number.
Deletion: Files might be deleted when superseded by other committed files.

Four different file types:
- Static Sorted Table (SST, *.sst): Contains key-value pairs.
- Blob files (*.blob): Contains large values.
- Delete files (*.del): Contains a list of sequence numbers of files to be considered deleted.
- Meta files (*.meta): Contains metadata about SST files, including hash range and AQMF for quick filtering.

Three value types:
- INLINE: Small values stored directly in *.sst files.
- BLOB: Large values stored in *.blob files.
- DELETED: Values that are deleted (Tombstone).
- Future: MERGE (application specific update operation).
```

----------------------------------------

TITLE: Run Next.js Development Server
DESCRIPTION: Commands to start the Next.js development server locally. The server will typically run on http://localhost:3000 and automatically update the page in the browser as you edit files.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/templates/default/js/README-template.md#_snippet_0

LANGUAGE: bash
CODE:
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

----------------------------------------

TITLE: Bootstrap Next.js App with reactstrap Example
DESCRIPTION: These commands show how to initialize a new Next.js project using the 'with-reactstrap' example. Choose the command based on your preferred package manager (npm, Yarn, or pnpm) to quickly set up a pre-configured application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-reactstrap/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-reactstrap with-reactstrap-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-reactstrap with-reactstrap-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-reactstrap with-reactstrap-app
```

----------------------------------------

TITLE: Reading and Setting Cookies in Next.js Route Handlers using next/headers
DESCRIPTION: This example shows how to read and set HTTP cookies within a Next.js Route Handler using the `cookies` function from `next/headers`. The `GET` function retrieves a 'token' cookie and then sets it back in the response headers, demonstrating server-side cookie manipulation.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-building-your-application/01-routing/13-route-handlers.mdx#_snippet_7

LANGUAGE: TypeScript
CODE:
```
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token.value}` },
  })
}
```

LANGUAGE: JavaScript
CODE:
```
import { cookies } from 'next/headers'

export async function GET(request) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token}` },
  })
}
```

----------------------------------------

TITLE: Bootstrap Next.js Project with Cloudflare Turnstile Example
DESCRIPTION: Commands to initialize a new Next.js application pre-configured with the Cloudflare Turnstile example. This allows users to quickly set up a local development environment using npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cloudflare-turnstile/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cloudflare-turnstile cloudflare-turnstile-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cloudflare-turnstile cloudflare-turnstile-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cloudflare-turnstile cloudflare-turnstile-app
```

----------------------------------------

TITLE: Initialize Next.js App with Paste TypeScript Example
DESCRIPTION: These commands show how to bootstrap a new Next.js project pre-configured with the `with-paste-typescript` example. You can use `npx` (npm), `yarn`, or `pnpm` to execute the `create-next-app` utility and set up the project directory.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-paste-typescript/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-paste-typescript with-paste-typescript-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-paste-typescript with-paste-typescript-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-paste-typescript with-paste-typescript-app
```

----------------------------------------

TITLE: Initialize Next.js Project with next-translate Example
DESCRIPTION: These commands demonstrate how to bootstrap a new Next.js application using the `create-next-app` utility, specifically cloning the `with-next-translate` example. This allows developers to quickly set up a project with internationalization capabilities using `next-translate`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-next-translate/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-next-translate with-next-translate-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-next-translate with-next-translate-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-next-translate with-next-translate-app
```

----------------------------------------

TITLE: MDX Content Routing with AppOnly and PagesOnly Components
DESCRIPTION: Demonstrates how to use `<AppOnly>` and `<PagesOnly>` MDX components to conditionally display content based on whether the documentation is for the App Router or Pages Router in Next.js.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_7

LANGUAGE: mdx
CODE:
```
This content is shared between App and Pages.

<PagesOnly>

This content will only be shown on the Pages docs.

</PagesOnly>

This content is shared between App and Pages.
```

----------------------------------------

TITLE: Bootstrap Next.js Electron Example Project
DESCRIPTION: Use `create-next-app` with `npx`, `yarn`, or `pnpm` to quickly set up a new Next.js application based on the `with-electron` example template. This command initializes the project directory and installs necessary dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-electron/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-electron with-electron-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-electron with-electron-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-electron with-electron-app
```

----------------------------------------

TITLE: Copy .env.local.example to .env.local
DESCRIPTION: This command copies the example environment file to a local `.env.local` file. This file is typically ignored by Git and is used to store sensitive configuration variables specific to the local development environment.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-takeshape/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Start Local Redis Stack Server with Docker Compose
DESCRIPTION: Execute this command to launch the Redis Stack server in a detached Docker container, essential for local development of the Next.js application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cache-handler-redis/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
docker compose up -d
```

----------------------------------------

TITLE: Next.js Preview Mode API Endpoint
DESCRIPTION: API endpoint for entering Next.js preview mode. This allows real-time updates from Plasmic Studio to be reflected in the development server. The 'secret' parameter must match the 'PLASMIC_PREVIEW_SECRET' environment variable, and 'slug' specifies the path to preview.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-plasmic/README.md#_snippet_3

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/preview?secret=PLASMIC_PREVIEW_SECRET&slug=PATH
```

----------------------------------------

TITLE: Fixing Dynamic API Access in Async Server Components
DESCRIPTION: Demonstrates the correct way to access dynamic APIs, such as `params`, in an asynchronous Server Component by using the `await` keyword to unwrap the Promise.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/sync-dynamic-apis.mdx#_snippet_2

LANGUAGE: jsx
CODE:
```
async function Page({ params }) {
  // asynchronous access of `params.id`.
  const { id } = await params
  return <p>ID: {id}</p>
}
```

----------------------------------------

TITLE: Configuring Regex Negative Lookahead Matcher in Next.js Middleware (JavaScript)
DESCRIPTION: This snippet illustrates using a regular expression with a negative lookahead in the `matcher` to exclude specific paths from Middleware execution. It ensures the middleware runs on all paths except those starting with `api`, `_next/static`, `_next/image`, or specific metadata files like `favicon.ico`, `sitemap.xml`, and `robots.txt`.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-building-your-application/01-routing/14-middleware.mdx#_snippet_4

LANGUAGE: JavaScript
CODE:
```
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)/'
  ]
}
```

----------------------------------------

TITLE: Bootstrap Next.js ESLint Example
DESCRIPTION: Commands to bootstrap a Next.js application with the `with-eslint` example using different package managers (npm, Yarn, pnpm).
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-eslint/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-eslint with-eslint-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-eslint with-eslint-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-eslint with-eslint-app
```

----------------------------------------

TITLE: Bootstrap Next.js App with Reflexjs Example
DESCRIPTION: Commands to initialize a new Next.js project pre-configured with the 'with-reflexjs' example. These commands use `create-next-app` via different package managers to quickly set up the development environment.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-reflexjs/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-reflexjs with-reflexjs-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-reflexjs with-reflexjs-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-reflexjs with-reflexjs-app
```

----------------------------------------

TITLE: Bootstrap Next.js WebAssembly Example
DESCRIPTION: Commands to initialize a new Next.js project using the `with-webassembly` example template, providing options for `npx`, `yarn`, and `pnpm`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-webassembly/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-webassembly with-webassembly-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-webassembly with-webassembly-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-webassembly with-webassembly-app
```

----------------------------------------

TITLE: Next.js generateMetadata Function API Reference
DESCRIPTION: Detailed API specification for the `generateMetadata` function in Next.js, outlining its input parameters (`props` including `params` and `searchParams`, and `parent`) and its expected return type (`Metadata` object).
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/generate-metadata.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
generateMetadata(props: object, parent: Promise<Metadata>): Metadata

Parameters:
  props: object
    params: object
      Description: Dynamic route parameters from the root segment down to the segment generateMetadata is called from.
      Examples:
        - Route: app/shop/[slug]/page.js, URL: /shop/1, params: { slug: '1' }
        - Route: app/shop/[tag]/[item]/page.js, URL: /shop/1/2, params: { tag: '1', item: '2' }
        - Route: app/shop/[...slug]/page.js, URL: /shop/1/2, params: { slug: ['1', '2'] }
    searchParams: object
      Description: Current URL's search parameters.
      Examples:
        - URL: /shop?a=1, searchParams: { a: '1' }
        - URL: /shop?a=1&b=2, searchParams: { a: '1', b: '2' }
        - URL: /shop?a=1&a=2, searchParams: { a: ['1', '2'] }
  parent: Promise<Metadata>
    Description: A promise of the resolved metadata from parent route segments.

Returns:
  Metadata object: An object containing one or more metadata fields.
```

----------------------------------------

TITLE: Bootstrap Next.js App with GSAP Example
DESCRIPTION: Commands to initialize a new Next.js project pre-configured with the GSAP example using different package managers (npx, yarn, pnpm). These commands clone the example repository and set up a new application directory.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-gsap/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-gsap with-gsap-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-gsap with-gsap-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-gsap with-gsap-app
```

----------------------------------------

TITLE: Create a New Next.js Application with TypeScript
DESCRIPTION: Instructions for bootstrapping a new Next.js project pre-configured with TypeScript using various package managers. This command initializes the project with the 'with-typescript' example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-typescript/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-typescript with-typescript-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-typescript with-typescript-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-typescript with-typescript-app
```

----------------------------------------

TITLE: unauthorized.js Component Props API Reference
DESCRIPTION: API reference detailing the props accepted by the `unauthorized.js` component. As of the current version, this component does not accept any props.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/unauthorized.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
Props:
  unauthorized.js components do not accept any props.
```

----------------------------------------

TITLE: APIDOC: DataView
DESCRIPTION: Represents a generic view of an `ArrayBuffer`. It allows reading and writing of multiple number types at any byte offset within the buffer.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_13

LANGUAGE: APIDOC
CODE:
```
DataView: Represents a generic view of an `ArrayBuffer`
```

----------------------------------------

TITLE: Bootstrapping Next.js Project with pnpm
DESCRIPTION: This command uses `pnpm create` to bootstrap a new Next.js project named `cms-dotcms-app` from the `cms-dotcms` example. It offers another alternative for project setup, catering to users who prefer pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-dotcms/README.md#_snippet_3

LANGUAGE: Shell
CODE:
```
pnpm create next-app --example cms-dotcms cms-dotcms-app
```

----------------------------------------

TITLE: Bootstrapping Next.js App with FCM Example using pnpm (Bash)
DESCRIPTION: This command initializes a new Next.js project named `with-firebase-cloud-messaging-app` using `pnpm`. It employs the `create next-app` utility to clone and set up the `with-firebase-cloud-messaging` example, providing a ready-to-use template for integrating Firebase Cloud Messaging.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-firebase-cloud-messaging/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-firebase-cloud-messaging with-firebase-cloud-messaging-app
```

----------------------------------------

TITLE: Install TypeScript Development Dependencies
DESCRIPTION: Command to install essential development dependencies for integrating TypeScript into a Next.js project, enabling type checking and improved developer experience.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-firebase-hosting/README.md#_snippet_4

LANGUAGE: bash
CODE:
```
npm install --save-dev typescript @types/react @types/node
```

----------------------------------------

TITLE: Related Links Metadata Fields Reference
DESCRIPTION: Defines the available fields within the `related` metadata object for Next.js documentation pages. It specifies whether each field is required and provides a description of its purpose and expected values.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_17

LANGUAGE: APIDOC
CODE:
```
Related Links Metadata Fields:
  title:
    Required: Optional
    Description: The title of the card list. Defaults to "Next Steps".
  description:
    Required: Optional
    Description: The description of the card list.
  links:
    Required: Required
    Description: A list of links to other doc pages. Each list item should be a relative URL path (without a leading slash) e.g. "app/api-reference/file-conventions/page".
```

----------------------------------------

TITLE: Create Next.js App with React-Bootstrap Example
DESCRIPTION: Commands to initialize a new Next.js project using the `with-react-bootstrap` example. This demonstrates how to bootstrap the application using `npx` (npm), `yarn create`, and `pnpm create`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-react-bootstrap/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-react-bootstrap with-react-bootstrap-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-react-bootstrap with-react-bootstrap-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-react-bootstrap with-react-bootstrap-app
```

----------------------------------------

TITLE: Next.js Edge Runtime Supported APIs
DESCRIPTION: This section details the specific Web APIs available within the Next.js Edge Runtime, categorized by their functionality. It includes Network, Encoding, and Stream APIs that developers can leverage when building applications for this environment.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
Network APIs:
  Blob: Represents a blob
  fetch: Fetches a resource
  FetchEvent: Represents a fetch event
  File: Represents a file
  FormData: Represents form data
  Headers: Represents HTTP headers
  Request: Represents an HTTP request
  Response: Represents an HTTP response
  URLSearchParams: Represents URL search parameters
  WebSocket: Represents a websocket connection

Encoding APIs:
  atob: Decodes a base-64 encoded string
  btoa: Encodes a string in base-64
  TextDecoder: Decodes a Uint8Array into a string
  TextDecoderStream: Chainable decoder for streams
  TextEncoder: Encodes a string into a Uint8Array
  TextEncoderStream: Chainable encoder for streams

Stream APIs:
  ReadableStream: Represents a readable stream
  ReadableStreamBYOBReader: Represents a reader of a ReadableStream
  ReadableStreamDefaultReader: Represents a reader of a ReadableStream
  TransformStream: Represents a transform stream
  WritableStream: Represents a writable stream
  WritableStreamDefaultWriter: Represents a writer of a WritableStream
```

----------------------------------------

TITLE: Bootstrap Next.js Panda CSS Example
DESCRIPTION: Commands to initialize a new Next.js application with the Panda CSS example, demonstrating how to set up the project using various package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/panda-css/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example panda-css panda-css-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example panda-css panda-css-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example panda-css panda-css-app
```

LANGUAGE: bash
CODE:
```
bunx create-next-app --example panda-css panda-css-app
```

----------------------------------------

TITLE: Using NextRequest and NextResponse for Enhanced Request Handling
DESCRIPTION: Illustrates practical usage of `NextRequest` and `NextResponse` within a Next.js Route Handler. This example demonstrates how to access `nextUrl` properties to read search parameters and conditionally perform actions like redirecting, rewriting, or returning a JSON response based on request parameters.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/backend-for-frontend.mdx#_snippet_10

LANGUAGE: ts
CODE:
```
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const nextUrl = request.nextUrl

  if (nextUrl.searchParams.get('redirect')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (nextUrl.searchParams.get('rewrite')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }

  return NextResponse.json({ pathname: nextUrl.pathname })
}
```

LANGUAGE: js
CODE:
```
import { NextResponse } from 'next/server'

export async function GET(request) {
  const nextUrl = request.nextUrl

  if (nextUrl.searchParams.get('redirect')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (nextUrl.searchParams.get('rewrite')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }

  return NextResponse.json({ pathname: nextUrl.pathname })
}
```

----------------------------------------

TITLE: Generate Open Graph Image with External Data in Next.js
DESCRIPTION: This example demonstrates how to create an Open Graph image in Next.js by fetching dynamic data from an external API using the `params` object. The image content is generated based on the fetched post title. By default, these images are statically optimized, but this behavior can be configured using `fetch` options or route segment options.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/01-metadata/opengraph-image.mdx#_snippet_15

LANGUAGE: tsx
CODE:
```
import { ImageResponse } from 'next/og'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://.../posts/${params.slug}`).then((res) =>
    res.json()
  )

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {post.title}
      </div>
    ),
    {
      ...size,
    }
  )
}
```

LANGUAGE: jsx
CODE:
```
import { ImageResponse } from 'next/og'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }) {
  const post = await fetch(`https://.../posts/${params.slug}`).then((res) =>
    res.json()
  )

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {post.title}
      </div>
    ),
    {
      ...size,
    }
  )
}
```

----------------------------------------

TITLE: Bootstrap Next.js with EdgeDB Example
DESCRIPTION: Commands to initialize a new Next.js project using the 'with-edgedb' example template via npx, yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-edgedb/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-edgedb with-edgedb-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-edgedb with-edgedb-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-edgedb with-edgedb-app
```

----------------------------------------

TITLE: Bootstrap Next.js App with styled-jsx Example
DESCRIPTION: Use create-next-app with different package managers (npx, Yarn, pnpm) to quickly set up a new Next.js project that includes the styled-jsx example configuration.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-styled-jsx/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-styled-jsx with-styled-jsx-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-styled-jsx with-styled-jsx-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-styled-jsx with-styled-jsx-app
```

----------------------------------------

TITLE: Bootstrap Next.js App with Emotion Example
DESCRIPTION: Commands to initialize a new Next.js project pre-configured with the Emotion example, using different package managers. This sets up the basic project structure and dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-emotion/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-emotion-swc with-emotion-swc-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-emotion-swc with-emotion-swc-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-emotion-swc with-emotion-swc-app
```

----------------------------------------

TITLE: Next.js Exit Preview Mode API Endpoint
DESCRIPTION: API endpoint to exit Next.js preview mode. Navigating to this URL will revert the application to its default static generation behavior, no longer showing live updates from Plasmic Studio.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-plasmic/README.md#_snippet_4

LANGUAGE: APIDOC
CODE:
```
http://localhost:3000/api/exit-preview
```

----------------------------------------

TITLE: Next.js Local Build and Start for Production Testing
DESCRIPTION: Before deploying to production, run `next build` to catch build errors and `next start` to measure application performance in a production-like environment.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/production-checklist.mdx#_snippet_28

LANGUAGE: APIDOC
CODE:
```
Next.js Production Testing:
  Commands:
    - `next build`: Build application locally, catch build errors.
    - `next start`: Run application in production-like environment for performance measurement.
```

----------------------------------------

TITLE: Initialize Next.js App from Official Example
DESCRIPTION: Command to create a new Next.js application by bootstrapping it with an official example from the Next.js repository, specified by its name.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/06-cli/create-next-app.mdx#_snippet_4

LANGUAGE: bash
CODE:
```
npx create-next-app@latest --example [example-name] [your-project-name]
```

----------------------------------------

TITLE: Generate Post URLs and Modified Dates for Sitemap API in WordPress
DESCRIPTION: This PHP function queries WordPress posts based on provided arguments and generates an array of post URLs along with their last modified dates. It uses `WP_Query` to loop through posts, extracts the permalink, converts it to a relative URI, and includes the modified date. The function ensures post data is reset after the query.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-wordpress/README.md#_snippet_13

LANGUAGE: PHP
CODE:
```
function wsra_generate_posts_api()
{
  [, $postArgs] = wsra_get_user_inputs();
  $postUrls = array();
  $query = new WP_Query($postArgs);

  while ($query->have_posts()) {
    $query->the_post();
    $uri = str_replace(home_url(), '', get_permalink());
    $tempArray = [
      'url' => $uri,
      'post_modified_date' => get_the_modified_date(),
    ];
    array_push($postUrls, $tempArray);
  }
  wp_reset_postdata();
  return array_merge($postUrls);
}
```

----------------------------------------

TITLE: Bootstrap Next.js Example with Ably
DESCRIPTION: Commands to initialize a new Next.js application pre-configured with the Ably example using `create-next-app` via npm, Yarn, or pnpm. These commands fetch the example from the Next.js repository and set up a new project directory.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-ably/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-ably with-ably-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-ably with-ably-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-ably with-ably-app
```

----------------------------------------

TITLE: Understand Next.js Optional Catch-All API Route Query Object
DESCRIPTION: This JSON snippet shows the `query` object structure for Next.js optional catch-all API routes (e.g., `[[...slug]].js`). It includes cases where no parameters are present (empty object) and when parameters are captured as an array.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_19

LANGUAGE: json
CODE:
```
{ }
```

LANGUAGE: json
CODE:
```
{ "slug": ["a"] }
```

LANGUAGE: json
CODE:
```
{ "slug": ["a", "b"] }
```

----------------------------------------

TITLE: Bootstrap Next.js Multi-Zone Example Project
DESCRIPTION: Instructions on how to initialize the multi-zone Next.js example application using `create-next-app` with npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-zones/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-zones with-zones-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-zones with-zones-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-zones with-zones-app
```

----------------------------------------

TITLE: Bootstrap Next.js Quill.js Example Project
DESCRIPTION: Commands to initialize a new Next.js project pre-configured with the Quill.js integration example. These commands use different package managers (npx/npm, Yarn, pnpm) to create a new application directory and copy the example's contents.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-quill-js/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-quill-js with-quill-js-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-quill-js with-quill-js-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-quill-js with-quill-js-app
```

----------------------------------------

TITLE: Revalidating Cached Data with Next.js Route Handlers
DESCRIPTION: This snippet demonstrates how to revalidate cached data using Incremental Static Regeneration (ISR) in a Next.js Route Handler. The `revalidate` export configures the cache lifetime, and the `GET` function fetches data from an external API, returning it as JSON. This allows for automatic data revalidation at specified intervals.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-building-your-application/01-routing/13-route-handlers.mdx#_snippet_6

LANGUAGE: TypeScript
CODE:
```
export const revalidate = 60

export async function GET() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()

  return Response.json(posts)
}
```

LANGUAGE: JavaScript
CODE:
```
export const revalidate = 60

export async function GET() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()

  return Response.json(posts)
}
```

----------------------------------------

TITLE: Set Cookies via `Set-Cookie` Header in Next.js Response
DESCRIPTION: This example illustrates how to set cookies by including the `Set-Cookie` HTTP header in the response object. This method is useful for sending cookies back to the client as part of an API response.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/route.mdx#_snippet_6

LANGUAGE: typescript
CODE:
```
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token.value}` },
  })
}
```

LANGUAGE: javascript
CODE:
```
import { cookies } from 'next/headers'

export async function GET(request) {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token.value}` },
  })
}
```

----------------------------------------

TITLE: Creating Next.js App with Yarn
DESCRIPTION: This command initializes a new Next.js project named 'hello-world-app' using `yarn create` and the 'hello-world' example template. It sets up the basic project structure and dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/hello-world/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
yarn create next-app --example hello-world hello-world-app
```

----------------------------------------

TITLE: Bootstrap Next.js Contentlayer Example Project
DESCRIPTION: These commands demonstrate how to initialize a new Next.js application pre-configured with the Contentlayer example, using different package managers: npx (npm), yarn, or pnpm. This sets up the project structure and dependencies required for the Contentlayer integration.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-contentlayer/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-contentlayer with-contentlayer-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-contentlayer with-contentlayer-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-contentlayer with-contentlayer-app
```

----------------------------------------

TITLE: Bootstrap Next.js OpenTelemetry Example Application
DESCRIPTION: This command initializes a new Next.js application using the `with-opentelemetry` example. It demonstrates how to quickly set up a project with OpenTelemetry instrumentation pre-configured, using `create-next-app` with various package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-opentelemetry/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-opentelemetry with-opentelemetry-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-opentelemetry with-opentelemetry-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-opentelemetry with-opentelemetry-app
```

----------------------------------------

TITLE: Next.js API Route Handler Parameters
DESCRIPTION: This section defines the parameters passed to the default handler function of a Next.js API route. The `req` object represents the incoming HTTP request, and the `res` object is used to send the HTTP response.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
export default function handler(req: NextApiRequest, res: NextApiResponse)
  req: An instance of http.IncomingMessage
  res: An instance of http.ServerResponse
```

----------------------------------------

TITLE: Redirecting User After Server Action Completion (Next.js)
DESCRIPTION: This code shows how to redirect a user to a new route (`/post/${id}`) after a Server Action completes, using the `redirect` API from `next/navigation`. It's crucial to call `redirect` outside of any `try/catch` blocks. The example also combines this with `revalidateTag` to ensure related cached data is updated before redirection.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-building-your-application/02-data-fetching/03-server-actions-and-mutations.mdx#_snippet_14

LANGUAGE: ts
CODE:
```
'use server'

import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

export async function createPost(id: string) {
  try {
    // ...
  } catch (error) {
    // ...
  }

  revalidateTag('posts') // Update cached posts
  redirect(`/post/${id}`) // Navigate to the new post page
}
```

LANGUAGE: js
CODE:
```
'use server'

import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

export async function createPost(id) {
  try {
    // ...
  } catch (error) {
    // ...
  }

  revalidateTag('posts') // Update cached posts
  redirect(`/post/${id}`) // Navigate to the new post page
}
```

----------------------------------------

TITLE: Bootstrap Next.js Plausible Example App
DESCRIPTION: Use `create-next-app` with various package managers (npm, Yarn, pnpm) to quickly set up a new Next.js project pre-configured with the Plausible integration example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-plausible/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-plausible with-plausible-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-plausible with-plausible-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-plausible with-plausible-app
```

----------------------------------------

TITLE: Create Next.js i18n Rosetta App
DESCRIPTION: Commands to bootstrap a new Next.js application using the `with-i18n-rosetta` example. These commands demonstrate how to initialize the project with different package managers: `npx` (npm), `yarn`, or `pnpm`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-i18n-rosetta/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-i18n-rosetta with-i18n-rosetta-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-i18n-rosetta with-i18n-rosetta-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-i18n-rosetta with-i18n-rosetta-app
```

----------------------------------------

TITLE: APIDOC: Middleware Config Object
DESCRIPTION: Documentation for the optional `config` object that can be exported alongside the middleware function. It includes the `matcher` property to specify paths for middleware application.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/middleware.mdx#_snippet_5

LANGUAGE: APIDOC
CODE:
```
Config object (optional):
  - Exported alongside the Middleware function.
  - Includes the 'matcher' property to specify paths where the Middleware applies.
```

----------------------------------------

TITLE: Next.js Static Assets with Public Directory
DESCRIPTION: Explains the use of the `public` directory for automatically caching static assets like images in both App Router and Pages Router.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/production-checklist.mdx#_snippet_11

LANGUAGE: APIDOC
CODE:
```
File Convention: public directory
  Purpose: Automatically cache static assets (e.g., images)
  Applicability: App Router, Pages Router
```

----------------------------------------

TITLE: Initialize Next.js App with Google Maps Embed Example
DESCRIPTION: Commands to bootstrap a new Next.js application using the `with-google-maps-embed` example template, demonstrating usage with `npx`, `yarn`, and `pnpm`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-google-maps-embed/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-google-maps-embed with-google-maps-embed-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-google-maps-embed with-google-maps-embed-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-google-maps-embed with-google-maps-embed-app
```

----------------------------------------

TITLE: Bootstrap Next.js Yarn Workspaces Example Project
DESCRIPTION: These commands demonstrate how to quickly set up the `with-yarn-workspaces` example project using different package managers: npx (npm), yarn, and pnpm. Choose the command corresponding to your preferred package manager to initialize the project.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-yarn-workspaces/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-yarn-workspaces with-yarn-workspaces-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-yarn-workspaces with-yarn-workspaces-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-yarn-workspaces with-yarn-workspaces-app
```

----------------------------------------

TITLE: Create Next.js App with Dynamic Import Example
DESCRIPTION: Commands to bootstrap a new Next.js application using the `with-dynamic-import` example, demonstrating dynamic module imports. Choose your preferred package manager: npm (via npx), Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-dynamic-import/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-dynamic-import with-dynamic-import-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-dynamic-import with-dynamic-import-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-dynamic-import with-dynamic-import-app
```

----------------------------------------

TITLE: Next.js Link Component with Single Line Highlighting (TSX)
DESCRIPTION: Shows how to highlight a single line in a TypeScript React (TSX) code block using the `highlight={line_number}` prop, drawing attention to a specific part of the code.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_11

LANGUAGE: tsx
CODE:
```
import Link from 'next/link'

export default function Page() {
  return <Link href="/about">About</Link>
}
```

----------------------------------------

TITLE: JavaScript import.meta Object API Documentation
DESCRIPTION: Documentation for the `import.meta` object in JavaScript, which exposes context-specific metadata about the current module.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-tests/tests/snapshot/dynamic-request/very-dynamic/issues/__l___lint TP1201__ new URL(FreeVar(Math)[__quo__r-cd3de5.txt#_snippet_1

LANGUAGE: APIDOC
CODE:
```
import.meta:
  description: The import.meta object
```

----------------------------------------

TITLE: Create Next.js App with React Toolbox Example
DESCRIPTION: Bootstrap a new Next.js application pre-configured with the `with-react-toolbox` example. This command initializes a new project directory and sets up the necessary dependencies and configurations for react-toolbox integration. Choose the command based on your preferred package manager (npm, Yarn, or pnpm).
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-react-toolbox/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-react-toolbox with-react-toolbox-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-react-toolbox with-react-toolbox-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-react-toolbox with-react-toolbox-app
```

----------------------------------------

TITLE: Configure Umbraco Environment Variables for Next.js
DESCRIPTION: This snippet shows the required environment variables for connecting a Next.js application to an Umbraco CMS instance. It includes the Umbraco server URL, delivery API key for preview mode, and a secret for preview mode activation. A special setting NODE_TLS_REJECT_UNAUTHORIZED=0 is included for local development with self-signed SSL certificates, which should not be used in production.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco/README.md#_snippet_6

LANGUAGE: env
CODE:
```
NODE_TLS_REJECT_UNAUTHORIZED=0
UMBRACO_SERVER_URL = 'https://localhost:12345'
UMBRACO_DELIVERY_API_KEY = 'my-secret-api-key'
UMBRACO_PREVIEW_SECRET = 'my-preview-secret'
```

----------------------------------------

TITLE: Handle Form Submission on Server with Next.js API Routes
DESCRIPTION: This snippet demonstrates how to create a Next.js API Route (`pages/api/submit.ts` or `.js`) to securely receive and process form data submitted from the client. It shows how to access the request body and send a JSON response after processing.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/02-guides/forms.mdx#_snippet_0

LANGUAGE: ts
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body
  const id = await createItem(data)
  res.status(200).json({ id })
}
```

LANGUAGE: js
CODE:
```
export default function handler(req, res) {
  const data = req.body
  // call your database, etc.
  // const id = await createItem(data)
  // ...
  res.status(200).json({ data })
}
```

----------------------------------------

TITLE: create-next-app CLI Command-Line Options Reference
DESCRIPTION: Reference for `create-next-app` command-line arguments, enabling non-interactive project setup. Options cover project type (TS/JS), styling (Tailwind), linting (ESLint), routing (App Router), directory structure, build tools (Turbopack), import aliases, package managers, and example bootstrapping.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/create-next-app/README.md#_snippet_1

LANGUAGE: APIDOC
CODE:
```
Usage: create-next-app [project-directory] [options]

Options:
  -V, --version                        output the version number
  --ts, --typescript

    Initialize as a TypeScript project. (default)

  --js, --javascript

    Initialize as a JavaScript project.

  --tailwind

    Initialize with Tailwind CSS config. (default)

  --eslint

    Initialize with ESLint config.

  --app

    Initialize as an App Router project.

  --src-dir

    Initialize inside a `src/` directory.

  --turbopack

    Enable Turbopack by default for development.

  --import-alias <alias-to-configure>

    Specify import alias to use (default "@/*").

  --empty

    Initialize an empty project.

  --use-npm

    Explicitly tell the CLI to bootstrap the application using npm

  --use-pnpm

    Explicitly tell the CLI to bootstrap the application using pnpm

  --use-yarn

    Explicitly tell the CLI to bootstrap the application using Yarn

  --use-bun

    Explicitly tell the CLI to bootstrap the application using Bun

  -e, --example [name]|[github-url]

    An example to bootstrap the app with. You can use an example name
    from the official Next.js repo or a GitHub URL. The URL can use
    any branch and/or subdirectory

  --example-path <path-to-example>

    In a rare case, your GitHub URL might contain a branch name with
    a slash (e.g. bug/fix-1) and the path to the example (e.g. foo/bar).
    In this case, you must specify the path to the example separately:
    --example-path foo/bar

  --reset-preferences

    Explicitly tell the CLI to reset any stored preferences

  --skip-install

    Explicitly tell the CLI to skip installing packages

  --disable-git

    Explicitly tell the CLI to skip initializing a git repository.

  --yes

    Use previous preferences or defaults for all options that were not
    explicitly specified, without prompting.

  -h, --help                           display help for command
```

----------------------------------------

TITLE: RegExp API Documentation
DESCRIPTION: Documents the JavaScript RegExp object, which represents a regular expression for character matching.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_45

LANGUAGE: APIDOC
CODE:
```
RegExp:
  Description: Represents a regular expression, allowing you to match combinations of characters
```

----------------------------------------

TITLE: Bootstrap Next.js Forms Example Project
DESCRIPTION: Use `create-next-app` with npm, Yarn, or pnpm to quickly set up the Next.js forms example project locally.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/next-forms/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example next-forms next-forms-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example next-forms next-forms-app
```

LANGUAGE: bash
CODE:
```
pnpm create-next-app --example next-forms next-forms-app
```

----------------------------------------

TITLE: Installing Dependencies and Running Next.js Development Server (npm)
DESCRIPTION: These commands are used to prepare and run the Next.js application locally using npm. `npm install` fetches all project dependencies, and `npm run dev` starts the development server, making the blog accessible at `http://localhost:3000`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/README.md#_snippet_6

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

----------------------------------------

TITLE: Access URL Query Parameters in Next.js Route Handlers
DESCRIPTION: Illustrates how to retrieve URL query parameters from the `request.nextUrl.searchParams` object within a Next.js Route Handler. This example shows how to get a specific query parameter like 'query' from the URL.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/route.mdx#_snippet_14

LANGUAGE: TypeScript
CODE:
```
import { type NextRequest } from 'next/server'

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  // query is "hello" for /api/search?query=hello
}
```

LANGUAGE: JavaScript
CODE:
```
export function GET(request) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('query')
  // query is "hello" for /api/search?query=hello
}
```

----------------------------------------

TITLE: Next.js router.push API Reference
DESCRIPTION: Documents the `router.push` method signature, its parameters (`url`, `as`, `options`), and the properties within the `options` object (`scroll`, `shallow`, `locale`). It specifies the types for each parameter and their purpose.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/04-api-reference/03-functions/use-router.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
router.push(url, as, options)
  url: UrlObject | String - The URL to navigate to (see Node.JS URL module documentation for UrlObject properties).
  as: UrlObject | String - Optional decorator for the path that will be shown in the browser URL bar.
  options: Object - Optional object with the following configuration options:
    scroll: boolean - Controls scrolling to the top of the page after navigation. Defaults to true.
    shallow: boolean - Update the path of the current page without rerunning data fetching methods. Defaults to false.
    locale: string - Indicates locale of the new page.
```

----------------------------------------

TITLE: Create Next.js App with Fela Example
DESCRIPTION: Commands to bootstrap a new Next.js application using the 'with-fela' example template. This can be done using npm (via npx), Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-fela/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-fela with-fela-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-fela with-fela-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-fela with-fela-app
```

----------------------------------------

TITLE: Copy Environment Variable Template File
DESCRIPTION: Command to copy the example environment variable file (`.env.local.example`) to `.env.local`, which is ignored by Git, for local configuration.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-enterspeed/README.md#_snippet_5

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Next.js Link Component with Line Range Highlighting (TSX)
DESCRIPTION: Illustrates how to highlight a continuous range of lines in a TypeScript React (TSX) code block using the `highlight={start-end}` prop, ideal for drawing attention to a block of code.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_13

LANGUAGE: tsx
CODE:
```
import Link from 'next/link'

export default function Page() {
  return <Link href="/about">About</Link>
}
```

----------------------------------------

TITLE: Bootstrap Next.js Example App with Orbit-components
DESCRIPTION: These commands demonstrate how to initialize a new Next.js application using the `create-next-app` utility, specifically bootstrapping an example that integrates `with-orbit-components`. You can choose your preferred package manager: npm (via npx), Yarn, or pnpm. The command creates a new directory named `with-orbit-components-app` containing the bootstrapped project.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-orbit-components/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-orbit-components with-orbit-components-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-orbit-components with-orbit-components-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-orbit-components with-orbit-components-app
```

----------------------------------------

TITLE: Next.js API Route Request Helper Properties
DESCRIPTION: This section outlines the built-in helper properties available on the `req` object within Next.js API routes. These properties provide convenient access to parsed request data such as cookies, query parameters, and the request body.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
req.cookies: An object containing the cookies sent by the request. Defaults to {}
req.query: An object containing the query string. Defaults to {}
req.body: An object containing the body parsed by content-type, or null if no body was sent
```

----------------------------------------

TITLE: Start Next.js Blog Application Development Server
DESCRIPTION: Commands to navigate into the `blog` directory and start the Next.js development server using npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-zones/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
cd blog
npm install && npm run dev
```

LANGUAGE: bash
CODE:
```
cd blog
yarn && yarn dev
```

LANGUAGE: bash
CODE:
```
cd blog
pnpm install && pnpm dev
```

----------------------------------------

TITLE: Tainting an Object Reference with experimental_taintObjectReference
DESCRIPTION: Demonstrates how to use `experimental_taintObjectReference` to mark an entire object as sensitive, preventing it from being passed across the Server-Client boundary. The example shows tainting a `user` object returned from a database query with a descriptive message.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/05-config/01-next-config-js/taint.mdx#_snippet_1

LANGUAGE: typescript
CODE:
```
import { experimental_taintObjectReference } from 'react'

function getUserDetails(id: string): UserDetails {
  const user = await db.queryUserById(id)

  experimental_taintObjectReference(
    'Do not use the entire user info object. Instead, select only the fields you need.',
    user
  )

  return user
}
```

LANGUAGE: javascript
CODE:
```
import { experimental_taintObjectReference } from 'react'

function getUserDetails(id) {
  const user = await db.queryUserById(id)

  experimental_taintObjectReference(
    'Do not use the entire user info object. Instead, select only the fields you need.',
    user
  )

  return user
}
```

----------------------------------------

TITLE: Initializing Next.js Project with Jest Example (pnpm)
DESCRIPTION: This command initializes a new Next.js project using `create-next-app` and specifically pulls the `with-jest` example. It uses `pnpm` for execution, offering another alternative package manager for efficient project setup.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-jest/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-jest with-jest-app
```

----------------------------------------

TITLE: Create Next.js App with Mux Video Example
DESCRIPTION: Bootstrap a new Next.js application using the `with-mux-video` example template with various package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mux-video/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-mux-video with-mux-video-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-mux-video with-mux-video-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-mux-video with-mux-video-app
```

LANGUAGE: bash
CODE:
```
bunx create-next-app --example with-mux-video with-mux-mux-video-app
```

----------------------------------------

TITLE: Next.js Open Graph (OG) Images for Social Sharing
DESCRIPTION: Create Open Graph (OG) images to prepare your Next.js application for optimal social media sharing.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/production-checklist.mdx#_snippet_24

LANGUAGE: APIDOC
CODE:
```
Next.js Open Graph (OG) Images:
  Purpose: Optimize application appearance for social media sharing.
  Functionality: Generate custom OG images.
```

----------------------------------------

TITLE: Understand Next.js Catch-All API Route Query Object
DESCRIPTION: This JSON snippet illustrates how path segments are captured as an array in the `query` object for Next.js catch-all API routes (e.g., `[...slug].js`). Each segment becomes an element in the `slug` array.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/07-api-routes.mdx#_snippet_17

LANGUAGE: json
CODE:
```
{ "slug": ["a"] }
```

LANGUAGE: json
CODE:
```
{ "slug": ["a", "b"] }
```

----------------------------------------

TITLE: Bootstrap Next.js App with Framer Motion Example
DESCRIPTION: These commands demonstrate how to initialize a new Next.js project using the `create-next-app` utility, specifically cloning the `with-framer-motion` example. This sets up a pre-configured project with Framer Motion integration for page transitions, ready for development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-framer-motion/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-framer-motion with-framer-motion-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-framer-motion with-framer-motion-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-framer-motion with-framer-motion-app
```

----------------------------------------

TITLE: nextUrl Version History
DESCRIPTION: Version history for the `nextUrl` object, detailing changes and removals across different Next.js versions.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/next-request.mdx#_snippet_10

LANGUAGE: APIDOC
CODE:
```
Version History:
  v15.0.0: ip and geo removed.
```

----------------------------------------

TITLE: Bootstrap Next.js Application with next-seo Example
DESCRIPTION: These commands initialize a new Next.js application using the 'with-next-seo' example, which pre-configures the project with the next-seo plugin for managing SEO. Users can choose their preferred package manager: npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-next-seo/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-next-seo next-seo-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-next-seo next-seo-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-next-seo next-seo-app
```

----------------------------------------

TITLE: Next.js Link Component with Multiple Lines Highlighting (TSX)
DESCRIPTION: Demonstrates how to highlight multiple non-contiguous lines in a TypeScript React (TSX) code block using the `highlight={line1,line2}` prop, useful for emphasizing distinct code sections.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_12

LANGUAGE: tsx
CODE:
```
import Link from 'next/link'

export default function Page() {
  return <Link href="/about">About</Link>
}
```

----------------------------------------

TITLE: Next.js Static Generation Configuration Options Reference
DESCRIPTION: Reference for the `staticGeneration*` options available in Next.js experimental configuration, detailing their purpose and behavior.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/05-config/01-next-config-js/staticGeneration.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
staticGenerationRetryCount: number
  Description: The number of times to retry a failed page generation before failing the build.
staticGenerationMaxConcurrency: number
  Description: The maximum number of pages to be processed per worker.
staticGenerationMinPagesPerWorker: number
  Description: The minimum number of pages to be processed before starting a new worker.
```

----------------------------------------

TITLE: Fetch data in Next.js Server Components using `fetch` API
DESCRIPTION: This snippet demonstrates how to fetch data in a Next.js Server Component using the native `fetch` API. The component is defined as an asynchronous function, allowing it to `await` the `fetch` call. It then processes the JSON response to render a dynamic list of posts.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/09-fetching-data.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

LANGUAGE: jsx
CODE:
```
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

----------------------------------------

TITLE: Create a Dynamic User Component with Next.js Cookies
DESCRIPTION: This example shows a dynamic component (`User`) that accesses the `cookies` API, which would typically opt the route into dynamic rendering. It demonstrates how to fetch session data from cookies within an `async` component.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/06-partial-prerendering.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
import { cookies } from 'next/headers'

export async function User() {
  const session = (await cookies()).get('session')?.value
  return '...'
}
```

LANGUAGE: tsx
CODE:
```
import { cookies } from 'next/headers'

export async function User() {
  const session = (await cookies()).get('session')?.value
  return '...'
}
```

----------------------------------------

TITLE: Sanity Project Setup Command Sample Output
DESCRIPTION: Illustrates the interactive output and prompts encountered during the Sanity project setup process, including package installation, account verification, project/dataset selection, and environment variable updates.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sanity/README.md#_snippet_5

LANGUAGE: bash
CODE:
```
Need to install the following packages:
sanity@3.30.1
Ok to proceed? (y) y
You're setting up a new project!
We'll make sure you have an account with Sanity.io.
Press ctrl + C at any time to quit.

Prefer web interfaces to terminals?
You can also set up best practice Sanity projects with
your favorite frontends on https://www.sanity.io/templates

Looks like you already have a Sanity-account. Sweet!

✔ Fetching existing projects
? Select project to use Templates [r0z1eifg]
? Select dataset to use blog-vercel
? Would you like to add configuration files for a Sanity project in this Next.js folder? No

Detected framework Next.js, using prefix 'NEXT_PUBLIC_'
Found existing NEXT_PUBLIC_SANITY_PROJECT_ID, replacing value.
Found existing NEXT_PUBLIC_SANITY_DATASET, replacing value.
```

----------------------------------------

TITLE: Bootstrapping Next.js App with FCM Example using Yarn (Bash)
DESCRIPTION: This command initializes a new Next.js project named `with-firebase-cloud-messaging-app` using `yarn`. It utilizes the `create next-app` utility to clone and set up the `with-firebase-cloud-messaging` example, providing a ready-to-use template for integrating Firebase Cloud Messaging.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-firebase-cloud-messaging/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-firebase-cloud-messaging with-firebase-cloud-messaging-app
```

----------------------------------------

TITLE: Bootstrapping Next.js App with Cloudinary using pnpm
DESCRIPTION: This command initializes a new Next.js project named 'with-cloudinary-app' using `create-next-app` and pre-configures it with the 'with-cloudinary' example. It uses `pnpm create`, pnpm's command for scaffolding projects, to set up the application efficiently.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-cloudinary/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-cloudinary with-cloudinary-app
```

----------------------------------------

TITLE: Next.js Middleware Authorization (Before Upgrade)
DESCRIPTION: This 'before' example shows a deprecated pattern where Next.js Middleware directly returns a JSON response with a 401 status for unauthorized requests. This approach is no longer supported as Middleware cannot produce response bodies.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/middleware-upgrade-guide.mdx#_snippet_4

LANGUAGE: ts
CODE:
```
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isAuthValid } from './lib/auth'

export function middleware(request: NextRequest) {
  // Example function to validate auth
  if (isAuthValid(request)) {
    return NextResponse.next()
  }

  return NextResponse.json({ message: 'Auth required' }, { status: 401 })
}
```

----------------------------------------

TITLE: Registering Observability Tools with Next.js `register` Function
DESCRIPTION: The `register` function is an optional export from `instrumentation.js|ts` that is invoked once when a new Next.js server instance starts. It can be asynchronous and is primarily used to initialize and integrate observability tools like OpenTelemetry into the application.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/instrumentation.mdx#_snippet_0

LANGUAGE: ts
CODE:
```
import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel('next-app')
}
```

LANGUAGE: js
CODE:
```
import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel('next-app')
}
```

----------------------------------------

TITLE: Next.js: Accessing Preview Mode Data in API Routes
DESCRIPTION: Illustrates how req.preview and req.previewData are available on the request object within Next.js API Routes, enabling API logic to adapt based on the current preview mode status and data.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/02-guides/preview-mode.mdx#_snippet_10

LANGUAGE: js
CODE:
```
export default function myApiRoute(req, res) {
  const isPreview = req.preview
  const previewData = req.previewData
  // ...
}
```

----------------------------------------

TITLE: Install Node.js Dependencies for Next.js Project
DESCRIPTION: Navigates into the cloned project directory and installs all required Node.js packages using npm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-tigris/README.md#_snippet_1

LANGUAGE: Shell
CODE:
```
cd tigris-vercel-starter
npm install
```

----------------------------------------

TITLE: Bootstrap Next.js MobX State Tree Example Project
DESCRIPTION: These commands initialize a new Next.js project pre-configured with the MobX State Tree example. Users can choose their preferred package manager (npx, yarn, or pnpm) to set up the project quickly.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mobx-state-tree/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-mobx-state-tree with-mobx-state-tree-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-mobx-state-tree with-mobx-state-tree-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-mobx-state-tree with-mobx-state-tree-app
```

----------------------------------------

TITLE: Bootstrap Next.js Shallow Routing Example App
DESCRIPTION: These commands demonstrate how to initialize a new Next.js application using the `create-next-app` utility, specifically bootstrapping it with the 'with-shallow-routing' example. This allows users to quickly set up a local development environment for the shallow routing feature using different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-shallow-routing/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-shallow-routing with-shallow-routing-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-shallow-routing with-shallow-routing-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-shallow-routing with-shallow-routing-app
```

----------------------------------------

TITLE: Next.js: Invalid config type for Page/API Route
DESCRIPTION: Illustrates that `export const config` in Next.js must be an object, not a primitive type. The 'Not Allowed' example shows a string assignment, while 'Allowed' demonstrates an empty object.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/invalid-page-config.mdx#_snippet_0

LANGUAGE: js
CODE:
```
export const config = 'hello world'
```

LANGUAGE: js
CODE:
```
export const config = {}
```

----------------------------------------

TITLE: Installing Dependencies and Running Next.js Development Server (Yarn)
DESCRIPTION: These commands are used to prepare and run the Next.js application locally using Yarn. `yarn install` fetches all project dependencies, and `yarn dev` starts the development server, making the blog accessible at `http://localhost:3000`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-contentful/README.md#_snippet_7

LANGUAGE: bash
CODE:
```
yarn install
yarn dev
```

----------------------------------------

TITLE: Invoke unauthorized() for Access Control in Next.js
DESCRIPTION: This example demonstrates how to use the `unauthorized()` function from `next/navigation` to enforce access control. It checks for a valid user session and, if absent, calls `unauthorized()` to trigger the rendering of the `unauthorized.js` file and return a 401 status.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/unauthorized.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { verifySession } from '@/app/lib/dal'
import { unauthorized } from 'next/navigation'

export default async function DashboardPage() {
  const session = await verifySession()

  if (!session) {
    unauthorized()
  }

  return <div>Dashboard</div>
}
```

LANGUAGE: jsx
CODE:
```
import { verifySession } from '@/app/lib/dal'
import { unauthorized } from 'next/navigation'

export default async function DashboardPage() {
  const session = await verifySession()

  if (!session) {
    unauthorized()
  }

  return <div>Dashboard</div>
}
```

----------------------------------------

TITLE: Next.js useRouter API Methods Reference
DESCRIPTION: Comprehensive API documentation for the methods available on the `router` object returned by the `useRouter` hook. It details functions like `push` for navigation with history, `replace` for navigation without history, `refresh` for re-fetching data, `prefetch` for optimizing transitions, and `back`/`forward` for history navigation.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/use-router.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
router.push(href: string, { scroll: boolean }):
  description: Perform a client-side navigation to the provided route. Adds a new entry into the browser’s history stack.
  parameters:
    href: string - The destination route.
    scroll: boolean - (Optional) Controls whether the page scrolls to the top after navigation.
router.replace(href: string, { scroll: boolean }):
  description: Perform a client-side navigation to the provided route without adding a new entry into the browser’s history stack.
  parameters:
    href: string - The destination route.
    scroll: boolean - (Optional) Controls whether the page scrolls to the top after navigation.
router.refresh():
  description: Refresh the current route. Making a new request to the server, re-fetching data requests, and re-rendering Server Components. The client will merge the updated React Server Component payload without losing unaffected client-side React (e.g. useState) or browser state (e.g. scroll position).
router.prefetch(href: string):
  description: Prefetch the provided route for faster client-side transitions.
  parameters:
    href: string - The route to prefetch.
router.back():
  description: Navigate back to the previous route in the browser’s history stack.
router.forward():
  description: Navigate forwards to the next page in the browser’s history stack.
```

----------------------------------------

TITLE: Manage Cookies in Next.js Middleware
DESCRIPTION: This snippet demonstrates how to interact with cookies in Next.js middleware. It shows how to retrieve cookies from an incoming `NextRequest` using `get`, `getAll`, `has`, and `delete`, and how to set cookies on an outgoing `NextResponse` using `set`. The `RequestCookies` and `ResponseCookies` APIs are utilized for these operations.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/middleware.mdx#_snippet_17

LANGUAGE: typescript
CODE:
```
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  let cookie = request.cookies.get('nextjs')
  console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll()
  console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]

  request.cookies.has('nextjs') // => true
  request.cookies.delete('nextjs')
  request.cookies.has('nextjs') // => false

  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next()
  response.cookies.set('vercel', 'fast')
  response.cookies.set({
    name: 'vercel',
    value: 'fast',
    path: '/',
  })
  cookie = response.cookies.get('vercel')
  console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/` header.

  return response
}
```

LANGUAGE: javascript
CODE:
```
import { NextResponse } from 'next/server'

export function middleware(request) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  let cookie = request.cookies.get('nextjs')
  console.log(cookie) // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll()
  console.log(allCookies) // => [{ name: 'nextjs', value: 'fast' }]

  request.cookies.has('nextjs') // => true
  request.cookies.delete('nextjs')
  request.cookies.has('nextjs') // => false

  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next()
  response.cookies.set('vercel', 'fast')
  response.cookies.set({
    name: 'vercel',
    value: 'fast',
    path: '/',
  })
  cookie = response.cookies.get('vercel')
  console.log(cookie) // => { name: 'vercel', value: 'fast', Path: '/' }
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/test` header.

  return response
}
```

----------------------------------------

TITLE: Next.js Middleware Authorization (After Upgrade)
DESCRIPTION: This 'after' example demonstrates the recommended approach for handling unauthorized requests in Next.js Middleware. Instead of returning a response body, it redirects the user to a login page, passing the original path as a query parameter.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/middleware-upgrade-guide.mdx#_snippet_5

LANGUAGE: ts
CODE:
```
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isAuthValid } from './lib/auth'

export function middleware(request: NextRequest) {
  // Example function to validate auth
  if (isAuthValid(request)) {
    return NextResponse.next()
  }

  const loginUrl = new URL('/login', request.url)
  loginUrl.searchParams.set('from', request.nextUrl.pathname)

  return NextResponse.redirect(loginUrl)
}
```

----------------------------------------

TITLE: Bootstrap Next.js App with Service Worker Example
DESCRIPTION: Commands to initialize a new Next.js application using the `with-service-worker` example template. These commands demonstrate how to use `npx`, `yarn`, or `pnpm` to quickly set up the project.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-service-worker/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-service-worker with-service-worker-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-service-worker with-service-worker-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-service-worker with-service-worker-app
```

----------------------------------------

TITLE: Bootstrap Next.js App with Salesforce Commerce Cloud Example
DESCRIPTION: Instructions to initialize a new Next.js application using the `with-sfcc` example template. This command uses `create-next-app` to set up the project structure and dependencies, integrating with Salesforce Commerce Cloud for headless e-commerce.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-sfcc/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-sfcc nextjs-sfcc-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-sfcc nextjs-sfcc-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-sfcc nextjs-sfcc-app
```

----------------------------------------

TITLE: Next.js `after` Function API Reference
DESCRIPTION: Detailed API documentation for the `after` function, outlining its parameters and their descriptions. The `after` function accepts a single callback function that is executed after the response or prerender is complete.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/after.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
after(callback: Function): void
  callback: Function
    description: A callback function which will be executed after the response (or prerender) is finished.
```

----------------------------------------

TITLE: Next.js `redirect` Function API Reference
DESCRIPTION: Detailed API reference for the `redirect` function in Next.js, outlining its parameters, their types, descriptions, and the function's return behavior. Includes information on default `type` values and the `RedirectType` object.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/redirect.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
redirect(path: string, type?: 'replace' | 'push')

Parameters:
  path: string
    Description: The URL to redirect to. Can be a relative or absolute path.
  type: 'replace' | 'push' (optional)
    Description: The type of redirect to perform.
    Default: 'replace' (everywhere else), 'push' (in Server Actions)
    Available options via RedirectType object: RedirectType.replace, RedirectType.push

Returns: void
```

----------------------------------------

TITLE: Bootstrap Next.js Project with Jest Example
DESCRIPTION: Instructions on how to initialize a new Next.js application pre-configured with the Jest example using different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-jest/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-jest with-jest-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-jest with-jest-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-jest with-jest-app
```

----------------------------------------

TITLE: Interactive Prompts for Default create-next-app Initialization
DESCRIPTION: Illustrates the series of interactive questions posed by `create-next-app` when initializing a new project with the default template, guiding the user through various configuration options.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/06-cli/create-next-app.mdx#_snippet_3

LANGUAGE: txt
CODE:
```
What is your project named?  my-app
Would you like to use TypeScript?  No / Yes
Would you like to use ESLint?  No / Yes
Would you like to use Tailwind CSS?  No / Yes
Would you like your code inside a `src/` directory?  No / Yes
Would you like to use App Router? (recommended)  No / Yes
Would you like to use Turbopack for `next dev`?  No / Yes
Would you like to customize the import alias (`@/*` by default)?  No / Yes
```

----------------------------------------

TITLE: Bootstrap Next.js SSR Portals Example Project
DESCRIPTION: Commands to initialize a new Next.js project pre-configured with the server-side rendered portals example. These commands use `create-next-app` with different package managers (npm, Yarn, pnpm) to clone and set up the example repository.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-portals-ssr/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-portals-ssr with-portals-ssr-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-portals-ssr with-portals-ssr-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-portals-ssr with-portals-ssr-app
```

----------------------------------------

TITLE: Bootstrap Next.js Project with React Portals Example
DESCRIPTION: These commands initialize a new Next.js application named 'with-portals-app' by leveraging the 'with-portals' example. They utilize 'create-next-app' to quickly set up a project demonstrating React Portals integration, offering options for npm, Yarn, or pnpm package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-portals/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-portals with-portals-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-portals with-portals-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-portals with-portals-app
```

----------------------------------------

TITLE: Load Neo4j Movie Graph Dataset
DESCRIPTION: Executes the `:play movie-graph` command within the Neo4j browser or shell to load the sample movie graph dataset into the connected Neo4j database. This dataset is required for the example application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-neo4j/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
:play movie-graph
```

----------------------------------------

TITLE: Next.js extended fetch API reference
DESCRIPTION: Detailed API documentation for the `fetch` function in Next.js, including its extended options for caching and revalidation. This includes parameters, their types, possible values, and specific Next.js caching behaviors like `cache`, `next.revalidate`, and `next.tags`, along with troubleshooting notes.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/fetch.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
fetch(url: string, options?: object)
  Description: Next.js extends the Web `fetch()` API to allow each request on the server to set its own persistent caching and revalidation semantics.
  Parameters:
    url: string
      Description: The URL to fetch.
    options: object (optional)
      Description: Configuration options for the fetch request.
      Properties:
        cache: 'force-cache' | 'no-store' | 'auto no cache' (default: 'auto no cache')
          Description: Configures how the request interacts with the Next.js Data Cache.
          Values:
            'auto no cache': Default. Fetches from remote server on every request in development, once during `next build` for static prerendering. If Dynamic APIs are detected, fetches on every request.
            'no-store': Fetches from remote server on every request, even if Dynamic APIs are not detected.
            'force-cache': Looks for a matching request in Data Cache. If fresh, returns from cache. If no match or stale, fetches from remote and updates cache.
        next: object (Next.js specific options)
          Properties:
            revalidate: false | 0 | number (in seconds)
              Description: Sets the cache lifetime of a resource for the Data Cache.
              Values:
                false: Caches indefinitely (semantically `Infinity`). HTTP cache may evict older resources.
                0: Prevents the resource from being cached.
                number: Specifies cache lifetime of at most `n` seconds.
              Notes:
                - If an individual `fetch()` request sets a `revalidate` number lower than the default `revalidate` of a route, the whole route revalidation interval will be decreased.
                - If two fetch requests with the same URL in the same route have different `revalidate` values, the lower value will be used.
                - Conflicting options (e.g., `{ revalidate: 3600, cache: 'no-store' }`) are not allowed; both will be ignored, and a warning printed in development.
            tags: string[]
              Description: Sets cache tags for a resource, enabling on-demand revalidation using `revalidateTag`.
              Constraints: Max 256 characters per custom tag, max 128 tag items.
  Troubleshooting:
    Fetch default `auto no store` and `cache: 'no-store'` not showing fresh data in development:
      Next.js caches `fetch` responses in Server Components across Hot Module Replacement (HMR) in local development for faster responses and to reduce costs for billed API calls.
      By default, the HMR cache applies to all fetch requests, including those with `auto no cache` and `cache: 'no-store'`. This means uncached requests will not show fresh data between HMR refreshes. The cache is cleared on navigation or full-page reloads.
      See `serverComponentsHmrCache` docs for more information.
```

LANGUAGE: ts
CODE:
```
fetch(`https://...`, { cache: 'force-cache' | 'no-store' })
```

LANGUAGE: ts
CODE:
```
fetch(`https://...`, { next: { revalidate: false | 0 | number } })
```

LANGUAGE: ts
CODE:
```
fetch(`https://...`, { next: { tags: ['collection'] } })
```

----------------------------------------

TITLE: Next.js Data Caching Strategies
DESCRIPTION: Guidelines for verifying and opting into data caching for requests in both App Router (using `fetch` and `unstable_cache`) and Pages Router (using `getStaticProps`).
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/production-checklist.mdx#_snippet_10

LANGUAGE: APIDOC
CODE:
```
Concept: Data Caching
App Router:
  - Verify and opt into caching for data requests.
  - Ensure non-fetch requests are cached using unstable_cache.
Pages Router:
  - Verify and opt into caching for data requests.
  - Ensure non-getStaticProps requests are cached.
```

----------------------------------------

TITLE: Next.js Client Component Definition
DESCRIPTION: This example shows a basic Next.js Client Component (`LikeButton`) identified by the `'use client'` directive at the top of the file. Client Components are essential for adding interactivity, managing state, and utilizing browser-specific APIs within your application.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/05-server-and-client-components.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
'use client'

import { useState } from 'react'

export default function LikeButton({ likes }: { likes: number }) {
  // ...
}
```

LANGUAGE: jsx
CODE:
```
'use client'

import { useState } from 'react'

export default function LikeButton({ likes }) {
  // ...
}
```

----------------------------------------

TITLE: Bootstrap Next.js Application with cxs Example
DESCRIPTION: Commands to initialize a new Next.js project using the 'with-cxs' example. This sets up a project configured with cxs for styling, demonstrating universal style rendering capabilities.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-cxs/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-cxs with-cxs-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-cxs with-cxs-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-cxs with-cxs-app
```

----------------------------------------

TITLE: Define Blog List Data Schema
DESCRIPTION: JSON schema defining the structure for a list of blog items, including properties like URL, title, featured image, date, excerpt, and author details. It uses a lookup operator to filter items by `originParentId`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-enterspeed/README.md#_snippet_3

LANGUAGE: json
CODE:
```
{
  "sourceEntityTypes": ["blog"],
  "route": {
    "handles": ["blogList"]
  },
  "properties": {
    "blogListItems": {
      "type": "array",
      "input": {
        "$lookup": {
          "operator": "equals",
          "sourceEntityProperty": "originParentId",
          "matchValue": "{originId}"
        }
      },
      "items": {
        "type": "object",
        "properties": {
          "url": "{item.url}",
          "title": "{item.properties.title}",
          "featuredImage": "{item.properties.featuredImage}",
          "date": "{item.properties.date}",
          "excerpt": "{item.properties.excerpt}",
          "author": {
            "type": "object",
            "properties": {
              "name": "{item.properties.author.name}",
              "avatar": {
                "type": "object",
                "properties": {
                  "url": "{item.properties.author.avatar.url}"
                }
              }
            }
          }
        }
      }
    }
  }
}
```

----------------------------------------

TITLE: Bootstrap Next.js with Ionic using create-next-app
DESCRIPTION: These commands initialize a new Next.js project named 'with-ionic-app' using the 'with-ionic' example template. They leverage the `create-next-app` utility to quickly set up the project structure, demonstrating usage with npx, yarn, and pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-ionic/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-ionic with-ionic-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-ionic with-ionic-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-ionic with-ionic-app
```

----------------------------------------

TITLE: Next.js Configuration Option: logging.fetches
DESCRIPTION: Documentation for the `logging.fetches` option within `next.config.js`, used to control detailed logging of fetch requests during development. It allows enabling full URL logging for debugging purposes.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/local-development.mdx#_snippet_9

LANGUAGE: APIDOC
CODE:
```
next.config.js:
  logging: object
    fetches: object
      fullUrl: boolean (default: false)
        Description: If true, logs the full URL of fetch requests in the development console.
```

----------------------------------------

TITLE: Configure MDX with Remark and Rehype Plugins in Next.js Pages Directory
DESCRIPTION: Example `next.config.js` showing how to integrate Remark and Rehype plugins with MDX in a Next.js project. Plugins can be used to extend MDX functionality, such as adding syntax highlighting or custom transformations.
SOURCE: https://github.com/vercel/next.js/blob/canary/packages/next-mdx/readme.md#_snippet_2

LANGUAGE: javascript
CODE:
```
const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
module.exports = withMDX()
```

----------------------------------------

TITLE: Set API Documentation
DESCRIPTION: Documents the JavaScript Set object, a collection where each value may occur only once.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_46

LANGUAGE: APIDOC
CODE:
```
Set:
  Description: Represents a collection of values, where each value may occur only once
```

----------------------------------------

TITLE: Example MongoDB Atlas Connection String
DESCRIPTION: An example of a MongoDB Atlas connection string, illustrating the format required to connect your Next.js application to a MongoDB database. This string includes placeholders for username, password, and cluster details, and should be stored securely in environment variables.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/README.md#_snippet_1

LANGUAGE: text
CODE:
```
mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/test?retryWrites=true&w=majority
```

----------------------------------------

TITLE: Bootstrap Next.js App with Route-as-Modal Example
DESCRIPTION: These commands demonstrate how to initialize a new Next.js project using the `with-route-as-modal` example. You can choose your preferred package manager: npm, Yarn, or pnpm. The new application will be created in a directory named `with-route-as-modal-app`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-route-as-modal/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-route-as-modal with-route-as-modal-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-route-as-modal with-route-as-modal-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-route-as-modal with-route-as-modal-app
```

----------------------------------------

TITLE: Creating Next.js App with Turbopack using pnpm (Bash)
DESCRIPTION: This command initializes a new Next.js project named `with-turbopack-app` using `pnpm create next-app`. It utilizes the `with-turbopack` example, offering a pnpm-specific approach to quickly set up a Next.js application with Turbopack.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-turbopack/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-turbopack with-turbopack-app
```

----------------------------------------

TITLE: Initializing Next.js Project with Vitest Example using pnpm
DESCRIPTION: This command initializes a new Next.js application using `create-next-app` via `pnpm`. It specifically clones the `with-vitest` example, setting up a project pre-configured for Vitest integration.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-vitest/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-vitest with-vitest-app
```

----------------------------------------

TITLE: Read URL Query String with useSearchParams Hook
DESCRIPTION: Demonstrates how to use the `useSearchParams` hook in a Next.js Client Component to access and read values from the current URL's query string, such as retrieving a 'search' parameter. This example shows how to get a specific query parameter value.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/use-search-params.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
'use client'

import { useSearchParams } from 'next/navigation'

export default function SearchBar() {
  const searchParams = useSearchParams()

  const search = searchParams.get('search')

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return <>Search: {search}</>
}
```

LANGUAGE: jsx
CODE:
```
'use client'

import { useSearchParams } from 'next/navigation'

export default function SearchBar() {
  const searchParams = useSearchParams()

  const search = searchParams.get('search')

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return <>Search: {search}</>
}
```

----------------------------------------

TITLE: Initialize Next.js Project with Overmind Example
DESCRIPTION: Commands to bootstrap a new Next.js application pre-configured with the Overmind example. These commands use `create-next-app` with different package managers (npm, Yarn, pnpm) to set up the project directory and dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-overmind/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-overmind with-overmind-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-overmind with-overmind-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-overmind with-overmind-app
```

----------------------------------------

TITLE: Define Related Links in MDX Metadata
DESCRIPTION: This YAML snippet demonstrates how to add related links to a Next.js documentation page using the `related` field in the page's frontmatter. It includes a description for the link section and a list of relative paths to other documentation pages.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_16

LANGUAGE: yaml
CODE:
```
---
related:
  description: Learn how to quickly get started with your first application.
  links:
    - app/building-your-application/routing/defining-routes
    - app/building-your-application/data-fetching
    - app/api-reference/file-conventions/page
---
```

----------------------------------------

TITLE: Initialize Next.js App with Realm-Web Example
DESCRIPTION: Commands to bootstrap a new Next.js application pre-configured with the Realm-Web SDK example using different package managers (npx, yarn, or pnpm). These commands create a new directory and set up the project structure.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-realm-web/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-realm-web with-realm-web-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-realm-web with-realm-web-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-realm-web with-realm-web-app
```

----------------------------------------

TITLE: Next.js Server Components for Data Fetching (App Router)
DESCRIPTION: Highlights the benefits of using Server Components for efficient server-side data fetching in the App Router.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/production-checklist.mdx#_snippet_6

LANGUAGE: APIDOC
CODE:
```
Concept: Server Components
  Purpose: Efficient server-side data fetching
```

----------------------------------------

TITLE: Next.js Redirect APIs Overview
DESCRIPTION: Comprehensive overview of different API methods and configurations available in Next.js for handling redirects, including their purpose, where they can be used, and the HTTP status codes they return. Differentiates between App Router and Pages Router contexts.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/redirecting.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:
```
redirect:
  Purpose: Redirect user after a mutation or event
  Where: Server Components, Server Actions, Route Handlers (App Router)
  Status Code: 307 (Temporary) or 303 (Server Action)

permanentRedirect:
  Purpose: Redirect user after a mutation or event
  Where: Server Components, Server Actions, Route Handlers (App Router)
  Status Code: 308 (Permanent)

useRouter:
  Purpose: Perform a client-side navigation
  Where: Event Handlers in Client Components (App Router), Components (Pages Router)
  Status Code: N/A

redirects in next.config.js:
  Purpose: Redirect an incoming request based on a path
  Where: next.config.js file (App Router & Pages Router)
  Status Code: 307 (Temporary) or 308 (Permanent)

NextResponse.redirect:
  Purpose: Redirect an incoming request based on a condition
  Where: Middleware (App Router & Pages Router)
  Status Code: Any
```

----------------------------------------

TITLE: Bootstrap Next.js App with Segment Analytics Example
DESCRIPTION: These commands initialize a new Next.js application using the 'with-segment-analytics' example template. They set up the project structure and dependencies for integrating Segment Analytics, using different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-segment-analytics/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-segment-analytics with-segment-analytics-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-segment-analytics with-segment-analytics-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-segment-analytics with-segment-analytics-app
```

----------------------------------------

TITLE: Bootstrap Next.js Inngest Example Project
DESCRIPTION: Commands to initialize a new Next.js project using `create-next-app` with the Inngest example. These commands support various package managers including npm, Yarn, pnpm, and Bun, setting up the project structure and dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/inngest/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example inngest inngest-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example inngest inngest-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example inngest inngest-app
```

LANGUAGE: bash
CODE:
```
bunx create-next-app --example inngest inngest-app
```

----------------------------------------

TITLE: draftMode API Reference
DESCRIPTION: Detailed API documentation for the `draftMode` function, outlining its available properties and methods. This includes `isEnabled` for checking status, `enable()` for activation, and `disable()` for deactivation.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/draft-mode.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
draftMode:
  properties:
    isEnabled:
      type: boolean
      description: A boolean value that indicates if Draft Mode is enabled.
  methods:
    enable():
      description: Enables Draft Mode in a Route Handler by setting a cookie (`__prerender_bypass`).
    disable():
      description: Disables Draft Mode in a Route Handler by deleting a cookie.
```

----------------------------------------

TITLE: Bootstrap Next.js Sitecore XM Cloud Project
DESCRIPTION: Commands to quickly set up a new Next.js application pre-configured with the Sitecore XM Cloud example, using different package managers like npm, Yarn, and pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sitecore-xmcloud/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-sitecore-xmcloud cms-sitecore-xmcloud-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-sitecore-xmcloud cms-sitecore-xmcloud-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-sitecore-xmcloud cms-sitecore-xmcloud-app
```

----------------------------------------

TITLE: Initialize Next.js Image Component Example App
DESCRIPTION: These commands bootstrap a new Next.js application pre-configured with the `image-component` example. Choose the command corresponding to your preferred package manager (npm, Yarn, or pnpm) to quickly set up the project locally.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/image-component/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example image-component image-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example image-component image-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example image-component image-app
```

----------------------------------------

TITLE: Bootstrapping Next.js Electron App with pnpm
DESCRIPTION: This command uses `pnpm create` to initialize a new Next.js project based on the `with-electron-typescript` example. It sets up the project structure and dependencies for an Electron application integrated with Next.js.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-electron-typescript/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-electron-typescript with-electron-typescript-app
```

----------------------------------------

TITLE: Apply Google Font to Root Layout in Next.js (Geist)
DESCRIPTION: To start using `next/font`, import it from `next/font/google`, call it as a function with the appropriate options, and set the `className` of the element you want to apply the font to. This example applies the Geist font to the entire application via the Root Layout.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/13-fonts.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.className}>
      <body>{children}</body>
    </html>
  )
}
```

LANGUAGE: JavaScript
CODE:
```
import { Geist } from 'next/font/google'

const geist = Geist({
  subsets: ['latin'],
})

export default function Layout({ children }) {
  return (
    <html className={geist.className}>
      <body>{children}</body>
    </html>
  )
}
```

----------------------------------------

TITLE: Conditionally Executing Next.js Middleware
DESCRIPTION: This example demonstrates how to consolidate multiple nested Middleware logics into a single root `middleware.ts` file. It uses `request.nextUrl.pathname.startsWith()` to conditionally apply logic based on the incoming request's URL path, replacing the previous nested Middleware API.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/nested-middleware.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:
```
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    // This logic is only applied to /about
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard
  }
}
```

----------------------------------------

TITLE: Next.js Middleware Implementation Example
DESCRIPTION: Illustrates how to define and use Middleware in Next.js to intercept requests and perform actions like redirection. The example shows a `middleware.ts`/`middleware.js` file that redirects all requests matching `/about/:path*` to `/home`.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/15-route-handlers-and-middleware.mdx#_snippet_3

LANGUAGE: typescript
CODE:
```
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}
```

LANGUAGE: javascript
CODE:
```
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}
```

----------------------------------------

TITLE: Copy Environment Variables Template
DESCRIPTION: Copies the example environment variables file (`.env.local.example`) to create the local configuration file (`.env.local`) for Firebase settings.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-firebase/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Proxying API Requests with Next.js Rewrites
DESCRIPTION: Demonstrates how to replace Create React App's `proxy` field functionality by configuring `rewrites` in `next.config.ts` to forward API requests to a backend server.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/migrating/from-create-react-app.mdx#_snippet_19

LANGUAGE: ts
CODE:
```
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://your-backend.com/:path*',
      },
    ]
  }
}
```

----------------------------------------

TITLE: Next.js API Reference for Caching and Data Fetching
DESCRIPTION: Reference to key Next.js API configurations and functions related to caching, data revalidation, and static site generation across App Router and Pages Router.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/incremental-static-regeneration.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
Route segment config:
  - revalidate
  - dynamicParams

Functions (App Router):
  - revalidatePath
  - revalidateTag

Functions (Pages Router):
  - getStaticProps
  - res.revalidate
```

----------------------------------------

TITLE: Populating Grafbase Backend with Post Entries (GraphQL)
DESCRIPTION: This GraphQL mutation creates a new `Post` entry in the Grafbase backend, including a title, slug, and an associated comment. It's used to populate the local development database with sample data for the Next.js application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-grafbase/README.md#_snippet_3

LANGUAGE: graphql
CODE:
```
mutation {
  postCreate(
    input: {
      title: "I love Next.js!"
      slug: "i-love-nextjs"
      comments: [{ create: { message: "me too!" } }]
    }
  ) {
    post {
      id
      slug
    }
  }
}
```

----------------------------------------

TITLE: Embed Google Maps in Next.js Application
DESCRIPTION: Demonstrates how to integrate the GoogleMapsEmbed component into a Next.js page to display an interactive map. This example shows usage for both the App Router and Pages Router, configuring the map with an API key, dimensions, mode, and a specific query location.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/third-party-libraries.mdx#_snippet_15

LANGUAGE: jsx
CODE:
```
import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function Page() {
  return (
    <GoogleMapsEmbed
      apiKey="XYZ"
      height={200}
      width="100%"
      mode="place"
      q="Brooklyn+Bridge,New+York,NY"
    />
  )
}
```

LANGUAGE: jsx
CODE:
```
import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function Page() {
  return (
    <GoogleMapsEmbed
      apiKey="XYZ"
      height={200}
      width="100%"
      mode="place"
      q="Brooklyn+Bridge,New+York,NY"
    />
  )
}
```

----------------------------------------

TITLE: APIDOC: Array
DESCRIPTION: Represents an array of values. This global object is used to construct new arrays and manipulate existing ones.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Array: Represents an array of values
```

----------------------------------------

TITLE: Retrieve and test full Next.js page HTML
DESCRIPTION: Illustrates how to get the complete HTML string of a Next.js page for testing. This approach is useful when you need to assert against the entire page structure or specific string content within the HTML, without parsing it into a DOM.
SOURCE: https://github.com/vercel/next.js/blob/canary/test/e2e/example.txt#_snippet_2

LANGUAGE: javascript
CODE:
```
it('should work with html', async () => {
    const html = await next.render('/')
    expect(html).toContain('hello world')
  })
```

----------------------------------------

TITLE: Bootstrap Next.js Application with Mocha Example
DESCRIPTION: These commands demonstrate how to initialize a new Next.js project pre-configured with Mocha testing using `create-next-app`. They set up the basic project structure and dependencies, allowing for quick development with a testing setup.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mocha/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-mocha with-mocha-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-mocha with-mocha-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-mocha with-mocha-app
```

----------------------------------------

TITLE: Fetch Data in Next.js Server Components using `fetch` API
DESCRIPTION: Demonstrates how to fetch data asynchronously within a Next.js Server Component using the native `fetch` API. The component is defined as an `async` function, awaiting the `fetch` call to an external API and then parsing the JSON response to render a list of items.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/07-fetching-data.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

LANGUAGE: jsx
CODE:
```
export default async function Page() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
```

----------------------------------------

TITLE: Example devlow-bench Scenario with Property Variants
DESCRIPTION: Provides a concrete example of defining a scenario with multiple property variants using the `describe()` method. It demonstrates how `myProperty` and `myOtherProperty` are used to generate different test combinations and how their values are accessed within the scenario function.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/packages/devlow-bench/README.md#_snippet_3

LANGUAGE: js
CODE:
```
import { describe } from 'devlow-bench'

describe(
  'my scenario',
  {
    myProperty: [1, 2, 3],
    myOtherProperty: true,
  },
  async ({ myProperty, myOtherProperty }) => {
    console.log(myProperty, myOtherProperty)
  }
)

// will print:
// 1 true
// 2 true
// 3 true
// 1 false
// 2 false
// 3 false
```

----------------------------------------

TITLE: Bootstrapping Next.js Project with yarn
DESCRIPTION: This command uses `yarn create` to set up a new Next.js project called 'roadmap' based on the 'with-redis' example. It's an alternative method for users who prefer Yarn as their package manager for project initialization.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-redis/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-redis roadmap
```

----------------------------------------

TITLE: setInterval API Documentation
DESCRIPTION: Documents the setInterval Web API, used for repeatedly calling a function with a fixed time delay.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_47

LANGUAGE: APIDOC
CODE:
```
setInterval:
  Description: Repeatedly calls a function, with a fixed time delay between each call
```

----------------------------------------

TITLE: Handling Redirect API Requests in Next.js Route Handler with JavaScript
DESCRIPTION: This JavaScript snippet defines a Next.js Route Handler (GET method) responsible for serving redirect data. It receives a pathname query parameter, looks up the corresponding redirect entry in a redirects.json file, and returns the redirect details as JSON. It also handles cases where the pathname is not found or is invalid, accounting for Bloom filter false positives.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/redirecting.mdx#_snippet_14

LANGUAGE: JavaScript
CODE:
```
import { NextResponse } from 'next/server'
import redirects from '@/app/redirects/redirects.json'

export function GET(request) {
  const pathname = request.nextUrl.searchParams.get('pathname')
  if (!pathname) {
    return new Response('Bad Request', { status: 400 })
  }

```

----------------------------------------

TITLE: NextResponse.rewrite() Method API
DESCRIPTION: Static method to create a `NextResponse` instance that internally rewrites (proxies) the request to a different URL while maintaining the original URL in the browser.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/next-response.mdx#_snippet_15

LANGUAGE: APIDOC
CODE:
```
`static rewrite(url: string | URL)`
  Parameters:
    `url`: The internal URL to rewrite the request to.
  Returns: `NextResponse`
  Description: Produce a response that rewrites (proxies) the given URL while preserving the original URL.
```

----------------------------------------

TITLE: Bootstrap Next.js App with Ant Design Example
DESCRIPTION: These commands demonstrate how to initialize a new Next.js application pre-configured with the Ant Design example using different package managers: npm, Yarn, and pnpm. This sets up the project structure and dependencies for local development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-ant-design/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-ant-design with-ant-design-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-ant-design with-ant-design-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-ant-design with-ant-design-app
```

----------------------------------------

TITLE: Next.js NextResponse API Capabilities
DESCRIPTION: This section outlines the core functionalities provided by the `NextResponse` API in Next.js. It details how `NextResponse` can be used to perform actions like redirecting requests, rewriting responses, and managing HTTP headers and cookies for various Next.js components.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/middleware.mdx#_snippet_8

LANGUAGE: APIDOC
CODE:
```
NextResponse API allows you to:
- redirect the incoming request to a different URL
- rewrite the response by displaying a given URL
- Set request headers for API Routes, getServerSideProps, and rewrite destinations
- Set response cookies
- Set response headers

To produce a response from Middleware, you can:
1. rewrite to a route (Page or Route Handler) that produces a response
2. return a NextResponse directly.
```

----------------------------------------

TITLE: Create Next.js App with Styletron Example
DESCRIPTION: Bootstrap a new Next.js application pre-configured with the Styletron styling solution using various package managers like npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-styletron/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-styletron with-styletron-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-styletron with-styletron-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-styletron with-styletron-app
```

----------------------------------------

TITLE: Integrate Stencil Component into Stencil-Starter App
DESCRIPTION: Details the process of installing the component as an npm package and then importing it for use within another Stencil-based application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-stencil/packages/test-component/readme.md#_snippet_6

LANGUAGE: bash
CODE:
```
npm install my-component
```

LANGUAGE: javascript
CODE:
```
import my-component;
```

----------------------------------------

TITLE: Managing Cookies in Next.js Server Actions
DESCRIPTION: This example illustrates how to interact with cookies within a Next.js Server Action. It shows how to retrieve a cookie's value using `cookieStore.get()`, set a new cookie with `cookieStore.set()`, and delete an existing cookie using `cookieStore.delete()`, all leveraging the `cookies` API from `next/headers`.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/08-updating-data.mdx#_snippet_10

LANGUAGE: TypeScript
CODE:
```
'use server'

import { cookies } from 'next/headers'

export async function exampleAction() {
  const cookieStore = await cookies()

  // Get cookie
  cookieStore.get('name')?.value

  // Set cookie
  cookieStore.set('name', 'Delba')

  // Delete cookie
  cookieStore.delete('name')
}
```

LANGUAGE: JavaScript
CODE:
```
'use server'

import { cookies } from 'next/headers'

export async function exampleAction() {
  // Get cookie
  const cookieStore = await cookies()

  // Get cookie
  cookieStore.get('name')?.value

  // Set cookie
  cookieStore.set('name', 'Delba')

  // Delete cookie
  cookieStore.delete('name')
}
```

----------------------------------------

TITLE: Read Dynamic Route Parameters in Next.js Client Components
DESCRIPTION: This example illustrates how to read the `params` prop, which is a Promise, within a client component. Since client components cannot be `async`, React's `use` function is employed to unwrap the Promise and access the dynamic route segments.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/layout.mdx#_snippet_18

LANGUAGE: tsx
CODE:
```
'use client'

import { use } from 'react'

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
}
```

LANGUAGE: js
CODE:
```
'use client'

import { use } from 'react'

export default function Page({ params }) {
  const { slug } = use(params)
}
```

----------------------------------------

TITLE: Invoke Server Functions from Client Components
DESCRIPTION: Demonstrates how a Client Component can import and invoke a Server Function defined in a separate 'use server' file. The example uses the `formAction` prop on a button to trigger the server function.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/11-updating-data.mdx#_snippet_3

LANGUAGE: TypeScript
CODE:
```
'use client'

import { createPost } from '@/app/actions'

export function Button() {
  return <button formAction={createPost}>Create</button>
}
```

LANGUAGE: JavaScript
CODE:
```
'use client'

import { createPost } from '@/app/actions'

export function Button() {
  return <button formAction={createPost}>Create</button>
}
```

----------------------------------------

TITLE: Copy Local Environment Variables File
DESCRIPTION: Command to copy the example environment variables file (`.env.local.example`) to `.env.local`, which is used for local configuration and typically ignored by Git.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-facebook-pixel/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Next.js not-found.js Component API Reference
DESCRIPTION: Details the API for the `not-found.js` component in Next.js. It specifies that the component does not accept any props and clarifies its role in handling unmatched URLs globally when placed at the root `app/not-found.js`.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/not-found.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
not-found.js Component:
  Props:
    - None accepted.

  Behavior:
    - Renders UI when `notFound()` function is thrown.
    - Returns `200` HTTP status for streamed responses, `404` for non-streamed responses.
    - Root `app/not-found.js` handles global unmatched URLs.
```

----------------------------------------

TITLE: Render Built-in Next.js Error Component with Data Fetching
DESCRIPTION: This example illustrates how to import and reuse the built-in `next/error` component within another page. It demonstrates fetching data using `getServerSideProps` and conditionally rendering the `Error` component based on the API response status, passing the `statusCode` and an optional `title`.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/01-routing/08-custom-error.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
import Error from 'next/error'

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const errorCode = res.ok ? false : res.status
  const json = await res.json()

  return {
    props: { errorCode, stars: json.stargazers_count },
  }
}

export default function Page({ errorCode, stars }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return <div>Next stars: {stars}</div>
}
```

----------------------------------------

TITLE: Common Module Part 1 (JavaScript)
DESCRIPTION: This module part, shared across development and production builds, defines and exports the runtime variable, setting its value to 'edge'. It also contains Turbopack-specific re-exports (__TURBOPACK_VAR__), indicating its role in configuring the execution environment for the module.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/route-handler/output.md#_snippet_5

LANGUAGE: js
CODE:
```
const runtime = "edge";
export { runtime };
export { runtime as b } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};
```

----------------------------------------

TITLE: Next.js MetadataRoute.Manifest Object API Reference
DESCRIPTION: Reference for the `MetadataRoute.Manifest` object, which defines the structure and available options for a Web Manifest file in Next.js. It aligns with the Web Manifest Specification and can be explored via TypeScript type definitions or MDN documentation.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/01-metadata/manifest.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:
```
MetadataRoute.Manifest:
  // An extensive list of options that may be updated due to new web standards.
  // Refer to the TypeScript type definition in your code editor or the MDN Web Manifest documentation for full details.
  // Example properties include:
  name: string
  short_name: string
  description: string
  start_url: string
  display: 'standalone' | 'fullscreen' | 'minimal-ui' | 'browser'
  background_color: string
  theme_color: string
  icons: Array<
    {
      src: string,
      sizes: string,
      type: string,
      purpose?: 'any' | 'maskable' | 'monochrome'
    }
  >
  // ... and many more properties as per Web Manifest Specification
```

----------------------------------------

TITLE: Access Dynamic Route Parameters in Next.js Layouts
DESCRIPTION: This example demonstrates how to define a layout component that receives dynamic route parameters. The `params` prop is a promise containing the dynamic segments, requiring `async/await` to extract values. This allows layouts to adapt their content or behavior based on URL parameters.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/layout.mdx#_snippet_2

LANGUAGE: tsx
CODE:
```
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ team: string }>
}) {
  const { team } = await params
}
```

LANGUAGE: jsx
CODE:
```
export default async function Layout({ children, params }) {
  const { team } = await params
}
```

----------------------------------------

TITLE: Bootstrapping Next.js App with Cloudinary using Yarn
DESCRIPTION: This command initializes a new Next.js project named 'with-cloudinary-app' using `create-next-app` and pre-configures it with the 'with-cloudinary' example. It uses `yarn create`, Yarn's equivalent to `npx`, to bootstrap the application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-cloudinary/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-cloudinary with-cloudinary-app
```

----------------------------------------

TITLE: Configure VSCode User Settings for MDX Preview
DESCRIPTION: This JSON configuration snippet for VSCode's `settings.json` file associates `.mdx` files with the `markdown` language mode. This enables the built-in Markdown previewer to render MDX content, allowing users to preview their documentation changes locally within VSCode.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/04-community/01-contribution-guide.mdx#_snippet_0

LANGUAGE: JSON
CODE:
```
{
  "files.associations": {
    "*.mdx": "markdown"
  }
}
```

----------------------------------------

TITLE: Configure Next.js Build and Start Scripts in package.json
DESCRIPTION: This JSON snippet illustrates the essential `scripts` configuration within a `package.json` file for a Next.js application. It defines commands for development (`dev`), production build (`build`), and starting the production server (`start`), which are crucial for deploying Next.js as a Node.js server.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/16-deploying.mdx#_snippet_0

LANGUAGE: JSON
CODE:
```
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

----------------------------------------

TITLE: Create Next.js App with Image Secure Compute Example
DESCRIPTION: Commands to bootstrap a new Next.js application pre-configured with the image secure compute example using different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/image-secure-compute/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example image-secure-compute image-secure-compute-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example image-secure-compute image-secure-compute-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example image-secure-compute image-secure-compute-app
```

----------------------------------------

TITLE: Creating Next.js App with Turbopack using Yarn (Bash)
DESCRIPTION: This command initializes a new Next.js project named `with-turbopack-app` using `yarn create next-app`. It leverages the `with-turbopack` example, providing an alternative method to set up a Next.js application with Turbopack using Yarn.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-turbopack/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-turbopack with-turbopack-app
```

----------------------------------------

TITLE: Submit Form Data from Client-Side React Component
DESCRIPTION: This snippet illustrates how to create a React component (`pages/index.tsx` or `.jsx`) that handles form submission. It prevents default form behavior, constructs `FormData` from the current target, and uses the `fetch` API to send a POST request to a Next.js API Route.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/02-guides/forms.mdx#_snippet_1

LANGUAGE: tsx
CODE:
```
import { FormEvent } from 'react'

export default function Page() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })

    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}
```

LANGUAGE: jsx
CODE:
```
export default function Page() {
  async function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })

    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  )
}
```

----------------------------------------

TITLE: Initializing Next.js Project with pnpm for GitHub Pages
DESCRIPTION: This command uses `pnpm create` to scaffold a new Next.js application from the `github-pages` example. It prepares the project for static export and deployment to GitHub Pages, creating a directory named `github-pages-app`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/github-pages/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example github-pages github-pages-app
```

----------------------------------------

TITLE: Bootstrap Next.js AMP Example Project
DESCRIPTION: These commands show how to initialize a new Next.js project from the 'amp' example template using different package managers. Each command sets up a project named 'amp-app' with the necessary configuration for developing AMP pages.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/amp/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example amp amp-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example amp amp-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example amp amp-app
```

----------------------------------------

TITLE: Next.js Middleware: Platform Support Matrix
DESCRIPTION: Provides a summary of platform support for Next.js Middleware across various deployment options, including Node.js server, Docker containers, static export, and adapters.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/middleware.mdx#_snippet_26

LANGUAGE: APIDOC
CODE:
```
Deployment Option | Supported
-------------------------------------------------------------------|-----------------
Node.js server (/docs/app/getting-started/deploying#nodejs-server) | Yes
Docker container (/docs/app/getting-started/deploying#docker)      | Yes
Static export (/docs/app/getting-started/deploying#static-export)  | No
Adapters (/docs/app/getting-started/deploying#adapters)            | Platform-specific
```

----------------------------------------

TITLE: Bootstrap Next.js Application with Stripe Example
DESCRIPTION: Commands to initialize a new Next.js project pre-configured with the Stripe TypeScript example using various package managers (npx, yarn, pnpm).
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-stripe-typescript with-stripe-typescript-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-stripe-typescript with-stripe-typescript-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-stripe-typescript with-stripe-typescript-app
```

----------------------------------------

TITLE: connection() Function API Reference
DESCRIPTION: Detailed API documentation for the `connection()` function, including its type signature, parameters, and return values. This function is designed to be awaited and does not accept any arguments, returning a void Promise.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/connection.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
connection()
  Type: function connection(): Promise<void>
  Parameters:
    - None
  Returns:
    - Promise<void> (It is not meant to be consumed.)
```

----------------------------------------

TITLE: Access Query Parameters with useSearchParams Hook (Client Component)
DESCRIPTION: Illustrates how to retrieve query parameters using the `useSearchParams` hook within a Next.js Client Component. Since Client Components re-render on navigation, they can access the latest search parameters, unlike layouts. This example fetches a parameter named 'search'.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/layout.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
'use client'

import { useSearchParams } from 'next/navigation'

export default function Search() {
  const searchParams = useSearchParams()

  const search = searchParams.get('search')

  return '...'
}
```

LANGUAGE: jsx
CODE:
```
'use client'

import { useSearchParams } from 'next/navigation'

export default function Search() {
  const searchParams = useSearchParams()

  const search = searchParams.get('search')

  return '...'
}
```

----------------------------------------

TITLE: Install Dependencies and Start Development Server
DESCRIPTION: Commands to install project dependencies and start the Next.js development server using npm, yarn, or pnpm, making the application accessible locally.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-stripe-typescript/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
npm install
npm run dev
```

LANGUAGE: bash
CODE:
```
yarn
yarn dev
```

LANGUAGE: bash
CODE:
```
pnpm install
pnpm dev
```

----------------------------------------

TITLE: Proxying Requests with Next.js Route Handlers
DESCRIPTION: Demonstrates how to use a Next.js Route Handler to proxy incoming requests to an external backend. It includes an example of adding validation logic before forwarding the request and handling potential errors during the proxy operation. This pattern is useful for securely routing requests or abstracting external APIs.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/backend-for-frontend.mdx#_snippet_8

LANGUAGE: ts
CODE:
```
import { isValidRequest } from '@/lib/utils'

export async function POST(request: Request, { params }) {
  const clonedRequest = request.clone()
  const isValid = await isValidRequest(clonedRequest)

  if (!isValid) {
    return new Response(null, { status: 400, statusText: 'Bad Request' })
  }

  const { slug } = await params
  const pathname = slug.join('/')
  const proxyURL = new URL(pathname, 'https://nextjs.org')
  const proxyRequest = new Request(proxyURL, request)

  try {
    return fetch(proxyRequest)
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : 'Unexpected exception'

    return new Response(message, { status: 500 })
  }
}
```

LANGUAGE: js
CODE:
```
import { isValidRequest } from '@/lib/utils'

export async function POST(request, { params }) {
  const clonedRequest = request.clone()
  const isValid = await isValidRequest(clonedRequest)

  if (!isValid) {
    return new Response(null, { status: 400, statusText: 'Bad Request' })
  }

  const { slug } = await params
  const pathname = slug.join('/')
  const proxyURL = new URL(pathname, 'https://nextjs.org')
  const proxyRequest = new Request(proxyURL, request)

  try {
    return fetch(proxyRequest)
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : 'Unexpected exception'

    return new Response(message, { status: 500 })
  }
}
```

----------------------------------------

TITLE: Next.js fetch API Options for Data Caching
DESCRIPTION: Documents the Next.js specific options for the native `fetch` API, allowing configuration of server-side data caching behavior. These options control how requests interact with the server's Data Cache.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/caching.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
fetch(input: RequestInfo, init?: RequestInit & NextFetchOptions): Promise<Response>

NextFetchOptions:
  cache?: 'force-cache' | 'no-store' | 'default'
    - 'force-cache': Instructs Next.js to cache the fetch request's result persistently in the Data Cache.
    - 'no-store': Instructs Next.js to never cache the fetch request's result.
    - 'default': Uses the default caching behavior, which often involves memoization and potential revalidation.
  next?: {
    revalidate?: number
      - number: Sets the cache lifetime of the resource in seconds for time-based revalidation.
  }
```

----------------------------------------

TITLE: Configure Next.js Edge Runtime (JavaScript)
DESCRIPTION: This snippet sets the runtime variable to 'edge' for the current Next.js module. Declaring export const runtime = "edge"; instructs Next.js to optimize this module for deployment on serverless edge runtimes, which can significantly reduce latency for global applications.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/route-handler/output.md#_snippet_2

LANGUAGE: js
CODE:
```
export const runtime = "edge";
```

----------------------------------------

TITLE: Running Neo4j Docker Container for Graph Database
DESCRIPTION: This command starts a Neo4j database instance as a Docker container, exposing its HTTP (7474) and Bolt (7687) ports. It mounts a local volume (`$HOME/neo4j/data`) to persist the database data, allowing the `graph.cypherl` file generated by `turbo-static` to be loaded and queried.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbo-static/readme.md#_snippet_1

LANGUAGE: bash
CODE:
```
docker run \
    --publish=7474:7474 --publish=7687:7687 \
    --volume=$HOME/neo4j/data:/data \
    neo4j
```

----------------------------------------

TITLE: Declare mutable 'api' variable
DESCRIPTION: Declares a mutable variable named `api`. This variable is intended to hold an instance of the OpenTelemetry API.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/nextjs-tracer/output.md#_snippet_3

LANGUAGE: js
CODE:
```
let api;
```

----------------------------------------

TITLE: Quickstart: Create Next.js App with Vitest Example
DESCRIPTION: Use `create-next-app` with the `with-vitest` example to quickly scaffold a Next.js project pre-configured with Vitest.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/testing/vitest.mdx#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app@latest --example with-vitest with-vitest-app
```

----------------------------------------

TITLE: Next.js Font Module for Font Optimization
DESCRIPTION: Optimize fonts using the Font Module, which automatically hosts font files with static assets, removes external network requests, and reduces layout shift.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/production-checklist.mdx#_snippet_15

LANGUAGE: APIDOC
CODE:
```
Next.js Font Module:
  Purpose: Optimize font loading and performance.
  Benefits:
    - Automatic hosting of font files with static assets.
    - Eliminates external network requests for fonts.
    - Reduces Cumulative Layout Shift (CLS).
```

----------------------------------------

TITLE: Initialize Next.js CSP Example App
DESCRIPTION: Use `create-next-app` with npm, Yarn, or pnpm to quickly set up a Next.js project pre-configured with the strict Content Security Policy example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-strict-csp/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-strict-csp with-strict-csp-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-strict-csp with-strict-csp-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-strict-csp with-strict-csp-app
```

----------------------------------------

TITLE: Copy environment variable example file
DESCRIPTION: Command to duplicate the '.env.local.example' file to '.env.local'. This file is used to store sensitive environment variables and is ignored by Git, ensuring credentials are not committed to version control.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-prepr/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Bootstrap Next.js with Grafbase Example
DESCRIPTION: Commands to initialize a new Next.js project using the `create-next-app` utility, pre-configured with the Grafbase example. Choose your preferred package manager: npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-grafbase/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-grafbase with-grafbase-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-grafbase with-grafbase-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-grafbase with-grafbase-app
```

----------------------------------------

TITLE: Create Next.js Application from Turbopack Loaders Example
DESCRIPTION: Commands to bootstrap a new Next.js project using the `create-next-app` utility, pre-configured with the `with-turbopack-loaders` example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-turbopack-loaders/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-turbopack-loaders with-turbopack-loaders-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-turbopack-loaders with-turbopack-loaders-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-turbopack-loaders with-turbopack-loaders-app
```

----------------------------------------

TITLE: Copy Environment Variables File
DESCRIPTION: Command to duplicate the example environment file (.env.local.example) to a local environment file (.env.local), which is ignored by Git, for local configuration.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-couchbase/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Bootstrap Next.js Project with create-next-app
DESCRIPTION: These commands illustrate how to initialize a new Next.js application by cloning the 'active-class-name' example. They cover the use of `create-next-app` with npm, Yarn, and pnpm package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/active-class-name/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example active-class-name active-class-name-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example active-class-name active-class-name-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example active-class-name active-class-name-app
```

----------------------------------------

TITLE: Configure Local Environment Variables
DESCRIPTION: This command copies the example environment variable file to `.env.local`. The `.env.local` file is used to store sensitive configuration, such as the database connection URI (`PG_URI`), and is automatically ignored by Git to prevent accidental commits.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-knex/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Initialize Next.js Project with create-next-app
DESCRIPTION: This snippet demonstrates how to bootstrap a new Next.js project using the `create-next-app` command-line tool. It initializes a 'hello-world-app' based on the 'hello-world' example, supporting npm, Yarn, and pnpm package managers. This command sets up the basic project structure and dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/hello-world/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example hello-world hello-world-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example hello-world hello-world-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example hello-world hello-world-app
```

----------------------------------------

TITLE: usePathname Hook API Reference
DESCRIPTION: Detailed API documentation for the `usePathname` hook, including its signature, parameters, and return values. This hook provides the current URL's pathname as a string.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/use-pathname.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
usePathname(): string\n\nParameters:\n  None\n\nReturns:\n  string - The current URL's pathname.\n\nReturn Examples:\n  URL: /                 -> Returned: '/'
  URL: /dashboard        -> Returned: '/dashboard'
  URL: /dashboard?v=2    -> Returned: '/dashboard'
  URL: /blog/hello-world -> Returned: '/blog/hello-world'
```

----------------------------------------

TITLE: Start Next.js Home Application Development Server
DESCRIPTION: Commands to navigate into the `home` directory and start the Next.js development server using npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-zones/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cd home
npm install && npm run dev
```

LANGUAGE: bash
CODE:
```
cd home
yarn && yarn dev
```

LANGUAGE: bash
CODE:
```
cd home
pnpm install && pnpm dev
```

----------------------------------------

TITLE: Next.js Edge API Route for Proxying
DESCRIPTION: This snippet shows how to use an Edge API Route to proxy requests to an external backend API. It demonstrates setting the runtime to 'edge' and forwarding headers like 'authorization' from cookies.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/middleware-upgrade-guide.mdx#_snippet_6

LANGUAGE: ts
CODE:
```
import { type NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextRequest) {
  const authorization = req.cookies.get('authorization')
  return fetch('https://backend-api.com/api/protected', {
    method: req.method,
    headers: {
      authorization,
    },
    redirect: 'manual',
  })
}
```

----------------------------------------

TITLE: Invoke Server Functions from Client Components (TypeScript/JavaScript)
DESCRIPTION: Demonstrates how a Client Component can import and invoke a Server Function defined in a separate file. The example uses the formAction prop on a button to trigger the server-side createPost function.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/08-updating-data.mdx#_snippet_3

LANGUAGE: tsx
CODE:
```
'use client'

import { createPost } from '@/app/actions'

export function Button() {
  return <button formAction={createPost}>Create</button>
}
```

LANGUAGE: jsx
CODE:
```
'use client'

import { createPost } from '@/app/actions'

export function Button() {
  return <button formAction={createPost}>Create</button>
}
```

----------------------------------------

TITLE: Bootstrap Next.js Project with Flow Example
DESCRIPTION: Commands to initialize a new Next.js application pre-configured with the Flow example using different package managers (npx, yarn, pnpm). These commands fetch the 'with-flow' example from the Next.js repository.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-flow/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-flow with-flow-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-flow with-flow-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-flow with-flow-app
```

----------------------------------------

TITLE: Next.js TypeScript and TS Plugin for Type Safety
DESCRIPTION: Enhance type-safety and catch errors early in your Next.js application development by utilizing TypeScript and the Next.js TypeScript plugin.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/production-checklist.mdx#_snippet_27

LANGUAGE: APIDOC
CODE:
```
Next.js TypeScript Integration:
  Purpose: Improve type-safety and early error detection.
  Components:
    - TypeScript language.
    - Next.js TypeScript plugin.
```

----------------------------------------

TITLE: Bootstrap Next.js App with Payload CMS Example
DESCRIPTION: These commands demonstrate how to initialize a new Next.js application pre-configured with the Payload CMS example using different package managers (npx, Yarn, pnpm). This sets up the project structure and dependencies for a Next.js and Payload serverless demo.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-payload/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example cms-payload cms-payload-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example cms-payload cms-payload-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-payload cms-payload-app
```

----------------------------------------

TITLE: Bootstrap Next.js goober example project
DESCRIPTION: Use `create-next-app` with different package managers (npm, Yarn, pnpm) to quickly set up a new Next.js project pre-configured with the goober example. This command clones the example repository and initializes a new application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-goober/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-goober with-goober-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-goober with-goober-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-goober with-goober-app
```

----------------------------------------

TITLE: Initialize Next.js Project for GitHub Pages
DESCRIPTION: This command initializes a new Next.js application configured for GitHub Pages deployment. It uses the `create-next-app` utility with the `--example github-pages` flag to set up the project structure and necessary configurations. Users can choose between npm, Yarn, or pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/github-pages/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example github-pages github-pages-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example github-pages github-pages-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example github-pages github-pages-app
```

----------------------------------------

TITLE: Rust API: `turbo-tasks` Registry and Serialization
DESCRIPTION: Describes the global registry for `turbo-tasks` values, where each `#[turbo_tasks::value]` creates a `ValueType`. It details the serialization process using `ValueType::new_with_any_serialization` to store `Serialize` and `Deserialize` implementations, leveraging Rust's generic magic like `fn any_as_serialize` and `AnyDeserializeSeed` with `serde`.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack/architecture.md#_snippet_3

LANGUAGE: APIDOC
CODE:
```
Concept: Global Registry
  Purpose: Stores ValueType for each #[turbo_tasks::value]
Type: ValueType
  Method: new_with_any_serialization
    Purpose: Stores Serialization and Deserialization impls
Function: fn any_as_serialize(...)
  Purpose: Casts an Any to a Serialize for a concrete type
  Mechanism: Leverages Rust's serde for serialization logic
Concept: AnyDeserializeSeed
  Purpose: Serde-based deserialization mechanism
```

----------------------------------------

TITLE: Configure Next.js Environment Variables for Elasticsearch
DESCRIPTION: Command to copy the example environment variable file to a local `.env.local` file. This file is crucial for storing sensitive information like Elasticsearch connection details (Cloud ID, username, password) and is ignored by Git for security.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-elasticsearch/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Copy Environment Variable Template File
DESCRIPTION: Command to copy the example environment variable file (`.env.local.example`) to the actual environment file (`.env.local`). This file is used to store sensitive information like the MongoDB connection string and is ignored by Git for security.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Declare Client Component Entry Point with 'use client' (React/Next.js)
DESCRIPTION: This snippet demonstrates how to declare a React component as a Client Component by adding the `'use client'` directive at the top of the file. This enables client-side interactivity, state management, and access to browser APIs. The example shows a simple counter component using React's `useState` hook.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/01-directives/use-client.mdx#_snippet_0

LANGUAGE: tsx
CODE:
```
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```

LANGUAGE: jsx
CODE:
```
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
```

----------------------------------------

TITLE: Examples of Dynamic Module and Resource Access Patterns
DESCRIPTION: This section presents various dynamic patterns for module loading and resource access, including `require()`, `import()`, a generic `readFileSync()`, and `new URL()` with `import.meta.url`, all of which involve runtime-determined paths or values.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-tests/tests/snapshot/dynamic-request/very-dynamic/issues/__l___lint TP1004__ fs.readFileSync(FreeVar(Math)[-2af706.txt#_snippet_1

LANGUAGE: JavaScript
CODE:
```
require(unknown)
```

LANGUAGE: JavaScript
CODE:
```
import(unknown)
```

LANGUAGE: JavaScript
CODE:
```
readFileSync(unknown)
```

LANGUAGE: JavaScript
CODE:
```
new URL(unknown, import.meta.url)
```

----------------------------------------

TITLE: Accessing Browser APIs in Client Component (JSX)
DESCRIPTION: This JSX snippet demonstrates how to safely access browser-specific APIs (like `window`) within a Next.js Client Component. By using the `useEffect` hook, the code ensures that these APIs are only accessed after the component has mounted in the browser environment, preventing errors during server-side pre-rendering.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/static-exports.mdx#_snippet_11

LANGUAGE: JSX
CODE:
```
'use client';

import { useEffect } from 'react';

export default function ClientComponent() {
  useEffect(() => {
    // You now have access to `window`
    console.log(window.innerHeight);
  }, [])

  return ...;
}
```

----------------------------------------

TITLE: Share Data Fetching Logic for Next.js getStaticProps
DESCRIPTION: This snippet demonstrates how to optimize data fetching in Next.js by sharing server-side logic. Instead of calling an API route from `getStaticProps`, a common utility function (`loadPosts`) is created in a `lib/` directory and directly imported, reducing redundant network calls and improving application performance.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/03-data-fetching/01-get-static-props.mdx#_snippet_3

LANGUAGE: js
CODE:
```
// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts/')
  const data = await res.json()

  return data
}
```

LANGUAGE: jsx
CODE:
```
// pages/blog.js
import { loadPosts } from '../lib/load-posts'

// This function runs only on the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const posts = await loadPosts()

  // Props returned will be passed to the page component
  return { props: { posts } }
}
```

----------------------------------------

TITLE: Next.js Caching Configuration and API References
DESCRIPTION: Details various configuration options and API behaviors that influence Next.js's Full Route Cache and Client-side Router Cache, including opting out mechanisms and prefetching strategies.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/caching.mdx#_snippet_7

LANGUAGE: APIDOC
CODE:
```
Route Segment Config Options:
  dynamic = 'force-dynamic'
    Description: Forces dynamic rendering for the route, opting out of Full Route Cache and Data Cache.
  revalidate = 0
    Description: Forces dynamic rendering for the route, opting out of Full Route Cache and Data Cache.

Fetch API Behavior:
  Description: How `fetch` requests interact with the Full Route Cache.
  - Uncached fetch requests: Opt out the route from the Full Route Cache.
  - Explicitly enabled caching: Other `fetch` requests can still be cached in the Data Cache.

next.config.js Options:
  staleTimes (experimental):
    Description: Adjusts the automatic invalidation times for the Client-side Router Cache.

Link Component Prefetching (prop on <Link>):
  prefetch:
    null (or unspecified):
      Description: Default prefetching behavior. Not cached for dynamic pages, 5 minutes for static pages.
    true:
      Description: Full prefetching. 5 minutes for both static & dynamic pages.

router.prefetch() method:
  Description: Programmatically prefetches routes, similar to `Link prefetch={true}`.
```

----------------------------------------

TITLE: Install Umbraco .NET CLI Templates
DESCRIPTION: Installs the Umbraco .NET CLI templates for version 13.0 or above, required to create Umbraco projects locally.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
dotnet new install Umbraco.Templates::13.*
```

----------------------------------------

TITLE: Get and Reset Next.js Client Component Loader Metrics
DESCRIPTION: This JavaScript function, getClientComponentLoaderMetrics, retrieves performance metrics related to client component loading in a Next.js application, including start time, total load times, and component count. It can also reset these metrics if the 'reset' option is set to true.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/logger/output.md#_snippet_13

LANGUAGE: javascript
CODE:
```
import { c as clientComponentLoadCount } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -2
};
import { a as clientComponentLoadStart } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -0
};
import { b as clientComponentLoadTimes } from "__TURBOPACK_PART__" assert {
    __turbopack_part__: -1
};
function getClientComponentLoaderMetrics(options = {}) {
    const metrics = clientComponentLoadStart === 0 ? undefined : {
        clientComponentLoadStart,
        clientComponentLoadTimes,
        clientComponentLoadCount
    };
    if (options.reset) {
        clientComponentLoadStart = 0;
        clientComponentLoadTimes = 0;
        clientComponentLoadCount = 0;
    }
    return metrics;
}
export { getClientComponentLoaderMetrics };
export { getClientComponentLoaderMetrics as e } from "__TURBOPACK_VAR__" assert {
    __turbopack_var__: true
};
```

----------------------------------------

TITLE: Configure Local Environment Variables
DESCRIPTION: Command to copy the example environment file (`.env.local.example`) to `.env.local`, which is used to store sensitive configuration details like the Azure Cosmos DB connection string, database name, and container name for local development.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-azure-cosmos/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: SharedArrayBuffer API Documentation
DESCRIPTION: Documents the JavaScript SharedArrayBuffer object, representing a generic, fixed-length raw binary data buffer.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_49

LANGUAGE: APIDOC
CODE:
```
SharedArrayBuffer:
  Description: Represents a generic, fixed-length raw binary data buffer
```

----------------------------------------

TITLE: Bootstrap Next.js Playwright Example Project
DESCRIPTION: Commands to initialize a new Next.js project using the 'with-playwright' example template. These commands demonstrate usage with npm (via npx), Yarn, and pnpm.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-playwright/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-playwright with-playwright-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-playwright with-playwright-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-playwright with-playwright-app
```

----------------------------------------

TITLE: Define Blog Post Data Schema
DESCRIPTION: JSON schema defining the structure for a single blog post, including properties like URL, type, title, featured image, date, author, categories, tags, and content. It also includes an action to process `originId`.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-enterspeed/README.md#_snippet_4

LANGUAGE: json
CODE:
```
{
  "sourceEntityTypes": ["blogPost"],
  "route": {
    "url": "{url}"
  },
  "actions": [
    {
      "type": "process",
      "originId": {
        "$exp": "{originParentId}"
      }
    }
  ],
  "properties": {
    "url": "{url}",
    "type": "{type}",
    "title": "{p.title}",
    "featuredImage": "{p.featuredImage}",
    "date": "{p.date}",
    "author": {
      "type": "object",
      "properties": {
        "name": "{p.author.name}",
        "avatar": {
          "type": "object",
          "properties": {
            "url": "{p.author.avatar.url}"
          }
        }
      }
    },
    "categories": {
      "type": "array",
      "input": "{p.categories}",
      "items": {
        "type": "string",
        "value": "{item}"
      }
    },
    "tags": {
      "type": "array",
      "input": "{p.tags}",
      "items": {
        "type": "string",
        "value": "{item}"
      }
    },
    "content": "{p.content}"
  }
}
```

----------------------------------------

TITLE: Example Implementation of Next.js `waitUntil` for `after`
DESCRIPTION: This example demonstrates how to provide a custom implementation for the `waitUntil` mechanism required by Next.js's `after` function in serverless environments. It leverages Node.js's `AsyncLocalStorage` to manage the request context and injects the necessary accessor into `globalThis` for Next.js to utilize.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/after.mdx#_snippet_5

LANGUAGE: tsx
CODE:
```
import { AsyncLocalStorage } from 'node:async_hooks'

const RequestContextStorage = new AsyncLocalStorage<NextRequestContextValue>()

// Define and inject the accessor that next.js will use
const RequestContext: NextRequestContext = {
  get() {
    return RequestContextStorage.getStore()
  },
}
globalThis[Symbol.for('@next/request-context')] = RequestContext

const handler = (req, res) => {
  const contextValue = { waitUntil: YOUR_WAITUNTIL }
  // Provide the value
  return RequestContextStorage.run(contextValue, () => nextJsHandler(req, res))
}
```

----------------------------------------

TITLE: Copying Environment Variable Example File
DESCRIPTION: This command copies the `.env.local.example` file to `.env.local`. The `.env.local` file is used to store sensitive environment variables for local development and is typically ignored by Git, ensuring credentials are not committed to version control.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/auth0/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Initializing Redis Client (Part of Breaking Example)
DESCRIPTION: This snippet initializes an ioredis client, identical to the correct usage example, but is presented here as part of a scenario where its subsequent client-side usage will lead to a 'Module Not Found' error.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/module-not-found.mdx#_snippet_5

LANGUAGE: js
CODE:
```
import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL)

export default redis
```

----------------------------------------

TITLE: Copy Environment Variables File
DESCRIPTION: Copy the example environment variables file to `.env.local` to configure local settings for the Next.js application. This file is typically ignored by Git to prevent sensitive information from being committed.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sitefinity/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Bootstrap Next.js App with Basic CSS Example
DESCRIPTION: Commands to initialize a new Next.js application using the 'basic-css' example. These commands utilize different package managers (npm, Yarn, pnpm) to create a new project directory and set up the example.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/basic-css/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example basic-css basic-css-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example basic-css basic-css-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example basic-css basic-css-app
```

----------------------------------------

TITLE: Initializing Next.js Project with pnpm
DESCRIPTION: This command uses `pnpm create` to bootstrap a new Next.js application named `cms-sitecore-xmcloud-app` from the `cms-sitecore-xmcloud` example. It employs `pnpm` as the package manager for project creation.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-sitecore-xmcloud/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example cms-sitecore-xmcloud cms-sitecore-xmcloud-app
```

----------------------------------------

TITLE: Bootstrapping Next.js Electron App with pnpm
DESCRIPTION: This command uses `pnpm create` to initialize a new Next.js project from the `with-electron` example. It creates a directory named `with-electron-app` containing the bootstrapped application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-electron/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-electron with-electron-app
```

----------------------------------------

TITLE: Import urlAlphabet from Local Module
DESCRIPTION: Imports the `urlAlphabet` constant from a local `url-alphabet` module. This constant likely defines the character set used for generating URL-friendly unique IDs.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/nanoid/output.md#_snippet_1

LANGUAGE: js
CODE:
```
import { urlAlphabet } from './url-alphabet/index.js';
```

----------------------------------------

TITLE: Initialize Next.js App with MDBReact Example
DESCRIPTION: Commands to bootstrap a new Next.js application pre-configured with the MDBReact example using different package managers (npx, yarn, or pnpm). These commands fetch the example from the Next.js repository and set up a new project directory.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mdbreact/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-mdbreact with-mdbreact-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-mdbreact with-mdbreact-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-mdbreact with-mdbreact-app
```

----------------------------------------

TITLE: Bootstrapping Next.js Electron App with Yarn
DESCRIPTION: This command uses `yarn create` to initialize a new Next.js project from the `with-electron` example. It creates a directory named `with-electron-app` containing the bootstrapped application.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-electron/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-electron with-electron-app
```

----------------------------------------

TITLE: Construct Next.js Preview Mode URL
DESCRIPTION: This URL structure is used to activate the Next.js Preview Mode, allowing users to view draft content from DatoCMS. It requires a secret (matching DATOCMS_PREVIEW_SECRET) and the slug of the content to be previewed.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-datocms/README.md#_snippet_4

LANGUAGE: URL
CODE:
```
http://localhost:3000/api/preview?secret=<secret>&slug=<slug>
```

----------------------------------------

TITLE: Format Dynamic API Accesses for Debugging (JavaScript)
DESCRIPTION: This function formats the recorded dynamic API accesses into human-readable strings for debugging purposes. It filters out entries without stack traces and cleans up the stack traces by removing internal Next.js and anonymous lines.
SOURCE: https://github.com/vercel/next.js/blob/canary/turbopack/crates/turbopack-ecmascript/tests/tree-shaker/analyzer/failed-2/output.md#_snippet_12

LANGUAGE: javascript
CODE:
```
export function formatDynamicAPIAccesses(prerenderState) {
    return prerenderState.dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n').slice(4).filter((line)=>{
            if (line.includes('node_modules/next/')) {
                return false;
            }
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
```

----------------------------------------

TITLE: React useFormStatus Hook API Reference
DESCRIPTION: Documentation for the `useFormStatus` React hook, detailing the properties available on its returned object. It specifies that `data`, `method`, and `action` are available in React 19, while `pending` is available in all versions.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/02-guides/authentication.mdx#_snippet_6

LANGUAGE: APIDOC
CODE:
```
useFormStatus Hook:
  - Properties:
    - pending: boolean
      Description: Indicates if the form is currently in a pending state (e.g., submitting).
      Availability: React 18+
    - data: FormData
      Description: The FormData object of the form being submitted.
      Availability: React 19+
    - method: string
      Description: The HTTP method used for form submission ('get' or 'post').
      Availability: React 19+
    - action: string | function
      Description: The action associated with the form submission.
      Availability: React 19+
```

----------------------------------------

TITLE: Reading Cookies in Next.js API Route (JavaScript)
DESCRIPTION: This snippet demonstrates how to read cookies from the incoming request using `req.cookies` within a Next.js API Route. It accesses the `authorization` cookie for further processing.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/03-data-fetching/03-forms-and-mutations.mdx#_snippet_5

LANGUAGE: javascript
CODE:
```
export default async function handler(req, res) {
  const auth = req.cookies.authorization
  // ...
}
```

----------------------------------------

TITLE: Reading Cookies in Next.js API Route (TypeScript)
DESCRIPTION: This snippet demonstrates how to read cookies from the incoming request using `req.cookies` within a Next.js API Route. It accesses the `authorization` cookie for further processing.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/02-pages/03-building-your-application/03-data-fetching/03-forms-and-mutations.mdx#_snippet_4

LANGUAGE: typescript
CODE:
```
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const auth = req.cookies.authorization
  // ...
}
```

----------------------------------------

TITLE: Bootstrapping Next.js with Grafbase using pnpm
DESCRIPTION: This command uses `pnpm create` to bootstrap a new Next.js application using the `with-grafbase` example, creating the project in the `with-grafbase-app` directory. It's an alternative for pnpm users.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-grafbase/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-grafbase with-grafbase-app
```

----------------------------------------

TITLE: APIDOC: console
DESCRIPTION: Provides access to the browser's debugging console. It offers methods like `log`, `warn`, and `error` for outputting messages.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_12

LANGUAGE: APIDOC
CODE:
```
console: Provides access to the browser's debugging console
```

----------------------------------------

TITLE: Update Next.js Middleware Cookies API Usage
DESCRIPTION: This snippet illustrates the transition of the Next.js Cookies API in Middleware from a direct `response.cookie` and `response.clearCookie` model to a new `response.cookies` instance. The updated API provides `set`, `getWithOptions`, and `delete` methods for more aligned cookie management.
SOURCE: https://github.com/vercel/next.js/blob/canary/errors/middleware-upgrade-guide.mdx#_snippet_8

LANGUAGE: typescript
CODE:
```
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // create an instance of the class to access the public methods. This uses `next()`,
  // you could use `redirect()` or `rewrite()` as well
  let response = NextResponse.next()
  // get the cookies from the request
  let cookieFromRequest = request.cookies['my-cookie']
  // set the `cookie`
  response.cookie('hello', 'world')
  // set the `cookie` with options
  const cookieWithOptions = response.cookie('hello', 'world', {
    path: '/',
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: 'strict',
    domain: 'example.com',
  })
  // clear the `cookie`
  response.clearCookie('hello')

  return response
}
```

LANGUAGE: typescript
CODE:
```
export function middleware() {
  const response = new NextResponse()

  // set a cookie
  response.cookies.set('vercel', 'fast')

  // set another cookie with options
  response.cookies.set('nextjs', 'awesome', { path: '/test' })

  // get all the details of a cookie
  const { value, ...options } = response.cookies.getWithOptions('vercel')
  console.log(value) // => 'fast'
  console.log(options) // => { name: 'vercel', Path: '/test' }

  // deleting a cookie will mark it as expired
  response.cookies.delete('vercel')

  return response
}
```

----------------------------------------

TITLE: Bootstrap Next.js App with Docker Compose Example
DESCRIPTION: Instructions to initialize a new Next.js project using `create-next-app` with the `with-docker-compose` example. This command sets up the basic project structure using different package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-docker-compose/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-docker-compose with-docker-compose-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-docker-compose with-docker-compose-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-docker-compose with-docker-compose-app
```

----------------------------------------

TITLE: Next.js Image Component `src` Prop Usage Examples
DESCRIPTION: Provides code examples demonstrating various ways to define the `src` prop for the `next/image` component, including relative paths, external URLs, and importing static image files.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/02-components/image.mdx#_snippet_3

LANGUAGE: jsx
CODE:
```
<Image src="/profile.png" />
```

LANGUAGE: jsx
CODE:
```
<Image src="https://example.com/profile.png" />
```

LANGUAGE: jsx
CODE:
```
import profile from './profile.png'

export default function Page() {
  return <Image src={profile} />
}
```

----------------------------------------

TITLE: Define Server-Only Data Fetching Function with Environment Variables in Next.js
DESCRIPTION: Defines an asynchronous function `getData` that fetches data from an external service using an `API_KEY` from environment variables. This example highlights the risk of exposing sensitive server-only environment variables if the module is accidentally imported into a client bundle.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/01-getting-started/08-server-and-client-components.mdx#_snippet_12

LANGUAGE: ts
CODE:
```
export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })

  return res.json()
}
```

LANGUAGE: js
CODE:
```
export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  })

  return res.json()
}
```

----------------------------------------

TITLE: SyntaxError API Documentation
DESCRIPTION: Documents the JavaScript SyntaxError object, representing an error when interpreting syntactically invalid code.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/07-edge.mdx#_snippet_53

LANGUAGE: APIDOC
CODE:
```
SyntaxError:
  Description: Represents an error when trying to interpret syntactically invalid code
```

----------------------------------------

TITLE: exportPathMap Function API Reference
DESCRIPTION: Detailed API documentation for the `exportPathMap` asynchronous function in Next.js. It describes the two arguments received (`defaultPathMap` and an options object) and the structure of the returned object, including the `page` and `query` fields for each path mapping.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/05-config/01-next-config-js/exportPathMap.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:
```
exportPathMap: async function (defaultPathMap, options)
  Arguments:
    defaultPathMap: Object - The default map used by Next.js.
    options: Object - An object containing:
      dev: Boolean - true when called in development, false when running next export.
      dir: String - Absolute path to the project directory.
      outDir: String - Absolute path to the out/ directory (null when dev is true).
      distDir: String - Absolute path to the .next/ directory.
      buildId: String - The generated build ID.
  Returns: Object - A map of pages where the key is the pathname and the value is an object:
    key (pathname): String - The request path.
    value: Object - Configuration for the page:
      page: String - The page inside the pages directory to render.
      query: Object - The query object passed to getInitialProps when prerendering. Defaults to {}.
```

----------------------------------------

TITLE: Next.js `userAgent` Helper API Reference
DESCRIPTION: Reference for the properties available on the object returned by the `userAgent` helper, providing detailed information about the client's browser, device, operating system, engine, CPU, and bot status.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/04-functions/userAgent.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:
```
userAgent(request: NextRequest): object
  isBot: boolean
    description: A boolean indicating whether the request comes from a known bot.
  browser: object
    name: string | undefined
      description: A string representing the browser's name, or undefined if not identifiable.
    version: string | undefined
      description: A string representing the browser's version, or undefined.
  device: object
    model: string | undefined
      description: A string representing the model of the device, or undefined.
    type: string | undefined
      description: A string representing the type of the device, such as 'console', 'mobile', 'tablet', 'smarttv', 'wearable', 'embedded', or undefined.
    vendor: string | undefined
      description: A string representing the vendor of the device, or undefined.
  engine: object
    name: string | undefined
      description: A string representing the engine's name. Possible values include: 'Amaya', 'Blink', 'EdgeHTML', 'Flow', 'Gecko', 'Goanna', 'iCab', 'KHTML', 'Links', 'Lynx', 'NetFront', 'NetSurf', 'Presto', 'Tasman', 'Trident', 'w3m', 'WebKit' or undefined.
    version: string | undefined
      description: A string representing the engine's version, or undefined.
  os: object
    name: string | undefined
      description: A string representing the name of the OS, or undefined.
    version: string | undefined
      description: A string representing the version of the OS, or undefined.
  cpu: object
    architecture: string | undefined
      description: A string representing the architecture of the CPU. Possible values include: '68k', 'amd64', 'arm', 'arm64', 'armhf', 'avr', 'ia32', 'ia64', 'irix', 'irix64', 'mips', 'mips64', 'pa-risc', 'ppc', 'sparc', 'sparc64' or undefined.
```

----------------------------------------

TITLE: Bootstrapping Next.js App with Mux Video Example (Bun)
DESCRIPTION: This command uses `bunx` to initialize a new Next.js project with the `with-mux-video` example. It's for users who prefer Bun as their JavaScript runtime and package manager.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mux-video/README.md#_snippet_3

LANGUAGE: bash
CODE:
```
bunx create-next-app --example with-mux-video with-mux-video-app
```

----------------------------------------

TITLE: Create Next.js App with Supabase Starter Template
DESCRIPTION: Use this command to initialize a new Next.js project pre-configured with the Supabase starter template. Choose your preferred package manager: npx, yarn, or pnpm. This command sets up the basic project structure and integrates Supabase for authentication and data.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-supabase with-supabase-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-supabase with-supabase-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-supabase with-supabase-app
```

----------------------------------------

TITLE: Bootstrapping Next.js App with SFCC using pnpm
DESCRIPTION: This command initializes a new Next.js project named 'nextjs-sfcc-app' using `create-next-app` via `pnpm`. It specifically pulls the 'with-sfcc' example, setting up a headless e-commerce application integrated with Salesforce Commerce Cloud.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-sfcc/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-sfcc nextjs-sfcc-app
```

----------------------------------------

TITLE: Bootstrapping Next.js App with Mux Video Example (pnpm)
DESCRIPTION: This command uses `pnpm create` to set up a new Next.js application based on the `with-mux-video` example. It's suitable for users preferring pnpm as their package manager.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-mux-video/README.md#_snippet_2

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-mux-video with-mux-video-app
```

----------------------------------------

TITLE: Access Current Pathname with usePathname Hook (Client Component)
DESCRIPTION: Demonstrates how to obtain the current URL pathname using the `usePathname` hook within a Next.js Client Component. This is crucial because layouts do not re-render on navigation, making `usePathname` the correct approach for dynamic pathname access in components that need to update. The example shows a simplified breadcrumbs logic.
SOURCE: https://github.com/vercel/next.js/blob/canary/docs/01-app/03-api-reference/03-file-conventions/layout.mdx#_snippet_7

LANGUAGE: tsx
CODE:
```
'use client'

import { usePathname } from 'next/navigation'

// Simplified breadcrumbs logic
export default function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/')

  return (
    <nav>
      {segments.map((segment, index) => (
        <span key={index}>
          {' > '}
          {segment}
        </span>
      ))}
    </nav>
  )
}
```

LANGUAGE: jsx
CODE:
```
'use client'

import { usePathname } from 'next/navigation'

// Simplified breadcrumbs logic
export default function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/')

  return (
    <nav>
      {segments.map((segment, index) => (
        <span key={index}>
          {' > '}
          {segment}
        </span>
      ))}
    </nav>
  )
}
```

----------------------------------------

TITLE: Copy Environment Variables Template File
DESCRIPTION: This command copies the example environment variables file (`.env.local.example`) to `.env.local`. The `.env.local` file is used by Next.js to load environment variables and is typically ignored by Git for security and environment-specific configurations.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/cms-umbraco-heartcore/README.md#_snippet_1

LANGUAGE: bash
CODE:
```
cp .env.local.example .env.local
```

----------------------------------------

TITLE: Bootstrap Next.js App with babel-macros Example
DESCRIPTION: Commands to initialize a new Next.js project pre-configured with the `with-babel-macros` example, using different Node.js package managers.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-babel-macros/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-babel-macros with-babel-macros-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-babel-macros with-babel-macros-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-babel-macros with-babel-macros-app
```

----------------------------------------

TITLE: Initialize Next.js Project with Turbopack Example
DESCRIPTION: These commands demonstrate how to quickly set up a new Next.js project named `with-turbopack-app` using the `with-turbopack` example. They utilize `create-next-app` with different package managers (npm, Yarn, pnpm) to bootstrap the project structure and dependencies.
SOURCE: https://github.com/vercel/next.js/blob/canary/examples/with-turbopack/README.md#_snippet_0

LANGUAGE: bash
CODE:
```
npx create-next-app --example with-turbopack with-turbopack-app
```

LANGUAGE: bash
CODE:
```
yarn create next-app --example with-turbopack with-turbopack-app
```

LANGUAGE: bash
CODE:
```
pnpm create next-app --example with-turbopack with-turbopack-app
```