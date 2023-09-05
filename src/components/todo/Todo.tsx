import styles from './todo.module.scss'
import {Dispatch, memo, SetStateAction} from "react";

export type TodoType = {
    title: string,
    completed: boolean,
}

type Props = {
    todo: TodoType,
    setTodos: Dispatch<SetStateAction<TodoType[]>>
}

const Todo = memo(({todo, setTodos}: Props) => {
    const toggleCompletedTodo = () => {
        setTodos(prevState => prevState.map(item =>
            item.title === todo.title
                ? {...item, completed: !item.completed}
                : item
        ))
    }

    return (
        <div className={styles.card}>
            <input type={"checkbox"} className={styles.checkBox} checked={todo.completed}
                   onChange={toggleCompletedTodo} data-testid={'checkbox'}/>
            <span className={todo.completed ? styles.completed : undefined}>{todo.title}</span>
        </div>
    );
},);

export default Todo;