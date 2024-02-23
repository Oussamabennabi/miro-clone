import { OrganizationSwitcher } from "@clerk/nextjs";
import React from "react";
interface CustomeOrgSwitcherProps {
  width: string;
}
const CustomeOrgSwitcher = ({ width }: CustomeOrgSwitcherProps) => {
  return (
    <OrganizationSwitcher
      hidePersonal
      appearance={{
        elements: {
          rootBox: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flex: "1",
          },
          organizationSwitcherTrigger: {
            width,
            justifyContent: "space-between",
            border: "1px solid #e5e7eb",
          },
        },
      }}
    />
  );
};

export default CustomeOrgSwitcher;
