import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

import ServicesCSS from "./Services.css";

// CSS
const useStyles = makeStyles({ ...ServicesCSS });

// Driver component
function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1>Header</h1>

        <Link to="/contact">Hire Us</Link>
      </div>

      <div className={classes.container}>
        <h2>Service 1</h2>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac eget
            augue leo aliquam leo ac id ut euismod. Et suspendisse proin amet ut
            interdum nam tempus. Vivamus purus feugiat malesuada risus nulla
            eget amet quis in. Nisi, dictum sagittis, etiam tellus id. Vehicula
            maecenas integer bibendum iaculis nunc. Pulvinar porttitor a
            maecenas leo imperdiet. Sit aliquet mattis magnis viverra risus
            tincidunt pellentesque. Est, turpis scelerisque aliquam pharetra.
            Mattis erat feugiat massa ligula gravida pretium. Cras tellus
            sollicitudin commodo consectetur quis elementum tortor cras ut. Non
            ornare ac massa eget ullamcorper pulvinar mauris cras ullamcorper.
            Enim mauris id turpis dictumst integer quam nunc, metus, at.
            Ullamcorper risus ante mi dictum facilisis elit. Ultricies
            scelerisque enim mauris sed. Cum.
          </p>

          <div>
            <div>
              <div>
                <h3>Sub service 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare auctor id aenean semper etiam nisl, metus, eu mauris.
                  Orci pharetra turpis ac est mi tempor ornare malesuada. Massa
                  velit vel turpis vel.
                </p>
              </div>

              <div>
                <h3>Sub service 2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare auctor id aenean semper etiam nisl, metus, eu mauris.
                  Orci pharetra turpis ac est mi tempor ornare malesuada. Massa
                  velit vel turpis vel.
                </p>
              </div>
            </div>

            <div>
              <div>
                <h3>Sub service 3</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare auctor id aenean semper etiam nisl, metus, eu mauris.
                  Orci pharetra turpis ac est mi tempor ornare malesuada. Massa
                  velit vel turpis vel.
                </p>
              </div>

              <div>
                <h3>Sub service 4</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare auctor id aenean semper etiam nisl, metus, eu mauris.
                  Orci pharetra turpis ac est mi tempor ornare malesuada. Massa
                  velit vel turpis vel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.container}>
        <h2>Service 2</h2>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac eget
            augue leo aliquam leo ac id ut euismod. Et suspendisse proin amet ut
            interdum nam tempus. Vivamus purus feugiat malesuada risus nulla
            eget amet quis in. Nisi, dictum sagittis, etiam tellus id. Vehicula
            maecenas integer bibendum iaculis nunc. Pulvinar porttitor a
            maecenas leo imperdiet. Sit aliquet mattis magnis viverra risus
            tincidunt pellentesque. Est, turpis scelerisque aliquam pharetra.
            Mattis erat feugiat massa ligula gravida pretium. Cras tellus
            sollicitudin commodo consectetur quis elementum tortor cras ut. Non
            ornare ac massa eget ullamcorper pulvinar mauris cras ullamcorper.
            Enim mauris id turpis dictumst integer quam nunc, metus, at.
            Ullamcorper risus ante mi dictum facilisis elit. Ultricies
            scelerisque enim mauris sed. Cum.
          </p>

          <div>
            <div>
              <div>
                <h3>Sub service 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare auctor id aenean semper etiam nisl, metus, eu mauris.
                  Orci pharetra turpis ac est mi tempor ornare malesuada. Massa
                  velit vel turpis vel.
                </p>
              </div>

              <div>
                <h3>Sub service 2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare auctor id aenean semper etiam nisl, metus, eu mauris.
                  Orci pharetra turpis ac est mi tempor ornare malesuada. Massa
                  velit vel turpis vel.
                </p>
              </div>
            </div>

            <div>
              <div>
                <h3>Sub service 3</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare auctor id aenean semper etiam nisl, metus, eu mauris.
                  Orci pharetra turpis ac est mi tempor ornare malesuada. Massa
                  velit vel turpis vel.
                </p>
              </div>

              <div>
                <h3>Sub service 4</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare auctor id aenean semper etiam nisl, metus, eu mauris.
                  Orci pharetra turpis ac est mi tempor ornare malesuada. Massa
                  velit vel turpis vel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.container}>
        <h2>Service 3</h2>

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac eget
            augue leo aliquam leo ac id ut euismod. Et suspendisse proin amet ut
            interdum nam tempus. Vivamus purus feugiat malesuada risus nulla
            eget amet quis in. Nisi, dictum sagittis, etiam tellus id. Vehicula
            maecenas integer bibendum iaculis nunc. Pulvinar porttitor a
            maecenas leo imperdiet. Sit aliquet mattis magnis viverra risus
            tincidunt pellentesque. Est, turpis scelerisque aliquam pharetra.
            Mattis erat feugiat massa ligula gravida pretium. Cras tellus
            sollicitudin commodo consectetur quis elementum tortor cras ut. Non
            ornare ac massa eget ullamcorper pulvinar mauris cras ullamcorper.
            Enim mauris id turpis dictumst integer quam nunc, metus, at.
            Ullamcorper risus ante mi dictum facilisis elit. Ultricies
            scelerisque enim mauris sed. Cum.
          </p>

          <div>
            <div>
              <div>
                <h3>Sub service 1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare auctor id aenean semper etiam nisl, metus, eu mauris.
                  Orci pharetra turpis ac est mi tempor ornare malesuada. Massa
                  velit vel turpis vel.
                </p>
              </div>

              <div>
                <h3>Sub service 2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare auctor id aenean semper etiam nisl, metus, eu mauris.
                  Orci pharetra turpis ac est mi tempor ornare malesuada. Massa
                  velit vel turpis vel.
                </p>
              </div>
            </div>

            <div>
              <div>
                <h3>Sub service 3</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare auctor id aenean semper etiam nisl, metus, eu mauris.
                  Orci pharetra turpis ac est mi tempor ornare malesuada. Massa
                  velit vel turpis vel.
                </p>
              </div>

              <div>
                <h3>Sub service 4</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ornare auctor id aenean semper etiam nisl, metus, eu mauris.
                  Orci pharetra turpis ac est mi tempor ornare malesuada. Massa
                  velit vel turpis vel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
