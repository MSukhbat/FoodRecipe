import { Stack } from 'expo-router';

import Welcome from './welcome';

import { useWelcomed } from '@/service/useWelcomed';

const RootLayoutNav: React.FC = () => {
  const { isWelcomed } = useWelcomed();
  console.log({ isWelcomed });

  if (!isWelcomed) {
    return <Welcome />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" />
      <Stack.Screen name="search" />
      <Stack.Screen name="recipe/[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayoutNav;
