import { TouchableOpacity, View, Modal, SafeAreaView } from 'react-native';
import Menu from '@/icons/menu-icon';
import { useState } from 'react';
type visible = boolean;
const PopUp: React.FC = () => {
  const [visible, setVisible] = useState<visible>(false);
  return (
    <>
      <TouchableOpacity>
        <Menu />
      </TouchableOpacity>
      <Modal transparent visible={visible}>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: 'red' }}
          onTouchStart={() => setVisible(false)}></SafeAreaView>
      </Modal>
    </>
  );
};
export default PopUp;
