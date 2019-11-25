import React, { useState, useEffect, FC } from "react";

import CsvReader from "../../../data/readers/csv-reader";
import CsvParser from "../../../data/parsers/csv-parser";

import DataHandler from "../../../data/handlers/data-handler";

const reader = new CsvReader();
const parser = new CsvParser();
const handler = new DataHandler(reader, parser);

const AccidentsReports: FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function getData() {
      const data = await handler.getData();
      setData(data);
    }

    if (data === null) {
      getData();
    }
  }, [data]);

  return null;
};

export default AccidentsReports;
