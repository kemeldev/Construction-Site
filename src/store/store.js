import { create } from 'zustand';

export const useLanguageStore = create((set) => ({
  currentLanguage: 'english',
  setLanguage: (newLanguage) => set({ currentLanguage: newLanguage }),
}));