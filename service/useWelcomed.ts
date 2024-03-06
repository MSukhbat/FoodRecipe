import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';

type UseWelcomedStore = {
  isWelcomed: boolean;
  changeWelcomed: (value: boolean) => void;
};

export const useWelcomed = create<UseWelcomedStore>((set) => ({
  isWelcomed: false,
  changeWelcomed: (value: boolean) => {
    set({ isWelcomed: value });
    AsyncStorage.setItem('welcomed', `${value}`);
  },
}));
