import { Carousel } from 'antd';
import React, { useRef } from 'react'
import { ArrowLeft, ArrowRight, Blur, Container, Content, Img } from './style'
import img1 from '../../assets/images/house1.png'
import img2 from '../../assets/images/house2.png'

export const GenCarousel = () => {
    const slider = useRef()

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const onMove = ({
        target: {
            dataset: { name },
        },
    }) => {
        if (name === 'right') slider.current.next();
        if (name === 'left') slider.current.prev();
    }

    return (
    <Container>
        <Carousel ref={slider} afterChange={onChange}>
            <Img src={img1} />
            <Img src={img2} />
        </Carousel>
        <Blur />
        <Content>
            <Content.Title>Skyper Pool Partment</Content.Title>
            <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
            <Content.Price>$5,250/mo</Content.Price>
        </Content>
        <ArrowLeft data-name='left' onClick={onMove} />
        <ArrowRight data-name='right' onClick={onMove} name='right' />
    </Container>
  )
}

export default GenCarousel