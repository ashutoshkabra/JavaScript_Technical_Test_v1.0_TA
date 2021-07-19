function ScopingTest() {
    var a = 1;
    const b = 2;
    let c = 3;
    if (b < 10) {
        var a = 10;
        const b = 11;
        let c = 12;
        console.log(a, b, c);
    }
    console.log(a, b, c);
    console.log(d, e);
    var d = 4;
    const e = 5;
}

ScopingTest();