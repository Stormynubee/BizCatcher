# 📈 BizCatcher (Lead Discovery Engine)

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/OpenStreetMap-7EBC6F?style=for-the-badge&logo=openstreetmap&logoColor=white" alt="OSM" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

**BizCatcher** is a high-performance, dark-themed lead generation and business discovery engine built with the state-of-the-art **Next.js 16** and **React 19**. It leverages global geographic telemetry from OpenStreetMap (OSM) to locate physical businesses, assess their online presence, manage contact lifecycles, and stream filtered datasets directly to CSV format.

---

## ⚙️ Architectural Topology

BizCatcher uses a serverless backend proxy to communicate with OpenStreetMap clusters. This design prevents CORS blocks on the client-side, shields the browser from heavy geofencing calculations, and eliminates the need for expensive Google Maps API keys or heavy browser-scraping automation.

```mermaid
sequenceDiagram
    autonumber
    actor User as Lead Generator
    participant UI as Client Dashboard (NextJS/Framer)
    participant API as Vercel Route Handler (/api/businesses)
    participant Nom as Nominatim Geocoding API
    participant Over as Overpass QL API (OSM Cluster)
    
    User->>UI: Input City & Search Radius (e.g. "Dharamgarh", 5km)
    UI->>API: GET Request with Geocode Parameters
    API->>Nom: Resolve City Center Coordinates (Latitude, Longitude)
    Nom-->>API: Bounding Box / Coordinates payload
    API->>Over: Execute Overpass QL Bounding Box query (amenity=restaurant, shop=*, etc.)
    Over-->>API: Raw OSM XML/JSON Coordinates & Properties
    API->>API: Parse nodes/ways, analyze tags (website, phone, email)
    API-->>UI: Deliver clean unified Lead JSON payload
    UI->>UI: Filter by Outreach Status / Website Presense
    User->>UI: Trigger "Export to CSV"
    UI-->>User: Instant Browser CSV File Download
```

---

## 🚀 Key Features

* **Real-time Map Geocoding:** Translates standard city queries into precise bounding coordinates using Nominatim API.
* **Overpass QL Engine:** Formulates raw OpenStreetMap QL queries server-side to pull highly specific nodes, ways, and relations within the geofenced area.
* **Outreach Status Workspace:** Features a custom board where outreach leads can be ticked, marked, and cataloged.
* **Intelligent Website Scanners:** Instantly flags leads that lack a public web address, giving outreach teams high-value cold prospects.
* **Cinematic Cyberpunk Layout:** Styled with vanilla Tailwind CSS v4 and responsive glassmorphism modules, enriched with micro-animations by Framer Motion.
* **No-Cold-Start Performance:** Client-side states are kept lightweight, resulting in immediate georeferencing rendering with 0.1s filtering latency.

---

## 📁 Repository Directory Structure

```text
├── public/                 # Static graphical assets and manifest configs
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── businesses/ # Serverless API route handler for geocoding & Overpass queries
│   │   ├── globals.css     # Global CSS design tokens and scrollbar themes
│   │   ├── layout.tsx      # Core metadata framework
│   │   └── page.tsx        # High-fidelity dashboard controller & visual modules
│   └── components/         # Reusable glassmorphic panels and form elements
├── eslint.config.mjs       # TypeScript syntax checks
├── package.json            # Dependency manifest
└── tsconfig.json           # Global compiler parameters
```

---

## 🛠️ Installation & Bootstrapping

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Stormynubee/BizCatcher.git
   cd BizCatcher
   ```

2. **Acquire & Install dependencies:**
   ```bash
   npm install
   ```

3. **Spin up local hot-reloader:**
   ```bash
   npm run dev
   ```

4. **Navigate to sandbox:**
   Open [http://localhost:3000](http://localhost:3000) inside your web browser.

---

## 🛡️ Production Verifications

Ensure all structural and TypeScript parameters compile cleanly before staging or pushing code:

```bash
# Run ESLint validation checks
npm run lint

# Compile production bundle
npm run build
```

---

## 📦 Deployment

The system is optimized for zero-configuration deployments on **Vercel**:

* **Framework Preset:** Next.js
* **Build Command:** `npm run build`
* **Install Command:** `npm install`
* **Environment Variables:** None required! The app connects directly to open geodata clusters.

---
*Developed with ❤️ by Stormynubee | Founder of AceZen Studio*
