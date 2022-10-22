import { Field } from 'formik';
import styled from 'styled-components';

export const Input = styled(Field)`
  width: 100%;
  height: 32px;
  border: none;
  outline: none;
  /* padding-left: 20px; */
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
  padding-left: 20px;
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
  width: 100%;
`;
export const HeaderBox = styled.div`
  width: 100%;
`;
