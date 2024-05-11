"use client"
import Link from "next/link"
import {showHmenu} from "@/app/scripts/hmenu"
import Banner_MainMenu from "@/app/components/banners/Banner_MainMenu"


const MainMenu = () => {
  const categories = ["Gift Ideas", "Buy Again"]
  // const {data, isLoading,isPending, isError, error} = useQuery({queryKey: ['categoriesList'], queryFn: ()=>fetchData("categories")})

  // if (isPending) return <span>Loading...</span>
  // if (isError) return <span>Error: {error.message}</span>

  return (
    <>
      <div className="main-menu">
        <div className="items">
         <button onClick={showHmenu} className="menu-btn font-bold flex items-center gap-2">  <p className="rotate-90 font-medium" >|||</p> <span > All</span></button>
          {categories ?
            categories.map(menu =>
              // <Link key={menu} href={`/categories/${menu}`}>
              <button key={menu} className="menu-btn">{menu}</button>
              // </Link>
            )
            :
            <p></p>
          } 
          <Link href={`/history`}>
            <button className="menu-btn"><span>Browsing History</span></button>
          </Link>
          <Link href={`/favorites`}>
            <button className="menu-btn"><span>Your Store</span></button>
          </Link>
        </div>
          <Banner_MainMenu/>
         </div>
    </>
  )
};

export default MainMenu
