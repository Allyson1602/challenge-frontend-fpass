import { ChangeEvent, FC, useState } from "react";
import { ButtonSearchStyled, InputSearchStyled, LabelSearchStyled, SearchFieldStyled, SearchStyled } from "./search.style";
import { useNavigate } from "react-router-dom";
import { TRoutes } from "../../routes";

const SearchPage: FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.trim();

        setSearchValue(value);
    };

    const handleClickSearch = () => {
        navigate(TRoutes.LIST);
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