const customStyles = {
  //випадаючий список
  menu: provided => ({
    //значення по дефолту
    ...provided,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(25px)',
    borderRadius: 20,
    outline: 0,
    // paddingLeft: '20px',
  }),
  // один зі списку
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',

    color: state.isFocused ? '#FF6596' : '#000000',
    padding: 20,
    backgroundColor: state.isFocused ? 'white' : null,
    cursor: 'pointer',
  }),
  //пошуковий рядок
  control: (provided, state) => ({
    ...provided,
    width: '100%',
    border: 0,
    borderColor: state.isFocused ? 'transparent' : null,
    borderBottom: '1px solid   #E0E0E0',
    borderRadius: 0,
    backgroundColor: 'transparent',
  }),
  placeholder: provided => ({
    ...provided,
    color: '#BDBDBD',
  }),
  container: (provided, state) => ({
    ...provided,
    width: '100%',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
};
export default customStyles;
