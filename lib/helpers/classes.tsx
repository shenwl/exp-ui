export const scopedClassMaker = (prefix: string) => {
  return function (name?: string) {
    return [prefix, name].filter(Boolean).join('_');
  }
};

