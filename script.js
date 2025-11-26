// ====== Halaman Biodata ======
function updateProfile() {
    const nama = document.getElementById("inNama");
    const nim = document.getElementById("inNIM");
    const gender = document.getElementById("inGender");
    const prodi = document.getElementById("inProdi");
    const hobi = document.getElementById("inHobi");
    const keahlian = document.getElementById("inKeahlian");
    const cita = document.getElementById("inCita");

    if (nama) document.getElementById("outNama").innerText = nama.value;
    if (nim) document.getElementById("outNIM").innerText = nim.value;
    if (gender) document.getElementById("outGender").innerText = gender.value;
    if (prodi) document.getElementById("outProdi").innerText = prodi.value;
    if (hobi) document.getElementById("outHobi").innerText = hobi.value;
    if (keahlian) document.getElementById("outKeahlian").innerText = keahlian.value;
    if (cita) document.getElementById("outCita").innerText = cita.value;
}

// ====== Halaman Nilai ======
function hitung() {
    const tugas = Number(document.getElementById("tugas")?.value) * 0.20;
    const kuis  = Number(document.getElementById("kuis")?.value) * 0.15;
    const uts   = Number(document.getElementById("uts")?.value) * 0.25;
    const uas   = Number(document.getElementById("uas")?.value) * 0.35;
    const absen = Number(document.getElementById("absen")?.value) * 0.05;

    const total = tugas + kuis + uts + uas + absen;

    if (document.getElementById("nilaiAkhir"))
        document.getElementById("nilaiAkhir").innerText = total.toFixed(2);

    let grade = "D";
    if (total > 81) grade = "A";
    else if (total > 70) grade = "B";
    else if (total > 60) grade = "C";

    if (document.getElementById("grade"))
        document.getElementById("grade").innerText = grade;
}