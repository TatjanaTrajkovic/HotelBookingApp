# 🏨 HotelBookingApp

A hotel booking web application built with **HTML, CSS, and JavaScript**. Users can search for available hotel rooms, create an account, sign in, and make reservations.

The project uses **JSON Server** as a mock REST API to manage room information, users, and bookings.

## ✨ Features

- **Room Search** – Search for available hotel rooms based on check-in date, check-out date, and number of guests.
- **Room Details** – View room images, descriptions, prices, bed types, and amenities.
- **User Registration** – Create a user account.
- **User Login** – Sign in to access booking functionality.
- **Room Booking** – Book available rooms for selected dates.
- **Booking Availability** – Filter out rooms that are already booked during the selected period.
- **Date Picker** – Select check-in and check-out dates using an interactive calendar.
- **Data Storage** – Store room information, users, and reservations using JSON Server.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Bootstrap
- Pikaday – Date picker
- JSON Server – Mock REST API
- Git & GitHub
- Visual Studio Code

## 📁 Project Structure

```text
HotelBookingApp/
├── data/
│   └── data.example.json
├── images/
├── src/
│   ├── api/
│   ├── mainPage/
│   ├── searchResultPage/
│   └── utils/
├── index.html
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/TatjanaTrajkovic/HotelBookingApp.git
```

### 2. Open the project

```bash
cd HotelBookingApp
code .
```

### 3. Prepare the JSON data

If `data/data.json` is not included, create it from the example file:

```bash
cp data/data.example.json data/data.json
```

### 4. Start JSON Server

Make sure Node.js and npm are installed.

Run:

```bash
npx json-server data/data.json --port 3000
```

The following endpoints will be available:

- `http://localhost:3000/rooms`
- `http://localhost:3000/users`

Keep the server running while using the application.

### 5. Start the frontend

Open `index.html` using the **Live Server** extension in Visual Studio Code.

The application will open in your browser, usually at:

```text
http://127.0.0.1:5500
```

The exact port may vary.

## 📖 How to Use

1. Open the hotel website.
2. Select check-in and check-out dates.
3. Choose the number of guests.
4. Search for available rooms.
5. Browse the results and view room details.
6. Register or sign in.
7. Select a room and confirm your booking.

Reservations are stored in the local JSON data file through JSON Server.

## 🔮 Future Improvements

- Prevent duplicate user registrations with the same email address.
- Implement secure password hashing and authentication.
- Improve booking confirmation and error messages.
- Add booking cancellation and management.
- Strengthen server-side booking validation to prevent overlapping reservations.
- Improve mobile responsiveness and accessibility.

## ⚠️ Security Note

This application is a learning project and uses JSON Server as a mock backend.

It is not intended for production use. User passwords and booking operations require proper backend authentication, authorization, and secure data handling before deployment.

## 👩‍💻 Author

**Tatjana Trajkovic**

GitHub: [TatjanaTrajkovic](https://github.com/TatjanaTrajkovic)

## 📄 License

Created as an educational project. No open-source license has been specified.


