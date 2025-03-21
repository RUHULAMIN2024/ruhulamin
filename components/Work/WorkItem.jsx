import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Badge } from "../ui/badge";

const WorkItem = ({ live_link, category, image, name }) => {
  return (
    <Link
      href={live_link || "#"}
      className="group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full h-[300px] p-0 rounded-[30px] mb-6 relative overflow-hidden bg-[#f4f4f4]">
        <Badge className="bg-primary text-base z-40 absolute top-6 left-6 capitalize">
          {category.replace("_", " ")}{" "}
          {/* Format category for better readability */}
        </Badge>
        {image?.url ? (
          <div className="w-full h-full overflow-hidden rounded-lg relative">
            <div
              className="w-full h-full bg-animation"
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            ></div>
          </div>
        ) : (
          <p className="text-gray-600">No image available</p>
        )}
      </div>
      <div className="flex items-center justify-center">
        <div className="flex-1">
          <h3 className="h3">{name}</h3>
        </div>
        <button className="bg-accent text-white rounded-full w-[48px] h-[48px] flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
          <FiArrowRight className="text-2xl" />
        </button>
      </div>
    </Link>
  );
};

export default WorkItem;
