const app = Vue.createApp({
	data() {
		return {
			materia: "PDP",
			semestre: "6",
			carrera: "ICC",
			products: [
				{name: "Cerveza", amount: 100},
				{name: "Vino", amount: 150},
				{name: "Cognac", amount: 200}
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
			/*let total = 0
			for(product of this.products) {
				total = total + product.amount
			}
			return total*/
			return this.products.reduce((counter, item) => counter + item.amount, 0)
		}
	}
})

const vm = app.mount('#app')