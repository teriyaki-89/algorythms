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
        in: "None",
    };
    const processed = [];

    console.log(345);
}
export default Wrapper();
