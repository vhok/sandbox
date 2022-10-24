import { useContext, useState } from 'react'
import { exampleContext } from './contexts'

const ChildComponent = () => {
    /**
     * In this example, ChildComponent demonstrates Context's ability to access the
     * state of the parent without passing them as props. In this case, the child
     * is only 1 level below the parent, but, has the ability to extend arbitrarily
     * deep in the React component tree.
     */
    const { value, setValue } = useContext(exampleContext)
    const [ numberFieldValue, setNumberFieldValue ] = useState(value)

    return <>
        <h3>Child Component</h3>
        <p>{`The context value is: ${value}`}</p>
        <label htmlFor="number">number:</label>
        <input 
            type="number" 
            name="number" 
            id="number" 
            value={numberFieldValue} 
            onChange={(event) => setNumberFieldValue(parseInt(event.target.value))} 
        />
        <button onClick={() => {setValue(numberFieldValue)}}>Confirm</button>
    </>
}

export default ChildComponent