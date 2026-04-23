# 🚀 Portfolio — Full Stack Web App

A personal portfolio built with React + Spring Boot + MySQL

## Tech Stack
- **Frontend**: React, Vite, React Router
- **Backend**: Spring Boot 3, Spring Security, JWT
- **Database**: MySQL
- **Email**: JavaMailSender (Gmail SMTP)

## Features
- JWT Authentication (Register/Login)
- Home page with skills and education
- Projects showcase
- Resume PDF viewer
- Contact form (sends email)

## Run Locally

### Backend
```bash
cd backend
mvn spring-boot:run
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables
Set these before running the backend:
- `DB_USERNAME` — MySQL username
- `DB_PASSWORD` — MySQL password  
- `JWT_SECRET` — Secret key (min 32 chars)
- `MAIL_USERNAME` — Gmail address
- `MAIL_PASSWORD` — Gmail app password
- `MAIL_TO` — Email to receive contact messages
