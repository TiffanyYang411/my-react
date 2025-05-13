export default function App() {
    // 寫入資料
    // window.localStorage.setItem('book1', 'html');
    // 讀取資料
    // 刪除資料
    // 全部刪除

    return (
        <>
            <h1>本地端存取資料-Local storage</h1>
            <button onClick={() => {
                window.localStorage.setItem('book1', 'html');
                window.localStorage.setItem('book2', 'css');
                window.localStorage.setItem('book3', 'react');
            }}>寫入資料</button>

            <button onClick={() => {
                // 已知key的寫法
                // console.log(window.localStorage.getItem("book2"));

                // 未知key的寫法，讀取全部的資料
                for (var i = 0; i <= window.localStorage.length - 1; i++) {
                    var key = window.localStorage.key(i);
                    console.log(window.localStorage.getItem(key));
                }
            }}>讀取資料</button>

            <button onClick={() => {
                window.localStorage.removeItem("book2");
            }}>刪除指定資料</button>

            <button onClick={() => {
                window.localStorage.clear();
            }}>全部刪除資料</button>
        </>
    )
}