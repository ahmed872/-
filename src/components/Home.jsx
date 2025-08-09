import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Phone, MessageCircle, Zap, Shield, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

// Import images
import heroImage from '../assets/WhatsAppImage2025-08-04at11.39.39_b9ac5bf7.jpg';
import gasStationImage from '../assets/WhatsAppImage2025-08-04at11.42.24_c7d99573.jpg';
import roadSignImage from '../assets/WhatsAppImage2025-08-04at11.42.27_3b2bbc73.jpg';
import welcomeSignImage from '../assets/WhatsAppImage2025-08-04at11.42.27_b8c49d8d.jpg';

const Home = () => {
  const services = [
    {
      title: 'لوحات أسعار محطات البنزين',
      description: 'لوحات LED عالية الوضوح لعرض أسعار الوقود بألوان متعددة',
      image: gasStationImage,
      link: '/services'
    },
    {
      title: 'لوحات مشاريع الطرق',
      description: 'لوحات محمولة للتحذيرات والإرشادات في مواقع العمل',
      image: heroImage,
      link: '/services'
    },
    {
      title: 'لوحات الكتابة المتحركة',
      description: 'عرض النصوص والرسائل الإعلانية بتأثيرات متحركة',
      image: welcomeSignImage,
      link: '/services'
    },
    {
      title: 'لوحات العداد الزمني',
      description: 'عدادات زمنية للمشاريع والفعاليات',
      image: roadSignImage,
      link: '/services'
    }
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: 'تقنية متطورة',
      description: 'أحدث تقنيات LED عالية الوضوح والكفاءة'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'جودة عالية',
      description: 'مقاومة للعوامل الجوية وضمان شامل'
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: 'تسليم سريع',
      description: 'تنفيذ المشاريع في أقل وقت ممكن'
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: 'خبرة واسعة',
      description: 'سنوات من الخبرة في مجال اللوحات الإلكترونية'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                حلول اللوحات الإعلانية
                <span className="text-blue-300"> الإلكترونية المتطورة</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                نحن متخصصون في تصميم وتصنيع اللوحات الإعلانية الإلكترونية عالية الجودة. 
                نقدم حلولاً متكاملة لمحطات البنزين، مشاريع الطرق، والإعلانات التجارية بأحدث التقنيات وأفضل الأسعار.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 flex items-center gap-2"
                  onClick={() => window.open('https://wa.me/966504595049', '_blank')}
                >
                  <MessageCircle className="h-5 w-5" />
                  تواصل معنا عبر واتساب
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900 flex items-center gap-2"
                  onClick={() => window.open('tel:+966594943322', '_self')}
                >
                  <Phone className="h-5 w-5" />
                  اتصل الآن
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroImage}
                alt="لوحة إعلانية إلكترونية"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              لماذا تختارنا؟
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم أفضل الحلول في مجال اللوحات الإلكترونية مع ضمان الجودة والخدمة المتميزة
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              خدماتنا المتميزة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة شاملة من اللوحات الإلكترونية لتلبية جميع احتياجاتكم
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative h-64">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link to={service.link}>
                      <Button variant="outline" className="flex items-center gap-2">
                        اعرف المزيد
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              هل تحتاج لوحة إعلانية إلكترونية؟
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
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
                className="border-white text-white hover:bg-white hover:text-blue-600 flex items-center gap-2"
                onClick={() => window.open('tel:+966594943322', '_self')}
              >
                <Phone className="h-5 w-5" />
                هاتف: +966 59 594 3322
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

