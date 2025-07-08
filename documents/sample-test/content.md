TITLE: Email and password login
DESCRIPTION: Standard email and password authentication system for user login
SOURCE: https://example.com/auth/email
LANGUAGE: javascript
CODE:
```
const login = async (email, password) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return response.json();
};
```

----------------------------------------

TITLE: Social media login
DESCRIPTION: OAuth-based authentication using social media providers like Google, Facebook, GitHub
SOURCE: https://example.com/auth/social
LANGUAGE: javascript
CODE:
```
const socialLogin = (provider) => {
  window.location.href = `/api/auth/${provider}`;
};
```

----------------------------------------

TITLE: Two-factor authentication
DESCRIPTION: Enhanced security with SMS or app-based two-factor authentication
SOURCE: https://example.com/auth/2fa
LANGUAGE: javascript
CODE:
```
const enable2FA = async (userId) => {
  const response = await fetch('/api/2fa/enable', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({ userId })
  });
  return response.json();
};
```

----------------------------------------

TITLE: Biometric authentication
DESCRIPTION: Modern biometric authentication using fingerprint or face recognition
SOURCE: https://example.com/auth/biometric
LANGUAGE: javascript
CODE:
```
const biometricAuth = async () => {
  if ('credentials' in navigator) {
    const credential = await navigator.credentials.create({
      publicKey: publicKeyCredentialCreationOptions
    });
    return credential;
  }
  throw new Error('Biometric auth not supported');
};
```

----------------------------------------

TITLE: Single sign-on (SSO)
DESCRIPTION: Enterprise SSO integration with SAML and OIDC providers
SOURCE: https://example.com/auth/sso
LANGUAGE: javascript
CODE:
```
const initSSO = (provider, returnUrl) => {
  const ssoUrl = `/api/sso/${provider}?return=${encodeURIComponent(returnUrl)}`;
  window.location.href = ssoUrl;
};
```

----------------------------------------

TITLE: Old password system
DESCRIPTION: Legacy password authentication system (deprecated)
SOURCE: https://example.com/auth/legacy
LANGUAGE: javascript
CODE:
```
// DEPRECATED: Use new authentication system instead
const oldLogin = (username, password) => {
  return fetch('/api/old-login', {
    method: 'POST',
    body: `username=${username}&password=${password}`
  });
};
```

----------------------------------------

TITLE: Deprecated OAuth flow
DESCRIPTION: Old OAuth 1.0 implementation that has been replaced
SOURCE: https://example.com/auth/oauth-old
LANGUAGE: javascript
CODE:
```
// DEPRECATED: Migrate to OAuth 2.0
const oauth1Flow = (consumerKey, consumerSecret) => {
  // Old OAuth 1.0 implementation
  return generateOAuth1Headers(consumerKey, consumerSecret);
};
```

----------------------------------------

TITLE: Legacy token management
DESCRIPTION: Old token system with security vulnerabilities
SOURCE: https://example.com/auth/tokens-old
LANGUAGE: javascript
CODE:
```
// DEPRECATED: Security vulnerabilities, use JWT instead
const generateLegacyToken = (userId) => {
  return btoa(`${userId}:${Date.now()}`);
};
```

----------------------------------------

TITLE: Outdated session handling
DESCRIPTION: Old session management with server-side storage
SOURCE: https://example.com/auth/sessions-old
LANGUAGE: javascript
CODE:
```
// DEPRECATED: Use JWT-based sessions
const createSession = (userId) => {
  sessions[Math.random().toString(36)] = { userId, created: Date.now() };
};
```

----------------------------------------

TITLE: JWT tokens
DESCRIPTION: Modern JWT-based authentication with secure token handling
SOURCE: https://example.com/auth/jwt
LANGUAGE: javascript
CODE:
```
const generateJWT = (payload, secret) => {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

const verifyJWT = (token, secret) => {
  return jwt.verify(token, secret);
};
```

----------------------------------------

