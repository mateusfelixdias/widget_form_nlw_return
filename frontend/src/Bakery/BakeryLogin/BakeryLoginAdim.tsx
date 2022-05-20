import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";
import { Loading } from "../components/Loading";


export function BakeryLoginAdim (){

    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ eventButton, seteventbeButton ] = useState(false);


    async function LoginTheAdim (data: FormEvent){
        data.preventDefault();

        seteventbeButton(true);

        const auth = await api.post('/login', {
            email,
            password
        });

        setEmail('');
        setPassword('');
        seteventbeButton(false);
        return window.alert(auth.data);
    };


    return (
        <section className="bg-brand-200 w-[510px] h-[450px] rounded flex flex-col items-center mobile:w-[280px] table:w-[350px]">
            <h1 className="text-3xl text-zinc-800 mb-8 mt-2 bg-brand-500">Login</h1>

            <h2 className="text-1xl text-zinc-400" >Bem-vindo a Bakery Felix :)</h2>

            <form className="mt-8"> 

                <span className="text-1xl text-zinc-900 ml-4" >Seu E-mail</span>
                <input type="email" name="email" required placeholder="Ex: Exemplo@gmail.com" value={ email } onChange={ ( data ) => setEmail( data.target.value ) }
                className="text-1xl text-zinc-800 rounded mb-8 ml-4 mt-2 pt-2 pl-1 w-[480px] h-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus-ring-brand-300 transsition-colors mobile:w-[250px] table:w-[300px]"/>
                

                <span className="text-1xl text-zinc-900 ml-4">Sua Senha</span>
                <input onSubmit={ LoginTheAdim } type="password" name="password" required placeholder="Ex: 123456..." value={ password }  onChange={ ( data ) => setPassword( data.target.value ) }
                className="text-1xl rounded ml-4 pt-2 pl-1 mt-2 w-[480px] h-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus-ring-brand-300 transsition-colors mobile:w-[250px] table:w-[300px]"/>

                <span className="flex flex-col text-center mt-8 bg-brand-300 w-[480px] h-10 rounded pt-1 ml-4 hover:bg-blue-300 mobile:w-[250px] table:w-[300px]">
                    <button type="submit" onClick={() => navigate('/insert')} disabled={ eventButton } className="text-2xl text-zinc-800 flex flex-col items-center text-center"> { eventButton ? <Loading />: 'Logar' } </button>
                </span>

            </form>
        </section>
    );
};
