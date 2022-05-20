import { useState } from "react";
import { BakeryLoginAdim } from "./BakeryLoginAdim";

export function BakeryLogin (){

  return ( 
    <>
      <header className="items-center flex flex-col text-center gap-2 mb-8">welcome to the bakery.</header>

      <main className="flex flex-col rounded items-center">
        <BakeryLoginAdim/>
      </main>

      <footer className="items-center flex flex-col text-center gap-2 mt-8">
        <p>Bakery.</p>
      </footer>

    </>
  );
};
