
import Link from "next/link"
import { usePathname } from 'next/navigation';

import { useQuery} from '@tanstack/react-query'
import fetchData from "../../fetchFunctions/fetchData"



interface ICategorie {
  id: number,
  slug: string,
  name: string
}



const SubMenu = () => {

  const pathname = usePathname();
  const { data, isPending, isError, error } = useQuery({ queryKey: ['categoriesList'], queryFn: () => fetchData("categories") })

   if (isPending) return <></>//<span>Loading...</span>
   if (isError) return <span>Error: {error.message}</span>

  return (
    <>
      <div className="sub-menu ">
        <div className="items">
          {data ?
            data.map((menu: string )=>
              <Link key={menu.toString()} href={`/categories/${menu}`}>
                <button className="sub-menu-btn"><span>{menu}</span></button>
              </Link>
            )
            :
            <p></p>
          }
          
        </div>
      </div>
    </>
  )
};

export default SubMenu
