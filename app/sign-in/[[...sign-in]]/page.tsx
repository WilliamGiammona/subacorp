import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="max-w-md w-full p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">SUBA CORP Admin</h1>
        <SignIn />
      </div>
    </div>
  );
}
