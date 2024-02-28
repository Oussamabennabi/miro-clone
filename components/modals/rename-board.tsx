"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog";
import { Id } from "@/convex/_generated/dataModel";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

import { Input } from "../ui/input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import succesToast from "../toasts/succes-toast";

interface RenameBoardModalProps {
  board: {
    title: string;
    id: Id<"boards">;
  };
  open: boolean;
  setOpen: any;
}

const formSchema = z.object({
  title: z.string().min(3).max(30),
});

const RenameBoardModal = ({ board, open, setOpen }: RenameBoardModalProps) => {
  const { loading, mutate } = useApiMutation(api.board.updateBoard);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: board.title,
    },
  });
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    await mutate({
      id: board.id,
      title: values.title,
    });
    
    succesToast("Board renamed successfuly");
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={(o) => setOpen(o)}>
      <DialogContent>
        Rename your board
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Board Title</FormLabel>
                  <FormControl>
                    <Input placeholder="title..." {...field} />
                  </FormControl>
                  <FormDescription>
                    this is the name of your board.
                  </FormDescription>
                  <FormMessage  />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button onClick={() => setOpen(false)} variant={"ghost"}>
                Cancel
              </Button>
              <Button disabled={loading} type="submit">
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                Update
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameBoardModal;
