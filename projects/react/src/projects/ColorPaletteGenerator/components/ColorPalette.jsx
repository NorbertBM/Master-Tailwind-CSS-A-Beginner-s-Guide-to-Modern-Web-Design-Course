export default function ColorPalette(
  key = { key },
  shade,
  bgColorClass,
  copyToClipboard,
  textColorClass,
  colorLabel,
  selectedColor
) {
  return (
    <div
      key={shade}
      className={`${bgColorClass} p-6 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105`}
      onClick={() => copyToClipboard(bgColorClass)}
    >
      <div className={`flex flex-col gap-1 ${textColorClass}`}>
        <span className="font-bold">{colorLabel}</span>
        <span className="text-sm opacity-80">
          {selectedColor === bgColorClass ? "Copied!" : "Click to copy"}
        </span>
      </div>
    </div>
  );
}
