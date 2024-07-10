/**
 *
 * {
 *     "A": true
 *
 * }
 * */

class Graph00 {


    constructor() {
        this.adjacencyList = {};
    }

    depthFirstRecursiveTraversal2(start) {
        const result = [];
        const visited = {};
        const dfs = (vertex) => {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        };
        dfs(start);
        return result;
    }

    depthFistRecursiveTraversal(start) {
        const results = [];
        const visited = {};

        const adjacencyList = this.adjacencyList;


        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;


            // is undefined because the function dfs declared inside the
            // // depthFirstRecursiveTraversal is causing `this` to be undefined. ;
            // Because the dfs function is not binded to any specific object
            // but rather the context of its immediate lexical surroundings,

            results.push(vertex);
            adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            })
        })(start);

        return results;
    }
}

