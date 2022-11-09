//1. Sort
//Sort method digunakan untuk mengurutkan array dan mengembalikan referensi ke array yang sama.

const nomor = [7,4,6,8,1];
const sorted = nomor.sort();

console.log(sorted);
//output [1,4,6,7,8]


//2. Reverse
//Metode reverse digunakan untuk membalikkan element array pertama menjadi array terakhir dan sebaliknya.

const word = ['a', 'c', 'b', 'z', 'x'];
const reversed = word.reverse();

console.log(reversed);
//output ['x', 'z', 'b', 'c', 'a']


//3. Push
//Push Method digunakan untuk menambahkan satu atau lebih element ke akhir array dan mengembalikan panjang array yang baru.

const fruit = ["banana", "apple", "watermelon"];
const pushed = fruit.push("alvocado");

console.log(pushed);
//output ["banana", "apple", "watermelon", "alvocado]


//4. Map
//Map method digunakan membuat array baru yang diisi dengan hasil pemanggilan fungsi yang dibuat pada setiap element dalam array yang baru

const arr = [1,2,3,4];
const map1 = arr.map(x => x+1);

console.log(map1);
//output [2,3,4,5]


//5. Split
//Split method digunakan untuk mengambil sebuah pola dan membagi sebuah string ke dalam substring. Dan menempatkan ke dalam sebuah array dan mengembalikan array tersebut

let greeting = "My name is Putut";
const splited = greeting.split(" ");

console.log(splited);
//output ['My', 'name', 'is', 'Putut']


//6. Join
//Join method digunakan untuk membuat dan mengembalikan string baru dengan menggabungkan semua element ke dalam array.

const name = ['Joni', 'Abdul', 'Ima'];
const joined = name.join();

console.log(joined);
//output Joni,Abdul,Ima


//7. toLowerCase
//toLowerCase method digunakan untuk mengembalikan nilai string dikonversi menjadi huruf kecil

const sentence = 'Hi, my Name is Putut';
const lowerCase = sentence.toLowerCase();

console.log(lowerCase);
//output hi, my name is putut


//8. Includes
//Includes method digunakan untuk melakukan pencarian huruf besar/kecil dalam sebuah string, dan mengembalikan nilai true/false.

const sentences = 'Hi, my Name is Putut';
console.log(sentences.includes('Putut'));
//output true


//9. Slice
//Slice method(array) digunakan untuk menyalin dari sebagian array ke objek array baru yang dipilih. Dimana pemilihan array diwakili oleh indeks item dalam array tsb. Array awal tidak akan berubah

const num = [1,3,5,7,8,9];
const sliced = num.slice(3);
console.log(sliced);
//output [ 7, 8, 9 ]


//10. Filter
//Filter method digunakan untuk menyalin dari sebagian array tertentu, difilter ke dalam fungsi tertentu dan akan menuliskan ulang array yang baru sesuai dengan fungsi tersebut.

const animal = ['elephant', 'tiger', 'eagle', 'crocodile', 'fish'];
const filtered = animal.filter(word => word.length <= 5);

console.log(filtered);
//output [ 'tiger', 'eagle', 'fish' ]