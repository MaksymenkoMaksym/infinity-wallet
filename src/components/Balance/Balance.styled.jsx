import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  //   max-width: 350px;
  height: 80px;
  //   padding: 0px 20px;
  background-color: ${props => props.theme.colors.background.white};
  border-radius: 30px;
  margin-bottom: 0px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
    // padding: 10px 40px;
    margin: 0;
    // margin-right: 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    margin-bottom: 30px;
  }
`;

export const Title = styled.p`
  font-family: Circe, sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #a6a6a6;

  margin: 0;
  padding-top: 8px;
  padding-left: 32px;
  margin-bottom: 12px;

  media screen and (min-width: 768px) {
    padding-left: 40px;
  }
`;

export const Sum = styled.p`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  margin: 0;
  padding-left: 32px;
  align-items: center;
  color: ${props => props.theme.colors.black};

  media screen and (min-width: 768px) {
    padding-left: 40px;
  }
`;
