import { person } from './arrays/person';
import { post } from './arrays/post';
import { sugest } from './arrays/sugest';


function Stories() {
    return (
        <div className="stories">
            {person.map(e => <div className="story"><div className="imagem" alt="back"> <img alt="person" src={e.img} /> </div>
                <div className="usuario">
                    {e.name}
                </div>
            </div>)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Post() {
    return (
        <div className="posts">
            {post.map((e, index) => <div className="post" key={index}>
                <div className="topo">
                    <div className="usuario">
                        <img src={e.img} alt={e.img} />
                        {e.name}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div className="conteudo">
                    <img src={e.content} alt={e.content} />
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src="assets/img/respondeai.svg" alt="liked" />
                        <div className="texto">
                            Curtido por <strong>{e.texto[0]}</strong> e <strong>{e.texto[1]}</strong>
                        </div>
                    </div>
                </div>
            </div>
            )}

        </div>
    )
}

function SideBar() {
    return (
            <div className="sidebar">
                <div className="usuario">
                    <img src="assets/img/catanacomics.svg" />
                    <div className="texto">
                        <strong>catanacomics</strong>
                        Catana
                    </div>
                </div>
            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugest.map(e =>
                    <div className="sugestao">
                        <div className="usuario">
                            <img src={e.img} alt={e.img} />
                            <div className="texto">
                                <div className="nome">{e.name}</div>
                                <div className="razao">{e.razão}</div>
                            </div>
                        </div>

                        <div className="seguir">Seguir</div>
                        </div>
                    )}
                    <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
                </div>
                </div>
            
        
     )
}

function Footer(){
    return (
        <div class="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    )
}


function Body() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Post />
            </div>
            <Footer />
            <SideBar />
        </div>
    )
}


export default Body;