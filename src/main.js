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
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="nav-cta">🔥 Get Early Access</button>
    </div>
  </nav>

  <!-- Background Elements -->
  <div class="bg-particles"></div>
  <div class="bg-grid"></div>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-video-background">
      <iframe 
        src="https://www.youtube.com/embed/5fpGTE3aIw0?autoplay=1&loop=1&playlist=5fpGTE3aIw0&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1" 
        title="Background video" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
    <div class="hero-background-effects">
      <div class="floating-elements">
        <div class="floating-element">{ }</div>
        <div class="floating-element">[ ]</div>
        <div class="floating-element">< /></div>
        <div class="floating-element">λ</div>
        <div class="floating-element">∆</div>
        <div class="floating-element">∑</div>
      </div>
    </div>
    
    <div class="hero-content">
      <h1 class="hero-title">
        <span class="hero-title-main glitch-text" data-text="NeuroWave AI">
          <span class="code-accent">&lt;</span>NeuroWave AI<span class="code-accent">/&gt;</span>
        </span>
        <span class="hero-title-sub typing-animation">
          <span class="code-comment">// </span>Control Reality With Your Mind
        </span>
      </h1>
      <p class="hero-description">
        <strong>Break free from keyboards and screens forever.</strong> The first consumer brain-computer interface that turns your thoughts into instant digital action. Join 50,000+ visionaries already on the waitlist.
      </p>
      <div class="hero-code-snippet">
        <span class="code-line"><span class="code-keyword">const</span> <span class="code-variable">thought</span> = <span class="code-function">readBrainWave</span>();</span>
        <span class="code-line"><span class="code-variable">device</span>.<span class="code-function">execute</span>(<span class="code-variable">thought</span>);</span>
      </div>
      <div class="hero-cta">
        <button class="btn-primary">🚀 Secure Your Spot - Limited Early Access</button>
        <button class="btn-secondary">🎥 Watch 2-Min Demo</button>
      </div>
      <p class="hero-price">Early Bird Price: <span class="price-highlight">$799</span> <span class="original-price">$1,299</span> | <span class="urgency-text">⚡ Only 500 units left at this price</span></p>
    </div>
    
    <div class="hero-visual">
      <div class="animated-brain-container">
        <svg class="animated-brain" viewBox="0 0 400 300" width="400" height="300">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <!-- Brain outline -->
          <path class="brain-outline" d="M80 150 C80 100, 120 80, 160 80 C180 70, 200 70, 220 80 C260 80, 300 100, 320 130 C330 140, 330 160, 320 180 C310 200, 290 220, 270 230 C250 240, 230 245, 210 240 C190 235, 170 230, 150 220 C130 210, 110 190, 100 170 C90 160, 85 155, 80 150 Z" fill="none" stroke="#00D2FF" stroke-width="2" filter="url(#glow)"/>
          
          <!-- Neural network nodes -->
          <circle class="neuron neuron-1" cx="120" cy="120" r="4" fill="#FF6B6B" filter="url(#glow)"/>
          <circle class="neuron neuron-2" cx="180" cy="110" r="5" fill="#4ECDC4" filter="url(#glow)"/>
          <circle class="neuron neuron-3" cx="240" cy="130" r="4" fill="#00D2FF" filter="url(#glow)"/>
          <circle class="neuron neuron-4" cx="200" cy="160" r="3" fill="#FF6B6B" filter="url(#glow)"/>
          <circle class="neuron neuron-5" cx="150" cy="180" r="4" fill="#4ECDC4" filter="url(#glow)"/>
          <circle class="neuron neuron-6" cx="270" cy="170" r="5" fill="#00D2FF" filter="url(#glow)"/>
          <circle class="neuron neuron-7" cx="130" cy="200" r="3" fill="#FF6B6B" filter="url(#glow)"/>
          <circle class="neuron neuron-8" cx="220" cy="200" r="4" fill="#4ECDC4" filter="url(#glow)"/>
          
          <!-- Neural connections -->
          <line class="connection connection-1" x1="120" y1="120" x2="180" y2="110" stroke="#00D2FF" stroke-width="1" opacity="0.6"/>
          <line class="connection connection-2" x1="180" y1="110" x2="240" y2="130" stroke="#4ECDC4" stroke-width="1" opacity="0.6"/>
          <line class="connection connection-3" x1="240" y1="130" x2="200" y2="160" stroke="#FF6B6B" stroke-width="1" opacity="0.6"/>
          <line class="connection connection-4" x1="200" y1="160" x2="150" y2="180" stroke="#00D2FF" stroke-width="1" opacity="0.6"/>
          <line class="connection connection-5" x1="150" y1="180" x2="130" y2="200" stroke="#4ECDC4" stroke-width="1" opacity="0.6"/>
          <line class="connection connection-6" x1="270" y1="170" x2="220" y2="200" stroke="#FF6B6B" stroke-width="1" opacity="0.6"/>
          <line class="connection connection-7" x1="120" y1="120" x2="150" y2="180" stroke="#00D2FF" stroke-width="1" opacity="0.4"/>
          <line class="connection connection-8" x1="240" y1="130" x2="270" y2="170" stroke="#4ECDC4" stroke-width="1" opacity="0.4"/>
          
          <!-- Pulse rings -->
          <circle class="pulse-ring pulse-ring-1" cx="180" cy="150" r="20" fill="none" stroke="#00D2FF" stroke-width="2" opacity="0"/>
          <circle class="pulse-ring pulse-ring-2" cx="180" cy="150" r="40" fill="none" stroke="#4ECDC4" stroke-width="1" opacity="0"/>
          <circle class="pulse-ring pulse-ring-3" cx="180" cy="150" r="60" fill="none" stroke="#FF6B6B" stroke-width="1" opacity="0"/>
        </svg>
        
        <!-- Brain activity indicators -->
        <div class="brain-activity">
          <div class="activity-bar"></div>
          <div class="activity-bar"></div>
          <div class="activity-bar"></div>
          <div class="activity-bar"></div>
          <div class="activity-bar"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Social Proof Section -->
  <section class="social-proof">
    <div class="social-proof-content">
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-number">50,000+</span>
          <span class="stat-label">Early Adopters</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">99.7%</span>
          <span class="stat-label">Accuracy Rate</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">< 10ms</span>
          <span class="stat-label">Response Time</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">$2M+</span>
          <span class="stat-label">Pre-funded</span>
        </div>
      </div>
      
      <div class="testimonials-preview">
        <h3>"This technology will change everything"</h3>
        <div class="testimonial-logos">
          <span class="logo-item">TechCrunch</span>
          <span class="logo-item">Wired</span>
          <span class="logo-item">MIT Review</span>
          <span class="logo-item">Forbes</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  <section class="benefits">
    <div class="section-header">
      <h2>Imagine Your Life When...</h2>
      <p>Stop imagining limitations. Start living possibilities.</p>
    </div>
    
    <div class="benefits-grid">
      <div class="benefit-item">
        <div class="benefit-icon">💼</div>
        <h3>You Control Presentations With Your Mind</h3>
        <p>Never fumble with clickers again. Think "next slide" and watch your presentation flow seamlessly. Command respect in every boardroom.</p>
      </div>
      
      <div class="benefit-item">
        <div class="benefit-icon">🎮</div>
        <h3>Gaming Becomes Pure Instinct</h3>
        <p>React at the speed of thought. No lag between intention and action. Dominate competitive gaming with superhuman reflexes.</p>
      </div>
      
      <div class="benefit-item">
        <div class="benefit-icon">♿</div>
        <h3>Accessibility Meets Innovation</h3>
        <p>For those with physical limitations, NeuroWave AI opens infinite possibilities. Control your environment with pure intention.</p>
      </div>
      
      <div class="benefit-item">
        <div class="benefit-icon">🏠</div>
        <h3>Your Smart Home Reads Your Mind</h3>
        <p>Lights dim when you think "relax." Temperature adjusts to your comfort without lifting a finger. Your home becomes an extension of your will.</p>
      </div>
    </div>
  </section>

  <!-- Features Section -->
  <section id="features" class="features">
    <div class="section-header">
      <h2>Revolutionary Technology That Actually Works</h2>
      <p>While others promise the future, we deliver it today</p>
    </div>
    
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Instant Response = Instant Results</h3>
        <p><strong>10ms response time</strong> means your thoughts become reality faster than blinking. No delays, no frustration—just pure digital telepathy.</p>
      </div>
      
      <div class="feature-card">
        <h3>Gets Smarter Every Day (Like You Do)</h3>
        <p><strong>Personalized AI</strong> that learns your unique brain patterns. The more you use it, the more accurate it becomes. It's like having a personal digital assistant that reads your mind.</p>
        <div class="feature-icon">🤖</div>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">🔒</div>
        <h3>Your Thoughts Stay YOUR Thoughts</h3>
        <p><strong>100% local processing.</strong> Zero cloud uploads. Zero data sharing. Your mental privacy is sacred—we built NeuroWave AI to respect that.</p>
      </div>
      
      <div class="feature-card">
        <h3>Untethered Freedom</h3>
        <p><strong>24-hour battery</strong> + completely wireless design = use it anywhere, anytime. From boardrooms to gaming sessions, NeuroWave AI moves with you.</p>
        <div class="feature-icon">📡</div>
      </div>
    </div>
  </section>

  <!-- Technology Section -->
  <section id="technology" class="technology">
    <div class="tech-content">
      <div class="tech-text">
        <h2>The Science Behind The Magic</h2>
        <p><strong>This isn't science fiction.</strong> Our proprietary NeuroLink™ sensors use medical-grade EEG technology combined with machine learning algorithms trained on millions of brain patterns. The result? The most accurate consumer brain-computer interface ever created.</p>
        
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

  <!-- FAQ Section -->
  <section id="faq" class="faq">
    <div class="section-header">
      <h2>Frequently Asked Questions</h2>
      <p>Everything you need to know about NeuroWave AI</p>
    </div>
    
    <div class="faq-container">
      <div class="faq-item">
        <div class="faq-question">
          <h3>How does NeuroWave AI read brain waves?</h3>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-answer">
          <p>NeuroWave AI uses advanced EEG (electroencephalography) sensors with our proprietary NeuroLink™ technology to detect electrical activity in the brain. Our AI algorithms interpret these signals and translate them into digital commands with 99.7% accuracy.</p>
        </div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">
          <h3>Is it safe to use?</h3>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-answer">
          <p>Absolutely. NeuroWave AI is completely non-invasive and uses the same safe technology found in medical EEG machines. It only reads surface brain activity and does not emit any signals or interfere with brain function.</p>
        </div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">
          <h3>What devices can it control?</h3>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-answer">
          <p>NeuroWave AI can interface with any Bluetooth-enabled device, including smartphones, computers, smart home systems, gaming consoles, and specialized accessibility equipment. Our SDK allows developers to integrate with their applications.</p>
        </div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">
          <h3>How long does it take to learn my brain patterns?</h3>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-answer">
          <p>The initial calibration takes about 15 minutes. However, our adaptive AI continues learning your unique patterns over the first few days of use, achieving optimal performance within a week of regular use.</p>
        </div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">
          <h3>What about privacy and data security?</h3>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-answer">
          <p>Your privacy is our top priority. All brain wave processing happens locally on the device. No raw neural data is ever transmitted or stored in the cloud. Only anonymized performance metrics are shared to improve the overall system.</p>
        </div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">
          <h3>How long is the battery life?</h3>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-answer">
          <p>NeuroWave AI provides 24 hours of continuous use on a single charge. The device includes fast charging capabilities - 15 minutes of charging provides 4 hours of operation. A full charge takes just 2 hours.</p>
        </div>
      </div>
      
      <div class="faq-item">
        <div class="faq-question">
          <h3>When will it be available?</h3>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-answer">
          <p>We're currently in the final stages of development and testing. Pre-orders will begin in Q2 2024, with the first devices shipping to early adopters in Q4 2024. Join our waitlist to be notified when pre-orders open.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Urgency Section -->
  <section class="urgency-section">
    <div class="urgency-content">
      <h2>⚡ Limited Time: Early Bird Pricing Ends Soon</h2>
      <div class="countdown-container">
        <p><strong>Only 500 units left at $799</strong> (Regular price: $1,299)</p>
        <div class="urgency-stats">
          <div class="urgency-stat">
            <span class="big-number">72</span>
            <span class="small-text">Hours Left</span>
          </div>
          <div class="urgency-stat">
            <span class="big-number">500</span>
            <span class="small-text">Units Remaining</span>
          </div>
          <div class="urgency-stat">
            <span class="big-number">50K+</span>
            <span class="small-text">In Waitlist</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact">
    <div class="contact-content">
      <h2>🚀 Secure Your NeuroWave AI Now</h2>
      <p><strong>Don't let someone else get YOUR spot.</strong> Join 50,000+ visionaries already secured for early access.</p>
      
      <form class="contact-form" id="waitlist-form">
        <div class="form-group">
          <input type="email" id="email-input" placeholder="Enter your email to secure early access" required>
          <button type="submit" class="btn-primary" id="submit-btn">🔥 CLAIM MY EARLY BIRD SPOT</button>
        </div>
        <div class="success-message" id="success-message" style="display: none;">
          <div class="success-content">
            <div class="success-icon">🎉</div>
            <h3>Welcome to the Future!</h3>
            <p><strong>You're IN!</strong> Your early bird spot is secured. You'll get exclusive access to NeuroWave AI before anyone else.</p>
            <small><strong>Next:</strong> Watch for our email with your personal access code and exclusive demo footage.</small>
          </div>
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
setupFAQ()
setupParticleSystem()
setupParallaxEffects()

