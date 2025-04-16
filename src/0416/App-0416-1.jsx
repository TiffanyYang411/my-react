import { useState } from "react";
import { useEffect } from "react";


function App() {
    // 3-1 使用useState建立變數
    const [citys, setCitys] = useState([])

    // 3-2 渲染後，使用useEffect先取得天氣資料
    useEffect(() => {
        // 1-1 使用非同步方法async，會搭配await
        (async () => {
            // 1-1-1 方法一：取得遠端資料(json)
            // 複製老師連結：const data = await axios.get('https://coffeeteacher.github.io/weather/F-C0032-001.json');
            // 1-1-2 方法二：取得已經放在資料夾的檔案，記得放在public內
            const data = await axios.get('./api/F-C0032-001.json');
            // 查看是否連上json
            // console.log(data);

            // 1-2 解構各縣市的氣象資料
            const { location } = data.data.cwaopendata.dataset;
            console.log(location);
            // 建立時間物件
            // const options = {
            //     hour: 'numeric',
            //     minute: 'numeric'
            // }

            // 3-3 將取得的天氣資料，透過setCitys方法，更新location變數資料
            setCitys(location);
        })(); // })()：後面加()表立即執行
    }, [])

    return (
        <>
            {/* 2-1 將外框畫出 */}
            <h2>36小時天氣預報</h2>
            {/* 2-2 一列兩欄 */}
            {/* 使用Bootstrap語法做以下排版 */}
            <div className="row row-cols-2 g-4">
                {/* 使用迴圈，顯示所有縣市 */}
                {
                    citys.map((city) => {
                        return (
                            <>
                                {/* 縣市欄 */}
                                {/* 3-4 使用map一定需要給key值 */}
                                <div className="col" key={city.locationName}>
                                    {/* 2-3 使用卡片樣式 */}
                                    <div className="card text-center">
                                        {/* 2-4 頭：卡片標題 */}
                                        <div className="card-header">
                                            <div className="h4 my-0">
                                                {/* 臺北市 */}
                                                {/* 4-1 取得每個縣市名 */}
                                                {city.locationName}
                                            </div>
                                            <div>
                                                {/* 2-5 身：卡片內容，一列三欄 */}
                                                <div className="row row-cols-3">
                                                    {/* 4-2 顯示每個縣市的三個欄位資訊 */}
                                                    {
                                                        city.weatherElement[0].time.map((time, index) => {
                                                            return (
                                                                <div className="col" key={index}>
                                                                    {/* 日期 */}
                                                                    <div className="h4 my-0">
                                                                        {/* 16日 */}
                                                                        {/* 使用日期時間函數 toLocalString() */}
                                                                        {
                                                                            new Date(time.startTime).toLocaleString(undefined, {
                                                                                day: 'numeric'
                                                                            })
                                                                        }
                                                                    </div>
                                                                    {/* 時間 */}
                                                                    {/* 上午6:00 <br />
                                                                    ~ <br />
                                                                    下午6:00 <br /> */}
                                                                    {
                                                                        new Date(time.startTime).toLocaleString(undefined, {
                                                                            hour: 'numeric',
                                                                            minute: 'numeric'
                                                                        })
                                                                    }<br />
                                                                    ~<br />
                                                                    {
                                                                        new Date(time.endTime).toLocaleString(undefined, {
                                                                            hour: 'numeric',
                                                                            minute: 'numeric'
                                                                        })
                                                                    }<br />
                                                                    {/* 天氣圖：使用執行路徑，所以要放在public資料夾中才讀得到 */}
                                                                    {/* 圖片放到public資料夾內 */}
                                                                    {/* 若圖片用import載入，會不好做 */}
                                                                    {/* <img src="/weatherIcon/晴時多雲.svg" alt="" /> */}
                                                                    <img src={`./weatherIcon/${time.parameter.parameterName}.svg`} alt="" />
                                                                    {/* 天氣名稱 */}
                                                                    <div className="mt-2">
                                                                        {/* 晴時多雲 */}
                                                                        {time.parameter.parameterName}
                                                                    </div>
                                                                    {/* 降雨機率 */}
                                                                    <div className="mt-2">
                                                                        {/* 下雨icon */}
                                                                        <i class="bi bi-umbrella">
                                                                            {/* 10% */}
                                                                            {city.weatherElement[4].time[index].parameter.parameterName}%
                                                                        </i>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </>
    )
}

export default App

