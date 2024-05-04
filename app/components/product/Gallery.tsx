"use client"
import { GoShare } from "react-icons/go";
import ShareBox from "../share/ShareBox";
import { IProduct } from "@/app/models/IProduct";

type IProps = {
    product: IProduct
}

const tmbHover = (e: any) => {
    const mainImage = document.querySelector("#mainImage") as HTMLImageElement
    if(mainImage) mainImage.src = "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
}

const onShareClick = (e: any):void => {
    const shareBox = document.querySelector("#shareBox") as HTMLUListElement
    shareBox.style.display == "none" ?  shareBox.style.display ="block" : shareBox.style.display = "none"
}

const Gallery = (props:IProps) => {
    return (
        <>
            {/* Product Image  */}
            <div className="product-img">
                <div className="product-gallery">
                    <div className="flex">
                        <img src={props.product.image} id='mainImage' />
                        <div className="product-img-share" onClick={onShareClick} >
                            <GoShare size="24px"/>
                        </div>
                        <ShareBox></ShareBox>
                    </div>

                    <span className="align-center text-sm">Roll over image to zoom</span>
                    <div className="product-img-tmb flex gap-2 justify-center">
                        {galleryTmb(props)}
                    </div>
                </div>


            </div>
        </>
    )
};

export default Gallery

const galleryTmb = (props: IProps) => {
    const obj = []
    for (let i = 0; i < 1 + Math.round(Math.random() * 6); i++) {
        obj.push(<img key={i} src={props.product.image} alt="product" onMouseEnter={tmbHover} />)
    }
    return obj
}