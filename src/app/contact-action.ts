"use server";
import { z } from "zod";
import { firestore } from "@/lib/firebase";

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendContactMessage(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const parsed = ContactSchema.safeParse(data);
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }
  console.log(parsed.data)
  // Save the message to Firestore (collection: 'contactMessages')
  try {
    await firestore.collection("contactMessages").add({
      name: parsed.data.name,
      email: parsed.data.email,
      message: parsed.data.message,
      createdAt: new Date().toISOString(),
    });
    return { success: true };
  } catch (err) {
    console.log(err)
    return { success: false, errors: { general: ["Failed to send message. Please try again later."], err } };
  }
}
