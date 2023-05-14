import { request, gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query Myquery {
        
            postsConnection {
              edges {
                node {
                  author {
                    bio
                    name
                    id
                    photo{
                        url
                    }
                  }
                  createdAt
                  slug
                  title
                  excerpt
                  featuredImage {
                    url
                  }
                  categories {
                    name
                    slug
                  }
                }
              }
            }
          }
          
    
    
    `
    const results = await request(graphqlAPI, query);
    

    return results.postsConnection.edges;
};

export const getRecentPost = async () => {
    const query = gql`
    

    
    
    `
}