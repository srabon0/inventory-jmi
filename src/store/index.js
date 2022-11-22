import { createStore } from "vuex";

const store= createStore({
    state:{
        name:"srabon the great"
    },
    mutations:{
        SET_NAME(state, value){
            state.name = value
        }
    },
    actions:{
        saveName({commit},data){
            commit("SET_NAME",data)
        }
    }
})
export default store