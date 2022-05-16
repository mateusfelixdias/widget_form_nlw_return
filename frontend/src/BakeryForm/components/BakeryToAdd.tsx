import { api } from '../../lib/api';
import { FormEvent, useState } from 'react';
import { Loading } from '../components/Loading';


export function BakeryToAdd (){
  const [ nome, setNome ] = useState('');
  const [ preço, setPreço ] = useState('');
  const [ eventButton, seteventbeButton ] = useState(false);


  async function handleSumitproduct ( data: FormEvent ){
      data.preventDefault();
      seteventbeButton(true);
    
      const insert = await api.post('/insert', {
        nome,
        preço
      }); 

      setPreço(''); 
      setNome('');
      seteventbeButton(false);
      window.alert(insert.data);
  };


  return (
      <section>
        <form>
          <span className="text-3xl flex flex-col items-center mt-8">Protudo:</span>
            <input type="text" name="nome" required value={ nome } onChange={(data) => setNome(data.target.value)}
              className="rounded flex-col flex items-center text-2xl pt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus-ring-brand-300 transsition-colors xs:w-[250px]"
            />
          <span className="text-3xl flex flex-col items-center mt-8">Preço:</span>
            <input type="text" 
              name="preço" required onChange={(data) => setPreço(data.target.value)} value={ preço } 
              className="rounded flex flex-col items-center text-2xl pt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus-ring-brand-300 transsition-colors xs:w-[250px]"
            />
          <span className="p-1 rounded-md flex-1 flex justify-center items-center text-2xl mt-24 bg-blue-100 hover:bg-brand-300" 
            onClick={ handleSumitproduct }> <button> { eventButton ? <Loading />: 'Confirm' }</button></span>
        </form>
      </section>
    );
};