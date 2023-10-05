import React from "react";
import Navigation from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-background h-screen text-black">
      <div className="relative flex h-screen flex-col">
        <main className="mx-20 mt-20 flex-grow">
          <Navigation />
          <div className="bg-white p-4 shadow-md">
            {children}
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Wrapper;
