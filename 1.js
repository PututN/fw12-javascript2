//1. Sort
//Sort method digunakan untuk mengurutkan array dan tidak mengembalikan nilai, akan mengganti inplace tanpa perlu membuat variabel
//sort method ini digunakan untuk type data array
//contohnya:
const nomor = [7,4,6,8,1];
console.log(nomor.sort());
//output [1,4,6,7,8]


//2. Reverse
//Metode reverse digunakan untuk membalikkan element array pertama menjadi array terakhir dan sebaliknya. tidak mengembalikan nilai, akan mengganti inplace tanpa perlu membuat variabel 
//reverse method ini digunakan untuk type data array
//contohnya:
const word = ['a', 'c', 'b', 'z', 'x'];
console.log(word.reverse());
//output ['x', 'z', 'b', 'c', 'a']
//kalau kita panggil lagi word
console.log(word);
//output ['x', 'z', 'b', 'c', 'a']


//3. Push
//Push Method digunakan untuk menambahkan satu atau lebih element ke akhir array dan mengembalikan panjang array yang baru.
//push method ini digunakan untuk type data array
//contohnya:
const fruit = ["banana", "apple", "watermelon"];
console.log(fruit.push("alvocado"));
//output 4
console.log(fruit);
//output ["banana", "apple", "watermelon", "alvocado"]


//4. Map
//Map method digunakan membuat array baru yang diisi dengan hasil pemanggilan fungsi yang dibuat pada setiap element dalam array yang baru
//map method ini digunakan untuk type data array
//contohnya:
const arr = [1,2,3,4];
const map1 = arr.map(x => x+1);
console.log(map1);
//output [2,3,4,5]


//5. Split
//Split method digunakan untuk mengambil sebuah pola dan membagi sebuah string ke dalam substring. Dan menempatkan ke dalam sebuah array dan mengembalikan array tersebut
//split method ini digunakan untuk type data string
//contohnya:
let greeting = "My name is Putut";
console.log(greeting.split(" "));
//output ['My', 'name', 'is', 'Putut']


//6. Join
//Join method digunakan untuk membuat dan mengembalikan string baru dengan menggabungkan semua element ke dalam array. Join method ini memiliki separator yang mana yang akan digabungkan dengan separator yang akan ditulis
//join method ini digunakan untuk type data array
//contohnya:
const name = ['Joni', 'Abdul', 'Ima'];
console.log(name.join());
//output Joni,Abdul,Ima
console.log(name.join(''));
//output JoniAbdulIma
console.log(name);
//output [ 'Joni', 'Abdul', 'Ima' ]


//7. toLowerCase
//toLowerCase method digunakan untuk mengembalikan nilai string dikonversi menjadi huruf kecil
//toLowerCase method ini digunakan untuk type data string
//contohnya:
const sentence = 'Hi, my Name is Putut';
console.log(sentence.toLowerCase());
//output hi, my name is putut
console.log(sentence);
//Hi, my Name is Putut


//8. Includes
//Includes method digunakan untuk melakukan pencarian huruf besar/kecil, atau kata dalam sebuah string, dan mengembalikan nilai true/false.
//includes method ini digunakan untuk type data string dan array
//contohnya:
const sentences = 'Hi, my Name is Putut';
console.log(sentences.includes('Putut'));
//output true
console.log(sentences);
//output Hi, my Name is Putut


//9. Slice
//Slice method(array) digunakan untuk menyalin dari sebagian array ke objek array baru yang dipilih. Dimana pemilihan array diwakili oleh indeks item dalam array tsb. Array awal tidak akan berubah
//slice method ini digunakan untuk type data string dan array
//contohnya:
const num = [1,3,5,7,8,9];
console.log(num.slice(3));
//output [ 7, 8, 9 ]
console.log(num.slice(0,3)); //disini menggunakan 2 parameter: parameter pertama untuk index awal, parameter kedua untuk index akhir
//output [ 1, 3, 5,]


//10. Filter
//Filter method digunakan untuk menyalin dari sebagian array tertentu, difilter ke dalam fungsi tertentu dan akan menuliskan ulang array yang baru sesuai dengan fungsi tersebut.
//filter method ini digunakan untuk type data array
//contohnya:
const animal = ['elephant', 'tiger', 'eagle', 'crocodile', 'fish'];
const filtered = animal.filter(word =>{return word.length <= 5});
console.log(filtered);
//output [ 'tiger', 'eagle', 'fish' ]
console.log(animal);
//output [ 'elephant', 'tiger', 'eagle', 'crocodile', 'fish' ]