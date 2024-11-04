// script.js - 使用 jQuery 重寫互動功能
$(document).ready(function() {
    console.log("網站加載完畢");

    // 當提交按鈕被點擊時
    $('#submit').on('click', function() {
        // 獲取選中的值
        const selectedOption = $('input[name="國家隊-條款-小孩"]:checked').val();

        // 獲取顯示結果的 p 元素
        const $resultParagraph = $('#result');

        // 根據選擇的值來顯示相應的訊息
        if (selectedOption) {
            switch (selectedOption) {
                case '國家隊':
                    $resultParagraph.text('林書豪雖然擁有中華民國護照，但根據FIBA規定，16歲以前取得護照才能以本土身分出戰，所以林書豪可以加入中華男籃，但是只能占用歸化球員的名額。');
                    break;
                case '條款':
                    $resultParagraph.text('「林書豪條款」是前台灣職籃T1聯盟當年為了爭取林書豪加盟，特別設立的條款，規定為每支球隊可招募一名足以號召票房的球星，且不受薪資上限的影響，但由於T1聯盟今年的重新整併和重組為TPBL，根據新的聯盟規章，「林書豪條款」確定廢除。');
                    break;
                case '小孩':
                    $resultParagraph.text('林書豪去年1月在社交媒體上宣布已婚的消息，且於今年生日的隔天再次於社交媒體上宣布小孩出生的喜訊，並感性的寫道：「我超棒的太太跟我很幸運的得到了世界上最珍貴的禮物。」');
                    break;
                default:
                    $resultParagraph.text('請選擇一個你感興趣的問題。');
            }
        } else {
            // 如果沒有選擇任何選項，顯示提示訊息
            $resultParagraph.text('請先選擇一個問題再提交。');
        }
    });
});
