function App() {
    // 建立函式方法1
    function sayHi3() {
        alert('Hi3');
    }

    // 建立函式方法2
    const sayHi4 = () => {
        alert('Hi4');
    }

    return (
        <>
            {/*事件處理*/}
            {/*在HTML標籤上榜定事件*/}
            <button onClick={  /*事件名稱用駝峰式命名*/
                // 匿名函式寫法
                function () {
                    alert('Hello1');
                }
            }>打招呼1</button>

            <button onClick={
                // 箭頭函式
                () => {
                    alert('Hello2');
                }
            }>打招呼2</button>

            {/*事件處理2*/}
            {/*呼叫函式：被呼叫的函式名稱不可以加上()，否則會立即執行*/}
            <button onClick={sayHi3}>打招呼3</button>
            <button onClick={sayHi4}>打招呼4</button>

        </>
    )
}
export default App