import { BakeryToAdd } from "./BakeryToAdd";


export function BakeryAdd (){
  return ( 
    <>
      <header className="items-center flex flex-col text-center gap-2 mb-8">welcome to the bakery.</header>

      <main className="flex flex-col rounded items-center">
          <BakeryToAdd />
      </main>

      <footer className="items-center flex flex-col text-center gap-2 mt-8">
        <p>Bakery.</p>
      </footer>

    </>
  );
};
