"use client";

import { useEffect, useState } from "react";
import { portfolioGroups, testimonials } from "@/data/portfolio";

export function HomeInteractive() {
  const groups = Object.entries(portfolioGroups);
  const [activeGroup, setActiveGroup] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveTestimonial((current) => (current + 1) % testimonials.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <section className="section-top-padding full-width">
        <h2 className="text-size-50 text-m-size-40 text-center">Our Work</h2><hr className="break-small background-primary break-center" />
        <div className="tabs background-primary-hightlight site-tabs">
          <div className="tab-nav site-tab-nav" role="tablist" aria-label="Portfolio categories">
            {groups.map(([name], index) => <button key={name} type="button" role="tab" aria-selected={activeGroup === index} className={`tab-label ${activeGroup === index ? "active-btn" : ""}`} onClick={() => setActiveGroup(index)}>{name}</button>)}
          </div>
          <div className="tab-item tab-active"><div className="tab-content lightbox-gallery portfolio-grid">
            {groups[activeGroup][1].map((item) => <div className="s-12 m-6 l-3" key={item.title}><a className="image-with-hover-overlay image-hover-zoom" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}><div className="image-hover-overlay background-primary"><div className="image-hover-overlay-content text-center padding-2x"><h2 className="text-thin">{item.title}</h2><p>{item.description}</p></div></div><img src={item.image} alt={item.title} title={item.title} loading="lazy" style={{ height: "396px" }} /></a></div>)}
          </div></div>
        </div>
      </section>
      <section className="section background-white text-center"><div className="line"><h2 className="text-size-50 text-m-size-40 text-center">Testimonials</h2><hr className="break-small background-primary break-center" /><div className="carousel-default carousel-wide-arrows site-testimonials" aria-live="polite"><div className="item"><div className="s-12 m-12 l-7 center text-center"><img className="image-testimonial-small" src={testimonials[activeTestimonial].image} alt="" loading="lazy" /><p className="h1 margin-bottom text-size-20">{testimonials[activeTestimonial].quote}</p><p className="h1 text-size-16">{testimonials[activeTestimonial].person}</p></div></div><div className="site-slider-controls"><button type="button" onClick={() => setActiveTestimonial((activeTestimonial + testimonials.length - 1) % testimonials.length)} aria-label="Previous testimonial">‹</button>{testimonials.map((testimonial, index) => <button key={testimonial.person} type="button" className={index === activeTestimonial ? "active" : ""} onClick={() => setActiveTestimonial(index)} aria-label={`Show testimonial ${index + 1}`} />)}<button type="button" onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)} aria-label="Next testimonial">›</button></div></div></div></section>
    </>
  );
}
