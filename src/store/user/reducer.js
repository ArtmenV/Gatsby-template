
import {
	GET_ALL_USER_START,
	GET_ALL_USER_SUCCESS,
	GET_ALL_USER_FAIL
} from './action'

const storeState = {
	isLoading: false,
	error: {},
	data: []
}

export const users = (state = storeState, { payload, type }) => {
	switch (type) {
		case GET_ALL_USER_START:
			return {
				...state,
				isLoading: true
			}
		case GET_ALL_USER_SUCCESS:
			return {
				...state,
				data: payload,
				isLoading: false
			}
		case GET_ALL_USER_FAIL:
			return {
				...state,
				error: payload,
				isLoading: false
			}
		default:
			return state;
	}
}
