const request = global.indexedDB.open('library', 1);

request.onupgradeneeded = function () {
  const db = request.result;
  const storeBooks = db.createObjectStore('books', { keyPath: 'isbn' });
  const storeReaders = db.createObjectStore('e-readers', { keyPath: 'ean' });

  storeBooks.createIndex('by_title', 'title', { unique: true });
  storeReaders.createIndex('by_title', 'title', { unique: true });
  storeReaders.createIndex('by_maker', 'maker', { unique: false });

  // Books
  storeBooks.put({ title: 'Quarry Memories', author: 'Fred', isbn: 123456 });
  storeBooks.put({ title: 'Water Buffaloes', author: 'Fred', isbn: 234567 });
  storeBooks.put({ title: 'Bedrock Nights',  author: 'Barney', isbn: 345678 });

  // E-Readers
  storeReaders.put({ title: 'Kindle Wi-fi', maker: 'Amazon', ean: 1234567891234 });
  storeReaders.put({ title: 'Kindle 4G', maker: 'Amazon', ean: 4321987654321 });
  storeReaders.put({ title: 'Lev Wi-fi', maker: 'Saraiva', ean: 4321432198765 });
  storeReaders.put({ title: 'Lev 4G', maker: 'Saraiva', ean: 1234123456789 });
};
