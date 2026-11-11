export function KartuCatatan(catatan) {
  const div = document.createElement('div');
  div.className = 'kartu';

  const smallMk = document.createElement('small');
  smallMk.textContent = catatan.mk;

  const h3 = document.createElement('h3');
  h3.textContent = catatan.judul; // Wajib pakai textContent biar aman dari tag HTML

  const smallTgl = document.createElement('small');
  smallTgl.textContent = new Date(catatan.dibuat).toLocaleDateString('id-ID');

  const divAksi = document.createElement('div');
  divAksi.className = 'aksi';

  const btnSemat = document.createElement('button');
  btnSemat.dataset.aksi = 'semat';
  btnSemat.dataset.id = catatan.id;
  btnSemat.textContent = catatan.disematkan ? 'Lepas' : 'Sematkan';

  const btnHapus = document.createElement('button');
  btnHapus.dataset.aksi = 'hapus';
  btnHapus.dataset.id = catatan.id;
  btnHapus.textContent = 'Hapus';

  divAksi.append(btnSemat, btnHapus);
  div.append(smallMk, h3, smallTgl, divAksi);

  return div;
}

export function PesanKosong(pesan) {
  const p = document.createElement('p');
  p.className = 'kosong';
  p.textContent = pesan;
  return p;
}