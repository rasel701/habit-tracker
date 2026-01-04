import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import LastHabit from "../../components/LastHabit/LastHabit";
import WhyBuildHabits from "../../components/WhyBuildHabits/WhyBuildHabits";
import SuccessSection from "../../components/SuccessSection/SuccessSection";
import ExtraSections from "../../components/ExtraSections/ExtraSections";
import Faqsection from "../../components/FAQSection/Faqsection";
import BlogSection from "../../components/Blogs/BlogSection";
import FeaturedHabits from "../FeaturedHabits/FeaturedHabits";

const Home = () => {
  const { data } = useLoaderData();

  return (
    <div className="max-w-[90%] mx-auto min-h-screen space-y-24">
      <Banner />
      <WhyBuildHabits />
      <FeaturedHabits />
      <LastHabit habits={data} />
      <SuccessSection />
      <BlogSection />
      <ExtraSections />
      <Faqsection />
    </div>
  );
};

export default Home;
