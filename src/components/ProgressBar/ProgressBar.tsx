import React from 'react';

export const ProgressBar = React.memo(function () {
    return (
        <>
            <svg width="1342" viewBox="0 0 1342 1797" fill="none"
                 xmlns="http://www.w3.org/2000/svg" className='progressBar'>
                <g filter="url(#filter0_b)">
                    <path width="1334" height="1789" fill="url(#paint0_radial)"
                          d="
                           M 46,4
                           L 1298,4
                           A 40,40,0,0,1,1338,44
                           L 1338,1753
                           A 40,40,0,0,1,1298,1793
                           L 44,1793
                           A 40,40,0,0,1,4,1753
                           L 4,44 A 40,40,0,0,1,44,4
                    "
                          className="giAdMamB_0"/>
                    <path width="1337.5" height="1792.5" stroke="url(#paint1_linear)" strokeWidth="3.5"
                          d="
                           M 2.25,1794.75
                           L 2.25,43.25
                           A 41,41,0,0,1,43.25,2.25
                           L 1298.75,2.25
                           A 41,41,0,0,1,1339.75,43.25
                           L 1339.75,1753.75
                           A 41,41,0,0,1,1298.75,1794.75
                           L 43.25,1794.75
                           A 41,41,0,0,1,2.25,1753.75
                           "
                          className="giAdMamB_1"/>
                </g>
                <defs>
                    <filter id="filter0_b" x="-41.5" y="-41.5" width="1425" height="1880"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImage" stdDeviation="21"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
                    </filter>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(403.853 -88.504) rotate(60.2147) scale(2212.27 1268.03)">
                        <stop stopColor="white" stopOpacity="0"/>
                        <stop offset="0.751655" stopColor="white" stopOpacity="0.015"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="paint1_linear" x1="671" y1="4" x2="671" y2="1793"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2DC096"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

        </>

    )
})

export const Border = React.memo(function () {
    return (
        <svg width="1342" viewBox="0 0 1342 1797" fill="none" xmlns="http://www.w3.org/2000/svg"
             className='Border'>
            <g filter="url(#filter1_b)">
                <rect x="4" y="4" width="1334" height="1789" rx="40" fill="url(#paint2_radial)"/>
                <rect x="2.25" y="2.25" width="1337.5" height="1792.5" rx="41.75" stroke="url(#paint3_linear)"
                      strokeWidth="3.5"/>
            </g>
            <defs>
                <filter id="filter1_b" x="-41.5" y="-41.5" width="1425" height="1880" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImage" stdDeviation="21"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape"/>
                </filter>
                <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(403.853 -88.504) rotate(60.2147) scale(2212.27 1268.03)">
                    <stop stopColor="white" stopOpacity="0"/>
                    <stop offset="0.751655" stopColor="white" stopOpacity="0.015"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="paint3_linear" x1="671" y1="4" x2="671" y2="1793" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white"/>
                    <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>
    )
})

