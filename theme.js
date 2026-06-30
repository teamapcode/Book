// theme.js - دکمه تغییر تم برای همه صفحات

(function() {
    // ایجاد دکمه
    const btn = document.createElement('button');
    btn.id = 'themeToggle';
    
    // بررسی تم ذخیره‌شده
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        btn.innerHTML = '☀️';
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        btn.innerHTML = '🌙';
    }
    
    // استایل دکمه
    btn.style.cssText = 'position:fixed; bottom:100px; right:25px; padding:12px 16px; background:#4a3528; color:#f5eee7; border:3px solid #b8956a; border-radius:50%; cursor:pointer; font-size:1.5rem; z-index:999; box-shadow:0 4px 20px rgba(0,0,0,0.4); transition:0.3s; width:55px; height:55px; display:flex; align-items:center; justify-content:center;';
    
    document.body.appendChild(btn);
    
    // رویداد کلیک
    btn.addEventListener('click', function() {
        const isDark = document.body.classList.contains('dark-mode');
        
        if (isDark) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            this.innerHTML = '🌙';
            localStorage.setItem('theme', 'light');
            this.style.background = '#4a3528';
            this.style.color = '#f5eee7';
            this.style.borderColor = '#b8956a';
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            this.innerHTML = '☀️';
            localStorage.setItem('theme', 'dark');
            this.style.background = '#b8956a';
            this.style.color = '#1a0f0a';
            this.style.borderColor = '#d4b08a';
        }
    });
    
    // اعمال استایل اولیه بر اساس تم فعلی
    if (document.body.classList.contains('dark-mode')) {
        btn.style.background = '#b8956a';
        btn.style.color = '#1a0f0a';
        btn.style.borderColor = '#d4b08a';
    }
    
    // اضافه کردن استایل هاور با CSS
    const style = document.createElement('style');
    style.textContent = '#themeToggle:hover { transform: scale(1.15) !important; box-shadow: 0 6px 30px rgba(184, 149, 106, 0.5) !important; }';
    document.head.appendChild(style);
})();