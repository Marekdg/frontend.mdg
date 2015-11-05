//Voor het zichtbaarmaken van het 2e deel van het formulier
var forproject = document.querySelector('input[value="project"]');
var forstage = document.querySelector('input[value="stage"]');

var project = document.getElementById('project');
var stage = document.getElementById('stage');

forproject.onclick = function () {
    project.classList.add('show');
    stage.classList.remove('show');
}

forstage.onclick = function () {
    stage.classList.add('show');
    project.classList.remove('show');
}
