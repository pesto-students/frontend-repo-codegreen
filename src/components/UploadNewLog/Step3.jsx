import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faWater,
  faLeaf,
  faCut,
  faRecycle,
  faBug,
} from "@fortawesome/free-solid-svg-icons";
import closeIcon from "../../assets/icons/close.png";
import { useUser } from "../../store/UserContext";
import Button from "../Button/Button";

function Step3() {
  const { setIsModalOpen } = useUser();

  const tips = [
    {
      title: "Light and temperature",
      desc: "The flame tree thrives in a sunny, wind-protected location during the growing season, as long as night temperatures remain above 50°F (10°C). It does not tolerate drastic temperature drops. From autumn to spring, the tree should be kept indoors or in a heated conservatory with temperatures between 50°F (10°C) and 68°F (20°C).",
      icon: faSun,
    },
    {
      title: "Watering",
      desc: "In summer, the flame tree requires frequent watering. Water the tree when the soil becomes dry, but be careful not to overwater. It tolerates short periods of drought. During winter, when the leaves have fallen, the tree needs much less water. Avoid using very calcareous water, as the tree prefers a pH value between 4.5 and 7.5.",
      icon: faWater,
    },
    {
      title: "Fertilizing",
      desc: "Apply solid organic fertilizer every four weeks or use a liquid fertilizer weekly during the growing season. A balanced N-P-K ratio fertilizer will promote healthy growth and abundant flowering.",
      icon: faLeaf,
    },
    {
      title: "Pruning and wiring",
      desc: "Flame trees can handle hard pruning, which should be done in early spring if needed. Consistent trimming in summer helps control strong growth and develop the umbrella-shaped crown. During winter, remove excess shoots growing in unwanted positions.",
      icon: faCut,
    },
    {
      title: "Repotting",
      desc: "Repot the flame tree, or Delonix bonsai, every or every other year using a well-draining soil mix. Normal root pruning is tolerated; you can remove up to one third of the root mass. Cut off dead roots and strong roots circling at the bottom. Add some Kanuma to the soil mix to maintain a slightly acidic environment.",
      icon: faRecycle,
    },
    {
      title: "Pests and diseases",
      desc: "The flame tree may be affected by pests like aphids, scale, and spider mites. Regularly inspect the tree and use treatments such as insecticidal soap or neem oil. Ensure good air circulation to prevent fungal diseases. Prune affected areas and treat with fungicide if necessary.",
      icon: faBug,
    },
  ];

  return (
    <div className="flex flex-col bg-light-green gap-6 p-0">
      <h1 className="font-semibold text-left text-3xl mt-0 md:text-5xl w-full">
        Great going
      </h1>
      <div className="text-lg">Here are some tips to help with your tree journey</div>
      <div className="flex flex-col rounded-xl w-full h-full lg:grid grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div key={index} className="bg-beige flex flex-col rounded-tl-4xl rounded-br-4xl p-6 gap-4">
            <div>
              <FontAwesomeIcon icon={tip.icon} size="2x" />
            </div>
            <div className="text-lg font-semibold">{tip.title}</div>
            <div className="text-sm">{tip.desc}</div>
          </div>
        ))}
      </div>
      <Button className="lg:w-[30%] place-self-end"  text="Got it" onClick={() => {setIsModalOpen(false)}} />
    </div>
  );
}

export default Step3;
