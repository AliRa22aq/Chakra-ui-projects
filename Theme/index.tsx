import { extendTheme, theme as base } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        project5 : {
            black: "#262626",
            blue: "#0095F6",
            white: "#FFFFFF",
            darkWhite: "#FAFAFA",
            borderColor: "#DBDBDB",
            gray: "#8E8E8E"
        },
        brand: {
            50: '#f5fee5',
            100: '#e1fbb2',
            200: '#cdf781',
            300: '#b8ee56',
            400: '#a2e032',
            500: '#8ac919',
            600: '#71ab09',
            700: '#578602',
            800: '#3c5e00',
            900: '#203300',
        },
        base: {
            d100: "#3479c3",
        },
        project4 : {
            dark: "#000C24",
            light: "#FBFBFB",
            red: "#F44336",
            gray: "#928A97"
        }

    },
    fonts: {
        heading: `Montserrat, ${base.fonts.heading}`,
        body: `Inter, ${base.fonts.body}`,
        

    }
});

