import React from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/styles";

import AboutCSS from "./About.css";

// CSS
const useStyles = makeStyles({ ...AboutCSS });

// Driver component
function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Helmet>
        <title>Best CA Firm - About</title>

        <meta
          name="description"
          content="Gopalkar & Company is a rapidly expanding chartered accounting business that was founded in 2021. We endeavour to give our clients the highest level of professionalism and ethics in order to help them expand their businesses effectively."
        />
      </Helmet>
      <div className={classes.root}>
        <div className={classes.image}></div>

        <div className={classes.container}>
          <h2 className={classes.header}>Integrity</h2>

          <p className={classes.text}>
            In organizational culture, ethics is all about management. Trust is
            built on integrity. It is our most precious asset as a company as a
            whole. Individually, it is the continual choice to integrate
            honesty, justice, and respect for clients and colleagues alike into
            every action. Doing things with integrity is not optional or
            temporary; because integrity is the basis of successful leadership,
            displaying this value is critical to winning the trust of our
            coworkers, supervisors, clients, and the global business community.
            Living with integrity entails doing what is right even when it is
            difficult or will not be recognized by others. Leading with
            integrity is a need in our lives and at work, and it is based on the
            premise that our actions are open and transparent—we do not lie or
            conceal the reality of events. We appreciate this virtue at Gopalkar
            & Company because a workplace where supervisors and workers carry
            out their duties with integrity is one that is effective, healthy,
            and encourages desired leadership traits in others. We treat
            everyone equally, regardless of their position within our business.
          </p>

          <h2 className={classes.header}>Professionalism</h2>

          <p className={classes.text}>
            Professionalism entails continuously meeting high standards in both
            your job and your behavior. We individually pledge to strive for
            ongoing improvement and professional development. We take pleasure
            in generating high-quality work and providing outstanding service to
            both internal and external clients. We take pleasure in our
            professional look, language, and demeanor. We accept responsibility
            for maintaining a clean and safe work environment. We retain our
            cool in stressful conditions. We respect people, show genuine
            gratitude, and have a beneficial effect on those around us.
            Professionalism is evident throughout Gopalkar & Company's structure
            and traditions, such as our commitment to professional advancement
            through leadership retreats for Program Leads, the Board of
            Directors, and Section Managers.
          </p>

          <h2 className={classes.header}>Reliability</h2>

          <p className={classes.text}>
            People intrinsically respect dependability. Every day, we place a
            high value on things like consistent internet access, mobile phone
            service, aircraft flying off on schedule, our automobiles
            transporting us from point A to point B, and our family, friends,
            and coworkers doing what they say they would do. When these things
            are dependable, they not only provide us with increased efficiency
            and peace of mind, but they also assist us in forging deeper
            connections and delivering better outcomes. We place a high value on
            individuals and firms who can consistently provide good outcomes
            time after time and who can be relied on to keep commitments and
            pledges. Recognizing its relevance and value as leaders is vital to
            our success. A dependable team or organization is actually just a
            collection of dependable individuals. With this in mind, company
            dependability begins with us as leaders and our ability to instill
            it in those we deal with. Understanding how our customers see and
            consider our dependability may have a significant influence on our
            jobs, prospects, and capacity to deliver successfully.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
