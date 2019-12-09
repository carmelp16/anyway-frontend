import Papa from "papaparse";
import IDataParser from "./i-data-parser";

class CsvParser implements IDataParser<string, any> {
  getPapaData: (input: string) => any[] = input => {
    const { data } = Papa.parse(input);
    return data;
  };

  parseData: (input: string) => any = input => {
    const dataFromPapa = this.getPapaData(input);
    const [dataKeys, ...restOfData] = dataFromPapa;

    return restOfData.map(dataItem => {
      return dataItem.reduce((result: any, value: any, index: number) => {
        const property = dataKeys[index];
        result[property] = value;
        return result;
      }, {});
    });
  };
}

export default CsvParser;
