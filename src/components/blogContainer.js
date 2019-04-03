import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import BlogPost from '../components/blogPost';
import { Container } from '../components/commonStyles';

const BlogWrapper = styled.div`
  padding: 2rem 0;
  h2 {
    margin-bottom: 2rem;
    display: flex;
    a {
      margin-left: auto;
      font-size: 1rem;
      align-self: center;
    }
  }
  h3 {
    margin-top: 2rem;
  }
`;

const BlogContainer = ({ posts, sectionTitle }) => {
  return (
    <BlogWrapper>
      <Container>
        {sectionTitle ? (
          <h2>
            {sectionTitle}
            <Link to="/blog">View all articles</Link>
          </h2>
        ) : null}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <BlogPost
              key={node.fields.slug}
              title={title}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
            />
          );
        })}
        {sectionTitle ? (
          <h3>
            <Link to="/blog">View all articles</Link>
          </h3>
        ) : null}
      </Container>
    </BlogWrapper>
  );
};

BlogContainer.propTypes = {
  posts: PropTypes.any,
};

export default BlogContainer;
