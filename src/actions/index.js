export const addTrip = (data)=>{
    return{
        type:"Add_TRIP",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteTrip=(id)=>{
    return{
        type: "Delete_TRIP",
         id
    }
}