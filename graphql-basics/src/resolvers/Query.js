const Query = { 
    users(parent, args, { db }, info){
        if(!args.query) {
        return db.users
        }
        
        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    me() {
        return {
            id: 1729,
            name: 'Kani',
            age: 2,
            email: 'kani@mozhi.com'

        }
    },

    posts(parent, args, { db }, info) {
        if(!args.query) {
            return db.posts 
        }

        return db.posts.filter((post) => {
            const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
            const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
            return isBodyMatch || isTitleMatch
        
        })
    },
    comments(parent, args, { db }, info) {
        return db.comments
    }
}

export { Query as default}