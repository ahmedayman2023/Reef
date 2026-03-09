import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { useState, FormEvent, ChangeEvent } from "react";

export default function ContactPage({ isAr }: { isAr: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = isAr ? "الاسم مطلوب" : "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = isAr ? "البريد الإلكتروني مطلوب" : "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = isAr ? "البريد الإلكتروني غير صحيح" : "Invalid email format";
    }
    if (!formData.message.trim()) {
      newErrors.message = isAr ? "الرسالة مطلوبة" : "Message is required";
    }
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-700 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{isAr ? "المواقع" : "Locations"}</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-bold text-primary-700 mb-1">{isAr ? "الرياض" : "Riyadh"}</p>
                        <p className="text-slate-600 text-sm">
                          {isAr 
                            ? "ظهرة لبن – طريق نجد" 
                            : "Dhahrat Laban – Najd Road"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary-700 mb-1">{isAr ? "الدمام" : "Dammam"}</p>
                        <p className="text-slate-600 text-sm">
                          {isAr 
                            ? "حي البديع 3752 - شارع الملك عبدالعزيز - عمارة أبا حسين للكهرباء" 
                            : "Al-Badeea District 3752 - King Abdulaziz Street - Aba Hussain Electrical Building"}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-primary-700 mb-1">{isAr ? "الخبر" : "Khobar"}</p>
                        <p className="text-slate-600 text-sm">
                          {isAr 
                            ? "حي الجسر – طريق مجلس التعاون – مبنى رقم 7785" 
                            : "Al-Jisr District – GCC Road – Building No. 7785"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-700 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{isAr ? "الهاتف" : "Phone"}</h4>
                    <div className="text-slate-600" dir="ltr">
                      <p>0138335851</p>
                      <p>+966 50 963 4367</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-700 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{isAr ? "البريد الإلكتروني" : "Email"}</h4>
                    <a href="mailto:Info@reef-consult.com" className="text-slate-600 hover:text-primary-700 transition-colors">Info@reef-consult.com</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-700 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{isAr ? "ساعات العمل" : "Working Hours"}</h4>
                    <div className="text-slate-600 text-sm space-y-1">
                      <p>
                        {isAr 
                          ? "السبت - الأربعاء: 9:00 ص - 1:00 م | 4:00 م - 8:30 م" 
                          : "Sat - Wed: 9:00 AM - 1:00 PM | 4:00 PM - 8:30 PM"}
                      </p>
                      <p>
                        {isAr 
                          ? "الخميس: 9:00 ص - 2:30 م" 
                          : "Thursday: 9:00 AM - 2:30 PM"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-700 shrink-0">
                    <span className="font-bold text-[10px]">VAT</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{isAr ? "البيانات الضريبية والتجارية" : "Tax & Commercial Info"}</h4>
                    <div className="text-slate-600 text-sm">
                      <p>{isAr ? "سجل تجاري: 7099149712" : "C.R No. 7099149712"}</p>
                      <p>{isAr ? "الرقم الضريبي: 331155673920003" : "VAT No. 331155673920003"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl text-white">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-4 py-6"
                >
                  <div className="w-16 h-16 bg-primary-500/20 text-primary-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold">
                    {isAr ? "تم الإرسال بنجاح!" : "Sent Successfully!"}
                  </h4>
                  <p className="text-white/60 text-sm">
                    {isAr 
                      ? "شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن."
                      : "Thank you for contacting us. We will get back to you as soon as possible."}
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-primary-400 font-bold hover:underline text-sm"
                  >
                    {isAr ? "إرسال رسالة أخرى" : "Send another message"}
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-4">{isAr ? "هل لديك استفسار سريع؟" : "Have a quick question?"}</h3>
                  <p className="text-white/60 mb-6 text-sm">
                    {isAr 
                      ? "فريقنا جاهز للرد على جميع تساؤلاتكم الهندسية والفنية في أسرع وقت ممكن."
                      : "Our team is ready to answer all your engineering and technical questions as quickly as possible."}
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={isAr ? "الاسم" : "Name"} 
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} focus:border-primary-500 outline-none transition-all text-sm`}
                      />
                      {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={isAr ? "البريد الإلكتروني" : "Email"} 
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-primary-500 outline-none transition-all text-sm`}
                      />
                      {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                    </div>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3} 
                      placeholder={isAr ? "رسالتك" : "Your Message"} 
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} focus:border-primary-500 outline-none transition-all text-sm`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-[10px] mt-1">{errors.message}</p>}
                    <button 
                      disabled={isSubmitting}
                      className={`w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          {isAr ? "جاري الإرسال..." : "Sending..."}
                        </>
                      ) : (
                        isAr ? "إرسال" : "Send"
                      )}
                    </button>
                  </form>
                </>
              )}
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
