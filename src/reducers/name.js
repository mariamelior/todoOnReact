
const initialState = {
  year: 2016,
  photos: [],
  fetching: false,
  error: ''
}

export default function name(state = initialState, action) {

  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, year: action.payload, fetching: true, error: '' }

    default:
      return state;
  }

}
