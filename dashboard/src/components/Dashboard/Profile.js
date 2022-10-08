import React from 'react'

const Profile = () => {
  return (
    <div className='bottomContainer'>
      <div className="generalInformation">
        <label htmlFor="profilePic">Change profile pic</label>
        <input type="file" name="profilePic" id="profilePic" />
        <button>Upload</button>
        <br />

        <label htmlFor="Name"> Name </label>
        <input type="text" name="name" id="name" />
        <br />

        <label htmlFor="phNo">Phone No.</label>
        <input type="text" name="phNo" id="phNo" />
        <br />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10"></textarea>
        <br />

      </div>

      <div className="questionsSection">
        <h3>Bank Details</h3>
        <label htmlFor="bankName">Bank Name</label>
        <input type="text" name="bankName" id="bankName" />
        <br />

        <label htmlFor="bankAccountNo">Bank Account No.</label>
        <input type="text" name="bankAccountNo" id="bankAccountNo" />
        <br />

        <label htmlFor="bankIfsc">Bank IFSC Code</label>
        <input type="text" name="bankIfsc" id="bankIfsc" />
        <br />

        <h3>Pan Details</h3>
        <label htmlFor="panNo">Pan No.</label>
        <input type="text" name="panNo" id="panNo" />
        <br />

        <label htmlFor="panDocument">PAN Document</label>
        <input type="file" name="panDocument" id="panDocument" />
        <button>Upload</button>
        <br />

        <h3>Adhaar</h3>
        <label htmlFor="adhaarNo">Adhaar No.</label>
        <input type="text" name="adhaarNo" id="adhaarNo" />
        <br />

        <label htmlFor="adhaarDocument">Adhaar Document</label>
        <input type="file" name="adhaarDocument" id="adhaarDocument" />
        <button>Upload</button>
        <br />

        <h3>Salery Slip (Upload One By One | Uploaded Ones will appear below) </h3>
        <label htmlFor="salerySlip">Salery Slip</label>
        <input type="file" name="salerySlip" id="salerySlip" />
        <input type="text" name="saleryAmount" id="saleryAmount" placeholder='Enter Amount (in Rs)' />
        <button>Upload</button>
        <br />

        <h3>CTC Information</h3>
        <label htmlFor="ctc">CTC (in Rs)</label>
        <input type="text" name="ctc" id="ctc" />
        <br />

        <h3>Answers these questions to help us calculate CIBIL score...</h3>
        <label htmlFor="question1">How regular are you on paying your bills on time? (rate on 1-10)</label>
        <select name="answer1" id="answer1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <br />

        <label htmlFor="question2">How regular are you on paying back your credit loans and EMIs? (rate on 1-10)</label>
        <select name="answer2" id="answer2">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <br />

        <label htmlFor="question3">How many credit cards do you have? (a value between 1-4)</label>
        <select name="answer3" id="answer3">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <br />

        <label htmlFor="question4">For how long have you been using credit card? (a value between 1-20)</label>
        <select name="answer4" id="answer4">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
        <br />

        <label htmlFor="question5">What percentage of credit limit you spend monthly? </label>
        <select name="answer5" id="answer5">
          <option value="10">10%</option>
          <option value="20">20%</option> 
          <option value="30">30%</option>
          <option value="40">40%</option>
          <option value="50">50%</option>
          <option value="60">60%</option>
          <option value="70">70%</option>
          <option value="80">80%</option>
          <option value="90">90%</option>
          <option value="100">100%</option>

        </select>
        <br />

        <label htmlFor="question6">Do you have any personal(home/gold/car loan)? (Yes/No)</label>
        <select name="answer6" id="answer6">
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <br />
        <button>Update Answers</button>
        

      </div>
    </div>
  )
}

export default Profile