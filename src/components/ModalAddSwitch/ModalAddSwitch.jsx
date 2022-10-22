import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';
import { modalIsIncome } from 'redux/transactions/transactionsSelectors';
import sprite from '../../assets/images/icons.svg';
import {
  SwitchIcon,
  IconBox,
  SwitchLabel,
  SwitchText,
} from './ModalAddSwitch.styled';
import { setIsIncome } from 'redux/transactions/transactionsSlice';

const ModalAddSwitch = ({ values, setFieldValue }) => {
  // const isIncome = useSelector(modalIsIncome);
  // const dispatch = useDispatch();
  const switchTextColor = () => {
    return values.type === 'INCOME'
      ? { inc: '#24CCA7', exp: '#E0E0E0' }
      : { inc: '#E0E0E0', exp: '#FF6596' };
  };

  return (
    <SwitchLabel htmlFor="small-radius-switch">
      <SwitchText inputColor={switchTextColor().inc}>Income</SwitchText>
      <Switch
        name="type"
        value={values.type}
        checked={values.type === 'EXPENSE'}
        onChange={(checked, event) => {
          setFieldValue('type', checked ? 'EXPENSE' : 'INCOME');
          //   setIsIncome(prev => !prev);
          // dispatch(setIsIncome(!isIncome));
          setFieldValue('category', checked ? values.category : '');
        }}
        handleDiameter={44}
        offColor="#FF6596"
        onColor="#24CCA7"
        offHandleColor="#24CCA7"
        onHandleColor="#FF6596"
        height={40}
        width={80}
        border=""
        boxShadow="0px 0px 1px 2px #BDBDBD"
        activeBoxShadow="0px 0px 1px 2px #BDBDBD"
        uncheckedIcon={<div></div>}
        uncheckedHandleIcon={
          <IconBox>
            <SwitchIcon>
              <use href={`${sprite}#icon-plus`}></use>
            </SwitchIcon>
          </IconBox>
        }
        checkedIcon={<div></div>}
        checkedHandleIcon={
          <IconBox>
            <SwitchIcon>
              <use href={`${sprite}#icon-minus`}></use>
            </SwitchIcon>
          </IconBox>
        }
        className="react-switch"
        id="small-radius-switch"
      />
      <SwitchText inputColor={switchTextColor().exp}>Expense</SwitchText>
    </SwitchLabel>
  );
};

export default ModalAddSwitch;
