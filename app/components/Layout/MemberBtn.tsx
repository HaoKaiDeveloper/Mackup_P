"use client";
import { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

import classes from "./MemberBtn.module.css";

const MemberBtn = () => {
  const { data: session } = useSession();
  const [showPopup, setShowPopup] = useState(false);
  const [popupClass, setPopupClass] = useState(classes.popup_main);

  function closePopup() {
    setPopupClass(`${classes.popup_main} ${classes.popup_close}`);
    setTimeout(() => {
      setShowPopup(false);
      setPopupClass(classes.popup_main);
    }, 500);
  }

  return (
    <>
      {session && session.user ? (
        <div className={classes.member_img} onClick={() => setShowPopup(true)}>
          <Image
            src={session.user.image!}
            alt={session.user.name!}
            width={30}
            height={30}
          />
        </div>
      ) : (
        <button
          type="button"
          className={classes.user_btn}
          onClick={() => setShowPopup(true)}
        >
          <BiSolidUser />
        </button>
      )}
      {showPopup && (
        <div className={classes.popup_container}>
          <div className={classes.popup_backdrop} onClick={closePopup}></div>

          <div className={popupClass}>
            {session && session.user ? (
              <div className={classes.popup_info}>
                <div>
                  <Image
                    src={session.user.image!}
                    alt={session.user.name!}
                    width={70}
                    height={70}
                  />
                </div>
                <p>{session.user.name}</p>
                <p>{session.user.email}</p>
                <button type="button" onClick={() => signOut()}>
                  Sign Out
                </button>
              </div>
            ) : (
              <div className={classes.popup_info}>
                <button type="button" onClick={() => signIn()}>
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MemberBtn;
