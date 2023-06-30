import Herosection from "@/component/herosection/Herosection";

export const metadata = {
    title: "Mehran Home Info",
    description: "This is home Page",
};
const Home = () => {
    return (
        <>
            <Herosection
                Img="/home.jpg"
                Content="Website Development becomes very easy and advance"
                Desc="Transforming your Idea into Reality. We unite the brightest minds from the worldwide tech sector."
            />
        </>
    );
};

export default Home;
