import './style.css';
export default function HighlightSkills(props) {
    const { skills } = props;
    return (
        <div className="d-flex flex-wrap mb-4">
            {skills.map((skill, index) => (
                <div key={index} className="me-2 mb-2 px-2 skills-box">
                    {skill}
                </div>
            ))}
        </div>
    );
}