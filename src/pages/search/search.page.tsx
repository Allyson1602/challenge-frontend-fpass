import { ChangeEvent, FC, useState } from "react";
import { ButtonSearchStyled, InputSearchStyled, LabelSearchStyled, SearchFieldStyled, SearchStyled } from "./search.style";
import { useNavigate } from "react-router-dom";
import { TRoutes } from "../../routes";
import heroService from "../../services/hero.service";
import { useAppDispatch } from "../../redux/store";
import { setListHeroes } from "../../redux/reducers/listHeroesReducer";

const SearchPage: FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const getHeroesByName = () => {
        if (searchValue === "") return;

        heroService.getHeroesByName(searchValue).then((response) => {
            console.log(response);
            if (response) {
                dispatch(setListHeroes(response.data));
                navigate(TRoutes.LIST);
            }
        });
    };

    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.trim();

        setSearchValue(value);
    };

    const handleClickSearch = () => {
        getHeroesByName();
    };

    return (
        <SearchStyled>
            <SearchFieldStyled>
                <LabelSearchStyled htmlFor="inputSearch">Busca de Heróis da Marvel</LabelSearchStyled>

                <InputSearchStyled
                    id="inputSearch"
                    placeholder="Digite o nome do herói"
                    value={searchValue}
                    onChange={handleChangeSearch}
                />

                <ButtonSearchStyled onClick={handleClickSearch}>buscar</ButtonSearchStyled>
            </SearchFieldStyled>
        </SearchStyled>
    )
};

export default SearchPage;