import { auth } from "@/app/api/auth/auth"
import ProductList from "./components/ProductsList"
import { SignIn } from "./components/SIgnIn_Google";


export default async function Home() {
  const session = await auth()
  //if (!session.user) return null
  return (
    <>
    <SignIn/>
     <ProductList></ProductList>
    </>
  );
}
