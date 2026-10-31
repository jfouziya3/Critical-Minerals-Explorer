
const minerals = [
    {
        name: "Lithium",
        icon: "🔋",
        category: "Battery",
        description: "A lightweight metal widely used in rechargeable batteries.",
        properties: "Lightweight, highly reactive and has good electrochemical properties.",
        uses: ["Electric vehicle batteries", "Mobile phone batteries", "Energy storage systems"],
        importance: "Lithium-ion batteries help store electrical energy for portable devices and electric mobility.",
        applications: ["EV", "Battery"]
    },
    {
        name: "Nickel",
        icon: "⚙️",
        category: "Battery",
        description: "A metal used in several battery chemistries and industrial applications.",
        properties: "Strong, corrosion-resistant and useful in battery cathode materials.",
        uses: ["EV battery cathodes", "Stainless steel", "Industrial alloys"],
        importance: "Nickel is used in certain lithium-ion battery chemistries to improve energy density.",
        applications: ["EV", "Battery"]
    },
    {
        name: "Cobalt",
        icon: "💎",
        category: "Battery",
        description: "A transition metal used in some rechargeable battery cathodes.",
        properties: "Hard, magnetic and has useful electrochemical properties.",
        uses: ["Rechargeable batteries", "Special alloys", "Industrial applications"],
        importance: "Cobalt helps provide stability and performance in several lithium-ion battery cathodes.",
        applications: ["EV", "Battery"]
    },
    {
        name: "Graphite",
        icon: "✏️",
        category: "Battery",
        description: "A form of carbon commonly used as an anode material in lithium-ion batteries.",
        properties: "Conductive, layered structure and good ability to host lithium ions.",
        uses: ["Battery anodes", "Electrodes", "Industrial materials"],
        importance: "Graphite is an important anode material in many commercial lithium-ion batteries.",
        applications: ["EV", "Battery"]
    },
    {
        name: "Copper",
        icon: "🔶",
        category: "Energy",
        description: "A highly conductive metal used throughout electrical systems.",
        properties: "Excellent electrical conductivity, ductility and corrosion resistance.",
        uses: ["Electrical wiring", "Solar installations", "Wind turbine generators", "EV motors"],
        importance: "Copper carries electricity in renewable-energy systems, motors and power networks.",
        applications: ["EV", "Solar", "Wind"]
    },
    {
        name: "Rare Earth Elements",
        icon: "🌐",
        category: "Technology",
        description: "A group of elements used in specialised magnets and advanced technologies.",
        properties: "Some elements have useful magnetic and optical properties.",
        uses: ["Permanent magnets", "Wind turbine generators", "Electronic devices"],
        importance: "Neodymium and other rare earth elements are used in certain high-performance permanent magnets.",
        applications: ["Wind", "Technology"]
    }
];

const energyInfo = {
    EV: {
        title: "🚗 Electric Vehicles",
        description: "Electric vehicles use rechargeable battery packs and electric motors.",
        minerals: ["Lithium", "Nickel", "Cobalt", "Graphite", "Copper"],
        facts: [
            "Lithium is used in many rechargeable battery chemistries.",
            "Nickel and cobalt are used in some battery cathodes.",
            "Graphite is commonly used in battery anodes.",
            "Copper is used in motors and electrical wiring."
        ]
    },
    Solar: {
        title: "☀️ Solar Energy",
        description: "Solar panels convert sunlight into electrical energy.",
        minerals: ["Copper"],
        facts: [
            "Copper is used in solar system wiring and electrical connections.",
            "Solar photovoltaic technologies also depend on materials such as silicon.",
            "Different solar panel technologies use different material combinations."
        ]
    },
    Wind: {
        title: "🌬️ Wind Energy",
        description: "Wind turbines convert the movement of air into electricity.",
        minerals: ["Copper", "Rare Earth Elements"],
        facts: [
            "Copper is used in generators and electrical cables.",
            "Some wind turbines use permanent magnets made with rare earth elements.",
            "Not every wind turbine uses the same generator design."
        ]
    },
    Battery: {
        title: "🔋 Energy Storage",
        description: "Battery systems store electricity for later use.",
        minerals: ["Lithium", "Nickel", "Cobalt", "Graphite"],
        facts: [
            "Lithium is used in many rechargeable battery chemistries.",
            "Graphite is a common anode material.",
            "Nickel and cobalt are used in certain cathode chemistries.",
            "Battery chemistry varies depending on the application."
        ]
    }
};

