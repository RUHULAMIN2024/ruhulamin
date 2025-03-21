import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedText from "../AnimatedText";
import WorkItem from "./WorkItem";
import axios from "axios";

const Work = () => {
  // State to manage projects, categories, tab, and pagination
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tabValue, setTabValue] = useState("all");
  const [visibleItems, setVisibleItems] = useState(6);
  const [loading, setLoading] = useState(false);

  // Fetch data from the API
  const fetchProjects = async (isLoadMore = false) => {
    setLoading(true);

    try {
      const limit = 6; // Number of items to fetch per request
      const query = `*[_type=="Projects"]|order(serial desc)[0...${visibleItems}]{
        _id,
        name,
        description,
        features,
        serial,
        category,
        live_link,
        github,
        image{ "url": asset->url }
      }`;

      const response = await axios.get(
        `https://csow5rn8.api.sanity.io/v2024-02-22/data/query/production/?query=${query}`
      );

      const newProjects = response.data.result;

      // Set projects and avoid duplication during "load more"
      setProjects((prev) =>
        isLoadMore ? [...prev, ...newProjects] : newProjects
      );

      // Extract unique categories
      if (!isLoadMore) {
        const uniqueCategories = Array.from(
          new Set(newProjects.map((item) => item.category))
        );
        setCategories(["all", ...uniqueCategories]);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle initial data fetching
  useEffect(() => {
    fetchProjects();
  }, [visibleItems]);

  // Handle Load More
  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 6);
  };

  // Filter projects based on selected tab
  const filteredProjects =
    tabValue === "all"
      ? projects
      : projects.filter((item) => item.category === tabValue);

  return (
    <section className="pt-24 min-h-[1000px]" id="work">
      <div className="container mx-auto">
        <Tabs defaultValue="all" className="w-full flex flex-col">
          <div className="flex flex-col xl:flex-row items-center xl:items-start xl:justify-between mb-[30px]">
            <AnimatedText
              text="My Latest Work"
              textStyles="h2 mb-[30px] xl:mb-0"
            />
            {/* Render tab triggers */}
            <TabsList className="max-w-max h-full mb-[30px] flex flex-col md:flex-row gap-4 md:gap-0">
              {categories.map((category, index) => (
                <TabsTrigger
                  key={index}
                  value={category}
                  className="capitalize w-[120px]"
                  onClick={() => setTabValue(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Render content for the selected tab */}
          <TabsContent value={tabValue} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
              <AnimatePresence>
                {filteredProjects.slice(0, visibleItems).map((item, index) => (
                  <motion.div
                    key={item._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WorkItem {...item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* Load more button */}
            {visibleItems < projects.length && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={loadMoreItems}
                  className="btn btn-accent"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Load More"}
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Work;
