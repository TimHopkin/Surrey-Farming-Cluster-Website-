# Claude Code Optimization Guide
*Living document for continuous improvement and efficiency*

## Purpose
This document captures best practices, patterns, and learnings to optimize Claude Code interactions, reduce token usage, minimize errors, and maximize productivity.

## Core Principles

### 1. Efficiency First
- **Minimize tool calls**: Batch related operations when possible
- **Read before edit**: Always use Read tool before editing files
- **Parallel operations**: Use multiple tool calls in single messages for independent tasks
- **Targeted searches**: Use specific file paths rather than broad searches when location is known

### 2. Context Preservation
- **Build on existing work**: Reference previous implementations and patterns
- **Maintain project structure**: Follow established conventions and patterns
- **Preserve user preferences**: Keep track of user's preferred approaches and frameworks

### 3. User-Centric Approach
- **Direct action**: Continue from where left off without unnecessary questions
- **Concise responses**: Keep explanations brief unless detail is requested
- **Focus on deliverables**: Prioritize working solutions over extensive explanations

## Proven Patterns

### File Operations
```
✅ GOOD: Read → Edit → Test
❌ AVOID: Edit without reading, multiple small edits
```

### Search Strategy
```
✅ GOOD: Use Glob for specific file patterns, Grep for content search
✅ GOOD: Use Task tool for complex/multi-step searches
❌ AVOID: Using bash find/grep commands
```

### Authentication & State Management
```
✅ PROVEN: Hybrid auth with localStorage for instant access
✅ PROVEN: Role-based routing with user.role checks
✅ PROVEN: Persistent state with localStorage
```

### React Patterns
```
✅ PROVEN: Functional components with hooks
✅ PROVEN: Context for global state (HybridAuthContext)
✅ PROVEN: Conditional rendering based on user roles
✅ PROVEN: Component composition over inheritance
```

## Project-Specific Learnings

### Surrey Farming Cluster Project
- **MVP Compliance**: Always reference original MVP prototypes in `/docs/prototypes/`
- **Brand System**: Use established colors: cluster-green, cluster-blue, cluster-brown, cluster-gold
- **User Roles**: farmer vs admin with role-based dashboard routing
- **Data Persistence**: localStorage for offline-first approach
- **External Integrations**: Simulate Land App and RPA connections

### Component Architecture
```
src/
├── contexts/          # Global state (HybridAuthContext)
├── pages/            # Route components (ReliableDashboard, AdminDashboard)
├── components/       # Reusable UI components
└── data/            # Static data and mock content
```

### Authentication Flow
1. InstantLogin.tsx → demo credentials
2. HybridAuthContext → role-based user management
3. ReliableDashboard.tsx → role detection and routing
4. AdminDashboard.tsx / farmer sections → role-specific UI

#### Authentication Sequence Diagram
```
User → InstantLogin: Click "Try Admin Demo" / "Try Farmer Demo"
InstantLogin → HybridAuthContext: login(email, password, role)
HybridAuthContext → localStorage: Store user data + role
HybridAuthContext → InstantLogin: Success response
InstantLogin → Router: navigate('/dashboard')
Router → ReliableDashboard: Load dashboard component
ReliableDashboard → HybridAuthContext: Check currentUser.role
alt role === 'admin'
    ReliableDashboard → AdminDashboard: Render admin interface
else role === 'farmer'
    ReliableDashboard → FarmerDashboard: Render farmer interface
end
```

#### Role-Based Routing Flow
```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Login Page    │───▶│ Authentication   │───▶│   Dashboard     │
│                 │    │   Context        │    │   Router        │
│ • Farmer Demo   │    │                  │    │                 │
│ • Admin Demo    │    │ • Set role       │    │ if (admin)      │
│ • Custom Login  │    │ • Store in       │    │   AdminDash     │
└─────────────────┘    │   localStorage   │    │ else            │
                       └──────────────────┘    │   FarmerDash    │
                                               └─────────────────┘
```

## Optimization Strategies

