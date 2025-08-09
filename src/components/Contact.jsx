import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Headphones
} from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
مرحباً، أريد الاستفسار عن خدماتكم:

الاسم: ${formData.name}
الهاتف: ${formData.phone}
البريد الإلكتروني: ${formData.email}
نوع الخدمة: ${formData.service}
الرسالة: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/966504595049?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <MessageCircle className="h-6 w-6 text-green-600" />,
      title: 'واتساب',
      value: '+966 50 459 5049',
      action: () => window.open('https://wa.me/966504595049', '_blank'),
      description: 'للاستفسارات السريعة والدعم الفوري'
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'هاتف وواتساب',
      value: '+966 59 594 3322',
      action: () => window.open('tel:+966594943322', '_self'),
      description: 'للمكالمات المباشرة والاستشارات'
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-600" />,
      title: 'ساعات العمل',
      value: 'السبت - الخميس: 8:00 ص - 6:00 م',
      description: 'الجمعة: مغلق'
    },
    {
      icon: <Headphones className="h-6 w-6 text-purple-600" />,
      title: 'الدعم الفني',
      value: '24/7 متاح',
      description: 'دعم فني متواصل لجميع عملائنا'
    }
  ];

  const services = [
    'لوحات أسعار محطات البنزين',
    'لوحات مشاريع الطرق',
    'لوحات الكتابة المتحركة',
    'لوحات العداد الزمني',
    'لوحات محمولة',
    'استشارة فنية',
    'صيانة وإصلاح',
    'أخرى'
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
            اتصل بنا
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك! تواصل معنا للحصول على استشارة مجانية أو لمناقشة مشروعك القادم
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              معلومات التواصل
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer" onClick={info.action}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-800 font-medium mb-1">
                          {info.value}
                        </p>
                        <p className="text-sm text-gray-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 space-y-4"
            >
              <Button
                className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
                onClick={() => window.open('https://wa.me/966504595049', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
                تواصل عبر واتساب
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => window.open('tel:+966594943322', '_self')}
              >
                <Phone className="h-5 w-5" />
                اتصل الآن
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">أرسل لنا رسالة</CardTitle>
                <p className="text-gray-600">
                  املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      تم إرسال رسالتك بنجاح!
                    </h3>
                    <p className="text-gray-600">
                      سيتم توجيهك إلى واتساب لإكمال المحادثة
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">الاسم الكامل *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="أدخل اسمك الكامل"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">رقم الهاتف *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="05xxxxxxxx"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">نوع الخدمة المطلوبة</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">اختر نوع الخدمة</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">الرسالة *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        rows={5}
                        placeholder="اكتب رسالتك هنا... أخبرنا عن مشروعك أو استفسارك"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                    >
                      <Send className="h-5 w-5" />
                      إرسال الرسالة
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      * الحقول المطلوبة. سيتم توجيهك إلى واتساب لإكمال المحادثة.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Services We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            الخدمات التي نقدمها
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, -1).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-4 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-4">
                    <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900">{service}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-50 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            الأسئلة الشائعة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                كم يستغرق تنفيذ المشروع؟
              </h3>
              <p className="text-gray-600">
                يعتمد على حجم المشروع ونوع اللوحة، عادة من 3-10 أيام عمل.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                هل تقدمون خدمة الصيانة؟
              </h3>
              <p className="text-gray-600">
                نعم، نقدم خدمة صيانة شاملة مع ضمان على جميع منتجاتنا.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                هل يمكن تخصيص التصميم؟
              </h3>
              <p className="text-gray-600">
                بالطبع، نقدم تصاميم مخصصة حسب احتياجات كل عميل.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ما هي مدة الضمان؟
              </h3>
              <p className="text-gray-600">
                نقدم ضمان شامل لمدة سنة على جميع منتجاتنا وخدماتنا.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

