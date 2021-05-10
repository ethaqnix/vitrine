import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";

import { FunctionComponent } from "react";

type OwnProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  replace?: boolean;
};

const Portal: FunctionComponent<OwnProps> = ({
  id,
  children,
  className,
  replace,
}) => {
  const target = usePortal(id, {
    className,
    replace: replace === false ? false : true,
  });
  return createPortal(children, target);
};

export default Portal;
