import React from 'react';
import { motion } from "motion/react";

export default function PrivacyPolicy({ isAr }: { isAr: boolean }) {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-100"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 border-b pb-6">
            {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
          </h1>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                {isAr ? "1. مقدمة" : "1. Introduction"}
              </h2>
              <p>
                {isAr 
                  ? "نحن في ريف الأمثل للاستشارات الهندسية نلتزم بحماية خصوصيتك وبياناتك الشخصية. توضح هذه السياسة كيفية جمعنا واستخدامنا وحمايتنا للمعلومات التي تقدمها لنا."
                  : "We at Reef Al-Amthal Engineering Consulting are committed to protecting your privacy and personal data. This policy explains how we collect, use, and protect the information you provide to us."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                {isAr ? "2. المعلومات التي نجمعها" : "2. Information We Collect"}
              </h2>
              <p>
                {isAr 
                  ? "قد نجمع معلومات شخصية مثل الاسم، عنوان البريد الإلكتروني، ورقم الهاتف عندما تتواصل معنا عبر موقعنا الإلكتروني أو تطلب استشارة."
                  : "We may collect personal information such as name, email address, and phone number when you contact us via our website or request a consultation."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                {isAr ? "3. كيف نستخدم معلوماتك" : "3. How We Use Your Information"}
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>{isAr ? "للتواصل معك بخصوص استفساراتك ومشاريعك." : "To communicate with you regarding your inquiries and projects."}</li>
                <li>{isAr ? "لتحسين خدماتنا وتجربة المستخدم على موقعنا." : "To improve our services and the user experience on our website."}</li>
                <li>{isAr ? "لإرسال تحديثات أو معلومات هامة تتعلق بخدماتنا." : "To send updates or important information related to our services."}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                {isAr ? "4. حماية البيانات" : "4. Data Protection"}
              </h2>
              <p>
                {isAr 
                  ? "نحن نطبق إجراءات أمنية صارمة لحماية بياناتك من الوصول غير المصرح به أو التغيير أو الإفصاح."
                  : "We implement strict security measures to protect your data from unauthorized access, alteration, or disclosure."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                {isAr ? "5. ملفات تعريف الارتباط (Cookies)" : "5. Cookies"}
              </h2>
              <p>
                {isAr 
                  ? "يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة المرور على الموقع."
                  : "Our website uses cookies to improve the browsing experience and analyze website traffic."}
              </p>
            </section>

            <section className="pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-400 italic">
                {isAr 
                  ? "آخر تحديث: مارس 2024" 
                  : "Last updated: March 2024"}
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
