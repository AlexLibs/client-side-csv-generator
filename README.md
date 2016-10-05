Client side (Serverless) csv generator
=========================


## Dependencies:
None

## Supported browsers:
http://caniuse.com/#feat=download

## Usage Example:

http://jsbin.com/bafobowaji/1/

### Download csv file without server. Just pass data array and choose the file name:
 
    csvGenerator = new CsvGenerator([['a', 'b', 'c'], ['', 1, 2]], 'my_csv.csv');
    csvGenerator.download(true);

### If you want to create the <a/> element:

    csvGenerator = new CsvGenerator([['a', 'b', 'c'], ['', 1, 2]], 'my_csv.csv');
    csvGenerator.getLinkElement();

### If you want just to get href attribute of the link:

    csvGenerator = new CsvGenerator([['a', 'b', 'c'], ['', 1, 2]], 'my_csv.csv');
    csvGenerator.getLinkElement(true);

### Formatting options

    // Semi colon separated
    csvGenerator = new CsvGenerator([['a', 'b', 'c'], ['', 1, 2]], 'my_csv.csv', ';'); 

    // Semi colon separated, all cells quoted
    csvGenerator = new CsvGenerator([['a', 'b', 'c'], ['', 1, 2]], 'my_csv.csv', ';', true); 

## Changes LOG:
Version v2 (tag v2): get rid of jQuery from deps (thanks to [Denis Lukov's](https://github.com/NeXTs) contribution)
