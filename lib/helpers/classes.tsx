export const scopedClassMaker = (prefix: string) => {
  return function (name?: string) {
    return [prefix, name].filter(Boolean).join('_');
  }
};

export const classNames = (...names: (string | undefined)[]) => {
  return names.filter(Boolean).join(' ');
}
