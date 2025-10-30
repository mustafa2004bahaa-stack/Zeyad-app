document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username");
  const useremail = localStorage.getItem("useremail");
  const welcomeText = document.getElementById("welcome");
  const datetimeEl = document.getElementById("datetime");
  const browserInfo = document.getElementById("browserInfo");
  const userInfo = document.getElementById("userinfo");

  // لو مفيش بيانات، يرجع للتسجيل
  if (!username || !useremail) {
    window.location.href = "index.html";
    return;
  }

  // عرض الترحيب
  welcomeText.textContent = `Welcome, ${username}!`;

  // عرض بيانات المستخدم
  userInfo.innerHTML = `
    <h3>User Info</h3>
    <p><strong>Name:</strong> ${username}</p>
    <p><strong>Email:</strong> ${useremail}</p>
  `;

  // تحديث التاريخ والوقت كل ثانية
  function updateDateTime() {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    datetimeEl.textContent = now.toLocaleString("en-US", options);
  }
  updateDateTime();
  setInterval(updateDateTime, 1000);

  const userAgent = navigator.userAgent;
  let browser = "Unknown Browser";

  if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
    browser = "Google Chrome";
  } else if (userAgent.includes("Firefox")) {
    browser = "Mozilla Firefox";
  } else if (userAgent.includes("Edg")) {
    browser = "Microsoft Edge";
  } else if (userAgent.includes("Safari")) {
    browser = "Safari";
  }

  browserInfo.textContent = `You're using: ${browser}`;

  

  // تسجيل الخروج
  document.getElementById("logout").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });
});
