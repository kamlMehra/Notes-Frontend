import React, { useState } from "react";
import { MdAdd, MdDelete } from "react-icons/md";

function TagsInput({ tags, setTags }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const AddNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      AddNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) =>{
    setTags(tags.filter(tag => tag !== tagToRemove));
  }

  return (
    <div className="flex items-center gap-4 mt-3">
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          {tags.map((tag, index) => {
            <span key={index} className="">
              #{tag}
              <button onClick={() => {handleRemoveTag(tag)}}>
                <MdDelete />
              </button>
            </span>;
          })}
        </div>
      )}

      <input
        type="text"
        className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
        placeholder="Enter tags"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className="w-8 h-8 flex items-center justify-center rounded border border-blue-700 hover:bg-blue-700"
        onClick={AddNewTag()}
      >
        <MdAdd className="text-2xl text-blue-700 hover:text-white" />
      </button>
    </div>
  );
}

export default TagsInput;
