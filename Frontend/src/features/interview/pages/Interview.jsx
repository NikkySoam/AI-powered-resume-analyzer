import React, { useState } from 'react'
import '../style/interview.scss'

const NAV_ITEMS = [
    { id: 'technical', label: 'Technical Questions' },
    { id: 'behavioral', label: 'Behavioral Questions' },
    { id: 'roadmap', label: 'Road Map' },
]

// Dummy UI Data
const dummyReport = {
    matchScore: 75,
    technicalQuestions: [
        { question: "What is React?", intention: "Check basics", answer: "React is a JS library." },
        { question: "What is Redux?", intention: "State management", answer: "Redux manages global state." }
    ],
    behavioralQuestions: [
        { question: "Tell me about yourself", intention: "Communication", answer: "Give brief intro." }
    ],
    preparationPlan: [
        { day: 1, focus: "DSA", tasks: ["Arrays", "Sorting"] },
        { day: 2, focus: "React", tasks: ["Hooks", "Routing"] }
    ],
    skillGaps: [
        { skill: "System Design", severity: "high" },
        { skill: "Testing", severity: "mid" }
    ]
}

// Sub Components
const QuestionCard = ({ item, index }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='q-card'>
            <div className='__header' onClick={() => setOpen(!open)}>
                <span>Q{index + 1}</span>
                <p>{item.question}</p>
            </div>

            {open && (
                <div className='q-card__body'>
                    <p><b>Intention:</b> {item.intention}</p>
                    <p><b>Answer:</b> {item.answer}</p>
                </div>
            )}
        </div>
    )
}

const RoadMapDay = ({ day }) => (
    <div className='roadmap-day'>
        <h3>Day {day.day} - {day.focus}</h3>
        <ul>
            {day.tasks.map((task, i) => (
                <li key={i}>{task}</li>
            ))}
        </ul>
    </div>
)

// Main UI Component
const Interview = () => {
    const [activeNav, setActiveNav] = useState('technical')
    const report = dummyReport

    return (
        <div className='interview-page'>
            <div className='interview-layout'>

                {/* Left Nav */}
                <nav className='interview-nav'>
                    {NAV_ITEMS.map(item => (
                        <button
                            key={item.id}
                            className={activeNav === item.id ? 'active' : ''}
                            onClick={() => setActiveNav(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}

                    <button className='button'>Download Resume</button>
                </nav>

                {/* Center */}
                <main className='interview-content'>

                    {activeNav === 'technical' && (
                        <section>
                            <h2>Technical Questions</h2>
                            {report.technicalQuestions.map((q, i) => (
                                <QuestionCard key={i} item={q} index={i} />
                            ))}
                        </section>
                    )}

                    {activeNav === 'behavioral' && (
                        <section>
                            <h2>Behavioral Questions</h2>
                            {report.behavioralQuestions.map((q, i) => (
                                <QuestionCard key={i} item={q} index={i} />
                            ))}
                        </section>
                    )}

                    {activeNav === 'roadmap' && (
                        <section>
                            <h2>Roadmap</h2>
                            {report.preparationPlan.map((day) => (
                                <RoadMapDay key={day.day} day={day} />
                            ))}
                        </section>
                    )}

                </main>

                {/* Right Sidebar */}
                <aside className='interview-sidebar'>
                    <div>
                        <h3>Match Score</h3>
                        <p>{report.matchScore}%</p>
                    </div>

                    <div>
                        <h3>Skill Gaps</h3>
                        {report.skillGaps.map((gap, i) => (
                            <span key={i}>{gap.skill}</span>
                        ))}
                    </div>
                </aside>

            </div>
        </div>
    )
}

export default Interview