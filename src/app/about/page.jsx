import Herosection from "@/component/herosection/Herosection";


export const metadata = {
    title: "Mehran Asmat About Information",
    description: "This is Contact Page",
};

const About = () => {
    return (
        <>
            <Herosection
                Img="/about.jpg"
                Content="Network of Developers IT professionals and  tech industry"
                Desc="Our mission is to empower individuals and businesses to turn their ideas into reality with the help of our talented and diverse team of tech experts"
            />
        </>
    );
};

export default About;
