import Image from "next/image";
import Link from "next/link";
import logo from "../../public/webtas.png";

export default function Home() {
  return (
    <main className="center min-h-screen">
      <div className="w-8/12 center flex-col bg-zinc-200 dark:bg-[#161B22] relative py-[4.5rem] px-24 rounded-[70px] ">
        <Image
          src={logo}
          alt="webtaslogo"
          width={150}
          height={150}
          className="-top-20 absolute"
        />
        <h1 className="text-xl font-bold pb-4">İbrahim Hakkı Ergin</h1>
        <p>
          Hi 👋, I am İbrahim Hakkı Ergin 18 years old software engineering
          student 👨‍🎓. I'm from Türkiye 🇹🇷. I'm improving myself in the software
          and technology 💻. Also, I'm a content creator. While improving
          myself, I also try to improve other people. For this purpose, I
          managed a forum in 2021. Then I created a Webtas community on
          Instagram, YouTube and Discord 📱. My hobbies are reading books 🧠,
          playing chess 🧠 and playing video games 🎮.
        </p>
        <div>
          <Link href="/dashboard" />
        </div>
      </div>
    </main>
  );
}
