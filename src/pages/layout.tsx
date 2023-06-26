import { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/images/background.jpg";

export const LayoutStyled = styled.div`
    background-image: url(${BackgroundImage});
`;

const LayoutPage: FC<PropsWithChildren> = ({ children }) => {
    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
};

export default LayoutPage;