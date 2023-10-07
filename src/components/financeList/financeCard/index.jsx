import styles from "./styles.module.scss";

export const FinanceCard = ({ posts, operation, value, additionalClass, description, id }) => {

    return (
        <>
            <div className="card__container">
                <li key={id} id={id} className={`${styles.card} ${additionalClass}`}>
                    <div className="cardInfo__container">
                        <div>
                            <h2>{description} </h2>
                            <span className="body">{operation}</span>
                        </div>
                        <div className="cardValue__container">
                            <p className="body">{`R$ ${value},00`}</p>
                            <button onClick={() => posts(id)}>Excluir</button>
                        </div>
                    </div>
                </li>
            </div>
        </>
    )
}