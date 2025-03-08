export function PrimeBtnShow({ baseColor, colorMap }) {
  return (
    <button
      className={`${colorMap.bg[baseColor]["600"]} ${colorMap.hover[baseColor]["700"]} text-white py-2 px-4 rounded-md transition-colors`}
    >
      Primary Button
    </button>
  );
}

export function PrimeBtn({ bgColor }) {
  return (
    <button
      className={`${bgColor} hover:${bgColor.replace(
        /\d+/,
        (match) => parseInt(match) + 100
      )} ${
        parseInt(bgColor.match(/\d+/)[0]) <= 500 ? "text-black" : "text-white"
      } py-2 px-4 rounded-md transition-colors`}
    >
      Primary Button
    </button>
  );
}

// TODO: Secondary Showcase Button component
export function SecBtnShow({ baseColor, colorMap }) {
  return (
    <button
      className={`${colorMap.bg[baseColor]["100"]} ${colorMap.text[baseColor]["800"]} ${colorMap.hover[baseColor]["200"]} py-2 px-4 rounded-md transition-colors`}
    >
      Secondary Button
    </button>
  );
}
// TODO: Secondary Button component

export function SecBtn({ bgColor, textColor }) {
  const text = bgColor.replace("bg", "text");
  const bg = bgColor.replace("bg", "border");
  return (
    <button
      className={`${bgColor} hover:${bgColor.replace(
        /\d+/,
        (match) => parseInt(match) + 100
      )} ${text} py-2 px-4 rounded-md border-none transition-colors`}
    >
      Secondary Button
    </button>
  );
}

// TODO: Outline Showcase Button component
export function OutlineBtnShow({ baseColor, colorMap }) {
  return (
    <button
      className={`border ${colorMap.border[baseColor]["500"]} ${colorMap.text[baseColor]["600"]} ${colorMap.hover[baseColor]["50"]} py-2 px-4 rounded-md transition-colors`}
    >
      Outline Button
    </button>
  );
}

export function OutlineBtn({ bgColor, textColor, borderColor = textColor }) {
  return (
    <button
      className={`bg-transparent hover:${bgColor} border ${borderColor} ${textColor}  py-2 px-4 rounded-md transition-colors`}
    >
      Outline Button
    </button>
  );
}

export function Button({ bgColor, children, onClick, classes }) {
  return (
    <button
      className={`bg-${bgColor} hover:bg-${bgColor.replace(
        /\d+/,
        (match) => parseInt(match) + 100
      )} ${
        parseInt(bgColor.match(/\d+/)[0]) <= 500 ? "text-black" : "text-white"
      } py-2 px-4 rounded-md transition-colors font-semibold   ${classes}`}
      onClick={onClick}
    >
      {children ? children : "Primary Button"}
    </button>
  );
}
