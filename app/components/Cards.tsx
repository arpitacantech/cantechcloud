interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
  button: string;
}

export default function Cards({ imageSrc, title, description, button }: FeatureCardProps) {
  return (
    <div className="relative rounded-xl border border-transparent p-[1px] bg-gray-900 bg-origin-border overflow-hidden
                transition-transform duration-300 hover:scale-[0.98] hover:shadow-inner">
  
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
