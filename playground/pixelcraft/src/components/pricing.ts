import { siteContent } from "../content/site.js";

export function getPricing(tier: "monthly" | "annual") {
  return siteContent.pricing[tier];
}
