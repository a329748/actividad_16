const app = Vue.createApp({
	data() {
		return {
			products: [
				{name: "Beer", amount: 100},
				{name: "Wine", amount: 150},
				{name: "Whiskey", amount: 200}
			],
			product: ""
		}
	},

	methods: {
		addProduct() {
			this.products.push({name: this.product, amount: 50})
			this.product = ""
		}
	},

	computed: {
		total() {
			return this.products.reduce((counter, item) => counter + item.amount, 0)
		}
	}
})

const vm = app.mount('#app')