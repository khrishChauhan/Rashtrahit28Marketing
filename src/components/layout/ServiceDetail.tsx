import React from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { 
  Settings, Calendar, Hash, BarChart,
  FileText, Globe, Wrench, Search,
  Video, Film, Play, MonitorPlay,
  BookOpen, Share2, PenTool, Briefcase, StickyNote, CreditCard,
  Layout, Smartphone, Image as ImageIcon, MousePointer2,
  Star, Megaphone, Users, Target, Activity
} from 'lucide-react';

const SERVICES_DATA: Record<string, any> = {
  "/services/social-media-management": {
    title: "BEST SOCIAL MEDIA MARKETING AGENCY IN GURGAON",
    intro: "Boost your online presence with our social media marketing agency in Gurgaon...\n(Use the complete paragraph exactly.)",
    features: [
      {
        title: "Profile Setup & Strategic Optimization",
        description: "We create and refine professional profiles...",
        icon: <Settings className="h-6 w-6" />
      },
      {
        title: "Content Management & Scheduling",
        description: "We provide consistently engaging content...",
        icon: <Calendar className="h-6 w-6" />
      },
      {
        title: "Targeted Hashtag & Reach Strategy",
        description: "We use data and current trends...",
        icon: <Hash className="h-6 w-6" />
      },
      {
        title: "Audience Engagement & Performance Tracking",
        description: "Our teams stay actively engaged...",
        icon: <BarChart className="h-6 w-6" />
      }
    ]
  },
  "/services/search-engine-optimization": {
    title: "BEST SEO SERVICES IN GURGAON",
    intro: "Boost your online growth with GST Industrial & Marketing Services...\n(Complete paragraph)",
    features: [
      {
        title: "On-page SEO",
        description: "",
        icon: <FileText className="h-6 w-6" />
      },
      {
        title: "Off-page SEO",
        description: "",
        icon: <Globe className="h-6 w-6" />
      },
      {
        title: "Technical SEO",
        description: "",
        icon: <Wrench className="h-6 w-6" />
      },
      {
        title: "Keyword Research Planning",
        description: "",
        icon: <Search className="h-6 w-6" />
      }
    ]
  },
  "/services/video-editing": {
    title: "BEST VIDEO EDITING AGENCY IN GURGAON",
    intro: "Increase brand awareness with Gurgaon’s best video marketing company! Professional video editing services to produce captivating, excellent material that produces outcomes.",
    features: [
      {
        title: "Video Production",
        description: "",
        icon: <Video className="h-6 w-6" />
      },
      {
        title: "Post-Processing",
        description: "",
        icon: <Film className="h-6 w-6" />
      },
      {
        title: "Motion Graphics",
        description: "",
        icon: <Play className="h-6 w-6" />
      },
      {
        title: "YouTube Optimization",
        description: "",
        icon: <MonitorPlay className="h-6 w-6" />
      }
    ]
  },
  "/services/graphic-designing": {
    title: "BEST GRAPHIC DESIGNING AGENCY IN GURGAON",
    intro: "Enhance your brand identity...\n(Complete paragraph)",
    features: [
      {
        title: "Brochure Design",
        description: "",
        icon: <BookOpen className="h-6 w-6" />
      },
      {
        title: "Social Media Posts",
        description: "",
        icon: <Share2 className="h-6 w-6" />
      },
      {
        title: "Logo Design",
        description: "",
        icon: <PenTool className="h-6 w-6" />
      },
      {
        title: "Business Card",
        description: "",
        icon: <Briefcase className="h-6 w-6" />
      },
      {
        title: "Flyer Design",
        description: "",
        icon: <StickyNote className="h-6 w-6" />
      },
      {
        title: "Card Design",
        description: "",
        icon: <CreditCard className="h-6 w-6" />
      }
    ]
  },
  "/services/web-designing": {
    title: "BEST WEB DESIGNING AGENCY IN GURGAON",
    intro: "Build a powerful online presence...\n(Complete paragraph)",
    features: [
      {
        title: "Web Design & Interface Design",
        description: "",
        icon: <Layout className="h-6 w-6" />
      },
      {
        title: "Mobile Responsive Design",
        description: "",
        icon: <Smartphone className="h-6 w-6" />
      },
      {
        title: "Banner Graphics & Visuals",
        description: "",
        icon: <ImageIcon className="h-6 w-6" />
      },
      {
        title: "User Experience (UX) Improvement",
        description: "",
        icon: <MousePointer2 className="h-6 w-6" />
      }
    ]
  },
  "/political": {
    title: "POLITICAL CAMPAIGN & MARKETING",
    intro: "Run effective and data-driven political campaigns. We provide end-to-end digital solutions to build a strong presence, connect with voters, and execute winning strategies.",
    features: [
      {
        title: "Digital Campaign Strategy",
        description: "Comprehensive planning and execution",
        icon: <Target className="h-6 w-6" />
      },
      {
        title: "Voter Outreach",
        description: "Targeted messaging and engagement",
        icon: <Users className="h-6 w-6" />
      },
      {
        title: "Social Media Dominance",
        description: "Narrative building on all platforms",
        icon: <Megaphone className="h-6 w-6" />
      },
      {
        title: "Analytics & Monitoring",
        description: "Real-time tracking of campaign sentiment",
        icon: <Activity className="h-6 w-6" />
      }
    ]
  }
};

const DEFAULT_DATA = {
  title: "SERVICE DETAILS",
  intro: "Explore our comprehensive service offerings tailored to your business needs.",
  features: [
    {
      title: "Quality Service",
      description: "Delivering top-tier results.",
      icon: <Star className="h-6 w-6" />
    }
  ]
};

export function ServiceDetail() {
  const location = useLocation();
  const data = SERVICES_DATA[location.pathname] || DEFAULT_DATA;

  return (
    <div className="pt-16 md:pt-24 min-h-[70vh]">
      {/* 2. Service Hero */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-[20%] h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-brand-50/40 blur-[120px]" />
          <div className="absolute bottom-0 left-[10%] h-[500px] w-[500px] translate-y-1/3 rounded-full bg-accent-50/30 blur-[120px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-[4.5rem] font-heading mb-8 leading-tight uppercase">
              {data.title}
            </h1>
            
            <div className="mx-auto h-1 w-24 bg-brand-500 rounded-full mb-8" />
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
              {data.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="relative overflow-hidden bg-bg-base py-24 md:py-32 border-t border-gray-100/50">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {data.features.map((feature: any, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5"
              >
                <div className="mb-8 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50/50 border border-brand-100 text-brand-700 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white group-hover:rotate-3">
                  {feature.icon}
                </div>
                
                <h3 className="mb-4 text-xl font-bold text-gray-900 font-heading transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {feature.description && (
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
