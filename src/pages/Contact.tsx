import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage({ isAr }: { isAr: boolean }) {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {isAr ? "اتصل بنا" : "Contact Us"}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {isAr 
              ? "نحن هنا لمساعدتك في تحويل رؤيتك إلى واقع. تواصل معنا لمناقشة مشروعك القادم."
              : "We are here to help you turn your vision into reality. Contact us to discuss your next project."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Form */}
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                {isAr ? "معلومات التواصل" : "Contact Information"}
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{isAr ? "الموقع" : "Location"}</h4>
                    <p className="text-slate-600">
                      {isAr 
                        ? "شارع الملك عبدالعزيز، البديع، الدمام 32415، المملكة العربية السعودية" 
                        : "King Abdulaziz St, Al Badi, Dammam 32415, Saudi Arabia"}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">C4W7+JP الدمام</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{isAr ? "الهاتف" : "Phone"}</h4>
                    <p className="text-slate-600" dir="ltr">+966 50 963 4367</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{isAr ? "البريد الإلكتروني" : "Email"}</h4>
                    <p className="text-slate-600">info@reefalamthal.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{isAr ? "ساعات العمل" : "Working Hours"}</h4>
                    <p className="text-slate-600">
                      {isAr ? "الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً" : "Sunday - Thursday: 8:00 AM - 5:00 PM"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">{isAr ? "هل لديك استفسار سريع؟" : "Have a quick question?"}</h3>
              <p className="text-white/60 mb-6 text-sm">
                {isAr 
                  ? "فريقنا جاهز للرد على جميع تساؤلاتكم الهندسية والفنية في أسرع وقت ممكن."
                  : "Our team is ready to answer all your engineering and technical questions as quickly as possible."}
              </p>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder={isAr ? "الاسم" : "Name"} 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-all text-sm"
                />
                <input 
                  type="email" 
                  placeholder={isAr ? "البريد الإلكتروني" : "Email"} 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-all text-sm"
                />
                <textarea 
                  rows={3} 
                  placeholder={isAr ? "رسالتك" : "Your Message"} 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-all text-sm"
                ></textarea>
                <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold transition-all">
                  {isAr ? "إرسال" : "Send"}
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[500px] bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d893.0708761171412!2d50.114285019234366!3d26.446588960271416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb9a5c907081%3A0xe6b249e67c45fe26!2sReef%20Engineering%20Consultant!5e0!3m2!1sar!2ssa!4v1772921089310!5m2!1sar!2ssa" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '600px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Reef Engineering Consultant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
