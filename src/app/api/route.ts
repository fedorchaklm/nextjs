export async function GET() {
    // const user = [{name: 'Luba', age: 36}, {name: "Ann", age: 16}];
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
    return Response.json(todos);
}