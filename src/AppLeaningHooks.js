import React, {useState, useEffect, useMemo, useCallback} from 'react';

function App() {
    const [tarefas, setTarefas] = useState([]);

    const [input, setInput] = useState('');

    //quando for montado na tela
    useEffect(()=>{
        const tarefasStorage = localStorage.getItem('tarefas');
        if (tarefasStorage) {            
            setTarefas(JSON.parse(tarefasStorage));
        }
    },[]);

    //quando sofrer alteracao
    useEffect(()=>{
        localStorage.setItem('tarefas',JSON.stringify(tarefas));
    }, [tarefas]);

    //usando useCallback
    const handleAdd = useCallback(()=> {
        setTarefas([...tarefas,input]);
        setInput('');
    },[input, tarefas])

    //executa algo só no final de uma determinada acao
    const totalTarefas = useMemo(()=> tarefas.length,[tarefas]);

    return(
        <div>
            <h1>Hooks</h1>
            <ul>
                {
                    tarefas.map(tarefa => (
                        <li key={tarefa}>{tarefa}</li>
                    ))
                }
            </ul>
            <br/>
            <h2>Você tem {totalTarefas} tarefas!</h2>
            <br/>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button type="button" onClick={handleAdd}>Adicionar Tarefa</button>
        </div>
    );
}

export default App;