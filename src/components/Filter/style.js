import styled from "styled-components";
import {ReactComponent as houses} from '../../assets/icons/houses.svg'
import {ReactComponent as search} from '../../assets/icons/search.svg'
import {ReactComponent as settingLines} from '../../assets/icons/setting-lines.svg'

const Container = styled.div`
    display: flex;
    padding: var(--padding);
    padding-top: 10px;
    padding-bottom: 10px;
    gap: 20px;

    width: 100%;
    max-width: 1440px;
    margin: auto;
`

const Icons = styled.div``

Icons.Houses = styled(houses)`
    margin-right: 8px;
`

Icons.Search = styled(search)`
    margin-right: 8px;
`

Icons.SettingLines = styled(settingLines)`
    margin-right: 8px;
`

const MenuWrapper = styled.div`
    padding: 30px;
    background-color: white;
    border: 1px solid black;
`

const Section = styled.div`
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
`

export { Container, Icons, MenuWrapper, Section }