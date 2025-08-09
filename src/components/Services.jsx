import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, MessageCircle, Phone, Zap, Shield, Settings, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

// Import images
import gasStationImage from '../assets/WhatsAppImage2025-08-04at11.42.24_c7d99573.jpg';
import roadSignImage from '../assets/WhatsAppImage2025-08-04at11.39.39_b9ac5bf7.jpg';
import movingTextImage from '../assets/WhatsAppImage2025-08-04at11.42.25_02dc7ef9.jpg';
import timerImage from '../assets/WhatsAppImage2025-08-04at11.42.27_3b2bbc73.jpg';
import welcomeImage from '../assets/WhatsAppImage2025-08-04at11.42.27_b8c49d8d.jpg';
import priceDisplayImage from '../assets/WhatsAppImage2025-08-04at11.42.21_bdaa1d25.jpg';

const Services = () => {
  const services = [
    {
      title: 'لوحات أسعار محطات البنزين',
      description: 'تقدم شركتنا لوحات أسعار محطات البنزين بتقنية LED عالية الوضوح، مع إمكانية عرض الأسعار بألوان مختلفة (أحمر، أخضر، كهرماني) لتمييز أنواع الوقود المختلفة.',
      image: gasStationImage,
      features: [
        'وضوح عالي في جميع الظروف الجوية',
        'ألوان متعددة للتمييز بين أنواع الوقود',
        'سهولة التحكم والتحديث',
        'توفير في استهلاك الطاقة',
        'ضمان شامل'
      ],
      icon: <Zap className="h-6 w-6" />,
      color: 'bg-blue-500'
    },
    {
      title: 'لوحات مشاريع الطرق',
      description: 'نوفر لوحات إلكترونية متخصصة لمشاريع الطرق والإنشاءات، قابلة للنقل والتركيب على مقطورات. تدعم عرض الرسائل التحذيرية والإرشادية باللغتين العربية والإنجليزية.',
      image: roadSignImage,
      features: [
        'قابلية النقل والتركيب السريع',
        'دعم اللغتين العربية والإنجليزية',
        'رسائل تحذيرية واضحة',
        'مقاومة للصدمات والاهتزازات',
        'تشغيل بالطاقة الشمسية أو البطاريات'
      ],
      icon: <Shield className="h-6 w-6" />,
      color: 'bg-orange-500'
    },
    {
      title: 'لوحات الكتابة المتحركة',
      description: 'لوحات إلكترونية متطورة لعرض النصوص المتحركة والرسائل الإعلانية. مثالية للمحلات التجارية والشركات التي تريد جذب انتباه العملاء.',
      image: movingTextImage,
      features: [
        'نصوص متحركة جذابة',
        'دعم كامل للغة العربية',
        'سهولة البرمجة والتحديث',
        'تأثيرات بصرية متنوعة',
        'تحكم عن بُعد'
      ],
      icon: <Settings className="h-6 w-6" />,
      color: 'bg-green-500'
    },
    {
      title: 'لوحات العداد الزمني للمشاريع',
      description: 'حلول متخصصة لعرض العدادات الزمنية للمشاريع الكبيرة، مع إمكانية عرض الأيام المتبقية أو المنقضية من المشروع.',
      image: timerImage,
      features: [
        'عداد تنازلي أو تصاعدي',
        'عرض التواريخ والأيام',
        'مناسب للمشاريع الحكومية والخاصة',
        'وضوح عالي من مسافات بعيدة',
        'برمجة مرنة'
      ],
      icon: <Settings className="h-6 w-6" />,
      color: 'bg-purple-500'
    },
    {
      title: 'لوحات محمولة',
      description: 'لوحات إلكترونية مصممة خصيصاً للتركيب على السيارات والوانيت، مثالية للحملات الإعلانية المتنقلة والأنشطة التجارية.',
      image: welcomeImage,
      features: [
        'تصميم خفيف ومتين',
        'سهولة التركيب والإزالة',
        'مقاومة للاهتزازات',
        'تشغيل من بطارية السيارة',
        'تحكم لاسلكي'
      ],
      icon: <Truck className="h-6 w-6" />,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            خدماتنا المتميزة
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من اللوحات الإلكترونية المتطورة لتلبية جميع احتياجاتكم في مختلف القطاعات
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${service.color} text-white`}>
                        {service.icon}
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        خدمة متميزة
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">المميزات:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                        onClick={() => window.open('https://wa.me/966504595049', '_blank')}
                      >
                        <MessageCircle className="h-4 w-4" />
                        استفسر عبر واتساب
                      </Button>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() => window.open('tel:+966594943322', '_self')}
                      >
                        <Phone className="h-4 w-4" />
                        اتصل للاستفسار
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Images Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            نماذج من أعمالنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={priceDisplayImage}
                alt="لوحة أسعار متعددة الألوان"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">لوحة أسعار متعددة الألوان</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={welcomeImage}
                alt="لوحة ترحيبية"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">لوحة ترحيبية إلكترونية</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={timerImage}
                alt="لوحة عداد زمني"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">لوحة عداد زمني للمشاريع</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-blue-50 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            هل تحتاج استشارة مجانية؟
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            تواصل معنا الآن للحصول على استشارة فنية مجانية وعرض سعر مخصص لمشروعك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
              onClick={() => window.open('https://wa.me/966504595049', '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
              واتساب: +966 50 459 5049
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
              onClick={() => window.open('tel:+966594943322', '_self')}
            >
              <Phone className="h-5 w-5" />
              هاتف: +966 59 594 3322
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

