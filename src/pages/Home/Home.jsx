import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import LastHabit from "../../components/LastHabit/LastHabit";
import WhyBuildHabits from "../../components/WhyBuildHabits/WhyBuildHabits";
import SuccessSection from "../../components/SuccessSection/SuccessSection";
import ExtraSections from "../../components/ExtraSections/ExtraSections";
import Faqsection from "../../components/FAQSection/Faqsection";
import BlogSection from "../../components/Blogs/BlogSection";

const Home = () => {
  const { data } = useLoaderData();
  // console.log(data);
  return (
    <div className="max-w-[90%] mx-auto">
      <Banner />
      <LastHabit habits={data} />
      <WhyBuildHabits />
      <SuccessSection />
      <ExtraSections />
      <Faqsection />
      <BlogSection />
    </div>
  );
};

export default Home;
