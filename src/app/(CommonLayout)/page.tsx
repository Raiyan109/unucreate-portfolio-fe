import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";


export default function Home() {
  return (
    <div className="mx-auto max-w-[1400px]">
      <Hero />
      <Welcome />
    </div>
  );
}
