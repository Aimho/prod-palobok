import React from "react";
import { Link } from "react-router-dom";

import useRouter from "../hooks/useRouter";

import * as S from "./style";

interface SnbProps {
  list: {
    label: string;
    link: string;
  }[];
}

const Snb = (props: SnbProps) => {
  const { params } = useRouter();

  const Button = () => {
    return (
      <React.Fragment>
        {props.list.map((item, index) => {
          const className = () => {
            if (!params.type || item.link.indexOf(params.type) === -1)
              return "";
            return "active";
          };
          return (
            <Link key={index} to={item.link} className={className()}>
              {item.label}
            </Link>
          );
        })}
      </React.Fragment>
    );
  };

  return (
    <S.Snb>
      <div className="btn-group">
        <Button />
      </div>
    </S.Snb>
  );
};

export { Snb };
