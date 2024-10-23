import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const User = () => {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};
