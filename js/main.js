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
		calculateCost:function (elm) {
			return elm.cpu * elm.quantity;
		}
	},
	computed:{
		totalCost: function () {
			var list = this.productsList;
			var total = 0
			for(var i =0;i<list.length;i++)
			{
				total += list[i].cpu * list[i].quantity;
			}
			return total;
		}

	}
});