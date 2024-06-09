
import { signIn } from "@/app/api/auth/auth"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        const session = await signIn("google")
      }}
    >
      <button type="submit">Signin with Google</button>
     
    </form>
    
  )
} 