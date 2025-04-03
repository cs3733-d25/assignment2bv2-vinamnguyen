import Title from './components/title.tsx';
import Intro from './components/intro.tsx';
import Hobby1 from './components/hobby1.tsx';
import Hobby2 from './components/hobby2.tsx';
import './App.css'

const App = () => {
    return (
        <div>
            <Title />
            <Intro name1="Vinam Nguyen" name2="Jack Morris" />
            <Hobby1 />
            <br/>
            <Hobby2 />
        </div>
    );
};

export default App
