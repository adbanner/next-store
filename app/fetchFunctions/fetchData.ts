
const fetchData = async(path:string) => {
    const res = await fetch(`https://fakestoreapi.com/products/${path}`)
    return res.json()
};

export default fetchData
