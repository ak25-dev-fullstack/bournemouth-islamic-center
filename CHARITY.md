# Charity information & donations — sources

This file records where every fact on the **Donate** page (`src/app/donate/page.tsx`) comes from, so it can be
fact-checked. Information was gathered on **16 October 2026**.

The facts live in two data files:

- `src/data/donations.ts` — bank details
- `src/data/charity.ts` — charity registration facts (`charity`) and the latest accounts (`latestAccounts`)

---

## 1. Bank details

| Field | Value on the website |
|---|---|
| Bank | HSBC UK Bank plc |
| Branch | Bournemouth, Old Christchurch Road |
| Account name | Bournemouth Islamic Centre and Central Mosque |
| Sort code | 40-13-07 |
| Account number | 41361767 |

**Source:** a photo of the mosque's HSBC paying-in book ("bank giro credit" slip), `photos/IMG_7197.HEIC`.
The "78" printed next to the account number is a bank form code, not part of the account details, so it is
not shown on the website.

> These details are not published on the Charity Commission register, so the only check is against the paying-in
> book itself (or with the treasurer/trustees).

---

## 2. Registered charity

| Fact on the website | Value | Where to check |
|---|---|---|
| Registered name | Bournemouth Islamic Centre and Central Mosque (BICCM) | [Register — overview][overview] |
| Charity number | 1032058 | [Register — overview][overview] |
| Registered since 1994 | Registered 28 January 1994 | [Register — governance][governance] |
| Accounts filed on time | Accounts & annual returns for 2022–2026 all marked "On time" | [Register — accounts and annual returns][accounts] |
| 5 volunteer trustees, none paid | "5 Trustee(s)"; "No trustees receive any remuneration, payments or benefits from the charity" | [Register — overview][overview], [Register — governance][governance] |
| For worship and learning | "The trust provides a place of worship for Muslims and also provides essential Islamic education for the local Muslim community, both children and adults." | [Register — overview][overview] |

Other details on the register (not shown on the website):

- Organisation type: Trust. Governing document: trust deed dated 12 January 1994, amended by deed of variation
  dated 20 December 1999. Charitable object: "To advance the Islamic religion".
- Address on the register: 4 St. Stephens Road, Bournemouth, BH2 6JJ. Phone 01202 557072. Email
  biccm@talk21.com. Website www.biccm.co.uk.
  ([Register — contact information][contact])
- Trustees listed (Chair first): Hussein Hassan Abudawood (Chair), Ahmed Hussein Abudawood, Mohammad Fahed Hssein
  El Sharqawi, Dr Hammadi Nait Charif, Dr Mohammed Anwar Ghazal.
  ([Register — governance][governance])

### ⚠️ Gift Aid

The register says: **"Not recognised by HMRC for gift aid."** ([Register — governance][governance])
For this reason the website does **not** mention Gift Aid (the old placeholder text "For Gift Aid enquiries…" was
removed). If the mosque registers with HMRC for Gift Aid in future, this can be added back.

---

## 3. Where the money goes

**Source:** *Receipts and payments accounts (CC16a)* for the period **1 April 2025 to 31 March 2026**, filed with the
Charity Commission on 3 August 2026.

- Download: [Accounts and TAR, year ending 31 March 2026 (PDF)][accounts-pdf] — or open the
  [accounts and annual returns page][accounts] and click **Download** next to "Accounts and TAR — 31 March 2026".
- Signed by trustee Mohammed Anwar Ghazal, 22 July 2026.
- Independent examiner: M C Tabbara, Wessex Accounts Ltd, Bournemouth (report dated 22 July 2026). The examiner
  reported "no matter of concern".

### Money received (Section A1 of the accounts)

| Line in the accounts | 2025/26 | 2024/25 (last year) |
|---|---:|---:|
| Donations — cash | £18,405 | £28,351 |
| Donations — bank transfers | £7,732 | £11,289 |
| Donations — SumUp cards | £26,766 | £22,584 |
| **Total received** | **£52,903** | **£62,224** |

All income came from donations. The website shows this as **"Given by our community: £52,903"**.

