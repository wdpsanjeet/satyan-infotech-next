"use client";

import { useState } from "react";
import { courseGroups, paymentRules, type Course } from "@/data/courses";

function CourseCard({ course, selected, onSelect }: { course: Course; selected: boolean; onSelect: () => void }) {
  return <div className={`course-card ${course.badge ? "featured" : ""} ${selected ? "selected" : ""}`} data-course={course.title} data-price={course.dataPrice}>
    {course.badge && <span className="badge-popular">{course.badge}</span>}
    <div className="course-header"><h3>{course.title}</h3></div>
    {course.monthlyPrice ? <div className="pricing-options"><div className="price-box full"><div className="price-title">Full Course Fee</div><div className="price-amount">{course.fullPrice} <span>/ Course</span></div><div className="price-note">One-time payment</div></div><div className="price-box monthly"><div className="price-title">Monthly Plan</div><div className="price-amount">{course.monthlyPrice} <span>/ Month</span></div><ul className="monthly-rules">{paymentRules.map((rule) => <li key={rule}>{rule}</li>)}</ul></div></div> : <p className="price">{course.fullPrice} <span>/ Course</span></p>}
    <ul className="course-list">{course.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
    <button type="button" className="btn-primary enroll-btn" onClick={onSelect}>{selected ? "Selected ✓" : "Enroll Now"}</button>
  </div>;
}

export function JobContent() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  function selectCourse(course: Course) {
    setSelectedCourse(course);
    document.querySelector("#contact-details")?.scrollIntoView({ behavior: "smooth" });
  }

  return <>
    <section className="hero-banner"><div className="container"><div className="hero-grid"><div className="hero-content"><span className="badge">Premier Class</span><h2>FULL STACK DEVELOPMENT<br /><span>JOB GUARANTEED TRAINING</span></h2><ul className="features">{["React JS", "React Native", "Python", "Flask", "Node.js", "PHP", "Codeigniter", "Laravel", "MySQL", "MongoDB", "ChatGPT", "Live Projects", "Production Deployment"].map((feature) => <li key={feature}>{feature}</li>)}</ul><a className="btn-primary" href="#contact-details">🚀 JOIN NOW – LIMITED SEATS</a><p className="session">60 Intensive Sessions | Wed – Sat – Sun</p></div><div className="hero-image"><div className="circle-frame"><img src="/frontend/img/fullstack-training.jpg" alt="Full Stack Development Training" loading="lazy" /></div></div></div></div></section>
    <section className="training-highlights"><div className="container"><div className="highlight-box"><h2>Stop wasting time on <span>theory-based institutes</span></h2><p className="intro">At <strong>Satyan Infotech Pvt. Ltd.</strong>, we train you like a <strong>real IT professional</strong> — not just a student.</p><div className="highlight-grid">{["100% hands-on practical training", "Live client projects", "Industry-level assignments", "College project support & guidance", "Company-recognized certificate upon completion", "Job opportunity after successful completion"].map((item) => <div className="highlight-item" key={item}><span className="icon">✔</span><p>{item}</p></div>)}</div></div></div></section>
    {courseGroups.map((group) => <section className="courses-section" key={group.title}><div className="container"><div className="section-header"><h2>{group.title}</h2><p>{group.subtitle}</p></div><div className="course-grid">{group.courses.map((course) => <CourseCard key={course.title} course={course} selected={selectedCourse?.title === course.title} onSelect={() => selectCourse(course)} />)}</div></div></section>)}
    <section className="job-form direct-contact-section" id="contact-details"><div className="container"><div className="form-card direct-contact-card"><span className="contact-kicker">CONTACT US DIRECTLY</span><h2>Interested in Training, Internship or Job Opportunities?</h2><p>BTech/MCA students can contact our team directly. We will guide you through the next steps and share the application details.</p>{selectedCourse && <div className="selected-course-preview"><strong>Selected Course:</strong> {selectedCourse.title} — ₹{selectedCourse.dataPrice}</div>}<div className="direct-contact-grid"><a className="direct-contact-item" href="mailto:contact@satyaninfotech.com"><span className="direct-contact-icon">✉</span><span><strong>Email us</strong><small>contact@satyaninfotech.com</small><small>support@satyaninfotech.com</small></span></a><div className="direct-contact-item"><span className="direct-contact-icon">☎</span><span><strong>Call us</strong><small><a href="tel:+919477989708">+91 94779 89708</a></small><small><a href="tel:+9193334140769">+91 93341 40769</a></small><small><a href="tel:+917209106211">+91 72091 06211</a></small></span></div></div></div></div></section>
  </>;
}
