// src/components/PostOfficeForm.tsx
'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { postOfficeSchema } from '@/lib/validation';
import Confirmation from './confirmation';
import { Send } from 'lucide-react';

const PostOfficeForm = () => {
   const [step, setStep] = useState<'form' | 'confirmation'>('form');
   const [formData, setFormData] = useState<z.infer<
      typeof postOfficeSchema
   > | null>(null);

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
   } = useForm<z.infer<typeof postOfficeSchema>>({
      resolver: zodResolver(postOfficeSchema),
   });

   const onSubmit: SubmitHandler<z.infer<typeof postOfficeSchema>> = async (
      data
   ) => {
      console.log(data, 'data');
      try {
         const digitalPostOffice = {
            senderFullName: data.senderFullName,
            senderPhone: data.senderPhone,
            senderEmail: data.senderEmail,
            recipientFullName: data.recipientFullName,
            recipientPhone: data.recipientPhone,
            recipientEmail: data.recipientEmail,
            packageDescription: data.packageDescription,
         };

         console.log(digitalPostOffice, 'digital post office');

         // Call your create function here
         // await createDigitalPostOffice(digitalPostOffice);
         console.log('Project created successfully!'); // Log success
         // Store form data in state for confirmation
         setFormData(digitalPostOffice);
         setStep('confirmation');
      } catch (error) {
         console.error('Error submitting form:', error);
      }
   };

   if (step === 'confirmation' && formData) {
      return (
         <Confirmation
            formData={formData}
            onCreateAnother={() => {
               setFormData(null);
               setStep('form');
            }}
         />
      );
   }

   return (
      <Card className="w-full max-w-2xl mx-auto mt-52">
         <CardHeader>
            <CardTitle className="flex items-center gap-2">
               <Send className="h-6 w-6" />
               Create New Delivery Order
            </CardTitle>
         </CardHeader>
         <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
               {/* Sender Details Section */}
               <div className="space-y-4">
                  <h3 className="font-semibold">Sender Details</h3>
                  <div className="grid gap-4">
                     <div>
                        <Label htmlFor="senderFullName">Full Name</Label>
                        <Input
                           id="senderFullName"
                           {...register('senderFullName')}
                           className="w-full"
                        />
                        {errors.senderFullName && (
                           <span className="text-red-500">
                              {errors.senderFullName.message}
                           </span>
                        )}
                     </div>
                     <div>
                        <Label htmlFor="senderPhone">Phone Number</Label>
                        <Input
                           id="senderPhone"
                           type="tel"
                           {...register('senderPhone')}
                           className="w-full"
                        />
                        {errors.senderPhone && (
                           <span className="text-red-500">
                              {errors.senderPhone.message}
                           </span>
                        )}
                     </div>
                     <div>
                        <Label htmlFor="senderEmail">Email</Label>
                        <Input
                           id="senderEmail"
                           type="email"
                           {...register('senderEmail')}
                           className="w-full"
                        />
                        {errors.senderEmail && (
                           <span className="text-red-500">
                              {errors.senderEmail.message}
                           </span>
                        )}
                     </div>
                  </div>
               </div>

               {/* Recipient Details Section */}
               <div className="space-y-4">
                  <h3 className="font-semibold">Recipient Details</h3>
                  <div className="grid gap-4">
                     <div>
                        <Label htmlFor="recipientFullName">Full Name</Label>
                        <Input
                           id="recipientFullName"
                           {...register('recipientFullName')}
                           className="w-full"
                        />
                        {errors.recipientFullName && (
                           <span className="text-red-500">
                              {errors.recipientFullName.message}
                           </span>
                        )}
                     </div>
                     <div>
                        <Label htmlFor="recipientPhone">Phone Number</Label>
                        <Input
                           id="recipientPhone"
                           type="tel"
                           {...register('recipientPhone')}
                           className="w-full"
                        />
                        {errors.recipientPhone && (
                           <span className="text-red-500">
                              {errors.recipientPhone.message}
                           </span>
                        )}
                     </div>
                     <div>
                        <Label htmlFor="recipientEmail">Email</Label>
                        <Input
                           id="recipientEmail"
                           type="email"
                           {...register('recipientEmail')}
                           className="w-full"
                        />
                        {errors.recipientEmail && (
                           <span className="text-red-500">
                              {errors.recipientEmail.message}
                           </span>
                        )}
                     </div>
                  </div>
               </div>

               {/* Package Details */}
               <div className="space-y-4">
                  <h3 className="font-semibold">Package Details</h3>
                  <div>
                     <Label htmlFor="packageDescription">
                        Package Description
                     </Label>
                     <Input
                        id="packageDescription"
                        {...register('packageDescription')}
                        className="w-full"
                     />
                     {errors.packageDescription && (
                        <span className="text-red-500">
                           {errors.packageDescription.message}
                        </span>
                     )}
                  </div>
               </div>

               <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Create Order'}
               </Button>
            </form>
         </CardContent>
      </Card>
   );
};

export default PostOfficeForm;
