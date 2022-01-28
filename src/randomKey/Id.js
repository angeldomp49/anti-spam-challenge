export const Id = {
    generate: () => {
        let n = Math.random();
        let n1000 = n * 1000;
        let rounded = Math.round(n1000);
        return rounded;
    }
};

export default Id;