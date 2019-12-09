import IDataReader from "./i-data-reader";

class CsvReader implements IDataReader {
  private csvShitUrl: string;

  constructor() {
    this.csvShitUrl = "http://localhost:5000/csv";
  }

  private readCsv: () => Promise<string> = () => {
    return new Promise(resolve => {
      const request = new XMLHttpRequest();
      request.open("GET", this.csvShitUrl, true);
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
