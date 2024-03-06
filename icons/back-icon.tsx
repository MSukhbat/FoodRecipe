import { Svg, Path } from 'react-native-svg';
const Back: React.FC = () => {
  return (
    <Svg width="110" height="60" viewBox="0 0 110 60" fill="none">
      <Path
        d="M20 0L90 0V25C90 44.33 74.33 60 55 60V60C35.67 60 20 44.33 20 25V0Z"
        fill="#F5F5F5"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 20V0H0C11.0457 0 20 8.95428 20 20Z"
        fill="#F5F5F5"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M110 0H90V20C90 8.95431 98.9543 0 110 0Z"
        fill="#F5F5F5"
      />
    </Svg>
  );
};
export default Back;
