import styles from './panel.module.scss'
import TodoList from "../todo-list/TodoList.tsx";
import {useState} from "react";
import {TodoType} from "../todo/Todo.tsx";
import Header from "./header/Header.tsx";
import Footer from "./footer/Footer.tsx";

export type FilterOption = 'completed' | 'active' | null

const Panel = () => {
    const [todos, setTodos] = useState<TodoType[]>([])
    const [filterOption, setFilterOption] = useState<FilterOption>(null)

    return (
        <section className={styles.panel}>
            <Header todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} filter={filterOption} setTodos={setTodos}/>
            <Footer todos={todos} setTodos={setTodos} filterOption={filterOption} setFilterOption={setFilterOption}/>
        </section>
    );
};

export default Panel;