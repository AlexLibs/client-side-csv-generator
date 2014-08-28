function CsvGeneretor(dataArray, fileName){
    this.dataArray = dataArray;
    this.fileName = fileName;

    this.getDownloadLink = function(){
        return this.downloadLink = this.downloadLink || 'data:text/csv;charset=utf-8,' + escape(this.dataArray.map(function(row){return row.join(',')}).join('\n'));
    };

    this.getLinkElement = function(linkText){
        var downloadLink = this.getDownloadLink();
        return this.linkElement = this.linkElement || $('<a>' + (linkText || '') + '</a>', {
            href: downloadLink,
            download: this.fileName
        });
    };

    // call with removeAfterDownload = true if you want the link to be removed after downloading
    this.download = function(removeAfterDownload){
        this.getLinkElement().css('display', 'none').appendTo('body');
        this.getLinkElement()[0].click();
        if(removeAfterDownload){
            this.getLinkElement().remove();
        }
    };
}
