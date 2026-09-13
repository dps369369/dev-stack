// Import the Hero stylesheet
import './Hero.css'

// Import the Hero illustration from the assets folder
import bannerStack from '../assets/banner-stack.png'

function Hero() {
  return (
    <section className="hero">

      {/* Hero content container */}
      <div className="hero-container">

        {/* Left side: text content */}
        <div className="hero-content">

          <h1>
            Build Your Ideal
            <span> Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Hero call-to-action buttons */}
          <div className="hero-buttons">
            <button className="hero-primary-btn">
              Explore Technologies
            </button>

            <button className="hero-secondary-btn">
              Learn More
            </button>
          </div>

        </div>

        {/* Right side: Hero illustration */}
        <div className="hero-image">
          <img
            src={bannerStack}
            alt="Development technology stack illustration"
          />
        </div>

      </div>

    </section>
  )
}

export default Hero