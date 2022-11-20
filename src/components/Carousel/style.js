import styled from "styled-components";
import { ReactComponent as arrowRight } from "../../assets/icons/arrow-right.svg";
import { ReactComponent as arrowLeft } from "../../assets/icons/arrow-left.svg";

const Container = styled.div`
    height: fit-content;
    position: relative;
`

const ArrowRight = styled(arrowRight)`
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    padding: 20px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    right: 20px;

    :hover {
        background: rgba(255, 255, 255, 0.4);
    }
`

const ArrowLeft = styled(arrowLeft)`
    position: absolute;
    top: 50%;
    width: 50px;
    height: 50px;
    padding: 20px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    left: 20px;

    :hover {
        background: rgba(255, 255, 255, 0.4);
    }
`

const Img = styled.img`
    width: 100%;
`

const Blur = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
`

const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

Content.Title = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 48px;

    letter-spacing: -0.02em;

    color: #FFFFFF;
`

Content.Desc = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #FFFFFF;
`

Content.Price = styled.h3`
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;

    letter-spacing: -0.02em;

    color: #FFFFFF;
`

export { Container, ArrowLeft, ArrowRight, Img, Blur, Content }