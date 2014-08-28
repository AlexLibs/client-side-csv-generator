client-side-csv-generator
=========================

Client side (Serverless) csv generator

 Usage Example:

http://jsbin.com/jajevo/1/

Create a link or download csv file without server. Just pass data array and choose the file name:
 
    csvGenerator = new CsvGeneretor([['a', 'b', 'c'], ['', 1, 2]], 'my_csv.csv');
    csvGenerator.download(true);
