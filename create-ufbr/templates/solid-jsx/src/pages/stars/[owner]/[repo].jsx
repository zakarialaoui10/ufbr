import GitHubStars from "../../../components/GithubStars.jsx";
import { Layout } from "../../../layouts/Layout.jsx";

export default function App({owner, repo}){
    return (
        <Layout 
            sidebar={[
                { label: "/nested", href: "/nested" },
                { label: "Documentation", href: "/docs" },
                { label: "Examples", href: "/examples" },
                { label: "About", href: "/about" },
            ]}
        >
            <GitHubStars owner={owner} repo={repo} />
            <ul>
                <li><a href='/stars/zikojs/ziko'> zikojs/ziko </a></li>
                <li><a href='/stars/zikojs/ziko'> solidjs/solid </a></li>
                <li><a href='/stars/zakarialaoui10/ufbr'> /stars/zakarialaoui10/ufbr </a></li>
            </ul>
        </Layout>
    )
}