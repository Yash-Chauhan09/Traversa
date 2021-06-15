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
    case "Delete_TRIP":
      const newArr= state.list.filter(item=> item.id !== action.id)
      return{
        list:newArr
      }
  }
};
export default TripReducer;
