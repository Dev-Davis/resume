import HTMLFlipBook from "react-pageflip";
import "./Book.css";

export default function BookFlip() {
  return (
    <div className="book-border">
      <HTMLFlipBook width={500} height={600} className="book-flip">
        <div className="bookPage">
          <section>
            <p className="developer-name bold">Sean Davis</p>

            <img
              src="https://i.ibb.co/RJQTVdR/Headshot.jpg"
              className="developer-img"
              alt="Headshot"
              border="0"
            ></img>
            <p className="developer-location">Nashville, Tennessee</p>
            <p className="developer-email">sean.dev.davis@gmail.com</p>
            <p className="developer-phone">Phone: 615-818-6676</p>
          </section>
          <hr />
          <div>
            <p className="title bold">Summary</p>
            <p className="developer-summary">
              Accomplished Full Stack Developer with extensive experience in
              software engineering, emphasizing C#, .NET, and React.js.
              Demonstrated proficiency in leading API management and backend
              optimization to enhance performance. Expert in cloud technologies,
              with a focus on Azure, and skilled in Agile methodologies.
              Dedicated to driving application excellence from inception to
              deployment, ensuring robust, scalable, and maintainable solutions.{" "}
            </p>
          </div>
          <hr />
          <section className="socials">
            <p className="bold title">Socials</p>
            <a href="https://www.linkedin.com/in/sean-dev/" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/Dev-Davis" target="_blank">
              Github
            </a>
          </section>
          <section className="page-contents">
            <p className="page-turn">Work Experience on next page...</p>
          </section>
        </div>
        <div className="bookPage">
          <p className="work-experience title bold">Professional Experience</p>
          <section className="work-title">
            <p className="bold title">
              <img
                src="https://i.ibb.co/Gfqj8mLj/steelsummit-logo.png"
                alt="steelsummit-logo"
                className="work-img ss"
                border="0"
              />
            </p>
            <p className="title">
              <i>Mid Level Programmer Analyst 2022 - 2024</i>
            </p>
          </section>
          <section className="work-list">
            <ul>
              <li>
                Led development of ASP.NET web applications, improving
                performance by refining code and optimizing API calls.
              </li>
              <li>
                Integrated PostgreSQL databases, improving query performance and
                system responsiveness by 25%.
              </li>
              <li>
                Developed automated systems to generate Excel | PDF reports,
                improving accessibility for teams | clients.
              </li>
              <li>
                Performed CRUD operations across systems using PostgreSQL,
                ensuring seamless data integration.
              </li>
              <li>
                Collaborated with cross-functional teams to improve overall
                system architecture and data flow.
              </li>
            </ul>
          </section>
          <hr />
          <section className="work-title">
            <p className="bold title">
              <img
                src="https://i.ibb.co/XZtzjCTB/thebarrel.png"
                className="work-img cb"
                alt="thebarrel"
                border="0"
              ></img>
            </p>
            <p className="title">
              <i>Junior Front End Developer 2021 - 2022</i>
            </p>
          </section>
          <section className="work-list">
            <ul>
              <li>
                Led development of ASP.NET web applications, improving
                performance by refining code and optimizing API calls.
              </li>
              <li>
                Integrated PostgreSQL databases, improving query performance and
                system responsiveness by 25%.
              </li>
              <li>
                Developed automated systems to generate Excel | PDF reports,
                improving accessibility for teams | clients.
              </li>
              <li>
                Performed CRUD operations across systems using PostgreSQL,
                ensuring seamless data integration.
              </li>
              <li>
                Collaborated with cross-functional teams to improve overall
                system architecture and data flow.
              </li>
            </ul>
          </section>
          <section className="page-contents">
            <p className="page-turn">Developer info on previous page...</p>
            <p className="page-turn">Skills on next page...</p>
          </section>
        </div>
        <div className="bookPage">
          <section>
            <p className="skills title bold">Skills</p>
            <div className="skill-list">
              <p>React.js Development</p>
              <p>.Net Development ASP.NET Development</p>
              <p>JavaScript </p>
              <p>Git/Github </p>
              <p>Microsoft SQL </p>
              <p>Microsoft Excel</p>
              <p>PostgreSQL</p>
              <p>Leadership</p>
              <p>Problem Solving</p>
            </div>
          </section>
          <section className="page-contents">
            <p className="page-turn">Work Experience on previous page...</p>
            <p className="page-turn">Education on next page...</p>
          </section>
        </div>
        <div className="bookPage">
          <section>
            <p className="education title bold">Education</p>
            <div className="school-list">
              <p className="bold title">Nashville Software School </p>
              <p>2019-2020</p>
            </div>
            <div className="bold">Front End Development</div>
            <div className="bold">Back End Development</div>
            <hr />
            <div className="school-list">
              <p className="bold title">Springboard</p>
              <p>2025-2025</p>
            </div>
            <div className="bold">Front End Development</div>
          </section>
          <section className="page-contents">
            <p className="page-turn">Skills on previous page...</p>
          </section>
        </div>
      </HTMLFlipBook>
    </div>
  );
}
