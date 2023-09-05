import styles from './app.module.scss'
import Panel from "./components/panel/Panel.tsx";

function App() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>todos</h1>
            <Panel/>
        </div>
    )
}

export default App
