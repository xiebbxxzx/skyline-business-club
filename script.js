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
    { id: "f_broadcast_journalism", name: "Broadcast Journalism", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Broadcast-Journalism.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_business_ethics", name: "Business Ethics", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Business-Ethics.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_business_plan", name: "Business Plan", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Business-Plan.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_career_portfolio", name: "Career Portfolio", cluster: "Presentation", category: "Presentation", members: "1", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Career-Portfolio.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_coding_programming", name: "Coding & Programming", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Coding-and-Programming.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_computer_game_simulation_programming", name: "Computer Game & Simulation Programming", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Computer-Game-Simulation-Programming.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_data_analysis", name: "Data Analysis", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Data-Analysis.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_digital_animation", name: "Digital Animation", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Digital-Animation.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_digital_video_production", name: "Digital Video Production", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Digital-Video-Production.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_event_planning", name: "Event Planning", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Event-Planning.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_financial_planning", name: "Financial Planning", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Financial-Planning.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_financial_statement_analysis", name: "Financial Statement Analysis", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Financial-Statement-Analysis.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_future_business_educator", name: "Future Business Educator", cluster: "Presentation", category: "Presentation", members: "1", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Future-Business-Educator.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_future_business_leader", name: "Future Business Leader", cluster: "Presentation", category: "Presentation", members: "1", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Future-Business-Leader.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_graphic_design", name: "Graphic Design", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Graphic-Design.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_impromptu_speaking", name: "Impromptu Speaking", cluster: "Presentation", category: "Presentation", members: "1", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Impromptu-Speaking.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_job_interview", name: "Job Interview", cluster: "Presentation", category: "Presentation", members: "1", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Job-Interview.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_mobile_application_development", name: "Mobile Application Development", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Mobile-Application-Development.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_public_service_announcement", name: "Public Service Announcement", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Public-Service-Announcement.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_public_speaking", name: "Public Speaking", cluster: "Presentation", category: "Presentation", members: "1", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Public-Speaking.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_sales_presentation", name: "Sales Presentation", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Sales-Presentation.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_social_media_strategies", name: "Social Media Strategies", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Social-Media-Strategies.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_supply_chain_management", name: "Supply Chain Management", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Supply-Chain-Management.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_visual_design", name: "Visual Design", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Visual-Design.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_website_coding_development", name: "Website Coding & Development", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Website-Coding-and-Development.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_website_design", name: "Website Design", cluster: "Presentation", category: "Presentation", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Website-Design.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_business_presentation", name: "Introduction to Business Presentation", cluster: "Presentation (9th & 10th only)", category: "Presentation (9th & 10th only)", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Introduction-to-Business-Presentation.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_programming", name: "Introduction to Programming", cluster: "Presentation (9th & 10th only)", category: "Presentation (9th & 10th only)", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Introduction-to-Programming.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_public_speaking", name: "Introduction to Public Speaking", cluster: "Presentation (9th & 10th only)", category: "Presentation (9th & 10th only)", members: "1", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Introduction-to-Public-Speaking.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_introduction_to_social_media_strategy", name: "Introduction to Social Media Strategy", cluster: "Presentation (9th & 10th only)", category: "Presentation (9th & 10th only)", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Presentation%20Events/Introduction-to-Social-Media-Strategy.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_community_service_project", name: "Community Service Project", cluster: "Chapter Event", category: "Chapter Event", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Chapter%20Events/Community-Service-Project.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_local_chapter_annual_business_report", name: "Local Chapter Annual Business Report", cluster: "Chapter Event", category: "Chapter Event", members: "1 or 2", test: "Varies — see guidelines", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Chapter%20Events/Local-Chapter-Annual-Business-Report.pdf", mentors: ["Ask an officer at a meeting"] },
];

