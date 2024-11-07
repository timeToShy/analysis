import { CSSProperties, DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from 'react';

const HORIZONTAL = 'horizontal'!;
const VERTICAL = 'vertical'!;

type SpaceDirection = typeof HORIZONTAL | typeof VERTICAL;

interface SpaceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  direction?: SpaceDirection;
  size?: number;
}

const flexDirectionByName: Record<SpaceDirection, CSSProperties['flexDirection']> = {
  [HORIZONTAL]: 'row',
  [VERTICAL]: 'column',
};

export const Space: FC<PropsWithChildren<SpaceProps>> = ({
                                                           direction = HORIZONTAL,
                                                           size = 4,
                                                           children,
                                                           style,
                                                           ...rest
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: flexDirectionByName[direction],
      gap: size,
      minHeight: 'fit-content',
      ...style,
    }}
    {...rest}>
    {children}
  </div>
);