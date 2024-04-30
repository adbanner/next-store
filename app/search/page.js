import SearchList from "../components/search/SearchList"
import SmartWagon_Carousel from "@/app/components/SmartWagon_Carousel"

const Page = () => {
    return (
        <>
            <div className="main-cards justify-center">
                <SearchList></SearchList>
            </div>
            <SmartWagon_Carousel title={"Products related to your search"}></SmartWagon_Carousel>
            <SmartWagon_Carousel title={"Customers who viewed items in your search history also viewed"}></SmartWagon_Carousel>
        </>
    )
};

export default Page
