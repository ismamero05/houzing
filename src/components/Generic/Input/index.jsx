import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = forwardRef ((
    {
    width,
    height,
    name,
    type,
    onChange,
    placeholder,
    value,
    defaultValue, 
    icon,
    },
    ref
    ) => {
        return (
            <Wrapper>
                <Icon>{icon}</Icon>
                <Container 
                ref={ref}
                icon={icon} 
                value={value} 
                defaultValue={defaultValue} 
                width={width} 
                height={height} 
                name={name} 
                placeholder={placeholder} 
                onChange={onChange} 
                type={type}
                />
            </Wrapper>
        )
    })

export default Input