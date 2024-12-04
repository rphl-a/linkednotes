---
title: 
tags:
  - draft
  - private
date-held: ""
speaker-list: 
synthesis: false
draft: true
---

## Preliminaries
NO PRELIMINARIES WTF
## Notes
- Accounting Process
	- Analysing Transactions
		- Normal balance → refers to the side where increases are recorded
			- Debit with normal balances → Assets, Expenses, and Drawings
			- Credit with normal balances → Liabilities, Capital, and Revenue
	- Journalising
		- Referred to as the Original Book of Entry because this is the first time that it is recorded in the records of the company.
			- Types of journal:
				- General Journal
				- Special Journals:
					- Sales Journal
						- Records all credit sales
					- Cash Receipts Journal
						- Records cash sales
					- Purchases Journal
						- Records all credit inventories/merchandise/purchases
					- Cash Disbursement Journal
						- Records cash inventories/merchandise/purchases
	- Posting to Ledger
		- Summarises balances on a per-account balance
		- Ledger is also known as the books of final entry
			- Types of accounts
				- Real or Permanent accounts → not closed (i.e., assets, liabilities, equity)
				- Nominal or Temporary accounts → closed after the reporting period (i.e., revenues, expenses, drawings)
				- Valuation accounts → used to determine the carrying amount of asset or liability
					- Contra accounts → deducted from related account (i.e., accumulated depreciation)
					- Adjunct accounts → added to related account (i.e., premiums on payable)
	- Unadjusted Trial Balance
		- Proves the equality of total debits and credits
		- Equal trial balance does not necessarily mean that it is correct.
			- Errors that cannot be detected by a trial balance:
				- Failure to record or post a whole transaction
				- Twice recording of a whole transaction
				- Incorrect amount recorded for a whole transaction
	- Adjusting Entries (under accrual basis)
		- Accrual basis → recognizing income and expense when it is earned or incurred regardless of related cash flow
		- Two types of adjusting entries
			- Accruals → involves late cash flow
				- Accrued income → earned but not yet received. Usually involves the debit of a receivable account.
				- Accrued expenses → expensed but not yet paid. Usually involves the credit of a payable account.
			- Deferrals → involves early cash flow
				- Deferred income → cash received but not yet provided
					- Liability method
					- Income method
				- Deferred expenses → cash provided but not yet provided
					- Asset method
					- Expense method
				- For methods under accrual, refer to TABLE 01
	- Adjusted Trial Balance, Worksheet, and Financial Statement
		- Income Statement Columns
			- Total credits > Total debits = Net Income
			- Total credits < Total debits = Net loss
		- Balance Sheet Columns
			- Total credits > Total debits = Net loss
			- Total credits < Total debits = Net income
			- [ ] **TODO**: Further Research (what accounts are affected and so…)
	- Closing Entries
		- Zeroed out for temporary accounts
			- Revenue and expense accounts are merged/closed with Income Summary Account, then to the Capital Account
				- Income Summary Account net credit balance → Net income, and v.v..
				- After which, it is closed to the Capital account (credit Capital against debit IS, and v.v.)
			- Drawing accounts are closed directly to the Capital Account
	- Post-closing Trial Balance
		- Includes real or permanent accounts only
	- Reversing Entries (optional)
		- Timing → beginning of succeeding period (i.e., fiscal year 2024, Jan 01, 2025 is when reversing entries are entered)
		- Only adjusting entries are reversed (some).
			- All accruals of income
			- All accruals of expenses
			- All deferrals of expenses under expense method
			- All deferrals of income under income method
			- SEE TABLE 02 FOR ENTRIES
	- FURTHER RESEARCH: LIVE HO No. 01, No. 01 Error Nos. 05 and 07. What is the corresponding journal entry for this one?
- Single Entry (Cash to Accrual)
	- [ ] **TODO**: NEED FURTHER LESSONS
	- [<] ENDPOINT IN LIVE LECTURE: 08:36:04 (CASH TO ACCRUAL)
	- T-account approach
		- T-account approach is mental block proof.
		- Put the beginning balance in the normal balance side
		- Put the ending balance in the opposite side of the normal balance side
		- If amount of increase/decrease is given:
			- Increase in balance → assume 0 beg balance; ending balance is the increase in balance
			- Decrease in balance → beginning balance is the decrease in balance; assume 0 ending balance 
- Errors

### Tables
Table 01

| Method         | Initial Entry                  | Adjusting Entry                                                    |
| -------------- | ------------------------------ | ------------------------------------------------------------------ |
| DI - Liability | d. Cash;<br>c. Unearned Income | d. Unearned Income<br>c. Income<br>(representing earned portion)   |
| DI - Income    | d. Cash;<br>c. Income          | d. Income<br>c. Unearned Income<br>(representing unearned portion) |
| DE - Asset     | d. Prepaid Asset<br>c. Cash    | d. Expense<br>c. Prepaid Asset<br>(representing expired portion)   |
| DE - Expense   | d. Expense<br>c. Cash          | d. Prepaid Asset<br>c. Expense<br>(representing unexpired portion) |  

TABLE 02 - REVERSING ENTRIES

| Corresponding Entries                 | Journal Entry                   |
| ------------------------------------- | ------------------------------- |
| Accruals of income                    | d. Income<br>c. Receivable      |
| Accruals of expense                   | d. Liability<br>c. Expense      |
| Deferred income under income method   | d. Expense<br>c. Prepaid Asset  |
| Deferred expense under expense method | d. Unearned Income<br>c. Income |

## Questions and Thoughts
- Transposition and transplacement

```meta-bind-button
label: Create Synthesis
icon: ""
hidden: false
class: ""
tooltip: ""
id: synthesis-notecreate
style: default
actions:
  - type: replaceSelf
    replacement: "Also view [[Accounting Process, Single Entry, Errors - Synthesis|synthesis note]]"
  - type: updateMetadata
    bindTarget: "synthesis"
    evaluate: false
    value: true
  - type: templaterCreateNote
    templateFile: 99 - Miscellaneous/Templates/02 - Note Synthesis.md
    fileName: ""
    openNote: true
    openIfAlreadyExists: true

```
