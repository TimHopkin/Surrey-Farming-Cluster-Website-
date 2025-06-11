# Surrey Farming Cluster - Brand System Implementation Guide

## 🚀 **Quick Start**

To use the central brand system in any prototype or production file:

### **1. Import the Brand System**
```html
<!-- In your HTML <head> section -->
<link rel="stylesheet" href="../brand/brand-system.css">
<link rel="stylesheet" href="../brand/components.css">
```

### **2. Use Brand Classes**
```html
<!-- Instead of inline Tailwind config -->
<button class="btn btn-primary">Primary Action</button>
<div class="card">Content here</div>
<section class="hero-section">Hero content</section>
```

### **3. Apply Portal-Specific Styling**
```html
<!-- Farmer Portal -->
<div class="portal-farmer">
  <span class="portal-badge">FARMER</span>
  <button class="btn btn-primary">Farmer Action</button>
</div>

<!-- Admin Portal -->
<div class="portal-admin">
  <span class="portal-badge">ADMIN</span>
  <button class="btn btn-admin">Admin Action</button>
</div>
```

---

## 📁 **File Updates Required**

To migrate your prototype files to use the central brand system:

### **Step 1: Update HTML Files**

**Replace this:**
```html
<script>
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    'cluster-green': '#2E7D32',
                    // ... inline config
                }
            }
        }
    }
</script>
```

**With this:**
```html
<link rel="stylesheet" href="../brand/brand-system.css">
<link rel="stylesheet" href="../brand/components.css">
```

### **Step 2: Replace Classes**

**Old Tailwind Classes → New Brand Classes**

| Old | New |
|-----|-----|
| `bg-cluster-green hover:bg-green-700` | `btn btn-primary` |
| `px-6 py-3 rounded-md text-white` | `btn` |
| `bg-white p-6 rounded-lg shadow` | `card` |
| `max-w-7xl mx-auto px-4` | `container` |
| `py-16` | `section` |

### **Step 3: Update Components**

**Navigation:**
```html
<!-- Old -->
<nav class="bg-white shadow-lg">
  <div class="max-w-7xl mx-auto px-4">
    <!-- content -->
  </div>
</nav>

<!-- New -->
<nav class="site-header">
  <div class="container">
    <!-- content -->
  </div>
</nav>
```

**Buttons:**
```html
<!-- Old -->
<button class="bg-cluster-green text-white px-6 py-3 rounded-md hover:bg-green-700">

<!-- New -->
<button class="btn btn-primary">
```

**Cards:**
```html
<!-- Old -->
<div class="bg-white p-6 rounded-lg shadow">

<!-- New -->
<div class="card">
```

---

## 🎨 **Available Components**

### **Layout Components**
- `.container` - Max-width container with responsive padding
- `.section` - Consistent section padding
- `.site-header` - Sticky header with shadow

### **Button Components**
- `.btn` - Base button styles
- `.btn-primary` - Green primary button
- `.btn-secondary` - Outlined green button
- `.btn-accent` - Gold accent button
- `.btn-info` - Blue info button
- `.btn-admin` - Brown admin button
- `.btn-sm` - Small button size
- `.btn-lg` - Large button size

### **Card Components**
- `.card` - Base card with shadow and padding
- `.card-elevated` - Card with larger shadow
- `.feature-card` - Cards for farm/feature listings
- `.stat-card` - Dashboard statistic cards

### **Navigation Components**
- `.nav-item` - Sidebar navigation items
- `.nav-item.active` - Active navigation state

### **Status Components**
- `.status` - Base status badge
- `.status-success` - Green success badge
- `.status-warning` - Yellow warning badge
- `.status-info` - Blue info badge
- `.status-error` - Red error badge

### **Portal Components**
- `.portal-farmer` - Farmer portal theming
- `.portal-admin` - Admin portal theming
- `.portal-badge` - Portal identification badges

### **Form Components**
- `.form-group` - Form field grouping
- `.form-label` - Consistent form labels
- `.form-input` - Text inputs with focus styles
- `.form-select` - Select dropdowns
- `.form-textarea` - Textarea inputs
- `.form-checkbox` - Checkbox styling
- `.form-help` - Help text styling
- `.form-error` - Error message styling

