// ฟังก์ชันสำหรับโหลด Header
fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
    
    // ตรรกะเช็คชื่อไฟล์เพื่อเติมสี Active
    const currentPage = window.location.pathname.split("/").pop();
    
    if (currentPage === "index.html" || currentPage === "") {
      const homeLink = document.getElementById('nav-home');
      if(homeLink) homeLink.classList.add('active');
    } else if (currentPage === "huboffice.html" || currentPage === "createoffice.html") {
      const hubLink = document.getElementById('nav-hub');
      if(hubLink) hubLink.classList.add('active');
    }
  });
