import { FC} from "react";
import { BoxItemListStyled, GoBackStyled, InfoItemStyled, ItemListStyled, ListStyled } from "./list.style";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { TRoutes } from "../../routes";
import { ICharacter } from "../../model/hero.model";
import { useNavigate } from "react-router-dom";
import { setHero } from "../../redux/reducers/heroReducer";
import { HERO_STORAGE } from "../../constants";

const ListPage: FC = () => {
    const listHeroes = useAppSelector(state => state.listHeroes.heroes);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClickHero = (hero: ICharacter) => {
        sessionStorage.setItem(HERO_STORAGE, JSON.stringify(hero));

        dispatch(setHero(hero));
        navigate(TRoutes.DETAIL);
    };

    return (
        <ListStyled>
            <GoBackStyled to={TRoutes.SEARCH}>voltar</GoBackStyled>

            <BoxItemListStyled>
                {listHeroes?.map((hero, index) => (
                    <ItemListStyled key={index} onClick={() => handleClickHero(hero)}>
                        <img src={hero.thumbnail.path+"."+hero.thumbnail.extension} alt={hero.name} width="170px" />

                        <InfoItemStyled>
                            <p className="info__name">{hero.name}</p>
                            <p className="info__description">{hero.description || <span style={{color: "#737373"}}>Herói sem descrição</span>}</p>
                        </InfoItemStyled>
                    </ItemListStyled>
                ))}
            </BoxItemListStyled>
        </ListStyled>
    )
};

export default ListPage;