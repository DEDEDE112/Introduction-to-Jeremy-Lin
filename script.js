// script.js - 目前沒有特別的互動功能，可以根據需要添加
console.log("網站加載完畢");
// 當 DOM 完全加載後執行此程式碼
document.addEventListener('DOMContentLoaded', function() {
    // 獲取提交按鈕
    const submitButton = document.getElementById('submit');
    
    // 為按鈕添加點擊事件監聽器
    submitButton.addEventListener('click', function() {
        // 獲取選中的值
        const selectedOption = document.querySelector('input[name="yes-fine-no"]:checked').value;
        
        // 獲取顯示結果的 p 元素
        const resultParagraph = document.getElementById('result');
        
        // 根據選擇的值來顯示相應的訊息
        if (selectedOption === 'yes') {
            resultParagraph.textContent = '你喜歡林書豪';
        } else if (selectedOption === 'fine') {
            resultParagraph.textContent = '你對林書豪沒什麼特別的想法。';
        } else if (selectedOption === 'no') {
            resultParagraph.textContent = '你不喜歡林書豪。';
        }
    });
});

