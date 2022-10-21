import { Field, Form } from 'formik';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1200;
  margin-top: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    padding-top: 60px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: ${p => p.theme.colors.background.white};
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 540px;
    height: auto;
    min-height: 400px;
    max-height: 700px;
    padding: 40px 80px;
    border-radius: ${p => p.theme.radii.md};
  }
`;

export const AddForm = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 394px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-family: ${p => p.theme.fonts.secondary};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.main};
  text-align: center;
  padding-bottom: 50px;
`;
export const Button = styled.button`
  width: 300px;
  height: 50px;
  padding: 0;
  margin-bottom: 20px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.green};
  border: 1px solid ${p => p.theme.colors.green};
  border-radius: 20px;
  letter-spacing: 0.1rem;
  font-size: 18px;
  line-height: 1.5;
`;
export const CancelButton = styled(Button)`
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.blue};
  border: 1px solid ${p => p.theme.colors.blue};
`;
export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const SwitchIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${p => p.theme.colors.white};
`;

export const Input = styled(Field)`
  width: 280px;
  height: 32px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${p => p.theme.colors.grayIcon};
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  /* margin-bottom: 40px; */
  &:hover {
    border-bottom: 1px solid ${p => p.theme.colors.gray};
  }
  &:focus {
    border-bottom: 1px solid ${p => p.theme.colors.gray};
  }
`;
export const SwitchLabel = styled.label`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
export const SwitchText = styled.span`
  color: ${p => p.inputColor};

  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
`;
export const Comment = styled.p`
  margin: 0;
  color: ${p => p.theme.colors.gray};
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
`;
export const CloseBox = styled.button`
  position: absolute;
  display: block;
  top: 20px;
  right: 20px;
  padding: 0;
  border: none;
  background: transparent;
`;
export const CloseIcon = styled.svg`
  display: block;
  width: 16px;
  height: 16px;
  fill: ${p => p.theme.colors.black};
`;

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
export const DateSumWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  /* gap: 40px; */
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const SumInput = styled(Input)`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 181px;
    margin-bottom: 0px;
  }
`;
export const CommentLabel = styled.label`
  margin-top: 40px;
  margin-bottom: 40px;
`;
