export const KUNCI = 'catatan-kuliah:v1';

const KUNCI_LAMA = 'catatan-kuliah';

function bersihkan(parsed) {
  if (!Array.isArray(parsed)) return [];
  return parsed.filter(item => item && typeof item.judul === 'string');
}

export function muat() {
  try {
    const dataMentah = localStorage.getItem(KUNCI);
    if (dataMentah) return bersihkan(JSON.parse(dataMentah));

    // Migrasi: data lama di kunci tanpa versi dipindah ke KUNCI baru
    const dataLama = localStorage.getItem(KUNCI_LAMA);
    if (!dataLama) return [];
    const hasil = bersihkan(JSON.parse(dataLama));
    if (hasil.length > 0) {
      simpan(hasil);
      localStorage.removeItem(KUNCI_LAMA);
    }
    return hasil;
  } catch (err) {
    return [];
  }
}

export function simpan(data) {
  try {
    localStorage.setItem(KUNCI, JSON.stringify(data));
  } catch (err) {
    console.warn('Gagal menyimpan data:', err);
  }
}