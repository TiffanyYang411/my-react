import { table } from "motion/react-client";
import { useMemo, useState } from "react";

function App() {
    // 建立表格資料
    const prodData = [
        {
            id: 1,
            title: 'Apple juice',
            price: 80,
        },
        {
            id: 2,
            title: 'Big Mac',
            price: 50,
        },
        {
            id: 3,
            title: 'Ice cream',
            price: 70,
        },
        {
            id: 4,
            title: 'Milk shake',
            price: 100,
        },
        {
            id: 5,
            title: 'Latte',
            price: 90,
        },
    ];

    // 建立表格元件
    const ProdTable = ({ filterProds }) => {
        return (
            <table>
                <body>
                    {
                        filterProds.map((prod) => {
                            return (
                                <tr key={prod.id}>
                                    <td>
                                        {prod.title}
                                    </td>
                                    <td>
                                        {prod.price}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </body>
            </table>
        )


    }


    // 陣列變數
    const [prods, setProds] = useState(prodData);
    // 排序變數，預設為遞增
    const [ascending, setAscending] = useState(true);
    // 搜尋變數`,預設為空字串
    const [search, setSearch] = useState('');

    // 建立排序與搜尋函式
    const filterProds = useMemo(() => {
        return [...prods]
            .sort((a, b) => {
                return ascending
                    ? a.price - b.price
                    : b.price - a.price
            })
            .filter((prod)=>{
                return prod.title.match(search);
            })

    }, [ascending, search]);

    return (
        <>
            <h1>useMemo搜尋與排序</h1>
            <hr style={{ marginBottom: "50px" }} />

            升降冪：
            <input
                type="checkbox"
                checked={ascending}
                onChange={(e) => {
                    setAscending(e.target.checked)
                }}
            />
            <br />
            搜尋：
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* 顯示結果：呼叫表格元件 */}
            {/* <ProdTable filterProds={prods}/> */}
            <ProdTable filterProds={filterProds} />

        </>
    )
}
export default App