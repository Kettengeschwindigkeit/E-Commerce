import { FC, PropsWithChildren } from 'react'
import Header from './header/Header'
// import Meta from './meta/Meta'
import styles from './Layout.module.scss'

// interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <>
      {/* <Meta {...rest} /> */}
      <div className={styles.layout}></div>
      <main>
        <Header />
        <section className={styles.content}>{children}</section>
      </main>
    </>
  )
}

export default Layout
