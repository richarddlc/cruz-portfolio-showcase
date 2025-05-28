
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const certifications = [
    "Licensed Professional Agriculturist, PRC, Philippines (2018 - Present)",
    "Human-Centered Design, Luma Institute Practitioner (2022 - Present)"
  ];

  return (
    <section>
      <h3 className="text-2xl font-semibold text-white mb-6">Certifications</h3>
      <Card className="p-6">
        <CardContent className="p-0">
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Badge variant="outline" className="text-green-700 border-green-300 hover:bg-green-50 text-sm">
                  {cert}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Certifications;
