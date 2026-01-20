// ฟังก์ชันสำหรับโหลด Header
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
    
    // ตรวจสอบว่าอยู่หน้าไหน และเติม class "active" ให้เมนูนั้น
    const currentPage = window.location.pathname.split("/").pop();
    
    if (currentPage === "index.html" || currentPage === "") {
      document.getElementById('nav-home').classList.add('active');
    } else if (currentPage === "huboffice.html" || currentPage === "createoffice.html") {
      document.getElementById('nav-hub').classList.add('active');
    }
  })
  .catch(error => console.error('Error loading header:', error));
