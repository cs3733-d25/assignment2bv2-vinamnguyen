interface IntroProps {
    name1: string;
    name2: string;
}

const Intro: React.FC<IntroProps> = ({ name1, name2 }) => {
    return (
        <p>
            My name is {name1}, and I am a Sophomore majoring in Computer Science. I am from Rutland, Massachusetts,
            which is around 20-30 minutes from Worcester. One fun fact about me is that I am a big fan of Invincible. <br/>
        </p>
    )
}

export default Intro;