import { api } from '../../lib/api';
import { FormEvent, useState } from 'react';
import { Loading } from '../Loading';


export function BakeryToAdd (){

  const [ name, setName ] = useState<string>('');
  const [ price, setPrice ] = useState<string>('');
  const [ eventButton, seteventbeButton ] = useState(false);


  async function handleSumitproduct ( data: FormEvent ){
      data.preventDefault();

      seteventbeButton(true);
    
      const insert = await api.post('/insert', {
        name,
        price
      }); 

      setName('');
      setPrice(''); 


      setTimeout(() => {(
        seteventbeButton(false),
        window.alert(insert.data)
      )}, 2000);
      
  };


  return (
      <section className="bg-[#066483] w-[380px] h-96 rounded mobile:w-[266px]">

        <form>

          <span className="text-3xl flex flex-col items-center mt-8">Protudo:</span>

            <input type="text" name="nome" required placeholder="Pão..." value={ name } onChange={(data) => setName(data.target.value)}
              className="rounded flex-col flex ml-2 w-[364px] items-center text-1xl pt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus-ring-brand-300 transsition-colors mobile:w-[250px]"
          />

          <span className="text-3xl flex flex-col items-center mt-8">Preço:</span>

            <input type="text" 
              name="preço" required placeholder="1.90..." value={ price } onChange={(data) => setPrice(data.target.value)} 
              className="rounded flex flex-col ml-2 w-[364px] items-center text-1xl pt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus-ring-brand-300 transsition-colors mobile:w-[250px]"
            />

          <span className="p-1 rounded flex-1 flex ml-2 justify-center items-center text-1xl mt-16 bg-blue-100 hover:bg-brand-300 w-[364px] mobile:w-[250px]"> 
            <button type='button' onClick={ handleSumitproduct }> { eventButton ? <Loading />: 'Adicionar produto' }</button>
          </span>

        </form>
      </section>
  );
};