TITLE: OAuth 2.0 flow
DESCRIPTION: Modern OAuth 2.0 implementation with PKCE support
SOURCE: https://example.com/auth/oauth2
LANGUAGE: javascript
CODE:
```
const initOAuth2 = async (clientId, redirectUri) => {
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  
  const authUrl = `https://provider.com/oauth/authorize?` +
    `client_id=${clientId}&` +
    `redirect_uri=${redirectUri}&` +
    `code_challenge=${codeChallenge}&` +
    `code_challenge_method=S256`;
    
  window.location.href = authUrl;
};
```

----------------------------------------

TITLE: Advanced encryption
DESCRIPTION: End-to-end encryption for sensitive data protection
SOURCE: https://example.com/security/encryption
LANGUAGE: javascript
CODE:
```
const encryptSensitiveData = async (data, publicKey) => {
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  
  const encrypted = await window.crypto.subtle.encrypt(
    { name: 'RSA-OAEP' },
    publicKey,
    dataBuffer
  );
  
  return arrayBufferToBase64(encrypted);
};
```

----------------------------------------

TITLE: Security auditing
DESCRIPTION: Comprehensive security audit logging and monitoring
SOURCE: https://example.com/security/audit
LANGUAGE: javascript
CODE:
```
const logSecurityEvent = (event, userId, metadata) => {
  const auditLog = {
    timestamp: new Date().toISOString(),
    event,
    userId,
    ip: getClientIP(),
    userAgent: getUserAgent(),
    metadata
  };
  
  audit.log(auditLog);
};
```

----------------------------------------

TITLE: Compliance monitoring
DESCRIPTION: GDPR, HIPAA, and SOC2 compliance monitoring tools
SOURCE: https://example.com/security/compliance
LANGUAGE: javascript
CODE:
```
const checkComplianceStatus = async (dataType) => {
  const rules = await getComplianceRules(dataType);
  const violations = await scanForViolations(rules);
  
  return {
    compliant: violations.length === 0,
    violations,
    lastChecked: new Date().toISOString()
  };
};
```

----------------------------------------

TITLE: User management API
DESCRIPTION: RESTful API for managing user accounts and profiles
SOURCE: https://example.com/api/users
LANGUAGE: javascript
CODE:
```
// GET /api/users
const getUsers = async (page = 1, limit = 10) => {
  const response = await fetch(`/api/users?page=${page}&limit=${limit}`);
  return response.json();
};

// POST /api/users
const createUser = async (userData) => {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return response.json();
};
```

----------------------------------------

TITLE: Data operations API
DESCRIPTION: CRUD operations for application data management
SOURCE: https://example.com/api/data
LANGUAGE: javascript
CODE:
```
const dataAPI = {
  create: (table, data) => fetch(`/api/data/${table}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }),
  
  read: (table, id) => fetch(`/api/data/${table}/${id}`),
  
  update: (table, id, data) => fetch(`/api/data/${table}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }),
  
  delete: (table, id) => fetch(`/api/data/${table}/${id}`, {
    method: 'DELETE'
  })
};
```

----------------------------------------

TITLE: File upload API
DESCRIPTION: RESTful API for handling file uploads with validation
SOURCE: https://example.com/api/upload
LANGUAGE: javascript
CODE:
```
const uploadFile = async (file, onProgress) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const xhr = new XMLHttpRequest();
  
  if (onProgress) {
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        onProgress((e.loaded / e.total) * 100);
      }
    };
  }
  
  return new Promise((resolve, reject) => {
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = reject;
    xhr.open('POST', '/api/upload');
    xhr.send(formData);
  });
};
```

----------------------------------------

TITLE: Legacy REST endpoints
DESCRIPTION: Old API endpoints that are being phased out
SOURCE: https://example.com/api/legacy
LANGUAGE: javascript
CODE:
```
// DEPRECATED: Use new /api/v2/ endpoints instead
const legacyAPI = {
  getUser: (id) => fetch(`/api/v1/user/${id}`),
  updateUser: (id, data) => fetch(`/api/v1/user/${id}`, {
    method: 'POST', // Should be PUT in modern API
    body: JSON.stringify(data)
  })
};
```

----------------------------------------

TITLE: Deprecated webhooks
DESCRIPTION: Old webhook system with unreliable delivery
SOURCE: https://example.com/api/webhooks-old
LANGUAGE: javascript
CODE:
```
// DEPRECATED: Use new event-driven webhook system
const oldWebhook = (url, data) => {
  // Unreliable delivery, no retry mechanism
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data)
  }).catch(() => {
    // Silent failure - bad practice
  });
};
```

----------------------------------------

TITLE: Query operations
DESCRIPTION: GraphQL queries for fetching data with flexible field selection
SOURCE: https://example.com/graphql/query
LANGUAGE: graphql
CODE:
```
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    profile {
      avatar
      bio
      createdAt
    }
    posts {
      id
      title
      content
      publishedAt
    }
  }
}
```

----------------------------------------

TITLE: Mutation operations
DESCRIPTION: GraphQL mutations for creating and updating data
SOURCE: https://example.com/graphql/mutation
LANGUAGE: graphql
CODE:
```
mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    content
    author {
      id
      name
    }
    publishedAt
  }
}

mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    id
    name
    email
    updatedAt
  }
}
```

----------------------------------------

TITLE: Subscription operations
DESCRIPTION: GraphQL subscriptions for real-time data updates
SOURCE: https://example.com/graphql/subscription
LANGUAGE: graphql
CODE:
```
subscription OnPostUpdated($authorId: ID!) {
  postUpdated(authorId: $authorId) {
    id
    title
    content
    publishedAt
    author {
      id
      name
    }
  }
}

