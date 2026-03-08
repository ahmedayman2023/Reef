import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Mail, Phone, Award, Users } from "lucide-react";
import { PROJECTS } from "../constants";

export default function TeamPage({ isAr }: { isAr: boolean }) {
  const uniqueSupervisors = Array.from(
    new Map(PROJECTS.map((project) => [project.supervisor.name, project.supervisor])).values()
  );

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-6" aria-labelledby="team-page-title">
        <header className="text-center mb-14">
          <h1 id="team-page-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            {isAr ? "فريقنا" : "Our Team"}
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {isAr
              ? "نخبة من المهندسين والمعماريين ومديري المشاريع يعملون معاً لتقديم حلول هندسية دقيقة ومستدامة تحقق أهداف عملائنا."
              : "An elite team of engineers, architects, and project managers working together to deliver accurate and sustainable engineering solutions."}
          </p>
        </header>

        <section
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
          aria-label={isAr ? "إحصائيات الفريق" : "Team stats"}
        >
          {[
            {
              icon: Users,
              titleAr: "خبرات متنوعة",
              titleEn: "Multidisciplinary Team",
              descAr: "خبرات تكاملية في التصميم والإشراف والتنفيذ.",
              descEn: "Integrated expertise in design, supervision, and execution.",
            },
            {
              icon: Award,
              titleAr: "جودة موثوقة",
              titleEn: "Trusted Quality",
              descAr: "التزام صارم بالمعايير الهندسية المحلية والعالمية.",
              descEn: "Strict adherence to local and international engineering standards.",
            },
            {
              icon: Mail,
              titleAr: "تواصل فعّال",
              titleEn: "Responsive Communication",
              descAr: "متابعة مستمرة وشفافة في جميع مراحل المشروع.",
              descEn: "Consistent and transparent follow-up across all project phases.",
            },
            {
              icon: Phone,
              titleAr: "دعم مباشر",
              titleEn: "Direct Support",
              descAr: "استجابة سريعة للاستفسارات الفنية والإدارية.",
              descEn: "Fast response to technical and administrative inquiries.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={index} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                <Icon className="w-6 h-6 text-emerald-600 mb-4" aria-hidden="true" />
                <h2 className="text-lg font-bold text-slate-900 mb-2">{isAr ? item.titleAr : item.titleEn}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{isAr ? item.descAr : item.descEn}</p>
              </article>
            );
          })}
        </section>

        <section aria-label={isAr ? "أعضاء الفريق" : "Team members"}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {uniqueSupervisors.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm"
              >
                <div className="aspect-[5/4] bg-slate-100">
                  <img
                    src={member.image}
                    alt={isAr ? member.nameAr : member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{isAr ? member.nameAr : member.name}</h3>
                  <p className="text-emerald-600 font-medium text-sm mb-4">{isAr ? member.roleAr : member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{isAr ? member.bioAr : member.bio}</p>

                  <h4 className="font-semibold text-slate-900 text-sm mb-2">
                    {isAr ? "أبرز التحديات التي تمت معالجتها" : "Key challenges solved"}
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                    {(isAr ? member.challengesSolvedAr : member.challengesSolved).map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="rounded-2xl bg-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h2 className="text-2xl font-bold mb-2">{isAr ? "ابدأ مشروعك مع فريق ريف" : "Start your project with Reef team"}</h2>
              <p className="text-white/70 text-sm">
                {isAr
                  ? "جاهزون لمناقشة متطلباتك الفنية وتقديم الاستشارة المناسبة منذ أول خطوة."
                  : "We are ready to discuss your technical requirements and provide the right consultation from day one."}
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition-colors font-bold"
            >
              {isAr ? "تواصل معنا" : "Contact us"}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
