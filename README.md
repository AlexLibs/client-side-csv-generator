client-side-csv-generator
=========================

Client side (Serverless) csv generator

# Usage Example:

http://jsbin.com/jajevo/1/

## Download csv file without server. Just pass data array and choose the file name:
 
    csvGenerator = new CsvGeneretor([['a', 'b', 'c'], ['', 1, 2]], 'my_csv.csv');
    csvGenerator.download(true);

## If you want to create the <a/> element:

    csvGenerator = new CsvGeneretor([['a', 'b', 'c'], ['', 1, 2]], 'my_csv.csv');
    csvGenerator.getLinkElement();

## If you want just to get href attribute of the link:

    csvGenerator = new CsvGeneretor([['a', 'b', 'c'], ['', 1, 2]], 'my_csv.csv');
    csvGenerator.getLinkElement(true);
