import { SignIn } from "@clerk/nextjs"
import { AuthSidebar } from "@/components/auth/auth-sidebar"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-base flex font-sans">
      <AuthSidebar />
      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <SignIn />
      </div>
    </div>
  )
}
