import { IoIosSearch } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";

const Header = () => {
    return (
        <div className="flex items-center justify-between container mx-auto p-4 bg-slate-50 h-32 rounded-lg">
               <div className="">
                    <h1 className='text-3xl font-bold'> Recipe Calories</h1>
               </div>

               <div className=" ">
                    <ul className="flex gap-11 text-xl items-center">
                        <li>Home</li>
                        <li>Recepies</li>
                        <li>About </li>
                        <li>Search</li>
                    </ul>
               </div>
               <div >
                    <div className="flex gap-4 relative">
                    <span className="absolute text-3xl mt-3 ml-4"><IoIosSearch /></span>
                    <input className="px-4 py-2 rounded-3xl outline-none text-center bg-slate-200" type="search" name="" id="" placeholder="Search..." />

                    <span className="text-center text-5xl text-green-500"><HiOutlineUserCircle /></span>
                    </div>
               </div>
        </div>
    );
};

export default Header;
