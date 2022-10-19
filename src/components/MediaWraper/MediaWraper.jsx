import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

const Mob = ({ children }) => {
  return <MediaQuery maxWidth={767}>{children}</MediaQuery>;
};
const Tab = ({ children }) => {
  return <MediaQuery minWidth={768}>{children}</MediaQuery>;
};
const Desc = ({ children }) => {
  return <MediaQuery minWidth={1280}>{children}</MediaQuery>;
};

Mob.propTypes = {
  children: PropTypes.node.isRequired,
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
};
Desc.propTypes = {
  children: PropTypes.node.isRequired,
};
export { Mob, Tab, Desc };
