const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const check = document.getElementById('check');
const x = document.getElementById('close');
let i = 0;

console.log(container3);

x.addEventListener('click', function() {
    typeNote();
})

check.addEventListener('click', function() {
    createNote();
});

function typeNote() {
    if (container3.style.display == 'none') {
        container3.style.display = 'block';
    } else {
        container3.style.display = 'none';
    }
}

function createNote() {
    const txtNote = document.getElementById('note-text').value;
    const noteText = document.getElementById('note-text');
    const node0 = document.createElement('div');
    const node1 = document.createElement('h1');

    node1.innerHTML = txtNote;
    node1.setAttribute('style', 'width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75);');
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

    node0.appendChild(node1);

    container2.insertAdjacentElement('beforeend', node0);
    typeNote();
    noteText.value = '';

    node0.addEventListener('mouseenter', function() {
        node0.style.transform = "scale(1.1)";
    })

    node0.addEventListener('mouseleave', function() {
        node0.style.transform = 'scale(1)';
    });

    node0.addEventListener('dblclick', function() {
        node0.remove();
    });
}

function margin() {
    const randomMargin = ['-5px', '1px', '5px', '10px', '15px', '20px'];

    return randomMargin[Math.floor(Math.random() * randomMargin.length)];
}

function rotate() {
    const randomRotate = ['rotate(3deg)', 'rotate(-3deg)', 'rotate(1deg)', 'rotate(-1deg)', 'rotate(-5deg)', 'rotate(-10deg)', 'rotate(10deg)'];

    return randomRotate[Math.floor(Math.random() * randomRotate.length)];
}

function color() {
    const randomColor = ['#c2ff3d', '#ff3de8', '#3dc2ff', '#04e022', '#bc83e6', '#ebb328'];

    if (i > randomColor.length - 1) {
        i = 0;
    }
    return randomColor[i++];
}