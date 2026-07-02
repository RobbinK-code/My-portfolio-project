import json
import time
import requests
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows React to fetch data from this API

GITHUB_USERNAME = "RobbinK-code"
CACHE_TTL_SECONDS = 900  # 15 minutes

_cache = {"data": None, "timestamp": 0}


def load_featured():
    """Manual allowlist of repo names + optional title/description/tags overrides."""
    with open("data/featured.json", "r") as f:
        return json.load(f)


def fetch_repo_from_github(repo_name):
    """Fetch a single repo's live metadata from the GitHub API."""
    resp = requests.get(
        f"https://api.github.com/repos/{GITHUB_USERNAME}/{repo_name}",
        headers={"Accept": "application/vnd.github+json"},
        timeout=5,
    )
    resp.raise_for_status()
    return resp.json()


def build_projects():
    featured = load_featured()
    projects = []

    for entry in featured:
        repo_name = entry["repo"]
        try:
            repo = fetch_repo_from_github(repo_name)
            live_description = repo.get("description")
            language = repo.get("language")
            repo_link = repo.get("html_url", f"https://github.com/{GITHUB_USERNAME}/{repo_name}")
            homepage = repo.get("homepage") or ""
            stars = repo.get("stargazers_count", 0)
            updated_at = repo.get("updated_at")
        except requests.RequestException:
            # GitHub unreachable or rate-limited: fall back to whatever the
            # manual entry has, so the page still renders something.
            live_description = None
            language = None
            repo_link = f"https://github.com/{GITHUB_USERNAME}/{repo_name}"
            homepage = ""
            stars = None
            updated_at = None

        projects.append({
            "id": repo_name,
            "title": entry.get("title", repo_name),
            "description": entry.get("description") or live_description or "",
            "tags": entry.get("tags") or ([language] if language else []),
            "liveLink": entry.get("liveLink") or homepage,
            "repoLink": repo_link,
            "stars": stars,
            "updatedAt": updated_at,
        })

    return projects


@app.route('/api/projects', methods=['GET'])
def get_projects():
    now = time.time()
    if _cache["data"] is not None and (now - _cache["timestamp"]) < CACHE_TTL_SECONDS:
        return jsonify(_cache["data"])

    projects = build_projects()
    _cache["data"] = projects
    _cache["timestamp"] = now
    return jsonify(projects)


@app.route('/api/blog', methods=['GET'])
def get_blog_posts():
    with open("data/blog.json", "r") as f:
        posts = json.load(f)
    return jsonify(posts)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
