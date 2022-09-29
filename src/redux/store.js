import { createSlice, configureStore } from '@reduxjs/toolkit'

const authenticate = createSlice(
  {name: 'login', initialState: {token:localStorage.getItem("token")},
  reducers: {
    login: (state,action) => {
        localStorage.setItem("token",action.payload)
        state.token = action.payload;
    },
    logout: (state,action) => {
       localStorage.removeItem('token');
       state.token = null;
    }
  }
})
export const { login,logout } = authenticate.actions

export const store = configureStore({
  reducer: authenticate.reducer
})

export default authenticate.recuder;





