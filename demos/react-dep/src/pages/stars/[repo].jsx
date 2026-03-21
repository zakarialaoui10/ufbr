import { Suspense, useEffect, useState } from "react";

// import { Suspense } from "react";

// const sleep = (ms) => new Promise(res => setTimeout(res, ms));

// const fetchWithDelay = async (url, waitMs) => {
//   await sleep(waitMs);
//   const r = await fetch(url);
//   return r.json();
// };

// const fetchStar = async (repo) => {
//   const data = await fetchWithDelay(
//     `https://api.github.com/repos/solidjs/${repo}`,
//     500
//   );
//   return data.stargazers_count;
// };

// const StarContent = ({ repo }) => {
//   const [stars, setStars] = useState(null);

//   useEffect(() => {
//     fetchStar(repo).then(setStars);
//   }, [repo]);

//   if (!stars) {
//     throw new Promise(resolve => {
//       fetchStar(repo).then(star => {
//         setStars(star);
//         resolve(null);
//       });
//     });
//   }

//   return <span>⭐️ {stars}!</span>;
// };

// export default function App({repo}) {
//   return (
//     <h2>
//       GitHub Stars:{" "}
//       <Suspense fallback={"🌀 Loading..."}>
//         <StarContent repo={repo} />
//       </Suspense>
//     </h2>
//   );
// }

function Data(){
  const [stars, setStars] = useState(null);
  return <p> Bla Bla ...</p>
}


export default function App({repo}){
  return (
    <div>
      <Suspense fallback={"Loading ..."}>
        <section>
          <Data />
        </section>
      </Suspense>
    </div>
  )
}