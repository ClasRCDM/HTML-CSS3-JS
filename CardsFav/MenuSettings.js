function modlvisibility(tag, visibility) {
    var tags = document.querySelectorAll(tag)
    var length = tags.length
    for (var index = 0; index < length; index++) {
        tags[index].style.display = visibility
    }
}
function shadowvisibility(typeshadow, shadow, tagshadow) {
    var shadows = document.querySelectorAll(tagshadow)
    var length = shadows.length
    if (typeshadow == "boxshadow") {
        for (var index = 0; index < length; index++) {
            shadows[index].style.boxShadow = shadow
        }
    } else if (typeshadow == "textshadow") {
        for (var index = 0; index < length; index++) {
            shadows[index].style.textShadow = shadow
        }
    }
}

function visibility() {
    var number = document.getElementById('number').checked
    var cart = document.getElementById('cart').checked
    var shadow = document.getElementById('shadow').checked
    var title = document.getElementById('title').checked

    if (number == true) {
        modlvisibility("fieldset p", "block")
    } else {
        modlvisibility("fieldset p", "none")
    }
    if (cart == true) {
        modlvisibility("fieldset label", "block")
    } else {
        modlvisibility("fieldset label", "none")
    }
    if (shadow == true) {
        shadowvisibility("boxshadow", "var(--shadow)", ".shadows")
        shadowvisibility("textshadow", "var(--shadow)", ".shadowsletter")
    } else {
        shadowvisibility("boxshadow", "var(--Noneshadow", ".shadows")
        shadowvisibility("textshadow", "var(--Noneshadow)", ".shadowsletter")
    }
    if (title == true) {
        modlvisibility("h1", "block")
    } else {
        modlvisibility("h1", "none")
    }
}
