import { FC, PropsWithChildren, useEffect } from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/images/background.jpg";
import MarvelLogo from "../assets/images/logo-marvel.png";
import { HERO_STORAGE, LIST_HEROES_STORAGE } from "../constants";
import { setListHeroes } from "../redux/reducers/listHeroesReducer";
import { useAppDispatch } from "../redux/store";
import { setHero } from "../redux/reducers/heroReducer";

export const LayoutStyled = styled.div`
    min-width: 600px;
    width: 100vw;
    height: 100vh;
    background-image:  linear-gradient(to top, #000000BB, #000000F8, #000000BB), url(${BackgroundImage});
    background-size: contain;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 16px;
    box-sizing: border-box;
`;

const Layout: FC<PropsWithChildren> = ({ children }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const listHeroesStorage = sessionStorage.getItem(LIST_HEROES_STORAGE);
        const heroStorage = sessionStorage.getItem(HERO_STORAGE);
        
        if (listHeroesStorage) {
            dispatch(setListHeroes(JSON.parse(listHeroesStorage)));
        }
        
        if (heroStorage) {
            dispatch(setHero(JSON.parse(heroStorage)));
        }
    }, []);

    return (
        <LayoutStyled>
            <div style={{ height: "120px" }}>
                <img src={MarvelLogo} alt="Logo da Marvel" width="300px" />
            </div>

            <div style={{ flexGrow: "1" }}>
                {children}
            </div>
        </LayoutStyled>
    )
};

export default Layout;