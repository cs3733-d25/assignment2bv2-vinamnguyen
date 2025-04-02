import Title from './title.tsx';
import Intro from './intro.tsx';
import Hobby1 from './hobby1.tsx';
import './App.css'

const App = () => {
    return (
        <div>
            <Title />
            <Intro name1="Vinam Nguyen" name2="Jack Morris" />
            <Hobby1 />
            <Hobby2 />
        </div>
    );
};

export default App
