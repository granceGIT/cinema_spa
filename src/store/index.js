import {reactive} from "vue";

const state = reactive({
    user:{}
})

const mutations = {
    setUser(user){
        state.user = user
    }
}

const getters = {
    isAuth(){
        return Object.keys(state.user).length
    }
}

export default {
    state,
    mutations,
    getters
}