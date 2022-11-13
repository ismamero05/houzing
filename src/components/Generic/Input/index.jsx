import React from "react";
import { Container } from "./style";

const Input = ({width, height, name, type, onChange, placeholder, value, defaultValue}) => {
    return (
        <Container value={value} defaultValue={defaultValue} width={width} height={height} name={name} placeholder={placeholder} onChange={onChange} type={type} />
    )
}

export default Input