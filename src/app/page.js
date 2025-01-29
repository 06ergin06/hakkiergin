import Image from "next/image";
import logo from "../../public/webtas.png";
import LinkComp from "@/components/LinkComp";
import Icons from "@/components/Icons";
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
          <h1 className="text-xl font-bold mb-4">İbrahim Hakkı Ergin</h1>
          <p className="mb-4 font-semibold">
            Hi 👋, I am İbrahim Hakkı Ergin 18 years old software engineering
            student 👨‍🎓. I'm from Türkiye 🇹🇷. I'm improving myself in the
            software and technology 💻. Also, I'm a content creator. While
            improving myself, I also try to improve other people. For this
            purpose, I managed a technology and software forum in 2021. Then I
            created a Webtas community on Instagram, YouTube and Discord 📱. My
            hobbies are reading books 🧠, playing chess 🧠 and playing video
            games 🎮.
          </p>
        </div>
        <div className="center gap-10">
          <LinkComp
            name="Github"
            href="https://github.com/06ergin06"
          ></LinkComp>
          <LinkComp
            name="Linkedin"
            href="https://www.linkedin.com/in/hakkiergin"
          ></LinkComp>
        </div>
        <div className="mt-5">
          <Icons />
        </div>
      </div>
    </main>
  );
}
