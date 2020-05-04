
import { INCREMENT, DECREMENT } from './action'

const storeState = {
	count: 0
}

export const counter = (state = storeState, { payload, type }) => {
	switch (type) {
		case INCREMENT:
			return {
				count: state.count + 1
			}
			case DECREMENT:
				return {
					count: state.count - 1
				}
		default:
			return state;
	}
}