const questions = [
    {
        q: "Which mineral is widely used in rechargeable lithium-ion batteries?",
        options: ["Copper", "Lithium", "Gold", "Iron"],
        answer: 1,
        explanation: "Lithium is a key component of many rechargeable lithium-ion battery chemistries."
    },
    {
        q: "Which material is commonly used as the anode in lithium-ion batteries?",
        options: ["Graphite", "Copper", "Silver", "Aluminium"],
        answer: 0,
        explanation: "Graphite is widely used as the anode material in commercial lithium-ion batteries."
    },
    {
        q: "Which metal is known for excellent electrical conductivity?",
        options: ["Cobalt", "Nickel", "Copper", "Lithium"],
        answer: 2,
        explanation: "Copper is widely used for electrical wiring because of its high conductivity."
    },
    {
        q: "Which elements are used in some high-performance permanent magnets?",
        options: ["Rare Earth Elements", "Lithium", "Graphite", "Coal"],
        answer: 0,
        explanation: "Elements such as neodymium are used in certain strong permanent magnets."
    },
    {
        q: "Which technology converts sunlight into electricity?",
        options: ["Wind turbine", "Solar panel", "Diesel engine", "Hydroelectric dam"],
        answer: 1,
        explanation: "Solar photovoltaic panels convert sunlight into electrical energy."
    },
    {
        q: "Which mineral is used in some lithium-ion battery cathodes?",
        options: ["Nickel", "Sand", "Limestone", "Coal"],
        answer: 0,
        explanation: "Nickel is used in several lithium-ion battery cathode chemistries."
    },
    {
        q: "What is the main purpose of an energy storage battery?",
        options: [
            "To produce wind",
            "To store electrical energy",
            "To absorb sunlight only",
            "To generate petrol"
        ],
        answer: 1,
        explanation: "Batteries store electrical energy and release it when required."
    },
    {
        q: "Which mineral is a form of carbon?",
        options: ["Nickel", "Lithium", "Graphite", "Cobalt"],
        answer: 2,
        explanation: "Graphite is a naturally occurring crystalline form of carbon."
    },
    {
        q: "Which renewable technology uses wind turbines?",
        options: ["Solar energy", "Wind energy", "Geothermal energy", "Biomass"],
        answer: 1,
        explanation: "Wind turbines convert wind energy into electrical energy."
    },
    {
        q: "Why is copper important in clean-energy systems?",
        options: [
            "It stores sunlight",
            "It has high electrical conductivity",
            "It creates wind",
            "It produces lithium"
        ],
        answer: 1,
        explanation: "Copper efficiently carries electricity in cables, motors and generators."
    },
    {
        q: "Which mineral is used in some electric vehicle battery cathodes?",
        options: ["Cobalt", "Quartz", "Limestone", "Clay"],
        answer: 0,
        explanation: "Cobalt is used in certain lithium-ion battery cathode materials."
    },
    {
        q: "Which of these is a critical mineral used in battery anodes?",
        options: ["Graphite", "Gold", "Marble", "Salt"],
        answer: 0,
        explanation: "Graphite is commonly used in the anode of lithium-ion batteries."
    },
    {
        q: "What does EV stand for?",
        options: [
            "Energy Value",
            "Electric Vehicle",
            "Electronic Voltage",
            "Energy Variation"
        ],
        answer: 1,
        explanation: "EV stands for Electric Vehicle."
    },
    {
        q: "Which mineral is important in electrical wiring for renewable energy systems?",
        options: ["Copper", "Cobalt", "Lithium", "Graphite"],
        answer: 0,
        explanation: "Copper is widely used in electrical wiring and connections."
    },
    {
        q: "Why are critical minerals important for clean energy?",
        options: [
            "They replace all electricity",
            "They are materials used in many clean-energy technologies",
            "They create sunlight",
            "They stop all pollution"
        ],
        answer: 1,
        explanation: "Critical minerals are important raw materials for batteries, electrical systems and other clean-energy technologies."
    },
    {
        q: "Which of these is a group of elements rather than a single mineral?",
        options: ["Lithium", "Copper", "Rare Earth Elements", "Graphite"],
        answer: 2,
        explanation: "Rare earth elements refer to a group of 17 chemical elements."
    },
    {
        q: "Which metal is used in stainless steel and some battery materials?",
        options: ["Nickel", "Lithium", "Graphite", "Silicon"],
        answer: 0,
        explanation: "Nickel is used in stainless steel and certain battery cathode chemistries."
    },
    {
        q: "Which part of a lithium-ion battery commonly uses graphite?",
        options: ["Anode", "Outer case only", "Display", "Charging cable"],
        answer: 0,
        explanation: "Graphite is widely used as the anode active material."
    },
    {
        q: "What is one use of rare earth permanent magnets?",
        options: [
            "Certain wind turbine generators",
            "Producing petrol",
            "Making sunlight",
            "Storing rainwater"
        ],
        answer: 0,
        explanation: "Some wind turbine generators use permanent magnets containing rare earth elements."
    },
    {
        q: "Which statement about battery materials is correct?",
        options: [
            "Every battery has exactly the same chemistry",
            "Battery chemistry can vary by design and application",
            "All batteries use only cobalt",
            "Graphite is used in every type of battery"
        ],
        answer: 1,
        explanation: "Battery materials vary depending on the battery chemistry and intended application."
    }
];

