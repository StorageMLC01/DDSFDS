function renderizarMii() {
    var inputEl = document.getElementById('idInput');
    var usuario = inputEl.value;
    var pretendoBox = document.getElementById('pretendoCheck');
    var imgElement = document.getElementById('miiImagen');
    var loaderText = document.getElementById('cargandoTexto');

    // Limpieza total para Wii U
    usuario = usuario.replace(/^\s+|\s+$/g, '').replace(/(\r\n|\n|\r)/gm, "");

    if (usuario === "") {
        alert("Escribe un PNID valido");
        return;
    }

    imgElement.style.display = "none";
    loaderText.style.display = "block";
    loaderText.innerHTML = "Conectando...";

    var url = "https://mii-unsecure.ariankordi.net/miis/image.png?nnid=" + encodeURIComponent(usuario) + "&type=face&width=270";
    
    if (pretendoBox.checked) {
        url = url + "&api_id=1";
    }

    imgElement.onload = function() {
        loaderText.style.display = "none";
        imgElement.style.display = "inline-block";
    };

    imgElement.onerror = function() {
        loaderText.innerHTML = "Error: Mii no encontrado";
        imgElement.style.display = "none";
    };

    imgElement.src = url;
}