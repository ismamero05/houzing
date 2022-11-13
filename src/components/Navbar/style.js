import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoImg } from '../../assets/icons/houzingLogo.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Main = styled.div`
    display: flex;
    justify-content: center;
    background: var(--colorPrimary);
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #ffffff;
    padding: var(--padding);
    height: 64px;
    width: 100%;
`

const Section = styled.div`
    display: flex;
    align-items: center;
    cursor: ${({logo}) => logo && 'pointer'};

    .active {
        color: aquamarine;
    }
`

const Logo = styled(LogoImg)`
    width: 30px;
    margin-right: 12px;
`

const LogoTitle = styled.h3`
    color: #ffffff;
`

const Link  = styled(NavLink)`
    text-decoration: none;
    color: #ffffff;
    padding: 0 32px;
`

export { Container, Wrapper, Section, Logo, Link, Main, LogoTitle }