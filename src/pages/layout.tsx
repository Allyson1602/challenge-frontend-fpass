import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/images/background.jpg";
import MarvelLogo from "../assets/images/logo-marvel.png";

export const LayoutStyled = styled.div`
    width: 100vw;
    height: 100vh;
    background-image:  linear-gradient(to top, #000000BB, #000000F8, #000000BB), url(${BackgroundImage});
    background-size: contain;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    box-sizing: border-box;
`;

const LayoutPage: FC<PropsWithChildren> = ({ children }) => {
    return (
        <LayoutStyled>
            <img src={MarvelLogo} alt="Logo da Marvel" width="300px" />

            {children}
        </LayoutStyled>
    )
};

export default LayoutPage;