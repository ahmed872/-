import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Phone, 
  Target, 
  Eye, 
  Award, 
  Users, 
  Zap, 
  Shield, 
  Clock, 
  CheckCircle,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';

// Import images
import aboutImage1 from '../assets/WhatsAppImage2025-08-04at11.42.24_9e2be5d1.jpg';
import aboutImage2 from '../assets/WhatsAppImage2025-08-04at11.42.27_b8c49d8d.jpg';

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'الجودة العالية',
      description: 'نلتزم بأعلى معايير الجودة في جميع منتجاتنا وخدماتنا'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'خدمة العملاء',
      description: 'نضع رضا عملائنا في المقدمة ونقدم دعماً متميزاً'
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: 'الابتكار',
      description: 'نواكب أحدث التقنيات ونطور حلولاً مبتكرة'
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: 'الموثوقية',
      description: 'نبني علاقات طويلة الأمد مع عملائنا بناءً على الثقة'
    }
  ];

  const achievements = [
    { number: '50+', label: 'مشروع منجز بنجاح' },
    { number: '5+', label: 'سنوات من الخبرة' },
    { number: '100%', label: 'رضا العملاء' },
    { number: '24/7', label: 'دعم فني متواصل' }
  ];

  const services = [
    'تصميم وتصنيع اللوحات الإلكترونية',
    'التركيب والصيانة الدورية',
    'الاستشارة الفنية المتخصصة',
    'الدعم الفني المتواصل',
    'ضمان شامل على جميع المنتجات',
    'خدمة ما بعد البيع المتميزة'
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
            من نحن
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن شركة رائدة في مجال تصنيع وتوريد اللوحات الإعلانية الإلكترونية في المملكة العربية السعودية
          </p>
        </motion.div>

        {/* Company Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              قصة نجاحنا
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              بدأت رحلتنا من رؤية واضحة: تقديم أفضل حلول اللوحات الإعلانية الإلكترونية في المنطقة. 
              نتميز بخبرتنا الواسعة وجودة منتجاتنا العالية التي تلبي احتياجات عملائنا في مختلف القطاعات.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              نحن نفخر بكوننا الشريك الموثوق لمحطات البنزين، مشاريع الطرق، والشركات التجارية في جميع أنحاء المملكة. 
              فريقنا المتخصص يعمل بجد لضمان تقديم منتجات تتميز بالجودة والمتانة والأداء المتميز.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                onClick={() => window.open('https://wa.me/966504595049', '_blank')}
              >
                <MessageCircle className="h-4 w-4" />
                تواصل معنا
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.open('tel:+966594943322', '_self')}
              >
                <Phone className="h-4 w-4" />
                اتصل بنا
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={aboutImage1}
              alt="أعمالنا في اللوحات الإلكترونية"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
          </div>
        </motion.div>

        {/* Vision and Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <Card className="p-8 bg-blue-50 border-blue-200">
            <CardContent className="pt-0">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">رؤيتنا</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                أن نكون الخيار الأول لحلول اللوحات الإعلانية الإلكترونية في المنطقة، 
                ونساهم في تطوير البنية التحتية الرقمية من خلال منتجات مبتكرة وعالية الجودة.
              </p>
            </CardContent>
          </Card>
          
          <Card className="p-8 bg-green-50 border-green-200">
            <CardContent className="pt-0">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">رسالتنا</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                تقديم منتجات عالية الجودة بأسعار تنافسية مع خدمة عملاء متميزة، 
                والمساهمة في نجاح مشاريع عملائنا من خلال حلول تقنية متطورة وموثوقة.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            قيمنا الأساسية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 text-white rounded-2xl p-8 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            إنجازاتنا بالأرقام
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services We Provide */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="relative">
            <img
              src={aboutImage2}
              alt="خدماتنا المتميزة"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-lg"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              الخدمات التي نقدمها
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              نقدم خدمات شاملة تغطي جميع احتياجاتكم في مجال اللوحات الإلكترونية، 
              من التصميم والتصنيع وحتى التركيب والصيانة.
            </p>
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-2xl p-8 mb-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            لماذا تختارنا؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">خبرة متميزة</h3>
              <p className="text-gray-600">
                سنوات من الخبرة في تصنيع وتركيب اللوحات الإلكترونية
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ضمان شامل</h3>
              <p className="text-gray-600">
                نقدم ضماناً شاملاً على جميع منتجاتنا وخدماتنا
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">تسليم سريع</h3>
              <p className="text-gray-600">
                نلتزم بمواعيد التسليم ونحرص على إنجاز المشاريع في الوقت المحدد
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            هل تريد معرفة المزيد عنا؟
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            تواصل معنا الآن للحصول على استشارة مجانية ومعرفة كيف يمكننا مساعدتك
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

export default About;

