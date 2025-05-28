
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ContactInformation = () => {
  return (
    <section>
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
      <Card className="p-6">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-4 text-gray-600">
            <div>
              <p><strong>Phone:</strong> +(63)9494641158</p>
              <p><strong>Email:</strong> chard.bdc@gmail.com</p>
            </div>
            <div>
              <p><strong>Location:</strong> Mandaluyong City</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactInformation;
