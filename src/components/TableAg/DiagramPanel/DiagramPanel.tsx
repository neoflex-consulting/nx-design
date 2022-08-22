import * as React from "react";
import {DiagramPanelProps} from "./helpers";
import './DiagramPanel.css';

export const DiagramPanel = React.forwardRef<HTMLDivElement, DiagramPanelProps>((props, ref) => {

  const diagramPanelRef = React.useRef<HTMLDivElement>(null);

  const {
    className,
    ...otherProps
  } = props;

  return (
    <div
    ref={diagramPanelRef}
    {...otherProps}
    >
      DiagramPanel
    </div>
  )

})
