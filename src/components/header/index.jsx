import styles from "./styles.module.scss";
import logo from "./nukenzie.png";

export const Header = () => {
    return (
        <>
            <header className={styles.header__container}>
                <img className="logo" src={logo} alt="logo" />
            </header>
        </>
    )
}