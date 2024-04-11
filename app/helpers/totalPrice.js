
const totalPrice = (cartList) => {
    if(!cartList) return 0
    const prices = cartList.map((product) => Number(product.price))
    return prices.reduce((acc, curr) => acc + curr)
};

export default totalPrice
