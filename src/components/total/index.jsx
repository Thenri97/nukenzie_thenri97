import styles from "./styles.module.scss";

export const Total = ({ posts }) => {

    const listTotalValue = posts.reduce((acumulador, post) => {
        if (post.operation == "Entrada") {
            return acumulador + parseFloat(post.value);
        } else {
            return acumulador - parseFloat(post.value);
        }
    }, 0);

    return (
        <>
            <div className={styles.total}>
                <div>
                    <h2 className="title3">Valor Total:</h2>
                    <span className="title3">{`R$ ${listTotalValue},00`}</span>
                </div>
                <p className="body">O valor se refere ao saldo</p>
            </div>
        </>
    )
}