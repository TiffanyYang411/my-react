import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";
// 展示列表
// 使用props接收元件屬性
// function Todo(props) {
//     return (
//         <div className="todo">
//             <p>{props.todo}</p>
//         </div>
//     )
// }

// 將props物件解構{元件屬性}
function Todo({ todo, delTodo, toggleCompleted, toggleIsEdit, editTodo }) {
    return (
        todo.isEdit?<EditForm todo={todo} editTodo={editTodo}/>:
        // 使用三元運算子
        // 條件式?成立:不成立
        <div className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            <p onClick={() => {toggleCompleted(todo.id)}}>{todo.content}</p>
            <div>
                {/* 修改icon */}
                <MdEdit 
                onClick={()=>{toggleIsEdit(todo.id)}}
                style={{ cursor: 'pointer' }} 
                />
                {/* 刪除icon */}
                <MdDelete
                onClick={() => { delTodo(todo.id) }}
                style={{ cursor: 'pointer', marginLeft: '5px' }}
                />
            </div>
        </div>
    )
}
export default Todo