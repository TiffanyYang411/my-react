import axios from "axios"
import { div } from "motion/react-client";
import { useEffect, useState, useRef } from "react";


export default function App() {


    // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
    const api = "https://api.unsplash.com/search/photos";
    const accessKey = "D5okLEuCy4TFSNi0BrrFrp-_KSv2QAxGXxDm5s9cBOc";
    const [filterString, setFilterString] = useState('dog');


    // 存放篩選後的資料
    const [jsonData, setJsonData] = useState([]);

    // 目前頁數
    const currentPage = useRef(1);
    // 讀取變數
    const isLoading = useRef(false);

    // 建立非同步方法，取得遠端資料
    const getPhotos = async (page = 1, isNew = true) => {
        try {
            const result = await axios.get(`${api}?client_id=${accessKey}&query=${filterString}`);
            console.log(result);

            // 由於加上頁數，不斷覆蓋，所以要保留之前的結果
            // 將資料寫入陣列jsonData
            setJsonData((preData) => {
                // 假如是新的關鍵字，則回傳新的關鍵字結果
                if (isNew) {
                    return [...result.data.results];
                }
                // 先前的資料+當前的資料
                return [...preData, ...result.data.results];
            });

            // 更新頁數
            currentPage.current = page;
            // 1秒鐘後取消寫入
            setTimeout(() => {
                isLoading.current = false;
            }, 1000);
        } catch (error) {
            console.log(error)
        }
    }

    // 顯示陣列資料元件
    const ShowPhoto = () => {
        console.log(jsonData)
        return (
            jsonData.map((item, index) => {
                return (
                    <div key={index} style={{ margin: "3px" }}>
                        <img src={item.urls.regular} alt="" width="400" height="320" style={{ objectFit: "cover" }} />
                    </div>
                )
            })
        )
    }

    // 建立搜尋列元件
    const SearchBox = ({ onSearchHandler, filterString }) => {
        return (
            <div style={{ marginBottom: "10px" }} >
                <label htmlFor="filter">Search</label>
                <input type="text" id="filter" defaultValue={filterString} onKeyDown={onSearchHandler} />
            </div>
        )
    }

    // 按Enter鍵更改資料函示
    const onSearchHandler = (e) => {
        if (e.key === "Enter") {
            setFilterString(e.target.value);
        }
    }

    // 列表高度
    const listRef = useRef(null);
    useEffect(() => {
        getPhotos(1, true);

        // 滾動監聽函式
        const scrollEvent = () => {
            // console.dir(listRef.current);

            // 目前圖片列表高度
            const height = (listRef.current.offsetHeight + listRef.current.offsetTop) - window.innerHeight

            if (!isLoading.current && window.scrollY >= height) {
                // 頁數+1
                currentPage.current++;
                // 同一個關鍵字的資料不用覆蓋，所以補上false
                getPhotos(currentPage.current, false);
            }
        }

        // 滾動監聽
        addEventListener('scroll', scrollEvent);
        // 移除監聽(為了確保每次捲動時，正確的位置與資料)
        return () => window.removeEventListener('scroll', scrollEvent);
    }, [filterString])

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>取得遠端資料</h1><hr />
                <SearchBox onSearchHandler={onSearchHandler} filterString={filterString} />
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} ref={listRef}>
                    <ShowPhoto />
                </div>
            </div>
        </>
    )
}
