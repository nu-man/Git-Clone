function Contact(){
    return(
          <>
            <div>
            <center>
                <h2>Contact Form</h2>
            </center>
            <label>Email</label>
            <input type="email" ></input>
            <label>Name</label>
            <input type="text"></input>
            <label>Is this your first visit to website? <br></br></label>
            <label>Yes</label>
            <input type="checkbox" for="Yes"></input><br></br>
            <label>No</label>
            <input type="checkbox" for="No"></input><br></br>
            <label>What is the primary reason for your visit to website</label>
            <textarea maxLength="50">
                Enter the text here
             </textarea>
            <label>If you did not find what you needed,please tell me what you were looking for?</label>
            <textarea maxLength="50">
                Enter the text here
             </textarea>
            <fieldset>
                <legend>How easy is it for you to find the information on the site:</legend>
                <label>Very Easy</label>
                <input type="checkbox" for="very"></input><br>
                </br>
                <label> Easy</label>
                <input type="checkbox" for="easy"></input><br>
                </br>
                <label>Average</label>
                <input type="checkbox" for="average"></input><br>
                </br>
                <label>Difficult</label>
                <input type="checkbox" for="difficult"></input><br>
                </br>
            </fieldset>
            <fieldset>
                <legend>What is the likelihood that you will return to the site:</legend>
                <label>Extremely likely</label>
                <input type="checkbox" for="exterme"></input><br>
                </br>
                <label>Very likely</label>
                <input type="checkbox" for="very"></input><br>
                </br>
                <label>Moderately likely</label>
                <input type="checkbox" for="moderate"></input><br>
                </br>
                <label>unlike to return</label>
                <input type="checkbox" for="unlike"></input><br>
                </br>
            </fieldset>
            <label>Please provide any additional comments or suggestions</label>
            <textarea maxLength="50">
                Enter the text here
             </textarea>
             <input type="submit" value="Submit the contact form" className="btn btn-dark btn-block"></input>
            </div>
            
          </>
        
    )
}
export default Contact