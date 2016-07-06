function CsvGenerator(dataArray, fileName, separator, addQuotes) {
    this.dataArray = dataArray;
    this.fileName = fileName;
    this.separator = separator || ',';
    this.addQuotes = !!addQuotes;

    if (this.addQuotes) {
        this.separator = '"' + this.separator + '"';
    }

    this.getDownloadLink = function () {
        var separator = this.separator;
        var addQuotes = this.addQuotes;

        var rows = this.dataArray.map(function (row) {
            var rowData = row.join(separator);

            if (rowData.length && addQuotes) {
                return '"' + rowData + '"';
            }

            return rowData;
        });

        var type = 'data:text/csv;charset=utf-8';
        var data = rows.join('\n');

        if (typeof btoa === 'function') {
            type += ';base64';
            data = btoa(data);
        } else {
            data = encodeURIComponent(data);
        }

        return this.downloadLink = this.downloadLink || type + ',' + data;
    };

    this.getLinkElement = function (linkText) {
        var downloadLink = this.getDownloadLink();
        return this.linkElement = this.linkElement || $('<a>' + (linkText || '') + '</a>', {
            href: downloadLink,
            download: this.fileName
        });
    };

    // call with removeAfterDownload = true if you want the link to be removed after downloading
    this.download = function (removeAfterDownload) {
        this.getLinkElement().css('display', 'none').appendTo('body');
        this.getLinkElement()[0].click();
        if (removeAfterDownload) {
            this.getLinkElement().remove();
        }
    };
}
