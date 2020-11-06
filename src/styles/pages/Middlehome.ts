import styled from 'styled-components';

export const Middle = styled.div`
    width: 50vw;
    height: 50vh;
    padding: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 54px;
        color: ${props => props.theme.colors.primary};
        margin-top: 40px;
    }
    p {
        margin-top: 24px;
        font-size: 24px;
        line-hight: 32px;
    }
`;
