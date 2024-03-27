export function snakeToCamel(str: string): string {
  return str.replace(/(?<snake>[-_]\w)/g, (g) => g.at(1)?.toUpperCase() ?? "");
}

export function snakeToPascal(str: string): string {
  const camel = snakeToCamel(str);
  if (camel.length === 0) {
    return camel;
  }
  return `${camel.at(0)?.toUpperCase() ?? ""}${camel.substring(1)}`;
}
