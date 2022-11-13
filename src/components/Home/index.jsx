import React from "react";
import { Input } from "../Generic";
import { Container } from "./style";

export const Home = () => {
    return (
        <Container>
            Home
            <Input width={120} placeholder={'isma'} />
        </Container>
    )
}