import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandomGreeting = createAsyncThunk('data/fetchRandomGreeting', async () => {
    try {
      const response = await fetch('http://localhost:3000/messages');
      if (!response.ok) {
        throw new Error('Error fetching data from the API');
      }
  
      const data = await response.json();
      // Puedes realizar cualquier transformación necesaria en los datos aquí
      return { text: data.message, isSelected: false };
    } catch (error) {
      throw new Error('Error fetching data from the API');
    }
  });
  
const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: '',
  },
  reducers: {
    setGreetings: (state, action) => {
      state.greeting = action.payload;
    },
  },
});

export const { setGreetings } = greetingsSlice.actions;
export default greetingsSlice.reducer;
