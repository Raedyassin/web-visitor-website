import 'server-only'
export function calcRegion(country: string | undefined) {
  let region = "global";
  // let region = "egypt";
  if (!country) return region;

  if (country === "EG") {
    region = "egypt";
  } else if (["SA", "AE", "KW", "QA", "OM"].includes(country)) {
    region = "mena";
  }
  return region;
}
