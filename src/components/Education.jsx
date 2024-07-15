import education from "./data/education.json";

const Education = () => {
  return (
    <>
      

      <div className="container pt-10 " id="education">
      <h1 className=" uppercase text-center text-4xl">Education & COURSES</h1>
        {education.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items mx-auto text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >

                <div className="right">
                  <h2 className="text-4xl">{data.degree}</h2>
                  <h4 className="text-3xl" style={{ color: "yellowgreen" }}>
                    {data.institude}

                  </h4>
                  <h5 className="text-2xl" style={{ color: "yellow" }}>{data.sesion}</h5>

                  <a className="btn btn-outline text-yellow-500 hover:bg-yellow-500 hover:text-black mt-3" href={data?.certificate}>See Certificate</a>

                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Education;
