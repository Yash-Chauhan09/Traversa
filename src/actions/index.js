export const addTrip = (data)=>{
    return{
        type:"Add_TRIP",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}