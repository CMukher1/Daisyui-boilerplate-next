├── public/                    # Static files like images, fonts, etc.
├── src/
│   ├── components/            # Reusable components across your project
│   │   ├── Header.jsx         # Example component
│   │   └── Footer.jsx         # Example component
│   ├── pages/                 # Pages directory for Next.js routing
│   │   ├── _app.tsx           # Overrides the default App component, setup React Query
│   │   ├── _document.tsx      # Overrides the default Document component
│   │   └── index.tsx          # Home page
│   ├── styles/                # Global styles directory
│   │   ├── globals.css        # Global styles
│   │   └── Home.module.css    # CSS module for Home page
│   ├── lib/                   # Common libraries or functions
│   │   ├── api/               # API interaction logic, possibly generated by OpenAPI
│   │   │   └── useApiHooks.js # React Query hooks for API calls
│   │   └── api.js             # API related functions
│   ├── hooks/                 # Custom React hooks
│   │   └── useUser.js         # Example custom hook
│   ├── api/                   # API routes for Next.js
│   │   └── hello.js           # Example API route
│   └── models/                # Data models (if using ORM or similar)
│       └── user.js            # User model
├── .next/                     # Next.js build directory
├── node_modules/              # Node modules
├── pages/                     # (If not using src folder) Pages for Next.js routing
├── styles/                    # Styles if not under src
│   └── globals.css            # Global styles
├── .env.local                 # Local environment variables
├── next.config.js             # Next.js configuration file
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project metadata and dependencies
└── yarn.lock                  # Yarn lock file (don't edit manually)