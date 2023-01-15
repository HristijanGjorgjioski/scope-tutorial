console.log('----- SCOPE -----');
// PARENT

const globalVar = 5; 
/*
    globalna promenliva 
    moze da ja pristapime nasekade vo kodot
*/

// parent function
function func() {
    console.log(globalVar, '<== globalVar');
    const localVar = 10;
    /*
        lokalna promenliva 
        moze da ja pristapime tamu kade sto e definirana
    */
    console.log(localVar, '<== localVar');

    // child function
    function func1 () {
        const func1Var = 15;
        console.log(func1Var, '<== func1Var');
        console.log(localVar, '<== localVar - inside');
        console.log(globalVar, 'inside')
    }
    func1();
}

func();
