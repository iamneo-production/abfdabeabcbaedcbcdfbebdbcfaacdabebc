const { MongoClient, ObjectID } = require('mongodb');

const dbName = 'mydatabase';
const url = 'mongodb://localhost:27017';

class User {
    static async create({ name, age, email }) {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        try {
            await client.connect();
            const db = client.db(dbName);
            const result = await db.collection('users').insertOne({ name, age, email });
            return result.ops[0];
        } finally {
            client.close();
        }
    }

    static async getAll() {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
        try {
            await client.connect();
            const db = client.db(dbName);
            const users = await db.collection('users').find().toArray();
            return users;
        } finally {
            client.close();
        }
    }
}

module.exports = User;
