function setListener (id, event, func) {
    var element = document.getElementById(id);
    element.addEventListener(event, func);
}

var changeLogic = function (event) {
    alert("Everything is changing!!!");
    alert(event);
};

setListener('change-btn', 'click', changeLogic);

