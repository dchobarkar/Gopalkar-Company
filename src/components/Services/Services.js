import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/styles";

import ServicesCSS from "./Services.css";

// CSS
const useStyles = makeStyles({ ...ServicesCSS });

// Driver component
function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Accounting and Advisory Services</title>

        <meta
          name="description"
          content="Gopalkar & Company's comprehensive suite of advisory services provides business owners with on-demand resources to grow their business."
        />
      </Helmet>

      <div className={classes.header}>
        <h1>What can we do to assist you?</h1>

        <Link to="/contact">Hire Us</Link>
      </div>

      <section className={classes.container}>
        <h2>Audit and Assurance</h2>

        <div>
          <p>
            We provide a wide variety of assurance and financial reporting
            services to fulfill the demands of a wide range of companies and
            their stakeholders. Our depth of expertise, along with our
            investment in technology and data-driven decision-making, offers us
            the perspective and capabilities to provide expert assurance,
            accounting, and auditing services.
          </p>

          <div>
            <div>
              <div>
                <h3>Statutory Audits</h3>

                <p>
                  A thorough audit of the company's financial statements and
                  records in accordance with the Companies Act of 2013,
                  guaranteeing compliance with IND AS/AS as per GAAP
                </p>
              </div>

              <div>
                <h3>Compliance</h3>

                <p>
                  Assisting in ensuring compliance with industry standards,
                  rules, and laws, assuring IFC as per statutory requirements
                </p>
              </div>
            </div>

            <div>
              <div>
                <h3>Internal Audits</h3>

                <p>
                  Advising your management team on the development of viable
                  internal controls to guarantee internal control
                </p>
              </div>

              <div>
                <h3>Stock Audits</h3>

                <p>Physical stock and inventory verification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.container}>
        <h2>Business Advisory</h2>

        <div>
          <p>
            Our broad array of advice services offers company owners on-demand
            tools to help them build a more efficient, robust, and lucrative
            enterprise. Our comprehensive business skills can offer value to
            every part of your firm, improving procedures and your bottom line
            while laying the groundwork for long-term success. Our team works as
            an extension of your own personnel and other advisers, ensuring that
            projects stay on schedule and that useful information from all
            sources is incorporated.
          </p>

          <div>
            <div>
              <div>
                <h3>Direct & Indirect Taxation</h3>

                <p>
                  The most recent information on all taxing transactions. Giving
                  you the ability to run your business on your own terms
                </p>
              </div>

              <div>
                <h3>Organizational Statutory Applicability</h3>

                <p>
                  Get the finest tactics and practices to ensure your safety
                </p>
              </div>
            </div>

            <div>
              <div>
                <h3>Periodic Amendment Updates</h3>

                <p>
                  Providing assistance and establishing methods to prepare for
                  periodic changes in various legislation
                </p>
              </div>

              <div>
                <h3>Statutory Transactions</h3>

                <p>
                  Assisting with certain transactions that are subject to
                  legislative obligations
                </p>
              </div>
            </div>

            <div>
              <div>
                <h3>GST Transactions</h3>

                <p>
                  Seek guidance and benefit from expertise with multiple
                  successful transactions—buy-side, sell-side, and all sorts of
                  deal structures
                </p>
              </div>

              <div>
                <h3>Implement Finance Processes</h3>

                <p>
                  Reduce risk by enhancing the efficacy and efficiency of
                  financial reporting and internal controls. Ensure long-term
                  process improvements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.container}>
        <h2>Start-up Assistance</h2>

        <div>
          <p>
            We assist startups with risk management on both a strategic and
            operational level. While you work with a small team that is
            well-versed in all aspects of corporate risk management, you also
            have access to our support and experience. In conducting our
            assessments, we adhere to best practices. Our top-down,
            cost-effective strategy provides our clients with a comprehensive
            solution in a timely way.
          </p>

          <div>
            <div>
              <div>
                <h3>Company Registration</h3>

                <p>
                  Assisting you with the incorporation of your business, the
                  formation of a partnership firm, or the registration of an LLP
                </p>
              </div>

              <div>
                <h3>Project Financing & Fund Raising</h3>

                <p>
                  Providing advice on funding long-term infrastructure and a
                  variety of other business initiatives. Get ideal project
                  financing options with a long-term outlook
                </p>
              </div>
            </div>

            <div>
              <div>
                <h3>Devising Internal Procedures</h3>

                <p>
                  Providing advice on the design of the procedure for managing
                  benefit appeals. Assess the efficiency of a company's internal
                  controls, corporate governance, and accounting systems
                </p>
              </div>

              <div>
                <h3>Tax, Accounting & Financial Compliance</h3>

                <p>
                  With a thorough grasp of your company's goals and objectives,
                  our audit and tax specialists collaborate to achieve
                  significant tax savings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.container}>
        <h2>Business Process Management Assistance</h2>

        <div>
          <p>
            We assist businesses in driving cultural transformation through
            digitization and automation. Our solutions give concrete benefits
            such as greater process efficiency, increased compliance, increased
            visibility, total transparency, reduced time-to-market, and customer
            happiness. We help organizations achieve maximum efficiency and
            productivity at all times.
          </p>

          <div>
            <div>
              <div>
                <h3>Virtual CFO Services</h3>

                <p>
                  Accounting compliance assistance with compliance with the
                  applicable regulatory agencies. Get the tools you need to
                  manage your finances
                </p>
              </div>

              <div>
                <h3>Books of Accounts</h3>

                <p>
                  Assisting in the operation of a healthy, stable, and
                  increasing company. Obtain routine and ongoing maintenance of
                  the organization's financial statements to ensure that the
                  information is correct and up to date
                </p>
              </div>
            </div>

            <div>
              <div>
                <h3>MIS Reporting</h3>

                <p>
                  Pushing for the development and implementation of MIS
                  reporting on a regular basis
                </p>
              </div>

              <div>
                <h3>Statutory Compliance</h3>

                <p>
                  Assisting with GST, TDS, PF, ESIC, and other statutory
                  compliance
                </p>
              </div>
            </div>

            <div>
              <div>
                <h3>Assessment Procedures Representation</h3>
              </div>
              <div>
                <h3>Payroll Processing & Salary Processing</h3>
              </div>
            </div>
            <div>
              <div>
                <h3>Smooth Functioning of Finance Division</h3>
              </div>
              <div>
                <h3>Tax Applicability & Tax Savings</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.container}>
        <h2>Statutory Compliance Assistance</h2>

        <div>
          <p></p>

          <div>
            <div>
              <div>
                <h3>GST Return</h3>

                <p>
                  Assisting with the completion of monthly GST returns and GST
                  reconciliation
                </p>
              </div>

              <div>
                <h3>TDS Return</h3>

                <p>
                  Advocating for the filing of TDS reports and payments on a
                  regular basis
                </p>
              </div>
            </div>

            <div>
              <div>
                <h3>Labour Laws</h3>

                <p>
                  We assist with monthly payments and the completion of numerous
                  labour rules such as PF, ESIC, and so on
                </p>
              </div>

              <div>
                <h3>Form 15CA & 15CB</h3>

                <p>
                  Help with completing Forms 15CA and 15CB for foreign
                  remittances
                </p>
              </div>
            </div>

            <div>
              <div>
                <h3>Income Tax Return</h3>

                <p>
                  Expert assistance with income tax returns for a variety of
                  circumstances
                </p>
              </div>

              <div>
                <h3>ROC Compliance</h3>

                <p>
                  Advocating for all ROC compliance obligations to be filed on a
                  regular and statutory basis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classes.container}>
        <h2>Assessments and Representations</h2>

        <div>
          <p></p>

          <div>
            <div>
              <div>
                <h3>Income Tax Assessments</h3>

                <p>Representation in income-tax assessment</p>
              </div>

              <div>
                <h3>GST Assessments</h3>

                <p>Representation in all topics pertaining to GST assessment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
