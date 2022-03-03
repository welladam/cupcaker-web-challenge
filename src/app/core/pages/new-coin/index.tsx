/* eslint-disable no-console */
import React from 'react'

import { Panel, Typography, TypographyVariant } from 'components/atoms'

import styles from './styles.module.scss'

const NewCoin = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Typography text="Add New Coin" variant={TypographyVariant.h3} />
      <Panel className={styles.panel}>
        <div />
      </Panel>
    </div>
  )
}

export default NewCoin
