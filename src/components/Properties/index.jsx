import React, { useEffect, useState } from "react";
import { Wrapper } from "./styled";
import HouseCard from "../HouseCard";
import { useLocation } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, [search]);

  return (
    <Wrapper>
      {data.map((value) => {
        return <HouseCard key={value.id} data={value} />;
      })}
    </Wrapper>
  );
};

export default Properties;
