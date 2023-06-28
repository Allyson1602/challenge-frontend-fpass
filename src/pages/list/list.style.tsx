import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListStyled = styled.div`
    width: 100vw !important;
    max-height: calc(100vh - 210px);
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
    padding: 0 10%;
    box-sizing: border-box;

    & .simplebar-scrollbar {
        height: 90px !important;
        
        &::before {
            background: #E12326;
        };
    };
`;

export const ItemListStyled = styled(Link)`
    display: flex;
    flex-direction: row;
    gap: 65px;
    margin: 0 auto;
    margin-bottom: 24px;
    border-radius: 13px;
    border: 3px solid #E1232600;
    cursor: pointer;
    margin-right: 10px;
    text-decoration: none;

    & img {
        height: 100%;
        object-fit: cover;
        border-radius: 9px;
    }

    &:hover {
        border: 3px solid #E12326;
    }
`;

export const InfoItemStyled = styled.div`
    display: flex;
    flex-direction: column;

    & p {
        color: #FFF;
        margin: 0;
    }

    & .info__name {
        font-size: 32px;
        font-weight: 500;
    }
`;

export const GoBackStyled = styled(Link)`
    color: #E12326;
    text-decoration: none;
    position: absolute;
    top: -130px;
    right: 10%;
    font-weight: 500;
    font-size: 18px;

    &:hover {
        color: #b5171f;
    }
`;