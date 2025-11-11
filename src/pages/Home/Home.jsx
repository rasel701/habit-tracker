import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import LastHabit from "../../components/LastHabit/LastHabit";
import WhyBuildHabits from "../../components/WhyBuildHabits/WhyBuildHabits";

const Home = () => {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner />
      <LastHabit habits={data} />
      <WhyBuildHabits />
    </div>
  );
};

export default Home;
