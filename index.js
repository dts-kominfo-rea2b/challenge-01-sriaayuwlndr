// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

function educationUsers(idSekolah, namaSekolah, namacity, tahunGraduate) {
    this.id = idSekolah,
    this.name = namaSekolah,
    this.city = namacity,
    this.graduate = tahunGraduate
}

let educationMonicaSD = new educationUsers('1','SD 01', 'Jakarta', '2016');
let educationMonicaSMP = new educationUsers('2','SMP 01', 'Jakarta', '2019');
let educationMonicaSMA = new educationUsers('3','SMA 03', 'Tangerang');
let educationWendySD = new educationUsers('1','SD 02', 'Jakarta', '2010');
let educationWendySMP = new educationUsers('2','SMP 03', 'Bogor', '2013');
let educationWendySMA = new educationUsers('3','SMA 01', 'Surabaya', '2016');
let educationWendyUniversitas = new educationUsers('4','Universitas Maju', 'Tangerang');


let educationMonica = [educationMonicaSD, educationMonicaSMP, educationMonicaSMA];
let educationWendy = [educationWendySD, educationWendySMP, educationWendySMA, educationWendyUniversitas];

let favResMonica = new Set(["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]);
let favResWendy = new Set(["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]);

let colorMonica = new Set(["Yellow","Pink","White","Purple"]);
let colorWendy = new Set(["Blue","Black","Grey"]);

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: "17",
    email: "monica@dingdong.com",
    favoriteColor: colorMonica,
    isHavePet: "Yes",
    education: educationMonica,
    favoriteRestaurant: favResMonica,
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: "23",
    email: "wendy@dingdong.com",
    favoriteColor: colorWendy,
    isHavePet: "No",
    education: educationWendy,
    favoriteRestaurant: favResWendy,
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