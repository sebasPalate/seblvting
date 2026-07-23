const MARK_PATH =
  "M309.038 0.331329C211.538 149.248 206.038 151.248 375.038 162.748C175.038 183.748 199.538 170.748 64.0378 345.248C166.038 181.248 190.538 177.248 0.0378418 162.748C223.362 159.418 213.038 108.831 309.038 0.331329Z";

export function SeblvtingMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 376 346"
      {...props}
    >
      <path d={MARK_PATH} fill="currentColor" />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 376 346">
    <path fill="${color}" d="${MARK_PATH}"/>
  </svg>`;
}
