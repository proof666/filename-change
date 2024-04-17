export const prefixesMap = {
  "-container.": ".container.",
  "-query.": ".query.",
  "-mutation.": ".mutation.",
  "-unit.": ".unit.",
  "-test.": ".test.",
  "-story.": ".story.",
  "-types.": ".types.",
};

export function applyPrefixes(input: string): string {
  let result = input;
  Object.entries(prefixesMap).forEach(([key, value]) => {
    result = result.replace(key, value);
  });
  return result;
}
