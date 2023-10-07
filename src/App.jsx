import { useState } from 'react'
import { Header } from './components/header'
import { FinanceForm } from './components/financeForm'
import { DefaultTemplate } from './components/DefaultTemplate'
import { Total } from './components/total'
import { FinanceList } from './components/financeList'




function App() {
  const [posts, setPosts] = useState([]);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [operation, setOperation] = useState("Entrada");


  return (

    <DefaultTemplate>


      <section className='upperSection'>
        <FinanceForm
          posts={posts}
          setPosts={setPosts}
          description={description}
          setDescription={setDescription}
          value={value}
          setValue={setValue}
          operation={operation}
          setOperation={setOperation}
        />
        <div className='total__container'>
          <Total posts={posts} />
        </div>
      </section>

      <section className='downSection'>
        <FinanceList
          posts={posts}
          setPosts={setPosts}
          setValue={setValue}
          setDescription={setDescription}
          description={description}
          value={value}
        />
      </section>
    </DefaultTemplate>
  )
}

export default App
