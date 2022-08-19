setTimeout (function() {
    try {
        noSuchVariable;
    } catch {
        console.log("Error is captured!");
    }
}, 1000);

