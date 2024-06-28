import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { animatePageIn, animatePageOut } from "../utils/Animation";

const TransitionLink = ({ href, label }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    animatePageOut(() => {
      router.push(href);
    });
  };

  useEffect(() => {
    animatePageIn();
  }, [router.pathname]);

  return (
    <a href={href} onClick={handleClick}>
      {label}
    </a>
  );
};

export default TransitionLink;