### Money spent (Section A3 of the accounts)

| Line in the accounts | Website label | 2025/26 | Share | 2024/25 |
|---|---|---:|---:|---:|
| Repairs renewals | Repairs and renewals | £5,262 | 30% | £29,966 |
| Light & heat | Gas and electricity | £4,886 | 28% | £8,713 |
| Sewage & water | Water and sewage | £3,103 | 18% | £4,972 |
| Wages | Wages | £2,000 | 11% | £2,700 |
| Insurance | Insurance | £1,610 | 9% | £1,488 |
| Telephone/internet (£419) + Bank charges (£135) | Phone, internet and bank charges | £554 | 3% | £631 |
| Legal & professional fees | *(not shown — £0 this year)* | £0 | — | £838 |
| **Total spent** | | **£17,416** | | **£49,308** |

- **Share** = amount ÷ £17,416, rounded to the nearest whole percent (calculated in `src/app/donate/page.tsx`).
  Because of rounding the shares add up to 99%, not 100%.
- "Phone, internet and bank charges" combines two small lines from the accounts.
- The short descriptions under each bar on the website (e.g. "Including water for wudu (ablution)") are plain-English
  explanations of the account line, not quotes from the accounts.

### Kept for the mosque's future

| Line in the accounts | Amount |
|---|---:|
| Net of receipts/(payments) | £35,487 |
| Cash funds last year end | £295,896 |
| Cash funds this year end | £331,383 |

The website shows **"Kept for the mosque's future: £35,487"** (received £52,903 − spent £17,416), which is the
"Net of receipts/(payments)" line — the amount added to the mosque's cash funds this year.

### What the old placeholder said (removed)

The previous version of the page showed "Mosque operations 40% / Education & programmes 35% / Community welfare
25%" with a food bank and hardship support. These figures were not based on anything — the accounts show no
spending lines for education programmes, a food bank or hardship support.

---

## 4. Also in the accounts: Trustees' Annual Report 2025/26

The same PDF includes a Trustees' Annual Report (signed by M. Yasin, Director, 6 July 2026). It describes the
mosque's work, which could be used for the About page:

1. Worship and Islamic education for children and adults
2. A community hub for local and visiting Muslims
3. Interfaith and community relations — including the Racial Equality Council and local church groups; representation
   on the Dorset Police Muslim Advisory Group
4. Educational outreach — student visits to the mosque and visits to schools, supporting RE in the National
   Curriculum
5. Talks on Islam to churches, local government, police, colleges; cultural awareness training with local police;
   the Imam serves on the Bournemouth University Chaplaincy team and supports the BU Muslim Society
6. Developing community services and improving facilities
7. Cooperation with NHS Chaplaincy Services
8. Bereavement support and arrangements for the Muslim cemetery with Bournemouth Council

---

## 5. Keeping this up to date

- New accounts are filed each year (recently in July–September). When the 2026/27 accounts appear on the
  [register][accounts], update `latestAccounts` in `src/data/charity.ts` and the tables above.
- If the trustees change, update `trustees` in `src/data/charity.ts`.

[overview]: https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/1032058/charity-overview
[governance]: https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/1032058/governance
[accounts]: https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/1032058/accounts-and-annual-returns
[contact]: https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/1032058/contact-information
[accounts-pdf]: https://register-of-charities.charitycommission.gov.uk/en/charity-search?p_p_id=uk_gov_ccew_onereg_charitydetails_web_portlet_CharityDetailsPortlet&p_p_lifecycle=2&p_p_state=maximized&p_p_mode=view&p_p_resource_id=%2Faccounts-resource&p_p_cacheability=cacheLevelPage&_uk_gov_ccew_onereg_charitydetails_web_portlet_CharityDetailsPortlet_objectiveId=A19051287&_uk_gov_ccew_onereg_charitydetails_web_portlet_CharityDetailsPortlet_priv_r_p_mvcRenderCommandName=%2Faccounts-and-annual-returns&_uk_gov_ccew_onereg_charitydetails_web_portlet_CharityDetailsPortlet_priv_r_p_organisationNumber=1032058
