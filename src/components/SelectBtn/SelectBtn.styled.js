import styled from 'styled-components';

const WraperSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  ${props => props.theme.breakpoints.tab} {
    justify-content: space-between;
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
  position: relative;
  display: flex;
  background: #e7eaf2;
  width: 280px;
  height: 50px;
  border: 1px solid #000000;
  border-radius: 30px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
  }
  ${props => props.theme.breakpoints.tab} {
    width: 165px;
  }
`;

const SelectText = styled.div`
  margin-left: 20px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.black};
`;
const Box = styled.div`
  display: block;
  position: relative;
`;
const WraperPicker = styled.div`
  & .react-datepicker {
    z-index: 1000;
    position: absolute;
    top: 50px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(25px);
    border-radius: 20px;
    ${props => props.theme.breakpoints.tab} {
      padding: 0;
    }
  }
  & .react-datepicker__year-wrapper {
    max-width: 280px;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  & .react-datepicker__header {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(25px);
    border-radius: 20px;
  }
  & .react-datepicker__month {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 280px;
  }
  & .react-datepicker__month-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 15px;
  }

  & .react-datepicker__month-wrapper:first-child {
    margin-top: 15px;
  }
`;

export { IconBtn, SelectBtn, SelectText, WraperSelect, WraperPicker, Box };