subscription OnUserOnline {
  userOnline {
    id
    name
    status
    lastSeen
  }
}
```

----------------------------------------

TITLE: Create records
DESCRIPTION: Database operations for creating new records with validation
SOURCE: https://example.com/db/create
LANGUAGE: javascript
CODE:
```
const createRecord = async (table, data) => {
  const validatedData = await validateSchema(table, data);
  
  const query = `
    INSERT INTO ${table} (${Object.keys(validatedData).join(', ')})
    VALUES (${Object.keys(validatedData).map(() => '?').join(', ')})
  `;
  
  const result = await db.execute(query, Object.values(validatedData));
  return { id: result.insertId, ...validatedData };
};
```

----------------------------------------

TITLE: Read records
DESCRIPTION: Database operations for querying and retrieving records
SOURCE: https://example.com/db/read
LANGUAGE: javascript
CODE:
```
const readRecords = async (table, options = {}) => {
  const { where, orderBy, limit, offset } = options;
  
  let query = `SELECT * FROM ${table}`;
  const params = [];
  
  if (where) {
    query += ` WHERE ${where.field} = ?`;
    params.push(where.value);
  }
  
  if (orderBy) {
    query += ` ORDER BY ${orderBy.field} ${orderBy.direction || 'ASC'}`;
  }
  
  if (limit) {
    query += ` LIMIT ?`;
    params.push(limit);
    
    if (offset) {
      query += ` OFFSET ?`;
      params.push(offset);
    }
  }
  
  return db.execute(query, params);
};
```

----------------------------------------

TITLE: Update records
DESCRIPTION: Database operations for updating existing records
SOURCE: https://example.com/db/update
LANGUAGE: javascript
CODE:
```
const updateRecord = async (table, id, data) => {
  const validatedData = await validateSchema(table, data);
  
  const setClause = Object.keys(validatedData)
    .map(key => `${key} = ?`)
    .join(', ');
  
  const query = `
    UPDATE ${table} 
    SET ${setClause}, updated_at = NOW()
    WHERE id = ?
  `;
  
  const params = [...Object.values(validatedData), id];
  const result = await db.execute(query, params);
  
  return result.affectedRows > 0;
};
```

----------------------------------------

TITLE: Delete records
DESCRIPTION: Database operations for removing records with soft delete support
SOURCE: https://example.com/db/delete
LANGUAGE: javascript
CODE:
```
const deleteRecord = async (table, id, softDelete = true) => {
  let query, params;
  
  if (softDelete) {
    query = `UPDATE ${table} SET deleted_at = NOW() WHERE id = ?`;
    params = [id];
  } else {
    query = `DELETE FROM ${table} WHERE id = ?`;
    params = [id];
  }
  
  const result = await db.execute(query, params);
  return result.affectedRows > 0;
};
```

----------------------------------------

TITLE: Complex joins
DESCRIPTION: Advanced database queries with multiple table joins
SOURCE: https://example.com/db/joins
LANGUAGE: sql
CODE:
```
SELECT 
  u.id as user_id,
  u.name as user_name,
  p.id as post_id,
  p.title as post_title,
  c.id as comment_id,
  c.content as comment_content,
  cu.name as commenter_name
FROM users u
LEFT JOIN posts p ON u.id = p.author_id
LEFT JOIN comments c ON p.id = c.post_id
LEFT JOIN users cu ON c.user_id = cu.id
WHERE u.active = 1
  AND p.published_at IS NOT NULL
  AND (c.deleted_at IS NULL OR c.deleted_at > NOW() - INTERVAL 30 DAY)
ORDER BY p.published_at DESC, c.created_at ASC;
```

----------------------------------------

TITLE: Aggregation functions
DESCRIPTION: Database queries using GROUP BY, COUNT, SUM and other aggregation functions
SOURCE: https://example.com/db/aggregation
LANGUAGE: sql
CODE:
```
SELECT 
  u.id,
  u.name,
  COUNT(p.id) as post_count,
  COUNT(c.id) as comment_count,
  AVG(p.view_count) as avg_post_views,
  MAX(p.published_at) as latest_post,
  SUM(CASE WHEN p.featured = 1 THEN 1 ELSE 0 END) as featured_posts
FROM users u
LEFT JOIN posts p ON u.id = p.author_id
LEFT JOIN comments c ON u.id = c.user_id
WHERE u.created_at >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
GROUP BY u.id, u.name
HAVING post_count > 5
ORDER BY post_count DESC, avg_post_views DESC;
```

----------------------------------------

TITLE: Full-text search
DESCRIPTION: Database full-text search capabilities with ranking and relevance
SOURCE: https://example.com/db/search
LANGUAGE: sql
CODE:
```
SELECT 
  p.*,
  MATCH(p.title, p.content) AGAINST(? IN NATURAL LANGUAGE MODE) as relevance_score,
  u.name as author_name
