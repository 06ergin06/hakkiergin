import Image from "next/image";
import logo from "../../public/webtas.png";
import Icons from "@/components/Icons";
import { LuLinkedin, LuGithub } from "react-icons/lu";
export default function Home() {
  return (
    <main className="center min-h-screen ">
      <div className="w-8/12 center flex-col bg-zinc-100 dark:bg-[#161B22] relative py-[4.5rem] px-20 rounded-[70px] ">
        <div className="center flex-col">
          <Image
            src={logo}
            alt="webtaslogo"
            width={150}
            height={150}
            className="-top-20 absolute"
          />
          <h1 className="text-xl font-bold">İbrahim Hakkı Ergin</h1>
          <div className="center gap-3 mb-3">
            <a href="https://github.com/06ergin06" target="_blank">
              <LuGithub className="w-6 h-6 hover:opacity-75 hover:bg-zinc-600 hover:rounded-xl transition-all" />
            </a>
            <a href="https://www.linkedin.com/in/hakkiergin" target="_blank">
              <LuLinkedin className="w-6 h-6 hover:opacity-75 hover:bg-blue-500 hover:rounded-xl transition-all" />
            </a>
          </div>
          <p className="mb-4 font-semibold">
            Hi 👋, I am İbrahim Hakkı Ergin 18 years old software engineering
            student 👨‍🎓. I'm from Türkiye 🇹🇷. I'm improving myself in the
            programming, developing front-end web/mobile apps, and Operating
            Systems 💻. Also, I was a content creator. While improving myself, I
            also try to improve other people. For this purpose, I managed a
            technology and software forum in 2021. Then I created a Webtas
            community on Instagram, YouTube and Discord 📱. My hobbies are
            reading books 📖, playing chess 🧠 and playing video games 🎮.
          </p>
        </div>
        <div>
          <Icons />
        </div>
      </div>
    </main>
  );
}
