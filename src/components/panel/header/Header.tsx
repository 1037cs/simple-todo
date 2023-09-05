import styles from "../panel.module.scss";
import {ReactComponent as Logo} from '../../../assets/plus.svg';
import React, {Dispatch, memo, MutableRefObject, SetStateAction, useRef, useState} from "react";
import {TodoType} from "../../todo/Todo.tsx";

type Props = {
    todos: TodoType[],
    setTodos: Dispatch<SetStateAction<TodoType[]>>
}

const Header = memo(({todos, setTodos}: Props) => {
    const [newTodo, setNewTodo] = useState<string>('')

    const addTodo = (e?: React.KeyboardEvent<HTMLInputElement> | null) => {
        if (e && e.key !== 'Enter')
            return
        if (ref.current && ref.current.value.trim() !== '') {
            if (todos.find(i => i.title.toLowerCase() === ref.current.value.toLowerCase()))
                alert('Todo с таким названием уже есть')
            else {
                setTodos(prevState => [...prevState, {title: ref.current.value, completed: false}])
                setNewTodo('')
            }
        }
    }

    const ref = useRef() as MutableRefObject<HTMLInputElement>

    return (
        <header className={styles.header}>
            <input className={styles.input} placeholder={'What needs to be done?'} ref={ref}
                   value={newTodo}
                   maxLength={18}
                   onChange={e => setNewTodo(e.target.value)}
                   onKeyDown={e => addTodo(e)}/>
            <Logo className={styles.icon} onClick={() => addTodo()}/>
        </header>
    );
},);

export default Header;