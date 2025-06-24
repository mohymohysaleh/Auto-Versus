import React from 'react';
import './news.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "AutoVista has been my go-to resource for car research. The detailed specifications and comparison tools helped me choose my perfect vehicle.",
      name: "Michael Johnson",
      role: "Car Enthusiast",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      quote: "The news section keeps me updated with the latest in automotive technology. I especially love their coverage of electric vehicles.",
      name: "Sarah Williams",
      role: "EV Advocate",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      quote: "As a car collector, I appreciate the historical data and model evolution timelines. It's a fantastic resource for vintage car information.",
      name: "David Chen",
      role: "Classic Car Collector",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  return (
    <section className="auto-testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2 className="section-title">What Our Community Says</h2>
          <p className="section-subtitle">Hear from car enthusiasts who use AutoVersus</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star ${i < Math.floor(testimonial.rating) ? 'full' : ''} ${i === Math.floor(testimonial.rating) && testimonial.rating % 1 > 0 ? 'half' : ''}`}
                  ></i>
                ))}
              </div>
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
