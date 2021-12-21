import styles from '../../styles/PostView.module.css'
import Link from 'next/link'

export const getStaticPaths = async () => {
    const res = await fetch(`https://preneurserver.herokuapp.com/api/api-post`);
    const data = await res.json();

    const paths = data.map(post => {
        return {
            params: { slug: post.slug.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const slug = context.params.slug;
    const res = await fetch(`https://preneurserver.herokuapp.com/api/api-post/${slug}`);
    const data = await res.json();

    return {
        props: { post: data }
    }

}

const Post = ({ post }) => {
    return (
        <div>
         <h1>{ post.post_title }</h1>
         <img src={ post.image_url } />         
         <p>
             { post.created_at }
         </p>
         <p>
            <div dangerouslySetInnerHTML={{ __html: post.post_content }}></div>
         </p>
      <Link href="/posts">
        <a className={styles.btn}>Back to Posts List</a>
      </Link>
        </div>
    );
}
 
export default Post;