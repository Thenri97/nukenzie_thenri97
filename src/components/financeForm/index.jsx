import styles from "./styles.module.scss";

export const FinanceForm = ({posts,setPosts,description,setDescription,value,setValue,operation,setOperation}) => {
       
    function gerarIdUnico() {
        const numeroAleatorio = Math.floor(Math.random() * 10000);
        const timestamp = new Date().getTime();
        const idUnico = `id-${timestamp}-${numeroAleatorio}`;
        return idUnico;
    }

    const newData = () => {

        const data = {
            id: gerarIdUnico(),
            description: description,
            value: value,
            operation: operation
        }
        if (data.description && data.value != "") {
            setPosts([...posts, data]);
            setDescription = ("");
            setValue = ("");
        }
    };

    return (
        <>
            <div className="form__container">
                <form className={styles.financeForm}
                    onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="description" className="body">Descrição</label>
                        <input
                            className="inputDescription"
                            name="description"
                            required type="text"
                            placeholder="Digite aqui sua descrição"
                            onChange={(e) => setDescription(e.target.value)}
                            onMouseEnter={(e) => setDescription(e.target.value = "")}
                        />
                        <span className="body">Ex: Compra de roupas</span>
                    </div>
                    <label htmlFor="value" className="body">Valor (R$)</label>
                    <input
                        className="inputValue"
                        name="value"
                        required type="number"
                        placeholder="Digite o valor"
                        onChange={(e) => setValue(e.target.value)}
                        onMouseEnter={(e) => setValue(e.target.value = "")} />

                    <label htmlFor="valueType" className="body">Tipo de valor</label>
                    <select
                        name="valueType"
                        id="valueType"
                        onChange={(e) => setOperation(e.target.value)}>
                        <option value="Entrada">Entrada</option>
                        <option value="Saida">Saida</option>
                    </select>
                    <button id="btn"
                        className="btn"
                        onClick={() => newData()}  
                    >Inserir Valor
                    </button>
                </form>
            </div > 
        </>
    )
}