import styled from 'styled-components';

export const DataPickerWrapper = styled.label`
  width: 280px;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid ${p => p.theme.colors.grayIcon};
  padding-bottom: 5px;
  @media screen and (min-width: 768px) {
    width: 181px;
  }
  &:hover {
    border-bottom: 1px solid ${p => p.theme.colors.gray};
  }
  &:focus {
    border-bottom: 1px solid ${p => p.theme.colors.gray};
  }
  & .react-datepicker {
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights.normal};
  }
  & input {
    border: none;
    color: red;
    width: 100%;
    outline: none;
    /* padding-left: 20px; */
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.m};
  }
  & .react-datepicker__day {
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.main};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.s};
  }
  & .react-datepicker__day--selected {
    color: white;
  }
  & .react-datepicker__day--keyboard-selected {
    color: white;
  }
`;
export const DateIcon = styled.svg`
  display: block;
  width: 24px;
  height: 24px;
`;
