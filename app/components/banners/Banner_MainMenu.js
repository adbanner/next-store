import Link from "next/link"
import Image from 'next/image'
import Banner_MainMenu_400x39 from "@/app/assets/images/banner/Banner_MainMenu_400x39.png"

const Banner_MainMenu = () => {
  return (
    <>
      <Link href="/categories/electronics"><Image className="Banner_MainMenu" src={Banner_MainMenu_400x39.src} width="400" height="39" alt="Banner_MainMenu"/></Link>
    </>
  )
};

export default Banner_MainMenu
