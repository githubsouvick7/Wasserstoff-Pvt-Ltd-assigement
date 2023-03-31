import React from 'react';
import styles from './Category.module.css'

const Category = () => {
  return (
    <>
      <section className={styles.container}>
        <section style={{ display: 'flex', alignItems: 'center' }}>
          <div className={styles.colorpurpal}>
            <img src={require("../../assets/expanse.png")} alt='logo' style={{ height: '20px', width: '20px' }} />
          </div>
          <div className={styles.boxdetail}>
            <h4>Total earning</h4>
            <p>540549</p>
          </div>
        </section>

        <section style={{ display: 'flex', alignItems: 'center' }}>
          <div className={styles.colorblue}>
            <img src={require("../../assets/sales.png")} alt='logo' style={{ height: '20px', width: '20px' }} />
          </div>
          <div className={styles.boxdetail}>
            <h4>Sales</h4>
            <p>1,205,677</p>
          </div>
        </section>

        <section style={{ display: 'flex', alignItems: 'center' }}>
          <div className={styles.colororange}>
            <img src={require("../../assets/Vector.png")} alt='logo' style={{ height: '20px', width: '20px' }} />
          </div>
          <div className={styles.boxdetail}>
            <h4>Purchase</h4>
            <p>48,430,039</p>
          </div>
        </section>
      </section>
    </>
  )
}

export default Category