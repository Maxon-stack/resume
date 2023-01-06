import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Spinner from "../components/Spinner";

const Skills = () => {
  const [mySkills, setMySkills] = useState([]);
  useEffect(() => {
    axios.get("/api/skills").then((response) => {
      setMySkills(response.data);
      console.log(mySkills)
    });
  }, []);
  return (
    <Layout>
      <Helmet>
        <title>Resume - Chester React Personal Portfolio Template</title>
        <meta
          name="description"
          content="Chester React Personal Portfolio Template Resume Page"
        />
      </Helmet>
      <div className="mi-skills-area mi-section mi-padding-top">
      <div className="mi-skills-area mi-section mi-padding-top">
          <div className="container">
            <Sectiontitle title="Skills" />
            <div className="mi-skills">
              <div className="row mt-30-reverse">
                {mySkills.map((skill) => (
                  <div key={skill.title}>
                    <p>
                      {skill.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
 
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Skills