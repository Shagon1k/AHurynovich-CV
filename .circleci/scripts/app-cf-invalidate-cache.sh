# Invalidate CloudFront Distributions (x.com and www.x.com) by IDs
aws cloudfront create-invalidation --distribution-id "$APP_CF_DISTRIBUTION_ID" --paths "/*"
aws cloudfront create-invalidation --distribution-id "$APP_CF_DISTRIBUTION_ID_WWW" --paths "/*"
