import styled from "styled-components";

export const SearchStyled = styled.div`
    min-width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    
    & .search__message {
        color: #ffffff7d;
    };
`;

export const SearchFieldStyled = styled.div`
    width: 100%;
    height: 70px;
    position: relative;
    display: flex;
    flex-grow: 1;
    justify-content: center;

    &:hover {
        input {
            border-color: #b5171f;
        };

        button {
            background-color: #b5171f;
        };
    };
`;

export const LabelSearchStyled = styled.label`
    position: absolute;
    left: 0;
    top: -40px;
    margin-left: 25px;
    font-size: 20px;
    color: #ffffffdb;
`;

export const InputSearchStyled = styled.input`
    padding: 16px;
    padding-right: 120px;
    background: #00000088;
    border: 4px solid #ff0c18;
    font-size: 30px;
    border-radius: 30px;
    width: 50%;
    color: #FFF;
    outline: none;
    flex-grow: 1;
`;

export const ButtonSearchStyled = styled.button`
    position: absolute;
    box-sizing: content-box;
    right: 0;
    top: 4px;
    padding: 16px;
    background: #ff0c18;
    color: #fff;
    border: none;
    border-radius: 0 24px 24px 0;
    font-size: 20px;
    font-weight: 700;
    font-family: "Poppins";
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
        color: #000;
    };
`;