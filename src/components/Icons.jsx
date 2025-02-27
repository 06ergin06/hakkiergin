import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaPython,
  FaFlutter,
} from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
export default function Icons() {
  return (
    <div className="center gap-3 flex-wrap">
      <FaHtml5 className="w-8 h-8 dark:text-[#E34C26] text-[#E34C26] hover:opacity-80 transition-all" title="HTML5" aria-label="HTML5" />
      <FaCss3 className="w-8 h-8 dark:text-[#2C5EE4] text-[#2C5EE4] hover:opacity-80 transition-all" title="CSS3" aria-label="CSS3" />
      <FaJs className="w-8 h-8 dark:text-[#F6E03B] text-yellow-500 hover:opacity-80 transition-all" title="JavaScript" aria-label="JavaScript" />
      <FaJava className="w-8 h-8 dark:text-[#EE4534] text-[#EE4534] hover:opacity-80 transition-all" title="Java" aria-label="Java" />
      <FaPython className="w-8 h-8 dark:text-[#FECE40] text-[#366E9E] hover:opacity-80 transition-all" title="Python" aria-label="Python" />
      <RiNextjsFill className="w-8 h-8 dark:text-[#727272] hover:opacity-80 transition-all" title="Next.js" aria-label="Next.js" />
      {/* <FaLinux className="w-8 h-8 dark:text-white hover:opacity-80 transition-all" title="Linux" aria-label="Linux" /> */}
      <FaFlutter className="w-8 h-8 dark:text-[#45D2FB] text-[#45D2FB] hover:opacity-80 transition-all" title="Flutter" aria-label="Flutter" />
    </div>
  );
}
