import React, { FC, useCallback } from "react";
import { Button } from "antd";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";

interface GoToProps {
  text: string;
  route: string;
}

const GoTo: FC<GoToProps & RouteComponentProps> = props => {
  const { text, route, history } = props;

  const goToRoute = useCallback(() => {
    history.push(route);
  }, [route, history]);

  return (
    <Button type="primary" onClick={goToRoute}>
      {text}
    </Button>
  );
};

export default withRouter(GoTo);
