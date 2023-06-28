import { Link } from "react-router-dom";
import styled from "styled-components";

export const DetailStyled = styled.div`
    width: 80vw;
    height: 70vh;
    background-color: #00000080;
    border: 3px solid #E12326;
    border-radius: 9px;
    box-sizing: border-box;
    padding: 30px 50px;
    overflow: auto;

    & p {
        color: #FFF;
    };

    &::-webkit-scrollbar {
        width: 7px;
    };

    &::-webkit-scrollbar-track {
        background-color: transparent;
    };

    &::-webkit-scrollbar-thumb {
        background-color: #ffffff44;
        border-radius: 3px;
    };
`;

export const InfoDetailStyled = styled.div`
    display: flex;
    gap: 50px;

    & img {
        width: 250px;
        height: 250px;
        object-fit: fill;
        border-radius: 9px;
    }

    & .info__description {
        color: #ffffffd6;
    }
`;

export const BoxNameStyled = styled.div`
    display: flex;
    gap: 12px;

    & .info__name {
        font-size: 24px;
    };

    & .info__id {
        color: #ffffff80;
        line-height: 40px;
    };
`;

export const BoxModifiedStyled = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    & .info__modified-title {
        text-align: end;
        color: #ffffff80;
    }
`;

export const HeaderInfoStyled = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;

    & p {
        margin: 0;
    }
`;

export const GoBackStyled = styled(Link)`
    color: #E12326;
    text-decoration: none;
    position: absolute;
    top: 70px;
    right: 10%;
    font-weight: 500;
    font-size: 18px;

    &:hover {
        color: #b5171f;
    }
`;

export const BoxAbasStyled = styled.div`
    margin-top: 30px;
`;

export const HeaderAbasStyled = styled.div`
    display: flex;
    justify-content: center;
    gap: 0 50px;


    & .header-abas__divider {
        width: 1px;
        background: #ffffff69;
    };

    & button {
        font-size: 18px;
        color: #ffffffd6;
        background: transparent;
        border: none;
        cursor: pointer;
        border-width: 0 0 2px 0;
        border-style: solid;

        &:hover {
            border-color: #ffffffd6 !important;
        };
    };
`;

export const ContentAbasStyled = styled.div`

    & .content-aba__item-list {
        color: #ffffffd6;
        cursor: pointer;

        &:hover, &:hover a {
            color: #b5171f;
        };
    };

    & .content-aba__link {
        text-decoration: none;
        color: #ffffffd6;
    }
`;
