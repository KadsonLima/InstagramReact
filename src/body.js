const person = [
    {
        img: 'assets/img/9gag.svg',
        name: '9gag'
    },
    {
        img: 'assets/img/meowed.svg',
        name: 'meowed'
    },
    {
        img: 'assets/img/barked.svg',
        name: 'barked'
    },
    {
        img: 'assets/img/nathanwpylestrangeplanet.svg',
        name: 'nathanwpylestrangeplanet'
    },
    {
        img: 'assets/img/wawawicomics.svg',
        name: 'wawawicomics'
    },
    {
        img: 'assets/img/respondeai.svg',
        name: 'respondeai'
    },
    {
        img: 'assets/img/filomoderna.svg',
        name: 'filomoderna'
    },
    {
        img: 'assets/img/memeriagourmet.svg',
        name: 'memeriagourmet'
    }


]

const post = [
    {
        img: 'assets/img/9gag.svg',
        name: '9gag',
        content: 'assets/img/dog.svg',
        texto: 'Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>'
    },
    {
        img: 'assets/img/meowed.svg',
        name: 'meowed',
        content: 'assets/img/dog.svg',
        texto: 'Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>'
    },
    {
        img: 'assets/img/barked.svg',
        name: 'barked',
        content: 'assets/img/dog.svg',
        texto: 'Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>'
    },
    {
        img: 'assets/img/nathanwpylestrangeplanet.svg',
        name: 'nathanwpylestrangeplanet',
        content: 'assets/img/dog.svg',
        texto: 'Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>'
    },
    {
        img: 'assets/img/wawawicomics.svg',
        name: 'wawawicomics',
        content: 'assets/img/dog.svg',
        texto: 'Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>'
    },
    {
        img: 'assets/img/respondeai.svg',
        name: 'respondeai',
        content: 'assets/img/dog.svg',
        texto: 'Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>'
    },
    {
        img: 'assets/img/filomoderna.svg',
        name: 'filomoderna',
        content: 'assets/img/dog.svg',
        texto: 'Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>'
    },
    {
        img: 'assets/img/memeriagourmet.svg',
        name: 'memeriagourmet',
        content: 'assets/img/dog.svg',
        texto: 'Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>'
    }


]



function Stories() {
    return (
        <div class="stories">
            {person.map(e => <div class="story"><div class="imagem" Alt="back"> <img Alt="person" src={e.img} /> </div>
                <div class="usuario">
                    {e.name}
                </div>
            </div>)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Post(){
    return (
        <div className="posts">
            {post.map(e=><div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={e.img} />
                  {e.name}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={e.content} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src="assets/img/respondeai.svg" />
                  <div class="texto">
                    {e.texto}
                  </div>
                </div>
              </div>
            </div>
            )}
            
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
        </div>
    )
}


export default Body;