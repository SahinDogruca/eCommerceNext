import sanityClient, { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Sanity.io istemcisini oluştur
export const client = createClient({
  projectId: "jz9atbq0",
  dataset: "production",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: "2021-03-25",
});

// Görüntü URL'sini oluşturucuyu yapılandır
const builder = imageUrlBuilder(client);

// Görüntü URL'sini oluşturacak fonksiyon
export const urlFor = (source) => builder.image(source);
