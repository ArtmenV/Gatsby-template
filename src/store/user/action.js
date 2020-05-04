import axios from 'axios'

export const GET_ALL_USER_START = 'GET_ALL_USER_START'
export const GET_ALL_USER_FAIL = 'GET_ALL_USER_FAIL'
export const GET_ALL_USER_SUCCESS = 'GET_ALL_USER_SUCCESS'

export const getUsers = () => async dispatch => {
	dispatch({
		type: GET_ALL_USER_START
	})

	try {
		const { data } = await axios('https://jsonplaceholder.typicode.com/users')
		dispatch({
			type: GET_ALL_USER_SUCCESS,
			payload: data
		})
	} catch (e) {
		dispatch({
			type: GET_ALL_USER_FAIL,
			payload: e
		})
	}
}
