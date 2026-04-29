'use server';

import { contactFormSchema } from '@/lib/schema';
// Prisma import would go here
// import prisma from '@/prisma/client';

export async function submitContactSales(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  // 1. Zod Validation
  const validatedFields = contactFormSchema.safeParse(data);
  if (!validatedFields.success) {
    return { error: 'Invalid fields. Please check your data.' };
  }

  // 2. Honeypot check
  if (validatedFields.data.honeypot) {
    return { error: 'Spam detected.' };
  }

  // 3. Simulated Prisma Save (since schema isn't migrated live)
  // await prisma.contactSubmission.create({
  //   data: {
  //     name: validatedFields.data.name,
  //     email: validatedFields.data.email,
  //     company: validatedFields.data.company,
  //     message: validatedFields.data.message,
  //     status: 'NEW'
  //   }
  // });
  console.log("Mock saved to Prisma:", validatedFields.data);

  // 4. Simulated Resend API Email
  // await resend.emails.send({
  //   from: 'hello@attestid.com',
  //   to: 'muhammadelha13@gmail.com',
  //   subject: 'New Enterprise Lead',
  //   html: `<p>New Lead: ${validatedFields.data.name}</p>`
  // });
  console.log("Mock email sent to muhammadelha13@gmail.com");

  return { success: true };
}
