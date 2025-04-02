import List2 from './list2.tsx';
import Table2 from './table2.tsx';
import Form2 from './form2.tsx';
import HobbyPhoto from '../assets/HobbyPhoto.jpg'

const Hobby2 = () => {
    return (
        <div>
            <h2>Reading</h2>
            <div className={"hobby_intro2"}>
            <p>
                The hobby that I am using for this project is reading.
                I read both physical books, as well as books under public review online.
                I love the fantasy genre in all but a few permutations,
                and love thinking about the numerous forms of magic and complex plots.

            </p>
            </div>
            <img src={HobbyPhoto} alt="Reading Photo" width="640" />

            <List2 />
            <Table2 />
            <Form2 />
        </div>
    );
};

export default Hobby2;