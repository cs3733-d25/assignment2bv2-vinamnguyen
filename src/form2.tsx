const Form2 = () => {
  return (
      <form action="#" method="post">

          <label htmlFor="first name">First Name:</label>
          <input type="text" id="first name" name="first name"/><br/><br/>

          <label htmlFor="Last Name">Last Name:</label>
          <input type="text" id="Last Name" name="Last Name"/><br/><br/>


          <label htmlFor="Like">Did You Like the Website?:</label>
          <input type="checkbox" id="Like" name="Like"/><br/>

          <label htmlFor="recommendations">Receive Recommendations:</label>
          <input type="checkbox" id="recommendations" name="recommendations"/><br/>

          <label htmlFor="terms">Accept terms and conditions:</label>
          <input type="checkbox" id="terms" name="terms"/><br/><br/>


          <label htmlFor="gender">Gender:</label><br/>
          <input type="radio" id="male" name="gender" value="male"/>
          <label htmlFor="male">Male</label><br/>

          <input type="radio" id="female" name="gender" value="female"/>
          <label htmlFor="female">Female</label><br/>

          <input type="radio" id="other" name="gender" value="other"/>
          <label htmlFor="other">Other</label><br/><br/>


          <label htmlFor="comments">Comments:</label><br/>
          <textarea id="comments" name="comments" rows={4} cols={50}></textarea><br/><br/>


          <label htmlFor="book">Select your favorite book:</label>
          <select id="book" name="book">
              <option value="1">Cradle</option>
              <option value="2">NightLord</option>
              <option value="3">The Perfect Run</option>
              <option value="4">Mother of Learning</option>
          </select><br/><br/>


          <button type="submit">Submit</button>
      </form>

  )
}
export default Form2;