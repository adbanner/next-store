"use client"
import EmailIcon from "../../assets/share/email-icon.svg"
import PinterestIcon from "../../assets/share/pinterest-icon.svg"
import FacebookIcon from "../../assets/share/facebook-icon.svg"
import XIcon from "../../assets/share/x-icon.svg"
import LinkIcon from "../../assets/share/link-icon.svg"
import { usePathname } from "next/navigation"

import Image from 'next/image'
import { useEffect, useState } from "react"

const ShareBox = () => {
  const pathname = usePathname();
  const [linkIconText, setCopyLinkText] = useState("Copy Link")

  const emailClick = () => {
    //console.log(window.location.href)
    window.open(`mailto:?subject=Check this out at Next-Store.uk&body=I want to recommend this product at Next-Store.uk %0D%0A ${window.location.href}`)
  }

  const copyLinkClick = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopyLinkText("Link copied")
  }

  useEffect(() => {
    document.addEventListener("mouseover", (e) => {
      e.target.id != "copyLink" ? setCopyLinkText("Copy Link") : false

    })
  })

  return (
    <>
      <div id="shareBox" className="share-box" style={{ padding: "8px", display: "none" }}>
       
          <div className="arrow">
            <div className="rect"></div>
          </div>
          <div className="share-box-body">
            <ul>
              <li onClick={() => emailClick()}><Image src={EmailIcon.src} width="24" height="24" alt="img" /> <span>Email</span></li>
              <li><Image src={PinterestIcon.src} width="24" height="24" alt="img" /> <span>Pinterest</span></li>
              <li><Image src={FacebookIcon.src} width="24" height="24" alt="img" /> <span>Facebook</span></li>
              <li><Image src={XIcon.src} width="24" height="24" alt="img" /> <span>X</span></li>
              <li onClick={() => copyLinkClick()} id="copyLink"><Image src={LinkIcon.src} width="24" height="24" alt="img" /> <span>{linkIconText}</span></li>
            </ul>

          </div>
        </div>
     
    </>
  )
};

export default ShareBox
