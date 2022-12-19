<template>
  <section
    class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
  >
    <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">
      Payment Form
    </h2>

    <form>
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label class="text-gray-700 dark:text-gray-200" for="username"
            >Username</label
          >
          <input
            id="username"
            type="text"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-gray-700 dark:text-gray-200" for="emailAddress"
            >Email Address</label
          >
          <input
            id="emailAddress"
            type="email"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label class="text-gray-700 dark:text-gray-200" for="password"
            >Password</label
          >
          <input
            id="password"
            type="password"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label
            class="text-gray-700 dark:text-gray-200"
            for="passwordConfirmation"
            >Password Confirmation</label
          >
          <input
            id="passwordConfirmation"
            type="password"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
      </div>

      <div class="flex justify-end mt-6">
        <button @click="submitForm"
          class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        >
          Save
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import services from '../services/productServices/Product' 
export default {
  name: "ShoppingCartPayment",

  data() {
    return {};
  },

  mounted() {},

  methods:{
    async submitForm($event){
      $event.preventDefault()
        const paymentObj = {
            total_amount : 2000,
            customerInfo:{
                name: "Md Amam Uddin Srabon",
                email: "srabonemam@mononsoft.com",
                add1: "House : 54,Road: 05, Block: C, Banasree, Rampura , Dhaka",
                add2: "Not Applicable",
                city: "Dhaka",
                state: "Dhaka",
                postcode: "1219",
                country: "Bangaldesh",
                phone: "+8801681888025",
                fax: "",
            },
            shippingMethod:{
                method: "YES", //Shipping method of the order. Example: YES or NO or Courier
                num_item: 1,
                name: "Md Amam uddin srabon",
                add1: "House : 54,Road: 05, Block: C, Banasree, Rampura , Dhaka",
                add2: "Not Applicable",
                city: "Dhaka",
                state: "Dhaka",
                postcode:"1219",
                country: "Bangladesh"
            },
            cartItems:[
  {
    _id: "637f368d70f783c8788399f3",
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
    ]
  },
  {
    _id: "637f368d70f783c8788399f4",
    title: 'iPhone X',
    description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
    price: 899,
    discountPercentage: 17.94,
    rating: 4.44,
    stock: 34,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/2/1.jpg',
      'https://i.dummyjson.com/data/products/2/2.jpg',
      'https://i.dummyjson.com/data/products/2/3.jpg',
      'https://i.dummyjson.com/data/products/2/thumbnail.jpg'
    ]
  },
  {
    _id: "637f368d70f783c8788399f5",
    title: 'Samsung Universe 9',
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: 'Samsung',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
    images: [ 'https://i.dummyjson.com/data/products/3/1.jpg' ]
  },
  {
    _id: "637f368d70f783c8788399f6",
    title: 'OPPOF19',
    description: 'OPPO F19 is officially announced on April 2021.',
    price: 280,
    discountPercentage: 17.91,
    rating: 4.3,
    stock: 123,
    brand: 'OPPO',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/4/1.jpg',
      'https://i.dummyjson.com/data/products/4/2.jpg',
      'https://i.dummyjson.com/data/products/4/3.jpg',
      'https://i.dummyjson.com/data/products/4/4.jpg',
      'https://i.dummyjson.com/data/products/4/thumbnail.jpg'
    ]
  },
  {
    _id: "637f368d70f783c8788399f7",
    title: 'Huawei P30',
    description: 'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
    price: 499,
    discountPercentage: 10.58,
    rating: 4.09,
    stock: 32,
    brand: 'Huawei',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/5/1.jpg',
      'https://i.dummyjson.com/data/products/5/2.jpg',
      'https://i.dummyjson.com/data/products/5/3.jpg'
    ]
  }
]
        }
        const main = JSON.stringify(paymentObj)
        await services.PAYMENT_ORDER(main)
        .then( res => {
                    console.log(res)
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                    }
                })
    },
  },
}
</script>

<style lang="scss" scoped></style>
