import Image from "next/image";
import Header from "./_components/_public/Header";
import Hero from "./_components/_public/Hero";

export default function Home() {
  return (
    <div className="h-full">
      {/* header section */}

      <Header />
      {/* hero section comes here */}

      <Hero />
    </div>
  );
}
