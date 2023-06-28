import { FC, useState } from "react";
import { BoxAbasStyled, BoxModifiedStyled, BoxNameStyled, ContentAbasStyled, DetailStyled, GoBackStyled, HeaderAbasStyled, HeaderInfoStyled, InfoDetailStyled } from "./detail.style";
import { useAppSelector } from "../../redux/store";
import { TRoutes } from "../../routes";
import * as dayjs from "dayjs"
import * as isLeapYear from "dayjs/plugin/isLeapYear";
import "dayjs/locale/pt-br";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);
dayjs.extend(isLeapYear);
dayjs.locale("pt-br");

export enum ETab {
    COMICS = "comics",
    STORIES = "stories",
    EVENTS = "events",
    SERIES = "series",
}

const DetailPage: FC = () => {
    const { hero } = useAppSelector(state => state.hero);
    const [currentTab, setCurrentTab] = useState<ETab>(ETab.COMICS);

    const getContentAba = (): JSX.Element => {
        const content = hero[currentTab];

        return (
            <ContentAbasStyled>
                {content.items?.length > 0 ? (
                        <ol className="content-aba__list">
                            {content.items?.map((item, index) => (
                                <li key={index} className="content-aba__item-list">
                                    <a className="content-aba__link" href="#">{item.name}</a>
                                </li>
                            ))}
                        </ol>
                ) : (
                    <p>Herói não possui '{currentTab}'</p>
                )}
            </ContentAbasStyled>
        );
    };

    const handleChangeTab = (tab: ETab) => {
        setCurrentTab(tab);
    };

    return (
        <DetailStyled>
            <GoBackStyled to={TRoutes.LIST}>voltar</GoBackStyled>

            <InfoDetailStyled>
                <div>
                    <img src={hero.thumbnail.path+"."+hero.thumbnail.extension} alt={hero.name} />
                </div>

                <div style={{width: "100%"}}>
                    <HeaderInfoStyled>
                        <BoxNameStyled>
                            <p className="info__name">{hero.name}</p>
                            <p className="info__id">#{hero.id}</p>
                        </BoxNameStyled>
                        
                        <BoxModifiedStyled>
                            <p className="info__modified-title">Última modificação</p>
                            <p>{dayjs(hero.modified).format("L")}</p>
                        </BoxModifiedStyled>
                    </HeaderInfoStyled>

                    <p className="info__description">{hero.description || <span style={{color: "#737373"}}>Herói sem descrição</span>}</p>
                </div>
            </InfoDetailStyled>

            <BoxAbasStyled>
                <HeaderAbasStyled>
                    <button
                        onClick={() => handleChangeTab(ETab.COMICS)}
                        style={{
                            borderColor: currentTab === ETab.COMICS ? "#b5171f" : "#FFFfff00",
                        }}
                    >Comic</button>

                    <span className="header-abas__divider" />

                    <button
                        onClick={() => handleChangeTab(ETab.STORIES)}
                        style={{
                            borderColor: currentTab === ETab.STORIES ? "#b5171f" : "#FFFfff00",
                        }}
                    >História</button>
                    
                    <span className="header-abas__divider" />

                    <button
                        onClick={() => handleChangeTab(ETab.EVENTS)}
                        style={{
                            borderColor: currentTab === ETab.EVENTS ? "#b5171f" : "#FFFfff00",
                        }}
                    >Evento</button>
                    
                    <span className="header-abas__divider" />

                    <button
                        onClick={() => handleChangeTab(ETab.SERIES)}
                        style={{
                            borderColor: currentTab === ETab.SERIES ? "#b5171f" : "#FFFfff00",
                        }}
                    >Série</button>
                </HeaderAbasStyled>

                {getContentAba()}
            </BoxAbasStyled>
        </DetailStyled>
    )
};

export default DetailPage;