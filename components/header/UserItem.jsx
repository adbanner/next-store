
import { useSession } from "next-auth/react";
import { useEffect } from "react";
//import { useSession, signIn, signOut } from "next-auth/react"

const UserItem = () => {
    let userName = "User"
    const {data: session} = useSession()
    session ? userName = session.user.name.split(" ")[0] : false 

    const googleAuth = () => {
        console.log( "ENV",process.env.GOOGLE_CLIENT_SECRET)
        signIn("google")
    }
    return (
        <>
            <div style={{ whiteSpace: "nowrap" }} className="cursor-pointer" onClick={googleAuth}>
                <p className="text-xs m-0">Hello, {userName}</p>
                <p className="text-xs m-0 font-bold">Accout & Itemss</p>
            </div>
        </>
    )
};

export default UserItem
