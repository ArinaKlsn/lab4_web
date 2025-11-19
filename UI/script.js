
document.addEventListener('DOMContentLoaded', function() {
   
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
    });
    
    
    const mainPage = document.getElementById('main-page');
    if (mainPage) {
        mainPage.classList.add('active');
    }
    
    console.log('Страница загружена!');
});