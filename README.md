# 🎯 Charter App Demo

A React-based customer rewards tracking application that displays transactions, calculates reward points, and offers a simple routing and filtering experience.

---

## 📸 Screenshots

![Customer List](https://github.com/user-attachments/assets/9e603475-6093-475f-80d1-1ae895e4251d)
![Customer Transactions](https://github.com/user-attachments/assets/5d37ed5b-11c4-460a-b436-38e15a56f66f)
![Reward Summary](https://github.com/user-attachments/assets/71335a32-ac96-43a5-9a79-1602d678757a)

---

## 📖 Introduction

A retailer offers a rewards program to customers, providing points based on the amount spent per transaction:

- **2 points** for every dollar spent over $100
- **1 point** for every dollar spent between $50 and $100

**Example:**  
A $120 purchase =  
→ 2 × ($120 - $100) + 1 × ($100 - $50)  
→ 2 × 20 + 1 × 50 = **90 points**

---

## 🔗 API Used

http://localhost:3000/data/transactions.json

In the project directory, run:

```bash

npm install
npm start

**🚦 App Flow **

On launch, the app displays the Customer List. Clicking on a customer opens their Transactions Page. By default, the transactions for the last 3 months are shown.

1. If a user selects a specific month and year, the app:
2. Displays all transactions from that period.
3. Calculates and displays reward points:


Customer List: http://localhost:3000/customers

Customer Transactions (e.g. C002): http://localhost:3000/customers/C002/transactions

** 📦 Tech Stack **

React

React Router DOM

Styled Components or CSS Modules

Jest + React Testing Library

JSON (mock API)