import { FaHtml5, FaCss3, FaJs, FaJava, FaLinux, FaFlutter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
export default function Icons() {
  return (
    <div className="flex gap-3">
      <FaHtml5 className="w-8 h-8 text-[#E34C26] hover:opacity-80 transition-all" />
      <FaCss3 className="w-8 h-8 text-[#2C5EE4] hover:opacity-80 transition-all" />
      <FaJs className="w-8 h-8 text-[#F6E03B] hover:opacity-80 transition-all" />
      <FaJava className="w-8 h-8 text-[#EE4534] hover:opacity-80 transition-all" />
      <RiNextjsFill className="w-8 h-8 text-[#727272] hover:opacity-80 transition-all" />
      <FaLinux className="w-8 h-8 text-white hover:opacity-80 transition-all" />
      <FaFlutter className="w-8 h-8 text-[#45D2FB] hover:opacity-80 transition-all" />
    </div>
  );
}
