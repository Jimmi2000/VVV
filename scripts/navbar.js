function gestisci_menu() {
    let obj_voci_menu = document.getElementById("voci_menu");
    let obj_burger = document.getElementById("burger");
    let obj_x = document.getElementById("x");
    if (obj_voci_menu.style.display == "none" || obj_voci_menu.style.display == "") { // se voci_menu è invisibile o non ho il dato
        obj_voci_menu.style.display = "block";// allora voci_menu diventa visibile
        obj_burger.style.display = "none"; // icona burger -->invisibile
        obj_x.style.display = "block"; // icona "X" --> visibile
    } else { // oppure se voci_menu non è invisibile, (perchè è già visibile come deduciano da sopra)
        obj_voci_menu.style.display = "none"; // voci_menu --> invisibile
        obj_burger.style.display = "block"; // icona burger -->visibile
        obj_x.style.display = "none";
    } // icona "X" --> invisibile
}
