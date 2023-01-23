function cheessboard(a, b) {
    for (let r = 0; r < a; r++) {
        let line = "";
        for (let c = 0; c < b; c++) {
            line += (r + c) % 2 == 0 ? "#" : "_";
        }
        console.log(line);
    }
}

cheessboard(9, 9)
