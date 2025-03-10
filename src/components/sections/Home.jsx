import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Hi, I&apos;m Sohana Afrin
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a UI/UX designer based in Dhaka, Bangladesh, passionate about crafting intuitive interfaces and seamless user experiences. I specialize in user research, wireframing, and designing solutions that prioritize engagement and usability.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1sNuwUbMEqhPYgU8hhhIzScO1yteKpal-/view?usp=sharing"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              resume
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};