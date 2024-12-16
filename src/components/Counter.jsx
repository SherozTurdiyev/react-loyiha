import { Fragment, useState } from "react";

function Counter() {

    // hook useState
    const [count, setCount] = useState(0)
    // const [count, setCount] = useState(0)
    function decr() {
        // count ++ // count = count+1
        setCount(count - 1)
    }
    function incr() {
        setCount(count + 1)
    }

    return (
        <Fragment>
            <h1>Hello world</h1>
            <button onClick={() => { decr() }} className="btn">-</button>
            <span>count: {count} </span>
            <button onClick={() => { incr() }} className="btn">+</button>
        </Fragment>
    )
}

export default Counter;

// Navbar componenta yaratiladi, 
// Counter componenta yaratiladi va unda count boshlanishi 1 bo'ladi , decr btn bosilganda har safar -5 ayrilishi kerak va incr btn bosilganda +5 qo'shishi kerak.