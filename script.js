// Data structure for the presentation slides
const slides = [
{
    title: "Slide 1: Executive Summary - Q4 Cyber Posture",
    content: [
        { type: 'text', value: 'Welcome to the quarterly cybersecurity division review. Our focus remains on proactive defense, threat intelligence, and maintaining zero material breaches.' },
        { type: 'good', value: 'Success: Phishing resistance training completion rate is at a record 98.5%. Excellent internal vigilance.' },
        { type: 'caution', value: 'High-Risk: Observed a 300% spike in zero-day exploitation attempts targeting legacy VPN infrastructure. Immediate vendor patches and firewall rules applied.' },
        { type: 'warning', value: 'Warning: Cloud configuration drift detected in 15% of high-impact workloads. Requires automated governance implementation in the next 30 days.' }
    ],
},
{
    title: "Slide 2: Key Risk Indicators (KRIs) & Metrics",
    content: [
        { type: 'text', value: 'Monitoring key metrics is essential for maintaining a strong security stance and providing predictive insights.' },
        { type: 'good', value: 'Metric Improvement: Time-to-patch critical vulnerabilities reduced by 45% (Current Average: 55 hours, Target: <72 hours).' },
        { type: 'caution', value: 'Escalating Threat: Unauthorized access attempts on development environments increased by 15% month-over-month. Root cause analysis underway.' },
        { type: 'warning', value: 'Compliance Risk: Audit findings closure rate is lagging behind schedule, currently at 70% completion (Target: 95%). Dedicated resource allocation required.' }
    ],
},
{
    title: "Slide 3: Strategic Recommendations for H1 2026",
    content: [
        { type: 'text', value: 'To address current and future risks, we propose three core strategic initiatives.' },
        { type: 'good', value: 'Proposal: Invest in a next-generation XDR platform to consolidate security data and enhance threat hunting capabilities.' },
        { type: 'caution', value: 'Mandatory Policy: Mandate Multi-Factor Authentication (MFA) for all internal service accounts by the end of Q1 2026, closing a critical access vector.' },
        { type: 'text', value: 'Review and update Business Continuity Plan (BCP) and Disaster Recovery (DR) plans to fully account for large-scale, enterprise-wide ransomware scenarios.' }
    ],
}
];

let currentSlideIndex = 0;
const slideTitleEl = document.getElementById('slide-title');
const slideContentEl = document.getElementById('slide-content');
const slideCounterEl = document.getElementById('slide-counter');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Function to map slide types to Tailwind styles
function getStyle(type) {
switch (type) {
    case 'good':
        return 'bg-green-600 text-green-100 border-l-4 border-green-800'; // Good/Success
    case 'caution':
        return 'bg-red-600 text-red-100 border-l-4 border-red-800'; // Caution/High-Risk
    case 'warning':
        return 'bg-yellow-500 text-yellow-900 border-l-4 border-yellow-800'; // Warning/Attention
    case 'text':
    default:
        return 'bg-gray-50 border-l-4 border-blue-500 text-gray-800'; // Standard text
}
}

// Function to render the current slide
function renderSlide() {
const slide = slides[currentSlideIndex];
slideTitleEl.textContent = slide.title;
slideContentEl.innerHTML = ''; // Clear previous content

slide.content.forEach(item => {
    const div = document.createElement('div');
    // Apply professional styling and the specific alert color classes
    div.className = `p-4 rounded-lg shadow-md transition duration-300 ${getStyle(item.type)}`;
    
    // Add an icon prefix based on the type
    let icon = '';
    if (item.type === 'good') {
        icon = '<span class="text-xl mr-3 inline-block align-middle">&#10003;</span>'; // Checkmark
    } else if (item.type === 'caution') {
        icon = '<span class="text-xl mr-3 inline-block align-middle">&#9888;</span>'; // Warning sign
    } else if (item.type === 'warning') {
        icon = '<span class="text-xl mr-3 inline-block align-middle">&#9733;</span>'; // Star/Attention
    } else {
        icon = '<span class="text-xl mr-3 inline-block align-middle">&#x2022;</span>'; // Bullet point
    }

    div.innerHTML = `<p class="flex items-start">${icon}<span class="flex-1">${item.value}</span></p>`;
    slideContentEl.appendChild(div);
});

// Update navigation and counter
slideCounterEl.textContent = `Slide ${currentSlideIndex + 1} of ${slides.length}`;
prevBtn.disabled = currentSlideIndex === 0;
nextBtn.disabled = currentSlideIndex === slides.length - 1;

// Scroll to top of the content area for a fresh view
slideContentEl.scrollTop = 0;
}

// Function to navigate between slides
function changeSlide(delta) {
const newIndex = currentSlideIndex + delta;
if (newIndex >= 0 && newIndex < slides.length) {
    currentSlideIndex = newIndex;
    renderSlide();
}
}

// Initialize the presentation
window.onload = renderSlide;