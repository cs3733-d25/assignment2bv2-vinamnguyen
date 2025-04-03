import List1 from './list1.tsx';
import Table1 from './table1.tsx';
import Form1 from './form1.tsx';
import nbabanner from '../assets/nbabanner.jpg'

const Hobby1 = () => {
    return (
        <div className="hobby1">
            <div className="hobby1-title">
                <h2>Basketball</h2>
            </div>
            <div className="hobby1-info">
            <p>
                I consider basketball to be one of my favorite hobbies. More specifically, I love to watch NBA.
                Seeing some of the most prolific and entertaining hoopers play every night brings joy into my life.
                Not only that, but I am a huge statistics nerd when it comes to basketball. While watching my favorite team,
                the Boston Celtics, I analyze how each player has their own role and how they execute drawn plays effectively.
                For example, watching my favorite player at the moment, Jayson Tatum, affect the game not only through 3-level scoring, but by
                drawing the defense to create plays for others, defending 1-5, and overall awareness is really fascinating to me. I could do this
                for other players like Nikola Jokić, LeBron James, Kevin Durant, etc. This and watching highlights of hoopers from past generations
                is really cool.
            </p>
            </div>
            <img src={nbabanner} alt="NBA Banner" width="500" />
            <br/>

            <List1 />
            <br/>
            <Table1 />
            <br/>
            <Form1 />
        </div>
    );
};

export default Hobby1;