import { IProduct } from "../models/IProduct";

const totalPrice = (cartList:[]) => {
    if(!cartList) return 0
    const prices: any = cartList.map((product: IProduct) => Number(product.price))
    return prices.reduce((acc:number, curr:number) => acc + curr).toFixed(2)
};

export default totalPrice
