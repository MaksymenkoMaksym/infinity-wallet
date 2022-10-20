import { ThreeDots } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderStyled>
      <ThreeDots color="blue" />
    </LoaderStyled>
  );
}
