import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-neutral">
      <SignUp forceRedirectUrl="/dashboard" />
    </section>
  );
}
