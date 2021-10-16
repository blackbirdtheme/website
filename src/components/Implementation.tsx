import styles from '../styles/components/Implementation.module.css'

export default function Implementation({
  iconName,
  alt,
  linkURL,
}: {
  iconName: string
  alt: string
  linkURL: string
}) {
  return (
    <div className={styles.implementation}>
      <a href={linkURL} target="_blank">
        <img
          src={`https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/${iconName}.svg`}
          alt={alt}
        />
      </a>
    </div>
  )
}
