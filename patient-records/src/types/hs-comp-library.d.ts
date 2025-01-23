declare module "hs-comp-library" {
  interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: "light" | "dark" | "system";
  }

  export const ThemeToggle: React.ComponentType;
  export const ThemeProvider: React.ComponentType<ThemeProviderProps>;
}

declare module "hs-comp-library/ThemeToggle" {
  const ThemeToggle: React.ComponentType;
  export default ThemeToggle;
}

declare module "hs-comp-library/ThemeProvider" {
  interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: "light" | "dark" | "system";
  }
  const ThemeProvider: React.ComponentType<ThemeProviderProps>;
  export default ThemeProvider;
}

declare module "hs-comp-library/components" {
  export const ThemeToggle: React.ComponentType;
  export const ThemeProvider: React.ComponentType<{
    children: React.ReactNode;
    defaultTheme?: "light" | "dark" | "system";
  }>;

  export const Card: React.ComponentType<{
    children: React.ReactNode;
    className?: string;
  }>;
  export const CardHeader: React.ComponentType<{
    children: React.ReactNode;
    className?: string;
  }>;
  export const CardFooter: React.ComponentType<{
    children: React.ReactNode;
    className?: string;
  }>;
  export const CardTitle: React.ComponentType<{
    children: React.ReactNode;
    className?: string;
  }>;
  export const CardDescription: React.ComponentType<{
    children: React.ReactNode;
    className?: string;
  }>;
  export const CardContent: React.ComponentType<{
    children: React.ReactNode;
    className?: string;
  }>;
}
