import todoLogo from '../../assets/Logo.svg';
import {AiOutlinePlusCircle} from 'react-icons/ai'
import styles from './header.module.css';

export function Header(){
    return (
        <header className={styles.header}>
        <img src={todoLogo}/>

        <form className={styles.newTaskForm}>
            <input type="text" placeholder="Add a new task"/>
            <button>
            Create
            <AiOutlinePlusCircle size={20}/>
            </button>
        </form>
        </header>
    )
}