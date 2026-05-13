// theme.js 的內容
(function() {
    const savedColor = localStorage.getItem('kimonoThemeColor');
    if (savedColor) {
        document.documentElement.style.setProperty('--color1', savedColor);
    }
})();