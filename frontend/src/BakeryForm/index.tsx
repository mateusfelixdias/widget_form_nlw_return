import { BakeryToAdd } from "./components/BakeryToAdd";

export function Bakery (){
  return ( 
    <>
      <header className="items-center flex flex-col mt-8 xs:w-[400px]" ></header>

      <main className="h-96 flex flex-col rounded items-center">
        <BakeryToAdd/>
      </main>

      <footer className="items-center flex flex-col gap-2 mt-24">
        <p>Felix_mateus...</p>
      </footer>

    </>
  );
};
