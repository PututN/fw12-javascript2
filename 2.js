const nama = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope']

function searchName(nickName,limitArray,printResult) {
    const result = nama.filter(x => x.toLowerCase().includes(nickName)).slice(0,limitArray)
    printResult(result)
}
function callback (result) {
    console.log(result);
}

searchName("an", 3, callback)
// searchName('al',3,callback)
// searchName('d',1,callback)

