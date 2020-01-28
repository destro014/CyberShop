import axios from 'axios'

const state = {
    // endpoint: "https://internshopapi.000webhostapp.com/api/product"
    endpoint: "../../products.json",
    products: null,
    recentProducts: null,
    electronicsProducts: null,
    electronicsAccessories: null,
};
const getters = {
    allProducts: state => state.products,
    recentProducts: state => state.recentProducts,
    electronicsProducts: state => state.electronicsProducts,
    electronicsAccessories: state => state.electronicsAccessories
};
const actions = {
    async fetchProducts({
        commit
    }) {
        const response = await axios.get(state.endpoint);
        commit('setProducts', response.data);
    },
    async fetchRecentProducts({
        commit
    }) {
        const response = await axios.get(state.endpoint);
        commit('setRecentProducts', response.data.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate)).slice(0, 4));
    },
    async fetchElectronicsProducts({
        commit
    }) {
        const response = await axios.get(state.endpoint);
        commit('setElectronicsProducts', response.data.filter(obj => {
            if (obj.category.id == 1) {
                return obj;
            }
        }).sort(() => 0.5 - Math.random()).slice(0, 4))
    },
    async fetchElectronicsAccessories({
        commit
    }) {
        const response = await axios.get(state.endpoint);
        commit('setElectronicsAccessories', response.data.filter(obj => {
            if (obj.category.id == 2) {
                return obj;
            }
        }).sort(() => 0.5 - Math.random()).slice(0, 4))
    },
};
const mutations = {
    setProducts: (state, products) => (state.products = products),
    setRecentProducts: (state, products) => (state.recentProducts = products.sort(() => 0.5 - Math.random())),
    setElectronicsProducts: (state, products) => (state.electronicsProducts = products),
    setElectronicsAccessories: (state, products) => (state.electronicsAccessories = products)

};

export default {
    state,
    getters,
    actions,
    mutations,
}