import 'server-only'
export function calcRegion(country: string) {
  let region = "global";
  // let region = "egypt";

  if (country === "EG") {
    region = "egypt";
  } else if (["SA", "AE", "KW", "QA", "OM"].includes(country)) {
    region = "mena";
  }
  return region;
}
