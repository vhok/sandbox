import { createContext, useState } from 'react'
import ChildComponent from './ChildComponent'
import { exampleContext } from './contexts'

const Context = () => {
    const [ value, setValue ] = useState(0)

    return (
    <exampleContext.Provider value={{ value, setValue }}>
        <h2>Context</h2>
        <ChildComponent />
    </exampleContext.Provider>)
}

export default Context