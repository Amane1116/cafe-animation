// 選取 .navbar 元素
const navbar = document.querySelector('.navbar');

// 為視窗掛載滾動事件
window.addEventListener('scroll', () => {
  // 視窗內高度
  const windowHeight = window.innerHeight;
  // 整個文件的高度
  const scrollHeight = document.documentElement.scrollHeight;
  // 當前已滾動的距離
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // 判斷是否滾動到底部
  if (scrollTop + windowHeight >= scrollHeight) {
    navbar.classList.add('hidden'); // 加入 'hidden' 類別
  } else {
    navbar.classList.remove('hidden'); // 移除 'hidden' 類別
  }
});

