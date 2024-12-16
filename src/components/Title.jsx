import React, { Fragment } from 'react'

export default function Title(props) {
    return (
        <span style={{ color: "red" }}>
            {props.children}
        </span>
    )
}
