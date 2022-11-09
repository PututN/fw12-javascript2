function seleksiNilai (nilaiAwal,nilaiAkhir,dataArray) {
    if (nilaiAwal >= nilaiAkhir) {
        console.log('Nilai akhir harus lebih besar dari nilai awal') //nilai awal
        return
    } else if (dataArray.length <=5) {
        console.log('Jumlah angka dalam dataArray harus lebih dari 5') //data aray
        return
    }
    let filterArray = dataArray.filter(x => nilaiAwal < x && nilaiAkhir > x).sort((x,y)=> x-y ) 

    if (filterArray.length == 0) { //length dicek di browser
        console.log('Nilai tidak ditemukan') //array tidak ada dalam rentang
        return
    } 
    console.log(filterArray)

}
seleksiNilai(5,20, [2,25,4,14,17,30,8])
seleksiNilai(15,3,[2,25,4,14,17,30,8])
seleksiNilai(4,17,[2,25,4])
seleksiNilai(5,17,[2,25,4,1,30,18])
// seleksiNilai(20,20,[2,25,20])