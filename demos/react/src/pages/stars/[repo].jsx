import { Suspense, useState, useEffect } from "react";

// Helper to wrap a Promise for Suspense
function createResource(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error") throw result;
      return result;
    }
  };
}

// Fetch function
const fetchWithDelay = async (url, waitMs) => {
  await new Promise(res => setTimeout(res, waitMs));
  const r = await fetch(url);
  return r.json();
};

const fetchStar = (repo) =>
  createResource(fetchWithDelay(`https://api.github.com/repos/zikojs/${repo}`, 500).then(data => data.stargazers_count));

// StarContent just reads from resource
const StarContent = ({ resource }) => {
  const stars = resource.read(); // Suspense will handle pending
  return <span>⭐️ {stars}!</span>;
};

// App component
export default function App({ repo }) {
  const [resource, setResource] = useState(() => fetchStar(repo));

  useEffect(() => {
    setResource(fetchStar(repo));
  }, [repo]);

  return (
    <h2>
      GitHub Stars:{" "}
      <Suspense fallback={"🌀 Loading..."}>
        <StarContent resource={resource} />
      </Suspense>
    </h2>
  );
}