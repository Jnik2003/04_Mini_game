const board = document.querySelector('#board');

board.addEventListener('mouseover', draw);

const count = 460;

function generator(count){
	for(let i = 0; i < count; i++){
		let div = document.createElement('div')
		div.classList.add('square')
		board.append(div)
	}
}
generator(count)

function draw(e){
	if(e.target.classList.contains('square')){
		let color = getRandomColor();
		e.target.style.backgroundColor = `#${color}`
		e.target.style.boxShadow = `0 0 2px #${color}, 0 0 10px #${color}`
		setTimeout(() => {
			e.target.style.backgroundColor = `#1d1d1d`
			e.target.style.boxShadow = `0 0 2px #000`
		}, 500)
	}
}

function getRandomColor(){
	return Math.random().toString(16).slice(-6);
}
