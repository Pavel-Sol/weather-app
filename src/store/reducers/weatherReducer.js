export const GET_WEATHER = 'GET_WEATHER';

const defaultState = {
  data: null,
};

export const weatherReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
