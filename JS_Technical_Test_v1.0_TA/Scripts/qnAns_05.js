let ul = document.querySelector("ul");
let selectedLi;

ul.onclick = function (event) {

    // Get the clicked tag
    let target = event.target;

    // If not on A? Then return
    if (target.tagName !== 'A') return;

    newFunc(target, target.text);
}

function newFunc(node, id) {

    node.parentNode.classList.add('active');

    if (id === "Tab 1") {
        document.getElementById("tab-1").classList.add('active');
        document.getElementById("tab-2").classList.remove('active');
        document.getElementById("tab-3").classList.remove('active');

        var node2 = document.querySelector("a[href='#tab-2']");
        var node3 = document.querySelector("a[href='#tab-3']");

        node2.parentNode.classList.remove('active');
        node3.parentNode.classList.remove('active');

    } else if (id === "Tab 2") {
        document.getElementById("tab-2").classList.add('active');
        document.getElementById("tab-1").classList.remove('active');
        document.getElementById("tab-3").classList.remove('active');

        var node1 = document.querySelector("a[href='#tab-1']");
        var node3 = document.querySelector("a[href='#tab-3']");

        node1.parentNode.classList.remove('active');
        node3.parentNode.classList.remove('active');
    } else {
        document.getElementById("tab-3").classList.add('active');
        document.getElementById("tab-1").classList.remove('active');
        document.getElementById("tab-2").classList.remove('active');

        var node1 = document.querySelector("a[href='#tab-1']");
        var node2 = document.querySelector("a[href='#tab-2']");

        node1.parentNode.classList.remove('active');
        node2.parentNode.classList.remove('active');
    }
}