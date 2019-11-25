import IDataReader from "../readers/i-data-reader";
import IDataParser from "../parsers/i-data-parser";

interface IDataHandler<DataType> {
  reader: IDataReader;

  parser: IDataParser<string, DataType>;

  getData: () => Promise<DataType>;
}

export default IDataHandler;
