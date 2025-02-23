document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.icon-box a');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.parentElement.classList.remove('active'));
            this.parentElement.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded');
    document.getElementById('downloadBtn').addEventListener('click', function() {
        console.log('Button clicked');
        const link = document.createElement('a');
        link.href = 'brijesh25CV.pdf';
        link.download = 'brijesh25CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});