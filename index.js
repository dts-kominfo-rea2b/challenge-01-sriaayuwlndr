// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

function education(idSekolah, namaSekolah, namacity, tahunGraduate) {
    this.id = idSekolah,
    this.name = namaSekolah,
    this.city = namacity,
    this.graduate = tahunGraduate
}

let educationMonicaSD = new education('1','SD 01', 'Jakarta', '2016');
let educationMonicaSMP = new education('2','SMP 01', 'Jakarta', '2019');
let educationMonicaSMA = new education('3','SMA 03', 'Tangerang');
let educationWendySD = new education('1','SD 02', 'Jakarta', '2010');
let educationWendySMP = new education('2','SMP 03', 'Bogor', '2013');
let educationWendySMA = new education('3','SMA 01', 'Surabaya', '2016');
let educationWendyUniversitas = new education('4','Universitas Maju', 'Tangerang');

let educationMonica = [educationMonicaSD, educationMonicaSMP, educationMonicaSMA];
let educationWendy = [educationWendySD, educationWendySMP, educationWendySMA, educationWendyUniversitas];

let favResMonica = new Set(["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]);
let favResWendy = new Set(["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]);

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: "17",
    email: "monica@dingdong.com",
    color: ["Yellow","Pink","White","Purple"],
    isHavePet: "Yes",
    favRes: favResMonica,
    education: () => console.log(educationMonica),
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: "23",
    email: "wendy@dingdong.com",
    color: ["Blue","Black","Grey"],
    isHavePet: "Yes",
    favRes: favResWendy,
    education: () => console.log(educationWendy),
};


// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];


// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};