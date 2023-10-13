function toggleMode() {
  /*se na lista de classe do html  tiver o caontainer chamado light */
  //  if (html.classList.contains("light")) {
  /*se tiver na lista de classe iremos pegar o html e removeremos o light */
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add("light")
  //  }

  /*podemos simplificar usando uma propriedadde chamada toggle do proprio js ou seja essa função realizara toda a lógica a cima */
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  html.classList.toggle("light")
  /************************************************/
  if (html.classList.contains("light")) {
    /*modificar e alterar o atributo , sendo o primeiro uma string */
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  //pega a tag img

  //se tiver light mode , adicionar a imagem light
  //substituir a image

  //se não tiver light mode, manter a imagen normal
}
