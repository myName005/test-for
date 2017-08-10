var app = new Vue({
	el:"#app",
	data:{
		productsList:[],
		input:{
			name:"",
			quantity:"",
			cpu:""
		}
	},
	methods:
	{
		addProduct:function () {
			var product = new Product(this.input);
			this.productsList.push(product);
			this.input = { name:"" , quantity:"",cpu:""};//clear input after adding new product
		},
		clearProducts:function () {
			this.productsList =[];
		},
		deleteProduct:function (index) {
			this.productsList.splice(index,1);
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
		},
		productsListEmpty:function () {
			return this.productsList.length == 0;
		}

	}
});