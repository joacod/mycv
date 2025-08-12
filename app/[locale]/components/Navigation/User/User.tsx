import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { CiLogin } from "react-icons/ci";

export const User = () => {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <button
            className="btn btn-accent btn-sm md:btn-md py-2 md:py-6"
            aria-label="Sign in Button"
          >
            <span className="inline">
              <CiLogin className="md:hidden" size={18} />
              <CiLogin className="hidden md:block" size={22} />
            </span>
            <span>Sign in</span>
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};
