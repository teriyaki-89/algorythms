function Wrapper() {
    /*
    const graph: { [key: string]: { [key: string]: number } } = {
        start: { a: 6, b: 2 },
        a: { fin: 1 },
        b: { a: 3, fin: 5 },
        fin: {},
    };
    const costs: { [key: string]: number } = {
        a: 6,
        b: 2,
        fin: Infinity,
    };
    const parents: { [key: string]: string } = {
        a: "start",
        b: "start",
        fin: "None",
    };
    */
    /*
    const graph: { [key: string]: { [key: string]: number } } = {
        start: { a: 5, b: 2 },
        a: { c: 4, d: 2 },
        b: { a: 8, d: 7 },
        c: { d: 6, fin: 3 },
        d: { fin: 1 },
        fin: {},
    };
    const costs: { [key: string]: number } = {
        a: 5,
        b: 2,
        c: Infinity,
        d: Infinity,
        fin: Infinity,
    };
    const parents: { [key: string]: string } = {
        a: "start",
        b: "start",
        c: "None",
        d: "None",
        fin: "None",
    };
    */
    const graph: { [key: string]: { [key: string]: number } } = {
        start: { a: 10 },
        a: { b: 20 },
        b: { fin: 30, c: 1 },
        c: { a: 1 },
        fin: {},
    };
    const costs: { [key: string]: number } = {
        a: 10,
        b: Infinity,
        c: Infinity,
        fin: Infinity,
    };
    const parents: { [key: string]: string } = {
        a: "start",
        b: "None",
        c: "None",
        fin: "None",
    };
    const processed = [];

    let node = findLowestCostNode(costs);
    while (node !== "none") {
        let cost: number = costs[node];
        let neighbours = graph[node];
        Object.keys(neighbours).map((n) => {
            const newCost = cost + neighbours[n];
            if (newCost < costs[n]) {
                costs[n] = newCost;
                parents[n] = node;
                console.log(costs);
            }
        });
        processed.push(node);
        node = findLowestCostNode(costs);
        //console.log(node);
    }

    console.log(costs);

    function findLowestCostNode(costs) {
        let lowestCost: number = Infinity;
        let lowestCostNode: string = "none";
        Object.entries(costs).map((item: {}) => {
            const isProcessed = processed.filter((pr) => pr == item[0]).length > 0 ? true : false;
            if (item[1] <= lowestCost && !isProcessed) {
                lowestCost = item[1];
                lowestCostNode = item[0];
            }
        });
        //debugger;
        return lowestCostNode;
    }
}
export default Wrapper();
