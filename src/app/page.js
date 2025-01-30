import Image from "next/image";
import logo from "../../public/webtas.png";
import Icons from "@/components/Icons";
import { LuLinkedin, LuGithub } from "react-icons/lu";
export default function Home() {
  return (
    <main className="center min-h-screen my-4 ">
      <div className="w-8/12 center flex-col bg-[#E0E7EF] dark:bg-[#161B22] relative py-[4.5rem] sm:px-20 px-4 sm:rounded-[70px] rounded-2xl ">
        <div className="center flex-col">
          <Image
            src={logo}
            alt="webtaslogo"
            width={150}
            height={150}
            className="-top-20 absolute sm:block hidden"
          />
          <h1 className="md:text-2xl text-xl font-bold">İbrahim Hakkı Ergin</h1>
          <div className="center gap-3 mb-3">
            <a href="https://github.com/06ergin06" target="_blank">
              <LuGithub className="w-6 h-6 hover:opacity-75 hover:bg-zinc-600 hover:rounded-xl transition-all" />
            </a>
            <a href="https://www.linkedin.com/in/hakkiergin" target="_blank">
              <LuLinkedin className="w-6 h-6 hover:opacity-75 hover:bg-blue-500 hover:rounded-xl transition-all" />
            </a>
          </div>
          <p className="mb-4 font-semibold md:text-lg">
            Hi 👋, I am İbrahim Hakkı Ergin, 18 years old.I am from Türkiye 🇹🇷.
            I am a first-year software engineering student at Biruni University
            in İstanbul (2024-2025 academic year) 👨‍🎓. I'm improving my skills in
            programming, front-end web/mobile app development, and Operating
            Systems 💻. Also, I am a content creator. I managed a technology and
            software forum in 2021. Then I created a Webtas community on
            Instagram, YouTube and Discord 📱. My hobbies are reading books 📖,
            playing chess 🧠 and playing video games 🎮.
          </p>
        </div>
        <div>
          <h3 className="md:text-lg font-bold mb-1">Skills</h3>
          <Icons />
        </div>
      </div>
    </main>
  );
}
