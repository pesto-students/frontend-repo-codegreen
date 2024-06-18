import React from "react";
import searchIcon from "../../assets/icons/search.png";
import categoryBullet from "../../assets/images/categoryBullet.png";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "General",
    posts: 12,
    lastContribution: "2 hours ago",
  },
  {
    name: "Planting",
    posts: 5,
    lastContribution: "1 day ago",
  },
  {
    name: "Watering",
    posts: 3,
    lastContribution: "3 days ago",
  },
  {
    name: "Pruning",
    posts: 2,
    lastContribution: "5 days ago",
  },
  {
    name: "Harvesting",
    posts: 1,
    lastContribution: "1 week ago",
  },
];

function Forum() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full pt-[8%] md:pt-[5%] mb-8">
        <form className="md:w-1/4 flex items-center bg-white p-2 rounded-lg">
          <span className="relative w-6 h-6">
            <img src={searchIcon} alt="" className="absolute w-6 h-6" />
          </span>

          <input
            id="search"
            type="text"
            className="w-full border-0 focus:ring-0 text-sm md:text-base"
            placeholder="Search"
            aria-label="Search posts"
          />
        </form>
      </div>

      <div id="categories" className="w-full">
        <table className="table-auto md:table-fixed w-full">
          <thead className="text-gray text-sm md:text-base">
            <tr>
              <th className="w-1/2 py-2">category</th>
              <th className="py-2">posts</th>
              <th className="py-2">last contribution</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category) => {
              return (
                <tr className="text-sm md:text-base">
                  <td className="w-full md:w-[1/2] flex gap-4 items-center font-bold py-4">
                    <img src={categoryBullet} className="w-[30px] md:w-auto"/>
                    <Link to={`/discuss/${category.name}`}> {category.name} </Link>
                  </td>
                  <td>{category.posts}</td>
                  <td>{category.lastContribution}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Forum;
