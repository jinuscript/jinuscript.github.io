import { fetchAllIssues } from "@/lib";
import { Post } from "@/app/(home)/_ui";
import styles from "./HomePage.module.css";

export default async function HomePage() {
  const issues = await fetchAllIssues();

  return (
    <main className={styles.HomePage}>
      {issues.map((issue) => (
        <Post key={issue.id} post={issue} />
      ))}
    </main>
  );
}
