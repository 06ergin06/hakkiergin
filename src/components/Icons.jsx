import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
export default function Icons() {
  return (
    <div className="center gap-3 flex-wrap">
      <FaHtml5 className="w-8 h-8 dark:text-[#E34C26] text-[#E34C26] hover:opacity-80 transition-all" title="HTML5" aria-label="HTML5" />
      <FaCss3 className="w-8 h-8 dark:text-[#2C5EE4] text-[#2C5EE4] hover:opacity-80 transition-all" title="CSS3" aria-label="CSS3" />
      <FaJs className="w-8 h-8 dark:text-[#F6E03B] text-yellow-500 hover:opacity-80 transition-all" title="JavaScript" aria-label="JavaScript" />
      <FaReact className="w-8 h-8 dark:text-[#58C4DC] text-[#58C4DC] hover:opacity-80 transition-all" title="React" aria-label="React" />
      <RiNextjsFill className="w-8 h-8 dark:text-[#727272] hover:opacity-80 transition-all" title="Next.js" aria-label="Next.js" />
      <RiTailwindCssFill className="w-8 h-8 dark:text-[#28BBFB] text-[#28BBFB] hover:opacity-80 transition-all" title="TailwindCss" aria-label="TailwindCss" />
      <FaJava className="w-8 h-8 dark:text-[#EE4534] text-[#EE4534] hover:opacity-80 transition-all" title="Java" aria-label="Java" />
      <FaPython className="w-8 h-8 dark:text-[#FECE40] text-[#366E9E] hover:opacity-80 transition-all" title="Python" aria-label="Python" />
    </div>
  );
}
