interface IntroProps {
    name1: string;
    name2: string;
}

const Intro: React.FC<IntroProps> = ({ name1, name2 }) => {
    return (
        <p>
            My name is {name1}, and I am a Sophomore majoring in Computer Science. I am from Rutland, Massachusetts,
            which is around 20-30 minutes from Worcester. One fun fact about me is that I am a big fan of Invincible. <br/><br/>
            My name is {name2}, and I am a Junior majoring in Computer Science. I am from Swampscott,  Massachusetts, which
            is an hour from Worcester. One fun fact about me is that I love skiing.
            <br/>
        </p>
    )
}

export default Intro;