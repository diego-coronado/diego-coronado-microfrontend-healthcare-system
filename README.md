# Healthcare System

A micro-frontend architecture healthcare system built with Vite and Module Federation.

## Project Structure

The system consists of multiple independent applications:

- `home` - Main shell application that hosts all other apps
- `comp-library` - Shared component library used by all apps
- `patient-records` - Patient management system
- `pharmacy` - Pharmacy management system
- `appointments` - Appointment scheduling system
- `billing` - Billing management system
- `laboratory` - Laboratory results system

## Module Federation Setup

Each application is set up as a separate Vite project with Module Federation:

### Component Library (Port 5175)
Exposes shared components used across all applications:
```typescript
// comp-library/vite.config.ts
federation({
  name: "hs-comp-library",
  filename: "remoteEntry.js",
  exposes: {
    "./components": "./src/components/index.ts",
  }
})
```

### Feature Apps (Ports 5174-5179)
Each feature app exposes its main component and consumes the component library:
```typescript
// patient-records/vite.config.ts (example)
federation({
  name: "hs-patient-records",
  filename: "remoteEntry.js",
  exposes: {
    "./PatientRecords": "./src/PatientRecords.tsx"
  },
  remotes: {
    "hs-comp-library": "http://localhost:5175/assets/remoteEntry.js"
  }
})
```

### Home App (Port 5173)
The shell application that consumes all other apps:
```typescript
// home/vite.config.ts
federation({
  name: "home",
  remotes: {
    "hs-patient-records": "http://localhost:5174/assets/remoteEntry.js",
    "hs-comp-library": "http://localhost:5175/assets/remoteEntry.js",
    "hs-pharmacy": "http://localhost:5176/assets/remoteEntry.js",
    "hs-appointments": "http://localhost:5177/assets/remoteEntry.js",
    "hs-billing": "http://localhost:5178/assets/remoteEntry.js",
    "hs-laboratory": "http://localhost:5179/assets/remoteEntry.js",
  }
})
```

## Development

1. Start the component library first:
```bash
cd comp-library
npm install
npm run dev
```

2. Start any feature apps you're working on:
```bash
cd patient-records
npm install
npm run dev
```

3. Start the home app:
```bash
cd home
npm install
npm run dev
```

The applications will be available at:
- Home: http://localhost:5173
- Patient Records: http://localhost:5174
- Component Library: http://localhost:5175
- Pharmacy: http://localhost:5176
- Appointments: http://localhost:5177
- Billing: http://localhost:5178
- Laboratory: http://localhost:5179

## Type Support

Type declarations for the federated modules are maintained in each project's `types` directory:

```typescript
// home/src/types/hs-comp-library.d.ts
declare module "hs-comp-library/components" {
  export const Card: React.ComponentType<{
    children: React.ReactNode;
    className?: string;
  }>;
  // ... other component types
}
```

## Environment Variables

Development environment variables are set in `.env.development`:
```env
VITE_PATIENT_RECORDS_URL=http://localhost:5174
VITE_COMP_LIBRARY_URL=http://localhost:5175
# ... other URLs
```

## Project Dependencies

Each project uses:
- React 18
- TypeScript
- Vite
- TailwindCSS
- Shadcn/ui components
- Module Federation plugin for Vite

## Running the Complete System

To run the entire system locally:

1. Clone all repositories
2. Install dependencies in each project
3. Start the component library first
4. Start the feature apps
5. Start the home app last

The system uses React Router for navigation between the different micro-frontends.
```