
document.addEventListener('DOMContentLoaded', function() {

    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');
    const cards = document.querySelectorAll('.card');

    function showPage(pageId) {
        console.log('Переход на страницу:', pageId);
    
        pages.forEach(page => {
            page.classList.remove('active');
        });
        const activePage = document.getElementById(pageId + '-page');
        if (activePage) {
            activePage.classList.add('active');
        } else {
            showPage('error');
            return;
        }
    
        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-page') === pageId) {
                btn.classList.add('active');
            }
        });
        
        window.scrollTo(0, 0);
    }
   
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
  
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
    
    
    const backButtons = document.querySelectorAll('[data-page]');
    backButtons.forEach(btn => {
        if (btn.classList.contains('nav-btn')) return;
        
        btn.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                showPage(pageId);
            }
        });
    });
    

    const addDeptBtn = document.getElementById('add-department-btn');
    if (addDeptBtn) {
        addDeptBtn.addEventListener('click', function() {
            alert('Открывается форма добавления подразделения\n(в реальном приложении здесь будет модальное окно)');
        });
    }
    
    const addRoomBtn = document.getElementById('add-room-btn');
    if (addRoomBtn) {
        addRoomBtn.addEventListener('click', function() {
            alert('Открывается форма добавления помещения\n(в реальном приложении здесь будет модальное окно)');
        });
    }
    
    const editButtons = document.querySelectorAll('.btn-edit');
    const deleteButtons = document.querySelectorAll('.btn-delete');
    
    editButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            alert('Открывается форма редактирования\n(в реальном приложении здесь будет форма с данными)');
        });
    });
    
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (confirm('Вы уверены, что хотите удалить этот элемент?')) {
                alert('Элемент удален\n(в реальном приложении здесь будет запрос к API)');
            }
        });
    });
    
    const loginForm = document.querySelector('#login-page form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Данные отправлены на сервер\n(в реальном приложении здесь будет AJAX-запрос)');
            showPage('main');
        });
    }
    
    showPage('main');
    
    console.log('SPA приложение инициализировано!');
});