import IDataHandler from "./i-data-handler";
import IDataReader from "../readers/i-data-reader";
import IDataParser from "../parsers/i-data-parser";

class DataHandler implements IDataHandler<any> {
  reader: IDataReader;
  parser: IDataParser<string, any>;

  constructor(reader: IDataReader, parser: IDataParser<string, any>) {
    this.reader = reader;
    this.parser = parser;
  }

  getData: () => Promise<any> = async () => {
    const rawContent = await this.reader.readData();
    return this.parser.parseData(rawContent);
  };
}

export default DataHandler;
