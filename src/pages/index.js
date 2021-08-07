import * as React from "react"
import Layout from "../components/layout";
import Work from "../components/sections/work";
import Education from "../components/sections/education";
import CallToActionWithVideo from "../components/sections/hero";
import AboutMe from "../components/sections/aboutMe";

const Index = () => {
    return (
        <Layout>
            <CallToActionWithVideo/>
            <AboutMe/>
            <Education/>
            <Work/>
        </Layout>
    )
}

export default Index
