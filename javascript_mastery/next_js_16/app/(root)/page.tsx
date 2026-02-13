import Hello from "@/components/hello";
import World from "@/components/world";
import Csrdemo from "@/components/csrdemo";

const Home = () => {
  console.log("What type of component am I?");
  return (
    <main>
      <div className="text-5xl underline">Welcome to Next.js!</div>
      <Hello />
      {/* <World /> */}
      {/* <Csrdemo /> */}
    </main>
  );
};

export default Home;
