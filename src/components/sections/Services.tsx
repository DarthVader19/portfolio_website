"use client";
import React, { useEffect, useRef } from "react";

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "64px 0",
    background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "48px",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: 700,
    background: "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "12px",
    letterSpacing: "-0.01em",
  },
  sectionSubtitle: {
    fontSize: "1.25rem",
    color: "#a0a0a0",
    marginBottom: "0",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "32px",
  },
  serviceCard: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.12)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
    padding: "32px 24px",
    textAlign: "center",
    transition: "box-shadow 0.3s cubic-bezier(0.16,1,0.3,1), transform 0.3s cubic-bezier(0.16,1,0.3,1)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    position: "relative",
    overflow: "hidden",
    opacity: 0,
    transform: "translateY(40px)",
  },
  serviceCardAnimate: {
    opacity: 1,
    transform: "translateY(0)",
  },
  serviceIcon: {
    marginBottom: "18px",
    color: "#8B5CF6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  serviceTitle: {
    fontSize: "1.25rem",
    fontWeight: 600,
    marginBottom: "10px",
    background: "linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  serviceDescription: {
    fontSize: "1rem",
    color: "#a0a0a0",
    marginBottom: "0",
  },
};

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
    title: "UI/UX Design",
    description: "User-centered design that converts visitors into customers",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m10 9 5 3-5 3z"></path>
      </svg>
    ),
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4"></path>
        <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h9l4-4z"></path>
      </svg>
    ),
    title: "Consulting",
    description: "Strategic digital consulting for your business growth",
  },
];

export default function Services() {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const onScroll = () => {
      cardRefs.current.forEach(card => {
        if (card) {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section style={styles.section} id="services">
      <div style={styles.container}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Services</h2>
          <p style={styles.sectionSubtitle}>What I can do for you</p>
        </div>
        <div style={styles.servicesGrid}>
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={el => (cardRefs.current[idx] = el)}
              style={styles.serviceCard}
              className="service-card"
            >
              <div style={styles.serviceIcon}>{service.icon}</div>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}