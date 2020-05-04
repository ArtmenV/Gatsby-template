export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => dispatch => {
	dispatch({
		type: INCREMENT
	})
}

export const decrement = () => dispatch => {
	dispatch({
		type: DECREMENT
	})
}
