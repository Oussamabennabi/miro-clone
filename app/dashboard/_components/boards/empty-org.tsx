import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { H2, P, PMuted } from "@/components/ui/typography";
import { CreateOrganization } from "@clerk/nextjs";
import Image from "next/image";

const EmptyOrg = () => {
  return (
    <div className="h-full flex items-center justify-center flex-col gap-2">
      <Image
        alt="empty organization"
        src={"/dashboard/empty-org.svg"}
        width={300}
        height={300}
      />
      <H2>Welcome to Board</H2>
      <PMuted>Create an organization or select one to get started</PMuted>
      <Dialog>
        <DialogTrigger asChild>
          <Button size={"lg"} variant={"secondary"}>
            Create one!
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 max-w-[480px] border-none bg-transparent">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmptyOrg;
