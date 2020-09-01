//Buatlah data array yang berisi minimal 5 pekerjaan dibidang IT (Ex. Front end developer). 
//Tampilkan panjang data Array
//Tampilkan seluruh item pada array
//Gunakan Console.log
//Tampilkan data tersebut pada Halaman HTML menggunakan list tag




let itJob = [
    'FrontEnd', 
    'BackEnd', 
    'Data Analyst',
    'Data Scientist', 
    'Software Engineer'
];

document.getElementById("jawab1").innerHTML = "Panjang Array ada " + itJob.length;

document.getElementById("list").innerHTML = itJob;
console.log(itJob.length);
console.log(itJob);


//Buatlah sebuah data array yang berisi nama pada tim teman-teman.
//Bagi tim menjadi 2 tim dan terdiri dari 1 orang leader
//Console.log data array tersebut dengan memisahkan setiap data menggunakan  koma (,)
//Tampilkan list data tersebut ke halaman HTML
//hidden:
//Cek built-in method Array

let barca = [
    'Messiun',
    'Piqul',
    'Viral',
    'Suetrez'
]
//Array@splice untuk memotong semua elemen setelah indeks yang ditentukan pada akhir array dan mengembalikannya
let kawal = barca.splice(2);

document.getElementById("jawab2").innerHTML = barca;

document.getElementById("list2").innerHTML = kawal;


console.log(kawal);
console.log(barca);



//Diberikan 1 data array [3, 5, 7, 9, 11]
//Buat sebuah program untuk membuat Array baru dari hasil perkalian array sebelumnya dengan perkalian 5.
//Tampilkan pada console.log

let numb = [3, 5, 7, 9, 11];

//array@.map untuk looping dan menghasilkan array baru
let numb2 = numb.map((item) => {

  return item * 5;
});

document.getElementById("jawab3").innerHTML = numb2;

console.log(numb2);


//Tersedia 2 data Array. Tugas kita adalah untuk cek apakah ada nilai yang sama pada kedua Array.
//Array pertama = [‘Math’, ‘English’, ‘Programming’]
//Array kedua = [‘Geography’, ‘Spanish’, ‘Programming’]
//Program akan mengembalikan nilai TRUE or FALSE


let data1 = ["Math", "English", "Programming"];
let data2 = ["Geography", "Spanish", "Programming"];

//includes berfungsi untuk cek apakah ada data yang sama pada array 1 dan 2 dengan operator boolean


 
document.getElementById("jawab4").innerHTML = data1.includes(data2[2]);
    
console.log(data1.includes(data2[2]));


