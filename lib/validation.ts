import { z } from 'zod';

export const postOfficeSchema = z.object({
    senderFullName: z.string().min(1, "Full name is required"),
    senderPhone: z.string().min(1, "Phone number is required"),
    senderEmail: z.string().email("Invalid email address"),
    recipientFullName: z.string().min(1, "Full name is required"),
    recipientPhone: z.string().min(1, "Phone number is required"),
    recipientEmail: z.string().email("Invalid email address"),
    packageDescription: z.string().min(1, "Package description is required"),
});

export type PostOfficeFormData = z.infer<typeof postOfficeSchema>;
