const fs = require('fs');
let content = fs.readFileSync('src/components/layout/PoliticalCampaignPage.tsx', 'utf8');

content = content.replace(
  "const navigate = useNavigate();",
  `const navigate = useNavigate();
  const isDarkBackground = activeSection === 0 || activeSection === 3;
  const buttonClasses = isDarkBackground 
    ? "bg-white/10 border-white/20 text-white hover:bg-white/20" 
    : "bg-gray-900/5 border-gray-900/10 text-gray-900 hover:bg-gray-900/10";
  const buttonIconClasses = isDarkBackground ? "bg-white/20" : "bg-gray-900/10";
  const dotClasses = isDarkBackground ? "bg-white" : "bg-brand-600";
  const dotInactiveClasses = isDarkBackground ? "bg-white/30 group-hover:bg-white/70" : "bg-brand-900/20 group-hover:bg-brand-900/40";
  const shadowClasses = isDarkBackground ? "shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "shadow-[0_0_10px_rgba(79,70,229,0.4)]";`
);

content = content.replace(
  'className="absolute top-6 left-6 md:top-10 md:left-10 z-[100] flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl transition-all duration-300 hover:bg-white/20 hover:scale-105"',
  'className={`absolute top-6 left-6 md:top-10 md:left-10 z-[100] flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-md border shadow-xl transition-all duration-300 hover:scale-105 ${buttonClasses}`}'
);

content = content.replace(
  '<div className="flex items-center justify-center bg-white/20 rounded-full h-8 w-8">',
  '<div className={`flex items-center justify-center rounded-full h-8 w-8 ${buttonIconClasses}`}>'
);

content = content.replace(
  "className={`absolute h-1.5 w-1.5 rounded-full transition-all duration-500 ${activeSection === idx ? 'bg-white scale-150 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/30 group-hover:bg-white/70 group-hover:scale-125'}`}",
  "className={`absolute h-1.5 w-1.5 rounded-full transition-all duration-500 ${activeSection === idx ? `${dotClasses} scale-150 ${shadowClasses}` : `${dotInactiveClasses} group-hover:scale-125`}`}"
);

fs.writeFileSync('src/components/layout/PoliticalCampaignPage.tsx', content);
