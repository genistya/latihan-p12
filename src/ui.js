import { KartuCatatan } from './komponen.js';

export function perbaruiTampilan(daftarSemua, daftarCari) {
  const elSematan = document.getElementById('sematan');
  const elSemua = document.getElementById('semua');
  const elInfo = document.getElementById('info');

  const dataAktif = daftarCari ?? daftarSemua;
  const disematkanList = dataAktif.filter(c => c.disematkan);

  if (disematkanList.length > 0) {
    const elemenKartu = disematkanList.map(c => KartuCatatan(c));
    elSematan.replaceChildren(...elemenKartu);
  } else {
    elSematan.innerHTML = '<p class="kosong">Belum ada catatan yang disematkan.</p>';
  }

  if (dataAktif.length > 0) {
    const elemenKartu = dataAktif.map(c => KartuCatatan(c));
    elSemua.replaceChildren(...elemenKartu);
  } else {
    elSemua.innerHTML = '<p class="kosong">Tidak ada catatan.</p>';
  }

  elInfo.textContent = `${dataAktif.length} catatan, ${disematkanList.length} disematkan`;
}