import { configureStore, createSlice } from '@reduxjs/toolkit'
import UiState from './states/UiState'

export const context = createSlice({
    name: 'context',
    initialState: {
        ui: {
            state: initUiState(),
            loginModal: 0,
        },
        user: {
            name: initUserName(),
        },
        screen: {
            id: 0,
            name: "Default Screen",
            picUrl: 'https://sun9-70.userapi.com/impg/18Vd2ZJkovw5udirIgio_lRx73qtN-Ko-sqG0g/WFlaEy5hgnU.jpg?size=895x673&quality=95&sign=ec1d6199e452122180af0cc34fe4d183&type=album',
            description: 'Some Gamescreen description.',
        },
        tabs: [
            {
                id: 1,
                name: "First Tab",
            },
            {
                id: 2,
                name: "Second Tab",
            },
            {
                id: 3,
                name: "Third Tab",
            }
      ],
      buttons: [
        {
			id: 1,
			name: "New Game",
			description: "Push that button to start new game.",
		},
		{
			id: 2,
			name: "Continue game",
			description: "Push this button to load your last game state",
		},
      ],
    },
    reducers: {
        setScreen: (state, action) => {
            state.screen = action.payload
        },
        setBaseParams: (state, action) => {
            state.baseParams = action.payload;
        },
        setButtons: (state, action) => {
            console.log("setButtons - " + action.payload)
            state.buttons = action.payload
        },
        setTabs: (state, action) => {
            state.tabs = action.payload
        },
        setUiState: (state, action) => {
            state.ui = action.payload
        },
        showLoginModal: (state, action) =>  {
            state.ui.loginModal = 1
        },
        showRegistrationModal: (state, action) =>  {
            state.ui.loginModal = 2
        },
        hideModal: (state, action) =>  {
            state.ui.loginModal = 0
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
    },
})

function initUiState() {
    if (localStorage.getItem("token")) {
        return UiState.auth
    } else {
        return UiState.unAuth
    }
}

function initUserName() {
    if (localStorage.getItem("username")) {
        return localStorage.getItem("username")
    } else {
        return null
    }
}

 // Action creators are generated for each case reducer function
 export const { setScreen, setButtons, setTabs, setUiState, setUser, showLoginModal, showRegistrationModal, hideModal } = context.actions
 export const contextActions = context.actions
  
 export default context.reducer