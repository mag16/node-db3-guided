const db = require('../data/db-config.js');


module.exports = {
    find,
    findById,
    findPosts,
    add,
    //update,
    //remove
}

function find() {
    return db('users');
}

function findById(id) {
    return db('posts as p')
        .join('users as u', 'u.id', 'p.user_id')
        .select('p.id', 'u.username', 'p.contents')
        .where({ user_id })
        .first();
}
