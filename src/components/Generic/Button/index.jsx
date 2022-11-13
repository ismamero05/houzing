import React from "react";
import { Container } from "./style";

export const Button = ({children, type, onClick, width, height}) => {
    return (
        <Container onClick={onClick} width={width} height={height} type={type}>{children || 'generic button'}</Container>
    )
}

export default Button