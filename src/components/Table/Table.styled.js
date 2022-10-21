import styled from 'styled-components';

const WraperDiv = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  ${props => props.theme.breakpoints.tab} {
    width: 351px;
    // margin-right: 85px;
    margin-left: auto;
  }
`;

const WraperSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  ${props => props.theme.breakpoints.tab} {
    justify-content: space-between;
  }
`;
const TableHead = styled.div`
  width: 280px;
  height: 58px;
  background: ${props => props.theme.colors.white};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${props => props.theme.breakpoints.tab} {
    width: 350px;
  }
`;
const ParagraphHead = styled.p`
  font-family: ${props => props.theme.fonts.name};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.main};
  color: ${props => props.theme.colors.black};
  margin: 0 ${props => props.theme.space[2]}px;
  ${props => props.theme.breakpoints.tab} {
    margin: 0 ${props => props.theme.space[3]}px;
  }
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
  ${props => props.theme.breakpoints.tab} {
    margin-right: ${props => props.theme.space[3]}px;
  }
`;
const ParagraphText = styled(Paragraph)`
  display: flex;
  align-items: center;
  margin-left: ${props => props.theme.space[1]}px;
  ${props => props.theme.breakpoints.tab} {
    margin-left: ${props => props.theme.space[1]}px;
  }
`;

const ParagraphTotal = styled.p`
  font-family: ${props => props.theme.fonts.name};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.main};
  color: ${props => (props.income ? '#24CCA7' : '#FF6596')};
  text-align: right;
  margin: 0;
`;

const ColorSpan = styled.span`
  width: 24px;
  height: 24px;
  left: 32.98px;
  top: 736.52px;
  border-radius: 2px;
  margin-right: 16px;
  margin-left: 12px;
  background: ${props => props.theme.colors.diagram[props.index]};
  ${props => props.theme.breakpoints.tab} {
    margin-left: ${props => props.theme.space[2]}px;
  }
`;

const TotalDiv = styled.div`
  display: flex;
  width: 240px;
  justify-content: space-between;
  ${props => props.theme.breakpoints.tab} {
    width: 300px;
    :last-child {
      margin-top: 10px;
    }
  }
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
  &:hover {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  ${props => props.theme.breakpoints.tab} {
    width: 350px;
  }
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
  // IconBtn,
  // SelectBtn,
  // SelectText,
  WraperSelect,
  // WraperPicker,
};
