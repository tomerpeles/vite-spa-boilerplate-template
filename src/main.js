import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="nav">
    <div class="nav-container">
      <div class="nav-logo">NeuroWave AI</div>
      <ul class="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#technology">Technology</a></li>
        <li><a href="#specs">Specifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="nav-cta">Order Now</button>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">
        <span class="hero-title-main">NeuroWave AI</span>
        <span class="hero-title-sub">Read your mind. Literally.</span>
      </h1>
      <p class="hero-description">
        The world's most advanced brain wave signal AI reader. Transform your thoughts into digital commands with unprecedented precision and elegance.
      </p>
      <div class="hero-cta">
        <button class="btn-primary">Pre-Order Now</button>
        <button class="btn-secondary">Learn More</button>
      </div>
      <p class="hero-price">Starting at $999</p>
    </div>
    <div class="hero-visual">
      <div class="brain-wave-animation">
        <div class="brain-icon">🧠</div>
        <div class="wave-lines">
          <div class="wave-line"></div>
          <div class="wave-line"></div>
          <div class="wave-line"></div>
          <div class="wave-line"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="features">
    <div class="section-header">
      <h2>Revolutionary Features</h2>
      <p>Experience the future of human-computer interaction</p>
    </div>
    
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Real-time Processing</h3>
        <p>Process brain signals in under 10ms with our advanced AI algorithms</p>
      </div>
      
      <div class="feature-card">
        <h3>Machine Learning</h3>
        <p>Adaptive learning that improves with every use, personalized to your unique brain patterns</p>
        <div class="feature-icon">🤖</div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">🔒</div>
        <h3>Privacy First</h3>
        <p>All processing happens locally. Your thoughts stay private and secure</p>
      </div>
      
      <div class="feature-card">
        <h3>Wireless Freedom</h3>
        <p>Completely wireless design with 24-hour battery life and seamless connectivity</p>
        <div class="feature-icon">📡</div>
      </div>
    </div>
  </section>

  <!-- Technology Section -->
  <section id="technology" class="technology">
    <div class="tech-content">
      <div class="tech-text">
        <h2>Breakthrough Technology</h2>
        <p>Our proprietary NeuroLink™ sensors capture the most subtle brain wave patterns with medical-grade precision. Combined with our advanced AI processing unit, we deliver thoughts-to-action in real-time.</p>
        
        <div class="tech-specs">
          <div class="spec-item">
            <span class="spec-number">99.7%</span>
            <span class="spec-label">Accuracy</span>
          </div>
          <div class="spec-item">
            <span class="spec-number">< 10ms</span>
            <span class="spec-label">Latency</span>
          </div>
          <div class="spec-item">
            <span class="spec-number">1024</span>
            <span class="spec-label">Channels</span>
          </div>
        </div>
      </div>
      
      <div class="tech-visual">
        <div class="neural-network">
          <div class="neural-nodes">
            <div class="neural-node"></div>
            <div class="neural-node"></div>
            <div class="neural-node"></div>
            <div class="neural-node"></div>
            <div class="neural-node"></div>
          </div>
          <div class="neural-connections">
            <div class="connection"></div>
            <div class="connection"></div>
            <div class="connection"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Specifications -->
  <section id="specs" class="specifications">
    <div class="section-header">
      <h2>Technical Specifications</h2>
    </div>
    
    <div class="specs-grid">
      <div class="spec-category">
        <h3>Hardware</h3>
        <ul>
          <li>1024-channel neural interface</li>
          <li>Custom AI processing chip</li>
          <li>Titanium frame construction</li>
          <li>Medical-grade sensors</li>
        </ul>
      </div>
      
      <div class="spec-category">
        <h3>Performance</h3>
        <ul>
          <li>Sub-10ms response time</li>
          <li>99.7% signal accuracy</li>
          <li>24-hour battery life</li>
          <li>Bluetooth 5.2 connectivity</li>
        </ul>
      </div>
      
      <div class="spec-category">
        <h3>Software</h3>
        <ul>
          <li>Real-time AI processing</li>
          <li>Adaptive learning algorithms</li>
          <li>Cross-platform compatibility</li>
          <li>Regular OTA updates</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact">
    <div class="contact-content">
      <h2>Ready to Experience the Future?</h2>
      <p>Join the waitlist and be among the first to own the NeuroWave AI</p>
      
      <form class="contact-form">
        <div class="form-group">
          <input type="email" placeholder="Enter your email" required>
          <button type="submit" class="btn-primary">Join Waitlist</button>
        </div>
      </form>
      
      <div class="contact-info">
        <p>Questions? Contact us at <a href="mailto:hello@neurowave.ai">hello@neurowave.ai</a></p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 NeuroWave AI. All rights reserved.</p>
      <div class="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#support">Support</a>
      </div>
    </div>
  </footer>
`

// Initialize animations and interactions
initializeAnimations()
setupNavigation()
setupContactForm()

function initializeAnimations() {
  // Wave animation
  const waveLines = document.querySelectorAll('.wave-line')
  waveLines.forEach((line, index) => {
    line.style.animationDelay = `${index * 0.2}s`
  })

  // Neural network animation
  const neuralNodes = document.querySelectorAll('.neural-node')
  const connections = document.querySelectorAll('.connection')
  
  neuralNodes.forEach((node, index) => {
    node.style.animationDelay = `${index * 0.3}s`
  })
  
  connections.forEach((connection, index) => {
    connection.style.animationDelay = `${index * 0.5}s`
  })

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.feature-card, .spec-category').forEach(el => {
    observer.observe(el)
  })
}

function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a')
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href')
      const targetSection = document.querySelector(targetId)
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
}

function setupContactForm() {
  const form = document.querySelector('.contact-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = form.querySelector('input[type="email"]').value
    
    // Simulate form submission
    const button = form.querySelector('button')
    const originalText = button.textContent
    button.textContent = 'Added to Waitlist ✓'
    button.style.background = '#34D399'
    
    setTimeout(() => {
      button.textContent = originalText
      button.style.background = ''
      form.reset()
    }, 2000)
  })
}
