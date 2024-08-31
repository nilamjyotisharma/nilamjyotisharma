import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import { PiMedalFill } from "react-icons/pi";

export const education = [
    {
      title: "2019-2023",
      content: (
        <div className="bg-white px-12 py-8 rounded-3xl shadow-xl">
          <p className="text-left text-xl font-bold bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent mb-2 uppercase">
          Central Institute Of Technology, Kokrajhar, Assam
          </p>
          
          <p className="text-left flex items-center space-x-2 font-medium text-neutral-500 px-2">
          <PiMedalFill /> <span>Bachelor of Technology</span>
          </p>
          <p className="text-left flex items-center space-x-2 font-medium text-neutral-500 px-2">
          <FaGraduationCap /> <span>Electronics and Communication Engineering</span>
          </p>
          
        </div>
      ),
    },
    {
      title: "2016-2018",
      content: (
        <div className="bg-white px-12 py-8 rounded-3xl shadow-xl">
          <p className="text-left text-xl font-bold bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent mb-2 uppercase">
          Jagiroad College
          </p>
          <p className="text-left flex items-center space-x-2 font-medium text-neutral-500 px-2">
          <PiMedalFill /> <span>Higher Secondary</span>
          </p>
          <p className="text-left flex items-center space-x-2 font-medium text-neutral-500 px-2">
          <FaGraduationCap /> <span>Science Stream</span>
          </p>
          
          
        </div>
      ),
    },
    {
        title: "2004-2016",
        content: (
          <div className="bg-white px-12 py-8 rounded-3xl shadow-xl">
            <p className="text-left text-xl font-bold bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent mb-2 uppercase">
            Shankar Dev Vidya Niketan, Bhakatgaon
            </p>
            
            <p className="text-left flex items-center space-x-2 font-medium text-neutral-500 px-2">
            <PiMedalFill /> <span>Matriculation</span>
            </p>
            <p className="text-left flex items-center space-x-2 font-medium text-neutral-500 px-2">
            <FaGraduationCap /> <span>Highschool Education</span>
            </p>
            
          </div>
        ),
      },
    
  ];