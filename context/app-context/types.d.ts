// types
import { User } from '../../types'

export type AppState = {
	user?: User
	testUrl?: string
}

export type AppAction =
	| {
			type: 'SET_USER_CREDENTIALS'
			payload: { user: User }
	  }
	| { type: 'REMOVE_USER_CREDENTIALS'; payload: { logout: boolean } }
	| {
			type: 'ADD_TEST_URL'
			payload: { testUrl: string }
	  }
	| { type: 'REMOVE_TEST_URL'; payload: { removeTestUrl: boolean } }

export type AppReducer = (state: AppState, action: AppAction) => FiltersFromURL

export type AppDispatch = (action: AppAction) => void
