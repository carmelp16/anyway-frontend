import IDataReader from "./i-data-reader";

class CsvReader implements IDataReader {
  private csvPath: string;

  constructor() {
    this.csvPath = "./query1.csv";
  }

  private readCsv: () => Promise<string> = () => {
    return new Promise(resolve => {
      const request = new XMLHttpRequest();
      request.open("GET", this.csvPath, true);
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
          if (request.status === 200 || request.status === 0) {
            const fileText: string = request.responseText;
            resolve(fileText);
          }
        }
      };
      request.send(null);
    });
  };

  readData: () => Promise<any> = async () => {
    try {
      const csvFile = await this.readCsv();
      return csvFile;
    } catch (error) {
      return null;
    }
  };
}

export default CsvReader;
