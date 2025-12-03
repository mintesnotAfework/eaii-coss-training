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
                <div class="division-name">Cyber Operation and System Security Division</div>
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
    addSlide(8, 
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
    addSlide(9, 
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
    addSlide(10, 
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
});
