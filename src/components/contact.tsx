"use client";
import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { sendContactMessage } from "@/app/contact-action";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value as string));
    const result = await sendContactMessage(formData);
    if (result.success) {
      reset();
    }
    return result;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-2 h-full rounded-none sm:gap-3 neobrutal-base w-full sm:w-fit p-2 sm:py-5 px-4 justify-center">Contact Me</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            Send me a message and I&apos;ll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              className="neobrutal w-full p-2"
              placeholder="Your Name"
              {...register("name", { required: "Name is required", minLength: 2 })}
            />
            {errors.name && <span className="text-red-500 text-xs">{errors.name.message as string}</span>}
          </div>
          <div>
            <Input
              className="neobrutal w-full p-2"
              placeholder="Your Email"
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message as string}</span>}
          </div>
          <div>
            <Textarea
              className="neobrutal w-full p-2 min-h-[100px]"
              placeholder="Your Message"
              {...register("message", { required: "Message is required", minLength: 10 })}
            />
            {errors.message && <span className="text-red-500 text-xs">{errors.message.message as string}</span>}
          </div>
          <DialogFooter>
            <Button className="neobrutal" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            <DialogClose asChild>
              <Button className="neobrutal" type="button" onClick={() => reset()}>Close</Button>
            </DialogClose>
          </DialogFooter>
          {isSubmitSuccessful && <div className="text-green-600 text-center mt-2">Message sent successfully!</div>}
        </form>
      </DialogContent>
    </Dialog>
  );
}
