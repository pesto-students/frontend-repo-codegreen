import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { useUser } from "../../store/UserContext";
import api from "../../hooks/axiosConfig"

function Coupon({ coupon, user }) {
  const [showCouponCode, setShowCouponCode] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const { setUser } = useUser();
 
  const handleCopyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedToClipboard(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (copiedToClipboard) setCopiedToClipboard(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [copiedToClipboard]);

  useEffect(() => {
    
    const editUserPoints = async () => {
      try {
        const response = await api.patch(
          `api/user/editUser?reduceUserPoints=true`, { points: coupon.coinsNeeded }
        );
        const userData = response.data;
        setUser(userData);
        
      } catch (error) {
        console.log(error.message);
      }
    }
    if( showCouponCode) editUserPoints();
  }, [showCouponCode]);

  const handleRedeemClick = () => {
    setShowCouponCode(true);
  }

  return (
    <div className={`bg-light-green border-sold rounded-tr-4xl rounded-bl-4xl flex flex-col lg:flex-row gap-4 pb-20 p-6 lg:pb-6 mb-6 md:mb-0 items-center relative ${user.points < coupon.coinsNeeded && 'grayscale'}`}>
      <div className="flex flex-col justify-start items-center gap-3 w-full lg:w-1/2">
      <a title="Visit website" href={coupon.url} target="_blank" rel="noreferrer">
        <img
          src={coupon.image}
          alt={coupon.title}
          className="rounded-md h-[200px] "
        />
        </a>
        <h2 className="text-lg font-bold">{coupon.title}</h2>
      </div>
      <div className="flex flex-col gap-2 w-full lg:w-1/2">
        <p className="w-55 overflow-ellipsis text-sm">
          {coupon.description}
        </p>
        <span className="font-bold text-base">{coupon.coinsNeeded} coins</span>

        {user.points >= coupon.coinsNeeded && (showCouponCode ? (
          <div className="w-full max-w-[16rem]">
            <div className="relative">
              <span
                type="text"
                className="col-span-6 border-2 border-orange text-sm rounded-lg block w-full px-2.5 py-4"
              >
                {" "}
                {coupon.code}{" "}
              </span>
              <button
                className="absolute end-2.5 top-1/2 -translate-y-1/2 py-2 px-2.5 inline-flex items-center justify-center bg-white"
                onClick={() => handleCopyToClipboard(coupon.code)}
              >
                {copiedToClipboard ? (
                  <span id="success-icon" className="inline-flex items-center">
                    <svg
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <svg
                      className="w-3 h-3 me-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="darkest-green"
                      viewBox="0 0 18 20"
                    >
                      <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                    </svg>
                    <span className="text-xs font-semibold">Copy</span>
                  </span>
                )}
              </button>
            </div>
          </div>
        ) : (
          <Button
            text="Redeem"
            className={"text-base p-4 md:w-3/5 md:max-lg:w-4/5 justify-self-end"}
            onClick={handleRedeemClick}
          />
        ))}
      </div>
      <a className="absolute bottom-5 right-5" title="Visit website" href={coupon.url} target="_blank" rel="noreferrer">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
          />
        </svg>
      </a>
    </div>
  );
}

export default Coupon;
