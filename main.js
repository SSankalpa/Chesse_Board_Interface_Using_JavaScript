const board = document.querySelector('.board');
const box = document.createElement('div');


for(let row = 0; row<8; row++){
    if(row%2 == 0){
        for(let columns = 0; columns<8; columns++){
            let boxColor = columns%2 == 0? 'white':'black';
            const box = document.createElement('div');
            box.style.width = board.clientWidth/8 +'px';
            box.style.height = board.clientHeight/8 +'px';
            box.style.backgroundColor = boxColor;

            board.append(box);

        }
    }else{
            for (let columns = 0; columns < 8; columns++) {
                let boxColor = columns % 2 == 0 ? "black" : "white";
                const box = document.createElement("div");
                box.style.width = board.clientWidth / 8 + "px";
                box.style.height = board.clientHeight / 8 + "px";
                box.style.backgroundColor = boxColor;

                board.append(box);
            }
    }
}