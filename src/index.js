import ReactDOM from 'react-dom';
import Header from './header.js';
import Body from './body.js';

function App() {
    return (
        <div className='body'>
            <Header />
            <Body />
        </div>
    )
}





ReactDOM.render(<App />, document.querySelector(".root"))