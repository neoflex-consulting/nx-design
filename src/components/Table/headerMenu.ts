import React from "react";

export type HeaderSideProps = {
  // onConfirm: (value: unknown) => void;
  // onCancel: () => void;
  // filterValue?: unknown;
} & Record<string, unknown>;

export type HeaderSide = {
  name: React.FC<HeaderSideProps>;
  props?: Omit<HeaderSideProps, 'onConfirm' | 'filterValue'>;
};
