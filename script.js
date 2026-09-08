const whyJoinSteps = [
    { title: "Compete", desc: "Competing gives members a clear goal, a reason to practice, and a chance to represent Skyline at region, state, and national conferences. Students can choose events that fit their strengths, from roleplays and presentations to tests and written projects.", action: "Open Resources", target: "resources" },
    { title: "Lead", desc: "Leadership opportunities let members help run meetings, support new competitors, plan chapter projects, and represent the club. Officer roles are a great way to build responsibility, communication skills, and real experience for applications and resumes.", action: "Meet Officers", target: "officers" },
    { title: "Build Skills", desc: "Members practice public speaking, testing, teamwork, business strategy, critical thinking, and professional communication. The club gives students a low-pressure place to build confidence before walking into a real competition room.", action: "Start Learning", target: "novice" },
    { title: "Connect", desc: "Skyline Business Club is also a community. Members meet motivated students, form teams, share resources, attend socials, and stay connected through GroupMe, Instagram, meetings, and competition travel.", action: "Join the Club", target: "join" }
];

function setWhyJoinStep(index) {
    const step = whyJoinSteps[index];
    const title = document.getElementById('why-join-title');
    const desc = document.getElementById('why-join-desc');
    const action = document.getElementById('why-join-action');
    if (!step || !title || !desc || !action) return;
    document.querySelectorAll('.path-pie-group').forEach((el, idx) => {
        el.classList.toggle('active', idx === index);
    });
    title.innerText = step.title;
    desc.innerText = step.desc;
    action.innerText = step.action;
    action.onclick = () => switchTab(step.target);
}

/* ============================================================
   COMPETITIVE EVENT DATA

   DECA  — official 2026-2027 high school competitive events
           source: https://www.deca.org/compete
   FBLA  — official high school competitive events
           source: https://www.fbla.org/high-school/competitive-events/

   Events are grouped into the site's three buckets:
     Prepared Entry — written projects and prepared presentations
     Roleplays      — exam plus a live role play or case study
     Tests          — objective / cluster exams
   DECA's online business simulations get their own block.
   ============================================================ */

