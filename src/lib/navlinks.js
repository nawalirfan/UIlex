import {
    Inbox,
    Mail,
    Settings,
    Home,
    Phone,
    Cloud,
    Info,
    Star,
} from "lucide-react";

export const navlinks = [
    {
        title: "Buttons",
        icon: Inbox,
        subItems: [
            { title: "Loading Button", url: "/buttons/loading-button" },
            { title: "Gradient Button", url: "/buttons/gradient-button" },
            {
                title: "Quad Layer Fill Hover Button",
                url: "/buttons/quad-layer-fill-hover-button",
            },
            { title: "Button 3", url: "#" },
        ],
    },
    {
        title: "Text",
        icon: Mail,
        subItems: [
            { title: "Text 1", url: "#" },
            { title: "Text 2", url: "#" },
            { title: "Text 3", url: "#" },
        ],
    },
    {
        title: "Dialog Box",
        icon: Settings,
        subItems: [
            { title: "Dialog Box 1", url: "#" },
            { title: "Dialog Box 2", url: "#" },
            { title: "Dialog Box 3", url: "#" },
        ],
    },
    {
        title: "Forms",
        icon: Home,
        subItems: [
            { title: "Form 1", url: "#" },
            { title: "Form 2", url: "#" },
            { title: "Form 3", url: "#" },
        ],
    },
    {
        title: "Cards",
        icon: Phone,
        subItems: [
            { title: "Card 1", url: "#" },
            { title: "Card 2", url: "#" },
            { title: "Card 3", url: "#" },
        ],
    },
    {
        title: "Tables",
        icon: Info,
        subItems: [
            { title: "Table 1", url: "#" },
            { title: "Table 2", url: "#" },
            { title: "Table 3", url: "#" },
        ],
    },
    {
        title: "Rating",
        icon: Star,
        subItems: [
            { title: "Rating Input Component", url: "/ratings/rating-input" },
            { title: "Rating Score Component", url: "/ratings/rating-score" },
        ],
    },
];
