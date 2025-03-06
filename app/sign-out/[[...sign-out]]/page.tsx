// // app/sign-out/[[...sign-out]]/page.tsx
// "use client";
// import { useClerk } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function SignOutPage() {
//   const { signOut } = useClerk();
//   const router = useRouter();

//   useEffect(() => {
//     // Sign out and redirect to home page
//     signOut().then(() => {
//       router.push("/");
//     });
//   }, [signOut, router]);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black text-white">
//       <div className="max-w-md w-full p-8 rounded-lg">
//         <h1 className="text-3xl font-bold mb-8 text-center">Signing Out...</h1>
//       </div>
//     </div>
//   );
// }
