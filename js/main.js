var app = new Vue({
	el:"#app",
	data:{
		productsList:[
		],
		input:{
			name:"",
			quantity:,
			cpu:
		}
	},
	methods:
	{
		addProduct:function () {
			var product = new Product(this.input);
			this.productsList.push(product);
			this.input = input:{ name:"" , quantity:"",cpu:""};//clear input after adding new product
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