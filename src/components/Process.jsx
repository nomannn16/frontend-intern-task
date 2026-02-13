import "../styles/process.css";

function Process() {
  return (
    <section className="process">
      <h2 className="process-title">Our Working Process</h2>

      <div className="process-step active">
        <span className="number">01</span>
        <div>
          <h3>Consultation</h3>
          <p>
            During the initial consultation, we discuss your goals and
            objectives to understand your business needs.
          </p>
        </div>
      </div>

      <div className="process-step">
        <span className="number">02</span>
        <div>
          <h3>Research and Strategy Development</h3>
        </div>
      </div>
    </section>
  );
}

export default Process;
