import { api } from '../../../lib/api';
import { FormEvent, useState } from 'react';
import { Loading } from '../Loading';


export function BakeryToAdd (){
  const [ name, setName ] = useState('');
  const [ price, setPrice ] = useState('');
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
      seteventbeButton(false);
      window.alert(insert.data);
  };


  return (
      <section className="bg-[#066483] w-[380px] h-96 rounded xs:w-[266px]">

        <form>

          <span className="text-3xl flex flex-col items-center mt-8">Protudo:</span>

            <input type="text" name="nome" required placeholder="Pão..." value={ name } onChange={(data) => setName(data.target.value)}
              className="rounded flex-col flex ml-2 w-[364px] items-center text-1xl pt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus-ring-brand-300 transsition-colors xs:w-[250px]"
          />

          <span className="text-3xl flex flex-col items-center mt-8">Preço:</span>

            <input type="text" 
              name="preço" required placeholder="1.90..." onChange={(data) => setPrice(data.target.value)} value={ price } 
              className="rounded flex flex-col ml-2 w-[364px] items-center text-1xl pt-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus-ring-brand-300 transsition-colors xs:w-[250px]"
            />

          <span className="p-1 rounded flex-1 flex ml-2 justify-center items-center text-1xl mt-16 bg-blue-100 hover:bg-brand-300 w-[364px] xs:w-[250px]" 
            onClick={ handleSumitproduct }> <button> { eventButton ? <Loading />: 'Adicionar produto' }</button></span>

        </form>

      </section>
    );
};
