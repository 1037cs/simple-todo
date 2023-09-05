import {Dispatch, SetStateAction} from 'react';
import styles from "../panel.module.scss";
import {TodoType} from "../../todo/Todo.tsx";
import {FilterOption} from "../Panel.tsx";

type Props = {
    todos: TodoType[],
    setTodos: Dispatch<SetStateAction<TodoType[]>>,
    filterOption: FilterOption,
    setFilterOption:Dispatch<SetStateAction<FilterOption>>
 }

const Footer = ({todos, setTodos, filterOption, setFilterOption} : Props) => {
    const clearCompleted = () => {
        setTodos(prevState => prevState.filter(todo=> !todo.completed))
    }

    return (
        <footer className={styles.footer}>
            <span>{todos.length} item left</span>
            <div className={styles.viewWrapper}>
                <button className={!filterOption ? styles.active : undefined}
                        onClick={() => setFilterOption(null)}>All
                </button>
                <button className={filterOption === 'active' ? styles.active : undefined}
                        onClick={() => setFilterOption('active')}>Active
                </button>
                <button className={filterOption === 'completed' ? styles.active : undefined}
                        onClick={() => setFilterOption('completed')}>Completed
                </button>
            </div>
            <button onClick={clearCompleted} data-testid={'delete-button'}>Clear completed</button>
        </footer>
    );
};

export default Footer;