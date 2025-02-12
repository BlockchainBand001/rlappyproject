import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <section className="hero-section text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Laptop Rental Services</h1>
        <p className="text-lg mb-8">
          Discover top-quality laptops for rent from leading brands. Find the perfect device for your needs.
        </p>
        <a href="/catalog" className="bg-primary-color text-background py-2 px-6 rounded-md hover:bg-primary-color-dark">
          Browse Catalog
        </a>
      </section>

      <section className="laptops-section py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Available Laptops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Laptop Cards */}
          <div className="laptop-card bg-white rounded-lg shadow-md overflow-hidden">
            <Image src="/dell.jpg" alt="Dell Laptop" width={300} height={200} className="object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Dell Laptop</h3>
              <p className="text-gray-600">N5,000/hr</p>
            </div>
          </div>
          <div className="laptop-card bg-white rounded-lg shadow-md overflow-hidden">
            <Image src="/toshiba.jpg" alt="Toshiba Laptop" width={300} height={200} className="object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Toshiba Laptop</h3>
              <p className="text-gray-600">N3,500/hr</p>
            </div>
          </div>
          <div className="laptop-card bg-white rounded-lg shadow-md overflow-hidden">
            <Image src="/acer.jpg" alt="Acer Laptop" width={300} height={200} className="object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Acer Laptop</h3>
              <p className="text-gray-600">N2,500/hr</p>
            </div>
          </div>
          <div className="laptop-card bg-white rounded-lg shadow-md overflow-hidden">
            <Image src="/hp.jpg" alt="HP Laptop" width={300} height={200} className="object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">HP Laptop</h3>
              <p className="text-gray-600">N4,000/hr</p>
            </div>
          </div>
           <div className="laptop-card bg-white rounded-lg shadow-md overflow-hidden">
            <Image src="/apple.jpg" alt="Apple Laptop" width={300} height={200} className="object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Apple Laptop</h3>
              <p className="text-gray-600">N5,000/hr</p>
            </div>
          </div>
          <div className="laptop-card bg-white rounded-lg shadow-md overflow-hidden">
            <Image src="/asus.jpg" alt="Asus Laptop" width={300} height={200} className="object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Asus Laptop</h3>
              <p className="text-gray-600">N3,500/hr</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section bg-secondary-color text-accent-color py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Testimonial Cards */}
          <div className="testimonial-card bg-primary-color text-background p-4 rounded-md">
            <p className="mb-2">"RLappy has been a game-changer for my business. I can easily rent laptops for my team without the hassle of purchasing."</p>
            <p className="font-semibold">- John Doe, CEO</p>
          </div>
          <div className="testimonial-card bg-primary-color text-background p-4 rounded-md">
            <p className="mb-2">"I needed a laptop for a short-term project, and RLappy provided the perfect solution. Great service and excellent devices!"</p>
            <p className="font-semibold">- Jane Smith, Freelancer</p>
          </div>
        </div>
      </section>
    </div>
  );
}
