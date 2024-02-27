import React from "react";
interface PageProps {
  params: {
    id: string;
  };
}
const Page = ({ params: { id } }: PageProps) => {
  return <div>Page: {id}</div>;
};

export default Page;
