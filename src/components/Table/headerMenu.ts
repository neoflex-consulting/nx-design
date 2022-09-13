import React from "react";

export type HeaderSideProps = {
} & Record<string, unknown>;

export type HeaderSide = {
  name?: React.FC<HeaderSideProps>;
  props?: Omit<HeaderSideProps, 'onConfirm' | 'filterValue'>;
};
