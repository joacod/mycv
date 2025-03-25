import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { CiLogin } from "react-icons/ci";

export const User = () => {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <button
            className="btn-base btn btn-accent py-6"
            aria-label="Sign in Button"
          >
            <span className="inline">
              <CiLogin size={22} />
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