// DECA prepared events (23 events)
const decaPreparedData = [
    { id: "ebg", code: "EBG", name: "Business Growth Plan", cluster: "Entrepreneurship", category: "Entrepreneurship", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/business-growth-plan", mentors: ["Ask an officer at a meeting"] },
    { id: "bor", code: "BOR", name: "Business Services Operations Research", cluster: "Business Management and Administration", category: "Business Operations Research", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/business-services-operations-research", mentors: ["Ask an officer at a meeting"] },
    { id: "pmbs", code: "PMBS", name: "Business Solutions Project", cluster: "Business Management and Administration", category: "Project Management", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/business-solutions-project", mentors: ["Ask an officer at a meeting"] },
    { id: "bmor", code: "BMOR", name: "Buying and Merchandising Operations Research", cluster: "Marketing", category: "Business Operations Research", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/buying-and-merchandising-operations-research", mentors: ["Ask an officer at a meeting"] },
    { id: "pmcd", code: "PMCD", name: "Career Development Project", cluster: "Business Management and Administration", category: "Project Management", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/career-development-project", mentors: ["Ask an officer at a meeting"] },
    { id: "pmca", code: "PMCA", name: "Community Awareness Project", cluster: "Business Management and Administration", category: "Project Management", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/community-awareness-project", mentors: ["Ask an officer at a meeting"] },
    { id: "pmcg", code: "PMCG", name: "Community Giving Project", cluster: "Business Management and Administration", category: "Project Management", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/community-giving-project", mentors: ["Ask an officer at a meeting"] },
    { id: "for", code: "FOR", name: "Finance Operations Research", cluster: "Finance", category: "Business Operations Research", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/finance-operations-research", mentors: ["Ask an officer at a meeting"] },
    { id: "fce", code: "FCE", name: "Financial Consulting", cluster: "Finance", category: "Professional Selling and Consulting", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/financial-consulting", mentors: ["Ask an officer at a meeting"] },
    { id: "pmfl", code: "PMFL", name: "Financial Literacy Project", cluster: "Business Management and Administration", category: "Project Management", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/financial-literacy-project", mentors: ["Ask an officer at a meeting"] },
    { id: "efb", code: "EFB", name: "Franchise Business Plan", cluster: "Entrepreneurship", category: "Entrepreneurship", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/franchise-business-plan", mentors: ["Ask an officer at a meeting"] },
    { id: "htor", code: "HTOR", name: "Hospitality and Tourism Operations Research", cluster: "Hospitality and Tourism", category: "Business Operations Research", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/hospitality-and-tourism-operations-research", mentors: ["Ask an officer at a meeting"] },
    { id: "htps", code: "HTPS", name: "Hospitality and Tourism Professional Selling", cluster: "Hospitality and Tourism", category: "Professional Selling and Consulting", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/hospitality-and-tourism-professional-selling", mentors: ["Ask an officer at a meeting"] },
    { id: "eib", code: "EIB", name: "Independent Business Plan", cluster: "Entrepreneurship", category: "Entrepreneurship", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/independent-business-plan", mentors: ["Ask an officer at a meeting"] },
    { id: "eip", code: "EIP", name: "Innovation Plan", cluster: "Entrepreneurship", category: "Entrepreneurship", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/innovation-plan", mentors: ["Ask an officer at a meeting"] },
    { id: "imce", code: "IMCE", name: "Integrated Marketing Campaign-Event", cluster: "Marketing", category: "Integrated Marketing Campaign", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/integrated-marketing-campaign-event", mentors: ["Ask an officer at a meeting"] },
    { id: "imcp", code: "IMCP", name: "Integrated Marketing Campaign-Product", cluster: "Marketing", category: "Integrated Marketing Campaign", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/integrated-marketing-campaign-product", mentors: ["Ask an officer at a meeting"] },
    { id: "imcs", code: "IMCS", name: "Integrated Marketing Campaign-Service", cluster: "Marketing", category: "Integrated Marketing Campaign", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/integrated-marketing-campaign-service", mentors: ["Ask an officer at a meeting"] },
    { id: "ibp", code: "IBP", name: "International Business Plan", cluster: "Entrepreneurship", category: "Entrepreneurship", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/international-business-plan", mentors: ["Ask an officer at a meeting"] },
    { id: "pse", code: "PSE", name: "Professional Selling", cluster: "Marketing", category: "Professional Selling and Consulting", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/professional-selling", mentors: ["Ask an officer at a meeting"] },
    { id: "pmsp", code: "PMSP", name: "Sales Project", cluster: "Business Management and Administration", category: "Project Management", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/sales-project", mentors: ["Ask an officer at a meeting"] },
    { id: "seor", code: "SEOR", name: "Sports and Entertainment Marketing Operations Research", cluster: "Marketing", category: "Business Operations Research", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/sports-and-entertainment-marketing-operations-research", mentors: ["Ask an officer at a meeting"] },
    { id: "esb", code: "ESB", name: "Start-Up Business Plan", cluster: "Entrepreneurship", category: "Entrepreneurship", members: "1 to 3", test: "Cluster exam", url: "https://www.deca.org/compete/start-up-business-plan", mentors: ["Ask an officer at a meeting"] },
];

// DECA role-play and case study events (28 events)
const decaRoleplayData = [
    { id: "act", code: "ACT", name: "Accounting Applications Series", cluster: "Finance", category: "Individual Series", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/accounting-applications-series", mentors: ["Ask an officer at a meeting"] },
    { id: "aam", code: "AAM", name: "Apparel and Accessories Marketing Series", cluster: "Marketing", category: "Individual Series", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/apparel-and-accessories-marketing-series", mentors: ["Ask an officer at a meeting"] },
    { id: "asm", code: "ASM", name: "Automotive Services Marketing Series", cluster: "Marketing", category: "Individual Series", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/automotive-services-marketing-series", mentors: ["Ask an officer at a meeting"] },
    { id: "bfs", code: "BFS", name: "Business Finance Series", cluster: "Finance", category: "Individual Series", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/business-finance-series", mentors: ["Ask an officer at a meeting"] },
    { id: "bltdm", code: "BLTDM", name: "Business Law and Ethics Team Decision Making", cluster: "Business Management and Administration", category: "Team Decision Making", members: "2", test: "Cluster exam", url: "https://www.deca.org/compete/business-law-and-ethics-team-decision-making", mentors: ["Ask an officer at a meeting"] },
    { id: "bsm", code: "BSM", name: "Business Services Marketing Series", cluster: "Marketing", category: "Individual Series", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/business-services-marketing-series", mentors: ["Ask an officer at a meeting"] },
    { id: "btdm", code: "BTDM", name: "Buying and Merchandising Team Decision Making", cluster: "Marketing", category: "Team Decision Making", members: "2", test: "Cluster exam", url: "https://www.deca.org/compete/buying-and-merchandising-team-decision-making", mentors: ["Ask an officer at a meeting"] },
    { id: "ent", code: "ENT", name: "Entrepreneurship Series", cluster: "Entrepreneurship", category: "Individual Series", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/entrepreneurship-series", mentors: ["Ask an officer at a meeting"] },
    { id: "etdm", code: "ETDM", name: "Entrepreneurship Team Decision Making", cluster: "Entrepreneurship", category: "Team Decision Making", members: "2", test: "Cluster exam", url: "https://www.deca.org/compete/entrepreneurship-team-decision-making", mentors: ["Ask an officer at a meeting"] },
    { id: "ftdm", code: "FTDM", name: "Financial Services Team Decision Making", cluster: "Finance", category: "Team Decision Making", members: "2", test: "Cluster exam", url: "https://www.deca.org/compete/financial-services-team-decision-making", mentors: ["Ask an officer at a meeting"] },
    { id: "fms", code: "FMS", name: "Food Marketing Series", cluster: "Marketing", category: "Individual Series", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/food-marketing-series", mentors: ["Ask an officer at a meeting"] },
    { id: "htdm", code: "HTDM", name: "Hospitality Services Team Decision Making", cluster: "Hospitality and Tourism", category: "Team Decision Making", members: "2", test: "Cluster exam", url: "https://www.deca.org/compete/hospitality-services-team-decision-making", mentors: ["Ask an officer at a meeting"] },
    { id: "hlm", code: "HLM", name: "Hotel and Lodging Management Series", cluster: "Hospitality and Tourism", category: "Individual Series", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/hotel-and-lodging-management-series", mentors: ["Ask an officer at a meeting"] },
    { id: "hrm", code: "HRM", name: "Human Resources Management Series", cluster: "Business Management and Administration", category: "Individual Series", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/human-resources-management-series", mentors: ["Ask an officer at a meeting"] },
    { id: "mcs", code: "MCS", name: "Marketing Communications Series", cluster: "Marketing", category: "Individual Series", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/marketing-communications-series", mentors: ["Ask an officer at a meeting"] },
    { id: "mtdm", code: "MTDM", name: "Marketing Management Team Decision Making", cluster: "Marketing", category: "Team Decision Making", members: "2", test: "Cluster exam", url: "https://www.deca.org/compete/marketing-management-team-decision-making", mentors: ["Ask an officer at a meeting"] },
    { id: "pfl", code: "PFL", name: "Personal Financial Literacy", cluster: "Personal Financial Literacy", category: "Personal Financial Literacy", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/personal-financial-literacy", mentors: ["Ask an officer at a meeting"] },
    { id: "pbm", code: "PBM", name: "Principles of Business Management and Administration", cluster: "Business Management and Administration", category: "Principles of Business Administration", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/principles-of-business-management-and-administration", mentors: ["Ask an officer at a meeting"] },
    { id: "pen", code: "PEN", name: "Principles of Entrepreneurship", cluster: "Entrepreneurship", category: "Principles of Business Administration", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/principles-of-entrepreneurship", mentors: ["Ask an officer at a meeting"] },
    { id: "pfn", code: "PFN", name: "Principles of Finance", cluster: "Finance", category: "Principles of Business Administration", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/principles-of-finance", mentors: ["Ask an officer at a meeting"] },
    { id: "pht", code: "PHT", name: "Principles of Hospitality and Tourism", cluster: "Hospitality and Tourism", category: "Principles of Business Administration", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/principles-of-hospitality", mentors: ["Ask an officer at a meeting"] },
    { id: "pmk", code: "PMK", name: "Principles of Marketing", cluster: "Marketing", category: "Principles of Business Administration", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/principles-of-marketing", mentors: ["Ask an officer at a meeting"] },
    { id: "qsrm", code: "QSRM", name: "Quick Serve Restaurant Management Series", cluster: "Hospitality and Tourism", category: "Individual Series", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/quick-serve-restaurant-management-series", mentors: ["Ask an officer at a meeting"] },
    { id: "rfsm", code: "RFSM", name: "Restaurant and Food Service Management Series", cluster: "Hospitality and Tourism", category: "Individual Series", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/restaurant-and-food-service-management-series", mentors: ["Ask an officer at a meeting"] },
    { id: "rms", code: "RMS", name: "Retail Merchandising Series", cluster: "Marketing", category: "Individual Series", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/retail-merchandising-series", mentors: ["Ask an officer at a meeting"] },
    { id: "sem", code: "SEM", name: "Sports and Entertainment Marketing Series", cluster: "Marketing", category: "Individual Series", members: "1", test: "Cluster exam", url: "https://www.deca.org/compete/sports-and-entertainment-marketing-series", mentors: ["Ask an officer at a meeting"] },
    { id: "stdm", code: "STDM", name: "Sports and Entertainment Marketing Team Decision Making", cluster: "Marketing", category: "Team Decision Making", members: "2", test: "Cluster exam", url: "https://www.deca.org/compete/sports-and-entertainment-marketing-team-decision-making", mentors: ["Ask an officer at a meeting"] },
    { id: "ttdm", code: "TTDM", name: "Travel and Tourism Team Decision Making", cluster: "Hospitality and Tourism", category: "Team Decision Making", members: "2", test: "Cluster exam", url: "https://www.deca.org/compete/travel-and-tourism-team-decision-making", mentors: ["Ask an officer at a meeting"] },
];

// DECA career cluster exams (7 events)
const decaTestData = [
    { id: "exam_0", code: "", name: "Business Administration Core Exam", cluster: "Taken for Principles of Business Administration events", category: "Cluster Exam", members: "1", test: "100 multiple-choice questions", url: "https://www.deca.org/compete", mentors: ["Ask an officer at a meeting"] },
    { id: "exam_1", code: "", name: "Business Management and Administration Cluster Exam", cluster: "Business Management and Administration", category: "Cluster Exam", members: "1", test: "100 multiple-choice questions", url: "https://www.deca.org/compete", mentors: ["Ask an officer at a meeting"] },
    { id: "exam_2", code: "", name: "Entrepreneurship Cluster Exam", cluster: "Entrepreneurship", category: "Cluster Exam", members: "1", test: "100 multiple-choice questions", url: "https://www.deca.org/compete", mentors: ["Ask an officer at a meeting"] },
    { id: "exam_3", code: "", name: "Finance Cluster Exam", cluster: "Finance", category: "Cluster Exam", members: "1", test: "100 multiple-choice questions", url: "https://www.deca.org/compete", mentors: ["Ask an officer at a meeting"] },
    { id: "exam_4", code: "", name: "Hospitality and Tourism Cluster Exam", cluster: "Hospitality and Tourism", category: "Cluster Exam", members: "1", test: "100 multiple-choice questions", url: "https://www.deca.org/compete", mentors: ["Ask an officer at a meeting"] },
    { id: "exam_5", code: "", name: "Marketing Cluster Exam", cluster: "Marketing", category: "Cluster Exam", members: "1", test: "100 multiple-choice questions", url: "https://www.deca.org/compete", mentors: ["Ask an officer at a meeting"] },
    { id: "exam_6", code: "", name: "Personal Financial Literacy Exam", cluster: "Personal Financial Literacy", category: "Cluster Exam", members: "1", test: "100 multiple-choice questions", url: "https://www.deca.org/compete", mentors: ["Ask an officer at a meeting"] },
];

// DECA online business simulations (9 events)
const decaOnlineData = [
    { id: "smg", code: "SMG", name: "Stock Market Game", cluster: "Finance", category: "Online Events", members: "1 to 3", test: "None", url: "https://www.deca.org/compete/stock-market-game", mentors: ["Ask an officer at a meeting"] },
    { id: "vbcac", code: "VBCAC", name: "Virtual Business Challenge-Accounting", cluster: "Finance", category: "Online Events", members: "1 to 3", test: "None", url: "https://www.deca.org/compete/virtual-business-challenge-accounting", mentors: ["Ask an officer at a meeting"] },
    { id: "vbcen", code: "VBCEN", name: "Virtual Business Challenge-Entrepreneurship", cluster: "Entrepreneurship", category: "Online Events", members: "1 to 3", test: "None", url: "https://www.deca.org/compete/virtual-business-challenge-entrepreneurship", mentors: ["Ask an officer at a meeting"] },
    { id: "vbcfa", code: "VBCFA", name: "Virtual Business Challenge-Fashion", cluster: "Marketing", category: "Online Events", members: "1 to 3", test: "None", url: "https://www.deca.org/compete/virtual-business-challenge-fashion", mentors: ["Ask an officer at a meeting"] },
    { id: "vbchm", code: "VBCHM", name: "Virtual Business Challenge-Hotel Management", cluster: "Hospitality and Tourism", category: "Online Events", members: "1 to 3", test: "None", url: "https://www.deca.org/compete/virtual-business-challenge-hotel-management", mentors: ["Ask an officer at a meeting"] },
    { id: "vbcpf", code: "VBCPF", name: "Virtual Business Challenge-Personal Finance", cluster: "Personal Financial Literacy", category: "Online Events", members: "1 to 3", test: "None", url: "https://www.deca.org/compete/virtual-business-challenge-personal-finance", mentors: ["Ask an officer at a meeting"] },
    { id: "vbcrs", code: "VBCRS", name: "Virtual Business Challenge-Restaurant", cluster: "Hospitality and Tourism", category: "Online Events", members: "1 to 3", test: "None", url: "https://www.deca.org/compete/virtual-business-challenge-restaurant", mentors: ["Ask an officer at a meeting"] },
    { id: "vbcrt", code: "VBCRT", name: "Virtual Business Challenge-Retail", cluster: "Marketing", category: "Online Events", members: "1 to 3", test: "None", url: "https://www.deca.org/compete/virtual-business-challenge-retail", mentors: ["Ask an officer at a meeting"] },
    { id: "vbcsp", code: "VBCSP", name: "Virtual Business Challenge-Sports", cluster: "Marketing", category: "Online Events", members: "1 to 3", test: "None", url: "https://www.deca.org/compete/virtual-business-challenge-sports", mentors: ["Ask an officer at a meeting"] },
];

// FBLA presentation, production and chapter events (32 events)
const fblaPreparedData = [
    { id: "f_broadcast_journalism", name: "Broadcast Journalism", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Broadcast-Journalism.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_business_ethics", name: "Business Ethics", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Business-Ethics.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_business_plan", name: "Business Plan", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Business-Plan.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_career_portfolio", name: "Career Portfolio", cluster: "Presentation", category: "Presentation", members: "1", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Career-Portfolio.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_coding_programming", name: "Coding & Programming", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Coding-and-Programming.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_computer_game_simulation_programming", name: "Computer Game & Simulation Programming", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Computer-Game-Simulation-Programming.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_data_analysis", name: "Data Analysis", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Data-Analysis.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_digital_animation", name: "Digital Animation", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Digital-Animation.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_digital_video_production", name: "Digital Video Production", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Digital-Video-Production.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_event_planning", name: "Event Planning", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Event-Planning.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_financial_planning", name: "Financial Planning", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Financial-Planning.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_financial_statement_analysis", name: "Financial Statement Analysis", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Financial-Statement-Analysis.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_future_business_educator", name: "Future Business Educator", cluster: "Presentation", category: "Presentation", members: "1", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Future-Business-Educator.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_future_business_leader", name: "Future Business Leader", cluster: "Presentation", category: "Presentation", members: "1", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Future-Business-Leader.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_graphic_design", name: "Graphic Design", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Graphic-Design.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_impromptu_speaking", name: "Impromptu Speaking", cluster: "Presentation", category: "Presentation", members: "1", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Impromptu-Speaking.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_job_interview", name: "Job Interview", cluster: "Presentation", category: "Presentation", members: "1", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Job-Interview.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_mobile_application_development", name: "Mobile Application Development", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Mobile-Application-Development.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_public_service_announcement", name: "Public Service Announcement", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Public-Service-Announcement.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_public_speaking", name: "Public Speaking", cluster: "Presentation", category: "Presentation", members: "1", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Public-Speaking.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_sales_presentation", name: "Sales Presentation", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Sales-Presentation.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_social_media_strategies", name: "Social Media Strategies", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Social-Media-Strategies.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_supply_chain_management", name: "Supply Chain Management", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Supply-Chain-Management.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_visual_design", name: "Visual Design", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Visual-Design.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_website_coding_development", name: "Website Coding & Development", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Website-Coding-and-Development.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_website_design", name: "Website Design", cluster: "Presentation", category: "Presentation", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Website-Design.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_business_presentation", name: "Introduction to Business Presentation", cluster: "Presentation (9th & 10th only)", category: "Presentation (9th & 10th only)", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Introduction-to-Business-Presentation.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_programming", name: "Introduction to Programming", cluster: "Presentation (9th & 10th only)", category: "Presentation (9th & 10th only)", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Introduction-to-Programming.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_public_speaking", name: "Introduction to Public Speaking", cluster: "Presentation (9th & 10th only)", category: "Presentation (9th & 10th only)", members: "1", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Introduction-to-Public-Speaking.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_social_media_strategy", name: "Introduction to Social Media Strategy", cluster: "Presentation (9th & 10th only)", category: "Presentation (9th & 10th only)", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Introduction-to-Social-Media-Strategy.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_community_service_project", name: "Community Service Project", cluster: "Chapter Event", category: "Chapter Event", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Chapter%20Events/Community-Service-Project.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_local_chapter_annual_business_report", name: "Local Chapter Annual Business Report", cluster: "Chapter Event", category: "Chapter Event", members: "1 to 3", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Chapter%20Events/Local-Chapter-Annual-Business-Report.pdf", mentors: ["Ask an officer at a meeting"] },
];

// FBLA role play events (12 events)
const fblaRoleplayData = [
    { id: "f_banking_financial_systems", name: "Banking & Financial Systems", cluster: "Role Play", category: "Role Play", members: "1 to 3", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Banking-and-Financial-Systems.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_business_management", name: "Business Management", cluster: "Role Play", category: "Role Play", members: "1 to 3", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Business-Management.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_customer_service", name: "Customer Service", cluster: "Role Play", category: "Role Play", members: "1", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Customer-Service.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_entrepreneurship", name: "Entrepreneurship", cluster: "Role Play", category: "Role Play", members: "1 to 3", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Entrepreneurship.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_hospitality_event_management", name: "Hospitality & Event Management", cluster: "Role Play", category: "Role Play", members: "1 to 3", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Hospitality-and-Event-Management.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_international_business", name: "International Business", cluster: "Role Play", category: "Role Play", members: "1 to 3", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/International-Business.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_management_information_systems", name: "Management Information Systems", cluster: "Role Play", category: "Role Play", members: "1 to 3", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Management-Information-Systems.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_marketing", name: "Marketing", cluster: "Role Play", category: "Role Play", members: "1 to 3", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Marketing.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_network_design", name: "Network Design", cluster: "Role Play", category: "Role Play", members: "1 to 3", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Network-Design.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_parliamentary_procedure", name: "Parliamentary Procedure", cluster: "Role Play (Team)", category: "Role Play (Team)", members: "Team", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Parliamentary-Procedure.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_sports_entertainment_management", name: "Sports & Entertainment Management", cluster: "Role Play", category: "Role Play", members: "1 to 3", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Sports-and-Entertainment-Management.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_technology_support_services", name: "Technology Support & Services", cluster: "Role Play", category: "Role Play", members: "1", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Technology-Support-and-Services.pdf", mentors: ["Ask an officer at a meeting"] },
];

// FBLA objective test events (32 events)
const fblaTestData = [
    { id: "f_accounting", name: "Accounting", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Accounting.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_advanced_accounting", name: "Advanced Accounting", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Advanced-Accounting.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_advertising", name: "Advertising", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Advertising.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_agribusiness", name: "Agribusiness", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Agribusiness.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_business_communication", name: "Business Communication", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Business-Communication.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_business_law", name: "Business Law", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Business-Law.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_computer_problem_solving", name: "Computer Problem Solving", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Computer-Problem-Solving.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_cybersecurity", name: "Cybersecurity", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Cybersecurity.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_data_science_ai", name: "Data Science & AI", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Data-Science-and-AI.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_economics", name: "Economics", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Economics.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_healthcare_administration", name: "Healthcare Administration", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Healthcare-Administration.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_human_resource_management", name: "Human Resource Management", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Human-Resource-Management.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_insurance_risk_management", name: "Insurance & Risk Management", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Insurance-and-Risk-Management.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_journalism", name: "Journalism", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Journalism.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_networking_infrastructures", name: "Networking Infrastructures", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Networking-Infrastructures.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_organizational_leadership", name: "Organizational Leadership", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Organizational-Leadership.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_personal_finance", name: "Personal Finance", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Personal-Finance.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_project_management", name: "Project Management", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Project-Management.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_public_administration_management", name: "Public Administration & Management", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Public-Administration-and-Management.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_real_estate", name: "Real Estate", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Real-Estate.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_retail_management", name: "Retail Management", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Retail-Management.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_securities_investments", name: "Securities & Investments", cluster: "Objective Test", category: "Objective Test", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Securities-and-Investments.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_business_communication", name: "Introduction to Business Communication", cluster: "Objective Test (9th & 10th only)", category: "Objective Test (9th & 10th only)", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Introduction-to-Business-Communication.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_business_concepts", name: "Introduction to Business Concepts", cluster: "Objective Test (9th & 10th only)", category: "Objective Test (9th & 10th only)", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Introduction-to-Business-Concepts.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_business_procedures", name: "Introduction to Business Procedures", cluster: "Objective Test (9th & 10th only)", category: "Objective Test (9th & 10th only)", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Introduction-to-Business-Procedures.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_fbla", name: "Introduction to FBLA", cluster: "Objective Test (9th & 10th only)", category: "Objective Test (9th & 10th only)", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Introduction-to-FBLA.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_information_technology", name: "Introduction to Information Technology", cluster: "Objective Test (9th & 10th only)", category: "Objective Test (9th & 10th only)", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Introduction-to-Information-Technology.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_marketing_concepts", name: "Introduction to Marketing Concepts", cluster: "Objective Test (9th & 10th only)", category: "Objective Test (9th & 10th only)", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Introduction-to-Marketing-Concepts.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_parliamentary_procedure", name: "Introduction to Parliamentary Procedure", cluster: "Objective Test (9th & 10th only)", category: "Objective Test (9th & 10th only)", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Introduction-to-Parliamentary-Procedure.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_retail_merchandising", name: "Introduction to Retail & Merchandising", cluster: "Objective Test (9th & 10th only)", category: "Objective Test (9th & 10th only)", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Introduction-to-Retail-and-Merchandising.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_supply_chain_management", name: "Introduction to Supply Chain Management", cluster: "Objective Test (9th & 10th only)", category: "Objective Test (9th & 10th only)", members: "1", test: "Objective test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Objective%20Tests/Introduction-to-Supply-Chain-Management.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_computer_applications", name: "Computer Applications", cluster: "Production Test", category: "Production Test", members: "1", test: "Production test", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Production%20Events/Computer-Applications.pdf", mentors: ["Ask an officer at a meeting"] },
];

// RENDERER FUNCTION FOR EXPANDABLE RESOURCE BLOCKS
function renderResourceAccordions() {
    // Current Skyline members who can help with events based on the state placement list.
    // Events not listed here automatically display TBD.
    const helperByEvent = {
        // DECA TESTS
        "exam_2": ["Elisa Tandra", "Grayson Carter"],
        "exam_4": ["Madeline Doherty", "Melanie Wang"],
        "exam_5": ["Daniel Luo", "Melanie Wang", "Sreeram Patcha", "Symon Kim", "Quynhanh Le", "Augustine Pham", "Joyce Xie", "Rahul Nair", "Chloe Zou"],
        "exam_6": ["Kainalu Siu"],

        // DECA PREPARED EVENTS
        "pmbs": ["Sreeram Patcha"],
        "pmca": ["Selha Chaozstang", "Annie Lin", "Eva Averin"],
        "efb": ["Eli Shen"],
        "eib": ["Andrew Jiao", "Lydia Bartholomew", "Hailey Park"],
        "eip": ["Eva Averin"],
        "imce": ["Daniel Luo"],
        "imcp": ["Lydia Bartholomew", "Joyce Xie", "Casey Zhang"],
        "imcs": ["Sreeram Patcha"],
        "seor": ["Jiyu Han"],
        "esb": ["Sarah Wu", "Chloe Zou"],

        // DECA ROLEPLAY / CASE STUDY EVENTS
        "bfs": ["Yicheng Deng"],
        "bsm": ["Charlotte Soelberg"],
        "btdm": ["Ryan Bai", "Augustine Pham"],
        "ent": ["Elisa Tandra"],
        "fms": ["Chloe Zou"],
        "hlm": ["Melanie Wang"],
        "mcs": ["Joyce Xie"],
        "pfl": ["Kainalu Siu"],
        "qsrm": ["Hailey Park"],
        "rms": ["Daniel Luo"],
        "sem": ["Kevin Ying"],
        "stdm": ["Symon Kim", "Jialai Ying"],

        // FBLA PREPARED EVENTS
        "f_business_ethics": ["Madeline Doherty", "Kainalu Siu"],
        "f_data_analysis": ["Elisa Tandra", "Chloe Zou"],
        "f_digital_animation": ["Joyce Xie"],
        "f_event_planning": ["Sophia Chen", "Sarah Wu", "Quynhanh Le"],
        "f_financial_planning": ["Sreeram Patcha"],
        "f_mobile_application_development": ["Sophia Chen", "Solomon Kim", "Eli Shen"],
        "f_public_service_announcement": ["Emily Tan", "Kristine Tra"],
        "f_sales_presentation": ["Andrew Jiao", "Nathan Li"],
        "f_social_media_strategies": ["Sam Hodson"],
        "f_supply_chain_management": ["Olivia Tran", "Chloe Zou"],
        "f_website_design": ["Symon Kim", "Augustine Pham", "Kevin Ying"],
        "f_website_coding_development": ["Symon Kim", "Augustine Pham", "Kevin Ying"],
        "f_introduction_to_business_presentation": ["Lydia Bartholomew", "Hailey Park", "Melanie Wang"],
        "f_introduction_to_programming": ["Yicheng Deng", "Joshua Zhang", "Melinda Zhou"],
        "f_introduction_to_public_speaking": ["Andrew Jiao"],
        "f_introduction_to_social_media_strategy": ["Leya Olsen", "Nikki Santi"],

        // FBLA ROLEPLAY / CASE STUDY EVENTS
        "f_banking_financial_systems": ["Rahul Nair", "Sreeram Patcha"],
        "f_business_management": ["Daniel Luo"],
        "f_hospitality_event_management": ["Sreeram Patcha"],
        "f_management_information_systems": ["Symon Kim", "Kevin Ying", "Jailai Ying"],
        "f_network_design": ["Selha Chaozstang", "Annie Lin"],
        "f_sports_entertainment_management": ["Andrew Jiao", "Aaditya Kuberan", "Nathan Li"],
        "f_technology_support_services": ["Aaditya Kuberan"],

        // FBLA OBJECTIVE / PRODUCTION TESTS
        "f_agribusiness": ["Daniel Luo"],
        "f_business_communication": ["Melanie Wang"],
        "f_insurance_risk_management": ["Elisa Tandra"],
        "f_public_administration_management": ["Daniel Luo"],
        "f_economics": ["Kevin Ying"],
        "f_introduction_to_business_communication": ["Melanie Wang"],
        "f_introduction_to_business_concepts": ["Hailey Park"],
        "f_introduction_to_fbla": ["Joyce Xie"],
        "f_introduction_to_marketing_concepts": ["Andrew Jiao"],
        "f_introduction_to_parliamentary_procedure": ["Joyce Xie"],
    };

    const renderGroup = (targetId, dataset) => {
        const container = document.getElementById(targetId);
        if (!container) return;

        const isDeca = targetId.startsWith('deca');
        const isDecaTests = targetId === 'deca-tests-root';
        const isFblaPrepared = targetId === 'fbla-prepared-root';

        // Convert DECA's generic "Cluster exam" label into the actual exam.
        // FBLA prepared events do not require a test.
        const getSpecificTest = (item) => {
            if (isFblaPrepared) return 'None';
            if (!isDeca) return item.test;

            // In the DECA Tests section, the event name itself IS the exam.
            if (isDecaTests) return item.name;

            const rawTest = (item.test || '').trim();
            if (rawTest.toLowerCase() !== 'cluster exam') return rawTest || 'None';

            // Principles events use the Business Administration Core Exam.
            if (item.category === 'Principles of Business Administration') {
                return 'Business Administration Core Exam';
            }

            const examByCluster = {
                'Business Management and Administration': 'Business Management and Administration Exam',
                'Entrepreneurship': 'Entrepreneurship Exam',
                'Finance': 'Finance Exam',
                'Hospitality and Tourism': 'Hospitality and Tourism Exam',
                'Marketing': 'Marketing Exam',
                'Personal Financial Literacy': 'Personal Financial Literacy Exam'
            };

            return examByCluster[item.cluster] || `${item.cluster} Exam`;
        };

        const html = dataset.map(item => {
            // DECA events keep their official abbreviation on the right.
            const rightLabel = item.code
                ? `<span class="text-xs border border-darkBlue group-hover:border-white px-2 py-0.5">${item.code}</span>`
                : '';

            const specificTest = getSpecificTest(item);
            const helpers = helperByEvent[item.id] || [];
            const helperMarkup = helpers.length ? helpers.join('<br>') : 'TBD';

            const infoBoxes = `
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-bold uppercase">
                            <div class="border border-darkBlue p-3">
                                <span class="block text-[10px] font-black tracking-widest text-darkBlue">Ask for help!:</span>
                                <span class="text-sm block mt-1 font-black">${helperMarkup}</span>
                            </div>
                            <div class="border border-darkBlue p-3">
                                <span class="block text-[10px] font-black tracking-widest text-darkBlue">Test:</span>
                                <span class="text-sm block mt-1 font-black">${specificTest}</span>
                            </div>
                            <div class="border border-darkBlue p-3">
                                <span class="block text-[10px] font-black tracking-widest text-darkBlue">Participants:</span>
                                <span class="text-sm block mt-1 font-black">${item.members}</span>
                            </div>
                        </div>`;

            return `
                <details class="group bg-white border-2 border-darkBlue overflow-hidden transition-all duration-200">
                    <summary class="flex justify-between items-center p-4 font-black text-sm uppercase tracking-wide cursor-pointer list-none select-none hover:bg-darkBlue hover:text-white transition-colors duration-150">
                        <span><i class="fa-solid fa-chevron-right mr-2 transform group-open:rotate-90 transition-transform duration-150"></i>${item.name}</span>
                        ${rightLabel}
                    </summary>
                    <div class="p-6 border-t border-darkBlue bg-white space-y-4">
                        ${infoBoxes}
                        <div class="pt-2">
                            <a href="${item.url}" target="_blank" rel="noopener" class="w-full sm:w-auto inline-block text-center bg-darkBlue text-white font-black text-xs uppercase tracking-wider px-6 py-3 border border-darkBlue hover:bg-white hover:text-darkBlue transition">
                                ${isDeca ? 'Official DECA Event Page' : 'Official Guidelines (PDF)'} <i class="fa-solid fa-arrow-up-right-from-square ml-2 text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                </details>`;
        }).join('');

        container.innerHTML = html;

        // Show how many events are in this group.
        const counter = container.parentElement.querySelector('.event-count');
        if (counter) {
            counter.textContent = `${dataset.length} event${dataset.length === 1 ? '' : 's'}`;
        }
    };

    renderGroup('deca-prepared-root', decaPreparedData);
    renderGroup('deca-roleplay-root', decaRoleplayData);
    renderGroup('deca-tests-root', decaTestData);
    renderGroup('deca-online-root', decaOnlineData);
    renderGroup('fbla-prepared-root', fblaPreparedData);
    renderGroup('fbla-roleplay-root', fblaRoleplayData);
    renderGroup('fbla-tests-root', fblaTestData);
}

// INITIALIZATION
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderResourceAccordions);
} else {
    renderResourceAccordions();
}

function toggleResourceBranch(branchType) {
    document.querySelectorAll('.resource-branch').forEach(el => el.classList.add('hidden'));
    document.getElementById('branch-' + branchType).classList.remove('hidden');

    // Colours live in styles.css under .resource-tab / .resource-tab.is-active,
    // so the tabs only need their active state flipped here.
    document.querySelectorAll('.resource-tab').forEach(btn => {
        const isActive = btn.id === 'res-tab-' + branchType;
        btn.classList.toggle('is-active', isActive);
        btn.setAttribute('aria-selected', String(isActive));
    });
}

/* ============================================================
   NOVICE EVENT MATCH QUIZ
   DECA and FBLA intentionally use different question sets.
   The quiz recommends events from the event data already defined
   above; it does not create a separate list of event names/URLs.
   ============================================================ */

const QUIZ_QUESTIONS = {
    DECA: [
        {
            id: 'grade',
            question: 'What grade are you in?',
            note: 'Grade gives context, but DECA Principles eligibility depends on whether you are a first-year DECA member.',
            options: [
                { value: '9', label: '9th Grade' },
                { value: '10', label: '10th Grade' },
                { value: '11', label: '11th Grade' },
                { value: '12', label: '12th Grade' }
            ]
        },
        {
            id: 'firstYear',
            question: 'Is this your first year as a DECA member?',
            note: 'Principles of Business Administration events are designed for individual first-year DECA members.',
            options: [
                { value: 'yes', label: 'Yes — this is my first year in DECA' },
                { value: 'no', label: 'No — I have competed or been a DECA member before' }
            ]
        },
        {
            id: 'format',
            question: 'Which competition experience sounds most appealing?',
            options: [
                { value: 'roleplay', label: 'Get a business problem, prepare quickly, and present my solution to a judge' },
                { value: 'prepared', label: 'Spend weeks developing a polished project and presentation' },
                { value: 'online', label: 'Compete through a business simulation or investment challenge over time' },
                { value: 'open', label: 'I am open to any of these' }
            ]
        },
        {
            id: 'pressure',
            question: 'How do you prefer to work when the competition gets stressful?',
            options: [
                { value: 'fast', label: 'I like thinking on my feet and making decisions quickly' },
                { value: 'partner', label: 'I am comfortable with pressure if I can work through it with a teammate' },
                { value: 'prepared', label: 'I strongly prefer knowing and practicing my presentation beforehand' },
                { value: 'strategy', label: 'I would rather focus on strategy, data, or simulation decisions than a live pitch' }
            ]
        },
        {
            id: 'team',
            question: 'Who would you prefer to compete with?',
            options: [
                { value: 'solo', label: 'By myself' },
                { value: 'pair', label: 'One teammate' },
                { value: 'team', label: 'A flexible team of up to three people' },
                { value: 'open', label: 'No preference' }
            ]
        },
        {
            id: 'cluster',
            question: 'Which business area interests you most?',
            options: [
                { value: 'marketing', label: 'Marketing, advertising, retail, or sports & entertainment' },
                { value: 'finance', label: 'Finance, accounting, investing, or personal finance' },
                { value: 'entrepreneurship', label: 'Entrepreneurship and starting a business' },
                { value: 'hospitality', label: 'Hospitality, restaurants, hotels, or travel' },
                { value: 'management', label: 'Management, HR, business operations, or ethics' },
                { value: 'open', label: 'I am not sure yet' }
            ]
        },
        {
            id: 'task',
            question: 'Which task would you actually enjoy doing?',
            options: [
                { value: 'persuade', label: 'Convince a judge that my solution to a business problem will work' },
                { value: 'campaign', label: 'Create a marketing campaign for a product, service, or event' },
                { value: 'startup', label: 'Develop a new business or start-up idea' },
                { value: 'research', label: 'Research a real business problem and recommend improvements' },
                { value: 'project', label: 'Plan and carry out a structured project' },
                { value: 'simulation', label: 'Manage a simulated business or investment portfolio' }
            ]
        },
        {
            id: 'workload',
            question: 'Realistically, how much preparation are you willing to do?',
            options: [
                { value: 'low', label: 'Mostly practice during club meetings' },
                { value: 'medium', label: 'A few hours of practice outside meetings' },
                { value: 'high', label: 'Consistent work over several weeks' },
                { value: 'major', label: 'I am willing to take on a major long-term project' }
            ]
        }
    ],

    FBLA: [
        {
            id: 'grade',
            question: 'What grade are you in?',
            note: 'Many FBLA “Introduction to…” events are limited to 9th and 10th graders.',
            options: [
                { value: '9', label: '9th Grade' },
                { value: '10', label: '10th Grade' },
                { value: '11', label: '11th Grade' },
                { value: '12', label: '12th Grade' }
            ]
        },
        {
            id: 'format',
            question: 'Which competition format sounds best?',
            options: [
                { value: 'test', label: 'Study a subject and take an objective test' },
                { value: 'prepared', label: 'Prepare something beforehand and present it to judges' },
                { value: 'roleplay', label: 'Receive a business scenario and solve it live' },
                { value: 'build', label: 'Build, design, code, or create something and demonstrate it' },
                { value: 'open', label: 'I am open to anything' }
            ]
        },
        {
            id: 'presentation',
            question: 'How do you feel about presenting directly to judges?',
            options: [
                { value: 'love', label: 'I enjoy presenting and would be comfortable making it a major part of my event' },
                { value: 'prepared', label: 'I am comfortable presenting if I can prepare and rehearse beforehand' },
                { value: 'team', label: 'I am more comfortable presenting if I have teammates with me' },
                { value: 'avoid', label: 'I would rather choose an event with little or no presenting' }
            ]
        },
        {
            id: 'task',
            question: 'Which type of work sounds most like you?',
            options: [
                { value: 'study', label: 'Studying facts, concepts, and terminology' },
                { value: 'analyze', label: 'Analyzing information, numbers, or systems to solve a problem' },
                { value: 'create', label: 'Designing, coding, producing, or creating something' },
                { value: 'persuade', label: 'Speaking, pitching, or persuading an audience' },
                { value: 'organize', label: 'Organizing a plan, project, event, or business strategy' }
            ]
        },
        {
            id: 'team',
            question: 'Would you rather compete individually or with other people?',
            options: [
                { value: 'solo', label: 'Individual' },
                { value: 'team', label: 'With one or two teammates' },
                { value: 'open', label: 'Either is fine' }
            ]
        },
        {
            id: 'subject',
            question: 'Which subject area interests you most?',
            options: [
                { value: 'finance', label: 'Finance, accounting, economics, or investing' },
                { value: 'marketing', label: 'Marketing, advertising, social media, or sales' },
                { value: 'technology', label: 'Technology, programming, cybersecurity, data, or networking' },
                { value: 'management', label: 'Management, entrepreneurship, HR, or project management' },
                { value: 'communication', label: 'Communication, public speaking, journalism, or interviews' },
                { value: 'law', label: 'Law, government, or parliamentary procedure' },
                { value: 'hospitality', label: 'Hospitality, event planning, or tourism' },
                { value: 'open', label: 'I am not sure yet' }
            ]
        },
        {
            id: 'prep',
            question: 'If you had a month before competition, what preparation would you actually do?',
            options: [
                { value: 'study', label: 'Study a test guide and do practice questions' },
                { value: 'presentation', label: 'Build and rehearse a presentation' },
                { value: 'product', label: 'Develop a technical, visual, or creative product' },
                { value: 'scenario', label: 'Practice solving business scenarios under time pressure' },
                { value: 'project', label: 'Work steadily on a larger project with teammates' }
            ]
        },
        {
            id: 'priority',
            question: 'What matters most when you choose an event?',
            options: [
                { value: 'straightforward', label: 'A straightforward preparation process with a clear study target' },
                { value: 'career', label: 'Something connected to a career or subject I may pursue later' },
                { value: 'creative', label: 'A chance to be creative and make something original' },
                { value: 'challenge', label: 'A challenging event that requires quick thinking or technical skill' },
                { value: 'friends', label: 'An event I can realistically do with friends or teammates' },
                { value: 'open', label: 'I do not know yet — just give me the strongest fit' }
            ]
        }
    ]
};

const QUIZ_CANDIDATES = {
    DECA: [
        // Principles — individual first-year DECA members only.
        { id: 'pmk', format: 'roleplay', cluster: 'marketing', team: 'solo', pressure: 'fast', task: 'persuade', workload: 'low', firstYearOnly: true },
        { id: 'pfn', format: 'roleplay', cluster: 'finance', team: 'solo', pressure: 'fast', task: 'persuade', workload: 'low', firstYearOnly: true },
        { id: 'pen', format: 'roleplay', cluster: 'entrepreneurship', team: 'solo', pressure: 'fast', task: 'persuade', workload: 'low', firstYearOnly: true },
        { id: 'pht', format: 'roleplay', cluster: 'hospitality', team: 'solo', pressure: 'fast', task: 'persuade', workload: 'low', firstYearOnly: true },
        { id: 'pbm', format: 'roleplay', cluster: 'management', team: 'solo', pressure: 'fast', task: 'persuade', workload: 'low', firstYearOnly: true },

        // Individual roleplays.
        { id: 'rms', format: 'roleplay', cluster: 'marketing', team: 'solo', pressure: 'fast', task: 'persuade', workload: 'medium' },
        { id: 'mcs', format: 'roleplay', cluster: 'marketing', team: 'solo', pressure: 'fast', task: 'persuade', workload: 'medium' },
        { id: 'bfs', format: 'roleplay', cluster: 'finance', team: 'solo', pressure: 'fast', task: 'persuade', workload: 'medium' },
        { id: 'ent', format: 'roleplay', cluster: 'entrepreneurship', team: 'solo', pressure: 'fast', task: 'persuade', workload: 'medium' },
        { id: 'hlm', format: 'roleplay', cluster: 'hospitality', team: 'solo', pressure: 'fast', task: 'persuade', workload: 'medium' },
        { id: 'hrm', format: 'roleplay', cluster: 'management', team: 'solo', pressure: 'fast', task: 'persuade', workload: 'medium' },

        // Team decision making.
        { id: 'btdm', format: 'roleplay', cluster: 'marketing', team: 'pair', pressure: 'partner', task: 'persuade', workload: 'medium' },
        { id: 'ftdm', format: 'roleplay', cluster: 'finance', team: 'pair', pressure: 'partner', task: 'persuade', workload: 'medium' },
        { id: 'etdm', format: 'roleplay', cluster: 'entrepreneurship', team: 'pair', pressure: 'partner', task: 'persuade', workload: 'medium' },
        { id: 'htdm', format: 'roleplay', cluster: 'hospitality', team: 'pair', pressure: 'partner', task: 'persuade', workload: 'medium' },
        { id: 'bltdm', format: 'roleplay', cluster: 'management', team: 'pair', pressure: 'partner', task: 'persuade', workload: 'medium' },

        // Prepared events.
        { id: 'imcp', format: 'prepared', cluster: 'marketing', team: 'flexible', pressure: 'prepared', task: 'campaign', workload: 'high' },
        { id: 'imce', format: 'prepared', cluster: 'marketing', team: 'flexible', pressure: 'prepared', task: 'campaign', workload: 'high' },
        { id: 'seor', format: 'prepared', cluster: 'marketing', team: 'flexible', pressure: 'prepared', task: 'research', workload: 'major' },
        { id: 'for', format: 'prepared', cluster: 'finance', team: 'flexible', pressure: 'prepared', task: 'research', workload: 'major' },
        { id: 'esb', format: 'prepared', cluster: 'entrepreneurship', team: 'flexible', pressure: 'prepared', task: 'startup', workload: 'high' },
        { id: 'eib', format: 'prepared', cluster: 'entrepreneurship', team: 'flexible', pressure: 'prepared', task: 'startup', workload: 'major' },
        { id: 'htor', format: 'prepared', cluster: 'hospitality', team: 'flexible', pressure: 'prepared', task: 'research', workload: 'major' },
        { id: 'pmbs', format: 'prepared', cluster: 'management', team: 'flexible', pressure: 'prepared', task: 'project', workload: 'high' },

        // Online simulations.
        { id: 'smg', format: 'online', cluster: 'finance', team: 'flexible', pressure: 'strategy', task: 'simulation', workload: 'medium' },
        { id: 'vbcac', format: 'online', cluster: 'finance', team: 'flexible', pressure: 'strategy', task: 'simulation', workload: 'medium' },
        { id: 'vbcen', format: 'online', cluster: 'entrepreneurship', team: 'flexible', pressure: 'strategy', task: 'simulation', workload: 'medium' },
        { id: 'vbchm', format: 'online', cluster: 'hospitality', team: 'flexible', pressure: 'strategy', task: 'simulation', workload: 'medium' },
        { id: 'vbcsp', format: 'online', cluster: 'marketing', team: 'flexible', pressure: 'strategy', task: 'simulation', workload: 'medium' }
    ],

    FBLA: [
        // Objective tests.
        { id: 'f_accounting', format: 'test', subject: 'finance', team: 'solo', task: 'study', prep: 'study' },
        { id: 'f_economics', format: 'test', subject: 'finance', team: 'solo', task: 'analyze', prep: 'study' },
        { id: 'f_securities_investments', format: 'test', subject: 'finance', team: 'solo', task: 'analyze', prep: 'study' },
        { id: 'f_advertising', format: 'test', subject: 'marketing', team: 'solo', task: 'study', prep: 'study' },
        { id: 'f_business_communication', format: 'test', subject: 'communication', team: 'solo', task: 'study', prep: 'study' },
        { id: 'f_business_law', format: 'test', subject: 'law', team: 'solo', task: 'study', prep: 'study' },
        { id: 'f_cybersecurity', format: 'test', subject: 'technology', team: 'solo', task: 'study', prep: 'study' },
        { id: 'f_data_science_ai', format: 'test', subject: 'technology', team: 'solo', task: 'analyze', prep: 'study' },
        { id: 'f_project_management', format: 'test', subject: 'management', team: 'solo', task: 'organize', prep: 'study' },
        { id: 'f_human_resource_management', format: 'test', subject: 'management', team: 'solo', task: 'study', prep: 'study' },
        { id: 'f_personal_finance', format: 'test', subject: 'finance', team: 'solo', task: 'study', prep: 'study' },

        // 9th/10th-grade-only objective tests.
        { id: 'f_introduction_to_business_communication', format: 'test', subject: 'communication', team: 'solo', task: 'study', prep: 'study', introOnly: true },
        { id: 'f_introduction_to_information_technology', format: 'test', subject: 'technology', team: 'solo', task: 'study', prep: 'study', introOnly: true },
        { id: 'f_introduction_to_marketing_concepts', format: 'test', subject: 'marketing', team: 'solo', task: 'study', prep: 'study', introOnly: true },
        { id: 'f_introduction_to_parliamentary_procedure', format: 'test', subject: 'law', team: 'solo', task: 'study', prep: 'study', introOnly: true },
        { id: 'f_introduction_to_business_concepts', format: 'test', subject: 'management', team: 'solo', task: 'study', prep: 'study', introOnly: true },

        // Prepared / presentation events.
        { id: 'f_business_plan', format: 'prepared', subject: 'management', team: 'flexible', task: 'organize', prep: 'project' },
        { id: 'f_financial_planning', format: 'prepared', subject: 'finance', team: 'flexible', task: 'analyze', prep: 'presentation' },
        { id: 'f_event_planning', format: 'prepared', subject: 'hospitality', team: 'flexible', task: 'organize', prep: 'project' },
        { id: 'f_public_speaking', format: 'prepared', subject: 'communication', team: 'solo', task: 'persuade', prep: 'presentation' },
        { id: 'f_social_media_strategies', format: 'prepared', subject: 'marketing', team: 'flexible', task: 'persuade', prep: 'presentation' },

        // Technical / creative prepared events.
        { id: 'f_digital_animation', format: 'build', subject: 'technology', team: 'flexible', task: 'create', prep: 'product' },
        { id: 'f_mobile_application_development', format: 'build', subject: 'technology', team: 'flexible', task: 'create', prep: 'product' },
        { id: 'f_website_coding_development', format: 'build', subject: 'technology', team: 'flexible', task: 'create', prep: 'product' },
        { id: 'f_graphic_design', format: 'build', subject: 'marketing', team: 'flexible', task: 'create', prep: 'product' },

        // 9th/10th-grade-only presentation events.
        { id: 'f_introduction_to_programming', format: 'build', subject: 'technology', team: 'flexible', task: 'create', prep: 'product', introOnly: true },
        { id: 'f_introduction_to_public_speaking', format: 'prepared', subject: 'communication', team: 'solo', task: 'persuade', prep: 'presentation', introOnly: true },
        { id: 'f_introduction_to_social_media_strategy', format: 'prepared', subject: 'marketing', team: 'flexible', task: 'persuade', prep: 'presentation', introOnly: true },
        { id: 'f_introduction_to_business_presentation', format: 'prepared', subject: 'management', team: 'flexible', task: 'persuade', prep: 'presentation', introOnly: true },

        // Roleplays.
        { id: 'f_banking_financial_systems', format: 'roleplay', subject: 'finance', team: 'flexible', task: 'analyze', prep: 'scenario' },
        { id: 'f_business_management', format: 'roleplay', subject: 'management', team: 'flexible', task: 'analyze', prep: 'scenario' },
        { id: 'f_entrepreneurship', format: 'roleplay', subject: 'management', team: 'flexible', task: 'persuade', prep: 'scenario' },
        { id: 'f_hospitality_event_management', format: 'roleplay', subject: 'hospitality', team: 'flexible', task: 'organize', prep: 'scenario' },
        { id: 'f_marketing', format: 'roleplay', subject: 'marketing', team: 'flexible', task: 'persuade', prep: 'scenario' },
        { id: 'f_network_design', format: 'roleplay', subject: 'technology', team: 'flexible', task: 'analyze', prep: 'scenario' },
        { id: 'f_sports_entertainment_management', format: 'roleplay', subject: 'marketing', team: 'flexible', task: 'analyze', prep: 'scenario' },
        { id: 'f_technology_support_services', format: 'roleplay', subject: 'technology', team: 'solo', task: 'analyze', prep: 'scenario' }
    ]
};

let quizAnswers = {};
let quizQuestionIndex = 0;

function getQuizEventById(id) {
    const allEvents = [
        ...decaPreparedData,
        ...decaRoleplayData,
        ...decaOnlineData,
        ...fblaPreparedData,
        ...fblaRoleplayData,
        ...fblaTestData
    ];
    return allEvents.find(item => item.id === id);
}

function getCurrentQuizQuestions() {
    const trackInput = document.getElementById('current-quiz-track');
    const track = trackInput ? trackInput.value : 'DECA';
    return QUIZ_QUESTIONS[track] || QUIZ_QUESTIONS.DECA;
}

function setQuizToggleStyles(track) {
    document.querySelectorAll('.quiz-org-toggle').forEach(btn => {
        const isActive = btn.id === 'quiz-toggle-' + track.toLowerCase();
        btn.setAttribute('aria-pressed', String(isActive));
        btn.style.backgroundColor = isActive ? '#0B2545' : '#FFFFFF';
        btn.style.color = isActive ? '#FFFFFF' : '#0B2545';
        btn.style.boxShadow = isActive ? '4px 4px 0 #FFD100' : 'none';
        btn.style.transform = isActive ? 'translate(-1px, -1px)' : 'none';
    });
}

function initiateQuizMode(track) {
    const trackInput = document.getElementById('current-quiz-track');
    if (!trackInput) return;

    trackInput.value = track;
    quizAnswers = {};
    quizQuestionIndex = 0;

    setQuizToggleStyles(track);

    const label = document.getElementById('quiz-track-label');
    if (label) label.textContent = track + ' Event Quiz';

    const result = document.getElementById('quiz-result-container');
    if (result) result.classList.add('hidden');

    const error = document.getElementById('quiz-question-error');
    if (error) error.classList.add('hidden');

    renderQuizQuestion();
}

function renderQuizQuestion() {
    const questions = getCurrentQuizQuestions();
    const question = questions[quizQuestionIndex];
    const container = document.getElementById('quiz-question-container');
    if (!question || !container) return;

    const selected = quizAnswers[question.id];

    container.innerHTML = `
        <div class="space-y-5">
            <div>
                <span class="text-[10px] font-black uppercase tracking-widest">Question ${quizQuestionIndex + 1}</span>
                <h4 class="text-xl font-black mt-1 leading-snug">${question.question}</h4>
                ${question.note ? `<p class="text-xs font-medium mt-2 leading-relaxed">${question.note}</p>` : ''}
            </div>

            <div class="grid grid-cols-1 gap-3" id="quiz-answer-options">
                ${question.options.map(option => `
                    <label class="quiz-answer-option border-2 border-darkBlue p-4 cursor-pointer transition ${selected === option.value ? 'bg-darkBlue text-white' : 'bg-white text-darkBlue'}">
                        <input type="radio"
                               name="quiz-current-answer"
                               value="${option.value}"
                               ${selected === option.value ? 'checked' : ''}
                               class="accent-darkBlue mr-3">
                        <span class="text-sm font-bold">${option.label}</span>
                    </label>
                `).join('')}
            </div>
        </div>
    `;

    container.querySelectorAll('input[name="quiz-current-answer"]').forEach(input => {
        input.addEventListener('change', () => {
            quizAnswers[question.id] = input.value;
            document.getElementById('quiz-question-error')?.classList.add('hidden');

            container.querySelectorAll('.quiz-answer-option').forEach(label => {
                const radio = label.querySelector('input');
                const isSelected = radio && radio.checked;
                label.classList.toggle('bg-darkBlue', isSelected);
                label.classList.toggle('text-white', isSelected);
                label.classList.toggle('bg-white', !isSelected);
                label.classList.toggle('text-darkBlue', !isSelected);
            });
        });
    });

    const progressLabel = document.getElementById('quiz-progress-label');
    if (progressLabel) progressLabel.textContent = `Question ${quizQuestionIndex + 1} of ${questions.length}`;

    const progressFill = document.getElementById('quiz-progress-fill');
    if (progressFill) progressFill.style.width = `${((quizQuestionIndex + 1) / questions.length) * 100}%`;

    const backButton = document.getElementById('quiz-back-button');
    if (backButton) {
        backButton.disabled = quizQuestionIndex === 0;
        backButton.style.opacity = quizQuestionIndex === 0 ? '0.4' : '1';
        backButton.style.cursor = quizQuestionIndex === 0 ? 'not-allowed' : 'pointer';
    }

    const nextButton = document.getElementById('quiz-next-button');
    const submitButton = document.getElementById('quiz-submit-button');
    const isLast = quizQuestionIndex === questions.length - 1;

    if (nextButton) nextButton.classList.toggle('hidden', isLast);
    if (submitButton) submitButton.classList.toggle('hidden', !isLast);
}

function goToQuizQuestion(direction) {
    const questions = getCurrentQuizQuestions();
    const currentQuestion = questions[quizQuestionIndex];
    if (!currentQuestion) return;

    if (direction > 0 && !quizAnswers[currentQuestion.id]) {
        document.getElementById('quiz-question-error')?.classList.remove('hidden');
        return;
    }

    quizQuestionIndex = Math.max(0, Math.min(questions.length - 1, quizQuestionIndex + direction));
    document.getElementById('quiz-question-error')?.classList.add('hidden');
    renderQuizQuestion();

    document.getElementById('quiz-question-container')?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
}

function scoreTeamPreference(candidateTeam, answer) {
    if (!answer || answer === 'open') return 0;
    if (answer === 'solo') {
        if (candidateTeam === 'solo') return 3;
        if (candidateTeam === 'flexible') return 1;
    }
    if (answer === 'pair') {
        if (candidateTeam === 'pair') return 3;
        if (candidateTeam === 'flexible') return 2;
    }
    if (answer === 'team') {
        if (candidateTeam === 'flexible') return 3;
        if (candidateTeam === 'pair') return 2;
    }
    return 0;
}

function scoreDecaCandidate(candidate, answers) {
    if (candidate.firstYearOnly && answers.firstYear !== 'yes') return -Infinity;

    let score = 0;

    if (candidate.firstYearOnly && answers.firstYear === 'yes') {
        score += 5;
        if (answers.grade === '9' || answers.grade === '10') score += 1;
    }

    if (answers.format && answers.format !== 'open' && candidate.format === answers.format) score += 6;
    if (answers.pressure && candidate.pressure === answers.pressure) score += 4;
    if (answers.cluster && answers.cluster !== 'open' && candidate.cluster === answers.cluster) score += 5;
    if (answers.task && candidate.task === answers.task) score += 5;
    if (answers.workload && candidate.workload === answers.workload) score += 3;

    score += scoreTeamPreference(candidate.team, answers.team);

    // Partial format matches keep close alternatives competitive.
    if (answers.pressure === 'fast' && candidate.format === 'roleplay') score += 2;
    if (answers.pressure === 'partner' && candidate.format === 'roleplay' && candidate.team === 'pair') score += 2;
    if (answers.pressure === 'prepared' && candidate.format === 'prepared') score += 2;
    if (answers.pressure === 'strategy' && candidate.format === 'online') score += 2;

    if (answers.workload === 'low' && candidate.format === 'roleplay') score += 2;
    if (answers.workload === 'medium' && (candidate.format === 'roleplay' || candidate.format === 'online')) score += 1;
    if ((answers.workload === 'high' || answers.workload === 'major') && candidate.format === 'prepared') score += 2;

    return score;
}

function scoreFblaCandidate(candidate, answers) {
    const isIntroGrade = answers.grade === '9' || answers.grade === '10';
    if (candidate.introOnly && !isIntroGrade) return -Infinity;

    let score = candidate.introOnly && isIntroGrade ? 3 : 0;

    if (answers.format && answers.format !== 'open' && candidate.format === answers.format) score += 6;
    if (answers.subject && answers.subject !== 'open' && candidate.subject === answers.subject) score += 5;
    if (answers.task && candidate.task === answers.task) score += 5;
    if (answers.prep && candidate.prep === answers.prep) score += 4;

    score += scoreTeamPreference(candidate.team, answers.team);

    if (answers.presentation === 'avoid' && candidate.format === 'test') score += 6;
    if (answers.presentation === 'love' && (candidate.format === 'prepared' || candidate.format === 'roleplay')) score += 3;
    if (answers.presentation === 'prepared' && (candidate.format === 'prepared' || candidate.format === 'build')) score += 4;
    if (answers.presentation === 'team' && candidate.team === 'flexible') score += 3;

    if (answers.priority === 'straightforward' && candidate.format === 'test') score += 3;
    if (answers.priority === 'creative' && candidate.format === 'build') score += 4;
    if (answers.priority === 'challenge' && (candidate.format === 'roleplay' || candidate.format === 'build')) score += 3;
    if (answers.priority === 'friends' && candidate.team === 'flexible') score += 3;

    return score;
}

function formatQuizType(track, candidate) {
    if (track === 'DECA') {
        if (candidate.firstYearOnly) return 'Principles Roleplay';
        if (candidate.format === 'roleplay') return candidate.team === 'pair' ? 'Team Decision Making' : 'Roleplay / Case Study';
        if (candidate.format === 'prepared') return 'Prepared Event';
        if (candidate.format === 'online') return 'Online Simulation';
    } else {
        if (candidate.introOnly && candidate.format === 'test') return '9th/10th Grade Objective Test';
        if (candidate.introOnly && candidate.format !== 'test') return '9th/10th Grade Presentation Event';
        if (candidate.format === 'test') return 'Objective Test';
        if (candidate.format === 'roleplay') return 'Roleplay';
        if (candidate.format === 'build') return 'Technical / Creative Event';
        if (candidate.format === 'prepared') return 'Prepared Presentation';
    }
    return 'Competitive Event';
}

function buildQuizReason(track, candidate, answers) {
    const reasons = [];

    if (track === 'DECA') {
        const clusterLabels = {
            marketing: 'marketing',
            finance: 'finance',
            entrepreneurship: 'entrepreneurship',
            hospitality: 'hospitality and tourism',
            management: 'management and business operations'
        };

        if (candidate.firstYearOnly && answers.firstYear === 'yes') {
            reasons.push('you said this is your first year in DECA');
        }
        if (answers.cluster !== 'open' && candidate.cluster === answers.cluster) {
            reasons.push(`you chose ${clusterLabels[candidate.cluster]}`);
        }
        if (answers.format !== 'open' && candidate.format === answers.format) {
            const label = candidate.format === 'roleplay' ? 'live roleplays' :
                candidate.format === 'prepared' ? 'prepared projects' : 'online simulations';
            reasons.push(`you preferred ${label}`);
        }
        if (candidate.task === answers.task) {
            const taskLabels = {
                persuade: 'solving and pitching business problems',
                campaign: 'building marketing campaigns',
                startup: 'developing business ideas',
                research: 'research and strategy',
                project: 'structured project work',
                simulation: 'business simulations'
            };
            reasons.push(`you liked ${taskLabels[candidate.task]}`);
        }
    } else {
        const subjectLabels = {
            finance: 'finance',
            marketing: 'marketing',
            technology: 'technology',
            management: 'management',
            communication: 'communication',
            law: 'law and government',
            hospitality: 'hospitality and event planning'
        };

        if (candidate.introOnly && (answers.grade === '9' || answers.grade === '10')) {
            reasons.push('your grade makes you eligible for this introductory event');
        }
        if (answers.subject !== 'open' && candidate.subject === answers.subject) {
            reasons.push(`you chose ${subjectLabels[candidate.subject]}`);
        }
        if (answers.format !== 'open' && candidate.format === answers.format) {
            const label = candidate.format === 'test' ? 'objective testing' :
                candidate.format === 'roleplay' ? 'live scenarios' :
                candidate.format === 'build' ? 'building and creating' : 'prepared presentations';
            reasons.push(`you preferred ${label}`);
        }
        if (answers.presentation === 'avoid' && candidate.format === 'test') {
            reasons.push('you preferred little or no presenting');
        }
        if (candidate.task === answers.task) {
            reasons.push('the work style matches the task you selected');
        }
    }

    if (!reasons.length) {
        return 'This event is one of the strongest overall matches for the preferences you selected.';
    }

    return 'Strong match because ' + reasons.slice(0, 3).join(', ') + '.';
}

function evaluateQuizResults(event) {
    event.preventDefault();

    const trackInput = document.getElementById('current-quiz-track');
    if (!trackInput) return;

    const track = trackInput.value;
    const questions = getCurrentQuizQuestions();
    const currentQuestion = questions[quizQuestionIndex];

    if (currentQuestion && !quizAnswers[currentQuestion.id]) {
        document.getElementById('quiz-question-error')?.classList.remove('hidden');
        return;
    }

    const scoreFn = track === 'DECA' ? scoreDecaCandidate : scoreFblaCandidate;

    const ranked = QUIZ_CANDIDATES[track]
        .map(candidate => ({
            candidate,
            event: getQuizEventById(candidate.id),
            score: scoreFn(candidate, quizAnswers)
        }))
        .filter(item => item.event && Number.isFinite(item.score))
        .sort((a, b) => b.score - a.score || a.event.name.localeCompare(b.event.name))
        .slice(0, 3);

    const cardsBox = document.getElementById('quiz-result-cards');
    if (!cardsBox) return;

    cardsBox.innerHTML = ranked.map((item, index) => {
        const type = formatQuizType(track, item.candidate);
        const reason = buildQuizReason(track, item.candidate, quizAnswers);

        return `
            <article class="bg-white p-4 border-2 border-darkBlue flex flex-col justify-between gap-4">
                <div>
                    <span class="inline-block bg-darkBlue text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 mb-3">#${index + 1} Match</span>
                    <span class="block text-[10px] font-black uppercase tracking-wider">${type}</span>
                    <h5 class="font-black text-base mt-1">${item.event.name}</h5>
                    <p class="text-xs font-medium leading-relaxed mt-3">${reason}</p>
                    <p class="text-[10px] font-black uppercase tracking-wider mt-3">Participants: ${item.event.members}</p>
                </div>

                <a href="${item.event.url}"
                   target="_blank"
                   rel="noopener"
                   class="w-full text-center bg-darkBlue text-white font-bold py-2 text-[10px] uppercase tracking-wider block hover:bg-white hover:text-darkBlue border border-darkBlue transition-colors">
                    View Official Event <i class="fa-solid fa-arrow-up-right-from-square ml-1 text-[8px]"></i>
                </a>
            </article>
        `;
    }).join('');

    const resultTrack = document.getElementById('quiz-result-track');
    if (resultTrack) resultTrack.textContent = track;

    const resultContainer = document.getElementById('quiz-result-container');
    if (resultContainer) {
        resultContainer.classList.remove('hidden');
        resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function initNoviceQuiz() {
    if (!document.getElementById('aptitude-quiz-form')) return;
    initiateQuizMode('DECA');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNoviceQuiz);
} else {
    initNoviceQuiz();
}

/* ============================================================
   PAGE NAVIGATION
   Each nav item is now its own HTML page. switchTab() is kept
   so existing in-page buttons keep working — it navigates
   instead of hiding and showing sections.
   ============================================================ */
const PAGE_FILES = {
    home: 'index.html',
    novice: 'novice.html',
    resources: 'resources.html',
    gallery: 'gallery.html',
    awards: 'awards.html',
    officers: 'officers.html',
    alumni: 'alumni.html',
    join: 'join.html'
};

function switchTab(tabId) {
    const target = PAGE_FILES[tabId];
    if (!target) return;

    // Already on this page: just scroll to the top.
    if (document.body.dataset.page === tabId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    window.location.href = target;
}

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
(function () {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    if (!hamburger || !navbar) return;

    function closeMenu() {
        navbar.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.querySelector('i').className = 'fa fa-bars';
    }

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = navbar.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.querySelector('i').className = isOpen ? 'fa fa-times' : 'fa fa-bars';
    });

    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
            closeMenu();
        }
    });
}());

/* ============================================================
   HIGH CONTRAST MODE
   ============================================================ */
(function () {
    const KEY = 'skylineHighContrast';
    const isOn = () => document.body.classList.contains('high-contrast');

    function syncButton() {
        const btn = document.getElementById('contrastToggle');
        if (!btn) return;
        btn.setAttribute('aria-pressed', String(isOn()));
        const label = btn.querySelector('.contrast-toggle-label');
        if (label) label.textContent = 'High contrast: ' + (isOn() ? 'On' : 'Off');
    }

    function setMode(on) {
        document.body.classList.toggle('high-contrast', on);
        try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch (e) {}
        syncButton();
    }

    let saved = false;
    try { saved = localStorage.getItem(KEY) === 'on'; } catch (e) {}
    document.body.classList.toggle('high-contrast', saved);

    document.addEventListener('click', (e) => {
        const btn = e.target.closest && e.target.closest('#contrastToggle');
        if (btn) setMode(!isOn());
    });

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', syncButton);
    } else {
        syncButton();
    }
})();

/* ============================================================
   EVENTS CALENDAR
   Ported from the fblawebsite repo.

   To add an event, push an object onto eventsArr below.
   NOTE: `month` is 1-based (1 = January, 12 = December).

   {
       day: 14,
       month: 9,
       year: 2026,
       events: [
           { title: "Chapter Meeting", time: "3:00 PM - 4:00 PM" }
       ]
   }
   ============================================================ */
(function () {
    const calendar = document.querySelector('.calendar');
    if (!calendar) return;

    const dateEl = calendar.querySelector('.date');
    const daysContainer = calendar.querySelector('.days');
    const prev = calendar.querySelector('.prev');
    const next = calendar.querySelector('.next');
    const todayBtn = calendar.querySelector('.today-btn');
    const gotoBtn = calendar.querySelector('.goto-btn');
    const dateInput = calendar.querySelector('.date-input');
    const eventDay = document.querySelector('.today-date .event-day');
    const eventDate = document.querySelector('.today-date .event-date');
    const eventsContainer = document.querySelector('.container-cal .events');
    const highlightsList = document.getElementById('month-highlights-list');
    const highlightsMonth = document.getElementById('highlights-month');

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const weekdays = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    // Add chapter events here. `month` is 1-based.
    const eventsArr = [
        {
            day: 11,
            month: 9,
            year: 2026,
            events: [
                {title: "DECA Fall Leadership Conference", time: "7:30 AM - 12:30 PM" }
            ]
        },
        {
            day: 1,
            month: 10,
            year: 2026,
            events: [
                { title: "EagleFest", time: "4:00 PM - 6:00 PM" }
            ]
        },
        {
            day: 7,
            month: 10,
            year: 2026,
            events: [
                { title: "FBLA Fall Leadership Conference", time: "8:00 AM - 3:00 PM" }
            ]
        },
        {
            day: 20,
            month: 10,
            year: 2026,
            events: [
                { title: "Aggie Invitational", time: "All Day" }
            ]
        }
    ];

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let activeDay = today.getDate();

    function hasEvent(day, monthIndex, yr) {
        return eventsArr.some(e => e.day === day && e.month === monthIndex + 1 && e.year === yr);
    }

    function initCalendar() {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const prevLastDay = new Date(year, month, 0);
        const prevDays = prevLastDay.getDate();
        const lastDate = lastDay.getDate();
        const startDay = firstDay.getDay();
        const nextDays = 6 - lastDay.getDay();

        dateEl.textContent = months[month] + ' ' + year;

        let days = '';

        for (let x = startDay; x > 0; x--) {
            days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
        }

        const now = new Date();
        const isCurrentMonth = year === now.getFullYear() && month === now.getMonth();

        // Keep the selection in range when moving between months.
        if (isCurrentMonth) {
            activeDay = now.getDate();
        } else if (activeDay > lastDate) {
            activeDay = lastDate;
        }

        for (let i = 1; i <= lastDate; i++) {
            const classes = ['day'];
            if (hasEvent(i, month, year)) classes.push('event');
            if (isCurrentMonth && i === now.getDate()) classes.push('today');
            if (i === activeDay) classes.push('active');
            days += `<div class="${classes.join(' ')}">${i}</div>`;
        }

        for (let j = 1; j <= nextDays; j++) {
            days += `<div class="day next-date">${j}</div>`;
        }

        daysContainer.innerHTML = days;
        getActiveDay(activeDay);
        updateEvents(activeDay);
        updateMonthHighlights();
        addListener();
    }

    /* Everything happening in the month currently on screen, listed
       under the calendar. Clicking one jumps to that day. */
    function updateMonthHighlights() {
        if (!highlightsList) return;

        if (highlightsMonth) {
            highlightsMonth.textContent = months[month] + ' ' + year;
        }

        const entries = [];
        eventsArr.forEach(entry => {
            if (entry.month === month + 1 && entry.year === year) {
                entry.events.forEach(ev => {
                    entries.push({ day: entry.day, title: ev.title, time: ev.time });
                });
            }
        });
        entries.sort((a, b) => a.day - b.day || a.title.localeCompare(b.title));

        if (!entries.length) {
            highlightsList.innerHTML =
                '<li class="month-highlights-none">Nothing scheduled this month</li>';
            return;
        }

        const now = new Date();
        const isCurrentMonth = year === now.getFullYear() && month === now.getMonth();

        highlightsList.innerHTML = entries.map(e => {
            const dow = weekdays[new Date(year, month, e.day).getDay()].slice(0, 3);
            const past = isCurrentMonth && e.day < now.getDate();
            return `<li>
                    <button type="button" class="month-highlight${past ? ' is-past' : ''}" data-day="${e.day}">
                        <span class="month-highlight-date">
                            <span class="month-highlight-dow">${dow}</span>
                            <span class="month-highlight-day">${e.day}</span>
                        </span>
                        <span class="month-highlight-body">
                            <span class="month-highlight-title">${e.title}</span>
                            <span class="month-highlight-time">${e.time}</span>
                        </span>
                    </button>
                </li>`;
        }).join('');

        highlightsList.querySelectorAll('.month-highlight').forEach(btn => {
            btn.addEventListener('click', () => {
                activeDay = Number(btn.dataset.day);
                initCalendar();
                const cell = [...daysContainer.querySelectorAll('.day')].find(d =>
                    !d.classList.contains('prev-date') &&
                    !d.classList.contains('next-date') &&
                    Number(d.textContent) === activeDay
                );
                if (cell && cell.scrollIntoView) {
                    cell.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            });
        });
    }

    function getActiveDay(date) {
        const day = new Date(year, month, date);
        eventDay.textContent = weekdays[day.getDay()];
        eventDate.textContent = months[month] + ' ' + date + ', ' + year;
    }

    function updateEvents(date) {
        let events = '';
        eventsArr.forEach((entry) => {
            if (date === entry.day && month + 1 === entry.month && year === entry.year) {
                entry.events.forEach((ev) => {
                    events +=
                        `<div class="event">
                            <div class="title">
                                <i class="fas fa-circle" aria-hidden="true"></i>
                                <h3 class="event-title">${ev.title}</h3>
                            </div>
                            <span class="event-time">${ev.time}</span>
                        </div>`;
                });
            }
        });

        if (events === '') {
            events = `<div class="no-event"><h3 class="event-none">No events scheduled</h3></div>`;
        }

        eventsContainer.innerHTML = events;
    }

    function addListener() {
        daysContainer.querySelectorAll('.day').forEach((day) => {
            if (day.classList.contains('prev-date') || day.classList.contains('next-date')) return;
            day.addEventListener('click', () => {
                activeDay = Number(day.textContent);
                daysContainer.querySelectorAll('.day').forEach(d => d.classList.remove('active'));
                day.classList.add('active');
                getActiveDay(activeDay);
                updateEvents(activeDay);
            });
        });
    }

    function prevMonth() {
        month--;
        if (month < 0) {
            month = 11;
            year--;
        }
        initCalendar();
    }

    function nextMonth() {
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }
        initCalendar();
    }

    prev.addEventListener('click', prevMonth);
    next.addEventListener('click', nextMonth);
    prev.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); prevMonth(); } });
    next.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); nextMonth(); } });

    todayBtn.addEventListener('click', () => {
        today = new Date();
        month = today.getMonth();
        year = today.getFullYear();
        activeDay = today.getDate();
        initCalendar();
    });

    dateInput.addEventListener('input', (e) => {
        dateInput.value = dateInput.value.replace(/[^0-9/]/g, '');
        if (dateInput.value.length === 2) {
            dateInput.value += '/';
        }
        if (dateInput.value.length > 7) {
            dateInput.value = dateInput.value.slice(0, 7);
        }
        if (e.inputType === 'deleteContentBackward' && dateInput.value.length === 3) {
            dateInput.value = dateInput.value.slice(0, 2);
        }
    });

    function gotoDate() {
        const parts = dateInput.value.split('/');
        if (parts.length === 2) {
            const m = Number(parts[0]);
            const y = Number(parts[1]);
            if (m > 0 && m < 13 && parts[1].length === 4 && !isNaN(y)) {
                month = m - 1;
                year = y;
                activeDay = 1;
                initCalendar();
                return;
            }
        }
        alert('Enter a date as mm/yyyy, for example 09/2026.');
    }

    gotoBtn.addEventListener('click', gotoDate);
    dateInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); gotoDate(); } });

    initCalendar();
})();
/* ============================================================
   NATIONALS PHOTO COLLAGES

   Each collage cycles its tiles through a pool of photos, fading
   one tile at a time. List as many photos as you like — more
   photos than tiles is the point; the extras rotate in.

   To add photos: drop the files in images/ and list their paths
   below. A plain string works, or use an object to attach a
   caption that appears when someone hovers the tile.

       icdc: [
           "images/icdc-01.jpg",
           { src: "images/icdc-02.jpg", caption: "Business Growth Plan finalists" }
       ]

   Leave a list empty and that collage keeps its dashed
   placeholders — nothing breaks.
   ============================================================ */
const NATIONALS_PHOTOS = {
    icdc: [
        // "images/icdc-01.jpg",
        // { src: "images/icdc-02.jpg", caption: "Add a caption here" },
    ],
    nlc: [
        // "images/nlc-01.jpg",
        // { src: "images/nlc-02.jpg", caption: "Add a caption here" },
    ]
};

// How long a photo stays before the next tile swaps, in milliseconds.
const COLLAGE_SWAP_INTERVAL = 3200;

function initNationalsCollages() {
    const blocks = document.querySelectorAll('.collage-block[data-collage]');
    if (!blocks.length) return;

    const reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    blocks.forEach((block, blockIndex) => {
        const key = block.dataset.collage;
        const photos = (NATIONALS_PHOTOS[key] || []).map(p =>
            typeof p === 'string' ? { src: p, caption: '' } : p
        );
        const tiles = [...block.querySelectorAll('.collage-tile')];

        // No photos yet: leave the placeholders alone.
        if (!photos.length || !tiles.length) return;

        // Give each tile two stacked layers so one can fade in over the other.
        const states = tiles.map((tile, i) => {
            // Guard against a second init run stacking extra layers.
            tile.querySelectorAll('.collage-img').forEach(el => el.remove());

            const a = document.createElement('img');
            const b = document.createElement('img');
            [a, b].forEach(img => {
                img.className = 'collage-img';
                img.loading = 'lazy';
                img.decoding = 'async';
                img.alt = '';
                tile.insertBefore(img, tile.firstChild);
            });
            return { tile, layers: [a, b], front: 0, photoIndex: i % photos.length };
        });

        const show = (state, photo, animate) => {
            const next = state.layers[1 - state.front];
            const current = state.layers[state.front];

            const reveal = () => {
                next.classList.add('is-visible');
                current.classList.remove('is-visible');
                state.front = 1 - state.front;
                state.tile.classList.add('is-live');

                const cap = state.tile.querySelector('.collage-caption');
                if (cap) cap.textContent = photo.caption || '';
                next.alt = photo.caption || 'Skyline Business Club at nationals';
            };

            next.onload = reveal;
            next.onerror = () => {
                // Bad path: drop back to the placeholder rather than showing a broken image.
                state.tile.classList.remove('is-live');
            };
            next.src = photo.src;

            // Cached images may already be complete before onload attaches.
            if (next.complete && next.naturalWidth) reveal();
            if (!animate) next.style.transition = 'none';
        };

        // Seed every tile with its starting photo.
        states.forEach(state => show(state, photos[state.photoIndex], false));

        // Nothing left over to rotate in.
        if (photos.length <= tiles.length) return;

        let cursor = tiles.length % photos.length;   // next unused photo
        let turn = 0;                                // which tile swaps next
        let timer = null;

        const step = () => {
            const state = states[turn % states.length];
            const photo = photos[cursor % photos.length];
            show(state, photo, !reduceMotion);
            cursor = (cursor + 1) % photos.length;
            turn += 1;
        };

        // Stagger the two collages so they do not swap in lockstep.
        const offset = blockIndex * (COLLAGE_SWAP_INTERVAL / 2);

        const start = () => {
            if (timer) return;
            timer = setInterval(step, COLLAGE_SWAP_INTERVAL);
        };
        const stop = () => {
            clearInterval(timer);
            timer = null;
        };

        // Only animate while the collage is on screen and the tab is visible.
        if ('IntersectionObserver' in window) {
            new IntersectionObserver(entries => {
                entries.forEach(e => (e.isIntersecting && !document.hidden) ? start() : stop());
            }, { threshold: 0.15 }).observe(block);
        } else {
            setTimeout(start, offset);
        }

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) stop();
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNationalsCollages);
} else {
    initNationalsCollages();
}
