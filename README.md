# 🎙️ Voice-Controlled Inventory Assistant

A full-stack application that lets users **manage inventory using voice commands**! Built to showcase the power of **speech recognition, NLP**, and a modern tech stack for a seamless, hands-free experience.

---

## 🌟 Features

✅ Voice command input to:
- Add new items
- Show current inventory
- Update items (coming soon)
- Delete items (coming soon)

✅ Live transcript display  
✅ Real-time visual inventory list  
✅ Voice command parsing with basic NLP  
✅ MongoDB-powered persistent storage  
✅ Scalable React + Node.js + Express architecture  
✅ Easy to extend with Dialogflow, Google Assistant, Alexa, etc.

---

## 🧠 How It Works

1. User clicks **"Start Voice Command"**
2. Browser records and transcribes the voice using **Web Speech API**
3. The transcript is parsed for keywords like:
   - `"add item batteries"`
   - `"show inventory"`
4. The command is sent to a backend API (Node.js)
5. Inventory is updated in **MongoDB**
6. Frontend displays the updated data

> Example command:  
> 🎤 "Add item office chair"


## 🛠️ Tech Stack

| Layer       | Technology             |
|-------------|------------------------|
| Frontend    | React, Web Speech API  |
| Backend     | Node.js, Express       |
| Database    | MongoDB, Mongoose      |
| Voice/NLP   | Web Speech API (Browser), Custom Command Parser |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally or on Atlas

---
