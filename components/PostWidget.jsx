import React, { useEffect, useState } from "react";

import moment from "moment";
import Link from "next/link";
import { getRecentPost, getSimilarPost } from "@/services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPost, setRelatedPost] = useState([]);

  useEffect(() => {
    return () => {
      if (slug) {
        getSimilarPost(categories.slug).then((result) =>
          setRelatedPost(result)
        )
      } else {
        getRecentPost().then((result) => setRelatedPost(result));
      }
    };
  }, [slug]);

  console.log(relatedPost);

  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8 ">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          {slug ? "Entradas relacionadass" : "Entradas Recientes"}
        </h3>
        {relatedPost.map((post) => (
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <img
                alt={post.title}
                height="60px"
                width="60px"
                className="align-middle rounded-full"
                src={post.featuredImage.url}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
