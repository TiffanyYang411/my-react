import { useState } from 'react';
import p1 from './images/p1.jpg'
import p2 from './images/p2.jpg'

// 定義React元件App：
// 建立一個函式function，這裡代表React元件，App表元件名稱(React元件通常用大寫開頭)
function App() {
    // 設定圖片陣列：
    // 宣告一個不可重新指定的變數(常數)const，arrPhotos為陣列名稱(來存兩張圖片的變數)，[p1,p2]為陣列，裡面為兩張圖的路徑變數
    const arrPhotos = [p1, p2];
    // 設定圖片狀態：
    // 目前圖片的state，預設為第一張圖的索引
    // currentImg為狀態值，表現在要顯示哪張圖片(索引號)，setCurrentImg是改變currentImg的函式(由React給)，useState(0)產生一個「狀態」，初始值為0，表第一張圖
    // useState為React的Hook
    const [currentImg, setCurrentImg] = useState(0)

    // return內的內容為函式要回傳的東西(在React裡就是畫面)
    return (
        // <></> 為React的空白標籤，也叫Fragment，用來包住多個元素
        <>
            {/* 外層容器 */}
            {/* <div>為HTML的區塊元素，className在React裡取代HTML的class(class為JS保留字)，'mian'為CSS的類別名稱，可用來加樣式 */}
            <div className='main'>
                {/* 縮圖區：使用.map()動態生成縮圖 */}
                <div>
                    {/* <img src={p1} alt="" width={100} />
                    <img src={p2} alt="" width={100} /> */}

                    {
                        // arrPhotos為剛剛圖片的陣列名稱；.map()為陣列的方法，用來跑每一項資料，產生一個新陣列；(photo, index)中photo表目前這張圖片，index表索引編號(0, 1)
                        arrPhotos.map((photo, index) => {
                            return (
                                // 每張圖片的顯示方式：
                                <img
                                    // key={index} => photo要有key的屬性，每個元素都要有唯一的key，可幫助React更新較快，key再React的.map中為必填屬性，可追蹤每個元素
                                    // src={photo} => 這張圖片的來源(圖片網址或變數)
                                    // alt="" => 替代文字(目前是空的)，圖片載不到時會顯示
                                    // width={100} => 設定圖片寬度為100px
                                    key={index} src={photo} alt="" width={100}
                                    // onMouseOver={...}當滑鼠移到這張圖片時，透過setCurrentImg方法取得目前圖片的索引編號(執行括號內的函式)
                                    // e => setCurrentImg(index)：當滑鼠移過來時，觸發產生事件e(event)，把目前的圖片索引設定為currentImg
                                    onMouseOver={e => setCurrentImg(index)}
                                    // 設定樣式：變更成滑鼠的形狀為手型icon
                                    style={{ cursor: "pointer" }}
                                />
                            )
                        })
                    }
                </div>

                {/* 放大圖區 */}
                <div>
                    {/* src={arrPhotos[currentImg] => 根據目前選擇的圖片索引(currentImg)，決定要顯示哪張大圖 */}
                    <img src={arrPhotos[currentImg]} alt="" width={400} />
                </div>
            </div>
        </>
    )
}
// 匯出元件名稱(整個畫面)
export default App