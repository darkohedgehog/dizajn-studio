import { createClient, groq } from "next-sanity";

export async function getProjects() {
    const client = createClient({
      projectId: "odnncdrb",
      dataset: 'production',
      apiVersion: '2023-11-16',
      useCdn: true,
    });
    
    return client.fetch(
      groq `*[_type in ["Post", "Author", "Category"]] {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`
    );
  }
  
