import React from 'react';
import { motion } from "motion/react";

export default function TermsConditions({ isAr }: { isAr: boolean }) {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-slate-100"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 border-b pb-6">
            {isAr ? "الشروط والأحكام" : "Terms & Conditions"}
          </h1>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                {isAr ? "1. قبول الشروط" : "1. Acceptance of Terms"}
              </h2>
              <p>
                {isAr 
                  ? "باستخدامك لموقع ريف الأمثل للاستشارات الهندسية، فإنك توافق على الالتزام بهذه الشروط والأحكام وجميع القوانين واللوائح المعمول بها في المملكة العربية السعودية."
                  : "By using the Reef Al-Amthal Engineering Consulting website, you agree to be bound by these terms and conditions and all applicable laws and regulations in the Kingdom of Saudi Arabia."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                {isAr ? "2. الملكية الفكرية" : "2. Intellectual Property"}
              </h2>
              <p>
                {isAr 
                  ? "جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص والرسومات والشعارات والتصاميم، هي ملك لشركة ريف الأمثل ومحمية بموجب قوانين الملكية الفكرية."
                  : "All content on this website, including text, graphics, logos, and designs, is the property of Reef Al-Amthal and is protected by intellectual property laws."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                {isAr ? "3. الاستخدام المصرح به" : "3. Authorized Use"}
              </h2>
              <p>
                {isAr 
                  ? "يُسمح لك باستخدام الموقع لأغراض مشروعة فقط وللحصول على معلومات حول خدماتنا الهندسية. يُحظر أي استخدام غير مصرح به للموقع أو محتوياته."
                  : "You are permitted to use the website for lawful purposes only and to obtain information about our engineering services. Any unauthorized use of the website or its contents is prohibited."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                {isAr ? "4. إخلاء المسؤولية" : "4. Disclaimer"}
              </h2>
              <p>
                {isAr 
                  ? "تُقدم المعلومات على هذا الموقع 'كما هي' دون أي ضمانات. لا نتحمل المسؤولية عن أي أضرار ناتجة عن استخدام الموقع أو الاعتماد على المعلومات الواردة فيه."
                  : "The information on this website is provided 'as is' without any warranties. We are not liable for any damages resulting from the use of the website or reliance on the information contained therein."}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                {isAr ? "5. التعديلات" : "5. Modifications"}
              </h2>
              <p>
                {isAr 
                  ? "نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت دون إشعار مسبق. يُنصح بمراجعة هذه الصفحة بشكل دوري."
                  : "We reserve the right to modify these terms and conditions at any time without prior notice. It is recommended to review this page periodically."}
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
