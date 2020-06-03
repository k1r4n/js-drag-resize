const element = document.getElementById('draggable');
const offset = {
    x: 0,
    y: 0,
};

element.ondragstart = (event) => {
    const {clientX, clientY} = event;
    const {x, y} = event.target.getBoundingClientRect();
    offset.x = clientX - x;
    offset.y = clientY - y;
}

element.ondragend = (event) => {
    const {clientX, clientY} = event;
    element.style.top = `${clientY - offset.y}px`;
    element.style.left = `${clientX - offset.x}px`;
}