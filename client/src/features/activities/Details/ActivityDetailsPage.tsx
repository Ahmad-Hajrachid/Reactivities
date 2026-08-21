import { CircularProgress, Grid, Typography } from "@mui/material"
import { useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";
import ActivityDetailsHeader from "./ActivityDetailsHeader";
import ActivityDetailsInfo from "./ActivityDetailsInfo";
import ActivityDetailsChat from "./ActivityDetailsChat";
import ActivityDetailsSidebar from "./ActivityDetailsSidebar";


export const ActivityDetailsPage = () => {
    const {id} = useParams();
    const {activity, isLoadingActivity} = useActivities(id);

    if(isLoadingActivity) return <CircularProgress aria-label="Loading…" />
    if(!activity) return <Typography variant="h5">Activity not found</Typography>
    
  return (
    <Grid container spacing={3}>
        <Grid size={8}>
            <ActivityDetailsHeader activity={activity}/>
            <ActivityDetailsInfo activity={activity}/>
            <ActivityDetailsChat />
        </Grid>
        <Grid size={4}>
            <ActivityDetailsSidebar />
        </Grid>
    </Grid>
  )
}