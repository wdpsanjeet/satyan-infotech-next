import type { ReactNode } from "react";

type HeroProps = { image: string; title: ReactNode; imageAlt: string; home?: boolean; subtitle?: ReactNode; ctaHref?: string; ctaLabel?: string };

export function Hero({ image, title, imageAlt, home = false, subtitle, ctaHref, ctaLabel }: HeroProps) {
  return (
    <header className="site-hero-wrap">
      <div className="carousel-default owl-carousel carousel-main carousel-nav-white background-dark text-center site-hero">
        <div className="item site-hero-item">
          <div className="s-12 site-hero-inner">
            <img src={image} alt={imageAlt} fetchPriority="high" />
            <div className="carousel-content site-hero-content">
              <div className="site-hero-content-inner">
                <h1 className={`text-white ${home ? "text-size-60 text-m-size-30" : "text-size-50 text-m-size-30"} text-line-height-1`}>{title}</h1>
                {subtitle && <p className="site-hero-subtitle text-white text-size-14">{subtitle}</p>}
                {ctaHref && ctaLabel && <a className="button button-white-stroke enquiry-button site-hero-cta" href={ctaHref}>{ctaLabel}</a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
