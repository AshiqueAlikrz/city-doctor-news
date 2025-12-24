import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Language = 'en' | 'ar';

interface LanguageState {
  current: Language;
}

const getInitialLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('language');
    if (stored === 'en' || stored === 'ar') {
      return stored;
    }
  }
  return 'en';
};

const initialState: LanguageState = {
  current: getInitialLanguage(),
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.current = action.payload;
      localStorage.setItem('language', action.payload);
    },
    toggleLanguage: (state) => {
      state.current = state.current === 'en' ? 'ar' : 'en';
      localStorage.setItem('language', state.current);
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
