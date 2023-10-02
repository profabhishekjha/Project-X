"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-400 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="bg-blue-400 flex items-center justify-center">
        Logged in as '{session.user.email}'
      </div>
      <button
        onClick={() => signOut("google")}
        className="bg-white p-2 rounded-lg"
      >
        Logout
      </button>
    </>
  );
}
