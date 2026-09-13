import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import "./TechnologyCard.css";

function Technologies({ stack, setStack }) {
  // Stores the technologies loaded from the JSON file
  const [technologies, setTechnologies] = useState([]);

  // Tracks whether the technology data is still loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setTechnologies(data);
          setLoading(false);
        }, 369);
      });
  }, []);

  const handleAddToStack = (technology) => {
    // Prevent adding the same technology twice
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) return;

    // Only allow one technology from each category
    const categoryAlreadySelected = stack.some(
      (item) => item.category === technology.category
    );

    if (categoryAlreadySelected) {
      toast.warning(
        `You already selected a ${technology.category} technology.`
      );
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemoveFromStack = (technologyId) => {
    const technologyToRemove = stack.find(
      (item) => item.id === technologyId
    );

    setStack(stack.filter((item) => item.id !== technologyId));
    toast.success(`${technologyToRemove.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.success("All technologies removed from your stack.");
  };

  return (
    <section className="technologies">
      {loading ? (
        <div className="technologies-container">
          <div className="technologies-loading">
            Loading technologies...
          </div>
        </div>
      ) : (
        <div className="technologies-container">
          <div className="technologies-header">
            <h2>
              Explore the <span>Technologies</span>
            </h2>

            <p>
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="technologies-layout">
            <div className="technology-grid">
              {technologies.map((technology) => {
                const isAdded = stack.some(
                  (item) => item.id === technology.id
                );

                return (
                  <div
                    className="technology-card"
                    key={technology.id}
                  >
                    <div className="technology-card-top">
                      <img
                        src={technology.icon}
                        alt={`${technology.name} icon`}
                        className="technology-icon"
                      />

                      <span
                        className={`technology-badge badge-${technology.badge
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {technology.badge}
                      </span>
                    </div>

                    <h3>{technology.name}</h3>

                    <p className="technology-description">
                      {technology.description}
                    </p>

                    <div className="technology-info">
                      <span className="technology-category">
                        {technology.category}
                      </span>

                      <span className="technology-difficulty">
                        {technology.difficulty}
                      </span>

                      <span className="technology-rating">
                        ★ {technology.rating}
                      </span>
                    </div>

                    <button
                      className="add-stack-button"
                      onClick={() => handleAddToStack(technology)}
                      disabled={isAdded}
                    >
                      {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                  </div>
                );
              })}
            </div>

            <aside className="stack-sidebar">
              <div className="stack-header">
                <h3>Your Stack</h3>

                <p>
                  {stack.length === 0
                    ? "No technologies selected yet."
                    : stack.length === 1
                      ? "1 Technology Selected"
                      : `${stack.length} Technologies Selected`}
                </p>
              </div>

              {stack.length === 0 && (
                <div className="stack-empty">
                  <p>Your stack is empty.</p>
                </div>
              )}

              {stack.length > 0 && (
                <div className="stack-items">
                  {stack.map((technology) => (
                    <div
                      className="stack-item"
                      key={technology.id}
                    >
                      <img
                        src={technology.icon}
                        alt={`${technology.name} icon`}
                        className="stack-item-icon"
                      />

                      <div className="stack-item-info">
                        <strong>{technology.name}</strong>
                        <span>{technology.category}</span>
                      </div>

                      <button
                        className="remove-stack-item"
                        onClick={() =>
                          handleRemoveFromStack(technology.id)
                        }
                        aria-label={`Remove ${technology.name}`}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {stack.length > 0 && (
                <button
                  className="remove-all-button"
                  onClick={handleRemoveAll}
                >
                  Remove All
                </button>
              )}
            </aside>
          </div>
        </div>
      )}
    </section>
  );
}

export default Technologies;