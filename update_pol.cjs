const fs = require('fs');
let content = fs.readFileSync('src/components/layout/PoliticalCampaignPage.tsx', 'utf8');

// 1. Add ArrowLeft and useNavigate
content = content.replace(
  "import { Plus, Minus } from 'lucide-react';",
  "import { Plus, Minus, ArrowLeft } from 'lucide-react';\nimport { useNavigate } from 'react-router-dom';"
);

// 2. Easing transition
content = content.replace(
  "const transition = { duration: 0.9, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] };",
  "const transition = { duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };"
);

// 3. changeSection limits
content = content.replace(
  "if (next > 3) next = 0;\n      if (next < 0) next = 3;",
  "if (next > 4) next = 0;\n      if (next < 0) next = 4;"
);
content = content.replace(
  "}, 1200);",
  "}, 1000);"
);

// 4. Back button and Navigation Dots
content = content.replace(
  "const goToSection = (index: number) => {",
  `const navigate = useNavigate();
  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const goToSection = (index: number) => {`
);

content = content.replace(
  /\{\/\* Side Vertical Text \*\/\}\s*<div className="absolute left-6 md:left-12 top-1\/2 -translate-y-1\/2 -rotate-90 z-50 text-white\/50 hidden md:block tracking-\[0\.3em\] text-xs font-bold whitespace-nowrap">\s*ESTABLISHED 2017\s*<\/div>/g,
  `{/* Back Button */}
      <button 
        onClick={handleBack}
        className="absolute top-6 left-6 md:top-10 md:left-10 z-[100] flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl transition-all duration-300 hover:bg-white/20 hover:scale-105"
        aria-label="Go Back"
      >
        <div className="flex items-center justify-center bg-white/20 rounded-full h-8 w-8">
          <ArrowLeft className="h-4 w-4" />
        </div>
        <span className="font-semibold text-sm tracking-wide">Back</span>
      </button>`
);

content = content.replace(
  "{[0, 1, 2, 3].map((idx) => (",
  "{[0, 1, 2, 3, 4].map((idx) => ("
);

content = content.replace(
  "{activeSection === 3 && <Section4 />}",
  "{activeSection === 3 && <Section4 />}\n          {activeSection === 4 && <Section5 />}"
);

// 5. Overflow on sections
content = content.replace(
  '<div className="w-full h-full bg-gradient-to-br from-brand-900 via-brand-800 to-purple-900 flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[80px] overflow-hidden">',
  '<div className="w-full h-full bg-gradient-to-br from-brand-900 via-brand-800 to-purple-900 flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[80px] overflow-y-auto hide-scrollbar">'
);
content = content.replace(
  '<div className="w-full h-full bg-gray-50 flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[80px] overflow-hidden">',
  '<div className="w-full h-full bg-gray-50 flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[80px] overflow-y-auto hide-scrollbar">'
);
content = content.replace(
  '<div className="w-full h-full bg-white flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[80px] overflow-hidden">',
  '<div className="w-full h-full bg-white flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[80px] overflow-y-auto hide-scrollbar">'
);
content = content.replace(
  '<div className="w-full h-full bg-gradient-to-br from-purple-900 to-brand-900 flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[80px] overflow-hidden">',
  '<div className="w-full h-full bg-gradient-to-br from-purple-900 to-brand-900 flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[80px] overflow-y-auto hide-scrollbar">'
);

// 6. Append Section 5
content += `
function Section5() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center px-6 md:px-[60px] lg:px-[80px] pt-[80px] md:pt-[100px] pb-6 lg:pb-[80px] overflow-y-auto hide-scrollbar">
      <div className="relative z-10 w-full max-w-7xl h-full flex flex-col items-center justify-center text-center gap-6 lg:gap-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold text-gray-900 max-w-[800px]"
        >
          Ready to Win?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-600 max-w-[600px]"
        >
          Partner with the top campaign marketing agency to build trust, shape perception, and connect with constituents.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
        >
          <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-600 text-white font-bold text-lg hover:bg-brand-700 transition-colors shadow-xl">
            Start Your Campaign
          </a>
        </motion.div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/components/layout/PoliticalCampaignPage.tsx', content);
