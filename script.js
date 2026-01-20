// ฟังก์ชันโหลด Header
async function loadHeader() {
  const placeholder = document.getElementById('header-placeholder');
  if (!placeholder) return; // ถ้าหน้าไหนไม่มี placeholder ไม่ต้องรันต่อ

  try {
    const response = await fetch('header.html');
    if (!response.ok) throw new Error('ไม่พบไฟล์ header.html');
    
    const html = await response.text();
    placeholder.innerHTML = html;

    // เติมสีปุ่ม Active (ตรวจสอบหลังจาก HTML ถูกใส่เข้าไปแล้ว)
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    if (currentPage === "index.html") {
      const btn = document.getElementById('nav-home');
      if (btn) btn.classList.add('active');
    } else if (currentPage === "huboffice.html" || currentPage === "createoffice.html") {
      const btn = document.getElementById('nav-hub');
      if (btn) btn.classList.add('active');
    }
  } catch (error) {
    console.error('เกิดข้อผิดพลาด:', error);
    // ถ้าโหลดไม่ขึ้น ให้แสดงข้อความแจ้งเตือนแทนม่านว่างๆ
    placeholder.innerHTML = `<div style="padding:20px; background:red; color:white;">Error: โหลดส่วนหัวไม่สำเร็จ - ${error.message}</div>`;
  }
}

// รันฟังก์ชันทันที
loadHeader();
