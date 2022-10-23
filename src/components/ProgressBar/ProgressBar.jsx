import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ErrorBox } from 'components/AuthForm/AuthForm.styled';



function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
// >= 100 ? 0 : prevProgress
function LinearWithValueLabel({values}) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
      setProgress((values.confirmPassword.length/values.password.length)*100);
      // console.log(+values.confirmPassword)
      // console.log(+values.password)
      // console.log((+values.confirmPassword/+values.password))
  }, [values]);
 
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}



// export const ProgressBarVar = ({name, values}) => {
//   function checkedOnEmpty() {
//     return values.password != 0 && values.confirmPassword != 0;
//   }
  
//   function checkedCoincidence() {
//     return (
//       values.password.slice(0, values.confirmPassword.length) === values.confirmPassword
//     );
//   }
//   return (checkedOnEmpty() && <ProgressBarVarVar values={values}/>)
// }

export const ProgressBar = ({name, values}) => {

  return (<LinearWithValueLabel values={values}/>)
}
