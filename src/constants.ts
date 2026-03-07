import { 
  Building2, 
  HardHat, 
  Compass, 
  Globe, 
  Briefcase, 
  Lightbulb 
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
  },
  {
    id: 2,
    title: "Structural Engineering",
    titleAr: "الهندسة الإنشائية",
    description: "Safe, efficient, and sustainable structural designs for all types of buildings.",
    descriptionAr: "تصاميم إنشائية آمنة وفعالة ومستدامة لجميع أنواع المباني.",
    icon: HardHat,
  },
  {
    id: 3,
    title: "Interior Design",
    titleAr: "التصميم الداخلي",
    description: "Creating inspiring interior spaces that reflect your vision and enhance lifestyle.",
    descriptionAr: "خلق مساحات داخلية ملهمة تعكس رؤيتك وتعزز نمط الحياة.",
    icon: Compass,
  },
  {
    id: 4,
    title: "Project Management",
    titleAr: "إدارة المشاريع",
    description: "Comprehensive oversight to ensure projects are delivered on time and within budget.",
    descriptionAr: "إشراف شامل لضمان تسليم المشاريع في الوقت المحدد وضمن الميزانية.",
    icon: Briefcase,
  },
  {
    id: 5,
    title: "Technical Consultation",
    titleAr: "الاستشارات الفنية",
    description: "Expert advice on engineering challenges, feasibility studies, and regulations.",
    descriptionAr: "نصائح الخبراء بشأن التحديات الهندسية ودراسات الجدوى واللوائح.",
    icon: Lightbulb,
  },
  {
    id: 6,
    title: "Urban Planning",
    titleAr: "التخطيط العمراني",
    description: "Designing sustainable communities and urban environments for the future.",
    descriptionAr: "تصميم مجتمعات وبيئات حضرية مستدامة للمستقبل.",
    icon: Globe,
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Modern Residential Villa",
    titleAr: "فيلا سكنية حديثة",
    category: "Residential",
    categoryAr: "سكني",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    description: "A luxury villa with modern architectural features and sustainable materials.",
    descriptionAr: "فيلا فاخرة تتميز بخصائص معمارية حديثة ومواد مستدامة."
  },
  {
    id: 2,
    title: "Luxury Apartment Complex",
    titleAr: "مجمع سكني فاخر",
    category: "Residential",
    categoryAr: "سكني",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    description: "High-end residential complex with premium amenities and smart home integration.",
    descriptionAr: "مجمع سكني راقٍ مع مرافق متميزة وتكامل للمنازل الذكية."
  },
  {
    id: 3,
    title: "Contemporary Townhouse",
    titleAr: "تاون هاوس عصري",
    category: "Residential",
    categoryAr: "سكني",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    description: "Elegant townhouse design focusing on space optimization and natural lighting.",
    descriptionAr: "تصميم تاون هاوس أنيق يركز على تحسين المساحة والإضاءة الطبيعية."
  },
  {
    id: 4,
    title: "Modern Residential Tower",
    titleAr: "برج سكني حديث",
    category: "Residential",
    categoryAr: "سكني",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    description: "A landmark residential tower featuring innovative structural engineering.",
    descriptionAr: "برج سكني متميز يتميز بهندسة إنشائية مبتكرة."
  },
  {
    id: 5,
    title: "Commercial Office Plaza",
    titleAr: "ساحة مكاتب تجارية",
    category: "Commercial",
    categoryAr: "تجاري",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    description: "Modern office space designed for productivity and collaboration.",
    descriptionAr: "مساحة مكتبية حديثة مصممة للإنتاجية والتعاون."
  },
  {
    id: 6,
    title: "Industrial Warehouse Park",
    titleAr: "مجمع مستودعات صناعية",
    category: "Industrial",
    categoryAr: "صناعي",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    description: "Efficient industrial facility with advanced logistics capabilities.",
    descriptionAr: "منشأة صناعية فعالة مع قدرات لوجستية متقدمة."
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
