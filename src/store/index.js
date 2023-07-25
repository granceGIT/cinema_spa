import {reactive} from "vue";

const state = reactive({
	user: {},
	alert: {},
});

const mutations = {
	setUser(user) {
		state.user = user;
	},
	showAlert(text = "Произошла ошибка", type = "error", duration = 5000) {
		state.alert = {text, type, duration};
	},
	hideAlert() {
		state.alert = {};
	},
};

const getters = {
	isAuth() {
		return Object.keys(state.user).length;
	},
	isAlert() {
		return Object.keys(state.alert).length;
	},
};

export default {
	state,
	mutations,
	getters,
};