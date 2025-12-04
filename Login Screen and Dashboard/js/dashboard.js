const notificationIcon = document.querySelector(".notification-icon");
const notificationMenu = document.getElementById("notificationDropDown");
const userIcon = document.querySelector(".userCircle-icon");
const userMenu = document.getElementById("userCircleDropDown");
const logoutBtn = document.getElementById("logOutBtn");

notificationIcon.addEventListener("click", (e) => {
  e.stopPropagation();

  userMenu.style.display = "none";

  notificationMenu.style.display =
    notificationMenu.style.display === "block" ? "nones" : "block";
});

userIcon.addEventListener("click", (e) => {
  e.stopPropagation();

  notificationMenu.style.display = "none";

  userMenu.style.display =
    userMenu.style.display === "block" ? "none" : "block";
});
//logout butonu fonksiyonu eger bos bir yere tiklarsak dropdown menu kapaniyor
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("currentUserRole");
  localStorage.removeItem("currentUserEmail");

  window.location.href = "loginScreen.html";
});
window.addEventListener("click", () => {
  notificationMenu.style.display = "none";
  userMenu.style.display = "none";
});
//local storage a kaydettigimiz kullanici bilgisiyle kullanicinin rolunu alip site de header a yazdiriyoruz
const role = localStorage.getItem("currentUserRole");

if (!role) {
  window.location.href("../pages/loginScreen.html");
} else {
  document.getElementById("userRole").textContent = role;
}
