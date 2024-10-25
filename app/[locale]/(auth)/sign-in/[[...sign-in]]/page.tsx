import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-neutral">
      <SignIn forceRedirectUrl="/dashboard" />
    </section>
  );
}
