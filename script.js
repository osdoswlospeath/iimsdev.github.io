async function loadHeader() {
  const placeholder = document.getElementById('header-placeholder');
  if (!placeholder) return;

  try {
    const response = await fetch('header.html');
    const data = await response.text();
    placeholder.innerHTML = data;

    // --- ส่วนที่แก้ไขให้แม่นยำขึ้น ---
    const path = window.location.pathname;
    
    // ตรวจสอบว่า URL ลงท้ายด้วยอะไร
    const isIndex = path.endsWith('index.html') || path.endsWith('/') || path === '';
    const isHub = path.includes('huboffice.html') || path.includes('createoffice.html') || path.includes('viewoffice.html');

    if (isIndex) {
      const el = document.getElementById('nav-home');
      if (el) el.classList.add('active');
    } else if (isHub) {
      const el = document.getElementById('nav-hub');
      if (el) el.classList.add('active');
    }
    // ----------------------------

  } catch (error) {
    console.error('Error loading header:', error);
  }
}

loadHeader();
