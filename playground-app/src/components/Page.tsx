import { Link } from 'react-router-dom'

interface Props {
    render: React.ReactNode
}

const Page = ({render: element} : Props) => {

    return <>
        <h1>Examples</h1>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/context'>Context API</Link></li>
            </ul>
        </nav>
        {element}
    </>
}

export default Page