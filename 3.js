function seleksiNilai (nilaiAwal,nilaiAkhir,dataArray) { //fungsi seleksi nilai, yang memiliki 3 parameter nilaiAwal, nilaiAkhir dan dataArray
    if (nilaiAwal >= nilaiAkhir) { //ketentuan nilai awal harus lebih kecil dari nilai akhir, jika tidak akan error
        console.log('Nilai akhir harus lebih besar dari nilai awal') 
        return
    } else if (dataArray.length <=5) { //ketentuan data aray harus lebih dari 5 jika tidak maka akan error
        console.log('Jumlah angka dalam dataArray harus lebih dari 5') 
        return
    }
    let filterArray = dataArray
    .filter(x =>{ //filter disini digunakan untuk memanggil kembali array dengan algoritma yang bernilai true
        return nilaiAwal < x && nilaiAkhir > x // sama dengan nilaiAwal <= x <= nilaiAkhir
    })
    .sort( //sort method ini untuk mengurutkan nilai yang sudah difilter
        (x,y)=> x-y  //algoritma ini digunakan untuk mengurutkan dari nilai awal ke besar/ digit paling kecil ke digit paling besar
        ) 

    if (filterArray.length == 0) { //pengkondisian ini digunakan ketika tidak ada data dalam array dalam nilaiAwal-nilaiAkhir maka array.length==0 maka akan muncul error
        console.log('Nilai tidak ditemukan')
        return
    } 
    console.log(filterArray)

}
seleksiNilai(5,20, [2,25,4,14,17,30,8])
seleksiNilai(15,3,[2,25,4,14,17,30,8])
seleksiNilai(4,17,[2,25,4])
seleksiNilai(5,17,[2,25,4,1,30,18])
// seleksiNilai(20,20,[2,25,20])