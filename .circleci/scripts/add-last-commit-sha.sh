# Get the last commit SHA
LAST_COMMIT_SHA=$(git rev-parse HEAD)
# Update index.html with the commit SHA as a comment
sed -i "s/<!--LAST_COMMIT_SHA-->/<!-- Last Commit SHA: $LAST_COMMIT_SHA -->/" ../../dist/index.html
