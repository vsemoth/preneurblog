import Link from 'next/link'
import styles from '../../styles/Posts.module.css'

export const getStaticProps = async () => {

    const res = await fetch('http://127.0.0.1:8000/api/api-post')
    const data = await res.json();

    return {
        props: { posts: data }
    }

}

const Posts = ({ posts }) => {
    return (
        <div>
            <h1>All Posts</h1>
            {posts.map(post => (
                <Link href={'/posts/' + post.slug} key={post.slug}>
                    <a className={styles.single}>
                        <h3>{ post.post_title }</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
 
export default Posts;