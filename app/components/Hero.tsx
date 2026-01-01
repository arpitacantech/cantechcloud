"use client";
import ClientLogos from "./Clients";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] md:h-[100vh] overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover filter grayscale"
      >
        <source src="/hero-vid.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      
    </section>
  );
}
