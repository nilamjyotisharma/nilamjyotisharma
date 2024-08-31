import Image from "next/image";
import { ImLocation } from "react-icons/im";
import { LiaLaptopCodeSolid } from "react-icons/lia";

export const workexperience = [
    {
      title: "June,2024-Present",
      content: (
        <div className="bg-white px-12 py-8 rounded-3xl shadow-xl">
          <p className="text-left text-xl font-bold bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent mb-2 uppercase">
          National Informatics Centre, Govt. Of India (Meghalaya)
          </p>
          <p className="text-left flex items-center space-x-2 font-medium text-neutral-500 px-2">
          <LiaLaptopCodeSolid/> <span>Software Developer</span>
          </p>
          <p className="text-left flex items-center space-x-2 font-medium text-neutral-500 px-2">
          <ImLocation /> <span>Shillong, Meghalaya</span>
          </p>
          
        </div>
      ),
    },
    {
      title: "Jan,2024-May,2024",
      content: (
        <div className="bg-white px-12 py-8 rounded-3xl shadow-xl">
          <p className="text-left text-xl font-bold bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent mb-2 uppercase">
          Xopuntech(India) Pvt. Ltd.
          </p>
          
          <p className="text-left flex items-center space-x-2 font-medium text-neutral-500 px-2">
          <LiaLaptopCodeSolid/> <span>Software Engineer Trainee</span>
          </p>
          <p className="text-left flex items-center space-x-2 font-medium text-neutral-500 px-2">
          <ImLocation /> <span>Guwahati, Assam</span>
          </p>
          
        </div>
      ),
    },
    {
        title: "Oct,2023-Dec,2023",
        content: (
          <div className="bg-white px-12 py-8 rounded-3xl shadow-xl">
            <p className="text-left text-xl font-bold bg-gradient-to-r from-[#6B32EE] to-[#E50879] bg-clip-text text-transparent mb-2 uppercase">
            Xopuntech(India) Pvt. Ltd.
            </p>
            
            <p className="text-left flex items-center space-x-2 font-medium text-neutral-500 px-2">
            <LiaLaptopCodeSolid/> <span>React Intern</span>
            </p>
            <p className="text-left flex items-center space-x-2 font-medium text-neutral-500 px-2">
            <ImLocation /> <span>Guwahati, Assam</span>
            </p>
          </div>
        ),
      },
    
  ];