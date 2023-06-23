const users = [ {

    id: '1',
    name: "Dhanasekar",
    email: 'ds@exampl.com'    
}, 
{
    id: '2',
    name: 'Kanimozhi',
    email: 'kani@example.com',
    age: 2
},
{
    id: '3',
    name: 'Kavipriya',
    email: 'kavi@example.com',
    age: null
}
]

const posts = [ {

    id: '10',
    title: "GraphQL 101",
    body: "This is body of dummy post one",
    published: true,
    author: '1'
}, 
{
    id: '11',
    title: "GraphQL 201",
    body:"This is body of dummy post two",
    published: false,
    author: '1'
},
{
    id: '12',
    title: "GraphQL 301",
    body:"This is body of dummy post three",
    published: false,
    author: '2'

}
]

const comments = [
{
    id: '21',
    text: "This is an amazing post first time",
    author: "2",
    post: "12"
},
{
    id: '22',
    text: "This is an amazing post second time",
    author: '1',
    post: "11"
},
{
    id: '23',
    text: "This is an amazing post third time",
    author: '3',
    post: "10"
},
{
    id: '24',
    text: "This is an amazing post fourth time",
    author: '2',
    post: "11"
},
]

const db = {
    users,
    posts,
    comments
}

export { db as default}