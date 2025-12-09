// 1. 從 Local Storage 讀取金額，如果沒有則使用 0
// parseInt() 將字串轉換為數字
let currentAmount = parseInt(localStorage.getItem('savedAmount')) || 0;

// 2. 取得 HTML 中顯示金額和按鈕的元素
const amountDisplay = document.getElementById('amount');
const incrementButton = document.getElementById('incrementButton');

// 初始時先將 Local Storage 的金額顯示出來
amountDisplay.textContent = currentAmount;


// 3. 定義一個函數，用來處理點擊事件
function incrementAmount() {
    // 將金額加一
    currentAmount++;

    // 更新網頁上顯示的金額
    amountDisplay.textContent = currentAmount;
    
    // **關鍵步驟：將更新後的金額存回 Local Storage**
    localStorage.setItem('savedAmount', currentAmount);
}

// 4. 為按鈕添加「點擊」事件監聽器
incrementButton.addEventListener('click', incrementAmount);