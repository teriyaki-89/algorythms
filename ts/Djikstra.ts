function Wrapper() {
    const graph: { [key: string]: { [key: string]: number } } = {
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
    const processed = [];

    let node = findLowestCostNode(costs);
    while (node !== "none") {
        let cost: number = costs[node];
        let neighbours = graph[node];
        Object.keys(neighbours).map((n) => {
            let newCost = cost + neighbours[n];
            if (newCost < costs[n]) {
                costs[n] = newCost;
                parents[n] = node;
            }
        });
        processed.push(node);
        node = findLowestCostNode(costs);
    }

    console.log(costs);

    function findLowestCostNode(costs) {
        let lowestCost: number = Infinity;
        let lowestCostNode: string = "none";
        Object.entries(costs).map((item: {}) => {
            const isProcessed = processed.filter((pr) => pr == item[0]).length > 0 ? true : false;
            if (isProcessed) return;
            if (item[1] < lowestCost) {
                lowestCost = item[1];
                lowestCostNode = item[0];
            }
        });
        return lowestCostNode;
    }
}
export default Wrapper();
