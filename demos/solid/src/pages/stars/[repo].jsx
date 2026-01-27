import { createResource, Suspense } from "solid-js";
import { ErrorBoundary } from "solid-js/web";

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

const fetchWithDelay = async (url, waitMs) => {
  await sleep(waitMs);
  const r = await fetch(url);
  return r.json();
};

const fetchStar = async (repo) => {
  const data = await fetchWithDelay(
    `https://api.github.com/repos/solidjs/${repo}`,
    500
  );
  return data.stargazers_count;
};

export default function App({repo}) {
  const [stars] = createResource(
    () => repo,
    fetchStar
  );

  return (
    <h2>
      GitHub Stars:{" "}
      <ErrorBoundary fallback={() => "🙀 Request failed."}>
        <Suspense fallback={"🌀 Loading..."}>
          ⭐️ {stars()}!
        </Suspense>
      </ErrorBoundary>
    </h2>
  );
}
