// Создать функцию-конструктор Product, которая принимает на вход аргументы category, type, price 
// и присваивать их полям объекта c соответствующим названием ключа.
// Каждому объекту созданному с помощью функции-конструктор Product доступна функция render, 
// которая возвращает строку
// Все заданные продукты создаем с помощью функции-конструктор Product и для всех вызываем метод render().

let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

let list = [];

function Product(category, type, price) {
	this.category = category;
	this.type = type;
	this.price = price;
};

Product.prototype.render = function () {

	if(this.category === "kitchen") {
		 return `
			<tr>
				<td><img src="images/kitchen/${this.type}.svg"></td>
				<td>${this.type}</td>
				<td>${this.price} USD</td>
			</tr>
		`;
	} else if (this.category === "devices") {
		return `
			<tr>
				<td><img src="images/devices/${this.type}.svg"></td>
				<td>${this.type}</td>
				<td>${this.price} USD</td>
			</tr>
		`;
	} else {
		return `
			<tr>
				<td><img src="images/cosmetics/${this.type}.svg"></td> 
				<td>${this.type}</td>
				<td>${this.price} USD</td>
			</tr>
		`;
	};
};

kitchenProducts.map(
	function(item) {
		console.log(item.category, item.type, item.price);
		return new Product("kitchen", item.type, item.price);
	}
)
.map(
	function(item) {
		console.log(item);
		return item;
	}
)
.forEach(
	function(item) {
		list.push(`${item.render()}`);
	}
)

devicesProducts.map(
	function(item) {
		return new Product("devices", item.type, item.price.join("-"));
	}
)
.map(
	function(item) {
		return item;
	}
)
.forEach(
	function(item) {
		list.push(`${item.render()}`);
	}
)

cosmeticsProducts.map(
	function(item) {
		return new Product("cosmetics", item.type, item.price);
	}
)
.map(
	function(item) {
		return item;
	}
)
.forEach(
	function(item) {
		list.push(`${item.render()}`);
	}
)

document.write(`
	<table>
		<thead>
			<tr>
				<th>Image</th>
				<th>Name</th>
				<th>Price</th>
			</tr>
		</thead>
		<tbody>
			${list.join("")}
		</tbody>
	</table>	
`);