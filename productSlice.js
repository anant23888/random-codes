import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[],
}
const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        fetchProduct
    }
});
export const {}=productSlice.actions;
export default productSlice.reducer;

export function getProducts(){
return async function getProductsThunk(dispatch,getState){
    fetch('https://fakestoreapi.com/products').then(data=> data.json()).then(result=>getProducts(result));
}
}
