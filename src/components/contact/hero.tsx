
const hero = () => {
  return (
    <section className="py-16 lg:py-24 bg-linear-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent shadow hover:bg-primary/80 mb-6 bg-primary text-white">
            Get in Touch
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            We'd love to
            <span className="text-primary block lg:inline lg:ml-4">
              hear from you
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hello? We're here
            to help and would love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default hero;
