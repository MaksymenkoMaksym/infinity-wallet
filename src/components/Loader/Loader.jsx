import { ThreeDots } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export default function Loader({ box }) {
  return (
    <LoaderStyled box={box}>
      <ThreeDots color="blue" />
    </LoaderStyled>
  );
}
