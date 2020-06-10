import store from "../store";

export default {
    getToken() {
        return store.state;
    },
    getUserInfo() {
        return store.state.userInfo;
    },
    getWindow() {
        return window;
    },
    logout() {
        store.dispatch('logout');
    }
};
