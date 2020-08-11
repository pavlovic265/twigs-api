export const labelSchema = {
  id: { type: "string", format: "uuid" },
  color: {
    type: "string",
    pattern: getColorPattern(),
    minLength: 3,
    maxLength: 8,
  },
  value: { type: "string", minLength: 0 },
};

function getColorPattern(): string {
  return `(${getHexPattern()})|(^(${getAntColorPalette().join("|")})$)`;
}

function getHexPattern(): string {
  return "^#([0-9A-F]{3}|[0-9A-F]{6})$";
}

function getAntColorPalette(): string[] {
  return [
    "red",
    "volcano",
    "orange",
    "gold",
    "yellow",
    "lime",
    "green",
    "cyan",
    "blue",
    "geekblue",
    "purple",
    "magenta",
  ];
}
