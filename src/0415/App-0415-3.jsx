import { useState } from 'react'
import redShoe from './images/red.jpg'
import blackShoe from './images/black.jpg'
import whiteShoe from './images/white.jpg'

function App() {
    // 商品圖片陣列（紅、黑、白）
    const productImages = [redShoe, blackShoe, whiteShoe];

    // 狀態：目前顯示的圖片索引，預設是第 0 張（紅色）
    const [currentImg, setCurrentImg] = useState(0);

    return (
        <>
            <h2>選擇你喜歡的顏色：</h2>
            
            {/* 縮圖選擇區 */}
            <div>
                {
                    productImages.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`color-${index}`}
                            width={80}
                            onMouseOver={() => setCurrentImg(index)}
                            style={{ margin: '10px', cursor: 'pointer', border: currentImg === index ? '2px solid blue' : 'none' }}
                        />
                    ))
                }
            </div>

            {/* 顯示選擇後的大圖 */}
            <div>
                <img src={productImages[currentImg]} alt="商品預覽" width={400} />
            </div>
        </>
    )
}

export default App
