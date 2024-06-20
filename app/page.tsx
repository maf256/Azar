import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNAV";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import Grid from "@/components/Grid";

export default function Home() {
  return (
      <main className="relative bg-black-100 flex juxtify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems= {[
            {name: "Home", link: "/", icon: <FaHome />}
            ]} />
          <Hero />
          <Grid />
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      </main>
    );
}
 