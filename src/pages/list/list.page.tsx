import { FC} from "react";
import { GoBackStyled, InfoItemStyled, ItemListStyled, ListStyled } from "./list.style";
import { useAppSelector } from "../../redux/store";
import { TRoutes } from "../../routes";

const ListPage: FC = () => {
    const listHeroes = useAppSelector(state => state.listHeroes.heroes);

    return (
        <ListStyled>
            <GoBackStyled to={TRoutes.SEARCH}>voltar</GoBackStyled>

            {listHeroes?.map((hero, index) => (
                <ItemListStyled key={index} to={TRoutes.SELECTED}>
                    <div>
                        <img src={hero.thumbnail.path+"."+hero.thumbnail.extension} alt={hero.name} width="170px" />
                    </div>

                    <InfoItemStyled>
                        <p className="info__name">{hero.name}</p>
                        <p className="info__description">{hero.description || <span style={{color: "#737373"}}>Without description</span>}</p>
                    </InfoItemStyled>
                </ItemListStyled>
            ))}
        </ListStyled>
    )
};

export default ListPage;