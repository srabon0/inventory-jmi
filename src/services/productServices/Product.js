import axios from 'axios';
// const GET_ALL_PRODUCTS = async()=>{
//     const url = "http://localhost:7000/api/v1/product"
//     const products = await axios.get(url)
//     return products
// }

const services = {
    GET_ALL_PRODUCTS : async ()=>{
        const url = "http://localhost:7000/api/v1/product"
        const products = await axios.get(url)
        return products
    },

}

export default services