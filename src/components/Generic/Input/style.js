import styled from "styled-components";

const Container = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    min-width: 120px;
    border: 1px solid #E6E9EC;
    outline: none;

    height: ${({fontSize}) => (fontSize ? `${fontSize}px` : '14px')};
    height: ${({height}) => (height ? `${height}px` : '44px')};
    width: ${({width}) => (width ? `${width}px` : '100%')};
    padding-left: ${({icon}) => icon?'40px' : '20px'};
    
    `

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: ${({width}) => (width ? `${width}px` : '100%')};
`

const Icon = styled.div`
    position: absolute;
    left: 10px;
    top: 15px;
`

export { Container, Wrapper, Icon }