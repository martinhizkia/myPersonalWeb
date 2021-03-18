import Link from "next/link";
import fs from "fs";
import path from "path";
import Wrapper from "../component/Wrapper.js";
import {
  Heading,
  Container,
  Divider,
  Box,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import matter from "gray-matter";

const Blog = ({ posts }) => {
  const { colorMode } = useColorMode();
  return (
    <Wrapper>
      <Container maxWidth="700px" align="flex-start" justify="flex-start">
        <Heading letterSpacing="tight" mb={3} as="h1" size="2xl">
          My Blogs
        </Heading>
        <Text color={colorMode == "light" ? "gray.900" : "white"}>
          Welcome to my Blog. I just write what I like, hope that's interesting
          enough for you to follow and read :).
        </Text>
        <Divider orientation="horizontal" mb={3} mt={3} />
        <div>
          {posts.map((frontmatter, index) => {
            return (
              <div key={frontmatter.slug}>
                <Link href={"/blog/" + frontmatter.slug}>
                  <a>
                    <Heading
                      size="lg"
                      color={colorMode == "light" ? "gray.900" : "white"}
                    >
                      {frontmatter.slug}{" "}
                    </Heading>
                  </a>
                </Link>
                <Text color={colorMode == "light" ? "gray.900" : "white"}>
                  {frontmatter.description}
                </Text>
                <Box mb={4} />
              </div>
            );
          })}
        </div>
      </Container>
    </Wrapper>
  );
};

const getAllFrontMatter = () => {
  const files = fs.readdirSync("posts");
  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(path.join("posts", postSlug), "utf8");
    const { data } = matter(source);
    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
};

export const getStaticProps = async () => {
  const posts = getAllFrontMatter();
  return { props: { posts } };
};

export default Blog;
