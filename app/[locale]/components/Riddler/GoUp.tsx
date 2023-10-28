import Link from "next/link";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const GoUp = () => {
  return (
    <section className="flex justify-center bg-neutral pb-8 lg:pb-10">
      <Link
        href="#navigation"
        className="delay-50 text-neutral-content transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-125"
      >
        <BsFillArrowUpCircleFill size={50} aria-label="Up arrow Icon" />
      </Link>
    </section>
  );
};
