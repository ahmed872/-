import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              اللوحات الإلكترونية المتطورة
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              نحن متخصصون في تصميم وتصنيع اللوحات الإعلانية الإلكترونية عالية الجودة. 
              نقدم حلولاً متكاملة لمحطات البنزين، مشاريع الطرق، والإعلانات التجارية بأحدث التقنيات.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+966 59 594 3322</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-400" />
                <span className="text-gray-300">+966 50 459 5049</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors">
                  معرض الأعمال
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2 text-gray-300">
              <li>لوحات أسعار محطات البنزين</li>
              <li>لوحات مشاريع الطرق</li>
              <li>لوحات الكتابة المتحركة</li>
              <li>لوحات العداد الزمني</li>
              <li>لوحات محمولة</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 اللوحات الإلكترونية المتطورة. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
            <button
              onClick={() => window.open('tel:+966594943322', '_self')}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </button>
            <button
              onClick={() => window.open('https://wa.me/966504595049', '_blank')}
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

