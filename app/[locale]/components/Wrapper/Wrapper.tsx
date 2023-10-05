import React from "react";
import Navigation from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-gradient-to-b from-blue-700 to-blue-400 ">
      <div className="relative flex h-screen flex-col">
        <main className="mx-20 mt-20 flex-grow shadow-2xl">
          <Navigation />
          <div id="content" className="bg-neutral-100 p-10 text-black">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Wrapper;
