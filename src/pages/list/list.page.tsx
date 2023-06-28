import { FC} from "react";
import { GoBackStyled, InfoItemStyled, ItemListStyled, ListStyled } from "./list.style";
import { useAppSelector } from "../../redux/store";
import { TRoutes } from "../../routes";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const ListPage: FC = () => {
    const listHeroes = useAppSelector(state => state.listHeroes.heroes);

    return (
        <ListStyled>
            <GoBackStyled to={TRoutes.SEARCH}>voltar</GoBackStyled>

            <SimpleBar style={{ maxHeight: "calc(100vh - 210px)" }}>
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
            </SimpleBar>
        </ListStyled>
    )
};

export default ListPage;