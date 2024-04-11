"use client"
import { usePathname } from 'next/navigation';
//import  useAppContext  from "@/context";


const PathName = () => {
    const pathname = usePathname();
   // const {text} = useAppContext()
    return (
        <>
            <span className='text-xs px-1.5' >{pathname}</span>
            {/* <p>{text}</p> */}
        </>
    )
};

export default PathName
