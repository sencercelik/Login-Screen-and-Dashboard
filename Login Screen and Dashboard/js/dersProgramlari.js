//kullaniciyi sayfalar arasi yonlendirme
const role = localStorage.getItem("currentUserRole");

if (!role) {
  window.location.href("loginScreen.html");
} else {
  document.getElementById("userRole").textContent = role;
}
//1.pdf indirmek icin
document.getElementById("downloadPdf1").addEventListener("click", () => {
  const blob = new Blob([], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "ders_programi.pdf";
  a.click();

  URL.revokeObjectURL(url);
});
//2.pdf indirmek icin
document.getElementById("downloadPdf2").addEventListener("click", () => {
  const blob = new Blob([], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "ders_programi.pdf";
  a.click();

  URL.revokeObjectURL(url);
});

//excel indirmek icin
document.getElementById("downloadExcel").addEventListener("click", () => {
  const rows = [
    ["Gün", "Ders", "Saat"],
    ["Pazartesi", "Algoritma", "09:00"],
    ["Salı", "Matematik", "13:00"],
    ["Çarşamba", "Fizik", "10:00"],
  ];

  let csvContent = "";
  rows.forEach((row) => {
    csvContent += row.join(",") + "\n";
  });

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "ders_programi.csv";
  a.click();

  URL.revokeObjectURL(url);
});
