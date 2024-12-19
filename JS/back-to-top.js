document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById("backToTopBtn");

    if (!btn) return; // 確保按鈕元素存在

    // 監聽 hover 事件，切換文字
    btn.addEventListener("mouseover", () => {
        btn.innerText = "Back to Top"; // 切換為「Back to Top」
    });

    btn.addEventListener("mouseout", () => {
        btn.innerText = "Home"; // 還原為原本文字
    });
});
// 獲取按鈕元素
const backToTopBtn = document.getElementById("backToTopBtn");

// 監聽按鈕的點擊事件
backToTopBtn.addEventListener("click", (event) => {
    event.preventDefault(); // 防止默認行為（跳轉）
    window.scrollTo({
        top: 0, // 滾動到頁面頂部
        behavior: "smooth", // 使用平滑滾動
    });
});