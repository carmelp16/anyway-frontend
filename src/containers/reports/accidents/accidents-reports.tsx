import React, { useState, useEffect, FC } from "react";

import CsvReader from "../../../data/readers/csv-reader";
import CsvParser from "../../../data/parsers/csv-parser";

import DataHandler from "../../../data/handlers/data-handler";

import { AccidentsTabs } from "./accidents-tabs";
import { DISTRICT, CITY, AccidentType } from "./accidents-types";

const reader = new CsvReader();
const parser = new CsvParser();
const handler = new DataHandler(reader, parser);

const AccidentsReports: FC = () => {
  const [data, setData] = useState<any>(null);
  const [tabsDisplayMode] = useState<string>("right");
  const [tabToComponent] = useState<Record<string, FC>>({});
  const [accidentsTypes] = useState<AccidentType[]>([DISTRICT, CITY]);

  useEffect(() => {
    async function getData() {
      const data = await handler.getData();
      setData(data);
    }

    if (data === null) {
      getData();
    }
  }, [data]);

  return (
    <AccidentsTabs
      displayMode={tabsDisplayMode}
      tabToComponent={tabToComponent}
      names={accidentsTypes}
    />
  );
};

export default AccidentsReports;
