export default function farsiDigits(entry = 0, split = 0, seperator = "٫") {
  let pattern = String.raw`\B(?=(\d{` + split + String.raw`})+(?!\d))`;
  let lookup = new RegExp(pattern, "g");
  let map = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return entry
    .toString()
    .replace(lookup, seperator)
    .replace(/[0-9]/g, function (w) {
      return map[+w];
    });
}
