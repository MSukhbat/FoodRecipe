import { Tabs } from 'expo-router';
import { View } from 'react-native';
import Add from '@/icons/add-icon';
import Back from '@/icons/back-icon';
import HomeIcon from '@/icons/home-icon';
import ListIcon from '@/icons/list-icon';
import Profile from '@/icons/profile-icon';
import Search from '@/icons/search-icon';

const TabLayout: React.FC = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <HomeIcon />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: '',
          tabBarIcon: ({}) => <ListIcon />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: '',
          tabBarIcon: ({}) => (
            <View>
              <View style={{ position: 'relative', top: 0 }}>
                <Back />
              </View>
              <View style={{ position: 'absolute', right: 31 }}>
                <Add />
              </View>
            </View>
          ),
          tabBarIconStyle: {
            top: -17,
            justifyContent: 'center',
            alignItems: 'center',
          },
          tabBarLabelStyle: { display: 'none' },
        }}
      />

      <Tabs.Screen
        name="three"
        options={{
          title: '',
          tabBarIcon: ({}) => <Search />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({}) => <Profile />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
