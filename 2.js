const nama = [ //memiliki nilai array berupa string
    'Abigail', 'Alexandra', 'Alison', 
    'Amanda', 'Angela', 'Bella', 
    'Carol', 'Caroline', 'Carolyn', 
    'Deirdre', 'Diana', 'Elizabeth', 
    'Ella', 'Faith', 'Olivia', 'Penelope']

function searchName(nickName,limitArray,printResult) { //fungsi untuk membuat searchname
    const result = nama.filter(x =>{return x //filter() disini untuk memanggil ulang data array yang sesuai dengan algoritma
        .toLowerCase() //tolowercase() disini untuk mengubah string dalam var nama menjadi lower case semua
        .includes(nickName)}) //includes() disini untuk menunjukan nilai true yang akan dipanggil kembali
    .slice(0,limitArray) //slice disini memiliki 2 parameter, yaitu 0, untuk index awal dan limitArray untuk index akhir
    printResult(result) //untuk passing ke callback
}
function callback (result) { //fungsi callback untuk print/console.log
    console.log(result);
}

searchName("an", 3, callback)
// searchName('al',3,callback)
// searchName('d',1,callback)