### **Modal Components**
- `.modal-overlay` - Full-screen modal backdrop
- `.modal-content` - Modal dialog box
- `.modal-header` - Modal header with title/close
- `.modal-body` - Modal content area
- `.modal-actions` - Modal button area

### **Notification Components**
- `.notification` - Base notification styling
- `.notification.success` - Success notifications
- `.notification.warning` - Warning notifications
- `.notification.info` - Info notifications
- `.notification.error` - Error notifications

---

## 🎯 **Portal-Specific Implementation**

### **Farmer Portal Files**
Update these files to use farmer theming:

1. `farmer/login.html`
2. `farmer/register.html`
3. `farmer/dashboard.html`

**Add portal class:**
```html
<body class="portal-farmer">
```

**Use farmer-specific styling:**
```html
<div class="portal-badge">FARMER</div>
<button class="btn btn-primary">Farmer Action</button>
```

### **Admin Portal Files**
Update these files to use admin theming:

1. `admin/login.html`
2. `admin/dashboard.html`

**Add portal class:**
```html
<body class="portal-admin">
```

**Use admin-specific styling:**
```html
<div class="portal-badge">ADMIN</div>
<button class="btn btn-admin">Admin Action</button>
```

---

## 🔧 **CSS Custom Properties Usage**

Access brand variables in your custom CSS:

```css
.custom-component {
  background-color: var(--cluster-green);
  color: var(--white);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-fast);
}

.custom-component:hover {
  background-color: var(--cluster-green-dark);
  transform: translateY(-2px);
}
```

### **Available CSS Variables**

**Colors:**
- `--cluster-green`, `--cluster-brown`, `--cluster-gold`, `--cluster-blue`
- `--cluster-green-light`, `--cluster-green-dark` (all colors have light/dark variants)
- `--gray-50` through `--gray-900`
- `--success-bg`, `--warning-bg`, `--info-bg`, `--error-bg`

**Typography:**
- `--font-primary`, `--font-secondary`
- `--text-xs` through `--text-6xl`
- `--font-light` through `--font-bold`

**Spacing:**
- `--space-1` through `--space-24`
- `--section-padding-y`, `--card-padding`

**Layout:**
- `--radius-sm` through `--radius-full`
- `--shadow-sm` through `--shadow-xl`
- `--transition-fast`, `--transition-normal`, `--transition-slow`

---

## ✅ **Migration Checklist**

### **For Each HTML File:**
- [ ] Remove inline Tailwind config
- [ ] Add brand system CSS imports
- [ ] Replace Tailwind classes with brand classes
- [ ] Add portal-specific classes if needed
- [ ] Test all interactive elements
- [ ] Verify responsive behavior

### **For Each Portal:**
- [ ] Apply consistent header styling
- [ ] Use portal-specific button colors
- [ ] Apply correct badge styling
- [ ] Verify navigation active states
- [ ] Test form styling consistency

### **Quality Assurance:**
- [ ] All colors match brand guidelines
- [ ] Typography is consistent across pages
- [ ] Spacing follows design system
- [ ] Interactive states work properly
- [ ] Responsive behavior is maintained
- [ ] Accessibility standards are met

---

## 🚀 **Benefits of Using the Brand System**

### **Consistency**
- Identical styling across all portals
- Consistent spacing and typography
- Unified color usage

### **Maintainability**
- Single source of truth for brand changes
- Easy to update colors globally
- Consistent component behavior

### **Performance**
- Smaller CSS file sizes
- Better caching (shared CSS files)
- Faster development time

### **Scalability**
- Easy to add new components
- Consistent patterns for new features
- Future-proof design system

---

## 📞 **Support & Questions**

If you need help implementing the brand system:

1. **Check the Brand Guidelines**: `/brand/BRAND_GUIDELINES.md`
2. **Review Component Examples**: `/brand/components.css`
3. **Test with Sample Implementation**: See migration examples above

For additional support:
- Email: dev@surreyfarmingcluster.co.uk
- Reference: Brand system documentation
- Version: 1.0

---

**Last Updated**: January 2025  
**Implementation Version**: 1.0  
**Compatible With**: All prototype files