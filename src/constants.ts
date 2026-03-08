import { 
  Building2, 
  HardHat, 
  Compass, 
  Globe, 
  Briefcase, 
  Lightbulb,
  Leaf 
} from "lucide-react";
import { Service, Project, BlogPost } from "./types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Architectural Design",
    titleAr: "التصميم المعماري",
    description: "Innovative and functional architectural solutions that blend aesthetics with practicality.",
    descriptionAr: "حلول معمارية مبتكرة وعملية تمزج بين الجمال والوظيفة.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200",
    longDescription: "Our architectural design service is built on the philosophy that every building should tell a story. We work closely with our clients to understand their needs, lifestyle, and aspirations, translating them into spaces that are not only visually stunning but also highly functional and environmentally responsible. From residential villas to commercial complexes, we apply the latest design trends and technologies to ensure every project is a landmark of excellence.",
    longDescriptionAr: "تعتمد خدمة التصميم المعماري لدينا على فلسفة مفادها أن كل مبنى يجب أن يحكي قصة. نحن نعمل عن كثب مع عملائنا لفهم احتياجاتهم ونمط حياتهم وتطلعاتهم، وترجمتها إلى مساحات ليست مذهلة بصرياً فحسب، بل أيضاً وظيفية للغاية ومسؤولة بيئياً. من الفلل السكنية إلى المجمعات التجارية، نطبق أحدث اتجاهات التصميم والتقنيات لضمان أن يكون كل مشروع علامة فارقة في التميز.",
    benefits: [
      "Optimized space utilization for maximum efficiency",
      "Sustainable design practices reducing environmental impact",
      "Unique aesthetic identity reflecting client vision",
      "Seamless integration of indoor and outdoor spaces"
    ],
    benefitsAr: [
      "تحسين استغلال المساحات لتحقيق أقصى قدر من الكفاءة",
      "ممارسات التصميم المستدام التي تقلل من الأثر البيئي",
      "هوية جمالية فريدة تعكس رؤية العميل",
      "تكامل سلس بين المساحات الداخلية والخارجية"
    ],
    process: [
      { step: 1, title: "Discovery", titleAr: "الاكتشاف", description: "Understanding client goals, site analysis, and project requirements.", descriptionAr: "فهم أهداف العميل، تحليل الموقع، ومتطلبات المشروع." },
      { step: 2, title: "Concept Design", titleAr: "تصميم المفهوم", description: "Developing initial sketches and spatial layouts.", descriptionAr: "تطوير المخططات الأولية والتوزيعات المكانية." },
      { step: 3, title: "Detailed Design", titleAr: "التصميم التفصيلي", description: "Refining the concept into detailed architectural plans.", descriptionAr: "تحويل المفهوم إلى مخططات معمارية تفصيلية." },
      { step: 4, title: "Final Review", titleAr: "المراجعة النهائية", description: "Finalizing all documents for implementation.", descriptionAr: "نهائية جميع الوثائق للتنفيذ." }
    ]
  },
  {
    id: 2,
    title: "Structural Engineering",
    titleAr: "الهندسة الإنشائية",
    description: "Safe, efficient, and sustainable structural designs for all types of buildings.",
    descriptionAr: "تصاميم إنشائية آمنة وفعالة ومستدامة لجميع أنواع المباني.",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
    longDescription: "Safety and stability are the cornerstones of our structural engineering services. Our team of expert engineers utilizes advanced computational tools and analysis techniques to design structures that can withstand the test of time and environmental challenges. We focus on optimizing material usage without compromising strength, ensuring cost-effective and sustainable solutions for projects of any scale.",
    longDescriptionAr: "تعد السلامة والاستقرار حجر الزاوية في خدمات الهندسة الإنشائية لدينا. يستخدم فريقنا من المهندسين الخبراء أدوات حسابية وتقنيات تحليل متقدمة لتصميم هياكل يمكنها الصمود أمام اختبار الزمن والتحديات البيئية. نحن نركز على تحسين استخدام المواد دون المساس بالقوة، مما يضمن حلولاً فعالة من حيث التكلفة ومستدامة للمشاريع من أي حجم.",
    benefits: [
      "Rigorous safety analysis and compliance",
      "Cost-effective structural solutions",
      "Use of advanced materials and technologies",
      "Long-term structural durability and resilience"
    ],
    benefitsAr: [
      "تحليل دقيق للسلامة والامتثال للمعايير",
      "حلول إنشائية فعالة من حيث التكلفة",
      "استخدام مواد وتقنيات متقدمة",
      "متانة إنشائية ومرونة على المدى الطويل"
    ],
    process: [
      { step: 1, title: "Site Assessment", titleAr: "تقييم الموقع", description: "Evaluating soil conditions and environmental factors.", descriptionAr: "تقييم ظروف التربة والعوامل البيئية." },
      { step: 2, title: "Structural Analysis", titleAr: "التحليل الإنشائي", description: "Performing complex calculations and modeling.", descriptionAr: "إجراء حسابات ونمذجة معقدة." },
      { step: 3, title: "Drafting Plans", titleAr: "صياغة المخططات", description: "Creating precise structural drawings and specifications.", descriptionAr: "إنشاء رسومات ومواصفات إنشائية دقيقة." },
      { step: 4, title: "Quality Control", titleAr: "مراقبة الجودة", description: "Final verification of structural integrity.", descriptionAr: "التحقق النهائي من السلامة الإنشائية." }
    ]
  },
  {
    id: 3,
    title: "Interior Design",
    titleAr: "التصميم الداخلي",
    description: "Creating inspiring interior spaces that reflect your vision and enhance lifestyle.",
    descriptionAr: "خلق مساحات داخلية ملهمة تعكس رؤيتك وتعزز نمط الحياة.",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200",
    longDescription: "Interior design is about more than just aesthetics; it's about how a space feels and functions. We specialize in creating bespoke interiors that harmonize with the architectural shell while providing a unique atmosphere tailored to the user. Our designs prioritize comfort, lighting, and material selection to create environments that enhance well-being and productivity.",
    longDescriptionAr: "التصميم الداخلي هو أكثر من مجرد جماليات؛ إنه يتعلق بكيفية الشعور بالمساحة ووظيفتها. نحن متخصصون في إنشاء تصميمات داخلية مخصصة تتناغم مع الهيكل المعماري مع توفير جو فريد مصمم خصيصاً للمستخدم. تعطي تصاميمنا الأولوية للراحة والإضاءة واختيار المواد لإنشاء بيئات تعزز الرفاهية والإنتاجية.",
    benefits: [
      "Bespoke furniture and lighting solutions",
      "Enhanced mood and productivity through design",
      "High-quality material and finish selection",
      "Functional layouts tailored to user needs"
    ],
    benefitsAr: [
      "حلول مخصصة للأثاث والإضاءة",
      "تحسين الحالة المزاجية والإنتاجية من خلال التصميم",
      "اختيار مواد وتشطيبات عالية الجودة",
      "توزيعات وظيفية مصممة خصيصاً لاحتياجات المستخدم"
    ],
    process: [
      { step: 1, title: "Mood Boarding", titleAr: "لوحة المفاهيم", description: "Defining the aesthetic direction and color palette.", descriptionAr: "تحديد الاتجاه الجمالي ولوحة الألوان." },
      { step: 2, title: "Space Planning", titleAr: "تخطيط المساحة", description: "Optimizing the layout for flow and function.", descriptionAr: "تحسين التوزيع لضمان الانسيابية والوظيفة." },
      { step: 3, title: "Material Selection", titleAr: "اختيار المواد", description: "Choosing finishes, fabrics, and furniture.", descriptionAr: "اختيار التشطيبات والأقمشة والأثاث." },
      { step: 4, title: "Implementation", titleAr: "التنفيذ", description: "Overseeing the transformation of the space.", descriptionAr: "الإشراف على تحويل المساحة." }
    ]
  },
  {
    id: 4,
    title: "Project Management",
    titleAr: "إدارة المشاريع",
    description: "Comprehensive oversight to ensure projects are delivered on time and within budget.",
    descriptionAr: "إشراف شامل لضمان تسليم المشاريع في الوقت المحدد وضمن الميزانية.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    longDescription: "Managing a construction project requires a delicate balance of time, cost, and quality. Our project management team acts as the bridge between design and reality, ensuring every phase of the project is executed according to plan. We handle everything from vendor coordination to risk management, providing our clients with peace of mind and successful project outcomes.",
    longDescriptionAr: "تتطلب إدارة مشروع البناء توازناً دقيقاً بين الوقت والتكلفة والجودة. يعمل فريق إدارة المشاريع لدينا كجسر بين التصميم والواقع، مما يضمن تنفيذ كل مرحلة من مراحل المشروع وفقاً للخطة. نحن نتولى كل شيء من تنسيق الموردين إلى إدارة المخاطر، مما يوفر لعملائنا راحة البال ونتائج مشروع ناجحة.",
    benefits: [
      "Strict adherence to timelines and milestones",
      "Budget optimization and cost control",
      "Risk mitigation and problem-solving",
      "Quality assurance throughout the project lifecycle"
    ],
    benefitsAr: [
      "الالتزام الصارم بالجداول الزمنية والمعالم",
      "تحسين الميزانية والتحكم في التكاليف",
      "تخفيف المخاطر وحل المشكلات",
      "ضمان الجودة طوال دورة حياة المشروع"
    ],
    process: [
      { step: 1, title: "Planning", titleAr: "التخطيط", description: "Defining project scope, schedule, and budget.", descriptionAr: "تحديد نطاق المشروع والجدول الزمني والميزانية." },
      { step: 2, title: "Procurement", titleAr: "المشتريات", description: "Selecting vendors and managing contracts.", descriptionAr: "اختيار الموردين وإدارة العقود." },
      { step: 3, title: "Execution", titleAr: "التنفيذ", description: "Monitoring progress and managing site activities.", descriptionAr: "مراقبة التقدم وإدارة أنشطة الموقع." },
      { step: 4, title: "Closing", titleAr: "الإغلاق", description: "Final inspections and project handover.", descriptionAr: "عمليات التفتيش النهائية وتسليم المشروع." }
    ]
  },
  {
    id: 5,
    title: "Technical Consultation",
    titleAr: "الاستشارات الفنية",
    description: "Expert advice on engineering challenges, feasibility studies, and regulations.",
    descriptionAr: "نصائح الخبراء بشأن التحديات الهندسية ودراسات الجدوى واللوائح.",
    icon: Lightbulb,
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1200",
    longDescription: "In the complex world of engineering and construction, expert advice can save significant time and resources. Our technical consultation services provide clients with deep insights into feasibility, regulatory compliance, and innovative engineering solutions. Whether you are at the early stages of an idea or facing a specific technical challenge, our experts are here to guide you.",
    longDescriptionAr: "في عالم الهندسة والبناء المعقد، يمكن لنصيحة الخبراء توفير وقت وموارد كبيرة. توفر خدمات الاستشارات الفنية لدينا للعملاء رؤى عميقة حول الجدوى والامتثال التنظيمي والحلول الهندسية المبتكرة. سواء كنت في المراحل الأولى من فكرة ما أو تواجه تحدياً فنياً معيناً، فإن خبرائنا هنا لإرشادك.",
    benefits: [
      "In-depth feasibility and risk analysis",
      "Expert guidance on local and international regulations",
      "Innovative solutions to complex technical issues",
      "Strategic planning for long-term project success"
    ],
    benefitsAr: [
      "تحليل متعمق للجدوى والمخاطر",
      "توجيه الخبراء بشأن اللوائح المحلية والدولية",
      "حلول مبتكرة للمشكلات الفنية المعقدة",
      "تخطيط استراتيجي لنجاح المشروع على المدى الطويل"
    ],
    process: [
      { step: 1, title: "Initial Inquiry", titleAr: "الاستفسار الأولي", description: "Discussing the client's needs and challenges.", descriptionAr: "مناقشة احتياجات العميل وتحدياته." },
      { step: 2, title: "Analysis", titleAr: "التحليل", description: "Conducting thorough research and technical evaluation.", descriptionAr: "إجراء بحث شامل وتقييم فني." },
      { step: 3, title: "Reporting", titleAr: "تقديم التقارير", description: "Providing a detailed report with recommendations.", descriptionAr: "تقديم تقرير مفصل مع التوصيات." },
      { step: 4, title: "Follow-up", titleAr: "المتابعة", description: "Assisting with the implementation of advice.", descriptionAr: "المساعدة في تنفيذ النصائح." }
    ]
  },
  {
    id: 6,
    title: "Urban Planning",
    titleAr: "التخطيط العمراني",
    description: "Designing sustainable communities and urban environments for the future.",
    descriptionAr: "تصميم مجتمعات وبيئات حضرية مستدامة للمستقبل.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200",
    longDescription: "Urban planning is about creating the framework for vibrant, sustainable, and livable communities. We take a holistic approach to urban design, considering social, economic, and environmental factors to create master plans that foster growth and well-being. Our designs prioritize connectivity, green spaces, and efficient infrastructure to build the cities of tomorrow.",
    longDescriptionAr: "يتعلق التخطيط العمراني بإنشاء إطار عمل لمجتمعات نابضة بالحياة ومستدامة وقابلة للعيش. نحن نتبع نهجاً شاملاً للتصميم الحضري، مع مراعاة العوامل الاجتماعية والاقتصادية والبيئية لإنشاء مخططات رئيسية تعزز النمو والرفاهية. تعطي تصاميمنا الأولوية للاتصال والمساحات الخضراء والبنية التحتية الفعالة لبناء مدن الغد.",
    benefits: [
      "Sustainable and resilient community design",
      "Enhanced urban connectivity and mobility",
      "Integration of green spaces and public amenities",
      "Strategic master planning for long-term growth"
    ],
    benefitsAr: [
      "تصميم مجتمعات مستدامة ومرنة",
      "تعزيز الاتصال الحضري والتنقل",
      "تكامل المساحات الخضراء والمرافق العامة",
      "تخطيط رئيسي استراتيجي للنمو طويل الأجل"
    ],
    process: [
      { step: 1, title: "Visioning", titleAr: "الرؤية", description: "Defining the long-term goals for the urban area.", descriptionAr: "تحديد الأهداف طويلة الأجل للمنطقة الحضرية." },
      { step: 2, title: "Master Planning", titleAr: "التخطيط الرئيسي", description: "Developing the spatial framework and land use plans.", descriptionAr: "تطوير الإطار المكاني وخطط استخدام الأراضي." },
      { step: 3, title: "Infrastructure Design", titleAr: "تصميم البنية التحتية", description: "Planning for utilities, transport, and services.", descriptionAr: "التخطيط للمرافق والنقل والخدمات." },
      { step: 4, title: "Policy Development", titleAr: "تطوير السياسات", description: "Creating guidelines for sustainable development.", descriptionAr: "إنشاء مبادئ توجيهية للتنمية المستدامة." }
    ]
  },
  {
    id: 7,
    title: "Environmental Consultation",
    titleAr: "الاستشارات البيئية",
    description: "Specialized guidance on sustainability, environmental impact, and green building compliance.",
    descriptionAr: "إرشاد متخصص في الاستدامة والأثر البيئي والامتثال لمعايير البناء الأخضر.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=1200",
    longDescription: "Our environmental consultation services help projects align with sustainability goals and environmental regulations from concept to delivery. We support impact assessments, resource efficiency strategies, and green certification pathways to reduce environmental footprint while improving long-term value.",
    longDescriptionAr: "تساعد خدمات الاستشارات البيئية لدينا المشاريع على التوافق مع أهداف الاستدامة واللوائح البيئية من مرحلة الفكرة حتى التسليم. ندعم تقييمات الأثر البيئي واستراتيجيات كفاءة الموارد ومسارات شهادات المباني الخضراء لتقليل البصمة البيئية وتعزيز القيمة طويلة المدى.",
    benefits: [
      "Improved compliance with environmental regulations and standards",
      "Reduced energy, water, and material consumption",
      "Stronger ESG profile and long-term asset value",
      "Clear roadmap for sustainable design and operation"
    ],
    benefitsAr: [
      "تعزيز الامتثال للأنظمة والمعايير البيئية",
      "خفض استهلاك الطاقة والمياه والمواد",
      "تحسين مؤشرات الاستدامة ورفع قيمة الأصول على المدى الطويل",
      "خارطة طريق واضحة للتصميم والتشغيل المستدام"
    ],
    process: [
      { step: 1, title: "Baseline Assessment", titleAr: "التقييم الأولي", description: "Reviewing project data, site context, and environmental risks.", descriptionAr: "مراجعة بيانات المشروع وسياق الموقع والمخاطر البيئية." },
      { step: 2, title: "Strategy Development", titleAr: "تطوير الاستراتيجية", description: "Defining sustainability targets and practical implementation plans.", descriptionAr: "تحديد أهداف الاستدامة وخطط تطبيق عملية." },
      { step: 3, title: "Compliance & Certification", titleAr: "الامتثال والشهادات", description: "Supporting regulatory submissions and green building certification requirements.", descriptionAr: "دعم متطلبات الجهات التنظيمية وشهادات المباني الخضراء." },
      { step: 4, title: "Monitoring", titleAr: "المتابعة", description: "Tracking performance and refining environmental measures during execution.", descriptionAr: "متابعة الأداء وتحسين الإجراءات البيئية أثناء التنفيذ." }
    ]
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Modern Residential Villa",
    titleAr: "فيلا سكنية حديثة",
    category: "Residential",
    categoryAr: "سكني",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    description: "A luxury villa with modern architectural features and sustainable materials.",
    descriptionAr: "فيلا فاخرة تتميز بخصائص معمارية حديثة ومواد مستدامة.",
    location: "Riyadh, Al-Malqa",
    locationAr: "الرياض، حي الملقا",
    year: "2023",
    area: "850 m²",
    status: "Completed",
    statusAr: "مكتمل",
    supervisor: {
      name: "Eng. Khalid Al-Otaibi",
      nameAr: "م. حازم الخطيب",
      role: "Lead Project Manager",
      roleAr: "مدير المشروع الرئيسي",
      image: "https://i.im.ge/2026/03/08/eg5d9a.1.png",
      bio: "With over 15 years of experience in high-end residential projects, Eng. Khalid ensures every detail meets our rigorous quality standards.",
      bioAr: "مع أكثر من 15 عاماً من الخبرة في المشاريع السكنية الراقية، يضمن المهندس خالد أن كل تفصيل يلبي معايير الجودة الصارمة لدينا.",
      challengesSolved: [
        "Optimized structural design for large open spans",
        "Integrated smart home systems without visible wiring",
        "Managed complex site topography to maximize views"
      ],
      challengesSolvedAr: [
        "تحسين التصميم الإنشائي للمساحات المفتوحة الكبيرة",
        "دمج أنظمة المنزل الذكي دون أسلاك مرئية",
        "إدارة تضاريس الموقع المعقدة لتعظيم الإطلالات"
      ]
    },
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
    ],
    results: [
      "15% reduction in energy consumption through passive cooling",
      "Zero safety incidents during 18 months of construction",
      "Completed 2 weeks ahead of schedule"
    ],
    resultsAr: [
      "تخفيض بنسبة 15% في استهلاك الطاقة من خلال التبريد السلبي",
      "صفر حوادث سلامة خلال 18 شهراً من البناء",
      "اكتمل قبل أسبوعين من الجدول الزمني"
    ]
  },
  {
    id: 2,
    title: "Luxury Apartment Complex",
    titleAr: "مجمع سكني فاخر",
    category: "Residential",
    categoryAr: "سكني",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
    description: "High-end residential complex with premium amenities and smart home integration.",
    descriptionAr: "مجمع سكني راقٍ مع مرافق متميزة وتكامل للمنازل الذكية.",
    location: "Jeddah, Corniche",
    locationAr: "جدة، الكورنيش",
    year: "2022",
    area: "12,000 m²",
    status: "Completed",
    statusAr: "مكتمل",
    supervisor: {
      name: "Eng. Sarah Mansour",
      nameAr: "م. زكريا محمد",
      role: "Senior Architect",
      roleAr: "رئيص قسم الهندسة الكهربائية",
      image: "https://im.ge/i/eg5UqF",
      bio: "Eng. Sarah specializes in urban residential developments, focusing on community-centric design and sustainable living.",
      bioAr: "تتخصص المهندسة سارة في التطويرات السكنية الحضرية، مع التركيز على التصميم المتمحور حول المجتمع والحياة المستدامة.",
      challengesSolved: [
        "Coordinated multi-disciplinary teams for complex MEP systems",
        "Ensured acoustic privacy between high-density units",
        "Navigated coastal environmental regulations"
      ],
      challengesSolvedAr: [
        "تنسيق فرق متعددة التخصصات لأنظمة MEP المعقدة",
        "ضمان الخصوصية الصوتية بين الوحدات عالية الكثافة",
        "التعامل مع اللوائح البيئية الساحلية"
      ]
    },
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    ],
    results: [
      "Achieved LEED Silver certification",
      "95% pre-sale occupancy upon completion",
      "Innovative use of recycled materials in common areas"
    ],
    resultsAr: [
      "حصل على شهادة LEED الفضية",
      "نسبة إشغال 95% عند الانتهاء",
      "استخدام مبتكر للمواد المعاد تدويرها في المناطق المشتركة"
    ]
  },
  {
    id: 3,
    title: "Contemporary Townhouse",
    titleAr: "تاون هاوس عصري",
    category: "Residential",
    categoryAr: "سكني",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    description: "Elegant townhouse design focusing on space optimization and natural lighting.",
    descriptionAr: "تصميم تاون هاوس أنيق يركز على تحسين المساحة والإضاءة الطبيعية.",
    location: "Dammam, Al-Shati",
    locationAr: "الدمام، حي الشاطئ",
    year: "2023",
    area: "450 m²",
    status: "Completed",
    statusAr: "مكتمل",
    supervisor: {
      name: "Eng. Ahmed Al-Fahad",
      nameAr: "م. محمد الرقيعي",
      role: "Structural Engineer",
      roleAr: "مهندس إنشائي",
      image: "https://im.ge/i/WhatsApp-Image-2026-03-08-at-15-41-48.eg55FX",
      bio: "Ahmed's expertise in structural efficiency allowed for large glass facades while maintaining superior stability.",
      bioAr: "سمحت خبرة أحمد في الكفاءة الإنشائية بواجهات زجاجية كبيرة مع الحفاظ على استقرار فائق.",
      challengesSolved: [
        "Designed cantilevered sections for modern aesthetic",
        "Optimized foundation for sandy soil conditions",
        "Integrated energy-efficient HVAC solutions"
      ],
      challengesSolvedAr: [
        "تصميم أقسام كابولية لجمالية حديثة",
        "تحسين الأساسات لظروف التربة الرملية",
        "دمج حلول HVAC الموفرة للطاقة"
      ]
    }
  },
  {
    id: 4,
    title: "Modern Residential Tower",
    titleAr: "برج سكني حديث",
    category: "Residential",
    categoryAr: "سكني",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    description: "A landmark residential tower featuring innovative structural engineering.",
    descriptionAr: "برج سكني متميز يتميز بهندسة إنشائية مبتكرة.",
    location: "Riyadh, King Fahd Rd",
    locationAr: "الرياض، طريق الملك فهد",
    year: "2024",
    area: "45,000 m²",
    status: "Under Construction",
    statusAr: "تحت الإنشاء",
    supervisor: {
      name: "Eng. Mohammed Al-Zahrani",
      nameAr: "م. محمد الزهراني",
      role: "Project Director",
      roleAr: "مدير المشروع",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
      bio: "Mohammed leads our large-scale tower projects, ensuring complex logistics and safety protocols are strictly followed.",
      bioAr: "يقود محمد مشاريع الأبراج واسعة النطاق لدينا، مما يضمن اتباع اللوجستيات المعقدة وبروتوكولات السلامة بصرامة.",
      challengesSolved: [
        "Managed high-altitude construction safety",
        "Optimized vertical transportation systems",
        "Implemented advanced wind-load resistance systems"
      ],
      challengesSolvedAr: [
        "إدارة سلامة البناء على ارتفاعات عالية",
        "تحسين أنظمة النقل الرأسي",
        "تنفيذ أنظمة متقدمة لمقاومة أحمال الرياح"
      ]
    }
  },
  {
    id: 5,
    title: "Commercial Office Plaza",
    titleAr: "ساحة مكاتب تجارية",
    category: "Commercial",
    categoryAr: "تجاري",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    description: "Modern office space designed for productivity and collaboration.",
    descriptionAr: "مساحة مكتبية حديثة مصممة للإنتاجية والتعاون.",
    location: "Riyadh, Olaya",
    locationAr: "الرياض، العليا",
    year: "2022",
    area: "5,500 m²",
    status: "Completed",
    statusAr: "مكتمل",
    supervisor: {
      name: "Eng. Layla Al-Harbi",
      nameAr: "م. سيد العزب",
      role: "Interior Design Lead",
      roleAr: "رئيسة التصميم الداخلي",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400",
      bio: "Layla focuses on creating dynamic work environments that foster innovation and employee well-being.",
      bioAr: "تركز ليلى على إنشاء بيئات عمل ديناميكية تعزز الابتكار ورفاهية الموظفين.",
      challengesSolved: [
        "Balanced open-plan collaboration with quiet zones",
        "Maximized natural light penetration in deep floor plates",
        "Integrated flexible modular furniture systems"
      ],
      challengesSolvedAr: [
        "موازنة التعاون في المخططات المفتوحة مع المناطق الهادئة",
        "تعظيم اختراق الضوء الطبيعي في مساحات الأرضية العميقة",
        "دمج أنظمة أثاث نموذجية مرنة"
      ]
    }
  },
  {
    id: 6,
    title: "Industrial Warehouse Park",
    titleAr: "مجمع مستودعات صناعية",
    category: "Industrial",
    categoryAr: "صناعي",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    description: "Efficient industrial facility with advanced logistics capabilities.",
    descriptionAr: "منشأة صناعية فعالة مع قدرات لوجستية متقدمة.",
    location: "Jeddah, Industrial City",
    locationAr: "جدة، المدينة الصناعية",
    year: "2023",
    area: "25,000 m²",
    status: "Completed",
    statusAr: "مكتمل",
    supervisor: {
      name: "Eng. Sultan Al-Ghamdi",
      nameAr: "م. سلطان الغامدي",
      role: "Logistics Engineer",
      roleAr: "مهندس لوجستيات",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      bio: "Sultan specializes in industrial efficiency, ensuring flow and storage are optimized for high-volume operations.",
      bioAr: "يتخصص سلطان في الكفاءة الصناعية، مما يضمن تحسين التدفق والتخزين للعمليات ذات الحجم الكبير.",
      challengesSolved: [
        "Designed heavy-load flooring systems",
        "Optimized loading dock efficiency",
        "Implemented advanced fire safety and suppression systems"
      ],
      challengesSolvedAr: [
        "تصميم أنظمة أرضيات للأحمال الثقيلة",
        "تحسين كفاءة أرصفة التحميل",
        "تنفيذ أنظمة متقدمة لسلامة وإخماد الحرائق"
      ]
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Sustainable Architecture",
    titleAr: "مستقبل العمارة المستدامة",
    excerpt: "Exploring how green building practices are reshaping our urban environments.",
    excerptAr: "استكشاف كيف تعيد ممارسات البناء الأخضر تشكيل بيئاتنا الحضرية.",
    content: "Sustainable architecture is no longer a luxury but a necessity. As we face global climate challenges, the engineering and design community must pivot towards materials and methods that minimize environmental impact while maximizing human comfort...",
    contentAr: "لم تعد العمارة المستدامة رفاهية بل ضرورة. وبينما نواجه تحديات المناخ العالمي، يجب على مجتمع الهندسة والتصميم التحول نحو المواد والأساليب التي تقلل من الأثر البيئي مع تعظيم الراحة البشرية...",
    date: "2024-03-15",
    author: "Eng. Ahmed Mansour",
    authorAr: "م. أحمد منصور",
    image: "https://images.unsplash.com/photo-1518005020250-6759229547b1?auto=format&fit=crop&q=80&w=800",
    category: "Architecture",
    categoryAr: "عمارة"
  },
  {
    id: 2,
    title: "Smart Cities: Integrating Technology in Urban Planning",
    titleAr: "المدن الذكية: دمج التكنولوجيا في التخطيط العمراني",
    excerpt: "How IoT and data analytics are making our cities more efficient and livable.",
    excerptAr: "كيف تجعل إنترنت الأشياء وتحليلات البيانات مدننا أكثر كفاءة وقابلية للعيش.",
    content: "The concept of smart cities is rapidly evolving. By integrating technology into every facet of urban planning, from traffic management to energy distribution, we can create environments that respond dynamically to the needs of their inhabitants...",
    contentAr: "يتطور مفهوم المدن الذكية بسرعة. من خلال دمج التكنولوجيا في كل جانب من جوانب التخطيط العمراني، من إدارة المرور إلى توزيع الطاقة، يمكننا إنشاء بيئات تستجيب ديناميكياً لاحتياجات سكانها...",
    date: "2024-03-10",
    author: "Eng. Sarah Khalid",
    authorAr: "م. سارة خالد",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
    category: "Urban Planning",
    categoryAr: "تخطيط عمراني"
  },
  {
    id: 3,
    title: "Innovations in Structural Engineering",
    titleAr: "ابتكارات في الهندسة الإنشائية",
    excerpt: "New materials and computational tools are pushing the limits of what we can build.",
    excerptAr: "المواد الجديدة والأدوات الحسابية تدفع حدود ما يمكننا بناؤه.",
    content: "Structural engineering is undergoing a revolution. From carbon-fiber reinforced concrete to advanced structural analysis software, engineers today have an unprecedented toolkit for creating structures that are lighter, stronger, and more resilient...",
    contentAr: "تشهد الهندسة الإنشائية ثورة. من الخرسانة المسلحة بألياف الكربون إلى برامج التحليل الإنشائي المتقدمة، يمتلك المهندسون اليوم مجموعة أدوات غير مسبوقة لإنشاء هياكل أخف وأقوى وأكثر مرونة...",
    date: "2024-03-05",
    author: "Eng. Mohammed Ali",
    authorAr: "م. محمد علي",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
    category: "Engineering",
    categoryAr: "هندسة"
  }
];
