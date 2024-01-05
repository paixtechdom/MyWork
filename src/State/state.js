import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: {
    profileDetails: {
        firstName: 'Oluwaferanmi',
        lastName: 'John',
        middleName: 'Peace',
        role: 'Web Developer',
        bio: 'I am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and that I am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and thatI am a this and that',
        location: 'Ibadan, Nigeria',
        certification: 'Web Development - Udemy'
    },
    // profileDetails: {},
    isLoggedIn: true
}}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) =>{
            state.value = action.payload
        },
        
        logout: (state) => {
            state.value = initialState.value;
        }
    }
}) 

const appinitialState = { value: {
    dbLocation: 'http://localhost:80/social-media',
    hideNav: false,
    isLightMode: false,

}}
const appSlice = createSlice({
    name: 'app',
    initialState: appinitialState,
    reducers: {
        toggleNavbar: (state, action) =>{
            state.value = action.payload
        },
        toggleLightMode: (state, action) =>{
            state.value = action.payload
        },     
    }
})
const alertinitialState = { value: {
    showAlert: false,
    alertMessage: 'Hello World, sjfjkdjfkdf dlfklg zdglzgkdddddddd dddddddd',
    alertFormatIndex: 0,
}}
const alertSlice = createSlice({
    name: 'alert',
    initialState: alertinitialState,
    reducers: {
        alertFunc: (state, action) =>{
            state.value = action.payload
        },
        removeAlert: (state) => {
            state.value = alertinitialState.value;
        } 
           
    }
})


export const { login, logout} = userSlice.actions;
export const { toggleNavbar, toggleLightMode } = appSlice.actions;
export const { alertFunc, removeAlert } = alertSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        app: appSlice.reducer,
        alert: alertSlice.reducer
    }
})

