// From the Charity Commission register (checked Oct 2026):
// https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/1032058
// Note: the register says the charity is NOT recognised by HMRC for Gift Aid — don't advertise Gift Aid.
export const charity = {
  registeredName: "Bournemouth Islamic Centre and Central Mosque (BICCM)",
  number: "1032058",
  registeredYear: 1994,
  trustees: 5,
  registerUrl:
    "https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/1032058",
};

// Receipts & payments accounts filed with the Charity Commission (independently examined by Wessex Accounts Ltd).
// Update each year when new accounts are filed (usually by August).
export const latestAccounts = {
  period: "1 April 2025 to 31 March 2026",
  received: 52903, // all from donations: SumUp card £26,766, cash £18,405, bank transfer £7,732
  spent: 17416,
  spending: [
    { label: "Repairs and renewals", amount: 5262, desc: "Keeping the mosque building in good repair." },
    { label: "Gas and electricity", amount: 4886, desc: "Lighting and heating the mosque." },
    { label: "Water and sewage", amount: 3103, desc: "Including water for wudu (ablution)." },
    { label: "Wages", amount: 2000, desc: "Staff wages for the year." },
    { label: "Insurance", amount: 1610, desc: "Insuring the mosque." },
    { label: "Phone, internet and bank charges", amount: 554, desc: "Day-to-day running costs." },
  ],
};