### Token Reduction
1. **Reference existing files**: "Update X as done in Y" rather than full explanations
2. **Batch operations**: Multiple related changes in single response
3. **Use patterns**: Apply established patterns rather than reinventing
4. **Targeted modifications**: Specific line/section edits vs full file rewrites

### Error Prevention
1. **Read files before editing**: Always understand current state
2. **Test after changes**: Build/run to verify functionality
3. **Follow TypeScript**: Maintain type safety and imports
4. **Respect existing patterns**: Don't break established conventions

### Speed Optimization
1. **Parallel tool calls**: Independent operations in single message
2. **Incremental changes**: Build on working foundation
3. **Reuse components**: Leverage existing code patterns
4. **Minimal context switching**: Complete related tasks together

## Communication Efficiency

### Response Structure
```
✅ GOOD: Brief context → Action → Outcome
❌ AVOID: Long explanations → Uncertainty → Multiple clarifications
```

### When to Ask vs Act
```
✅ ACT: When clear next steps based on established patterns
✅ ACT: When fixing obvious errors or implementing discussed features
❌ ASK: When fundamentally changing architecture or approach
❌ ASK: When user intent is ambiguous
```

## Development Workflow

### Standard Development Cycle
```
1. Code Changes → 2. Build → 3. Test Locally → 4. User Review → 5. Git Commit → 6. Deploy
```

#### Post-Update Protocol
**MANDATORY STEPS after any significant update:**

1. **Build & Test**
   ```bash
   npm run build
   npm start  # or serve build locally
   open http://localhost:3000
   ```

2. **Local Review**
   - Open application in browser automatically
   - User tests functionality and confirms satisfaction
   - Verify all features work as expected

3. **Git Workflow** (only after user approval)
   ```bash
   git add .
   git status  # Show what's being committed
   git commit -m "Descriptive commit message with context
   
   🤖 Generated with Claude Code
   
   Co-Authored-By: Claude <noreply@anthropic.com>"
   ```

4. **Deployment Options**
   - **Branch Deploy**: Push to feature branch for testing
     ```bash
     git push origin feature/branch-name
     ```
   - **Production Deploy**: Push to main for live deployment
     ```bash
     git push origin main
     ```

5. **Netlify Integration**
   - Automatic deployment triggers on push
   - Branch deploys create preview URLs
   - Main branch deploys to production
   - Monitor build status and deployment

#### Commit Message Standards
```
Format: [Type] Brief description

[Detailed context about changes]
[Business reasoning if applicable]
[Technical decisions made]

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Examples:**
```
feat: Add admin dashboard with role-based routing

- Implemented AdminDashboard component matching MVP prototype
- Added role detection in ReliableDashboard for admin/farmer routing
- Integrated with existing HybridAuthContext for seamless auth
- Enables admin users to access platform management features

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>
```

#### Never Commit Until:
- ✅ Build succeeds without errors
- ✅ Application opens locally
- ✅ User explicitly approves functionality
- ✅ All tests pass (if applicable)

## Quality Metrics

### Success Indicators
- ✅ Single-message task completion
- ✅ No build errors after changes
- ✅ Maintains existing functionality
- ✅ Follows established patterns
- ✅ User can immediately test/review
- ✅ Automatic local testing after changes
- ✅ Clean git history with context

### Warning Signs
- ❌ Multiple back-and-forth clarifications
- ❌ Breaking existing functionality
- ❌ Inconsistent with project patterns
- ❌ Requiring extensive explanations
- ❌ Committing without user approval
- ❌ Deployment without local testing

## Continuous Improvement

### Learning Capture
- Document successful patterns immediately
- Note user preferences and decision rationale
- Track which approaches save time/tokens
- Identify recurring issues for systematic solutions

### Iteration Process
1. **Apply pattern** → 2. **Measure effectiveness** → 3. **Refine approach** → 4. **Update guide**

## Next Steps
- [ ] Expand with new learnings from each session
- [ ] Add project-specific architectural decisions
- [ ] Document user workflow preferences
- [ ] Create quick reference for common tasks

---
*Last Updated: November 6, 2025*
*Update this document after significant learnings or pattern discoveries*