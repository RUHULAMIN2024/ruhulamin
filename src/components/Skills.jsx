import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container pt-10 skills" id="skills">
        <h1 className=" mb-3 text-center text-4xl">MY SKILLS</h1>
        <div className="items">
          {skills.map((data, index) => (
              <div
                className="item flex flex-col items-center justify-center"
                key={index}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={`/assets/${data.imageSrc}`} alt="" />
                <h3 className="text-3xl">{data.title}</h3>
              </div>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
