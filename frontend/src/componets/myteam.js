import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContex";
import axios from "axios";

const Team = () => {
  const { currentUser } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState([]);
  const [teamHeading, setTeamHeading] = useState("");
  const [teamToFetchWith, setTeamToFetchWith] = useState("");
  const [isManager, setIsManager] = useState(false);

  const getTeam = async (teamToFetchWith) => {
    try {
      const response = await axios.post("/api/getmanagerteam", {
        team: teamToFetchWith,
      });

      if (response.data) {
        setTeam(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      if (currentUser.user.role === "Manager") {
        setIsManager(true);
        if (currentUser.user.firstName === "Temayo") {
          setTeamToFetchWith("Team Pacific: Manager: Temayo James");
        } else if (currentUser.user.firstName === "Mike") {
          setTeamToFetchWith("Team Yes: Manager: Mike Seblen");
        } else if (currentUser.user.firstName === "Dennis") {
          setTeamToFetchWith("Team Dollar: Manager: Dennis Rio");
        }
      } else {
        setTeamToFetchWith(currentUser.user.team);
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if (teamToFetchWith) {
      getTeam(teamToFetchWith).then(() => {
        const firstColonIndex = teamToFetchWith.indexOf(":");
        const teamHeadingWithVerticalLines = `${teamToFetchWith.slice(0, firstColonIndex)} ||| ${teamToFetchWith.slice(firstColonIndex + 1)} ||| ${team.length} Members`;
        setTeamHeading(teamHeadingWithVerticalLines);
      });
    }
  }, [teamToFetchWith, team]);
  
  
  

  useEffect(() => {
    
    localStorage.setItem("teamHeading", teamHeading);
  }, [teamHeading]);

  useEffect(() => {
    setLoading(false);
  }, [team]);

  if (loading) {
    return <div>Loading team...</div>;
  }

  return (
    <div id="team-grid">
      {team &&
        team.map((member) => (
          <div key={member._id} className="team-boxes">

            <h5>
              {member.firstName} {member.lastName}
            </h5>
            {isManager && <img src="editemployee.png" alt="" />}
          </div>
        ))}
      <br />
      <br />
    </div>
  );
};

export default Team;
