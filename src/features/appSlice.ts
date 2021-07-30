/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
    selectedImage: null,
  },
  reducers: {
    login: (state, action) => {
      state.user += action.payload
    },
    logout: (state) => {
      state.user = null
    },
    selectImage: (state, action) => {
      state.selectedImage = action.payload
    },
    resetImage: (state) => {
      state.selectedImage = null
    },
  },
})
export const { login, logout, selectImage, resetImage } = appSlice.actions

export const selectUser = (state: { app: { user: any } }): any => state.app.user
export const selectSelectedImage = (state: { app: { selectedImage: any } }): any => state.app.selectedImage

export default appSlice.reducer
