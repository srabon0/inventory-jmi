import axios from 'axios';
// const GET_ALL_PRODUCTS = async()=>{
//     const url = "http://localhost:7000/api/v1/product"
//     const products = await axios.get(url)
//     return products
// }

const services = {
    GET_ALL_PRODUCTS : async (currentPage)=>{
        console.log("service",currentPage);
        const url = `http://localhost:7000/api/v1/product?page=${currentPage}`
        const products = await axios.get(url)
        return products
    },
    GET_SINGLE_PRODUCT_DETAILS : async(id)=>{
        const url = `http://localhost:7000/api/v1/product/${id}`
        const product = await axios.get(url)
        return product 
    },
    PAYMENT_ORDER: async (payment)=>{
        const url = `http://localhost:7000/api/payment/checkout`
        const response = await axios.post(url,{payment});
        return response
    } 

}

export default services