import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1 className="text-center py-3 text-4xl">SKILLS</h1>
        <div className="items">
          {skills.map((data) => (
            <>
              <div
                className="item flex flex-col items-center justify-center"
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={`/assets/${data.imageSrc}`} alt="" />
                <h3 className="text-3xl">{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
