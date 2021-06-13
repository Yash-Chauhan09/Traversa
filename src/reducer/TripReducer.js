const initialData = {
  list: [],
};

const TripReducer = (state = initialData, action) => {
  switch (action.type) {
    case "Add_TRIP":
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id:id,
            data:data,
          },
        ],
      };
    default:
      return state;
  }
};
export default TripReducer;
