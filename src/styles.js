import {makeStyles} from "@mui/styles"

export const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "justify",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(0.5)
        }
    },
    icon: {
        marginRight: theme.spacing(2)
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 0, 4)
    },
    heroButtons: {
        marginTop: theme.spacing(4)
    },
    cardGrid: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6)
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        paddingTop: "56.25%" // 16:9
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6)
    },
    avatar: {
        margin: 10
    },
    bigAvatar: {
        margin: 10,
        width: 70,
        height: 70
    }
}))
