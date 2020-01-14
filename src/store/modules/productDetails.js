import axios from 'axios'
import router from '@/router'

const state = {
    product: null,
    seller: null,
    id: router.currentRoute.params.id,
    // endpoint: 'http://internshopapi.000webhostapp.com/api/products'
    endpoint: "../../products.json"
};
const getters = {
    product: state => state.product,
    seller: state => state.seller
};
const actions = {
    async fetchProduct({
        commit
    }, id) {
        // const response = await axios.get(`${state.endpoint}/${id}`);
        const response = await axios.get(state.endpoint);
        commit('setProduct', response.data
            .filter(obj => {
                if (obj.product_identifier == id) {
                    return obj;
                }
            })
        );
    },
    async fetchSeller({
        commit
    }, sellerId) {
        const response = await axios.get(`http://internshopapi.000webhostapp.com/api/users/${sellerId}`);
        commit('setSeller', response.data)

    }
};
const mutations = {
    setProduct: (state, product) => (state.product = product[0]),
    setSeller: (state, user) => (state.seller = user)

};

export default {
    state,
    getters,
    actions,
    mutations,
}