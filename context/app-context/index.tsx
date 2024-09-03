'use client'

import { createContext, useReducer } from 'react'

// types
import { AppState, AppDispatch, AppAction } from './types'

export const AppContext = createContext<{
	state: AppState
	dispatch: AppDispatch
}>({
	state: {},
	dispatch: () => {},
})

export const AppProvider = ({ children }) => {
	// Retrieve the object from storage
	const retrievedObject = localStorage.getItem('userObject')
	const testUrl = localStorage.getItem('testUrl')

	const [state, dispatch] = useReducer(appReducer, {
		...initialAppState,
		user: JSON.parse(retrievedObject),
		testUrl,
	})

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	)
}

const appReducer = (state: AppState, action: AppAction) => {
	switch (action.type) {
		case 'SET_USER_CREDENTIALS': {
			// Put the object into storage
			localStorage.setItem('userObject', JSON.stringify(action.payload.user))
			return { ...state, user: action.payload.user }
		}
		case 'REMOVE_USER_CREDENTIALS': {
			if (action.payload.logout) {
				// Remove the object from storage
				localStorage.removeItem('userObject')
				localStorage.removeItem('testUrl')
				return { ...state, user: undefined }
			} else return state
		}
		case 'ADD_TEST_URL': {
			if (action.payload.testUrl) {
				localStorage.setItem('testUrl', action.payload.testUrl)
				return { ...state, testUrl: action.payload.testUrl }
			} else return state
		}
		case 'REMOVE_TEST_URL': {
			if (action.payload.removeTestUrl) {
				// Remove the object from storage
				localStorage.removeItem('testUrl')
				return { ...state, testUrl: undefined }
			} else return state
		}

		default: {
			return state
		}
	}
}

const initialAppState: AppState = {
	user: undefined,
}
