type propType = any;

export const shouldForwardProp =
  (propsNames: propType[]) =>
  (prop: propType): boolean =>
    !propsNames.includes(prop);

export const throwProp =
  <P extends object = {}>(key: keyof P) =>
  (props: P) =>
    props[key];
