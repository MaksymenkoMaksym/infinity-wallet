import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 36px;
  margin: 0;
  padding: 0;
  padding-bottom: 15px;

  @media (min-width: 768px) {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: flex-start;

    flex-wrap: wrap;
    gap: 12px;
    flex-direction: column;

    // padding-left: 35px;
    padding-bottom: 16px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
  }
`;

export const TextItem = styled.span`
  @media (min-width: 768px) {
    margin-left: 23px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const Icon = styled.svg`
  width: 38px;
  height: 38px;
  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;
