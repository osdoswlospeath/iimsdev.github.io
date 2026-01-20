async function loadHeader() {
  try {
    const response = await fetch('header.html');
    const data = await response.text();
    document.getElementById('header-placeholder').innerHTML = data;

    // หาชื่อไฟล์ปัจจุบัน (เช่น index.html หรือ huboffice.html)
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    // ล้างสีเดิมออกก่อน (เผื่อไว้)
    document.querySelectorAll('.nav .link').forEach(link => {
      link.classList.remove('active');
    });

    // ตรวจสอบหน้าและเติม Class 'active' เพื่อให้สีทองขึ้น
    if (page === "index.html") {
      const el = document.getElementById('nav-home');
      if (el) el.classList.add('active');
    } else if (page === "huboffice.html" || page === "createoffice.html") {
      const el = document.getElementById('nav-hub');
      if (el) el.classList.add('active');
    }

  } catch (error) {
    console.error('Error loading header:', error);
  }
}

loadHeader();
