import styles from "./Post.module.css";

export default function Post({ post }) {
  console.log(post);
  return <div className={styles.Post}>Post</div>;
}
