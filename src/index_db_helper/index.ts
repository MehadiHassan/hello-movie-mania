import { openDB } from 'idb/with-async-ittr.js';

export const db = openDB('MovieManiaDB', 1, {
    upgrade(db) {
        // Create a store of objects
        const store = db.createObjectStore('watchList', {
            // The 'id' property of the object will be the key.
            keyPath: 'id',
            // If it isn't explicitly set, create a value by auto incrementing.
            autoIncrement: true,
        });
        store.createIndex('id', 'id');
    },
});
