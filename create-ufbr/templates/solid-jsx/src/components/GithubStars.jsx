import { createResource, Suspense } from "solid-js";
import { ErrorBoundary } from "solid-js/web";

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const fetchWithDelay = async (url, waitMs = 0) => {
  if (waitMs) await sleep(waitMs);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
};

const fetchStars = async ({ owner, repo }) => {
  const data = await fetchWithDelay(
    `https://api.github.com/repos/${owner}/${repo}`,
    500
  );

  return data.stargazers_count;
};

export default function GitHubStars({owner, repo}) {
  const [stars] = createResource(
    () => ({
      owner,
      repo,
    }),
    fetchStars
  );

  return (
    <ErrorBoundary fallback={() => "🙀 Unable to load repository information."}>
      <Suspense fallback="🌀 Loading GitHub repository...">
        <p>
          <strong><a href={`https://github.com/${owner}/${repo}`}>{owner}/{repo}</a></strong> has{" "}
          <strong>{stars()}</strong> GitHub stars ⭐
        </p>
      </Suspense>
    </ErrorBoundary>
  );
}