"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

import Loading from "@/components/auth/loading";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexClient = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);
const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
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
