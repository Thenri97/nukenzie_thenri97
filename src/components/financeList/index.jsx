import styles from "./styles.module.scss";
import { FinanceCard } from "./financeCard";





export const FinanceList = ({ posts, setPosts}) => {
  
    function descriptionUperCase(string) {
        if (string.length === 0) {
            return string;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleRemovePosts = (id) => {

        const newList = posts.filter((post) => post.id !== id);
        setPosts(newList);
    };

    return (
        <>
            
                <div className={styles.financeList}>

                    <div className="financeResume__container">
                        <h2>Resumo Financeiro</h2>
                        {posts.length < 1 ? <p className={`${styles.message} ${"title2"}`}>Você ainda não possui nenhum lançamento</p> : ""}
                    </div>
                    <ul>
                        {posts.map((post) => {

                            return <FinanceCard
                                key={post.id}
                                id={post.id}
                                lista={posts}
                                description={descriptionUperCase(post.description)}
                                value={post.value}
                                operation={post.operation}
                                additionalClass={post.operation === "Saida" ? "outgo" : ""}
                                posts={handleRemovePosts}
                                setPosts={setPosts}
                            />;
                        })}

                    </ul>
                </div>
            
        </>
    )
}