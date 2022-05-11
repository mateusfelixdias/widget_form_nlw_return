function App() {
  return ( 
    <>
      <header>
        <h1 className="text-3xl flex flex-col items-center">Bem-Vindo Adim...</h1>
      </header>


      <main className="h-96 bg-white shadow rounded flex flex-col items-center"> 

        <section className="flex flex-col items-center rounded bg-blue-500 h-96">
          <h2 className="text-1xl flex-col pb-8">insert some product :)</h2>

          <form action="" method="">
            <span className="text-3xl flex flex-col items-center">Protudo:</span><input type="text" name="nome" id="nome" className="rounded flex-col flex items-center text-2xl"/>

            <span className="text-3xl flex flex-col items-center">Preço:</span><input type="float" name="preço" id="preço" className="rounded flex flex-col items-center text-2xl"/>

            
            <span className="bg-blue-200 rounded-full flex gap-2 mt-8 flex-col items-center hover:bg-blue-300"><button>Confirmar</button></span>
          </form>
        </section>

      </main>

      <footer>
        <p className="flex flex-col items-center">Mateus_bakery...</p>
      </footer>
    </>
  );
};

export default App
