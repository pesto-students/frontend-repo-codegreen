import React from "react";
import searchIcon from "../assets/icons/search.png";

function Discuss() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full pt-[8%] md:pt-[5%]">
        <form className="w-1/4 flex items-center bg-white p-2 rounded-lg">
          {/* <label htmlFor="search" className="flex items-center gap-1 bg-white p-2 rounded-lg"> */}
          <span className="relative w-6 h-6"><img src={searchIcon} alt="" className="absolute w-6 h-6"/></span>
          
          <input
            id="search"
            type="text"
            className="w-full border-0 focus:ring-0"
            placeholder="Search"
            aria-label="Search posts"
          />
          
        </form>
      </div>

      <div id="categories" className="w-full">
        <table>
          <thead className="w-full">
            <tr className="w-1/3">category</tr>
            <tr className="w-1/3">posts</tr>
            <tr className="w-1/3">last contribution</tr>
          </thead>

          <tbody>
            <tr>
              <td>General</td>
              <td>12</td>
              <td>2 hours ago</td>
            </tr>
            <tr>
              <td>Planting</td>
              <td>5</td>
              <td>1 day ago</td>
            </tr>
            <tr>
              <td>Watering</td>
              <td>3</td>
              <td>3 days ago</td>
            </tr>
            <tr>
              <td>Pruning</td>
              <td>2</td>
              <td>5 days ago</td>
            </tr>
            <tr>
              <td>Harvesting</td>
              <td>1</td>
              <td>1 week ago</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default Discuss;
