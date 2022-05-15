import api from '../lib/api';
import { useState } from 'react';
import { Loading } from './Loading';


export default function OnSubmitProduct (){
  const [ nome, setNome ] = useState('');
  const [ preço, setPreço ] = useState();
  const [ eventButton, seteventbeButton ] = useState(false);

  async function handleSumitproduct (data){
    data.preventDefault();
    seteventbeButton(true);
      
    const axios = await api.post('/insert', {
      nome,
      preço
    });
      
    setTimeout(() => { seteventbeButton(false), window.alert(axios.data), setNome(''), setPreço('') }, 1000); 
  };


  return ( 
    <>
      <header className="items-center flex flex-col mt-8" >
        <h1></h1>
      </header>
    
      <main className="h-96 flex flex-col rounded items-center"> 
        <section>
          <form>
            <span className="text-3xl flex flex-col items-center mt-8">Protudo:</span>
              <input type="text"
               name="nome"
               required
               value={nome}
               onChange={(data) => setNome(data.target.value)}
               className="rounded flex-col flex items-center text-2xl pt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus-ring-brand-400 transsition-colors"/>
            <span className="text-3xl flex flex-col items-center mt-8">Preço:</span>
              <input type="text" 
                name="preço"  
                required
                value={preço} 
                onChange={(data) => setPreço(data.target.value)}
                className="rounded flex flex-col items-center text-2xl pt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus-ring-brand-400 transsition-colors"
              />
            <span className="p-1 rounded-md flex-1 flex justify-center items-center text-2xl mt-24 bg-blue-100 hover:bg-brand-300" 
              onClick={handleSumitproduct}> <button> { eventButton ? <Loading />: 'Confirm' }</button></span>
          </form>
        </section>
      </main>
    
        <footer className="items-center flex flex-col gap-2 mt-24">
          <p>Felix_mateus...</p>
        </footer>
    </>
  );
}; 
