import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({ post }) {

  return (
    <>
    <Head>
      <title>Preneur Blog | Home</title>
      <meta name="keywords" content="self improvement" />
    </Head>
      <span className={styles.text}>
        <h1>Preneur Code</h1>
          <em>Growing better by the day</em>
      </span>
        <div className={styles.container}>
          <h1 className={styles.title}>{ post.post_title }</h1>
          <h2>{ post.published }</h2>
          <p>
            <div dangerouslySetInnerHTML={{ __html: post.post_content }}></div>
          </p>
        </div>
      <Link href="/posts">
        <a className={styles.btn}>See Posts Listing</a>
      </Link>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://ekhephinifm.co.za/blogserver/public/api/api-post`)
  const data = await res.json() 

  let blob = data

  const post = blob[blob.length - 1]

    return {
        props: { 
          post
        }
    }

}
