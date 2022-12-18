function cheessboard(a, b) {
    for (let l = 1; l <= a; l++) {
        let p;
        if (l % 2 == 0) {
            p = "_#"; 
        } else {
            p = "#_";
        }
        let line = p.repeat(b / 2);
        console.log(line);
    }
}

cheessboard(8, 8)
