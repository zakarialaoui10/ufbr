import van from "vanjs-core";
import { Await } from 'vanjs-ui'
export default async function App({repo}){
    const {h2, span} = van.tags;
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
    const fetchWithDelay = (url, waitMs) => sleep(waitMs).then(() => fetch(url)).then(r => r.json())
    const fetchStar = () => fetchWithDelay(`https://api.github.com/repos/vanjs-org/${repo}`, 500)
                            .then(data => data.stargazers_count)
    const data = van.state(fetchStar())
    return h2(
      "GitHub Stars: ",
      Await({
        value: data.val, container: span,
        Loading: () => "🌀 Loading...",
        Error: () => "🙀 Request failed.",
      }, starNumber => `⭐️ ${starNumber}!`)
    )

}