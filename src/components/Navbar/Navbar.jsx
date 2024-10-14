import React, { useState } from "react";
import ProfileInfo from "../cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

function Navbar() {
  const [searchQuery, setSerachQuery] = useState("");
  const navigate = useNavigate;

  const onLogOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/login");
  };

  const handleSearch = () => {};
  const onClearSearch = () => {
    setSerachQuery("");
  };
  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-xl font-medium text-blackpy-2">Keep Notes</h2>

        <SearchBar
          value={searchQuery}
          onChange={({ target }) => setSerachQuery(target.value)}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
        <ProfileInfo onLogOut={onLogOut} />
      </div>
    </>
  );
}

export default Navbar;
