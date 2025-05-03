const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      <h4>{activity.name}</h4>
      <p>{activity.description}</p>
      <p><strong>Date:</strong> {activity.date}</p>
      <p><strong>Location:</strong> {activity.location}</p>

      {/* Participants Section */}
      {activity.participants && activity.participants.length > 0 && (
        <div className="participants">
          <h5>Participants:</h5>
          <ul>
            {activity.participants.map((participant, index) => (
              <li key={index}>{participant}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ActivityCard;