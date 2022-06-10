import React from 'react';
import styles from './Styles.module.css';

class Form extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <form>
          <div>
            <label for='firstName'>Name</label>
            <input type='text' id='firstName' placeholder='Enter name' />
          </div>

          <div>
            <label for='surname'>Surname</label>
            <input type='text' id='surname' placeholder='Enter surname' />
          </div>

          <div>
            <label for='birthday'>Date of Birth:</label>
            <input type='date' id='birthday' />
          </div>

          <div>
            <label for='phone'>Phone number:</label>
            <input type='tel' id='phone' placeholder='Enter phone number:' />
          </div>

          <div>
            <label for='website'>Website:</label>
            <input type='url' id='website' />
          </div>

          <div>
            <label for='personality'>About me:</label>
            <br />
            <textarea
              id='personality'
              cols='20'
              rows='7'
              placeholder='Enter text...'
            ></textarea>
          </div>

          <div>
            <label for='stack'>Technology stack</label>
            <br />
            <textarea
              id='stack'
              cols='20'
              rows='7'
              placeholder='Enter text...'
            ></textarea>
          </div>

          <div>
            <label for='description'>Description of the last project</label>
            <br />
            <textarea
              id='description'
              cols='20'
              rows='7'
              placeholder='Enter text...'
            ></textarea>
          </div>

          <div>
            <button type='reset'>Cancel</button>
            <button type='submit'>Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
