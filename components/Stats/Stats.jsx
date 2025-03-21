import StatsItem from "./StatsItem";

const statsData = [
  {
    endCountNum: 3,
    endCountText: "+",
    text: "Yrs. of Experience",
  },
  {
    endCountNum: 11,
    endCountText: "+",
    text: "Software Built",
  },
  {
    endCountNum: 100,
    endCountText: "%",
    text: "Client's Satisfaction",
  },
];

const Stats = () => {
  return (
    <section className="flex justify-center xl:justify-normal mx-auto xl:mx-0 xl:w-[380px] gap-4 xl:gap-0">
      {statsData.map((item, index) => {
        return (
          <StatsItem
            endCountNum={item.endCountNum}
            endCountText={item.endCountText}
            text={item.text}
            key={index}
          />
        );
      })}
    </section>
  );
};

export default Stats;
