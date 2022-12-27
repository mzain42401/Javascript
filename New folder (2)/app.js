function add() {
    var a = document.getElementById('ip')
    var b = document.createElement('li')
    var c = document.createTextNode(a.value)
    b.appendChild(c)
    b.setAttribute('class', 'xyz')
    var d = document.getElementById('ull')
    d.appendChild(b)
    a.value = ''
    // delete button
    var e = document.createElement("button")
    var f = document.createTextNode("DELETE")
    e.appendChild(f)
    b.appendChild(e)
    e.setAttribute('onclick', 'ss(this)')
    e.setAttribute('class', 'as')
    // edit button
    var g = document.createElement("button")
    var h = document.createTextNode("EDIT")
    g.appendChild(h)
    g.setAttribute('onclick', 'qq(this)')
    g.setAttribute('class', 'as')
    b.appendChild(g)


}

function ss(h) {

    h.parentNode.remove()

}




function qq(a) {
    var zz = a.parentNode.firstChild.nodeValue
    var ddd = prompt('ENTER YOUR EDIT TODO', zz)
    a.parentNode.firstChild.nodeValue = ddd
}

function zain() {
    ull.innerHTML = ''
}