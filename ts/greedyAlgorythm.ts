function Wrapper() {
    let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);
    const stations = {
        kone: new Set(["id", "nv", "ut"]),
        ktwo: new Set(["wa", "id", "mt"]),
        kthree: new Set(["or", "nv", "ca"]),
        kfour: new Set(["nv", "ut"]),
        kfive: new Set(["ca", "az"]),
    };
    let finalStations = new Set([]);

    let bestStation: string;

    while (statesNeeded.size > 0) {
        let statesCovered = new Set([]);
        for (let i in stations) {
            const covered = intersect(stations[i], statesNeeded);
            if (covered.size > statesCovered.size) {
                bestStation = i;
                statesCovered = covered;
            }
        }
        statesNeeded = deleteFromSet(statesNeeded, statesCovered);
        finalStations = addToSet(finalStations, bestStation);
    }
    console.log(finalStations);

    function intersect(setA, setB) {
        return new Set([...setA].filter((i) => setB.has(i)));
    }
    function deleteFromSet(setA, setB) {
        return new Set([...setA].filter((i) => !setB.has(i)));
    }
    function addToSet(setA, val) {
        return new Set([...setA, val]);
    }
}
export default Wrapper();
