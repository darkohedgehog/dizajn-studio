import "server-only";
const { draftMode } = require("next/headers");
const { client } = require("@/sanity/lib/client");

const DEFAULT_PARAMS = {};
const DEFAULT_TAGS = [];

exports.token = process.env.SANITY_API_READ_TOKEN;

async function sanityFetch({ query, params = DEFAULT_PARAMS, tags = DEFAULT_TAGS }) {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !exports.token) {
    throw new Error("The `SANITY_API_READ_TOKEN` environment variable is required.");
  }
  const isDevelopment = process.env.NODE_ENV === "development";

  return client
    .withConfig({ useCdn: false })
    .fetch(query, params, {
      cache: isDevelopment || isDraftMode ? undefined : "force-cache",
      ...(isDraftMode && {
        token: exports.token,
        perspective: "previewDrafts",
      }),
      next: {
        ...(isDraftMode && { revalidate: 30 }),
        tags,
      },
    });
}

module.exports = {
  token: exports.token,
  sanityFetch,
};
