import { useClerk } from "@clerk/clerk-react";
import { useRouter } from 'next/navigation'
 
export const SignOutButton = () => {
  const { signOut } = useClerk();
  const router = useRouter()
 
  return (
    // Clicking on this button will sign out a user and reroute them to the "/" (home) page.
    <button onClick={() => signOut(() => router.push("/"))}>
      Se déconnecter
    </button>
  );
};