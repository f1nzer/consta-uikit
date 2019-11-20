import React from 'react';

import Button from '../../../Button';

type Props = {
  icon: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onBlur?: FocusEventHandler<HTMLElement>;
  tabIndex?: number;
  className?: string;
};

const IconButton: React.FC<Props> = ({
  icon,
  onClick,
  onBlur,
  tabIndex,
  className,
  ...restProps
}) => {
  return (
    <Button
      type="button"
      wpSize="m"
      view="clear"
      form="round"
      iconOnly={true}
      onClick={onClick}
      onBlur={onBlur}
      tabIndex={tabIndex}
      className={className}
      {...restProps}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