// FBLA role play events (12 events)
const fblaRoleplayData = [
    { id: "f_banking_financial_systems", name: "Banking & Financial Systems", cluster: "Role Play", category: "Role Play", members: "1 or 2", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Banking-and-Financial-Systems.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_business_management", name: "Business Management", cluster: "Role Play", category: "Role Play", members: "1 or 2", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Business-Management.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_customer_service", name: "Customer Service", cluster: "Role Play", category: "Role Play", members: "1", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Customer-Service.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_entrepreneurship", name: "Entrepreneurship", cluster: "Role Play", category: "Role Play", members: "1 or 2", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Entrepreneurship.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_hospitality_event_management", name: "Hospitality & Event Management", cluster: "Role Play", category: "Role Play", members: "1 or 2", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Hospitality-and-Event-Management.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_international_business", name: "International Business", cluster: "Role Play", category: "Role Play", members: "1 or 2", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/International-Business.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_management_information_systems", name: "Management Information Systems", cluster: "Role Play", category: "Role Play", members: "1 or 2", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Management-Information-Systems.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_marketing", name: "Marketing", cluster: "Role Play", category: "Role Play", members: "1 or 2", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Marketing.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_network_design", name: "Network Design", cluster: "Role Play", category: "Role Play", members: "1 or 2", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Network-Design.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_parliamentary_procedure", name: "Parliamentary Procedure", cluster: "Role Play (Team)", category: "Role Play (Team)", members: "Team", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Parliamentary-Procedure.pdf", mentors: ["Ask an officer at a meeting"] },
    { id: "f_sports_entertainment_management", name: "Sports & Entertainment Management", cluster: "Role Play", category: "Role Play", members: "1 or 2", test: "Objective test + role play", url: "https://connect.fbla.org/headquarters/files/High%20School%20Competitive%20Events%20Resources/Individual%20Guidelines/Role%20Play%20Events/Sports-and-Entertainment-Management.pdf", mentors: ["Ask an officer at a meeting"] },
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
        "exam_2": ["Xuanyou Wu", "Elisa Tandra", "Grayson Carter"],
        "exam_4": ["Madeline “Maddie” Doherty", "Melanie Wang"],
        "exam_5": ["Daniel Luo", "Melanie Wang", "Sreeram Patcha", "Symon Kim", "Quynhanh Le", "Augustine “Gus” Pham", "Joyce Xie", "Rahul Nair", "Chloe Zou"],
        "exam_6": ["Kainalu “Kai” Siu"],

        // DECA PREPARED EVENTS
        "pmbs": ["Jack Wu", "Sreeram Patcha"],
        "pmca": ["Selha Chaozstang", "Annie Lin", "Eva Averin"],
        "efb": ["Eli Shen"],
        "eib": ["Andrew Jiao", "Lydia Bartholomew", "Hailey Park"],
        "eip": ["Eva Averin"],
        "imce": ["Daniel Luo"],
        "imcp": ["Lydia Bartholomew", "Joyce Xie", "Casey Zhang"],
        "imcs": ["Sreeram Patcha", "Aksel Rasmussen"],
        "seor": ["Jiyu Han"],
        "esb": ["Sarah Wu", "Chloe Zou"],

        // DECA ROLEPLAY / CASE STUDY EVENTS
        "act": ["Brady Murtaugh"],
        "bfs": ["Yicheng Deng"],
        "bsm": ["Charlotte Soelberg"],
        "btdm": ["Ryan Bai", "Augustine “Gus” Pham"],
        "ent": ["Elisa Tandra"],
        "fms": ["Chloe Zou"],
        "hlm": ["Melanie Wang"],
        "mcs": ["Joyce Xie"],
        "pfl": ["Kainalu “Kai” Siu"],
        "qsrm": ["Hailey Park"],
        "rms": ["Daniel Luo"],

        // FBLA PREPARED EVENTS
        "f_business_ethics": ["Madeline “Maddie” Doherty", "Kainalu “Kai” Siu"],
        "f_data_analysis": ["Elisa Tandra", "Chloe Zou"],
        "f_digital_animation": ["Joyce Xie"],
        "f_event_planning": ["Sophia Chen", "Sarah Wu", "Quynhanh Le"],
        "f_financial_planning": ["Brady Murtaugh", "Sreeram Patcha", "Jack Wu"],
        "f_mobile_application_development": ["Sophia Chen", "Solomon Kim", "Eli Shen"],
        "f_public_service_announcement": ["Emily Tan", "Kristine Tra"],
        "f_sales_presentation": ["Andrew Jiao", "Nathan Li"],
        "f_social_media_strategies": ["Sam Hodson", "Aksel Rasmussen"],
        "f_supply_chain_management": ["Olivia Tran", "Chloe Zou"],
        "f_website_coding_development": ["Symon Kim", "Augustine “Gus” Pham", "Kevin Ying"],
        "f_introduction_to_business_presentation": ["Lydia Bartholomew", "Hailey Park", "Melanie Wang"],
        "f_introduction_to_programming": ["Yicheng Deng", "Joshua Zhang", "Melinda Zhou"],
        "f_introduction_to_public_speaking": ["Andrew Jiao"],
        "f_introduction_to_social_media_strategy": ["Leya Olsen", "Nikki Santi"],

        // FBLA ROLEPLAY / CASE STUDY EVENTS
        "f_banking_financial_systems": ["Rahul Nair", "Sreeram Patcha"],
        "f_business_management": ["Daniel Luo"],
        "f_hospitality_event_management": ["Sreeram Patcha", "Jack Wu"],
        "f_management_information_systems": ["Symon Kim", "Kevin Ying", "Jailai Ying"],
        "f_network_design": ["Selha Chaozstang", "Annie Lin"],
        "f_sports_entertainment_management": ["Andrew Jiao", "Aaditya Kuberan", "Nathan Li"],
        "f_technology_support_services": ["Aaditya Kuberan"],

        // FBLA OBJECTIVE / PRODUCTION TESTS
        "f_agribusiness": ["Daniel Luo"],
        "f_business_communication": ["Melanie Wang"],
        "f_insurance_risk_management": ["Elisa Tandra"],
        "f_public_administration_management": ["Daniel Luo"],
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

        // Convert DECA's generic "Cluster exam" label into the actual exam.
        const getSpecificTest = (item) => {
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
                                <span class="block text-[10px] font-black tracking-widest text-darkBlue">Person Who Can Help:</span>
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

    const decaBtn = document.getElementById('res-tab-deca');
    const fblaBtn = document.getElementById('res-tab-fbla');

    if (branchType === 'deca') {
        decaBtn.className = "flex-1 text-center py-4 font-black text-sm uppercase tracking-wider bg-darkBlue text-white border-r-2 border-darkBlue";
        fblaBtn.className = "flex-1 text-center py-4 font-black text-sm uppercase tracking-wider bg-white text-darkBlue hover:bg-darkBlue hover:text-white transition";
    } else {
        decaBtn.className = "flex-1 text-center py-4 font-black text-sm uppercase tracking-wider bg-white text-darkBlue border-r-2 border-darkBlue hover:bg-darkBlue hover:text-white transition";
        fblaBtn.className = "flex-1 text-center py-4 font-black text-sm uppercase tracking-wider bg-darkBlue text-white";
    }
}

function initiateQuizMode(track) {
    document.getElementById('current-quiz-track').value = track;
    const label = document.getElementById('quiz-track-label');
    label.innerText = track + " System Analysis";

    const btnDeca = document.getElementById('quiz-toggle-deca');
    const btnFbla = document.getElementById('quiz-toggle-fbla');

    if(track === 'DECA') {
        btnDeca.className = "bg-darkBlue text-white text-xs font-black px-3 py-1 border border-darkBlue uppercase tracking-wider";
        btnFbla.className = "bg-white text-darkBlue text-xs font-black px-3 py-1 border border-darkBlue uppercase tracking-wider";
    } else {
        btnFbla.className = "bg-darkBlue text-white text-xs font-black px-3 py-1 border border-darkBlue uppercase tracking-wider";
        btnDeca.className = "bg-white text-darkBlue text-xs font-black px-3 py-1 border border-darkBlue uppercase tracking-wider";
    }
    document.getElementById('quiz-result-container').classList.add('hidden');
    document.getElementById('aptitude-quiz-form').reset();
}

function evaluateQuizResults(event) {
    event.preventDefault();
    const track = document.getElementById('current-quiz-track').value;

    const q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
    const q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);
    const q4 = parseInt(document.querySelector('input[name="q4"]:checked').value);
    const grade = document.querySelector('input[name="q6"]:checked').value;

    const isUpperClassman = (grade === '11' || grade === '12');
    let recommendations = [];

    if (track === 'DECA') {
        if (q2 >= 3 && q4 >= 3) {
            recommendations = [
                isUpperClassman 
                    ? { name: "Retail Merchandising Series (RMS)", cat: "Individual Core Roleplay System", url: "https://www.deca.org/compete/retail-merchandising" }
                    : { name: "Principles of Marketing (PBM)", cat: "Introductory Roleplay Series", url: "https://www.deca.org/compete/principles-of-marketing" },
                { name: "Marketing Communications Series (MCS)", cat: "Individual Roleplay Series", url: "https://www.deca.org/compete/marketing-communications" },
                { name: "Sports and Entertainment Marketing (SEM)", cat: "Individual Case Study", url: "https://www.deca.org/compete/sports-and-entertainment-marketing-series" }
            ];
        } else if (q3 >= 3) {
            recommendations = [
                isUpperClassman
                    ? { name: "Business Finance Series (BFS)", cat: "Individual Case Roleplay Variant", url: "https://www.deca.org/compete/business-finance" }
                    : { name: "Principles of Finance (PBF)", cat: "Introductory Roleplay Series", url: "https://www.deca.org/compete/principles-of-finance" },
                { name: "Integrated Marketing Campaign (IMC)", cat: "Prepared Written Event Operations", url: "https://www.deca.org/compete/integrated-marketing-campaign-product" },
                { name: "Business Operations Research (BOR)", cat: "Prepared Written Strategic Event", url: "https://www.deca.org/compete/business-services-operations-research" }
            ];
        } else {
            recommendations = [
                { name: "Entrepreneurship Series (ENT)", cat: "Individual Case Roleplay Variant", url: "https://www.deca.org/compete/entrepreneurship-series" },
                { name: "Hospitality Services Team (HTDM)", cat: "Collaborative Decision Making", url: "https://www.deca.org/compete/hospitality-services-team-decision-making" },
                { name: "Business Services Marketing (BSM)", cat: "Individual Core Roleplay System", url: "https://www.deca.org/compete/business-services-marketing" }
            ];
        }
    } else {
        if (q3 >= 3) {
            recommendations = [
                { name: "Accounting I / Economics", cat: "Objective System Testing Track", url: "https://www.fbla.org/competitive-event/accounting-i" },
                { name: "Securities & Investments", cat: "Analytical Financial Testing Model", url: "https://www.fbla.org/competitive-event/securities-investments" },
                { name: "Business Plan Portfolio", cat: "Long-Term Prepared Strategic Document", url: "https://www.fbla.org/competitive-event/business-plan" }
            ];
        } else if (q4 >= 3 && q2 >= 3) {
            recommendations = [
                { name: "Impromptu Speaking", cat: "Live Professional Delivery Presentation", url: "https://www.fbla.org/competitive-event/impromptu-speaking" },
                { name: "Client Service Interactive Track", cat: "Spontaneous Simulation Case Roleplay", url: "https://www.fbla.org/competitive-event/client-service" },
                { name: "Social Media Strategies", cat: "Prepared Team Multi-Channel Proposal", url: "https://www.fbla.org/competitive-event/social-media-strategies" }
            ];
        } else {
            recommendations = [
                isUpperClassman
                    ? { name: "Business Communication Standards", cat: "Core Advanced Testing Track", url: "https://www.fbla.org/competitive-event/business-communication" }
                    : { name: "Introduction to Business Communication", cat: "Foundational Cluster Testing Vector", url: "https://www.fbla.org/competitive-event/introduction-to-business-communication" },
                { name: "Management Decision Making", cat: "Collaborative Interactive Simulation", url: "https://www.fbla.org/competitive-event/management-decision-making" },
                { name: "Digital Video Production System", cat: "Pre-Engineered Media Prepared Event", url: "https://www.fbla.org/competitive-event/digital-video-production" }
            ];
        }
    }

    // STRIKE PRINCIPLES FOR UPPERCLASSMEN RULES
    if (isUpperClassman) {
        recommendations = recommendations.map(item => {
            if (item.name.toLowerCase().includes("principles of")) {
                return { name: "Retail Merchandising Series (RMS)", cat: "Individual Core Roleplay System", url: "https://www.deca.org/compete/retail-merchandising" };
            }
            if (item.name.toLowerCase().includes("introduction to")) {
                return { name: "Business Communication Standards", cat: "Core Advanced Testing Track", url: "https://www.fbla.org/competitive-event/business-communication" };
            }
            return item;
        });
    }

    const cardsBox = document.getElementById('quiz-result-cards');
    cardsBox.innerHTML = '';

    recommendations.forEach(item => {
        cardsBox.innerHTML += `
            <div class="bg-white p-4 border border-darkBlue flex flex-col justify-between space-y-3">
                <div>
                    <span class="block text-[9px] font-black uppercase tracking-wider">${item.cat}</span>
                    <h5 class="font-black text-sm mt-0.5">${item.name}</h5>
                </div>
                <a href="${item.url}" target="_blank" class="w-full text-center bg-darkBlue text-white font-bold py-1.5 text-[10px] uppercase tracking-wider block hover:bg-white hover:text-darkBlue border border-darkBlue transition-colors">
                    View Event Description <i class="fa-solid fa-arrow-up-right-from-square ml-1 text-[8px]"></i>
                </a>
            </div>
        `;
    });

    document.getElementById('quiz-result-container').classList.remove('hidden');
    cardsBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
            day: 1,
            month: 10,
            year: 2026,
            events: [
                { title: "EagleFest", time: "4:00 PM - 6:00 PM" }
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
        addListener();
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
