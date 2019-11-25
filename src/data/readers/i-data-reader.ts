interface IDataReader {
  readData: () => Promise<string>;
}

export default IDataReader;
