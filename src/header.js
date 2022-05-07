
const ion = ['paper-plane-outline','compass-outline','heart-outline','person-outline']

function Header() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="separador"></div>
                    <img src="assets/img/logo.png" alt="description"/>
                </div>
                <div className="logo-mobile">
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>

                <div className="instagram-mobile">
                    <img src="assets/img/logo.png" alt="description"/>
                </div>

                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
                <div className="icones">
                    {ion.map((e, index)=><ion-icon key={index} name={e}></ion-icon>)}
                </div>
                <div className="icones-mobile">
                <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}


export default Header;