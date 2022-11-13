import styled from "styled-components";

const getType = ({type}) => {
    switch (type) {
        case 'dark':
            return {
                background: 'transparent',
                color: '#FFFFFF',
                border: '1px solid #FFFFFF'
            };

        case 'light':
            return {
                background: '#FFFFFF',
                color: '#0D263B',
                border: '1px solid #E6E9EC'
            };

        case 'primary':
            return {
                background: '0061DF',
                color: '#FFFFFF',
                border: 'none'
            };

        default:
            return {
                background: '0061DF',
                color: '#FFFFFF',
                border: 'none'
            };
    }
}

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
    width: ${({width}) => (width ? `${width}px` : '130px')};
    
    cursor: pointer;

`

export { Container }