import './App.css';

const learners = [
  {
    name: 'Maya Chen',
    role: 'Frontend learner',
    topic: 'Reusable components',
    project: 'Recipe finder',
    available: true,
  },
  {
    name: 'Leo Patel',
    role: 'UI developer',
    topic: 'State and events',
    project: 'Reading tracker',
    available: false,
  },
  {
    name: 'Sam Rivera',
    role: 'React beginner',
    topic: 'Component props',
    project: 'Plant journal',
    available: true,
  },
];

function LearnerCard(props) {
  return (
    <article className="learner-card">
      <div className="card-heading">
        <div className="avatar" aria-hidden="true">
          {props.name.charAt(0)}
        </div>
        <div>
          <h2>{props.name}</h2>
          <p className="role">{props.role}</p>
        </div>
      </div>
      <dl className="details">
        <div>
          <dt>Practicing</dt>
          <dd>{props.topic}</dd>
        </div>
        <div>
          <dt>Building</dt>
          <dd>{props.project}</dd>
        </div>
      </dl>
      <p className={props.available ? 'availability available' : 'availability'}>
        <span className="status-dot" aria-hidden="true" />
        {props.available ? 'Open to pair' : 'Focusing today'}
      </p>
    </article>
  );
}

function App() {
  return (
    <main className="app-shell">
      <header className="page-header">
        <p className="eyebrow">REACT WORKSHOP / 01</p>
        <h1>Props, in practice.</h1>
        <p className="intro">
          One component, different data. Each card receives its own props from
          the list below.
        </p>
      </header>

      <section aria-labelledby="learners-heading">
        <div className="section-heading">
          <h2 id="learners-heading">The learning group</h2>
          <span>{learners.length} learners</span>
        </div>
        <div className="learner-grid">
          {learners.map((learner) => (
            <LearnerCard
              key={learner.name}
              name={learner.name}
              role={learner.role}
              topic={learner.topic}
              project={learner.project}
              available={learner.available}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
