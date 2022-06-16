import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

export function CloseButtom(){
    return (
        < Popover.Button className="top-5 rigth-5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulário!">
            <X weight="bold" className='w-4 h-4'/>
        </Popover.Button>
    )
};