import React from "react";

const Comment = ({ author, content }) => {
  return (
    <div className="pt-2 border-t border-gray-200 comment">
      <h4 className="text-sm font-bold text-gray-700">{author}</h4>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  );
};

export default Comment;
