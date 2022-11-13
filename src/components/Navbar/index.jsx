import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Filter } from "../Filter";
import { Button } from "../Generic/Button";
import { Container, Link, Logo, Main, Section, Wrapper, LogoTitle } from "./style";

export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <Main>
                <Wrapper>
                    <Section onClick={() => navigate('/home')} logo>
                        <Logo /> <LogoTitle>Houzing</LogoTitle>
                    </Section>
                    <Section>
                        {
                            navbar.map(({title, path, hidden}, index) => {
                                return !hidden && (
                                    <Link className={({isActive}) => isActive && 'active'} key={index} to={path}>{title}</Link>
                                    )
                                })
                            }
                    </Section>
                    <Section>
                        <Button onClick={() => navigate('/signin')} width={120} type={'dark'}>Sign In</Button>
                    </Section>
                </Wrapper>
            </Main>
            <Filter />
            <Outlet />
        </Container>
    )
}