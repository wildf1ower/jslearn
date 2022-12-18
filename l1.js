function tree(n) {
    let tree_width = n * 2 - 1;
    for (let i = n; i >= 1; i--) {
        let dot_numder = n - i + 1;
        let width = dot_numder * 2 - 1;
        let pad = Math.ceil((tree_width - width) / 2);
        let line = ' '.repeat(pad) + '* '.repeat(dot_numder);
        console.log(line);
    }

}

tree(10)
