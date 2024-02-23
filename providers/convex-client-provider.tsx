"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

import Loading from "@/components/auth/loading";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexClient = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);
const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  const { theme: currentTheme } = useTheme();
  const [theme, setTheme] = useState<any>(currentTheme==="dark"?dark:undefined);
  useEffect(() => {
    if (currentTheme === "dark") {
      setTheme(dark);
    } else {
      setTheme(undefined);
    }
  }, [currentTheme]);
  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme,
      }}
    >
      <ConvexProviderWithClerk client={convexClient} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
