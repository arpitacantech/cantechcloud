interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
  button: string;
}

export default function Cards({ imageSrc, title, description, button }: FeatureCardProps) {
  return (
    <div className="relative  p-[1px] rounded-xl
  bg-[linear-gradient(135deg,#0d0d0d,#050505)]
  border border-white/10
  shadow-[0_0_10px_rgba(0,0,0,0.5)]
  backdrop-blur-xs
 
  hover:border-white/20
  hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden
                transition-transform duration-300 hover:scale-[0.98] ">
  
  {/* Inner content */}
  <div style={{ backgroundColor: "rgba(9, 9, 11)" }} className="rounded-xl p-6 flex flex-col items-center w-full h-full">
    
    {/* Image */}
    <img src={imageSrc} alt={title} className="w-100 h-100 mb-4 object-contain" />
    
    {/* Text + Button */}
    <div className="w-full text-left space-y-4">
      <h3 className="text-white font-normal text-3xl">{title}</h3>
      <p className="text-gray-400 text-xl">{description}</p>
      <button className="flex items-center gap-2 text-gray-400 font-medium text-lg
                         transition-all duration-300 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)]">
        {button} <span className="text-xl">→</span>
      </button>
    </div>
    
  </div>
  
</div>

  );
}
