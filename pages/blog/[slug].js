import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Wrapper from "../../component/Wrapper.js";
import hydrate from "next-mdx-remote/hydrate";
import MDComp from "../../component/MDComp";
import renderToString from "next-mdx-remote/render-to-string";
import Footer from "../../component/Footer.js";
import Head from "next/head";
import { Heading, Text, Flex, Stack } from "@chakra-ui/react";

const Post = ({ source, frontMatter }) => {
  const content = hydrate(source, { components: MDComp });
  return (
    <Wrapper>
      <Head>{frontMatter.title}</Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {frontMatter.title}
          </Heading>
          <div>{content}</div>
        </Flex>
        <Footer />
      </Stack>
    </Wrapper>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  console.log("files: ", files);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", slug + ".mdx"), "utf-8")
    .toString();

  const { content, data } = matter(markdownWithMetadata);
  const mdxSource = await renderToString(content, { components: MDComp });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export default Post;
