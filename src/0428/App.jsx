import { useState } from "react";
// 新增：React 元件：先 import useState，才能用狀態控制

function App() {
    function changePage(targetPage) {
        // 建立一個 state 來記錄「現在是第幾個頁面」，預設是 page1
        // （改寫自：原本是靠 querySelector("#page1") 直接顯示）

        const [currentPage, setCurrentPage] = useState('Page1');

        // 建立頁面跟按鈕的對應表
        // （原本是寫死在 if else 判斷）

        const pageButtonMapping = {
            page1: ['btn1'],
            page2: ['btn2', 'btn3'],
            page3: ['btn4'],
        };

        // 改寫 changePage function：只改 currentPage，不去動 DOM
        // （原本是 querySelector(`#${targetPage}`).style.display = "block"）

        function changePage(targetPage) {
            setCurrentPage(targetPage);
        }
        
        document.querySelectorAll('#page1, #page2, #page3').forEach(page => {
            page.style.display = "none";
        });

        // 再顯示目標頁面
        document.querySelector(`#${targetPage}`).style.display = "block";

        // 按鈕顯示控制
        // 預設先全部隱藏
        document.querySelectorAll('#btn1, #btn2, #btn3, #btn4').forEach(btn => {
            btn.style.display = "none";
        });

        // 根據目前頁面，決定要顯示哪些按鈕
        if (targetPage === 'page1') {
            document.querySelector('#btn1').style.display = "block";
        } else if (targetPage === 'page2') {
            document.querySelector('#btn2').style.display = "block";
            document.querySelector('#btn3').style.display = "block";
        } else if (targetPage === 'page3') {
            document.querySelector('#btn4').style.display = "block";
        }
    }

    return (
        <>
            <div id="page1">我是page1</div>
            <div id="page2" style="display: none;">我是page2</div>
            <div id="page3" style="display: none;">我是page3</div>

            <button id="btn1" onclick="changePage('page2')">第二步</button>
            <button id="btn2" onclick="changePage('page1')" style="display: none;">第一步</button>
            <button id="btn3" onclick="changePage('page3')" style="display: none;">第三步</button>
            <button id="btn4" onclick="changePage('page2')" style="display: none;">第二步</button>
        </>
    )
}

export default App;