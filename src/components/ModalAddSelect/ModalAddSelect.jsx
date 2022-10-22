import Select from 'react-select';
import customStyles from './ModalAddSelectStyles';

const ModalAddSelect = ({ options, setFieldValue, values }) => {
  return (
    <Select
      value={values.category}
      styles={customStyles}
      onChange={data => {
        setFieldValue('category', data);
      }}
      placeholder="Select category"
      options={options}
      required
    />
  );
};

export default ModalAddSelect;
