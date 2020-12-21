class HashTable {
  table = new Array(3);
  numItems = 0;
  //   loadFactor = this.numItems / this.table.length;

  resize = () => {
    // Doubles the size, refaactor to make it a prime number as well.
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = (key, value) => {
    // TODO: add logic to prevent duplicated from being entered
    this.numItems++;
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      // resize array
      this.resize();
    }
    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    if (!this.table[idx]) {
      return null;
    }
    return this.table[idx].find((x) => x[0] === key)[1];
  };
}

// Hash Function
function hashStringToInt(str, tableSize) {
  // Start hash with a prime number
  let hash = 17;

  for (let i = 0; i < str.length; i++) {
    hash = (13 * hash * str.charCodeAt(i)) % tableSize;
  }

  return hash;
}
