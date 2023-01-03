import React from "react";
import Button from "../button/button";

function LetsBuild() {
  return (
    <section className="h-auto bg-white text-black">
      <div className=" m-auto py-28 pl-32 pr-2 max-[768px]:pl-10">
        <h2 className="italic font-light tracking-wide text-5xl max-[768px]:text-4xl">
          Let&apos;s build
        </h2>
        <h2 className="mt-5 italic font-extrabold tracking-wide text-5xl max-[768px]:text-4xl">
          something amazing together!
        </h2>
        <p className="mt-5 tracking-wide text-xl font-light">
          We put you at the centre of everything we do. Top class service and a
          memorable experience awaits..
        </p>
        <Button text="LET'S TALK" />
      </div>
    </section>
  );
}

export default LetsBuild;
