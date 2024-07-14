const namaInput = document.getElementById('namaInput');
const cekButton = document.getElementById('cekButton');
const khodamDiv = document.getElementById('khodam');
const maknaKhodamDiv = document.getElementById('maknaKhodam');
const ulangButton = document.getElementById('ulangButton');
const loadingScreen = document.getElementById('loadingScreen');
const hasilContainer = document.getElementById('hasilContainer');
loadingScreen.style.display = 'none';

const daftarKhodam = [
  { name: "Lord Pedas", meaning: "Si Paling Pedas, Bikin Hati Meletup-letup." },
  { name: "Fashionista Kain Kafan", meaning: "Selalu Tampil Beda dengan Kain Kafan." },
  { name: "Ibu Peri Seram", meaning: "Si Penyayang Anak, Tapi Agak Serem." },
  { name: "Nyamuk XXL", meaning: "Si Nyamuk Raksasa, Ahli Sedot-menyedot." },
  { name: "Si Mungil Kocak", meaning: "Si Mungil Sakti, Jago Bikin Ngakak." },
  { name: "Petak Umpet Pro", meaning: "Si Penghubung Dunia, Jago Main Petak Umpet." },
  { name: "Si Manis Jembatan Ancol", meaning: "Si Hantu Gaul, Nongkrong di Jembatan Kekinian." },
  { name: "Ratu Gosip", meaning: "Tau Semua Rahasia, Selebgram Paling Update." },
  { name: "Ninja Kolong", meaning: "Si Penghuni Kolong, Ahli Parkour." },
  { name: "Spider-Man KW", meaning: "Si Penenun Jaring, Ahli Bikin Pattern." },
  { name: "Tukang Nyebur", meaning: "Hobi Berenang di Parit, Bikin Heboh Warga." },
  { name: "Selfie King", meaning: "Si Iblis Narsis, Suka Selfie di Cermin." },
  { name: "Pelari Sprint", meaning: "Jago Ngehindar dari Sandal, Bikin Kesel." },
  { name: "Kucing Raksasa", meaning: "Si Kucing Raksasa, Suka Main Petak Umpet." },
  { name: "Pembalap Katak", meaning: "Si Pembalap Lincah, Jago Ngebut di Jalanan." },
  { name: "Seleb Dadakan", meaning: "Si Wajah Unik, Selebgram Dadakan." },
  { name: "Tukang Prank", meaning: "Suka Bikin Lemari Jatuh, Bikin Jantungan." },
  { name: "Chef Gagal", meaning: "Bikin Basreng Gak Enak, Bikin Kecewa." },
  { name: "Si Manis Jembatan Ancol", meaning: " Selebgram hits yang selalu foto-foto cantik di Jembatan Ancol, sampai pernah dikira hantu beneran."},
  { name: "Si Manis Dari Laut Jawa", meaning: "Penjual es kelapa muda di pantai Ancol, senyumnya manis banget bikin pelanggan betah." },
  { name: "Lemari Rubuh", meaning: "Desainer interior gagal, karyanya selalu bikin lemari roboh sendiri." },
  { name: "Laba Laba Sunda", meaning: "Penari tradisional Sunda, gerakannya luwes banget kayak laba-laba." }
];


cekButton.addEventListener('click', () => {
  const nama = namaInput.value.trim();
  if (nama) {
    cekButton.style.display = 'none';
    namaInput.style.display = 'none';
    loadingScreen.style.display = 'flex';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      hasilContainer.style.display = 'block';
      document.getElementById('nama').textContent = nama;

      const khodamAcak = daftarKhodam[Math.floor(Math.random() * daftarKhodam.length)];
      khodamDiv.textContent = khodamAcak.name;
      maknaKhodamDiv.textContent = khodamAcak.meaning;
    }, 3000); 
  } else {
    alert("Silakan masukkan nama Anda.");
  }
});

ulangButton.addEventListener('click', () => {
  namaInput.value = '';
  hasilContainer.style.display = 'none'; 
  loadingScreen.style.display = 'none';
  cekButton.style.display = 'block';
  namaInput.style.display = 'block';
});
