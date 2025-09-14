import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const taskStart =new Date("2025-09-12T18:00:00")
export default function ListTask() {

      const [status, setStatus] = useState("Pending");

      useEffect(()=>{
        const checkStatus =()=>{
            const now = new Date();

            if(now<taskStart){
                setStatus ("Pending")
            }
            else if(now>= taskStart){
                setStatus("Active")
            }
            else{
                setStatus("Completed")
            }
        };
        checkStatus();
      const interval = setInterval(checkStatus,60000)
      return()=>clearInterval(interval);

      },[])
      
  return (
    <>
      <div className="flex h-screen justify-center mt-10 shadow-2xl ml-10 mr-10">
        <div className="mt-10 w-full max-w-3xl h-30 p-2 bg-white rounded-2xl shadow-lg border-2">
          <div className="flex items-start relative">
            <input type="checkbox" id="mycheckbox" className="w-5 h-5 mt-10 ml-10"/>
                <div className="grid text-2xl mt-4 ml-10">
                  <p className="font-bold">Wash clothes</p>
                  <p className="font-light">hema ka is a girl</p>
                  </div>
                {/* <div className="text-xl font-light text-gray-500 mt-8 ml-10">description</div> */}
                <div className="text-xl font-light text-gray-500 mt-8 ml-10">6.00 - 800</div>
              <div className="absolute top-0 right-0 mt-8 ml-10 mr-6 space-x-4">
            {status === "Completed" && (
              <span className="px-2 py-1 text-2xl rounded bg-green-100 text-green-600 font-semibold">
                Completed
              </span>
            )}
            {status === "Active" && (
              <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-600 font-semibold">
                Active
              </span>
            )}
            {status === "Pending" && (
              <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-600 font-semibold">
                Pending
              </span>
            )}
             <button className="text-blue-500 hover:text-blue-700">
              <FaEdit size={22}/>
            </button>
            <button className="text-red-500 hover:text-red-700">
              <FaTrash size={22} />
            </button>
          </div>            
        </div>
          
        </div>
      </div>
    </>
  );
}
