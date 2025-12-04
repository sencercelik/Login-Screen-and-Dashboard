const users = [
  {
    email: "ogretimg@exapmle.com",
    password: "1234",
    role: "ogretim gorevlisi",
  },
  {
    email: "danisman@exapmle.com",
    password: "1234",
    role: "danisman",
  },
  {
    email: "dekanlik@exapmle.com",
    password: "1234",
    role: "dekanlik",
  },
];

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = users.find((u) => u.email === email && u.password === password);
  // eger user i users da bulursa local storage a kaydediyoruz
  if (user) {
    localStorage.setItem("currentUserRole", user.role);

    window.location.href = "dashboard.html";
  } else {
    alert("email veya sifre yanlis.");
  }
});