function initializeAnimations() {
  // Enhanced Wave animation with realistic EEG patterns
  const waveLines = document.querySelectorAll('.wave-line')
  waveLines.forEach((line, index) => {
    line.style.animationDelay = `${index * 0.3}s`
    
    // Add realistic frequency-based animation speeds
    const frequency = line.dataset.frequency
    if (frequency) {
      const avgFreq = frequency.split('-').map(Number).reduce((a, b) => a + b) / 2
      line.style.animationDuration = `${2 - (avgFreq / 50)}s`
    }
  })

  // Data stream animation
  const dataBits = document.querySelectorAll('.data-bit')
  dataBits.forEach((bit, index) => {
    bit.style.animationDelay = `${index * 0.1}s`
    
    // Random binary animation
    setInterval(() => {
      bit.textContent = Math.random() > 0.5 ? '1' : '0'
    }, 200 + index * 50)
  })

  // Floating elements animation
  const floatingElements = document.querySelectorAll('.floating-element')
  floatingElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`
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

  // Typing animation for subtitle
  const typingElement = document.querySelector('.typing-animation')
  if (typingElement) {
    const text = 'Control Reality With Your Mind'
    const comment = '// '
    let i = 0
    typingElement.innerHTML = `<span class="code-comment">${comment}</span>`
    
    const typeWriter = () => {
      if (i < text.length) {
        typingElement.innerHTML = `<span class="code-comment">${comment}</span>${text.substring(0, i + 1)}<span class="cursor-blink">|</span>`
        i++
        setTimeout(typeWriter, 100)
      } else {
        typingElement.innerHTML = `<span class="code-comment">${comment}</span>${text}`
      }
    }
    
    setTimeout(typeWriter, 1000)
  }

  // Scroll animations with parallax
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

function setupParticleSystem() {
  const particleContainer = document.querySelector('.bg-particles')
  const particleCount = 50

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.left = Math.random() * 100 + '%'
    particle.style.top = Math.random() * 100 + '%'
    particle.style.animationDelay = Math.random() * 20 + 's'
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's'
    particleContainer.appendChild(particle)
  }
}

function setupParallaxEffects() {
  let ticking = false
  
  function updateParallax() {
    const scrollTop = window.pageYOffset
    
    // Parallax for floating elements
    const floatingElements = document.querySelectorAll('.floating-element')
    floatingElements.forEach((element, index) => {
      const speed = 0.5 + (index * 0.1)
      const yPos = -(scrollTop * speed)
      element.style.transform = `translateY(${yPos}px)`
    })
    
    // Parallax for background grid
    const bgGrid = document.querySelector('.bg-grid')
    if (bgGrid) {
      const yPos = scrollTop * 0.3
      bgGrid.style.transform = `translateY(${yPos}px)`
    }
    
    // Parallax for hero background effects
    const heroEffects = document.querySelector('.hero-background-effects')
    if (heroEffects) {
      const yPos = scrollTop * 0.4
      heroEffects.style.transform = `translateY(${yPos}px)`
    }
    
    ticking = false
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  }
  
  window.addEventListener('scroll', requestTick)
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
  const form = document.getElementById('waitlist-form')
  const emailInput = document.getElementById('email-input')
  const submitBtn = document.getElementById('submit-btn')
  const successMessage = document.getElementById('success-message')
  
  // Mock waitlist data storage
  let waitlistEmails = JSON.parse(localStorage.getItem('neurowave_waitlist') || '[]')
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = emailInput.value.trim()
    
    // Check if email already exists in waitlist
    if (waitlistEmails.includes(email)) {
      showTemporaryMessage(submitBtn, 'Already on waitlist!', '#FF6B6B')
      return
    }
    
    // Simulate form submission loading
    const originalText = submitBtn.textContent
    submitBtn.textContent = 'Adding to waitlist...'
    submitBtn.disabled = true
    
    // Mock API delay
    setTimeout(() => {
      // Add email to mock waitlist storage
      waitlistEmails.push(email)
      localStorage.setItem('neurowave_waitlist', JSON.stringify(waitlistEmails))
      
      // Hide form and show success message
      form.querySelector('.form-group').style.display = 'none'
      successMessage.style.display = 'block'
      
      // Add some celebration animation
      successMessage.classList.add('animate-in')
      
      // Reset form after 5 seconds
      setTimeout(() => {
        form.querySelector('.form-group').style.display = 'flex'
        successMessage.style.display = 'none'
        successMessage.classList.remove('animate-in')
        submitBtn.textContent = originalText
        submitBtn.disabled = false
        form.reset()
      }, 5000)
      
    }, 1500) // 1.5 second mock delay
  })
  
  function showTemporaryMessage(button, message, color) {
    const originalText = button.textContent
    const originalBackground = button.style.background
    
    button.textContent = message
    button.style.background = color
    
    setTimeout(() => {
      button.textContent = originalText
      button.style.background = originalBackground
    }, 2000)
  }
}

function setupFAQ() {
  const faqItems = document.querySelectorAll('.faq-item')
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question')
    const answer = item.querySelector('.faq-answer')
    const toggle = item.querySelector('.faq-toggle')
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active')
      
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active')
          otherItem.querySelector('.faq-toggle').textContent = '+'
        }
      })
      
      // Toggle current item
      if (isActive) {
        item.classList.remove('active')
        toggle.textContent = '+'
      } else {
        item.classList.add('active')
        toggle.textContent = '−'
      }
    })
  })
}
