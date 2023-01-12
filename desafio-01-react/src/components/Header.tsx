import styles from  '../styles/Header.module.css';
import igniteLogo from '../assets/todo.svg'

export function Header() {
    return(
        <div>
            <header className={styles.header}>
                <img src={igniteLogo} alt="logo todo" />
            </header>
            <div className={styles.inputTask}>
                <input placeholder='Adicione uma nova tarefa' />
                <button type='submit'>Criar</button>
            </div>
        </div>
        
    )
}