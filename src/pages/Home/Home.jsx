import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import LastHabit from "../../components/LastHabit/LastHabit";
import WhyBuildHabits from "../../components/WhyBuildHabits/WhyBuildHabits";
import SuccessSection from "../../components/SuccessSection/SuccessSection";

const Home = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner />
      <LastHabit habits={data} />
      <WhyBuildHabits />
      <SuccessSection />
    </div>
  );
};

export default Home;
