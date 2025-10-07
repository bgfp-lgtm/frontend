import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import qs from "qs";

const allBlogsQuery = () =>
  qs.stringify(
    {
      populate: {
        image: {
          fields: ["url", "name"],
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

export async function getBlogs() {
  const path = "/api/blogs";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);

  url.search = allBlogsQuery();
  return await fetchAPI(url.href, { method: "GET" });
}

const blogBySlugQuery = (slug: string) =>
  qs.stringify(
    {
      filters: { slug: { $eq: slug } },
      populate: {
        image: {
          fields: ["url", "name"],
        },
      },
      pagination: { pageSize: 1 },
    },
    { encodeValuesOnly: true }
  );

export async function getBlogBySlug(slug: string) {
  const path = "/api/blogs";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);

  url.search = blogBySlugQuery(slug);
  return await fetchAPI(url.href, { method: "GET" });
}

const projectQuery = () =>
  qs.stringify(
    {
      populate: {
        image: {
          fields: ["url", "name"],
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

export async function getProject() {
  const path = "/api/projects";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);

  url.search = projectQuery();
  return await fetchAPI(url.href, { method: "GET" });
}
