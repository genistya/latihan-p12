import * as storage from './storage.js';
import * as state from './state.js';
import * as ui from './ui.js';

function render() {
  const dataCari = state.cari();
  ui.perbaruiTampilan(state.semua(), dataCari);
}

state.inisialisasi(storage.muat());

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const inputJudul = document.getElementById('judul');
  const selectMk = document.getElementById('mk');
  const judul = inputJudul.value.trim();

  if (!judul) return;

  state.tambah(judul, selectMk.value);
  inputJudul.value = '';
  render();
});

document.getElementById('cari').addEventListener('input', (e) => {
  state.cari(e.target.value);
  render();
});

document.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-aksi]');
  if (!btn) return;

  const id = Number(btn.dataset.id);
  const aksi = btn.dataset.aksi;

  if (aksi === 'semat') {
    state.alihSemat(id);
    render();
  } else if (aksi === 'hapus') {
    if (confirm('Hapus catatan ini?')) {
      state.hapus(id);
      render();
    }
  }
});

render();