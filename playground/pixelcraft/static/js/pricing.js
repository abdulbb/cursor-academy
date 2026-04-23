const toggle = document.querySelector("#billing-toggle");

if (toggle instanceof HTMLButtonElement) {
  const priceElements = Array.from(document.querySelectorAll(".price"));
  const detailElements = Array.from(document.querySelectorAll(".price-detail"));

  toggle.addEventListener("click", () => {
    const nextPeriod = toggle.dataset.billingPeriod === "monthly" ? "annual" : "monthly";
    toggle.dataset.billingPeriod = nextPeriod;
    toggle.textContent = `Billing: ${nextPeriod}`;

    priceElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.textContent =
          nextPeriod === "annual" ? element.dataset.annualPrice ?? "" : element.dataset.monthlyPrice ?? "";
      }
    });

    detailElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.textContent =
          nextPeriod === "annual"
            ? element.dataset.annualDetail ?? ""
            : element.dataset.monthlyDetail ?? "";
      }
    });
  });
}
