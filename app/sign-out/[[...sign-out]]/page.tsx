// app/sign-out/[[...sign-out]]/page.tsx
import { SignedOut } from "@clerk/nextjs";

export default function SignOutPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="max-w-md w-full p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">Sign Out</h1>
        <SignedOut />
      </div>
    </div>
  );
}
