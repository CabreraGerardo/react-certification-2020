export default function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case 'CHANGE_SEARCH': {
      return {
        ...state,
        search: action.payload,
      };
    }
    default:
      throw new Error('Undefined Action');
  }
}
