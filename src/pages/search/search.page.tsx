import { ChangeEvent, FC, useState } from "react";
import { ButtonSearchStyled, InputSearchStyled, LabelSearchStyled, SearchFieldStyled, SearchStyled } from "./search.style";
import { useNavigate } from "react-router-dom";
import { TRoutes } from "../../routes";
import heroService from "../../services/hero.service";
import { useAppDispatch } from "../../redux/store";
import { setListHeroes } from "../../redux/reducers/listHeroesReducer";
import { LIST_HEROES_STORAGE } from "../../constants";

const SearchPage: FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const getHeroesByName = () => {
        if (searchValue === "") return;

        heroService.getHeroesByName(searchValue).then(({data}) => {
            if (data.data.count > 0) {
                sessionStorage.setItem(LIST_HEROES_STORAGE, JSON.stringify(data.data.results));
                dispatch(setListHeroes(data.data.results));

                navigate(TRoutes.LIST);
            }else {
                if (sessionStorage.getItem(LIST_HEROES_STORAGE)){
                    sessionStorage.removeItem(LIST_HEROES_STORAGE);
                    dispatch(setListHeroes([]));
                }

                setMessage("Não encontrado");
            }
        }).catch(() => {
            if (sessionStorage.getItem(LIST_HEROES_STORAGE)){
                sessionStorage.removeItem(LIST_HEROES_STORAGE);
                dispatch(setListHeroes([]));
            }

            setMessage("Não encontrado");
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
                    placeholder="Ex.: Iron Man, Captain America, Thor, Hulk"
                    value={searchValue}
                    onChange={handleChangeSearch}
                />

                <ButtonSearchStyled onClick={handleClickSearch}>buscar</ButtonSearchStyled>
            </SearchFieldStyled>

            {message && <p className="search__message">{message}</p>}
        </SearchStyled>
    )
};

export default SearchPage;
