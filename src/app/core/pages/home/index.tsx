/* eslint-disable no-console */
import React from 'react'
import { useHistory } from 'react-router-dom'

import { Panel, Typography, TypographyVariant, Button } from 'components/atoms'
import { EmptyState, EmptyStateType } from 'components/molecules'

import styles from './styles.module.scss'

const Home = (): JSX.Element => {
  const history = useHistory()

  const onClick = (): void => {
    history.push('/new-coin')
  }

  return (
    <div className={styles.container}>
      <Typography text="Watchlist" variant={TypographyVariant.h3} />

      <Button label="ADD NEW COIN" onClick={onClick} />

      <Panel className={styles.panel}>
        <EmptyState type={EmptyStateType.emptyWallet} />
      </Panel>
    </div>
  )
}

export default Home
