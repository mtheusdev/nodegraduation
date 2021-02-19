class Table {
    constructor(arr) {
        this.header = arr[0];
        arr.shift(); // removi o arr[0]
        this.rows = arr;
    }

    get RowCount() {
        return this.rows.length
    }

    get ColCount() {
        return this.header.length
    }

}

module.exports = Table;