// Mineral display and search

const mineralGrid = document.getElementById("mineralGrid");
const searchInput = document.getElementById("searchInput");
let activeFilter = "All";
let explored = new Set();

function displayMinerals() {
    const search = searchInput.value.toLowerCase();

    const filtered = minerals.filter(m => {
        const matchesSearch =
            m.name.toLowerCase().includes(search) ||
            m.description.toLowerCase().includes(search);

        const matchesCategory =
            activeFilter === "All" ||
            m.category === activeFilter;

        return matchesSearch && matchesCategory;
    });

    mineralGrid.innerHTML = "";

    if (!filtered.length) {
        mineralGrid.innerHTML = "<p>No minerals found. Try another search.</p>";
        return;
    }

    filtered.forEach(m => {
        const card = document.createElement("div");
        card.className = "mineral-card";

        card.innerHTML = `
            <div class="mineral-icon">${m.icon}</div>
            <span class="card-tag">${m.category}</span>
            <h3>${m.name}</h3>
            <p>${m.description}</p>
            <button class="small-btn">Explore Details →</button>
        `;

        card.querySelector("button").addEventListener("click", () => {
            showMineralDetails(m.name);
        });

        mineralGrid.appendChild(card);
    });
}

searchInput.addEventListener("input", displayMinerals);

document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn")
            .forEach(b => b.classList.remove("active"));

        btn.classList.add("active");
        activeFilter = btn.dataset.filter;
        displayMinerals();
    });
});

// Mineral details popup

const modal = document.getElementById("mineralModal");
const modalBody = document.getElementById("modalBody");

function showMineralDetails(name) {
    const m = minerals.find(item => item.name === name);
    if (!m) return;

    explored.add(name);
    updateProgress();

    modalBody.innerHTML = `
        <div style="font-size:45px">${m.icon}</div>
        <h2>${m.name}</h2>
        <p><strong>Category:</strong> ${m.category}</p>
        <p><strong>Description:</strong> ${m.description}</p>
        <p><strong>Properties:</strong> ${m.properties}</p>
        <h3>Major Uses</h3>
        <ul>${m.uses.map(x => `<li>${x}</li>`).join("")}</ul>
        <h3>Importance in Clean Energy</h3>
        <p>${m.importance}</p>
    `;

    modal.hidden = false;
}

document.getElementById("closeModal").addEventListener("click", () => {
    modal.hidden = true;
});

modal.addEventListener("click", e => {
    if (e.target === modal) modal.hidden = true;
});

// Clean energy explorer

