import React from 'react'

export const icons = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
            <g id="surface50816036">
                <path style={{
                    stroke: "none",
                    fillRule: "nonzero",
                    fill: "rgb(80.000001%,80.000001%,80.000001%)",
                    fillOpacity: "1",
                }}
                    d="M 20.5 6 C 12.507812 6 6 12.507812 6 20.5 C 6 28.492188 12.507812 35 20.5 35 C 23.957031 35 27.132812 33.777344 29.628906 31.75 L 39.4375 41.558594 C 39.816406 41.953125 40.375 42.109375 40.898438 41.972656 C 41.425781 41.835938 41.835938 41.425781 41.972656 40.898438 C 42.109375 40.375 41.953125 39.816406 41.558594 39.4375 L 31.75 29.628906 C 33.777344 27.132812 35 23.957031 35 20.5 C 35 12.507812 28.492188 6 20.5 6 Z M 20.5 9 C 26.867188 9 32 14.132812 32 20.5 C 32 23.601562 30.777344 26.40625 28.789062 28.472656 C 28.667969 28.5625 28.5625 28.667969 28.46875 28.792969 C 26.40625 30.777344 23.601562 32 20.5 32 C 14.132812 32 9 26.867188 9 20.5 C 9 14.132812 14.132812 9 20.5 9 Z M 20.5 9" />
            </g>
        </svg>
    )
}


export const HomeIcon = () => (
    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z" /></svg>
)

export const MessangerIcon = () => (
    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M 12 2 C 6.486 2 2 6.262 2 11.5 C 2 14.045 3.088 16.487484 5 18.271484 L 5 22.617188 L 9.0800781 20.578125 C 10.039078 20.857125 11.02 21 12 21 C 17.514 21 22 16.738 22 11.5 C 22 6.262 17.514 2 12 2 z M 12 4 C 16.411 4 20 7.365 20 11.5 C 20 15.635 16.411 19 12 19 C 11.211 19 10.415672 18.884203 9.6386719 18.658203 L 8.8867188 18.439453 L 8.1855469 18.789062 L 7 19.382812 L 7 18.271484 L 7 17.402344 L 6.3632812 16.810547 C 4.8612813 15.408547 4 13.472 4 11.5 C 4 7.365 7.589 4 12 4 z M 11 9 L 6 14 L 10.5 12 L 13 14 L 18 9 L 13.5 11 L 11 9 z" /></svg>
)

export const ProfileIcon = () => (
    <svg
        version="1.1"
        width="600"
        height="600"
        fill="white">

        <defs>
            <clipPath id="circular-border">
                <circle cx="300" cy="300" r="280" />
            </clipPath>
            <clipPath id="avoid-antialiasing-bugs">
                <rect width="100%" height="498" />
            </clipPath>
        </defs>

        <circle cx="300" cy="300" r="280" fill="#E8E8E8" clip-path="url(#avoid-antialiasing-bugs)" />
        <circle cx="300" cy="230" r="115" />
        <circle cx="300" cy="550" r="205" clip-path="url(#circular-border)" />
    </svg>
)
// export const SearchIcon
