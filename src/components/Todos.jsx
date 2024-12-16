import React, { useState } from 'react'
import Card from './Card'

const person = [
    {
        title: "Shahzod",
        descrioption: "Descriptin 1",
        image: "https://cdnstatic.rg.ru/uploads/images/198/28/01/1000.jpeg"
    },
]

export default function Cards() {

    const [full_name, setFull_name] = useState(null)
    const [list, setList] = useState(person)


    function addUser() {
        let currentData = [...list]
        currentData.push(
            {
                title: full_name,
                descrioption: "Descriptin 1",
                image: "https://news.uk.cdw.com/hs-fs/hubfs/Man_Coding.jpg?width=1179&name=Man_Coding.jpg"
            }
        )
        setList(currentData)
        setFull_name('')
    }

    const deleteUser = (id) => {
        let currentData = [...list]
        currentData.splice(id, 1);
        setList(currentData)
    }

    return (
        <div className='container w-[80%] mx-auto'>
            <div className='cards-form'>
                <input className='text-black' type="text"
                    onInput={(val) => {
                        setFull_name(val.target.value)
                    }}
                    value={full_name}
                />
                <button onClick={() => {
                    addUser()
                }}>Qo'shish</button>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    list.map((item, idx) => {
                        // console.log(item);
                        return <Card
                            title={item.title}
                            desc={item.descrioption}
                            rasm={item.image}
                            id={idx}
                            deleteUser={deleteUser}
                            key={idx}
                        />
                    })
                }
            </div>
        </div>
    )
}
