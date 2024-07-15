import { FaGithub } from "react-icons/fa6";
import project from "./data/projects.json";
import { FaLink } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <div className="container pt-10 projects mb-3" id="projects">
        <h1 className=" mt-5 mb-3 text-center text-4xl">RECENT PROJECTS</h1>
        <div className="row d-flex justify-center md:-ml-16 gap-8 align-content-center">
          {project.map((data) => (
            <>
              <div
                key={data.id}
                className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4"
              >
                <div
                  className="card w-72 md:w-80 bg-dark text-light"
                  style={{
                    border: "1px solid yellow",
                    boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-justify">
                    <h5 className="card-title mb-0 -mt-5">{data.title}</h5>
                    <p className="text-sm">{data.description}</p>
                    <div className="flex justify-center gap-2 mt-1">
                      <a href={data.live} className="btn btn-sm btn-primary">
                        <FaLink/>Live
                      </a>
                      <a href={data.client} className="btn btn-sm btn-warning">
                         <FaGithub/>Client
                      </a>
                      {
                        data?.server && <a href={data?.server} className="btn btn-sm btn-warning">
                        <FaGithub/>Server
                      </a>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
