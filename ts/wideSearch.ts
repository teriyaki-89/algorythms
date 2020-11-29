(function Wrapper() {
    const graph: { [key: string]: string[] } = {
        you: ["alice", "bob", "claire"],
        bob: ["anuj", "peggy"],
        alice: ["peggy"],
        claire: ["thom", "johny"],
        anuj: [],
        peggy: [],
        thom: [],
        johny: [],
    };

    const queue = [];
    const searched = [];
    const entries = Object.entries(graph);
    let counter: number = 0;
    entries[0][1].map((item) => queue.push(item));
    counter++;
    while (queue.length) {
        const name = queue.shift();
        if (!searched.filter((item) => item == name).length) {
            searched.push(name);
            if (isSeller(name)) {
                console.log(name);
                return name;
            } else {
                graph[name].map((item) => {
                    if (!queue.find((i) => i == item)) queue.push(item);
                });
            }
        }
    }

    function isSeller(name) {
        return name.slice(-1) == "m";
    }
})();
