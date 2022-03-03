import { Typography, TypographyVariant } from '..'
import styles from './styles.module.scss'

export interface ButtonProps {
  label: string
  onClick?: () => void
}

const Button = ({ label, onClick }: ButtonProps): JSX.Element => {
  return (
    <button className={styles.container} onClick={onClick}>
      <Typography
        className={styles.label}
        text={label}
        variant={TypographyVariant.label}
      />
    </button>
  )
}

export { Button }
