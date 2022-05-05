import ReactDOM from 'react-dom';
import Top from './top';
import Content from './content';
import Footer from './footer';

function app(){
    return (
        <body>
            <Top/>
            <Content/>
            <Footer/>
        </body>
    )
}


ReactDOM.render(app(), document.querySelector(".root"))