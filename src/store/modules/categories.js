import axios from 'axios'

const state = {
    categories: null,
    fiveCategories: null,
    // endpoint: "https://internshopapi.000webhostapp.com/api/categories"
    endpoint: "../../categories.json"
};
const getters = {
    allCategories: state => state.categories,
    someCategories: state => state.fiveCategories
};
const actions = {
    async fetchCategories({
        commit
    }) {
        const response = await axios.get(state.endpoint);
        commit('setCategories', response.data);
    },
    async trimCategories({
        commit
    }) {
        const response = await axios.get(state.endpoint);
        commit('randomCategories', (response.data).sort(() => .5 - Math.random()).slice(0, 5));
    }
};
const mutations = {
    setCategories: (state, categories) => (state.categories = categories),
    randomCategories: (state, fiveCategories) => (state.fiveCategories = fiveCategories)
};

export default {
    state,
    getters,
    actions,
    mutations,
}