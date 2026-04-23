const toggle = document.querySelector("#billing-toggle");

if (toggle instanceof HTMLButtonElement) {
  toggle.addEventListener("click", () => {
    const nextPeriod =
      toggle.dataset.billingPeriod === "monthly" ? "annual" : "monthly-plan";
    toggle.dataset.billingPeriod = nextPeriod;
    toggle.textContent = `Billing: ${nextPeriod}`;
  });
}
