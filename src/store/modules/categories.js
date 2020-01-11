import axios from 'axios'

const state = {
    categories: null,
    fiveCategories: null,
};
const getters = {
    allCategories: state => state.categories,
    someCategories: state => state.fiveCategories
};
const actions = {
    async fetchCategories({
        commit
    }) {
        const response = await axios.get("https://internshopapi.000webhostapp.com/api/categories");
        commit('setCategories', response.data.data);
    },
    async trimCategories({
        commit
    }) {
        const response = await axios.get("https://internshopapi.000webhostapp.com/api/categories");
        commit('randomCategories', (response.data.data).sort(() => .5 - Math.random()).slice(0, 5));
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