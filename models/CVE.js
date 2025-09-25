let db;

function setDatabase(database) {
  db = database;
}

function getCVECollection() {
  if (!db) throw new Error('Database not initialized');
  return db.collection('cves'); // db collection
}

module.exports = {
  setDatabase,
  getCVECollection
};
