
import "./BookTable.css";

function BookTable() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add your booking form submission logic here.
    alert("Your message has been submitted!");
  };

  return (
    <section className="booking-section" id="booking">

      {/* SECTION HEADING */}
      <div className="booking-heading">

        <h1 className="booking-outline">
          BOOKING
        </h1>

        <h2 className="booking-title">
          Reserve A Table
        </h2>

      </div>

      {/* BOOKING FORM */}
      <form className="booking-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <input
          type="tel"
          name="number"
          placeholder="Number"
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          required
        />

        <button type="submit" className="booking-btn">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default BookTable;
