import React from 'react'
import Title from './Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



export default function Card({ title, desc, rasm, id , deleteUser }) {

    return (
        <div className='border border-gold rounded-xl mt-4 flex gap-5 items-center'>
            <div className='p-3'>
                <img className='w-[250px] rounded-lg' src={rasm} alt="rasm" />
            </div>
            <div className=''>
                <Title>{title}</Title>
                <p>{desc}</p>
                <button onClick={()=>{deleteUser(id)}}>
                    <FontAwesomeIcon icon={faTrash} className="fa-fw text-red-600" />
                </button>

            </div>
        </div>
    )
}
