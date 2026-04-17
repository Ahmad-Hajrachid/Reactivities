import { useEffect, useState } from "react";
import { Typography, List, ListItemText } from "@mui/material";
import axios from "axios";
function App() {
  const [activities, setActivities] = useState([]);

  useEffect(()=>{
      axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data))
  },[])
  return (
    <>
      <Typography variant ="h3">Reactivities</Typography>
      <List>
        {activities.map((activity) => (
          <ListItemText  key={activity.id}>{activity.title}</ListItemText>
        ))}
      </List>
      </>
  )
}

export default App
