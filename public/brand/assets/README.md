# Surrey Farming Cluster - Brand Assets

## 🎯 **CENTRALIZED LOGO SYSTEM**

**This folder is the SINGLE SOURCE OF TRUTH for all Surrey Farming Cluster logos and brand assets.**

## 📁 **Directory Structure**

```
/brand/assets/
├── logos/
│   ├── logo.svg              # Primary logo with text
│   ├── logo-compact.svg      # Compact version with "SFC"
│   ├── icon-only.svg         # Icon only for components
│   ├── favicon.svg           # ⭐ MASTER FAVICON SOURCE
│   └── logo-variations/      # Additional color variations
├── icons/
│   ├── farmer-portal.svg     # Tractor icon for farmer portal
│   ├── admin-portal.svg      # Shield icon for admin portal
│   └── feature-icons/        # Icons for specific features
└── graphics/
    ├── patterns/             # Background patterns
    ├── illustrations/        # Custom illustrations
    └── hero-images/          # Hero section backgrounds
```

## 🔧 **CENTRALIZED REFERENCE SYSTEM**

### **React Components Use:**
```typescript
// Import centralized logo system
import { LogoSVG, BRAND_TEXT, LOGO_ASSETS } from '../utils/logoAssets';

// Recommended: Inline SVG for components
{LogoSVG.SEEDLING}

// Alternative: File references
<img src={LOGO_ASSETS.FULL_LOGO} alt={BRAND_TEXT.FULL_NAME} />
```

### **HTML/Static Files Use:**
```html
<!-- Always reference centralized logos -->
<img src="/brand/assets/logos/logo.svg" alt="Surrey Farming Cluster">
<link rel="icon" href="/brand/assets/logos/favicon.svg" type="image/svg+xml">
```

### **Current Centralized References:**
- `/public/favicon.svg` → **mirrors** `/brand/assets/logos/favicon.svg`
- `/public/index.html` → **references** `/brand/assets/logos/favicon.svg`
- `/src/components/Logo.tsx` → **uses** `logoAssets.ts` system
- All React components → **use** centralized `logoAssets.ts`

## 🎨 **Logo Usage Guidelines**

### **Primary Logo (`logo.svg`)**
- Use for main website headers
- Marketing materials and documents
- When space allows for full text
- Minimum width: 200px

### **Compact Logo (`logo-compact.svg`)**
- Navigation bars with limited space
- Mobile responsive headers
- Social media profile images
- Minimum width: 120px

### **Icon Only (`icon-only.svg`)**
- Favicons and app icons
- Very small spaces (under 100px)
- Loading spinners
- Minimum size: 32x32px

## 🎯 **Portal-Specific Icons**

### **Farmer Portal Icon**
```html
<i class="fas fa-tractor"></i>
<!-- Or use custom SVG from icons/farmer-portal.svg -->
```

### **Admin Portal Icon**
```html
<i class="fas fa-shield-alt"></i>
<!-- Or use custom SVG from icons/admin-portal.svg -->
```

## 🌈 **Colour Specifications**

All assets use the official brand colour palette:

- **Cluster Green**: `#2E7D32`
- **Cluster Brown**: `#5D4037` 
- **Cluster Gold**: `#FBC02D`
- **Cluster Blue**: `#0288D1`

## 📱 **Responsive Usage**

### **Desktop (1024px+)**
- Use primary logo with full text
- Maximum logo width: 300px

### **Tablet (768px - 1023px)**
- Use compact logo or primary logo
- Maximum logo width: 200px

### **Mobile (< 768px)**
- Use compact logo or icon only
- Maximum logo width: 150px

## 🔧 **Implementation Examples**

### **HTML Implementation**
```html
<!-- Primary Logo -->
<img src="/brand/assets/logos/logo.svg" alt="Surrey Farming Cluster" class="logo-primary">

<!-- Compact Logo -->
<img src="/brand/assets/logos/logo-compact.svg" alt="SFC" class="logo-compact">

<!-- Icon Only -->
<img src="/brand/assets/logos/icon-only.svg" alt="SFC" class="logo-icon">
```

### **CSS Classes**
```css
.logo-primary {
  height: 60px;
  width: auto;
}

.logo-compact {
  height: 40px;
  width: auto;
}

.logo-icon {
  height: 32px;
  width: 32px;
}

@media (max-width: 768px) {
  .logo-primary {
    display: none;
  }
  .logo-compact {
    display: block;
  }
}
```

## ✅ **Quality Standards**

All assets should meet these standards:

- **SVG Format**: Scalable and lightweight
- **Optimized**: Minimal file size
- **Accessible**: Proper alt text and titles
- **Consistent**: Following brand guidelines
- **High Contrast**: Readable on all backgrounds

## 🚫 **What NOT to Do**

❌ Don't stretch or distort logos  
❌ Don't change brand colours  
❌ Don't add drop shadows or effects  
❌ Don't place on busy backgrounds without proper contrast  
❌ Don't use low-resolution versions  
❌ Don't create custom variations without approval  

## 📞 **Support**

For questions about brand assets or to request new variations:
- Email: brand@surreyfarmingcluster.co.uk
- Reference: Brand Guidelines document
- Design System: `/brand/brand-system.css`

---

**Last Updated**: January 2025  
**Version**: 1.0  
**Maintained By**: Surrey Farming Cluster Design Team