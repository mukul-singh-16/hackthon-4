import { FeatureCard } from "./FeatureCard";

const Features = () => {
  return (
    <>
      <div className="container px-4 py-5" id="featured-3">
        <h1 className="pb-2 border-bottom text-center">Services We Provide</h1>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <FeatureCard
            url="http://www.w3.org/2000/svg"
            d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"
            title="Resources"
            desc="A "
          />
          <FeatureCard
            url="http://www.w3.org/2000/svg"
            d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            title="Counselling"
            desc="A chat feature where counsellors can talk to each other, share tips, and ask questions to help each other out"
          />
          <FeatureCard
            url="http://www.w3.org/2000/svg"
            d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z"
            title="News"
            desc="Get timely updates on health related news, market trends, empowering informed decision-making."
          />
        </div>
      </div>
    </>
  );
};

export default Features;
