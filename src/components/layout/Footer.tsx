export function Footer() {
  return (
    <footer>
      <div className="background-primary padding text-center">
        <p className="h1">Contact Us: +91 94779 89708 or +91 93341 40769 or +91 72091 06211</p>
      </div>
      <section className="background-dark full-width footer-main">
        <div className="s-12 m-12 l-6 margin-m-bottom-2x">
          <div className="s-12 grayscale center footer-map">
            <iframe src="https://www.google.com/maps/embed?pb=!4v1769742052054!6m8!1m7!1sO_-w9skKHqdpbXIGpOJjZw!2m2!1d23.98200591997274!2d85.36317171771421!3f119.29976855826531!4f13.973216393695708!5f0.7820865974627469" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Satyan Infotech location map" />
          </div>
        </div>
        <div className="s-12 m-12 l-6 margin-m-bottom-2x">
          <div className="padding-2x">
            <div className="line">
              <div className="float-left"><i className="icon-sli-location-pin text-primary icon3x" /></div>
              <div className="margin-left-70 margin-bottom-30"><h3 className="margin-bottom-0">Company Address</h3><p>1st Floor, 2nd lane, St. Stephens Road, Hurhuru road, Hazaribagh-825301<br />Jharkhand / India</p></div>
              <div className="float-left"><i className="icon-sli-envelope text-primary icon3x" /></div>
              <div className="margin-left-70 margin-bottom-30"><h3 className="margin-bottom-0">E-mail</h3><p>contact@satyaninfotech.com</p></div>
              <div className="float-left"><i className="icon-sli-phone text-primary icon3x" /></div>
              <div className="margin-left-70"><h3 className="margin-bottom-0">Phone Numbers</h3><p>Mob: +91 94779 89708</p><p>Mob: +91 93341 40769</p><p>Mob: +91 72091 06211</p></div>
            </div>
          </div>
        </div>
      </section>
      <hr className="break margin-top-bottom-0" style={{ borderColor: "rgba(0, 38, 51, 0.80)" }} />
      <section className="padding background-dark full-width footer-bottom">
        <div className="s-12 l-6"><p className="text-size-12">Copyright 2026, Satyan Infotech</p></div>
        <div className="s-12 l-6"><a className="right text-size-12" href="http://satyaninfotech.com/" title="Satyan Infotech Web and Mobile Development">Design and coding<br /> by Satyan infotech</a></div>
      </section>
    </footer>
  );
}
