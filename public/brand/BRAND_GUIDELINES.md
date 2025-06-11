# Surrey Farming Cluster - Brand Guidelines

## 🎨 **Brand Overview**

The Surrey Farming Cluster brand represents **collaboration, sustainability, and agricultural innovation**. Our visual identity reflects the harmony between traditional farming values and modern digital solutions.

### **Brand Values**
- **Trustworthy & Professional** - Reliable agricultural expertise
- **Collaborative & Connected** - Bringing farmers together
- **Sustainable & Forward-thinking** - Environmental responsibility
- **Accessible & Supportive** - Helping all farmers succeed

---

## 🎯 **Logo & Identity**

### **Primary Logo**
- **Icon**: Seedling symbol (`fas fa-seedling`) representing growth and sustainability
- **Typeface**: Lora (serif) for "Surrey Farming Cluster" text
- **Usage**: Main website headers, official documents, marketing materials

### **Secondary Icons**
- **Farmer Portal**: Tractor icon (`fas fa-tractor`)
- **Admin Portal**: Cogs/Shield icon (`fas fa-cogs` / `fas fa-shield-alt`)
- **Community**: Users icon (`fas fa-users`)
- **Grants**: Money/Seedling combination

### **Logo Variations**
- **Full Logo**: Icon + "Surrey Farming Cluster" text
- **Compact**: Icon + "SFC" abbreviation
- **Icon Only**: For small spaces and favicons

---

## 🎨 **Colour Palette**

### **Primary Colours**

**Cluster Green** `#2E7D32`  
🟢 Primary brand colour - growth, sustainability  
```css
--cluster-green: #2E7D32
```

**Cluster Brown** `#5D4037`  
🟤 Secondary - earth, tradition, stability  
```css
--cluster-brown: #5D4037
```

**Cluster Gold** `#FBC02D`  
🟡 Accent - harvest, prosperity, warmth  
```css
--cluster-gold: #FBC02D
```

**Cluster Blue** `#0288D1`  
🔵 Digital - technology, innovation, trust  
```css
--cluster-blue: #0288D1
```

### **Secondary Colours**
```css
--cluster-green-light: #4CAF50
--cluster-green-dark: #1B5E20
--cluster-brown-light: #8D6E63
--cluster-brown-dark: #3E2723
--cluster-gold-light: #FFF176
--cluster-gold-dark: #F57F17
--cluster-blue-light: #29B6F6
--cluster-blue-dark: #01579B
```

### **Neutral Palette**
```css
--gray-50: #F9FAFB
--gray-100: #F3F4F6
--gray-200: #E5E7EB
--gray-300: #D1D5DB
--gray-500: #6B7280
--gray-600: #4B5563
--gray-700: #374151
--gray-800: #1F2937
--gray-900: #111827
--white: #FFFFFF
--black: #000000
```

### **Colour Usage Guidelines**

