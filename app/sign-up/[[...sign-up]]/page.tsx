import { SignUp } from "@clerk/nextjs"
import { AuthSidebar } from "@/components/auth/auth-sidebar"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-base flex font-sans">
      <AuthSidebar />
      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <SignUp />
      </div>
    </div>
  )
}
