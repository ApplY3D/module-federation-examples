/* if react import will be removed,
  webpack federation module will will not be able to find React:
  > Uncaught ReferenceError: React is not defined
*/
import React from 'react';
import { FC } from 'react';

const elementStyle = {
  padding: '16px',
  margin: '2px',
  borderRadius: '8px',
  backgroundColor: '#61dafb',
  border: '3px solid rgba(0, 0, 0, 0.6)',
};

interface Props {
  title?: string;
  onHeaderClick?: (msg: string) => void;
}

export const Header: FC<Props> = ({ title = '', onHeaderClick }) => {
  return (
    <div
      onClick={onHeaderClick ? () => onHeaderClick('react clicked') : undefined}
      className='react-header'
      style={elementStyle}
    >
      React App {title}
    </div>
  );
};
