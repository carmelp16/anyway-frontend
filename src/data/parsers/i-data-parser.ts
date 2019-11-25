export default interface IDataParser<TInput, TOutput> {
  parseData: (input: TInput) => TOutput;
}
