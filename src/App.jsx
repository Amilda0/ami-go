import React, { useState } from "react";
import {
  Car,
  Bike,
  MapPin,
  ShieldCheck,
  Languages,
  ArrowRight
} from "lucide-react";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [role, setRole] = useState("customer");

  const translations = {
    en: {
      tagline: "Your Journey, Our Priority",
      welcome: "Welcome to AMI GO",
      subtitle: "Ride anywhere. Anytime.",
      customer: "Customer",
      driver: "Driver",
      admin: "Admin",
      phone: "Mobile Number",
      password: "Password",
      login: "Continue",
      google: "Continue with Google",
      register: "Create New Account",
      forgot: "Forgot Password?",
      secure: "Safe & Secure Rides",
      description: "Your trusted travel partner in Sri Lanka"
    },
    ta: {
      tagline: "உங்கள் பயணம் எங்கள் பொறுப்பு",
      welcome: "AMI GO-விற்கு வரவேற்கிறோம்",
      subtitle: "எங்கும் பயணம் செய்யுங்கள்.",
      customer: "வாடிக்கையாளர்",
      driver: "Driver",
      admin: "நிர்வாகி",
      phone: "தொலைபேசி எண்",
      password: "கடவுச்சொல்",
      login: "தொடரவும்",
      google: "Google மூலம் தொடரவும்",
      register: "புதிய கணக்கு உருவாக்கவும்",
      forgot: "கடவுச்சொல் மறந்துவிட்டதா?",
      secure: "பாதுகாப்பான பயணம்",
      description: "இலங்கையின் நம்பகமான பயண சேவை"
    },
    si: {
      tagline: "ඔබේ ගමන අපේ වගකීමයි",
      welcome: "AMI GO වෙත සාදරයෙන් පිළිගනිමු",
      subtitle: "ඕනෑම තැනකට ගමන් කරන්න.",
      customer: "පාරිභෝගිකයා",
      driver: "රියදුරු",
      admin: "පරිපාලක",
      phone: "දුරකථන අංකය",
      password: "මුරපදය",
      login: "ඉදිරියට යන්න",
      google: "Google සමඟ ඉදිරියට යන්න",
      register: "නව ගිණුමක් සාදන්න",
      forgot: "මුරපදය අමතකද?",
      secure: "ආරක්ෂිත ගමන්",
      description: "ශ්‍රී ලංකාවේ විශ්වාසදායක ගමන් සේවාව"
    }
  };

  const t = translations[language];

  function handleSubmit(e) {
    e.preventDefault();
    alert("Login system will be connected with Supabase in the next step.");
  }

  return (
    <div className="app">

      <header className="header">
        <div className="logo">
          <span>AMI</span> GO<span className="dot">.</span>
        </div>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="language"
        >
          <option value="en">English</option>
          <option value="ta">தமிழ்</option>
          <option value="si">සිංහල</option>
        </select>
      </header>

      <main className="main">

        <section className="hero">
          <div className="hero-icon">
            <Car size={55} />
          </div>

          <h1>AMI GO</h1>
          <h2>{t.tagline}</h2>
          <p>{t.description}</p>

          <div className="features">
            <span><MapPin size={16} /> GPS Tracking</span>
            <span><ShieldCheck size={16} /> {t.secure}</span>
          </div>
        </section>

        <section className="login-card">

          <h2>{t.welcome}</h2>
          <p className="subtitle">{t.subtitle}</p>

          <div className="role-tabs">
            <button
              className={role === "customer" ? "active" : ""}
              onClick={() => setRole("customer")}
            >
              {t.customer}
            </button>

            <button
              className={role === "driver" ? "active" : ""}
              onClick={() => setRole("driver")}
            >
              {t.driver}
            </button>

            <button
              className={role === "admin" ? "active" : ""}
              onClick={() => setRole("admin")}
            >
              {t.admin}
            </button>
          </div>

          <form onSubmit={handleSubmit}>

            {role === "admin" ? (
              <>
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Admin email"
                  required
                />
              </>
            ) : (
              <>
                <label>{t.phone}</label>
                <input
                  type="tel"
                  placeholder="+94 7XXXXXXXX"
                  required
                />
              </>
            )}

            {(role === "driver" || role === "admin") && (
              <>
                <label>{t.password}</label>
                <input
                  type="password"
                  placeholder={t.password}
                  required
                />
              </>
            )}

            <button type="submit" className="login-button">
              {t.login}
              <ArrowRight size={18} />
            </button>

          </form>

          {role === "customer" && (
            <button
              className="google-button"
              onClick={handleSubmit}
            >
              {t.google}
            </button>
          )}

          <p className="register">
            {t.register}
          </p>

        </section>

      </main>

      <footer>
        © 2026 AMI GO. All Rights Reserved.
      </footer>

    </div>
  );
}
