import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Stack } from 'expo-router';

import Welcome from './welcome';

import { useWelcomed } from '@/service/useWelcomed';

const RootLayoutNav: React.FC = () => {
  const client = new ApolloClient({
    uri: 'https://recipe-backend-tau.vercel.app/api/graphql',
    // uri: 'http://192.168.11.73:3000/api/graphql',
    cache: new InMemoryCache(),
  });
  const { isWelcomed } = useWelcomed();
  console.log({ isWelcomed });

  if (!isWelcomed) {
    return (
      <ApolloProvider client={client}>
        <Welcome />
      </ApolloProvider>
    );
  }

  return (
    <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="all" />
        <Stack.Screen name="search" />
        <Stack.Screen name="category/[id]" />
        <Stack.Screen name="recipe/[id]" options={{ headerShown: false }} />
      </Stack>
    </ApolloProvider>
  );
};

export default RootLayoutNav;
