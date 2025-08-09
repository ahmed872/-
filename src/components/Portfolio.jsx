import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Phone, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

// Import all images
import image1 from '../assets/WhatsAppImage2025-08-04at11.39.39_b9ac5bf7.jpg';
import image2 from '../assets/WhatsAppImage2025-08-04at11.42.18_9acb3c4a.jpg';
import image3 from '../assets/WhatsAppImage2025-08-04at11.42.20_c44ab505.jpg';
import image4 from '../assets/WhatsAppImage2025-08-04at11.42.20_8987f944.jpg';
import image5 from '../assets/WhatsAppImage2025-08-04at11.42.21_37b38b32.jpg';
import image6 from '../assets/WhatsAppImage2025-08-04at11.42.21_bdaa1d25.jpg';
import image7 from '../assets/WhatsAppImage2025-08-04at11.42.24_c7d99573.jpg';
import image8 from '../assets/WhatsAppImage2025-08-04at11.42.24_9e2be5d1.jpg';
import image9 from '../assets/WhatsAppImage2025-08-04at11.42.25_02dc7ef9.jpg';
import image10 from '../assets/WhatsAppImage2025-08-04at11.42.27_b8c49d8d.jpg';
import image11 from '../assets/WhatsAppImage2025-08-04at11.42.27_3b2bbc73.jpg';
import image12 from '../assets/WhatsAppImage2025-08-04at11.42.29_11b0f923.jpg';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'لوحة مشاريع الطرق المحمولة',
      description: 'لوحة إعلانية إلكترونية محمولة على مقطورة لمشاريع الطرق مع رسائل تحذيرية باللغتين العربية والإنجليزية',
      image: image1,
      category: 'road-projects',
      tags: ['محمولة', 'مشاريع الطرق', 'ثنائية اللغة']
    },
    {
      id: 2,
      title: 'لوحات أسعار محطة البنزين',
      description: 'لوحات LED لعرض أسعار الوقود بوضوح عالي ودقة في الأرقام',
      image: image2,
      category: 'gas-station',
      tags: ['محطات البنزين', 'أسعار', 'LED']
    },
    {
      id: 3,
      title: 'لوحة أسعار حمراء',
      description: 'لوحة إلكترونية لعرض الأسعار باللون الأحمر المميز',
      image: image3,
      category: 'gas-station',
      tags: ['أسعار', 'أحمر', 'وضوح عالي']
    },
    {
      id: 4,
      title: 'لوحة إلكترونية جانبية',
      description: 'تصميم نحيف ومدمج للوحة إلكترونية عالية الجودة',
      image: image4,
      category: 'electronic',
      tags: ['تصميم نحيف', 'مدمج', 'عالي الجودة']
    },
    {
      id: 5,
      title: 'لوحة أسعار متعددة الألوان',
      description: 'لوحة عمودية تعرض أسعار متعددة بألوان مختلفة (أخضر، أحمر، كهرماني)',
      image: image5,
      category: 'gas-station',
      tags: ['متعدد الألوان', 'عمودية', 'أسعار متعددة']
    },
    {
      id: 6,
      title: 'لوحات أسعار أفقية',
      description: 'لوحتان أفقيتان لعرض الأسعار بألوان مختلفة',
      image: image6,
      category: 'gas-station',
      tags: ['أفقية', 'ألوان متعددة', 'أسعار']
    },
    {
      id: 7,
      title: 'لوحة أسعار محطة وقود مكتملة',
      description: 'نظام متكامل لعرض أسعار الوقود مع اسم المحطة',
      image: image7,
      category: 'gas-station',
      tags: ['نظام متكامل', 'اسم المحطة', 'أسعار الوقود']
    },
    {
      id: 8,
      title: 'مجموعة لوحات أسعار',
      description: 'مجموعة متنوعة من لوحات الأسعار بألوان وأحجام مختلفة',
      image: image8,
      category: 'gas-station',
      tags: ['مجموعة متنوعة', 'أحجام مختلفة', 'ألوان متعددة']
    },
    {
      id: 9,
      title: 'لوحة كتابة متحركة',
      description: 'لوحة إلكترونية لعرض النصوص المتحركة باللغة العربية',
      image: image9,
      category: 'moving-text',
      tags: ['نص متحرك', 'عربي', 'إعلانية']
    },
    {
      id: 10,
      title: 'لوحة ترحيبية إلكترونية',
      description: 'لوحة إلكترونية كبيرة لعرض رسائل الترحيب مع إطار مضيء',
      image: image10,
      category: 'welcome',
      tags: ['ترحيبية', 'إطار مضيء', 'كبيرة']
    },
    {
      id: 11,
      title: 'لوحة عداد زمني للمشاريع',
      description: 'لوحة عداد زمني لعرض الأيام المتبقية للمشاريع',
      image: image11,
      category: 'timer',
      tags: ['عداد زمني', 'مشاريع', 'أيام متبقية']
    },
    {
      id: 12,
      title: 'لوحات أسعار متقدمة',
      description: 'لوحات أسعار متطورة بتقنية LED عالية الوضوح',
      image: image12,
      category: 'gas-station',
      tags: ['متقدمة', 'LED', 'وضوح عالي']
    }
  ];

  const categories = [
    { id: 'all', name: 'جميع الأعمال', count: portfolioItems.length },
    { id: 'gas-station', name: 'محطات البنزين', count: portfolioItems.filter(item => item.category === 'gas-station').length },
    { id: 'road-projects', name: 'مشاريع الطرق', count: portfolioItems.filter(item => item.category === 'road-projects').length },
    { id: 'moving-text', name: 'الكتابة المتحركة', count: portfolioItems.filter(item => item.category === 'moving-text').length },
    { id: 'timer', name: 'العداد الزمني', count: portfolioItems.filter(item => item.category === 'timer').length },
    { id: 'welcome', name: 'لوحات ترحيبية', count: portfolioItems.filter(item => item.category === 'welcome').length },
    { id: 'electronic', name: 'لوحات إلكترونية', count: portfolioItems.filter(item => item.category === 'electronic').length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

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
            معرض أعمالنا
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            استعرض مجموعة من أفضل مشاريعنا في مجال اللوحات الإعلانية الإلكترونية التي نفذناها لعملائنا
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-lg font-semibold text-gray-900">تصنيف الأعمال:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.name}
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs bg-white/90 text-gray-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-blue-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">مشروع منجز</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">رضا العملاء</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-600">سنوات خبرة</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">دعم فني</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            هل أعجبتك أعمالنا؟
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            تواصل معنا الآن لتنفيذ مشروعك القادم بنفس الجودة والاحترافية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
              onClick={() => window.open('https://wa.me/966504595049', '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
              تواصل عبر واتساب
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
              onClick={() => window.open('tel:+966594943322', '_self')}
            >
              <Phone className="h-5 w-5" />
              اتصل للاستفسار
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;

