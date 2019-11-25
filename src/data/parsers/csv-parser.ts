import Papa from "papaparse";
import IDataParser from "./i-data-parser";

class CsvParser implements IDataParser<string, any> {
  parseData: (input: string) => any = input => {
    const { data } = Papa.parse(input);
    return data;
  };
}

export default CsvParser;
