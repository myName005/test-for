var app = new Vue({
	el:"#app",
	data:{
		productsList:[
		],
		input:{
			name:"",
			quantity:0,
			cpu:0
		}
	},
	methods:
	{
		addProduct:function () {
			var product = new Product(this.input);
			this.productsList.push(product);
		}
	},
	computed:{
		totalCost: function () {
			var list = this.productsList;
			var total = 0
			for(var i =0;i<list.length;i++)
			{
				total += list[i].cost();
			}
			return total;
		}

	}
});