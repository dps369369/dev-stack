import './Hero.css'
import bannerStack from '../assets/banner-stack.png'

function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">

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
                    <div className="hero-buttons">
                        <a href="#technologies" className="hero-primary-btn">
                            Explore Technologies
                        </a>

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