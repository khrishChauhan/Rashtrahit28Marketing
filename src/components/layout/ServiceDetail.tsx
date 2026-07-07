import React from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { 
  Settings, Calendar, Hash, BarChart,
  FileText, Globe, Wrench, Search,
  Video, Film, Play, MonitorPlay,
  BookOpen, Share2, PenTool, Briefcase, StickyNote, CreditCard,
  Layout, Smartphone, Image as ImageIcon, MousePointer2,
  Star, Megaphone, Users, Target, Activity, User
} from 'lucide-react';

const SERVICES_DATA: Record<string, any> = {
  "/services/social-media-management": {
    title: "BEST SOCIAL MEDIA MARKETING AGENCY IN GURGAON",
    intro: "Boost your online presence with our social media marketing agency in Gurgaon.\n\nWe focus on delivering real growth by building genuine connections with your audience and crafting unique strategies tailored to your business needs.\n\nAt Rashtrahit28Marketing, we offer top quality social media management designed to strengthen your online identity.\n\nAs a leading agency in the region, we use our expertise in content creation, strategic planning, and delivering outstanding results to help you succeed.",
    features: [
      {
        title: "Profile Setup & Strategic Optimization",
        description: "We create and refine professional profiles from the start, ensuring your brand is presented through engaging bios, high-resolution images, and smooth links to your business information.",
        icon: <User className="h-6 w-6" />
      },
      {
        title: "Content Management & Scheduling",
        description: "We provide consistently engaging content with a curated calendar of high-quality posts, reels, and stories, keeping your brand at the forefront of your audience's mind.",
        icon: <Calendar className="h-6 w-6" />
      },
      {
        title: "Targeted Hashtag & Reach Strategy",
        description: "We use data and current trends to optimize your hashtag usage, increasing your visibility and helping you grow your follower base.",
        icon: <Hash className="h-6 w-6" />
      },
      {
        title: "Audience Engagement & Performance Tracking",
        description: "Our teams stay actively engaged with your community, responding to feedback in real-time while also analyzing data to continuously improve your strategy.",
        icon: <Users className="h-6 w-6" />
      }
    ]
  },
  "/services/search-engine-optimization": {
    title: "BEST SEO SERVICES IN GURGAON",
    intro: "Boost your online growth with Rashtrahit28Marketing, offering professional SEO services in Gurgaon designed to improve your search engine rankings and increase organic traffic. Our expert team creates customized SEO strategies that strengthen your online presence, attract potential customers, and help your business stand out in the competitive digital market. From keyword optimization to website performance and digital visibility, we focus on delivering result\n\ndriven SEO solutions that support long-term business growth. Build a stronger brand identity in Gurgaon with smart, effective, and trusted SEO services.",
    features: [
      {
        title: "On-page SEO",
        description: "On page SEO which is the practice of optimizing web content, structure and keywords to improve search engine rankings, user experience and organic traffic.",
        icon: <FileText className="h-6 w-6" />
      },
      {
        title: "Off-page SEO",
        description: "Off page SEO which includes building up a site's authority via backlinks, social signals, and online promotion in order to better its rankings and credibility.",
        icon: <Globe className="h-6 w-6" />
      },
      {
        title: "Technical SEO",
        description: "Technical SEO which includes improving website speed, mobile-friendness, indexing and site structure for better search engine performance.",
        icon: <Wrench className="h-6 w-6" />
      },
      {
        title: "Keyword research planning-",
        description: "Keyword analysis for success Keyword research planning which is to identify high value search terms to target the right audience, improve rankings and drive qualified traffic.",
        icon: <Search className="h-6 w-6" />
      }
    ]
  },
  "/services/video-editing": {
    title: "BEST VIDEO EDITING AGENCY IN GURGAON",
    intro: "Elevate your brand with Rashtrahit28Marketing, offering premium Video marketing and Editing services in Gurgaon. We create eye catching reels, promotional videos, and digital content that boost engagement and strengthen your online presence. With creative storytelling and professional editing, every video is designed to leave a lasting impact. In today's digital world, powerful video content is the key to attracting customers and building strong brand value. Stand out in Gurgaon's competitive market with content that truly connects and performs.",
    features: [
      {
        title: "Video cutting, trimming & transitions",
        description: "Wrestling with the rough edges, putting clips together seamlessly and including smooth transitions for that professional and engaging video feel.",
        icon: <Video className="h-6 w-6" />
      },
      {
        title: "Color correction & visual enhancement",
        description: "Enhancing brightness, contrast, colors, which in turn improves the overall visual quality to give your videos that professional look.",
        icon: <Film className="h-6 w-6" />
      },
      {
        title: "Text, subtitles & motion graphics",
        description: "Adding of titles, captions, subtitles, and animated graphics to improve message clarity, engagement and viewer understanding.",
        icon: <Play className="h-6 w-6" />
      },
      {
        title: "Background audio, sound effects & branding",
        description: "Adding appropriate music, sound effects, logos and brand elements which in turn improves video impact and brand identity.",
        icon: <MonitorPlay className="h-6 w-6" />
      }
    ]
  },
  "/services/graphic-designing": {
    title: "BEST GRAPHIC DESIGNING AGENCY IN GURGAON",
    intro: "Enhance your brand identity with Rashtrahit28Marketing, providing professional Graphic Designing Services in Gurgaon. We create eye catching banners, brochures, business cards, packaging, and promotional materials with modern and creative designs. Our high quality print and branding solutions help businesses build strong visibility and customer trust. Stand out in Gurgaon's competitive market with impactful and professionally crafted designs.",
    features: [
      {
        title: "Brochure Design",
        description: "Custom designed brochures which put your products at the fore and create a professional memorable brand experience.",
        icon: <BookOpen className="h-6 w-6" />
      },
      {
        title: "Social Media Posts",
        description: "Creative social media campaigns that get noticed, engage audiences, and create a strong brand presence daily.",
        icon: <Share2 className="h-6 w-6" />
      },
      {
        title: "Logo Design",
        description: "Make your brand stand out with our custom logo design services which we tailor to your vision and business goals.",
        icon: <PenTool className="h-6 w-6" />
      },
      {
        title: "Business Card",
        description: "Present every introduction with a modern and creative business card design for your growing business.",
        icon: <Briefcase className="h-6 w-6" />
      },
      {
        title: "Flyer Design",
        description: "Present your promotions in a way that is unique and very visual, we do flyers for maximum impact.",
        icon: <StickyNote className="h-6 w-6" />
      },
      {
        title: "Card Design",
        description: "Unique design of cards which we have put together to present style, function and brand identity in a very personal way.",
        icon: <CreditCard className="h-6 w-6" />
      }
    ]
  },
  "/services/web-designing": {
    title: "BEST WEB DESIGNING AGENCY IN GURGAON",
    intro: "Build a powerful online presence with Rashtrahit28Marketing, offering professional web design services in Gurgaon. We create modern, responsive, and SEO friendly websites that deliver a smooth user experience across all devices. Our expert team focuses on creative designs, fast loading pages, smart layouts, and brand-focused visuals to improve engagement and performance. From corporate websites to landing pages and custom business portals, we develop websites that support digital marketing and generate quality leads. Grow your business with a professional website designed for performance, visibility, and long-term success.",
    features: [
      {
        title: "Web design and interface design",
        description: "Designing clean and attractive page layouts, color schemes, fonts and buttons for a professional and user friendly interface.",
        icon: <Layout className="h-6 w-6" />
      },
      {
        title: "Mobile responsive design",
        description: "Making sure the site runs smoothly on mobiles, tablets, and desktops with no layout or performance issues.",
        icon: <Smartphone className="h-6 w-6" />
      },
      {
        title: "Banner graphics and visuals",
        description: "Designing banners, creating sliders, producing icons and developing graphics to enhance visual appeal and brand consistency.",
        icon: <ImageIcon className="h-6 w-6" />
      },
      {
        title: "User experience (UX) improvement",
        description: "Improving the navigation, page flow and usability for easy information retrieval and action.",
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
                className="group flex flex-col rounded-[20px] border border-gray-100 bg-white p-4 sm:p-5 lg:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-[6px] hover:border-brand-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
              >
                <div className="mb-3 inline-flex h-[42px] w-[42px] md:h-12 md:w-12 lg:h-14 lg:w-14 shrink-0 items-center justify-center rounded-[14px] bg-brand-50/50 border border-brand-100 text-brand-700 transition-all duration-500 group-hover:scale-105 group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white group-hover:rotate-3">
                  {feature.icon}
                </div>
                
                <h3 className="mt-0 mb-[10px] text-lg md:text-xl lg:text-[22px] font-bold text-gray-900 font-heading transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {feature.description && (
                  <p className="m-0 text-gray-600 leading-[1.6] text-sm md:text-[15px] lg:text-base">
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
