Product = function (obj) {
	this.name = obj.name;
	this.cpu = obj.cpu;
	this.quantity = obj.quantity;
}

Product.prototype.cost = function() {
	return this.cpu * this.quantity;
};