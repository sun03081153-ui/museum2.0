// 模擬資料
const newsData = [
    { 
        id: 1, 
        title: "【正式開館】衣為心聲：江戶和服的社會語言", 
        date: "2026-05-01", 
        content: `「服飾，是文明的縮影，更是身分的標籤。」

本展覽誠摯邀請您穿梭千年，見證和服如何從彌生時代原始的「貫頭衣」，演變為江戶時代具備高度社會規範的文化符碼。我們將視角鎖定在服飾藝術最鼎盛的江戶時期，深度剖析當時極其嚴格且細膩的穿著規範。

在這裡，您將解碼隱含在絲縷間的「隱形語言」：

■ 適婚的訊號： 觀察未婚女性如何透過「振袖」的色彩與紋樣傳遞家族實力。
■ 禁令下的韌性： 探究平民町人在幕府「奢侈禁止令」限制下，如何發展出低調卻極致精緻的「粋」美學。

點擊「進入展覽」，與我們一同梳理這場由政治權力與本土美學交織而成的時空巡禮。` 
    },
    { 
        id: 2, 
        title: "【互動升級】定義您的觀展視角：全站色彩情境切換", 
        date: "2026-05-04", 
        content: `為了讓您更深刻地感受不同身分與時空背景下的審美傾向，本站現已支援
        「展覽情境色系切換」功能。

您可以根據目前的觀展進度，自由變換視覺氛圍。點擊導覽列或頁面中出現的色塊圖示，即可親自定義您的江戶時空體驗，讓色彩引導您讀懂每一件服飾背後的聲音。` 
    }
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