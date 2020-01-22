import { openDB, deleteDB, wrap, unwrap } from 'idb'


async function doDatabaseStuff() {
  try {
    const db = await openDB('gih-reservations', 12, {
      upgrade(db: string, oldVersion: number, newVersion: number, transaction: number) {
        // …
        console.warn('upgrade', db, oldVersion, newVersion, transaction)
      },
      blocked() {
        // …
        console.warn('blocked')
      },
      blocking() {
        // …
        console.warn('blocking')
      },
      terminated() {
        // …
        console.warn('terminated')
      },
    });

    const tx = db.transaction('reservations');
    const store = tx.objectStore('reservations');
    const val = (await store.getAll()) || 0;

    // console.warn( unwrap(tx) )
  } catch(e) {
    // console.log(e.message)
  }

}



doDatabaseStuff()
