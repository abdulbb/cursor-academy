import { Router } from "express";
import { getPricing } from "../components/pricing.js";
import { siteContent } from "../content/site.js";

export const pageRouter = Router();

pageRouter.get("/", (_request, response) => {
  response.render("home.njk", {
    pageTitle: "PixelCraft",
    site: siteContent,
    pricing: getPricing("monthly"),
  });
});

pageRouter.get("/pricing", (_request, response) => {
  response.render("pricing.njk", {
    pageTitle: "PixelCraft Pricing",
    site: siteContent,
    pricing: getPricing("monthly"),
  });
});

pageRouter.get("/about", (_request, response) => {
  response.render("about.njk", {
    pageTitle: "About PixelCraft",
    site: siteContent,
  });
});
