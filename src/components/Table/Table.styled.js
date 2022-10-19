import styled from 'styled-components';

const WraperDiv = styled.div`
  background: #e7eaf2;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
`;
const TableHead = styled.div`
  width: 280px;
  height: 58px;
  background: ${props => props.theme.colors.white};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ParagraphHead = styled.p`
  font-family: ${props => props.theme.fonts.name};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
  color: ${props => props.theme.colors.black};
  margin: 0 ${props => props.theme.space[2]}px;
`;
const Paragraph = styled.p`
  font-family: ${props => props.theme.fonts.name};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.main};
  color: ${props => props.theme.colors.black};
  margin: 0 ${props => props.theme.space[2]}px;
`;

const ParagraphNumber = styled(Paragraph)`
  text-align: right;
  margin-left: auto;
  margin-right: 17px;
`;
const ParagraphText = styled(Paragraph)`
  display: flex;
  align-items: center;
  margin-left: ${props => props.theme.space[1]}px;
`;

const ParagraphTotal = styled.p`
  font-family: ${props => props.theme.fonts.name};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.main};
  color: ${props => (props.income ? '#24CCA7' : '#FF6596')};
  text-align: right;
`;

const ColorSpan = styled.span`
  width: 24px;
  height: 24px;
  left: 32.98px;
  top: 736.52px;
  border-radius: 2px;
  margin-right: 16px;
  margin-left: 12px;
`;

const TotalDiv = styled.div`
  display: flex;
  width: 240px;
  justify-content: space-between;
`;

const ListUl = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  width: 280px;
  height: 52px;
  border-bottom: 1px solid #dcdcdf;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.6);
  align-items: center;
  &: hover {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
`;
const IconBtn = styled.svg`
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-left: auto;
  margin-right: 20px;
`;
const SelectBtn = styled.div`
  display: flex;
  background: #e7eaf2;
  width: 280px;
  height: 50px;
  border: 1px solid #000000;
  border-radius: 30px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: flex-start;
`;

const SelectText = styled.span`
  margin-left: 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.black};
`;
export {
  ParagraphText,
  ParagraphNumber,
  WraperDiv,
  ParagraphHead,
  Paragraph,
  ParagraphTotal,
  ColorSpan,
  TotalDiv,
  ListUl,
  Item,
  TableHead,
  IconBtn,
  SelectBtn,
  SelectText,
};
