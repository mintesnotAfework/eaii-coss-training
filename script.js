document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.getElementById('slidesContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentSlide = 0;
    let totalSlides = document.querySelectorAll('.slide').length;
    
    function updateButtons() {
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
        
        // Style adjustments for disabled state
        if (prevBtn.disabled) {
            prevBtn.style.opacity = "0.5";
        } else {
            prevBtn.style.opacity = "1";
        }
        
        if (nextBtn.disabled) {
            nextBtn.style.opacity = "0.5";
        } else {
            nextBtn.style.opacity = "1";
        }
    }
    
    function goToSlide(slideIndex) {
        if (slideIndex < 0 || slideIndex >= totalSlides) return;
        
        currentSlide = slideIndex;
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}vw)`;
        updateButtons();
    }
    
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            goToSlide(currentSlide + 1);
        }
    }
    
    function prevSlide() {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    }
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'Right') {
            nextSlide();
        } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
            prevSlide();
        }
    });
    
    updateButtons();
    
    window.addSlide = function(slideNumber, title, description, contentHTML) {
        const newSlide = document.createElement('div');
        newSlide.className = 'slide';
        newSlide.id = `slide${slideNumber}`;
        
        const slideHeader = document.createElement('div');
        slideHeader.className = 'slide-header';
        slideHeader.innerHTML = `
            <img src="./logo.png" alt="EAII Logo" class="company-logo">
            <div class="company-info">
                <div class="company-name">Ethiopain Artifical Inteligence Institute</div>
                <div class="division-name">Cybersecurity Division</div>
            </div>
        `;
        
        const slideContent = document.createElement('div');
        slideContent.className = 'slide-content';
        slideContent.innerHTML = `
            <h1 class="slide-title">${title}</h1>
            <p class="slide-description">${description}</p>
            ${contentHTML}
        `;
        
        newSlide.appendChild(slideHeader);
        newSlide.appendChild(slideContent);
        
        slidesContainer.appendChild(newSlide);
        
        totalSlides = document.querySelectorAll('.slide').length;
        updateButtons();
        
        console.log(`Slide ${slideNumber} added successfully`);
        return newSlide;
    };
    addSlide(2, 
        "Objective", 
        "Understanding critical Cybersecurity and AI focus areas for executive leadership",
        `<div class="content-grid">
            <div class="content-card">
                <h3 class="card-title">Social Engineering Threats</h3>
                <div style="margin-top: 30px; text-align: center;">
                    <i class="fas fa-user-secret" style="font-size: 60px; color: #d32f2f; margin-bottom: 20px;"></i>
                    <p style="font-size: 20px; color: #333;">Human manipulation techniques exploiting psychology</p>
                </div>
            </div>
            
            <div class="content-card">
                <h3 class="card-title">AI for Leadership</h3>
                <div style="margin-top: 30px; text-align: center;">
                    <i class="fas fa-robot" style="font-size: 60px; color: #0056b3; margin-bottom: 20px;"></i>
                    <p style="font-size: 20px; color: #333;">Strategic AI integration for leadership</p>
                </div>
            </div>
            
            <div class="content-card">
                <h3 class="card-title">Dark Side of AI</h3>
                <div style="margin-top: 30px; text-align: center;">
                    <i class="fas fa-skull-crossbones" style="font-size: 60px; color: #d32f2f; margin-bottom: 20px;"></i>
                    <p style="font-size: 20px; color: #333;">Malicious AI applications and adversarial threats</p>
                </div>
            </div>
        </div>`
    );
    addSlide(3, 
        "Threat Categories", 
        "Understanding different types of cybersecurity threats and their characteristics",
        `<div style="display: flex; gap: 40px; padding: 20px 0;">
            <!-- Left Column -->
            <div style="flex: 1; display: flex; flex-direction: column; gap: 25px;">
                <!-- Ransomware -->
                <div class="content-card" style="height: 100%;">
                    <div style="text-align: center;">
                        <i class="fas fa-lock" style="font-size: 48px; color: #d32f2f; margin-bottom: 15px;"></i>
                        <h3 class="card-title">Ransomware</h3>
                        <p style="font-size: 16px; color: #666; margin-top: 15px;">
                            Encrypts data and demands payment for decryption
                        </p>
                    </div>
                </div>
                
                <!-- APT (Advanced Persistent Threat) -->
                <div class="content-card" style="height: 100%;">
                    <div style="text-align: center;">
                        <i class="fas fa-user-ninja" style="font-size: 48px; color: #0056b3; margin-bottom: 15px;"></i>
                        <h3 class="card-title">APT</h3>
                        <p style="font-size: 16px; color: #666; margin-top: 15px;">
                            Long-term targeted attacks by skilled adversaries
                        </p>
                    </div>
                </div>
                
              
            </div>
            
            <!-- Right Column -->
            <div style="flex: 1; display: flex; flex-direction: column; gap: 25px;">
                <!-- Trojan -->
                <div class="content-card" style="height: 100%;">
                    <div style="text-align: center;">
                        <i class="fas fa-gift" style="font-size: 48px; color: #ff6b35; margin-bottom: 15px;"></i>
                        <h3 class="card-title">Trojan</h3>
                        <p style="font-size: 16px; color: #666; margin-top: 15px;">
                            Disguised as legitimate software to gain access
                        </p>
                    </div>
                </div>
                
                <!-- Virus -->
                <div class="content-card" style="height: 100%;">
                    <div style="text-align: center;">
                        <i class="fas fa-biohazard" style="font-size: 48px; color: #d32f2f; margin-bottom: 15px;"></i>
                        <h3 class="card-title">Virus</h3>
                        <p style="font-size: 16px; color: #666; margin-top: 15px;">
                            Self-replicating malware that infects other files
                        </p>
                    </div>
                </div>   
            </div>

            <div style="flex: 1; display: flex; flex-direction: column; gap: 25px;">
                <!-- Rootkit -->
                <div class="content-card" style="height: 100%;">
                    <div style="text-align: center;">
                        <i class="fas fa-eye-slash" style="font-size: 48px; color: #d32f2f; margin-bottom: 15px;"></i>
                        <h3 class="card-title">Rootkit</h3>
                        <p style="font-size: 16px; color: #666; margin-top: 15px;">
                            Hides malware deep within system components
                        </p>
                    </div>
                </div>
                
                <!-- Social Engineering (with your description) -->
                <div class="content-card" style="height: 100%;">
                    <div style="text-align: center;">
                        <i class="fas fa-question" style="font-size: 48px; color: #0056b3; margin-bottom: 15px;"></i>
                        <h3 class="card-title">Social Engineering</h3>
                        <p style="font-size: 16px; color: #666; margin-top: 15px;">
                            Human manipulation techniques that exploit psychology rather than technical hacking
                        </p>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(4, 
        "Social Engineering", 
        "Human manipulation techniques that exploit psychology rather than technical hacking",
        `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 40px; width: 100%;">
                <div style="text-align: center; max-width: 800px;">
                    <i class="fas fa-users" style="font-size: 100px; color: #d32f2f; margin-bottom: 30px;"></i>
                    <h2 style="color: #d32f2f; font-size: 32px; margin-bottom: 20px;">The Art of Human Hacking</h2>
                    <p style="font-size: 24px; line-height: 1.6; color: #333;">
                        Social engineering bypasses technical defenses by manipulating the human element - 
                        the most vulnerable link in any security chain.
                    </p>
                </div>
            </div>
            
            <div style="margin-top: 50px; text-align: center;">
                <div style="display: inline-flex; align-items: center; background-color: rgba(211, 47, 47, 0.1); padding: 15px 30px; border-radius: 10px; border: 2px solid rgba(211, 47, 47, 0.3);">
                    <i class="fas fa-exclamation-triangle" style="color: #d32f2f; font-size: 24px; margin-right: 15px;"></i>
                    <p style="font-size: 18px; color: #333; margin: 0;">
                        <strong>Remember:</strong> No firewall can stop a convincing phone call or a persuasive email
                    </p>
                </div>
            </div>
        </div>`
    );
    addSlide(5, 
        "Phishing", 
        "The most prevalent social engineering attack targeting organizations worldwide",
        `<div style="display: flex; flex-direction: column;">            
            <div class="content-grid" style="margin-top: 20px;">
                <div class="content-card">
                    <div style="text-align: center;">
                        <div class="stat-highlight" style="color: #d32f2f; font-size:75px; font-weight: bolder;">91%</div>
                        <div class="stat-label">of all cyber attacks start with phishing</div>
                    </div>
                </div>
                
                <div class="content-card">
                    <div style="text-align: center;">
                        <div class="stat-highlight" style="color: #d32f2f; font-size:75px; font-weight: bolder;">25%</div>
                        <div class="stat-label">average phishing success rate</div>
                    </div>
                </div>
                
                <div class="content-card">
                    <div style="text-align: center;">
                        <div class="stat-highlight" style="color: #d32f2f; font-size:75px; font-weight: bolder;">$4.65M</div>
                        <div class="stat-label">average cost of phishing attack</div>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 40px;">                
                <div class="content-grid" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="content-card" style="background-color: rgba(56, 142, 60, 0.05); border-top: 5px solid #388e3c;">
                        <h4 class="card-title" style="color: #388e3c;">With Regular Training</h4>
                        <div class="stat-highlight" style="color: #388e3c;font-size:50px; font-weight: bold;">↓ 70%</div>
                    </div>
                    
                    <div class="content-card" style="background-color: rgba(245, 124, 0, 0.05); border-top: 5px solid #f57c00;">
                        <h4 class="card-title" style="color: #f57c00;">Without Training</h4>
                        <div class="stat-highlight" style="color: #f57c00;font-size:50px; font-weight: bold;">↑ 300%</div>
                    </div>
                </div>
            </div>`
    );
    addSlide(6, 
        "Phishing Types", 
        "Different categories of phishing attacks based on target and methodology",
        `<div style="display: flex; flex-direction: column;">
            <div class="content-grid" style="grid-template-columns: repeat(5, 1fr); gap: 20px; margin-top: 20px;">
                <!-- Spear Phishing -->
                <div class="content-card" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 20px;">
                    <i class="fa-solid fa-bullseye" style="font-size: 70px; color: #d32f2f; margin-bottom: 25px;"></i>
                    <h3 class="card-title" style="font-size: 28px;">Spear Phishing</h3>
                    <div style="margin-top: 20px; width: 100%;">
                        <div style="height: 4px; background: linear-gradient(to right, #d32f2f, #ff6b35); border-radius: 2px;"></div>
                    </div>
                </div>
                
                <!-- Mass Phishing -->
                <div class="content-card" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 20px;">
                    <i class="fa-solid fa-broadcast-tower" style="font-size: 70px; color: #0056b3; margin-bottom: 25px;"></i>
                    <h3 class="card-title" style="font-size: 28px;">Mass Phishing</h3>
                    <div style="margin-top: 20px; width: 100%;">
                        <div style="height: 4px; background: linear-gradient(to right, #0056b3, #ff6b35); border-radius: 2px;"></div>
                    </div>
                </div>
                
                <!-- Whaling -->
                <div class="content-card" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 20px;">
                    <i class="fa-solid fa-crown" style="font-size: 70px; color: #ff6b35; margin-bottom: 25px;"></i>
                    <h3 class="card-title" style="font-size: 28px;">Whaling</h3>
                    <div style="margin-top: 20px; width: 100%;">
                        <div style="height: 4px; background: linear-gradient(to right, #ff6b35, #d32f2f); border-radius: 2px;"></div>
                    </div>
                </div>

                 <!-- Vishing -->
                <div class="content-card" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 20px;">
                    <i class="fa-solid fa-phone-slash" style="font-size: 70px; color: #066916ff; margin-bottom: 25px;"></i>
                    <h3 class="card-title" style="font-size: 28px;">Vishing</h3>
                    <div style="margin-top: 20px; width: 100%;">
                        <div style="height: 4px; background: linear-gradient(to right, #d32f2f, #035518ff); border-radius: 2px;"></div>
                    </div>
                </div>

                 <!-- Smishing -->
                <div class="content-card" style="text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 20px;">
                    <i class="fa-solid fa-mobile-screen-button" style="font-size: 70px; color: #29011fff; margin-bottom: 25px;"></i>
                    <h3 class="card-title" style="font-size: 28px;">Smishing</h3>
                    <div style="margin-top: 20px; width: 100%;">
                        <div style="height: 4px; background: linear-gradient(to right, #035518ff,#29011fff); border-radius: 2px;"></div>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 50px; display: flex; justify-content: space-around; align-items: flex-start;">
                <!-- Spear Phishing Details -->
                <div style="text-align: center; max-width: 300px;">
                    <div style="display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; background-color: rgba(211, 47, 47, 0.1); border-radius: 50%; margin-bottom: 15px;">
                        <span style="font-weight: bold; color: #d32f2f; font-size: 20px;">1</span>
                    </div>
                    <h4 style="color: #0056b3; margin-bottom: 10px;">Targeted Individuals</h4>
                    <p style="font-size: 16px; color: #666; line-height: 1.5;">
                        Highly personalized attacks on specific individuals or roles
                    </p>
                </div>
                
                <!-- Mass Phishing Details -->
                <div style="text-align: center; max-width: 300px;">
                    <div style="display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; background-color: rgba(0, 86, 179, 0.1); border-radius: 50%; margin-bottom: 15px;">
                        <span style="font-weight: bold; color: #0056b3; font-size: 20px;">2</span>
                    </div>
                    <h4 style="color: #0056b3; margin-bottom: 10px;">Broad Campaigns</h4>
                    <p style="font-size: 16px; color: #666; line-height: 1.5;">
                        Generic attacks sent to thousands of recipients simultaneously
                    </p>
                </div>
                
                <!-- Whaling Details -->
                <div style="text-align: center; max-width: 300px;">
                    <div style="display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; background-color: rgba(255, 107, 53, 0.1); border-radius: 50%; margin-bottom: 15px;">
                        <span style="font-weight: bold; color: #ff6b35; font-size: 20px;">3</span>
                    </div>
                    <h4 style="color: #0056b3; margin-bottom: 10px;">Executive Targeting</h4>
                    <p style="font-size: 16px; color: #666; line-height: 1.5;">
                        Sophisticated attacks focused on C-level executives and leadership
                    </p>
                </div>

                 <!-- Vishing Details -->
                <div style="text-align: center; max-width: 300px;">
                    <div style="display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; background-color: rgba(255, 107, 53, 0.1); border-radius: 50%; margin-bottom: 15px;">
                        <span style="font-weight: bold; color: #066916ff; font-size: 20px;">4</span>
                    </div>
                    <h4 style="color: #0056b3; margin-bottom: 10px;">Via Voice</h4>
                    <p style="font-size: 16px; color: #666; line-height: 1.5;">
                        Phishing attacks conducted through phone calls
                    </p>
                </div>

                <!-- Smishing Details -->
                <div style="text-align: center; max-width: 300px;">
                    <div style="display: inline-flex; align-items: center; justify-content: center; width: 50px; height: 50px; background-color: rgba(255, 107, 53, 0.1); border-radius: 50%; margin-bottom: 15px;">
                        <span style="font-weight: bold; color: #29011fff; font-size: 20px;">5</span>
                    </div>
                    <h4 style="color: #0056b3; margin-bottom: 10px;">Via SMS</h4>
                    <p style="font-size: 16px; color: #666; line-height: 1.5;">
                        Phishing attacks conducted through text messages
                    </p>
                </div>
            </div>
        </div>`
    );
    addSlide(7, 
        "Phishing Practice", 
        "Phishing Practice using Google",
        `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">            
            <a class="slide-description" href="https://phishingquiz.withgoogle.com/" target="_blank" style="text-decoration: none; font-size: 50px; display: block; "> 
                <img src="./phishing.png" alt="Phishing Example" style="width: 25vw; height: auto;"/>
           </a>
        </div>`
    );
    addSlide(8, 
        "USB Baiting", 
        "Physical social engineering attack exploiting human curiosity with infected storage devices",
        `<div style="display: flex; flex-direction: column;">            
            <div class="content-grid" style="margin-top: 20px;">
                <div class="content-card">
                    <div style="text-align: center;">
                        <div class="stat-highlight" style="color: #d32f2f; font-size:75px; font-weight: bolder;">48%</div>
                        <div class="stat-label">of people will plug in a found USB</div>
                    </div>
                </div>
                
                <div class="content-card">
                    <div style="text-align: center;">
                        <div class="stat-highlight" style="color: #d32f2f;font-size:75px; font-weight: bolder;">68%</div>
                        <div class="stat-label">success rate in corporate tests</div>
                    </div>
                </div>
                
                <div class="content-card">
                    <div style="text-align: center;">
                        <div class="stat-highlight" style="color: #d32f2f;font-size:75px; font-weight: bolder;">90%</div>
                        <div class="stat-label">of dropped USBs are activated</div>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 40px;">
                <h3 style="color: #0056b3; font-size: 24px; margin-bottom: 20px; border-bottom: 2px solid #ff6b35; padding-bottom: 10px;">
                    <i class="fa-solid fa-chart-pie" style="margin-right: 10px;"></i>
                    Comparison with Phishing Attacks
                </h3>
                
                <div class="content-grid" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="content-card" style="background-color: rgba(211, 47, 47, 0.05); border-top: 5px solid #d32f2f;">
                        <h4 class="card-title" style="color: #d32f2f;">USB Baiting Success Rate</h4>
                        <div class="stat-highlight" style="color: #d32f2f; font-size: 36px;">68%</div>
                        <div style="height: 20px; background-color: #e0e0e0; border-radius: 10px; margin: 15px 0; overflow: hidden;">
                            <div style="width: 68%; height: 100%; background-color: #d32f2f;"></div>
                        </div>
                        <p class="card-content">
                            Higher success rate than many phishing campaigns due to physical element
                        </p>
                    </div>
                    
                    <div class="content-card" style="background-color: rgba(0, 86, 179, 0.05); border-top: 5px solid #0056b3;">
                        <h4 class="card-title" style="color: #0056b3;">Phishing Success Rate</h4>
                        <div class="stat-highlight" style="color: #0056b3; font-size: 36px;">25%</div>
                        <div style="height: 20px; background-color: #e0e0e0; border-radius: 10px; margin: 15px 0; overflow: hidden;">
                            <div style="width: 25%; height: 100%; background-color: #0056b3;"></div>
                        </div>
                        <p class="card-content">
                            Average click-through rate for phishing emails in corporate environments
                        </p>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(9, 
        "Tailgating", 
        "Physical security breach where unauthorized persons follow authorized individuals into restricted areas",
        `<div style="display: flex; flex-direction: column;">
            <div style="margin-top: 30px;">
                <h3 style="color: #0056b3; font-size: 24px; margin-bottom: 30px; text-align: center;">
                    <i class="fa-solid fa-list-check" style="margin-right: 10px;"></i>
                    Common Tailgating Scenarios
                </h3>
                
                <div class="content-grid" style="grid-template-columns: repeat(6, 1fr); gap: 25px;">
                    <!-- Scenario 1 -->
                    <div class="content-card" style="text-align: center;">
                        <i class="fa-solid fa-hands-helping" style="font-size: 48px; color: #d32f2f; margin-bottom: 20px;"></i>
                        <h4 class="card-title">"Hold the Door"</h4>
                    </div>
                    
                    <!-- Scenario 2 -->
                    <div class="content-card" style="text-align: center;">
                        <i class="fa-solid fa-box" style="font-size: 48px; color: #0056b3; margin-bottom: 20px;"></i>
                        <h4 class="card-title">Delivery Person</h4>
                    </div>
                    
                    <!-- Scenario 3 -->
                    <div class="content-card" style="text-align: center;">
                        <i class="fa-solid fa-id-card" style="font-size: 48px; color: #ff6b35; margin-bottom: 20px;"></i>
                        <h4 class="card-title">"Forgot My Badge"</h4>
                    </div>
                    
                    <!-- Scenario 4 -->
                    <div class="content-card" style="text-align: center;">
                        <i class="fa-solid fa-coffee" style="font-size: 48px; color: #d32f2f; margin-bottom: 20px;"></i>
                        <h4 class="card-title">Coffee/Water Break</h4>
                    </div>
                    
                    <!-- Scenario 5 -->
                    <div class="content-card" style="text-align: center;">
                        <i class="fa-solid fa-toolbox" style="font-size: 48px; color: #0056b3; margin-bottom: 20px;"></i>
                        <h4 class="card-title">Maintenance Worker</h4>
                    </div>
                    
                    <!-- Scenario 6 -->
                    <div class="content-card" style="text-align: center;">
                        <i class="fa-solid fa-phone" style="font-size: 48px; color: #ff6b35; margin-bottom: 20px;"></i>
                        <h4 class="card-title">Distracted Entry</h4>
                    </div>
                </div>
            </div>
            <div style="margin-top: 40px;">
                <div class="content-grid" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="content-card" style="background-color: rgba(211, 47, 47, 0.05); border-top: 5px solid #d32f2f;">
                        <h4 class="card-title" style="color: #d32f2f;">
                            <i class="fa-solid fa-chart-line" style="margin-right: 10px; "></i>
                            Success Rate
                        </h4>
                        <div class="stat-highlight" style="color: #d32f2f;font-size:50px; font-weight: bolder;">70-80%</div>
                    </div>
                    
                    <div class="content-card" style="background-color: rgba(0, 86, 179, 0.05); border-top: 5px solid #0056b3;">
                        <h4 class="card-title" style="color: #0056b3;">
                            <i class="fa-solid fa-clock" style="margin-right: 10px;"></i>
                            Time to Breach
                        </h4>
                        <div class="stat-highlight" style="color: #0056b3; font-size:50px; font-weight: bolder;">Under 30s</div>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(10, 
        "Password Security Fundamentals", 
        "The critical importance of strong password policies in organizational security",
        `<div style="display: flex; flex-direction: column;">
            <div style="margin-top: 20px;">
                <h3 style="color: #0056b3; font-size: 24px; margin-bottom: 25px; text-align: center;">
                    <i class="fa-solid fa-lock" style="margin-right: 10px;"></i>
                    Password Strength Essentials
                </h3>
                
                <div class="content-grid" style="grid-template-columns: repeat(3, 1fr); gap: 25px;">
                    <!-- Strength 1 -->
                    <div class="content-card" style="background-color: rgba(56, 142, 60, 0.05);">
                        <div style="text-align: center;">
                            <i class="fa-solid fa-ruler-combined" style="font-size: 48px; color: #388e3c; margin-bottom: 20px;"></i>
                            <h4 class="card-title" style="color: #388e3c;">Length Matters</h4>
                            <div class="stat-highlight" style="color: #388e3c;">12+ Characters</div>
                        </div>
                    </div>
                    
                    <!-- Strength 2 -->
                    <div class="content-card" style="background-color: rgba(0, 86, 179, 0.05);">
                        <div style="text-align: center;">
                            <i class="fa-solid fa-shuffle" style="font-size: 48px; color: #0056b3; margin-bottom: 20px;"></i>
                            <h4 class="card-title" style="color: #0056b3;">Complexity Required</h4>
                            <div class="stat-highlight" style="color: #0056b3;">4 Character Types</div>
                        </div>
                    </div>
                    
                    <!-- Strength 3 -->
                    <div class="content-card" style="background-color: rgba(255, 107, 53, 0.05);">
                        <div style="text-align: center;">
                            <i class="fa-solid fa-repeat" style="font-size: 48px; color: #ff6b35; margin-bottom: 20px;"></i>
                            <h4 class="card-title" style="color: #ff6b35;">Uniqueness Critical</h4>
                            <div class="stat-highlight" style="color: #ff6b35;">0 Reuse</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 40px;">
                <div class="content-grid" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="content-card" style="border-top: 5px solid #d32f2f;">
                        <h4 class="card-title" style="color: #d32f2f;">
                            <i class="fa-solid fa-stopwatch" style="margin-right: 10px;"></i>
                            Cracking Time Comparison
                        </h4>
                        <div style="margin-top: 20px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span style="font-size: 16px; color: #333;">8 chars (basic)</span>
                                <span style="font-size: 16px; color: #d32f2f; font-weight: bold;">2 hours</span>
                            </div>
                            <div style="height: 10px; background-color: #e0e0e0; border-radius: 5px; margin-bottom: 15px; overflow: hidden;">
                                <div style="width: 15%; height: 100%; background-color: #d32f2f;"></div>
                            </div>
                            
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <span style="font-size: 16px; color: #333;">12 chars (complex)</span>
                                <span style="font-size: 16px; color: #388e3c; font-weight: bold;">200+ years</span>
                            </div>
                            <div style="height: 10px; background-color: #e0e0e0; border-radius: 5px; margin-bottom: 15px; overflow: hidden;">
                                <div style="width: 95%; height: 100%; background-color: #388e3c;"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="content-card" style="border-top: 5px solid #0056b3;">
                        <h4 class="card-title" style="color: #0056b3;">
                            <i class="fa-solid fa-percentage" style="margin-right: 10px;"></i>
                            Password-Related Breaches
                        </h4>
                        <div class="stat-highlight" style="color: #0056b3; font-size: 75px; font-weight:bolder;">81%</div>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(11, 
        "Common Password Security Issues", 
        "Identifying and addressing prevalent password vulnerabilities in organizations",
        `<div style="display: flex; flex-direction: column;"> 
            <div style="margin-top: 20px;">
                <h3 style="color: #0056b3; font-size: 24px; margin-bottom: 25px; text-align: center;">
                    <i class="fa-solid fa-bug" style="margin-right: 10px;"></i>
                    Top Password Security Failures
                </h3>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin-bottom: 30px;">
                    <!-- Issue 1 -->
                    <div style="display: flex; align-items: flex-start; background-color: rgba(211, 47, 47, 0.05); padding: 25px; border-radius: 10px; border-left: 5px solid #d32f2f;">
                        <div style="width: 60px; flex-shrink: 0; text-align: center;">
                            <div style="width: 50px; height: 50px; background-color: #d32f2f; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                                <span style="font-weight: bold; color: white; font-size: 24px;">1</span>
                            </div>
                        </div>
                        <div>
                            <h4 style="color: #d32f2f; font-size: 22px; margin-bottom: 10px;">Password Reuse</h4>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                <strong>65% of users</strong> reuse passwords across multiple accounts. 
                                One compromised password gives access to multiple systems.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Issue 2 -->
                    <div style="display: flex; align-items: flex-start; background-color: rgba(211, 47, 47, 0.05); padding: 25px; border-radius: 10px; border-left: 5px solid #d32f2f;">
                        <div style="width: 60px; flex-shrink: 0; text-align: center;">
                            <div style="width: 50px; height: 50px; background-color: #d32f2f; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                                <span style="font-weight: bold; color: white; font-size: 24px;">2</span>
                            </div>
                        </div>
                        <div>
                            <h4 style="color: #d32f2f; font-size: 22px; margin-bottom: 10px;">Weak Password Patterns</h4>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                Common patterns like "Password123", seasons + years, or simple keyboard walks 
                                are easily guessed by attackers.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Issue 3 -->
                    <div style="display: flex; align-items: flex-start; background-color: rgba(245, 124, 0, 0.05); padding: 25px; border-radius: 10px; border-left: 5px solid #f57c00;">
                        <div style="width: 60px; flex-shrink: 0; text-align: center;">
                            <div style="width: 50px; height: 50px; background-color: #f57c00; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                                <span style="font-weight: bold; color: white; font-size: 24px;">3</span>
                            </div>
                        </div>
                        <div>
                            <h4 style="color: #f57c00; font-size: 22px; margin-bottom: 10px;">Written Down Passwords</h4>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                <strong>30% of employees</strong> write passwords on sticky notes or documents, 
                                creating physical security vulnerabilities.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Issue 4 -->
                    <div style="display: flex; align-items: flex-start; background-color: rgba(245, 124, 0, 0.05); padding: 25px; border-radius: 10px; border-left: 5px solid #f57c00;">
                        <div style="width: 60px; flex-shrink: 0; text-align: center;">
                            <div style="width: 50px; height: 50px; background-color: #f57c00; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                                <span style="font-weight: bold; color: white; font-size: 24px;">4</span>
                            </div>
                        </div>
                        <div>
                            <h4 style="color: #f57c00; font-size: 22px; margin-bottom: 10px;">Sharing Credentials</h4>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                Team password sharing eliminates accountability and creates audit trail gaps, 
                                violating compliance requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(12, 
        "Common Password Security Issues", 
        "Identifying and addressing prevalent password vulnerabilities in organizations",
        `<div style="display: flex; flex-direction: column;">  
            <div style="margin-top: 20px;">
                <div class="content-grid" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="content-card" style="background-color: rgba(211, 47, 47, 0.05); border-top: 5px solid #d32f2f;">
                        <h4 class="card-title" style="color: #d32f2f;">
                            <i class="fa-solid fa-chart-pie" style="margin-right: 10px;"></i>
                            Most Common Weak Passwords
                        </h4>
                        <ul style="font-size: 17px; color: #333; line-height: 1.6; margin-top: 15px;">
                            <li><strong>1. 123456</strong> (Used 23 million times)</li>
                            <li><strong>2. password</strong> (4.9 million uses)</li>
                            <li><strong>3. 12345678</strong> (3.8 million uses)</li>
                            <li><strong>4. qwerty</strong> (3.5 million uses)</li>
                            <li><strong>5. 123456789</strong> (3.1 million uses)</li>
                        </ul>
                    </div>
                    
                    <div class="content-card" style="background-color: rgba(0, 86, 179, 0.05); border-top: 5px solid #0056b3;">
                        <h4 class="card-title" style="color: #0056b3;">
                            <i class="fa-solid fa-business-time" style="margin-right: 10px;"></i>
                            Business Impact Statistics
                        </h4>
                        <div class="stat-highlight" style="color: #0056b3; font-size: 50px; font-weight: bolder;">70%</div>
                        <p class="card-content">
                            of employees reuse passwords between work and personal accounts
                        </p>
                        <div class="stat-highlight" style="color: #0056b3; font-size: 72px; margin-top: 15px; font-weight: bolder;">$180</div>
                        <p class="card-content">
                            cost per employee for password resets annually
                        </p>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(13, 
        "Password Managers & Generators", 
        "Enterprise solutions for secure password management and generation",
        `<div style="display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; margin-bottom: 40px;">
                <div style="flex: 1; text-align: center;">
                    <i class="fa-solid fa-vault" style="font-size: 100px; color: #0056b3; margin-right: 30px;"></i>
                </div>
            </div>
            
            <div style="margin-top: 20px;">
                <h3 style="color: #0056b3; font-size: 24px; margin-bottom: 30px; text-align: center;">
                    <i class="fa-solid fa-puzzle-piece" style="margin-right: 10px;"></i>
                    Password Management Ecosystem
                </h3>
                
                <div class="content-grid" style="grid-template-columns: repeat(3, 1fr); gap: 25px;">
                    <!-- Solution 1 -->
                    <div class="content-card" style="background-color: rgba(0, 86, 179, 0.05);">
                        <div style="text-align: center;">
                            <i class="fa-solid fa-database" style="font-size: 48px; color: #0056b3; margin-bottom: 20px;"></i>
                            <h4 class="card-title" style="color: #0056b3;">Password Managers</h4>
                            <p class="card-content">
                                Encrypted vaults that store and auto-fill unique, complex passwords
                            </p>
                            <div style="margin-top: 15px; padding: 10px; background-color: rgba(0, 86, 179, 0.1); border-radius: 8px;">
                                <span style="font-size: 14px; color: #0056b3;"><strong>Benefits:</strong> Single master password, Auto-fill, Cross-device sync</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Solution 2 -->
                    <div class="content-card" style="background-color: rgba(56, 142, 60, 0.05);">
                        <div style="text-align: center;">
                            <i class="fa-solid fa-gears" style="font-size: 48px; color: #388e3c; margin-bottom: 20px;"></i>
                            <h4 class="card-title" style="color: #388e3c;">Password Generators</h4>
                            <p class="card-content">
                                Tools that create random, high-entropy passwords meeting security policies
                            </p>
                            <div style="margin-top: 15px; padding: 10px; background-color: rgba(56, 142, 60, 0.1); border-radius: 8px;">
                                <span style="font-size: 14px; color: #388e3c;"><strong>Benefits:</strong> Policy compliance, True randomness, No human bias</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Solution 3 -->
                    <div class="content-card" style="background-color: rgba(255, 107, 53, 0.05);">
                        <div style="text-align: center;">
                            <i class="fa-solid fa-users-gear" style="font-size: 48px; color: #ff6b35; margin-bottom: 20px;"></i>
                            <h4 class="card-title" style="color: #ff6b35;">Enterprise Features</h4>
                            <p class="card-content">
                                Centralized administration, team sharing, and security auditing
                            </p>
                            <div style="margin-top: 15px; padding: 10px; background-color: rgba(255, 107, 53, 0.1); border-radius: 8px;">
                                <span style="font-size: 14px; color: #ff6b35;"><strong>Benefits:</strong> Admin controls, Usage reports, Emergency access</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(14, 
        "Artificial Intelligence Security", 
        "Best practices for while using Artificial Intelligence tools",
        ``
    );
    addSlide(15, 
        "Executive LLM Security", 
        "Best practices for C-level leaders when using Large Language Models",
        `<div style="display: flex; flex-direction: column;">          
            <div style="margin-top: 20px;">
                <h3 style="color: #0056b3; font-size: 24px; margin-bottom: 25px; text-align: center;">
                    <i class="fa-solid fa-triangle-exclamation" style="margin-right: 10px;"></i>
                    Executive-Specific LLM Risks
                </h3>
                
                <div class="content-grid" style="grid-template-columns: repeat(3, 1fr); gap: 25px;">
                    <!-- Risk 1 -->
                    <div class="content-card" style="background-color: rgba(211, 47, 47, 0.05);">
                        <div style="text-align: center;">
                            <i class="fa-solid fa-file-contract" style="font-size: 48px; color: #d32f2f; margin-bottom: 20px;"></i>
                            <h4 class="card-title" style="color: #d32f2f;">Confidential Data Exposure</h4>
                            <p class="card-content">
                                Executives may inadvertently input strategic plans, M&A details, or financial data
                            </p>
                        </div>
                    </div>
                    
                    <!-- Risk 2 -->
                    <div class="content-card" style="background-color: rgba(245, 124, 0, 0.05);">
                        <div style="text-align: center;">
                            <i class="fa-solid fa-scale-balanced" style="font-size: 48px; color: #f57c00; margin-bottom: 20px;"></i>
                            <h4 class="card-title" style="color: #f57c00;">Decision Integrity</h4>
                            <p class="card-content">
                                Over-reliance on AI-generated analysis without proper validation
                            </p>
                        </div>
                    </div>
                    
                    <!-- Risk 3 -->
                    <div class="content-card" style="background-color: rgba(211, 47, 47, 0.05);">
                        <div style="text-align: center;">
                            <i class="fa-solid fa-user-secret" style="font-size: 48px; color: #d32f2f; margin-bottom: 20px;"></i>
                            <h4 class="card-title" style="color: #d32f2f;">Impersonation Attacks</h4>
                            <p class="card-content">
                                AI-generated voice/video deepfakes mimicking executives for fraud
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(16, 
        "Executive LLM Security", 
        "Best practices for C-level leaders when using Large Language Models",
        `<div style="display: flex; flex-direction: column;">                      
            <div style="margin-top: 40px;">
                <div class="content-grid" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="content-card" style="border-top: 5px solid #d32f2f;">
                        <h4 class="card-title" style="color: #d32f2f;">
                            <i class="fa-solid fa-chart-line" style="margin-right: 10px;"></i>
                            Executive Attack Statistics
                        </h4>
                        <div class="stat-highlight" style="color: #d32f2f; font-size:50px;">85%</div>
                        <p class="card-content">
                            of executives have used public LLMs for work-related tasks
                        </p>
                        <div class="stat-highlight" style="color: #d32f2f; font-size:75px; font-weight:bolder margin-top: 15px;">63%</div>
                        <p class="card-content">
                            admitted inputting potentially sensitive company information
                        </p>
                    </div>
                    
                    <div class="content-card" style="border-top: 5px solid #0056b3;">
                        <h4 class="card-title" style="color: #0056b3;">
                            <i class="fa-solid fa-clock" style="margin-right: 10px;"></i>
                            Response Time Impact
                        </h4>
                        <div class="stat-highlight" style="color: #0056b3; font-size:50px;">3.5x</div>
                        <p class="card-content">
                            Faster executive decision-making using LLMs
                        </p>
                        <div class="stat-highlight" style="color: #0056b3; font-size: 32px; margin-top: 15px;font-size:75px; font-weight:bolder">40%</div>
                        <p class="card-content">
                            Higher likelihood of data leakage at executive level
                        </p>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(17, 
        "Executive LLM Security Guidelines", 
        "Practical security protocols for C-level leaders using AI tools",
        `<div style="display: flex; flex-direction: column;">        
            <div style="margin-top: 20px;">
                <h3 style="color: #0056b3; font-size: 24px; margin-bottom: 25px; text-align: center;">
                    <i class="fa-solid fa-list-check" style="margin-right: 10px;"></i>
                    5 Essential Executive LLM Security Rules
                </h3>
                
                <div style="display: flex; flex-direction: column; gap: 25px; margin-bottom: 30px;">
                    <!-- Rule 1 -->
                    <div style="display: flex; align-items: flex-start; background-color: rgba(0, 86, 179, 0.05); padding: 25px; border-radius: 10px; border-left: 5px solid #0056b3;">
                        <div style="width: 60px; flex-shrink: 0; text-align: center;">
                            <div style="width: 50px; height: 50px; background-color: #0056b3; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                                <span style="font-weight: bold; color: white; font-size: 24px;">1</span>
                            </div>
                        </div>
                        <div>
                            <h4 style="color: #0056b3; font-size: 22px; margin-bottom: 10px;">Use Approved Enterprise LLMs Only</h4>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                Never use public/free LLM services (ChatGPT, Bard, etc.) for any work-related tasks. 
                                Only use company-approved, secured AI platforms with data protection guarantees.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Rule 2 -->
                    <div style="display: flex; align-items: flex-start; background-color: rgba(255, 107, 53, 0.05); padding: 25px; border-radius: 10px; border-left: 5px solid #ff6b35;">
                        <div style="width: 60px; flex-shrink: 0; text-align: center;">
                            <div style="width: 50px; height: 50px; background-color: #ff6b35; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                                <span style="font-weight: bold; color: white; font-size: 24px;">2</span>
                            </div>
                        </div>
                        <div>
                            <h4 style="color: #ff6b35; font-size: 22px; margin-bottom: 10px;">Data Classification Before Input</h4>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                Never input Confidential or Restricted information. Treat all proprietary data, 
                                strategic plans, financial projections, and personnel information as off-limits.
                            </p>
                        </div>
                    </div>
                    
                    <!-- Rule 3 -->
                    <div style="display: flex; align-items: flex-start; background-color: rgba(56, 142, 60, 0.05); padding: 25px; border-radius: 10px; border-left: 5px solid #388e3c;">
                        <div style="width: 60px; flex-shrink: 0; text-align: center;">
                            <div style="width: 50px; height: 50px; background-color: #388e3c; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                                <span style="font-weight: bold; color: white; font-size: 24px;">3</span>
                            </div>
                        </div>
                        <div>
                            <h4 style="color: #388e3c; font-size: 22px; margin-bottom: 10px;">Verification Mandate</h4>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                All AI-generated content must be independently verified before use in decisions, 
                                communications, or presentations. Never delegate critical thinking to AI.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(18, 
        "Executive LLM Security Guidelines", 
        "Practical security protocols for C-level leaders using AI tools",
        `<div style="display: flex; flex-direction: column;">                    
            <div style="margin-top: 20px;">
                <div class="content-grid" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="content-card" style="background-color: rgba(0, 86, 179, 0.05); border-top: 5px solid #0056b3;">
                        <h4 class="card-title" style="color: #0056b3;">
                            <i class="fa-solid fa-check-circle" style="margin-right: 10px;"></i>
                            Approved Executive Uses
                        </h4>
                        <ul style="font-size: 17px; color: #333; line-height: 1.6; margin-top: 15px;">
                            <li><strong>Drafting non-sensitive communications</strong></li>
                            <li><strong>Market research analysis (public data)</strong></li>
                            <li><strong>Presentation formatting and structuring</strong></li>
                            <li><strong>Competitor analysis (public information)</strong></li>
                            <li><strong>Industry trend summarization</strong></li>
                        </ul>
                    </div>
                    
                    <div class="content-card" style="background-color: rgba(211, 47, 47, 0.05); border-top: 5px solid #d32f2f;">
                        <h4 class="card-title" style="color: #d32f2f;">
                            <i class="fa-solid fa-ban" style="margin-right: 10px;"></i>
                            Prohibited Executive Uses
                        </h4>
                        <ul style="font-size: 17px; color: #333; line-height: 1.6; margin-top: 15px;">
                            <li><strong>Financial projections or sensitive data</strong></li>
                            <li><strong>Legal document analysis or creation</strong></li>
                            <li><strong>Employee performance evaluations</strong></li>
                            <li><strong>Merger/acquisition strategy</strong></li>
                            <li><strong>Board meeting preparations</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(19, 
        "Deepfake & Impersonation Risks", 
        "Deepfake technology threats targeting executives and mitigation strategies",
        ``
    );
    addSlide(20, 
        "Deepfake Threat Landscape", 
        "Understanding AI-generated impersonation risks to organizational security",
        `<div style="display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; margin-bottom: 40px;">
                <div style="flex: 1; text-align: center;">
                    <i class="fa-solid fa-user-secret" style="font-size: 100px; color: #d32f2f; margin-right: 30px;"></i>
                </div>
                <div style="flex: 3;">
                    <h2 style="color: #0056b3; font-size: 28px; margin-bottom: 15px;">The Deepfake Revolution</h2>
                    <p style="font-size: 20px; line-height: 1.6; color: #333;">
                        AI-generated synthetic media that realistically impersonates individuals has evolved from 
                        entertainment novelty to sophisticated cybersecurity threat targeting organizations worldwide.
                    </p>
                </div>
            </div>
            
            <div style="margin-top: 20px;">
                <h3 style="color: #0056b3; font-size: 24px; margin-bottom: 25px; text-align: center;">
                    <i class="fa-solid fa-chart-line" style="margin-right: 10px;"></i>
                    Deepfake Growth Statistics
                </h3>
                
                <div class="content-grid" style="grid-template-columns: repeat(3, 1fr); gap: 25px;">
                    <!-- Stat 1 -->
                    <div class="content-card" style="background-color: rgba(211, 47, 47, 0.05);">
                        <div style="text-align: center;">
                            <div class="stat-highlight" style="color: #d32f2f; font-size:75px; font-weight: bolder;">900%</div>
                            <div class="stat-label">Increase in deepfake incidents</div>
                            <p class="card-content" style="margin-top: 15px;">
                                Year-over-year growth in corporate-targeted deepfake attacks
                            </p>
                        </div>
                    </div>
                    
                    <!-- Stat 2 -->
                    <div class="content-card" style="background-color: rgba(245, 124, 0, 0.05);">
                        <div style="text-align: center;">
                            <div class="stat-highlight" style="color: #f57c00;font-size:75px; font-weight: bolder;">$2.5M</div>
                            <div class="stat-label">Average attack cost</div>
                            <p class="card-content" style="margin-top: 15px;">
                                Financial impact of successful deepfake-based fraud
                            </p>
                        </div>
                    </div>
                    
                    <!-- Stat 3 -->
                    <div class="content-card" style="background-color: rgba(211, 47, 47, 0.05);">
                        <div style="text-align: center;">
                            <div class="stat-highlight" style="color: #d32f2f;font-size:75px; font-weight: bolder;">81%</div>
                            <div class="stat-label">Business concern</div>
                            <p class="card-content" style="margin-top: 15px;">
                                of executives are concerned about deepfake threats to their organization
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(21, 
        "Deepfake Attack Vectors", 
        "Specific methods and scenarios of AI-generated impersonation attacks",
        `<div style="display: flex; flex-direction: column;"> 
            <div style="margin-top: 20px;">
                <h3 style="color: #0056b3; font-size: 24px; margin-bottom: 25px; text-align: center;">
                    <i class="fa-solid fa-vector-square" style="margin-right: 10px;"></i>
                    Primary Deepfake Attack Channels
                </h3>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin-bottom: 30px;">
                    <!-- Vector 1 -->
                    <div style="display: flex; align-items: flex-start; background-color: rgba(211, 47, 47, 0.05); padding: 25px; border-radius: 10px; border-left: 5px solid #d32f2f;">
                        <div style="width: 60px; flex-shrink: 0; text-align: center;">
                            <i class="fa-solid fa-phone-volume" style="font-size: 36px; color: #d32f2f; margin-top: 10px;"></i>
                        </div>
                        <div>
                            <h4 style="color: #d32f2f; font-size: 22px; margin-bottom: 10px;">Voice Cloning (Vishing 2.0)</h4>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                <strong>Real-time or recorded</strong> voice impersonation for phone fraud. 
                                Typically targets finance teams for urgent wire transfers or credential sharing.
                            </p>
                            <div style="margin-top: 15px; padding: 10px; background-color: rgba(211, 47, 47, 0.1); border-radius: 6px;">
                                <span style="font-size: 14px; color: #d32f2f;"><strong>Success Rate:</strong> 75% when combined with social engineering</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Vector 2 -->
                    <div style="display: flex; align-items: flex-start; background-color: rgba(211, 47, 47, 0.05); padding: 25px; border-radius: 10px; border-left: 5px solid #d32f2f;">
                        <div style="width: 60px; flex-shrink: 0; text-align: center;">
                            <i class="fa-solid fa-video" style="font-size: 36px; color: #d32f2f; margin-top: 10px;"></i>
                        </div>
                        <div>
                            <h4 style="color: #d32f2f; font-size: 22px; margin-bottom: 10px;">Video Conferencing Attacks</h4>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                <strong>Real-time deepfake injection</strong> into video calls. Used to authorize 
                                transactions, share sensitive information, or instruct teams to bypass protocols.
                            </p>
                            <div style="margin-top: 15px; padding: 10px; background-color: rgba(211, 47, 47, 0.1); border-radius: 6px;">
                                <span style="font-size: 14px; color: #d32f2f;"><strong>Detection Difficulty:</strong> High - real-time rendering improves</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Vector 3 -->
                    <div style="display: flex; align-items: flex-start; background-color: rgba(245, 124, 0, 0.05); padding: 25px; border-radius: 10px; border-left: 5px solid #f57c00;">
                        <div style="width: 60px; flex-shrink: 0; text-align: center;">
                            <i class="fa-solid fa-file-video" style="font-size: 36px; color: #f57c00; margin-top: 10px;"></i>
                        </div>
                        <div>
                            <h4 style="color: #f57c00; font-size: 22px; margin-bottom: 10px;">Pre-recorded Media</h4>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                <strong>Fake announcement videos</strong> for stock manipulation, crisis creation, 
                                or instructions sent via email/internal communications.
                            </p>
                            <div style="margin-top: 15px; padding: 10px; background-color: rgba(245, 124, 0, 0.1); border-radius: 6px;">
                                <span style="font-size: 14px; color: #f57c00;"><strong>Scale:</strong> Mass distribution possible</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Vector 4 -->
                    <div style="display: flex; align-items: flex-start; background-color: rgba(245, 124, 0, 0.05); padding: 25px; border-radius: 10px; border-left: 5px solid #f57c00;">
                        <div style="width: 60px; flex-shrink: 0; text-align: center;">
                            <i class="fa-solid fa-comment-dollar" style="font-size: 36px; color: #f57c00; margin-top: 10px;"></i>
                        </div>
                        <div>
                            <h4 style="color: #f57c00; font-size: 22px; margin-bottom: 10px;">Social Media Manipulation</h4>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                <strong>Fake executive posts</strong> impacting stock prices, partnerships, 
                                or organizational reputation. Often combined with disinformation campaigns.
                            </p>
                            <div style="margin-top: 15px; padding: 10px; background-color: rgba(245, 124, 0, 0.1); border-radius: 6px;">
                                <span style="font-size: 14px; color: #f57c00;"><strong>Response Time:</strong> Critical - minutes matter</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(22, 
        "Executive Impersonation Risks", 
        "Specific vulnerabilities and threats targeting C-level leadership",
        `<div style="display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; margin-bottom: 40px;">
                <div style="flex: 1; text-align: center;">
                    <i class="fa-solid fa-user-tie" style="font-size: 100px; color: #0056b3; margin-right: 30px;"></i>
                </div>
                <div style="flex: 3;">
                    <h2 style="color: #0056b3; font-size: 28px; margin-bottom: 15px;">C-Level Targeting Dynamics</h2>
                    <p style="font-size: 20px; line-height: 1.6; color: #333;">
                        Executives are disproportionately targeted due to their authority, access to sensitive 
                        information, and ability to authorize transactions or bypass security protocols.
                    </p>
                </div>
            </div>
            
            <div style="margin-top: 20px;">
                <h3 style="color: #0056b3; font-size: 24px; margin-bottom: 30px; text-align: center;">
                    <i class="fa-solid fa-bullseye" style="margin-right: 10px;"></i>
                    Executive-Specific Impersonation Scenarios
                </h3>
                
                <div class="content-grid" style="grid-template-columns: repeat(3, 1fr); gap: 25px;">
                    <!-- Scenario 1 -->
                    <div class="content-card" style="background-color: rgba(211, 47, 47, 0.05);">
                        <div style="text-align: center;">
                            <i class="fa-solid fa-money-bill-transfer" style="font-size: 48px; color: #d32f2f; margin-bottom: 20px;"></i>
                            <h4 class="card-title" style="color: #d32f2f;">Wire Fraud Authorization</h4>
                            <p class="card-content">
                                Fake CEO/CFO calls or videos authorizing urgent international transfers
                            </p>
                            <div style="margin-top: 15px; padding: 8px; background-color: rgba(211, 47, 47, 0.1); border-radius: 6px;">
                                <span style="font-size: 13px; color: #d32f2f;"><strong>Typical Loss:</strong> $250K-$5M</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Scenario 2 -->
                    <div class="content-card" style="background-color: rgba(245, 124, 0, 0.05);">
                        <div style="text-align: center;">
                            <i class="fa-solid fa-file-contract" style="font-size: 48px; color: #f57c00; margin-bottom: 20px;"></i>
                            <h4 class="card-title" style="color: #f57c00;">Contract/M&A Manipulation</h4>
                            <p class="card-content">
                                Impersonation during sensitive negotiations or due diligence processes
                            </p>
                            <div style="margin-top: 15px; padding: 8px; background-color: rgba(245, 124, 0, 0.1); border-radius: 6px;">
                                <span style="font-size: 13px; color: #f57c00;"><strong>Exposure:</strong> Strategic IP leakage</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Scenario 3 -->
                    <div class="content-card" style="background-color: rgba(211, 47, 47, 0.05);">
                        <div style="text-align: center;">
                            <i class="fa-solid fa-shield" style="font-size: 48px; color: #d32f2f; margin-bottom: 20px;"></i>
                            <h4 class="card-title" style="color: #d32f2f;">Security Bypass Commands</h4>
                            <p class="card-content">
                                Fake orders to IT/security teams to disable controls or grant access
                            </p>
                            <div style="margin-top: 15px; padding: 8px; background-color: rgba(211, 47, 47, 0.1); border-radius: 6px;">
                                <span style="font-size: 13px; color: #d32f2f;"><strong>Risk:</strong> Full system compromise</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(16, 
        "Deepfake Detection & Prevention", 
        "Technical and procedural defenses against AI-generated impersonation",
        `<div style="display: flex; flex-direction: column;">
            
            <div style="margin-top: 40px;">
                <div class="content-grid" style="grid-template-columns: repeat(2, 1fr);">
                    <div class="content-card" style="border-top: 5px solid #0056b3;">
                        <h4 class="card-title" style="color: #0056b3;">
                            <i class="fa-solid fa-people-arrows" style="margin-right: 10px;"></i>
                            Procedural Defenses
                        </h4>
                        <ul style="font-size: 17px; color: #333; line-height: 1.6; margin-top: 20px;">
                            <li><strong>Multi-channel verification</strong> - Confirm requests through separate communication channels</li>
                            <li><strong>Executive codewords/phrases</strong> - Pre-established verification for urgent requests</li>
                            <li><strong>Transaction approval delays</strong> - Mandatory cooling-off periods for large transfers</li>
                            <li><strong>Designated verifiers</strong> - Specific staff trained to authenticate executive communications</li>
                            <li><strong>Incident response playbooks</strong> - Clear procedures for suspected deepfake incidents</li>
                        </ul>
                    </div>
                    
                    <div class="content-card" style="border-top: 5px solid #388e3c;">
                        <h4 class="card-title" style="color: #388e3c;">
                            <i class="fa-solid fa-graduation-cap" style="margin-right: 10px;"></i>
                            Training & Awareness
                        </h4>
                        <div style="margin-top: 20px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                <span style="font-size: 16px; color: #333;">Executive Training</span>
                                <span style="font-size: 16px; color: #388e3c; font-weight: bold;">Quarterly</span>
                            </div>
                            <div style="height: 10px; background-color: #e0e0e0; border-radius: 5px; margin-bottom: 20px; overflow: hidden;">
                                <div style="width: 25%; height: 100%; background-color: #388e3c;"></div>
                            </div>
                            
                            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                <span style="font-size: 16px; color: #333;">Finance/Admin Staff</span>
                                <span style="font-size: 16px; color: #388e3c; font-weight: bold;">Monthly</span>
                            </div>
                            <div style="height: 10px; background-color: #e0e0e0; border-radius: 5px; margin-bottom: 20px; overflow: hidden;">
                                <div style="width: 85%; height: 100%; background-color: #388e3c;"></div>
                            </div>
                            
                            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
                                <span style="font-size: 16px; color: #333;">All Employees</span>
                                <span style="font-size: 16px; color: #388e3c; font-weight: bold;">Semi-annual</span>
                            </div>
                            <div style="height: 10px; background-color: #e0e0e0; border-radius: 5px; margin-bottom: 15px; overflow: hidden;">
                                <div style="width: 50%; height: 100%; background-color: #388e3c;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    );
    addSlide(22, 
        "Thank You", 
        "EAII Cyber Operation and System Security Division",
        `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <div style="max-width: 800px; margin: 0 auto;">
                <div style="background-color: #f0f7ff; padding: 40px; border-radius: 15px; margin-bottom: 40px;">
                    <h3 style="color: #0056b3; font-size: 32px; margin-bottom: 25px;">Key Takeaways</h3>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; text-align: left;">
                        <div style="display: flex; align-items: flex-start;">
                            <i class="fa-solid fa-check" style="color: #388e3c; font-size: 24px; margin-right: 15px; margin-top: 5px;"></i>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                <strong>Human Factor:</strong> Social engineering remains the #1 threat vector
                            </p>
                        </div>
                        <div style="display: flex; align-items: flex-start;">
                            <i class="fa-solid fa-check" style="color: #388e3c; font-size: 24px; margin-right: 15px; margin-top: 5px;"></i>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                <strong>Password Security:</strong> Strong, unique passwords are critical
                            </p>
                        </div>
                        <div style="display: flex; align-items: flex-start;">
                            <i class="fa-solid fa-check" style="color: #388e3c; font-size: 24px; margin-right: 15px; margin-top: 5px;"></i>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                <strong>Executive Priority:</strong> Specialized security for leadership AI usage
                            </p>
                        </div>
                        <div style="display: flex; align-items: flex-start;">
                            <i class="fa-solid fa-check" style="color: #388e3c; font-size: 24px; margin-right: 15px; margin-top: 5px;"></i>
                            <p style="font-size: 18px; color: #333; line-height: 1.6; margin: 0;">
                                <strong>Deepfake and Impersonation Risks:</strong> Heightened vigilance against AI-driven fraud
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 20px;">
                <h4 style="color: #0056b3; font-size: 24px; margin-bottom: 15px;">Connect With Us</h4>
                <ul style="list-style-type: none; padding: 0; margin: 0; display: flex; gap: 20px;">
                    <li style="display: inline-block;">
                        <a href="#" style="text-decoration: none; color: #0056b3; font-size: 18px;">
                            <i class="fa-brands fa-twitter" style="margin-right: 5px;"></i> Twitter
                        </a>
                    </li>
                    <li style="display: inline-block;">
                        <a href="#" style="text-decoration: none; color: #0056b3; font-size: 18px;">
                            <i class="fa-brands fa-tiktok" style="margin-right: 5px;"></i> TikTok
                        </a>
                    </li>
                    <li style="display: inline-block;">
                        <a href="#" style="text-decoration: none; color: #0056b3; font-size: 18px;">
                            <i class="fa-brands fa-facebook" style="margin-right: 5px;"></i> Facebook
                        </a>
                    </li>
                    <li style="display: inline-block;">
                        <a href="#" style="text-decoration: none; color: #0056b3; font-size: 18px;">
                            <i class="fa-brands fa-youtube" style="margin-right: 5px;"></i> YouTube
                        </a>
                    </li>
                    <li style="display: inline-block;">
                        <a href="#" style="text-decoration: none; color: #0056b3; font-size: 18px;">
                            <i class="fa-brands fa-telegram" style="margin-right: 5px;"></i> Telegram
                        </a>
                    </li>
                </ul>
            </div>
        </div>`
    );

});
