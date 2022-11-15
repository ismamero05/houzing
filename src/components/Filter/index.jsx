import { Dropdown } from "antd";
import React, { useRef } from "react";
import { Button, Input } from "../Generic";
import { Container, Icons, MenuWrapper, Section } from "./style";
import { uzeReplace } from "../../hooks/useReplace";
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

export const Filter = () => {
    const location = useLocation();
    const query = useSearch()

    const countryRef = useRef();
    const regionRef = useRef();
    const cityRef = useRef();
    const zipRef = useRef();

    const roomRef = useRef();
    const sizeRef = useRef();
    const sortRef = useRef();

    const minPriceRef = useRef();
    const maxPriceRef = useRef();

    const navigate = useNavigate();

    const onChange = ({target: {name, value}}) => {
        navigate(`${location?.pathname}${uzeReplace(name, value)}`)
    }

    const menu = (
        <MenuWrapper>
            <h1 className="subTitle">Address</h1>
            <Section>
                <Input onChange={onChange} ref={countryRef} defaultValue={query.get('country')} name='country' placeholder={'Country'} />
                <Input onChange={onChange} ref={regionRef} defaultValue={query.get('region')} name='region' placeholder={'Region'} />
                <Input onChange={onChange} ref={cityRef} defaultValue={query.get('city')} name='city' placeholder={'City'} />
                <Input onChange={onChange} ref={zipRef} defaultValue={query.get('zip_code')} name='zip_code' placeholder={'Zip Code'} />
            </Section>
            <h1 className="subTitle">Apartment info</h1>
            <Section>
                <Input ref={roomRef} placeholder={'Rooms'} />
                <Input ref={sizeRef} placeholder={'Size'} />
                <Input ref={sortRef} placeholder={'Sort'} />
            </Section>
            <h1 className="subTitle">Price</h1>
            <Section>
                <Input ref={minPriceRef} placeholder={'Min price'} />
                <Input ref={maxPriceRef} placeholder={'Max price'} />
            </Section>
        </MenuWrapper>
    )

    return (
        <Container>
            <Input icon={<Icons.Houses />} placeholder={'Enter an address, neighborhood, city, or ZIP code'} />
            <Dropdown
            overlay={menu}
            placement='bottomRight'
            arrow={{ pointAtCenter: true }}
            trigger='click'
            >
            <div>
                <Button type={'light'}> 
                    <Icons.SettingLines /> Advanced
                </Button>
            </div>
            </Dropdown>
            <Button> 
                <Icons.Search /> Search
            </Button>
        </Container>
    )
}