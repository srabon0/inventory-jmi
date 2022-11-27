import { createStore } from "vuex";

const store= createStore({
    state:{
        name:"srabon the great",
        products:[],
    },
    mutations:{
        SET_NAME(state, value){
            state.name = value
        },
        SET_PRODUCTS(state,productsData){
            state.products= productsData
        }
    },
    actions:{
        saveName({commit},data){
            commit("SET_NAME",data)
        },
        insertProduct({commit},productsData){
            commit("SET_PRODUCTS",productsData)
        }
    }
})
export default store