FROM posts p
JOIN users u ON p.author_id = u.id
WHERE MATCH(p.title, p.content) AGAINST(? IN NATURAL LANGUAGE MODE)
  AND p.published_at IS NOT NULL
  AND p.deleted_at IS NULL
ORDER BY relevance_score DESC, p.published_at DESC
LIMIT 20;
```

----------------------------------------

TITLE: Legacy table structure
DESCRIPTION: Old database schema with denormalized data (deprecated)
SOURCE: https://example.com/db/legacy-schema
LANGUAGE: sql
CODE:
```
-- DEPRECATED: This table structure has been replaced
-- Use normalized user_profiles and user_settings tables instead
CREATE TABLE old_users (
  id INT PRIMARY KEY,
  username VARCHAR(50),
  email VARCHAR(100),
  password_hash VARCHAR(255),
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  full_address TEXT, -- Should be normalized
  preferences JSON, -- Should be separate table
  created_at TIMESTAMP,
  -- Many more denormalized fields...
  subscription_type VARCHAR(20),
  billing_address TEXT,
  payment_method VARCHAR(50)
);
```

----------------------------------------

TITLE: Outdated relationships
DESCRIPTION: Old foreign key relationships that caused performance issues
SOURCE: https://example.com/db/legacy-relations
LANGUAGE: sql
CODE:
```
-- DEPRECATED: These relationships caused circular dependencies
-- Use the new schema with proper junction tables

ALTER TABLE old_posts 
ADD CONSTRAINT fk_post_category 
FOREIGN KEY (category_id) REFERENCES old_categories(id);

-- This created issues with cascading deletes
ALTER TABLE old_comments
ADD CONSTRAINT fk_comment_post
FOREIGN KEY (post_id) REFERENCES old_posts(id) ON DELETE CASCADE;
```

----------------------------------------

TITLE: Deprecated indexes
DESCRIPTION: Database indexes that are no longer optimal for current queries
SOURCE: https://example.com/db/legacy-indexes
LANGUAGE: sql
CODE:
```
-- DEPRECATED: These indexes are no longer used
-- Remove after migrating to new query patterns

CREATE INDEX idx_old_user_email ON old_users(email);
CREATE INDEX idx_old_post_date ON old_posts(created_date); -- Wrong column name
CREATE INDEX idx_old_composite ON old_posts(author_id, category_id, status); -- Wrong order
```

----------------------------------------

TITLE: v1 API endpoints
DESCRIPTION: First version API endpoints that lack proper error handling
SOURCE: https://example.com/api/v1
LANGUAGE: javascript
CODE:
```
// DEPRECATED: v1 API endpoints
// Use /api/v2/ endpoints for better error handling and validation

app.get('/api/v1/users', (req, res) => {
  // No input validation
  // No proper error handling
  // No pagination
  const users = db.query('SELECT * FROM users');
  res.json(users); // Exposes sensitive data
});

app.post('/api/v1/users', (req, res) => {
  // No input sanitization
  const user = db.insert('users', req.body);
  res.json(user);
});
```

----------------------------------------

TITLE: Beta features
DESCRIPTION: Experimental features that were never fully implemented
SOURCE: https://example.com/features/beta
LANGUAGE: javascript
CODE:
```
// DEPRECATED: Beta features that were discontinued
// These were experimental and never reached production quality

const betaFeatures = {
  aiRecommendations: (userId) => {
    // Incomplete AI implementation
    return mockRecommendations;
  },
  
  realTimeCollaboration: (documentId) => {
    // WebSocket implementation that had sync issues
    return new BrokenWebSocket(documentId);
  },
  
  advancedAnalytics: (timeRange) => {
    // Heavy queries that caused performance issues
    return expensiveAnalyticsQuery(timeRange);
  }
};
```

----------------------------------------

TITLE: Experimental functionality
DESCRIPTION: Proof-of-concept features that were removed due to instability
SOURCE: https://example.com/features/experimental
LANGUAGE: javascript
CODE:
```
// DEPRECATED: Experimental features removed due to instability
// These caused memory leaks and performance degradation

const experimentalFeatures = {
  infiniteScroll: (container) => {
    // Memory leak issues with DOM manipulation
    return new LeakyInfiniteScroll(container);
  },
  
  dynamicThemes: (userId) => {
    // CSS injection vulnerabilities
    return new UnsafeThemeEngine(userId);
  },
  
  predictiveLoading: (userBehavior) => {
    // Excessive resource usage
    return new ResourceHungryPreloader(userBehavior);
  }
};
```

----------------------------------------