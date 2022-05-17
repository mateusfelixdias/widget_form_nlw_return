import { BakeryToAdd } from "./components/Steps/BakeryToAdd";

export function Bakery (){
  return ( 
    <>
      <header className="items-center flex flex-col gap-2 mb-8 ml-4 xs:w-[300px] xs:h-24 xs:ml-8" >welcome to the bakery.</header>

      <main className="h-96 flex flex-col rounded items-center">
        <BakeryToAdd/>
      </main>

      <footer className="items-center flex flex-col gap-2 mt-24">
        <p>Felix_mateus...</p>
      </footer>

    </>
  );
};