document.querySelectorAll(".energy-card").forEach(card => {
    card.addEventListener("click", () => {
        const info = energyInfo[card.dataset.energy];
        const panel = document.getElementById("energyDetails");

        panel.innerHTML = `
            <h3>${info.title}</h3>
            <p>${info.description}</p>
            <h4>Related Minerals</h4>
            <p>${info.minerals.join(" • ")}</p>
            <h4>How are they used?</h4>
            <ul>${info.facts.map(f => `<li>${f}</li>`).join("")}</ul>
        `;

        panel.hidden = false;
        panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
});

// Mineral comparison

const mineralOne = document.getElementById("mineralOne");
const mineralTwo = document.getElementById("mineralTwo");

minerals.forEach(m => {
    mineralOne.add(new Option(m.name, m.name));
    mineralTwo.add(new Option(m.name, m.name));
});

mineralTwo.selectedIndex = 1;

document.getElementById("compareBtn").addEventListener("click", () => {
    const first = minerals.find(m => m.name === mineralOne.value);
    const second = minerals.find(m => m.name === mineralTwo.value);
    const result = document.getElementById("comparisonResult");

    if (first.name === second.name) {
        result.innerHTML = "<p>Please select two different minerals.</p>";
        return;
    }

    result.innerHTML = `
        <div class="comparison-grid">
            ${[first, second].map(m => `
                <div class="comparison-card">
                    <h3>${m.icon} ${m.name}</h3>
                    <p><strong>Category:</strong> ${m.category}</p>
                    <p><strong>Properties:</strong> ${m.properties}</p>
                    <p><strong>Uses:</strong> ${m.uses.join(", ")}</p>
                    <p><strong>Importance:</strong> ${m.importance}</p>
                </div>
            `).join("")}
        </div>
    `;
});

// Quiz

const QUESTIONS_PER_ROUND = 10;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let review = [];

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

function startQuiz() {
    // Shuffle all questions and select a new set for every round
    const shuffled = [...questions].sort(() => Math.random() - 0.5);

    currentQuestions = shuffled.slice(0, QUESTIONS_PER_ROUND);
    currentIndex = 0;
    score = 0;
    answered = false;
    review = [];

    document.getElementById("quizBox").hidden = false;
    document.getElementById("quizResult").hidden = true;

    showQuestion();
}

function showQuestion() {
    answered = false;
    const q = currentQuestions[currentIndex];

    document.getElementById("questionNumber").textContent =
        `Question ${currentIndex + 1} / ${QUESTIONS_PER_ROUND}`;

    document.getElementById("liveScore").textContent =
        `Score: ${score}`;

    document.getElementById("quizProgress").style.width =
        `${(currentIndex / QUESTIONS_PER_ROUND) * 100}%`;

    questionText.textContent = q.q;
    feedback.textContent = "";
    optionsContainer.innerHTML = "";

    nextBtn.disabled = true;
    nextBtn.textContent =
        currentIndex === QUESTIONS_PER_ROUND - 1
        ? "Finish Quiz ✓"
        : "Next Question →";

    // Shuffle the options without changing the correct answer
    const shuffledOptions = q.options
        .map((option, originalIndex) => ({
            option,
            isCorrect: originalIndex === q.answer
        }))
        .sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(item => {
        const button = document.createElement("button");
        button.className = "option-btn";
        button.textContent = item.option;

        button.addEventListener("click", () => {
            selectAnswer(button, item.isCorrect, q, shuffledOptions);
        });

        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedButton, isCorrect, q, shuffledOptions) {
    if (answered) return;

    answered = true;

    const buttons = [...optionsContainer.children];

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (shuffledOptions[index].isCorrect) {
            button.classList.add("correct");
        }
    });

    if (isCorrect) {
        score++;
        feedback.textContent = "✅ Correct answer! " + q.explanation;
        feedback.style.color = "#168344";
    } else {
        selectedButton.classList.add("wrong");
        feedback.textContent =
            "❌ Incorrect answer. Correct answer: " +
            q.options[q.answer] + ". " + q.explanation;
        feedback.style.color = "#c0392b";
    }

    review.push({
        question: q.q,
        correct: q.options[q.answer],
        selected: selectedButton.textContent,
        isCorrect
    });

    document.getElementById("liveScore").textContent =
        `Score: ${score}`;

    nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
    if (!answered) return;

    if (currentIndex < QUESTIONS_PER_ROUND - 1) {
        currentIndex++;
        showQuestion();
    } else {
        finishQuiz();
    }
});

function finishQuiz() {
    document.getElementById("quizBox").hidden = true;

    const result = document.getElementById("quizResult");
    result.hidden = false;

    const percentage = score / QUESTIONS_PER_ROUND * 100;

    document.getElementById("finalScore").textContent =
        `${score} / ${QUESTIONS_PER_ROUND}`;

    let message;

    if (percentage >= 80) {
        message = "Excellent! You have a strong understanding of critical minerals.";
    } else if (percentage >= 60) {
        message = "Good job! Keep learning to improve your knowledge.";
    } else {
        message = "Keep practising! Explore the mineral library and try again.";
    }

    document.getElementById("resultMessage").textContent = message;

    document.getElementById("answerReview").innerHTML =
        review.map((r, index) => `
            <div class="review-item">
                <strong>${index + 1}. ${r.question}</strong><br>
                Your answer: ${r.selected}<br>
                Correct answer: ${r.correct}<br>
                ${r.isCorrect ? "✅ Correct" : "❌ Incorrect"}
            </div>
        `).join("");

    let attempts = Number(localStorage.getItem("quizAttempts") || 0);
    let best = Number(localStorage.getItem("bestScore") || 0);

    attempts++;
    best = Math.max(best, score);

    localStorage.setItem("quizAttempts", attempts);
    localStorage.setItem("bestScore", best);

    updateProgress();
    result.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("restartBtn").addEventListener("click", () => {
    startQuiz();
    document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
});

// Learning progress

function updateProgress() {
    document.getElementById("exploredCount").textContent =
        `${explored.size} / ${minerals.length}`;

    const best = localStorage.getItem("bestScore");
    const attempts = localStorage.getItem("quizAttempts") || 0;

    document.getElementById("bestScore").textContent =
        best === null ? "Not attempted" : `${best} / 10`;

    document.getElementById("quizAttempts").textContent = attempts;
}

// Initial setup

displayMinerals();
updateProgress();
startQuiz();
