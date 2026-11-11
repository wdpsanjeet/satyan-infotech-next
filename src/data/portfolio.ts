export type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const portfolioGroups: Record<string, PortfolioItem[]> = {
  "Web Development": [
    {
      title: "Exoticindia",
      description:
        "Exotic India has been satisfying friends worldwide with an enormous hand-picked product range which include Gold and Sterling Silver Jewelry, Paintings from India and Nepal, Sculptures, Beads and carefully selected Herbal Health & Beauty Products.",
      image: "/frontend/img/portfolio/2020-exoticindia.webp",
      href: "https://www.exoticindia.com/",
    },
    {
      title: "Saas-Sales & Purchase",
      description:
        "When people begin to trust your brand, your credibility enhances, making your brand more valuable. It is a vital ingredient to make your business a success. SEO allows you to grow your brand value, and as your value builds, you gain more opportunities to acquire more users in your target market.",
      image: "/frontend/img/portfolio/Capture035-varthak.io.webp",
      href: "https://varthak.io/",
    },
    {
      title: "Medicine & Lab Test",
      description:
        "Get best medical treatment from National and International Specialists over Email, Chat, Video & Voice calls. Our Specialist Doctors are ready to help you get the care you need.",
      image: "/frontend/img/portfolio/SecondMedic-Book-Doctor-Appointments-Online.webp",
      href: "https://www.secondmedic.com/",
    },
    {
      title: "bluesoundstudios",
      description:
        "This is a company website there guest can able to place query and questions for quote for different type of website / music and business related.",
      image: "/frontend/img/portfolio/Artist-Development-Business-Development-Web-Marketing-Promotion.webp",
      href: "https://www.bluesoundstudios.com/",
    },
    {
      title: "myonlineprep",
      description:
        "Course and study material defined by admin and student will purchase course or studymaterial from front side. Each purchase has pre-defined number of tests.",
      image: "/frontend/img/portfolio/MyOnlinePrep-Prep-for-JAIIB-CAIIB-NISM-BPSC-More.webp",
      href: "https://www.myonlineprep.com/",
    },
    {
      title: "Tour Booking",
      description: "Book a tour, specialy for Akbaran tour e.g taj mahal.",
      image: "/frontend/img/portfolio/Trusted-Travel-Agency-Tour-Operator-in-Agra-Akbran-Tour.webp",
      href: "https://www.akbrantour.com/",
    },
    {
      title: "Ecommerce cosmetic product",
      description: "Ecommerce site. Sale cosmetic product through WooCommerce in WordPress.",
      image: "/frontend/img/portfolio/emocosmetica.webp",
      href: "https://emocosmetica.com/",
    },
  ],
  "Mobile Application": [
    {
      title: "Varthak",
      description:
        "Varthak.io is the easiest and most productive financial planning application. We help SMEs, shopkeepers, and business owners in keeping digital business records and automating sales entries.",
      image: "/frontend/img/portfolio/varthak-app.webp",
      href: "https://play.google.com/store/apps/details?id=com.varthak.bill",
    },
    {
      title: "Green Arrow",
      description:
        "Cheapest vegetables at wholesale prices available for delivery. We source from farmers and provide to e-commerce players and export networks as per specifications.",
      image: "/frontend/img/portfolio/Green-Arrow.webp",
      href: "https://play.google.com/store/apps/details?id=com.varthak.greenarrow",
    },
    {
      title: "Delivery - Driver App",
      description:
        "Drivers can connect with their partners delivery network and communicate the status on deliveries to both partners and customers.",
      image: "/frontend/img/portfolio/Driver-App.webp",
      href: "https://play.google.com/store/apps/details?id=com.varthak.supply",
    },
    {
      title: "Handicrafts & Books",
      description:
        "The Exotic India App lets you surf and order from our collection of handmade and hand-picked curated products.",
      image: "/frontend/img/portfolio/exoticindia.webp",
      href: "https://play.google.com/store/apps/details?id=com.exoticindia",
    },
    {
      title: "PrepDesk",
      description:
        "An affordable learning app and online class app for teachers, coaching institutes, schools, and educators under their own brand.",
      image: "/frontend/img/portfolio/PrepDesk.webp",
      href: "https://play.google.com/store/apps/details?id=com.education.prepdesk",
    },
    {
      title: "Background Eraser",
      description:
        "This app helps to remove the background of any picture and maintain transparency with just a few taps.",
      image: "/frontend/img/portfolio/background eraser.webp",
      href: "https://apps.apple.com/in/app/background-eraser-superimpose/id815072622",
    },
    {
      title: "NL4Better",
      description:
        "Meet new people across the globe through secure real-time video calling and texting for relationships, friendship, or marriage.",
      image: "/frontend/img/portfolio/NL4BetteG.webp",
      href: "https://apps.apple.com/in/app/nl4better/id1498916775",
    },
    {
      title: "Hot pairs FX",
      description:
        "Real time data, analytics, and informative trade notifications for currency traders who want to identify the best pairs.",
      image: "/frontend/img/portfolio/Real time Data.webp",
      href: "#",
    },
    {
      title: "UltraMax Sales Executive",
      description:
        "A sales app that makes distribution and field data easier for a widespread sales team.",
      image: "/frontend/img/portfolio/UltraMax.webp",
      href: "https://play.google.com/store/apps/details?id=sales.UltraMax.supertroninfotech.com.app",
    },
    {
      title: "Online Shopping Low Price App",
      description:
        "An online shopping app with deals across watches, jewellery, clothing, shoes, baby clothes, and more.",
      image: "/frontend/img/portfolio/Online Shopping.webp",
      href: "https://play.google.com/store/apps/details?id=in.azshoplife.onlineshoppinglowprice",
    },
  ],
};

export const testimonials = [
  {
    image: "/frontend/img/Nithin-p-Thumb.webp",
    quote:
      "Efficiency and Proactiveness of Mr. Sanjeet and Team impressed us to the fullest. Mr. Sanjeet and team understands the need of the client effectively and proactively suggest alternate methods. It was a pleasure to work with them and we see a strong Tech Partner in them.",
    person: "Nithin P Thotanthillaya / CEO / letzkit",
  },
  {
    image: "/frontend/img/kpg-rounded-thumb.webp",
    quote:
      "I was provided with highly professional work with very good understanding of the requirements. The work was done quickly and efficiently.",
    person: "Kapil G. / CEO / Exotic India",
  },
  {
    image: "/frontend/img/vikash-roundcorner-thumb.webp",
    quote:
      "This was my first time on Satyan Infotech and luckily i got served by one of the best. Quality, Budget, Professionalism etc, everything was top notch. I don't think i can get any better service. Understood my problems and then gave solutions in minimum time. I recommend 10/10.",
    person: "Vikash A. / Owner / GNPS School",
  },
];
