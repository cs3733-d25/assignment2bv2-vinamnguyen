const Form1 = () => {
    return (
        <div className="form1">
            <h2>Questions?</h2>
            <form id="Questions">
                <label htmlFor="fname">First Name:</label>
                <input type="text" id="fname" name="fname" />
                <br />

                <label htmlFor="lname">Last Name:</label>
                <input type="text" id="lname" name="lname" />
                <br /><br />

                Topic(s):<br />
                <label htmlFor="Analytics">Analytics</label>
                <input type="checkbox" id="Analytics" name="Analytics" />
                <br />

                <label htmlFor="Debates">Debates</label>
                <input type="checkbox" id="Debates" name="Debates" />
                <br />

                <label htmlFor="Discussions">Discussions</label>
                <input type="checkbox" id="Discussions" name="Discussions" />
                <br />

                <label htmlFor="Memes">Memes</label>
                <input type="checkbox" id="Memes" name="Memes" />
                <br />

                <label htmlFor="Other">Other</label>
                <input type="checkbox" id="Other" name="Other" />
                <br /><br />

                Who will win this year's NBA Finals?<br />
                <div>
                    <input type="radio" id="BOS" name="Teams" value="Boston Celtics" />
                    <label htmlFor="BOS">Boston Celtics</label><br />
                </div>
                <div>
                    <input type="radio" id="OKC" name="Teams" value="Oklahoma City Thunder" />
                    <label htmlFor="OKC">Oklahoma City Thunder</label><br />
                </div>
                <div>
                    <input type="radio" id="CLE" name="Teams" value="Cleveland Cavaliers" />
                    <label htmlFor="CLE">Cleveland Cavaliers</label><br />
                </div>
                <div>
                    <input type="radio" id="LAL" name="Teams" value="Los Angeles Lakers" />
                    <label htmlFor="LAL">Los Angeles Lakers</label><br />
                </div>
                <div>
                    <input type="radio" id="GSW" name="Teams" value="Golden State Warriors" />
                    <label htmlFor="GSW">Golden State Warriors</label><br />
                </div>
                <div>
                    <input type="radio" id="DEN" name="Teams" value="Denver Nuggets" />
                    <label htmlFor="DEN">Denver Nuggets</label><br />
                </div>
                <div>
                    <input type="radio" id="OtherTeam" name="Teams" value="Other" />
                    <label htmlFor="OtherTeam">Other (name your team in the comments)</label><br />
                </div>
                <br />

                <label htmlFor="MVP">Choose your favorite MVP Candidate for this year</label><br />
                <select name="MVP" id="MVP">
                    <option value="SGA">Shai Gilgeous-Alexander</option>
                    <option value="Jokic">Nikola Jokić</option>
                    <option value="Giannis">Giannis Antetokounmpo</option>
                    <option value="JT">Jayson Tatum</option>
                    <option value="KAT">Karl Anthony-Towns</option>
                    <option value="Bron">LeBron James</option>
                    <option value="Ant">Anthony Edwards</option>
                </select><br /><br />

                Comments:<br />
                <textarea rows={5} cols={50} id="Comments" name="Comments"></textarea><br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form1;