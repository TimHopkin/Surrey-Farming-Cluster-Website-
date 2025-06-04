# Surrey Farming Cluster Website

A modern, responsive website for the Surrey Farming Cluster built with React, TypeScript, and Tailwind CSS.

## 🌾 About the Project

The Surrey Farming Cluster website serves as a central hub for collaboration, information sharing, and community building among Surrey's farming community. It showcases member farms, funding opportunities, news and events, and provides a platform for farmers to connect and collaborate.

### Key Features

- **Homepage**: Hero section with cluster mission and featured farms
- **About Us**: Detailed information about the cluster's mission, values, and structure
- **Farm Profiles**: Searchable directory of member farms with detailed profiles
- **Interactive Map**: Leaflet-powered map showing all member farm locations
- **Funding Opportunities**: Current grants, subsidies, and success stories
- **News & Events**: Latest cluster news and upcoming events
- **Membership**: Application form for new members to join the cluster
- **Responsive Design**: Mobile-first design that works on all devices

## 🚀 Technology Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Maps**: Leaflet for interactive mapping
- **Routing**: React Router for navigation
- **Build Tool**: Create React App
- **Fonts**: Google Fonts (Roboto & Lora)

## 🎨 Brand Guidelines

### Colors
- **Cluster Green**: `#2E7D32` - Primary brand color
- **Cluster Brown**: `#5D4037` - Secondary color for headers/footers
- **Cluster Gold**: `#FBC02D` - Accent color for highlights
- **Cluster Blue**: `#0288D1` - Trust and innovation accent

### Typography
- **Primary Font**: Roboto (clean, modern, readable)
- **Secondary Font**: Lora (headings, warmth and approachability)

## 📦 Installation

1. **Navigate to the project directory**
   ```bash
   cd surrey-farming-cluster
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── FarmMap.tsx     # Interactive map component
├── pages/              # Main page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About the cluster
│   ├── Farms.tsx       # Farm directory
│   ├── FarmDetail.tsx  # Individual farm profiles
│   ├── Map.tsx         # Interactive map page
│   ├── Funding.tsx     # Funding opportunities
│   ├── News.tsx        # News and events
│   └── Join.tsx        # Membership application
├── data/               # Sample data and types
│   ├── farms.ts        # Farm profiles data
│   ├── funding.ts      # Funding opportunities data
│   └── news.ts         # News articles and events data
└── App.tsx            # Main app component with routing
```

## 📊 Sample Data

The website includes sample data for demonstration purposes:

- **4 Sample Farms**: Representing different farm types (organic, dairy, arable, market garden)
- **5 Funding Opportunities**: Mix of open, closed, and coming-soon grants
- **3 Success Stories**: Real-world examples of funding successes
- **4 News Articles**: Various categories (funding, education, success stories, events)
- **4 Upcoming Events**: Workshops, business sessions, and networking events

## 🗺️ Interactive Map

The map component uses Leaflet and OpenStreetMap to display farm locations across Surrey. Features include:

- Custom farm markers with cluster branding
- Detailed popups with farm information
- Click-to-navigate to full farm profiles
- Filter by farm type
- Responsive design for mobile devices

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 🌱 Implementation Status

### ✅ Completed Features
- Modern React setup with TypeScript and Tailwind CSS
- Brand identity with custom color palette and typography
- Homepage with hero section and key components
- Navigation and responsive layout structure
- About Us page with mission and values
- Farm profiles system with search and filtering
- Individual farm detail pages
- Interactive map with Leaflet integration
- Funding opportunities page with success stories
- News and events section
- Membership application form

### 🔄 Future Enhancements
- Member portal with authentication
- Content Management System integration
- E-commerce capabilities
- Advanced analytics
- Progressive Web App features

## 🎯 Key Pages Overview

1. **Homepage** (`/`): Hero section, mission overview, featured farms, latest news
2. **About** (`/about`): Cluster mission, values, structure, and contact information
3. **Farms** (`/farms`): Searchable directory of all member farms
4. **Farm Detail** (`/farms/:id`): Individual farm profiles with full details
5. **Map** (`/map`): Interactive map showing all farm locations
6. **Funding** (`/funding`): Current opportunities and success stories
7. **News** (`/news`): Latest articles and upcoming events
8. **Join** (`/join`): Membership application form

## 🔧 Development Notes

- Built with Create React App for fast development setup
- Uses React Router for client-side navigation
- Tailwind CSS provides utility-first styling approach
- TypeScript ensures type safety throughout the application
- Sample data demonstrates the full functionality
- Responsive design works across desktop, tablet, and mobile devices

## 📞 Contact Information

For the Surrey Farming Cluster:
- **Email**: info@surreyfarmingcluster.org
- **Phone**: 01483 123456
- **Address**: Surrey, United Kingdom

## 🏆 Project Summary

This website successfully implements the comprehensive specification for the Surrey Farming Cluster, providing:

- A professional, modern web presence
- Clear information architecture and navigation
- Interactive features for member engagement
- Responsive design for all devices
- Sample content demonstrating full functionality
- Scalable foundation for future enhancements

The website serves as both a functional platform for the cluster and a demonstration of modern web development best practices for agricultural community websites.

---

**Growing Together for a Sustainable Surrey** 🌾