// 模擬資料
const newsData = [
    { id: 1, title: "江戶美學講座：禁令下的色彩", date: "2026-05-01", content: "這裡可以寫詳細的講座介紹..." },
    { id: 2, title: "【線上活動】和服濾鏡挑戰開始", date: "2026-05-04", content: "參加活動即有機會獲得限定電子壁紙..." }
];

const articlesContainer = document.querySelector('.articles');
const modal = document.getElementById('articleModal');
const closeBtn = document.querySelector('.close-btn');

// 1. 渲染列表
newsData.forEach(item => {
    const div = document.createElement('div');
    div.className = 'article-item';
    div.innerHTML = `
        <span class="date">[${item.date}]</span>
        <span class="item-title">${item.title}</span>
    `;
    
    // 2. 綁定點擊事件
    div.onclick = () => {
        document.getElementById('modalTitle').innerText = item.title;
        document.getElementById('modalDate').innerText = item.date;
        document.getElementById('modalBody').innerHTML = item.content;
        modal.style.display = "flex";
    };
    
    articlesContainer.appendChild(div);

});
// 檢查 closeBtn 是否存在，避免報錯
if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        console.log("關閉按鈕被點擊了！"); // 如果控制台有出現這行，代表按鈕有用
        modal.style.display = "none";
    });
} else {
    console.error("找不到 .close-btn 元素，請檢查 HTML！");
}

// 建議也保留「點擊背景關閉」，使用者體驗會更好
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});