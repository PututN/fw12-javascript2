let data = {
	id : 1,
	name : "Leanne Graham",
	username : "Bret",
	email : "Sincere@april.biz",
	address :
	{
		street: "Kulas Light",
		siute: "Apt. 556",
		city: "Gwenborough",
		zipcode: "92998-3874",
		},
	phone: "1-770-736-8031 x56442",
	website: "hildegard.org",
};

let spread = {...data,
	name:"Putut Nardianto Laksono",
	email:"pututnardiantol@gmail.com",
	hobbies:"Badminton"};
console.log(spread)

let {address:{street,city}} = spread;
console.log(street,city);