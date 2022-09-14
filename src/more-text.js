import React from "react"
import {Typography} from "@mui/material";

export const MoreHistory = () => {
    return (
        <>
            <br/>
            <Typography gutterBottom variant="h5" component="h2">
                Spoken Languages
            </Typography>
            <ul>
                <li>
                    Bulgarian - native
                </li>
                <li>
                    English - C1
                </li>
                <li>
                    Italian - B2
                </li>
                <li>
                    Russian - B1
                </li>
                <li>
                    Greek - B1
                </li>
            </ul>
        </>
    )
}
export const MoreSkills = () => {
    return (
        <>
            <br/>
            <Typography gutterBottom variant="h5" component="h2">
                Soft Skills
            </Typography>
            Empathy, Communication, Teamwork, Approachability and Helpfulness, Patience, Problem solving, Accountability.
        </>
    )
}
export const MoreSummary = () => {
    return (
        <>
            And yet, most skills can be learned and improved, but the ability to solve problems and learn plus a mindset of interpersonal communication help me to contribute to nurturing a collaborative and roundtable environment where people feel empowered, valued and effective members of a team.
        </>
    )
}
