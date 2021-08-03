import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { Button } from "@material-ui/core";

type heightProps = {
  
  mouseOver: () => void;
  mouseOut: () => void;
  mouseClick: () => void;
  hovering: boolean;
  colorState: boolean;
};

export const Info = ({
  mouseOut,
  mouseOver,
  mouseClick,
  hovering,
  colorState,
}: heightProps) => {
  return (
    <div>
      {hovering === true ? (
        <Tooltip title="Please click to change colour" placement="top">
          <Button
            variant="outlined"
            color={colorState ? "secondary" : "primary"}
            onClick={mouseClick}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          >
            Red Colour
          </Button>
        </Tooltip>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        >
          black colour
        </Button>
      )}
    </div>
  );
};
