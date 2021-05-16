import React from "react"
import ContentLoader from "react-content-loader"

const PostLoader = (props: any) => (
    <ContentLoader
        speed={1.7}
        width={815}
        height={255}
        viewBox="0 0 800 255"
        backgroundColor="#ffffff"
        foregroundColor="#e0e0e0"
        {...props}
    >
        {props.profile ? <>
                <rect x="7" y="1" rx="0" ry="0" width="102" height="24"/>
                <rect x="137" y="0" rx="0" ry="0" width="102" height="24"/>
                <rect x="278" y="-1" rx="0" ry="0" width="102" height="24"/>
                <rect x="7" y="51" rx="0" ry="0" width="283" height="29"/>
                <rect x="5" y="106" rx="0" ry="0" width="485" height="26"/>
                <rect x="414" y="-1" rx="0" ry="0" width="102" height="24"/>
            </>
            : <>
                <rect x="70" y="98" rx="0" ry="0" width="102" height="24"/>
                <rect x="200" y="97" rx="0" ry="0" width="102" height="24"/>
                <rect x="341" y="96" rx="0" ry="0" width="102" height="24"/>
                <rect x="70" y="148" rx="0" ry="0" width="283" height="29"/>
                <rect x="68" y="203" rx="0" ry="0" width="485" height="26"/>
                <rect x="477" y="96" rx="0" ry="0" width="102" height="24"/>
                <rect x="71" y="3" rx="8" ry="8" width="80" height="75"/>
                <rect x="183" y="7" rx="0" ry="0" width="119" height="26"/>
                <rect x="322" y="6" rx="0" ry="0" width="119" height="26"/>
                <rect x="184" y="46" rx="0" ry="0" width="370" height="19"/>
            </>

        }

    </ContentLoader>
)

export default PostLoader

