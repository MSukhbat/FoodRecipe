import { Svg, Path } from 'react-native-svg';
const Arrow: React.FC = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.97508 4.94168L2.91675 10L7.97508 15.0583"
        stroke="#121212"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M17.0833 10H3.05835"
        stroke="#121212"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export default Arrow;
