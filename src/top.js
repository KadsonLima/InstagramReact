export default function Top(){
    return(
        <header class="topo">
      <div class="top-desktop">
      <div class="left-top">
        <div class="esque">
        <ion-icon name="logo-instagram"></ion-icon>
        <div class="bar-vertic"></div>
        <img class="instagram" src="midia/logo.png" />
      </div>
        <input class="mid-top" type="text" placeholder="Pesquisar"/>
      </div>
      
      <div class="right-top">
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
    </div>
    <div class="top-mobile">
      <ion-icon name="logo-instagram"></ion-icon>
      <img class="instagram" src="midia/logo.png" />
      <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
    </header>
    )
}