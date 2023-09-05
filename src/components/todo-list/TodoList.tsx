import styles from './todolist.module.scss'
import Todo, {TodoType} from "../todo/Todo.tsx";
import {Dispatch, memo, SetStateAction} from "react";
import {FilterOption} from "../panel/Panel.tsx";

type Props = {
    todos: TodoType[],
    filter: FilterOption,
    setTodos: Dispatch<SetStateAction<TodoType[]>>
}

const TodoList = memo(({todos, filter, setTodos}: Props) => {
    const filteredTodos = todos.filter(todo=>{
        if(!filter)
            return true
        else if (filter==='active')
            return !todo.completed
        else return todo.completed
    })

    return (
        <div className={styles.wrapper}>
            {filteredTodos.map((todo, i) => (
                <Todo key={i} todo={todo} setTodos={setTodos}/>
            ))}
        </div>
    );
},);

export default TodoList;