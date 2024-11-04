import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Package } from 'lucide-react';
import { PostOfficeFormData } from '@/lib/validation';

interface ConfirmationProps {
   formData: PostOfficeFormData;
   onCreateAnother: () => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({
   formData,
   onCreateAnother,
}) => {
   return (
      <Card className="w-full max-w-2xl mx-auto mt-52">
         <CardHeader>
            <CardTitle className="flex items-center gap-2">
               <Package className="h-6 w-6" />
               Order Confirmation
            </CardTitle>
         </CardHeader>
         <CardContent>
            <Alert className="mb-6">
               <AlertDescription>
                  Order placed successfully! Notifications have been sent to
                  both parties.
               </AlertDescription>
            </Alert>

            <div className="space-y-6">
               <div>
                  <h3 className="font-semibold mb-2">Sender Details</h3>
                  <p>{formData.senderFullName}</p>
                  <p>{formData.senderPhone}</p>
                  <p>{formData.senderEmail}</p>
               </div>

               <div>
                  <h3 className="font-semibold mb-2">Recipient Details</h3>
                  <p>{formData.recipientFullName}</p>
                  <p>{formData.recipientPhone}</p>
                  <p>{formData.recipientEmail}</p>
               </div>

               <Button onClick={onCreateAnother} className="w-full">
                  Create Another Order
               </Button>
            </div>
         </CardContent>
      </Card>
   );
};

export default Confirmation;
