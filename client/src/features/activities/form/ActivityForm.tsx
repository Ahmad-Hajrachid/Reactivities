import {Box, Button, Paper, Typography} from "@mui/material"
import { useActivities } from "../../../lib/hooks/useActivities";
import { useParams } from "react-router";
import {useForm} from 'react-hook-form';
import { useEffect } from "react";
import {zodResolver} from "@hookform/resolvers/zod"
import { activitySchema, type ActivitySchema } from "../../../lib/schemas/activitySchema";
import TextInput from "../../../app/shared/components/TextInput";
import SelectInput from "../../../app/shared/components/SelectInput";
import { categoryOptions } from "./CategoryOptions";
import DateTimeInput from "../../../app/shared/components/DateTimeInput";
import { addYears, subYears } from "date-fns";
import LocationInput from "../../../app/shared/components/LocationInput";

const ActivityForm = () => {
    const {reset, control, handleSubmit} = useForm<ActivitySchema>({
        mode:'onTouched',
        resolver: zodResolver(activitySchema)
    })
    const {id} = useParams();
    const {updateActivity, createActivity, activity, isLoadingActivity} = useActivities(id);

    useEffect(()=> {
        if(activity) reset(activity)
    },[activity, reset])

    const onSubmit = (data: ActivitySchema) =>{
        console.log(data)
    }
  
    if(isLoadingActivity) return <Typography variant="h5">Loading activity...</Typography>
  return (
    <Paper sx={{borderRadius: 3, padding:3}}>
        <Typography variant = "h5" gutterBottom color="primary">
            {activity ? 'Edit' : 'Create'} activity
        </Typography>
        <Box component="form" onSubmit = {handleSubmit(onSubmit)} sx={{display: "flex", flexDirection:"column", gap: 3}}>
            <TextInput 
                label="Title"
                control={control}
                name="title"
            />
            <TextInput 
                label="Description"
                control={control}
                name="description"
                multiline 
                rows={3}
            />
            <SelectInput
                items={[{text:"Clear", value:""},...categoryOptions]} 
                label="Category"
                control={control}
                name="category"
            />
            <DateTimeInput 
                label="Date"
                control={control}
                name="date"
                disablePast={true}
                disableFuture={false}
                maxDate={addYears(new Date(),1)}
                minDate={subYears(new Date(),1)}
            />
            <LocationInput control={control}
            label="Enter the location"
            name="location"/>
           
            <Box sx={{display:"flex", justifyContent: "end", gap: 2}}>
                <Button 
                type ="submit" 
                color='success' 
                variant="contained"
                loading={updateActivity.isPending || createActivity.isPending}
                >Submit</Button>
            </Box>
        </Box>
    </Paper>
  )
}

export default ActivityForm;