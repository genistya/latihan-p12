import { simpan } from './storage.js';

let catatan = [];
let kataCari = '';

export function inisialisasi(dataAwal) {
  catatan = dataAwal;
}

export function semua() {
  return catatan;
}

export function tambah(judul, mk) {
  const baru = {
    id: Date.now(),
    judul: judul,
    mk: mk,
    dibuat: new Date().toISOString(),
    disematkan: false
  };
  catatan.push(baru);
  simpan(catatan);
  return baru;
}

export function alihSemat(id) {
  catatan = catatan.map(c => (c.id === id ? { ...c, disematkan: !c.disematkan } : c));
  simpan(catatan);
}

export function hapus(id) {
  catatan = catatan.filter(c => c.id !== id);
  simpan(catatan);
}

export function cari(kata) {
  if (kata !== undefined) kataCari = kata;
  return catatan.filter(c => c.judul.toLowerCase().includes(kataCari.toLowerCase()));
}