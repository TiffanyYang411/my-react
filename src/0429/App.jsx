import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(3);

    const slides = [
        { url: "./images/p1.jpg" },
        { url: "./images/p2.jpg" },
        { url: "./images/p3.jpg" },
        { url: "./images/p4.jpg" },
        { url: "./images/p5.jpg" },
    ]

    // 當currentIndex值改變時，會再觸發一次
    useEffect(() => {
        // 每隔一秒鐘
        const autoplay = setInterval(() => {
            // 換下一張
            nextSlide();
        }, 2000);

        // 清除autoplay
        return () => clearInterval(autoplay);
    }, [currentIndex]);

    // 下一張
    const nextSlide = () => {
        // 檢查是否在最後一張，若是，則回到第一張；若不是，則跳到下一張
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
    }

    // 上一張
    const prevSlide = () => {
        // 檢查是否在第一張，若是，則回到第末張；若不是，則往前一張
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
    }

    // 按鈕控制
    const Arrow = ({ direction, onClick }) => {
        return (
            <div style={{
                position: "absolute",
                top: "50%",
                cursor: "pointer",
                color: "white",
                [direction]: "20px",
            }}>
                {
                    direction === "left" ? (
                        <IoIosArrowBack onClick={onClick} size={50} />
                    ) : (
                        <IoIosArrowForward onClick={onClick} size={50} />
                    )
                }
            </div>
        );
    }

    return (
        <>
            {/* 最外層 */}
            <div style={{
                maxWidth: "100vw",
                height: "100vh",
                margin: "auto",
            }}>
                {/* 圖 */}
                <div style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                }}
                ></div>

                {/* 上一張 */}
                <Arrow direction="left" onClick={prevSlide} />
                {/* 下一張 */}
                <Arrow direction="right" onClick={nextSlide} />
            </div>
        </>
    )
}