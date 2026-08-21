#!/bin/bash
# Auto-deploy for onlinepokerwebsites
# Commits any new/changed files (e.g. the daily news articles) and pushes to GitHub,
# which triggers a Vercel deployment. Runs on your Mac (network + GitHub credentials),
# so it works where the in-app scheduled task cannot push. It also clears any stale
# git lock left by an interrupted operation, so lock errors stop recurring.

REPO="/Users/cg/Documents/Claude/Projects/General Websites/onlinepokerwebsites"
LOG="$REPO/scripts/auto-deploy.log"

cd "$REPO" || { echo "$(date) — repo not found" >> "$LOG"; exit 1; }

# Remove any stale git locks from an interrupted operation
find .git -name "*.lock" -delete 2>/dev/null

{
  echo "----- $(date) -----"
  git add -A
  if git diff --cached --quiet; then
    echo "No changes to commit."
  else
    git commit -m "Automated: publish daily poker news ($(date +%F))"
    echo "Committed."
  fi
  git push origin main && echo "Pushed to origin/main." || echo "Push failed — check credentials."
} >> "$LOG" 2>&1
