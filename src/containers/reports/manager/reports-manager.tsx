import React, { FC, useMemo } from "react";

import { AccidentsReports } from "../accidents";

const ACCIDENTS = "Accidents";

type ReportType = "Accidents";

const TypeToComponent: Record<ReportType, FC> = {
  [ACCIDENTS]: AccidentsReports
};

interface ReportsManagerProps {
  reportType: ReportType;
}

const ReportsManager: FC<ReportsManagerProps> = props => {
  const { reportType } = props;

  const selectedType = useMemo(() => {
    if (reportType === undefined) {
      return ACCIDENTS;
    }
    return reportType;
  }, [reportType]);

  const SelectedComponent = useMemo(() => TypeToComponent[selectedType], [
    selectedType
  ]);

  return <SelectedComponent {...props} />;
};

export default ReportsManager;
