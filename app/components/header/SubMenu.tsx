
import Link from "next/link"
import { usePathname } from 'next/navigation';

import { useQuery} from '@tanstack/react-query'
import fetchApi from "../../fetchFunctions/fetchApi"



interface ICategorie {
  id: number,
  slug: string,
  name: string
}



const SubMenu = () => {

  const pathname = usePathname();
  const {data, isPending, isError, error} = useQuery({queryKey: ['categoriesListApi'], queryFn: ()=>fetchApi("categories")})

   if (isPending) return <span>Loading...</span>
   if (isError) return <span>Error: {error.message}</span>

  return (
    <>
      <div className="sub-menu ">
        <div className="items">
          {data ?
            data.map((menu: ICategorie )=>
              <Link key={menu.slug.toString()} href={`/categories/${menu.name}`}>
                <button className="sub-menu-btn"><span>{menu.name}</span></button>
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
