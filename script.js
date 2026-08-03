document.addEventListener('DOMContentLoaded', () => {
    // Function to handle switching pages
    function showPage(targetId) {
      // 1. Hide all sections
      const sections = document.querySelectorAll('.page-section');
      sections.forEach(section => {
        section.classList.remove('active');
      });
  
      // 2. Remove active status from all navigation buttons
      const navButtons = document.querySelectorAll('.nav-btn');
      navButtons.forEach(btn => {
        btn.classList.remove('active');
      });
  
      // 3. Display target section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }
  
      // 4. Set active status on corresponding nav button
      const activeNavBtn = document.querySelector(`.nav-btn[data-page="${targetId}"]`);
      if (activeNavBtn) {
        activeNavBtn.classList.add('active');
      }
  
      // 5. Smooth scroll back to top when switching pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    // Attach event listeners to all clickable elements with data-page attributes
    document.querySelectorAll('[data-page]').forEach(element => {
      element.addEventListener('click', (e) => {
        const pageId = e.currentTarget.getAttribute('data-page');
        showPage(pageId);
      });
    });
  });