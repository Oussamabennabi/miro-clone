"use client";
import { useOrganizationList } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import React from "react";
import OrgListItem from "./org-list-item";

const OrgList = () => {
  const { isLoaded, userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (!isLoaded || userMemberships.data.length <= 0) {
    return (
      <div className="flex">
        <Loader2 className="animate-spin" color="white" />
      </div>
    );
  }
  return (
    <ul className="space-y-4">
      {userMemberships.data?.map((mem) => (
        <OrgListItem
          id={mem.organization.id}
          imageUrl={mem.organization.imageUrl}
          name={mem.organization.name}
          key={mem.id}
        />
      ))}
    </ul>
  );
};

export default OrgList;
