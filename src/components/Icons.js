import { FaHtml5, FaCss3, FaJs, FaJava, FaLinux, FaFlutter } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
export default function Icons() {
  return (
    <div className="flex">
      <FaHtml5 className="w-8 h-8 text-orange-600" />
      <FaCss3 className="w-8 h-8 text-blue-600" />
      <FaJs className="w-8 h-8 text-yellow-600" />
      <FaJava className="w-8 h-8 text-red-600" />
      <RiNextjsFill className="w-8 h-8 text-zinc-600" />
      <FaLinux className="w-8 h-8 text-yellow-600" />
      <FaFlutter className="w-8 h-8 text-blue-600" />
    </div>
  );
}
