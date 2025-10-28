# Contributing to LMS Community Platform

First off, thank you for considering contributing to LMS Community Platform! It's people like you that make this project a great tool for education.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Process](#development-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to pendtiumpraz@gmail.com.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- PostgreSQL database
- Git
- Google Cloud Console account (for OAuth & Drive API)

### Setting Up Your Development Environment

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/lms-community.git
   cd lms-community
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/pendtiumpraz/lms-community.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

6. **Set up database**
   ```bash
   createdb lms_db_dev
   npx prisma migrate dev
   npx prisma generate
   ```

7. **Start development server**
   ```bash
   npm run dev
   ```

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

**Bug Report Template:**

```markdown
## Bug Description
A clear and concise description of the bug.

## To Reproduce
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected Behavior
What you expected to happen.

## Screenshots
If applicable, add screenshots.

## Environment
- OS: [e.g. Windows 10, macOS 12.0]
- Browser: [e.g. Chrome 120, Safari 16]
- Node.js version: [e.g. 18.17.0]
- Database: [e.g. PostgreSQL 15]

## Additional Context
Any other context about the problem.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

**Enhancement Template:**

```markdown
## Feature Description
A clear description of the feature.

## Problem It Solves
What problem does this feature solve?

## Proposed Solution
How would you implement this?

## Alternatives Considered
What other solutions have you considered?

## Additional Context
Screenshots, mockups, or examples.
```

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:

- `good first issue` - Simple issues for beginners
- `help wanted` - Issues that need attention
- `documentation` - Documentation improvements

## 🔧 Development Process

### Branch Naming Convention

Use descriptive branch names:

- `feature/add-user-profile` - New features
- `fix/login-redirect-bug` - Bug fixes
- `docs/update-readme` - Documentation updates
- `refactor/auth-logic` - Code refactoring
- `test/add-unit-tests` - Test additions
- `chore/update-dependencies` - Maintenance tasks

### Making Changes

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow the coding standards below
   - Add tests if applicable
   - Update documentation as needed

3. **Test your changes**
   ```bash
   npm run lint        # Check for linting errors
   npm run build       # Ensure build succeeds
   npm run test        # Run tests (if available)
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add user profile page"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

## 📝 Coding Standards

### TypeScript

- Use TypeScript for all code
- Define proper types and interfaces
- Avoid using `any` type
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

**Example:**
```typescript
/**
 * Retrieves user profile by ID
 * @param userId - The unique identifier of the user
 * @returns Promise resolving to user profile or null
 */
async function getUserProfile(userId: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: { id: userId },
  });
}
```

### React Components

- Use functional components with hooks
- Implement proper prop types with TypeScript
- Keep components small and focused
- Use meaningful component names
- Extract reusable logic into custom hooks

**Example:**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export function Button({ variant, onClick, children, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn('btn', `btn-${variant}`)}
    >
      {children}
    </button>
  );
}
```

### File Structure

- Place components in appropriate directories:
  - `src/components/shared/` - Reusable components
  - `src/components/dashboard/` - Dashboard-specific
  - `src/components/public/` - Public-facing components
- Keep related files together
- Use index.ts for barrel exports

### Styling

- Use Tailwind CSS classes
- Follow mobile-first approach
- Use the cn() utility for conditional classes
- Maintain consistent spacing and sizing

### API Routes

- Follow RESTful conventions
- Use proper HTTP methods (GET, POST, PUT, DELETE)
- Return consistent response formats
- Include proper error handling
- Add authentication/authorization checks

**Example:**
```typescript
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await fetchData();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
```

## 📨 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements

### Examples

```bash
feat(auth): add password reset functionality

Implement password reset flow with email verification.
Includes new API routes and email templates.

Closes #123

---

fix(dashboard): resolve student enrollment count issue

The enrollment count was showing incorrect values due to
deleted records being included in the count.

---

docs(readme): update installation instructions

Add detailed steps for PostgreSQL setup and Google OAuth configuration.
```

## 🔄 Pull Request Process

1. **Update your fork**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Ensure your code meets all requirements**
   - All tests pass
   - Code follows style guidelines
   - Documentation is updated
   - No merge conflicts

3. **Create a Pull Request**
   - Use a descriptive title
   - Fill out the PR template completely
   - Link related issues
   - Request reviews from maintainers

4. **PR Template**

```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

## Related Issues
Fixes #(issue number)

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
Describe the tests you ran and how to reproduce them.

## Screenshots (if applicable)
Add screenshots to demonstrate changes.

## Checklist
- [ ] My code follows the project's coding standards
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have updated the documentation accordingly
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
```

5. **Address Review Comments**
   - Be responsive to feedback
   - Make requested changes promptly
   - Push updates to the same branch

6. **After Approval**
   - Maintainers will merge your PR
   - Delete your branch after merge
   - Update your local repository

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Write tests for new features
- Update tests when modifying existing code
- Aim for high code coverage
- Test edge cases and error conditions

## 📚 Documentation

### Code Documentation

- Add JSDoc comments for functions and classes
- Document complex algorithms
- Include examples in documentation
- Keep comments up-to-date

### User Documentation

- Update README.md for user-facing changes
- Add guides for new features
- Include screenshots and examples
- Keep documentation clear and concise

## 🏗️ Project Architecture

### Key Directories

```
src/
├── app/              # Next.js App Router pages and API routes
├── components/       # React components
├── lib/             # Utilities, services, and helpers
├── hooks/           # Custom React hooks
├── types/           # TypeScript type definitions
└── middleware.ts    # Route protection middleware
```

### State Management

- Use React hooks for local state
- Server components for data fetching
- Server actions for mutations

### Database

- Use Prisma ORM for database operations
- Create migrations for schema changes
- Use transactions for complex operations

## 🔒 Security

### Reporting Security Issues

**Do not open public issues for security vulnerabilities.**

Email security concerns to: pendtiumpraz@gmail.com

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fixes (if any)

### Security Best Practices

- Never commit sensitive data (.env files, keys)
- Validate all user inputs
- Use parameterized queries (Prisma handles this)
- Implement proper authentication checks
- Follow OWASP guidelines

## 💬 Communication

### Channels

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - Questions and general discussion
- **Email** - pendtiumpraz@gmail.com

### Response Times

- Issues: Within 48 hours
- Pull Requests: Within 72 hours
- Security Issues: Within 24 hours

## 🎉 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project credits

Thank you for contributing to LMS Community Platform! 🚀

---

**Questions?** Feel free to reach out via [GitHub Issues](https://github.com/pendtiumpraz/lms-community/issues) or email.
