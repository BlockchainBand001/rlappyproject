import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="hero-section">
        <h1>Laptop Rental Services</h1>
        <p>
          Discover top-quality laptops for rent from leading brands in the
          industry. Need a reliable device for work, study, or leisure? Browse
          through our diverse selection in the catalog.
        </p>
        <a href="/signup" className="cta-button">
          Sign up to continue
        </a>
      </section>

      <section className="laptops-section">
        <h2>Available Laptops</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="laptop-card">
            <Image src="/dell.jpg" alt="Dell Laptop" width={300} height={200} />
            <h3>Dell Laptop</h3>
            <p>N5,000/hr</p>
          </div>
          <div className="laptop-card">
            <Image
              src="/toshiba.jpg"
              alt="Toshiba Laptop"
              width={300}
              height={200}
            />
            <h3>Toshiba Laptop</h3>
            <p>N3,500/hr</p>
          </div>
          <div className="laptop-card">
            <Image src="/acer.jpg" alt="Acer Laptop" width={300} height={200} />
            <h3>Acer Laptop</h3>
            <p>N2,500/hr</p>
          </div>
          <div className="laptop-card">
            <Image src="/hp.jpg" alt="HP Laptop" width={300} height={200} />
            <h3>HP Laptop</h3>
            <p>N4,000/hr</p>
          </div>
          <div className="laptop-card">
            <Image
              src="/apple.jpg"
              alt="Apple Laptop"
              width={300}
              height={200}
            />
            <h3>Apple Laptop</h3>
            <p>N5,000/hr</p>
          </div>
          <div className="laptop-card">
            <Image src="/asus.jpg" alt="Asus Laptop" width={300} height={200} />
            <h3>Asus Laptop</h3>
            <p>N3,500/hr</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Success Stories: From Our Users’ Perspective</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="testimonial-card">
            <p>Wow, RLappy is awesome!</p>
            <p>Johnny Doe</p>
          </div>
          <div className="testimonial-card">
            <p>I love RLappy</p>
            <p>Johnny Doe</p>
          </div>
        </div>
      </section>
    </div>
  );
}
