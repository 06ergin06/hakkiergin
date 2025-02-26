import Image from "next/image";
import logo from "../../public/webtas.png";
import Icons from "@/components/Icons";
import { LuLinkedin, LuGithub } from "react-icons/lu";
export default function Home() {
  return (
    <main className="center min-h-screen my-4">
      <section className="sm:w-8/12 w-10/12 center flex-col bg-[#E0E7EF] dark:bg-[#161B22] relative sm:pt-[4.5rem] pt-12 pb-12 sm:px-20 px-4 sm:rounded-[70px] rounded-2xl">
        <header className="center flex-col">
          <Image
            src={logo}
            alt="webtaslogo"
            width={150}
            height={150}
            className="-top-20 absolute sm:block hidden"
          />
          <h1 className="md:text-2xl text-xl font-bold">İbrahim Hakkı Ergin</h1>
          <nav className="center gap-3 mb-3" aria-label="Social links">
            <a href="https://github.com/06ergin06" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <LuGithub className="w-6 h-6 hover:opacity-75 hover:bg-zinc-600 hover:rounded-xl transition-all" />
            </a>
            <a href="https://www.linkedin.com/in/hakkiergin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LuLinkedin className="w-6 h-6 hover:opacity-75 hover:bg-blue-500 hover:rounded-xl transition-all" />
            </a>
          </nav>
          <p className="mb-4 font-semibold md:text-lg">
            Hi 👋, I am İbrahim Hakkı Ergin, 18 years old.I am from Türkiye 🇹🇷.
            I am a first-year software engineering student at Biruni University
            in İstanbul (2024-2025 academic year) 👨‍🎓. I am improving my skills
            in programming, front-end web/mobile app development, and Operating
            Systems 💻. I am interested in free and open source software(FOSS).
            Also, I am a content creator. I managed a technology and software
            forum in 2021. Then I created a Webtas community on Instagram,
            YouTube and Discord 📱. My hobbies are reading books 📖, playing
            chess 🧠 and playing video games 🎮.
          </p>
        </header>
        <section >
          <h3 className="md:text-lg font-bold mb-1">Skills</h3>
          <Icons />
        </section>
      </section>
    </main>
  );
}
