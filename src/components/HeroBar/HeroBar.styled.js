import styled from 'styled-components';

export const Wrap = styled.div`
  display: block;
  padding-bottom: 32px;

  ${props => props.theme.breakpoints.tab} {
    display: flex;
    justify-content: space-between;
    padding-top: 32px;
  }

  ${props => props.theme.breakpoints.desc} {
    display: block;
    padding: 32px 69px 20px 0;
    border-right: 1px solid #e7e5f2;
    box-shadow: -0px 0px 0px rgb(0 0 0 / 5%), 1px 0px 0px rgb(255 255 255 / 60%);
  }
`;

export const Column = styled.div``;
