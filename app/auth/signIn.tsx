// app/sign-in/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white bg-opacity-90 bg-[url('/your-image.jpg')] bg-cover bg-center">
      <div className="max-w-md w-full p-8 bg-white/10 backdrop-blur-md rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">SUBA CORP Admin</h1>
        <SignIn />
      </div>
    </div>
  );
}
