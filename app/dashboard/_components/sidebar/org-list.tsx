"use client";
import { useOrganizationList } from "@clerk/nextjs";
import React from "react";
import OrgListItem from "./org-list-item";

const OrgList = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  
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
