// React中的狀態管理函式useState
import { useState } from "react";

function ChildComponent({propsCount}) {
    return <div>{propsCount}</div>
}
// 子元件
function MyComponent() {
    // let count = 0; 使用左式，每次畫面都會重新渲染，count都會回到0，畫面記不住值的改變
    // 使用React中控制狀態的變數 => const[]=useState => import { useState } from "react";
    //透過setCount改變點擊次數，const是常數，為固定值，需透過useState(0)，預設值為0，才可改變
    const [count, setCount] = useState(0);  //count為變數；setCount為改變變數的方法
    const handleClick = () => {
        // count++;
        // 使用useState，改變count值(count為變數) => setCount(count+1);
        setCount(count + 1);
    }

    // return後面一定要加小括號
    return (
        <>
            <button onClick={handleClick}>點擊次數:{count}</button>
            {/* 在元件中呼叫另一個元件 */}
            <ChildComponent propsCount={count} />
        </>
    )
}
// 程式進入點
function App() {
    return (
        <>
            {/* 呼叫子元件 */}
            {/* 不同子元件之間的狀態state是互相獨立的，互不影響 */}
            <MyComponent />
            <MyComponent />
            <MyComponent />
        </>
    )
}
export default App