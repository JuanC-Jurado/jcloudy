import React from 'react'
import styles from './styles/RequestForm.module.css';

function RequestForm({ setRegion }) {


  function handleSubmit(e){
    e.preventDefault()

    let reg = e.target.elements.inputRegion.value;
    setRegion(reg)
    e.target.elements.inputRegion.value = '';
  }

  return (
    <div className={styles.requestForm}>
      <form onSubmit={handleSubmit}>
        <input type="text" name='inputRegion' placeholder='Region, Country' autoComplete='off' required />

        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  )
}

export default RequestForm