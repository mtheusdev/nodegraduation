class Processor {
    static Process(data) {
        var a = data.split("\r\n")
        var rows = [];
        a.forEach(row => {
            var arry = row.split(",")
            rows.push(arry);
        })

        return (rows);
    }
}

module.exports = Processor