**Cluster Green (#2E7D32)**
- Primary CTAs and buttons
- Success states and confirmations
- Farmer portal branding
- Environmental/sustainability content
- Navigation active states

**Cluster Brown (#5D4037)**
- Admin portal branding
- Traditional farming content
- Footer backgrounds
- Secondary headers

**Cluster Gold (#FBC02D)**
- Highlights and accents
- Special announcements
- Premium features
- Call-to-action backgrounds

**Cluster Blue (#0288D1)**
- Technology and innovation content
- Links and interactive elements
- Information panels
- Digital integration features

---

## 📝 **Typography**

### **Font Families**
```css
--font-primary: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-secondary: 'Lora', Georgia, serif;
```

### **Typography Scale**
```css
--text-xs: 0.75rem     /* 12px */
--text-sm: 0.875rem    /* 14px */
--text-base: 1rem      /* 16px */
--text-lg: 1.125rem    /* 18px */
--text-xl: 1.25rem     /* 20px */
--text-2xl: 1.5rem     /* 24px */
--text-3xl: 1.875rem   /* 30px */
--text-4xl: 2.25rem    /* 36px */
--text-5xl: 3rem       /* 48px */
--text-6xl: 3.75rem    /* 60px */
```

### **Font Usage Guidelines**

**Roboto (Primary - Sans Serif)**
- Body text and paragraphs
- User interface elements
- Form labels and inputs
- Navigation menus
- Data tables and lists

**Lora (Secondary - Serif)**
- Main headings (H1, H2)
- Brand name "Surrey Farming Cluster"
- Hero section headlines
- Quote blocks and testimonials
- Marketing headlines

### **Font Weight Scale**
```css
--font-light: 300
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
```

---

## 📐 **Spacing & Layout**

### **Spacing Scale**
```css
--space-1: 0.25rem     /* 4px */
--space-2: 0.5rem      /* 8px */
--space-3: 0.75rem     /* 12px */
--space-4: 1rem        /* 16px */
--space-5: 1.25rem     /* 20px */
--space-6: 1.5rem      /* 24px */
--space-8: 2rem        /* 32px */
--space-10: 2.5rem     /* 40px */
--space-12: 3rem       /* 48px */
--space-16: 4rem       /* 64px */
--space-20: 5rem       /* 80px */
--space-24: 6rem       /* 96px */
```

### **Layout Guidelines**
- **Container Max Width**: 1280px (max-w-7xl)
- **Section Padding**: 4rem vertical (py-16)
- **Card Padding**: 1.5rem (p-6)
- **Button Padding**: 0.75rem horizontal, 0.5rem vertical
- **Grid Gaps**: 1.5rem (gap-6) or 2rem (gap-8)

### **Border Radius**
```css
--radius-sm: 0.125rem   /* 2px */
--radius: 0.25rem       /* 4px */
--radius-md: 0.375rem   /* 6px */
--radius-lg: 0.5rem     /* 8px */
--radius-xl: 0.75rem    /* 12px */
--radius-2xl: 1rem      /* 16px */
--radius-full: 9999px   /* Full circle */
```

---

## 🔘 **Buttons & Interactive Elements**

### **Button Styles**

**Primary Button**
```css
background: var(--cluster-green);
color: white;
padding: 0.75rem 2rem;
border-radius: 0.5rem;
font-weight: 600;
transition: all 0.15s ease-in-out;

&:hover {
  background: #1B5E20; /* darker green */
}
```

**Secondary Button**
```css
background: transparent;
color: var(--cluster-green);
border: 2px solid var(--cluster-green);
padding: 0.75rem 2rem;
border-radius: 0.5rem;
font-weight: 600;

&:hover {
  background: var(--cluster-green);
  color: white;
}
```

**Accent Button (Gold)**
```css
background: var(--cluster-gold);
color: var(--cluster-brown);
padding: 0.75rem 2rem;
border-radius: 0.5rem;
font-weight: 600;

&:hover {
  background: #F57F17; /* darker gold */
}
```

**Button Sizes**
- **Small**: `px-4 py-2 text-sm`
- **Medium**: `px-6 py-3 text-base` (default)
- **Large**: `px-8 py-4 text-lg`

---

## 📊 **Cards & Components**

### **Card Styles**
```css
.card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.card-elevated {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

### **Status Indicators**

**Success/Active**
```css
background: #DCFCE7; /* green-50 */
color: #166534; /* green-800 */
```

**Warning/Pending**
```css
background: #FEF3C7; /* yellow-50 */
color: #92400E; /* yellow-800 */
```

**Info/Technology**
```css
background: #DBEAFE; /* blue-50 */
color: #1E40AF; /* blue-800 */
```

**Error/Urgent**
```css
background: #FEE2E2; /* red-50 */
color: #991B1B; /* red-800 */
```

---

## 🎯 **Portal-Specific Branding**

### **Main Website**
- **Primary**: Cluster Green
- **Accent**: Cluster Gold
- **Typography**: Mix of Roboto and Lora
- **Hero Gradient**: Dark overlay on farm imagery

### **Farmer Portal**
- **Primary**: Cluster Green (#2E7D32)
- **Icon**: Tractor (`fas fa-tractor`)
- **Accent**: Cluster Blue for digital features
- **Badge**: "FARMER" in blue background

### **Admin Portal**
- **Primary**: Cluster Brown (#5D4037)
- **Icon**: Shield (`fas fa-shield-alt`)
- **Accent**: Cluster Gold for highlights
- **Badge**: "ADMIN" in gold background

---

## 🖼️ **Imagery & Graphics**

### **Photography Style**
- **High-quality farm imagery** with natural lighting
- **Focus on sustainability** - green fields, renewable energy, diverse crops
- **Human element** - farmers working, community gatherings
- **Technology integration** - modern equipment, digital tools

### **Image Specifications**
- **Hero Images**: 1920x1080px minimum
- **Card Images**: 400x300px optimized
- **Profile Images**: 150x150px, circular crop
- **Aspect Ratios**: 16:9 for heroes, 4:3 for cards, 1:1 for profiles

### **Icon System**
- **Primary Icons**: Font Awesome 6.0
- **Style**: Solid icons for primary actions, regular for secondary
- **Size**: Consistent sizing across components (text-xl, text-2xl)
- **Color**: Match parent element or use brand colours

---

## 📱 **Responsive Design**

### **Breakpoints**
```css
--breakpoint-sm: 640px    /* Mobile landscape */
--breakpoint-md: 768px    /* Tablet portrait */
--breakpoint-lg: 1024px   /* Tablet landscape / Small desktop */
--breakpoint-xl: 1280px   /* Desktop */
--breakpoint-2xl: 1536px  /* Large desktop */
```

### **Mobile-First Approach**
- Start with mobile design, enhance for larger screens
- Touch-friendly button sizes (min 44px)
- Readable font sizes (min 16px on mobile)
- Simplified navigation on small screens

---

## ✅ **Usage Guidelines**

### **Do's**
✅ Use consistent spacing throughout all components  
✅ Maintain colour contrast ratios for accessibility  
✅ Use Lora for brand headings, Roboto for body text  
✅ Apply brand colours meaningfully (green for success, etc.)  
✅ Keep button styles consistent across all portals  
✅ Use proper image aspect ratios  

### **Don'ts**
❌ Mix different green shades randomly  
❌ Use comic sans or other non-brand fonts  
❌ Apply gold colour to error states  
❌ Create buttons smaller than touch targets  
❌ Use low-contrast colour combinations  
❌ Stretch or distort logos  

---

## 🔧 **Implementation**

### **CSS Custom Properties**
All brand variables are defined in `/brand/brand-system.css` and should be imported into every stylesheet:

```css
@import url('./brand/brand-system.css');
```

### **Component Classes**
Reusable component classes are available in `/brand/components.css`:
- `.btn-primary`
- `.btn-secondary`
- `.card`
- `.status-success`
- `.portal-farmer`
- `.portal-admin`

### **Usage in HTML**
```html
<link rel="stylesheet" href="../brand/brand-system.css">
<button class="btn-primary">Primary Action</button>
<div class="card portal-farmer">Farmer content</div>
```

---

**Brand Guidelines Version**: 1.0  
**Last Updated**: January 2025  
**Maintained By**: Surrey Farming Cluster Development Team

---

*This document ensures consistent branding across all digital touchpoints of the Surrey Farming Cluster platform.*